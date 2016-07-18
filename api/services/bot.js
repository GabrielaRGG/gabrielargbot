var TelegramBot=require('node-telegram-bot-api');
var token='269024751:AAFa4nubbKjiB0kXXoK2Q4IbtHP88cJmdM0';


var bot= new TelegramBot(
token,{
polling:true
});

bot.getMe().then(function(me){
console.log('Hi my name is %s!',me.username);
});

//se conecta con telegram y envia el token y obtiene el nombre del usuario
//expresiones regulares
bot.onText(/^\/texto$/,function(msg,match){
var name=match[1];
console.log(msg);
bot.sendMessage(msg.chat.id,`Todos pueden superar sus circunstancias y alcanzar el éxito si tienen dedicación y pasión por lo que hacen.`).then(function(){
console.log(`Mostrando texto`);
});
});
bot.onText(/^\/foto(.+)$/,function(msg,match){
var info=match[1];
  var chatId = msg.chat.id;
  var o=info+"";
if(o==' paisaje'){
       var photo = './assets/images/pep.jpg';
  bot.sendPhoto(chatId, photo, {caption: 'Foto paisaje'});
console.log('Mostrando foto');
console.log(`Saludando a ${info} si entra`);
}else if(o==' omero'){
 var photo = './assets/images/omero.png';
  bot.sendPhoto(chatId, photo, {caption: 'Foto omero'});
console.log('Mostrando foto');
console.log(`Saludando a ${info}`);
}else {
    bot.sendMessage(msg.chat.id,`Los comandos son /foto omero o /foto paisaje`).then(function(){
});
}
});

bot.onText(/^\/ubicacion(.+)$/,function(msg,match){
var info=match[1];
  var chatId = msg.chat.id;
  var o=info+"";
  if(o==' utec'){
  bot.sendLocation(chatId, 20.0752161,-98.4064796);
console.log('Mostrando ubicacion');
  }
});
bot.onText(/^\/audio$/,function(msg,match){
var info=match[1];
  var chatId = msg.chat.id;
  var o=info+"";
  
  var audio = './assets/audio/audioM.mp3';
  bot.sendAudio(chatId,audio);
console.log('Mostrando audio');
  
});
/*
bot.onText(/^\/poto$/,function(msg2,match){
   // var chatId=msg.chat.id;
    var photo='/assets/images/pep.jpg';
    bot.sendPhoto(chatId,photo,{});
     bot.sendPhoto({chatId:msg.chat.id,caption:'Lovely kittens',photo:'./assets/images/pep.jpg',}).then(function (data) {
   console.log('Hola probando foto');  
 });//
 bot.sendPhoto({
  chat_id: msg2.chat.id,
  caption: 'Telegram Logo',
  files: {
    photo: './assets/images/pep.jpg'
  }
}, function (err, msg) {
  console.log(err);
  console.log(msg);
});
});
*/