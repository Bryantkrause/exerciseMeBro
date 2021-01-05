module.exports = (model, Schema) => {
    const ExerciseType = new Schema({
      name: String,
      exercise: { type: Schema.Types.ObjectId, ref: 'Exercise' },
    }, { timestamps: { createdAt: 'birthday', updatedAt: 'pcChange' } })
  
    return model('ExerciseType', ExerciseType)
  }