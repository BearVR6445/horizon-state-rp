import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    title: v.string(),
    content: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }
    
    return await ctx.db.insert("advertisements", {
      title: args.title,
      content: args.content,
      author: identity.subject as any,
      createdAt: Date.now(),
    });
  },
});

export const getLatest = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("advertisements")
      .withIndex("by_creation")
      .order("desc")
      .first();
  },
});
