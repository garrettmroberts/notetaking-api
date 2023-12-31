import mongoose, { Schema } from "mongoose";

const PageSchema = new Schema({
  content: String, // markdown
  meta: {
    tags: [{ type: String }]
  }
});

const Page = mongoose.models.Page || mongoose.model("Page", PageSchema);

export default Page;
