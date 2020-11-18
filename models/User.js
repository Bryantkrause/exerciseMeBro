module.exports = (model, Schema) => {
    const User = new Schema({
      name: String,
      exercise: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }]
    }, { timestamps: { createdAt: 'birthday', updatedAt: 'userChange' } })
  
    return model('User', User)
  }