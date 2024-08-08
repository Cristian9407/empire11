
exports.run = {
  usage: ['bing'],
  use: 'query',
  category: 'ai',
  async: async (m, {
    client,
    text,
    args,
    isPrefix,
    command,
    Func
  }) => {
    try {


      if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'apa itu kucing'), m)
      client.sendReact(m.chat, '🕒', m.key)
      const json = await Func.fetchJson(`https://api.betabotz.eu.org/api/search/bing-chat?text=${text}&apikey=beta-Ibrahim1209`)
      if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)
      client.reply(m.chat, json.message, m)

    } catch (e) {
      return client.reply(m.chat, global.status.error, m)
    }
  },
  error: false,
  limit: true,
  verified: false,
  premium: false,
}

