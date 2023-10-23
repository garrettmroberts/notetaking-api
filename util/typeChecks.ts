const isBinder = (obj: Binder) => {
  return obj.title && obj.meta.color;
};

export { isBinder };
