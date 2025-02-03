const models = {
   users: Object.freeze({
      afk: -1,
      afkReason: '',
      afkObj: {},
      banned: false,
      ban_temporary: 0,
      ban_times: 0,
      premium: false,
      expired: 0,
      lastseen: 0,
      hit: 0,
      warning: 0,
      example: []
   }),
   groups: Object.freeze({
      activity: 0,
      antidelete: false,
      antilink: false,
      antivirtex: false,
      filter: true,
      left: true,
      localonly: false,
      mute: false,
      viewonce: false,
      autosticker: false,
      member: {},
      text_left: '',
      text_welcome: '',
      welcome: true,
      expired: 0,
      stay: false
   }),
   chats: Object.freeze({
      chat: 0,
      lastchat: 0,
      lastseen: 0
   }),
   setting: Object.freeze({
      autodownload: true,
      antispam: false,
      debug: false,
      error: [],
      hidden: [],
      pluginDisable: [],
      receiver: [],
      groupmode: false,
      sk_pack: '',
      sk_author: 'ᴇᴍᴘɪʀᴇ ʙᴏᴛ',
      self: false,
      noprefix: false,
      multiprefix: true,
      prefix: ['.', '#', '!', '/'],
      toxic: ["puta", "verga", "mamaverga", "pelaverga", "hijueputa", "mmverga", "chucha", "hijodeperra", "hijadeperra", "hijodeputa", "mmguevo", "puto", "pelaguevo", "mmhuevo", "mamahuevo", "mamaguevo", "mmverg", "mmver", "hijoputa", "hijaputa", "tonto", "tonta", "caraculo", "caradeculo", "bobo", "boba", "pendejo", "pendeja",  "bruto", "bruta"],
      online: true,
      onlyprefix: '+',
      owners: ['593985807958'],
      lastReset: new Date * 1,
      msg: 'Hola +tag 🪸\nSoy un sistema automatizado (WhatsApp Bot) que puede ayudar a hacer algo, buscar y obtener datos / información solo por WhatsApp.\n\n◦ *Database* : +db\n◦ *Library* : Baileys v+version\n◦ *Rest API* :\n◦ *Source* :\n\nSi encuentra un error o desea actualizar el plan premium, comuníquese con el propietario.',
      style: 4,
      cover: 'https://telegra.ph/file/6fba2e7bba8b9d81fd6f0.jpg',
      link: 'https://chat.whatsapp.com/Gl0eUl2rkyq4Z06QlxfBSH'
   })
}

module.exports = { models }
