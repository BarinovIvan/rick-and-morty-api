export default class Character {
  constructor(data) {
    this.id = data.id ?? null
    this.name = data.name ?? null
    this.origin = {
      name: data.origin?.name ?? null
    }
    this.species = data.species ?? null
    this.status = data.status ?? null
    this.image = data.image ?? null
    this.info = this.collectionInfo()
  }

  collectionInfo() {
    return [
        { name: 'Имя', value: this.name },
        { name: 'Происхождение', value: this.origin.name },
        { name: 'Статус', value: this.status },
        { name: 'Вид', value: this.species }
      ]
  }
}
