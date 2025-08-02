import { defineTable, defineSchema} from "convex/server";
import {v} from "convex/values";

export default defineSchema ({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    imageUrl: v.string(),
    tokenIdentifier: v.string(), // fixed typo here

    plan: v.union(v.literal("free"), v.literal("pro")),

    projectUsed: v.number(),
    exportThisMonth: v.number(),

    createdAt: v.number(),
    lastActiveAt: v.number(),
    
  }).index("by_token", ["tokenIdentifier"])
  .index("by_email", ["email"])
  .searchIndex("search_name", {searchField: "name"})
  .searchIndex("search_email", {searchField: "email"}),
});
