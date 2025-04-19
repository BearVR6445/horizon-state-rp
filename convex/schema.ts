import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  advertisements: defineTable({
    title: v.string(),
    content: v.string(),
    author: v.id("users"),
    createdAt: v.number(),
  }).index("by_creation", ["createdAt"]),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
