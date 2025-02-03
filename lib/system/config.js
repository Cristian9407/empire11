const { Function: Func, NeoxrApi } = new(require('@neoxr/wb'))
global.Api = new NeoxrApi('https://api.neoxr.my.id/api', process.env.API_KEY)
global.header = `© ᴇᴍᴘɪʀᴇ ʙᴏᴛ v${require('package.json').version}`
global.footer = `ʟɪɢʜᴛᴡᴇɪɢʜᴛ ᴡᴀʙᴏᴛ 🔮`
global.status = Object.freeze({
   invalid: Func.Styles('URL no válida'),
   wrong: Func.Styles('Formato incorrecto.'),
   fail: Func.Styles('No se pueden obtener metadatos'),
   error: Func.Styles('Se produjo un error'),
   errorF: Func.Styles('Lo sentimos, esta función tiene un error.'),
   premium: Func.Styles('Esta función solo para usuarios premium.'),
   auth: Func.Styles('No tienes permiso para usar esta función, pregúntale primero al propietario.'),
   owner: Func.Styles('Este comando solo para el propietario.'),
   group: Func.Styles('Este comando solo funcionará en grupos.'),
   botAdmin: Func.Styles('Este comando funcionará cuando me convierta en administrador.'),
   admin: Func.Styles('Este comando solo para administradores de grupo.'),
   private: Func.Styles('Usar este comando en chat privado.'),
   gameSystem: Func.Styles('Las funciones del juego han sido deshabilitadas.'),
   gameInGroup: Func.Styles('Las funciones del juego no se han activado para este grupo.'),
   gameLevel: Func.Styles('No puedes jugar porque tu nivel ha alcanzado el límite máximo.')
})
