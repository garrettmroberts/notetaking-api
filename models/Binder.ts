import mongoose, { Schema } from "mongoose";

const BinderSchema = new Schema({
  title: String,
  meta: {
    color: String
  },
  folders: [
    { type: Schema.Types.ObjectId, ref: 'Folder' }
  ]
})

const Binder = mongoose.models.user || mongoose.model('Binder', BinderSchema);

export default Binder;