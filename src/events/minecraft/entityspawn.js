const Event = require('../../structures/Event')

module.exports = class extends Event.mEvent {
    constructor(bot, client, ebot) {
        super(bot, client, ebot, {
            name: 'entitySpawn'
        })
    } 
    
    run = (entity) => {
      console.log(entity.name)
      if(!entity.name.toLowerCase() === 'boat') return

      this.bot.mount(entity)

    }
}
