import mongoose, { Schema } from "mongoose";

const FolderSchema = new Schema({
  title: String,
  meta: {
    color: String,
    tags: [{ type: String }]
  },
  pages: [{ type: Schema.Types.ObjectId, ref: "Page" }]
});

const Folder = mongoose.models.Folder || mongoose.model("Folder", FolderSchema);

export default Folder;
