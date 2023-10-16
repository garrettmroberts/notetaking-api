import mongoose, { Schema } from "mongoose";

const FolderSchema = new Schema({
  title: String,
  meta: {
    color: String
  },
  pages: [
    { type: Schema.Types.ObjectId, ref: 'Page' }
  ]
})

const Folder = mongoose.models.Binder || mongoose.model('Binder', FolderSchema);

export default Folder;