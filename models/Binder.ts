import mongoose, { Schema } from "mongoose";

const BinderSchema = new Schema({
  title: String,
  meta: {
    color: String,
    tags: [{ type: String }]
  },
  folders: [{ type: Schema.Types.ObjectId, ref: "Folder" }]
});

const Binder = mongoose.model("Binder", BinderSchema);

export default Binder;
