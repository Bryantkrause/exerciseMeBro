module.exports = (model, Schema) => {
    const Exercise = new Schema({
      name: String,
      weight: Number,
      number: Number,
      user: { type: Schema.Types.ObjectId, ref: 'User' },
    }, { timestamps: { createdAt: 'birthday', updatedAt: 'pcChange' } })
  
    return model('Exercise', Exercise)
  }