const Discord = require('discord.js');
const { url } = require('inspector');
const client = new Discord.Client();
const token = 'Nzg2OTUzNjQwMjQ1ODU0MjUw.X9N5sA.zF_wKUni2-8q_l92HkhT6nnDzKA';
const naver = "https://www.naver.com";
// const img = "https://cdn.discordapp.com/attachments/786952955122286616/787740676803788800/104f9b2f5ee15de4.PNG";
const com = "http://컴시간학생.kr"
const Timetable = require('comcigan-parser');
const { strict } = require('assert');
const timetable = new Timetable()
const week = new Array('일', '월', '화', '수', '목', '금', '토');
const d = new Date();
const a = 0;
const zoom = new Array('https://us02web.zoom.us/j/7118957056?pwd=dVRQbE1IdnFKK2dvQlp1UmJtVENaZz09', 'https://zoom.us/j/4736062751', 'https://zoom.us/j/9467757519', 'https://zoom.us/j/5523718127', 'https://us02web.zoom.us/j/9546996730?pwd=cU1hcWlSWmpGQS9OOEFYK2c1OFNrdz09', 'https://zoom.us/j/9785974688', 'https://zoom.us/j/8717911596', 'https://zoom.us/j/8980834250', 'https://zoom.us/j/8212455526', 'https://zoom.us/j/5351236652')
const str = 'code:1311, code:5845, code:605, code:1109, code:1412, code:1714, code:503, code:101, code:1008, code:5930'
 
client.on('ready', () => {
  console.log('켰다.');
  client.user.setActivity('!명령어,!시간표,!내일시간표', { type: 'PLAYING' })
});



client.on('message', (mes) => {
  
  if(mes.content === '명') {
    mes.channel.send('FE');
  }
  if(mes.content === '!ping') {
    mes.channel.send('pong');
  }
  if(mes.content === '!명령어') {
    mes.channel.send('!ping,!네이버,!내일시간표,!시간표,명');
}
  if(mes.content === '!네이버') {
      mes.channel.send(naver);
  }
  if(mes.content === '!내일시간표') {
    const test = async () => {
    await timetable.init()
    await timetable.setSchool('수원정보과학고등학교')
   
    // 전교 시간표 정보 조회
    const result = await timetable.getTimetable()
    // mes.channel.send(result[1][9][0])
    
    const objStr1 = JSON.stringify(result[1][9][d.getDay()+1])
    .replace(/\[/g, '')
    .replace(/\]/g, '')
    .replace(/\{/g, '')
    .replace(/\}/g, '')
    .replace(/\"/g, '')
    .replace(/\,/g, '\n')
    .replace(/code:1311/g, '줌주소\nhttps://us02web.zoom.us/j/7118957056?pwd=dVRQbE1IdnFKK2dvQlp1UmJtVENaZz09')
    .replace(/code:5845/g, '줌주소\nhttps://zoom.us/j/4736062751')
    .replace(/code:5879/g, '줌주소\nhttps://zoom.us/j/4736062751')
    .replace(/code:605/g, '줌주소\nhttps://zoom.us/j/9467757519')
    .replace(/code:1109/g, '줌주소\nhttps://zoom.us/j/5523718127')
    .replace(/code:1614/g, '줌주소\nhttps://us02web.zoom.us/j/9546996730?pwd=cU1hcWlSWmpGQS9OOEFYK2c1OFNrdz09')
    .replace(/code:1714/g, '줌주소\nhttps://zoom.us/j/9785974688')
    .replace(/code:503/g, '줌주소\nhttps://zoom.us/j/8717911596')
    .replace(/code:101/g, '줌주소\nhttps://zoom.us/j/8980834250')
    .replace(/code:1008/g, '줌주소\nhttps://zoom.us/j/8212455526 ')
    .replace(/code:5930/g, '줌주소\nhttps://zoom.us/j/5351236652')
    .replace(/code:6086/g, '줌주소\nhttps://zoom.us/j/7414780713')
    
    // mes.channel.send(objStr1)
    // 각 교시별 수업 시작/종료 시간 정보 조회
    const time = timetable.getClassTime()
    
    // const objStr2 = JSON.stringify(time)
    // mes.channel.send(objStr2)
    const embed = new Discord.MessageEmbed()
    .setColor('RED')
    .addField(week[d.getDay()+1] + '요일'+ '시간표', objStr1)
    
    
    .addField('컴시간알리미주소',com, true)

    .setFooter('.\n ⎛⎝⎛° ͜ʖ°⎞⎠⎞⎛⎝⎛° ͜ʖ°⎞⎠⎞⎛⎝⎛° ͜ʖ°⎞⎠⎞  ')
    
    
    
     mes.channel.send(embed)
  }
   test()
  
  
    
  }
  if(mes.content === '!시간표' && d.getDay() === 1) {
    const test = async () => {
    await timetable.init()
    await timetable.setSchool('수원정보과학고등학교')
   
    // 전교 시간표 정보 조회
    const result = await timetable.getTimetable()
    // mes.channel.send(result[1][9][0])
    
    const objStr1 = JSON.stringify(result[1][9][0])
    .replace(/\[/g, '')
    .replace(/\]/g, '')
    .replace(/\{/g, '')
    .replace(/\}/g, '')
    .replace(/\"/g, '')
    .replace(/\,/g, '\n')
    .replace(/code:1311/g, '줌주소\nhttps://us02web.zoom.us/j/7118957056?pwd=dVRQbE1IdnFKK2dvQlp1UmJtVENaZz09')
    .replace(/code:5845/g, '줌주소\nhttps://zoom.us/j/4736062751')
    .replace(/code:5879/g, '줌주소\nhttps://zoom.us/j/4736062751')
    .replace(/code:605/g, '줌주소\nhttps://zoom.us/j/9467757519')
    .replace(/code:1109/g, '줌주소\nhttps://zoom.us/j/5523718127')
    .replace(/code:1614/g, '줌주소\nhttps://us02web.zoom.us/j/9546996730?pwd=cU1hcWlSWmpGQS9OOEFYK2c1OFNrdz09')
    .replace(/code:1714/g, '줌주소\nhttps://zoom.us/j/9785974688')
    .replace(/code:503/g, '줌주소\nhttps://zoom.us/j/8717911596')
    .replace(/code:101/g, '줌주소\nhttps://zoom.us/j/8980834250')
    .replace(/code:1008/g, '줌주소\nhttps://zoom.us/j/8212455526 ')
    .replace(/code:5930/g, '줌주소\nhttps://zoom.us/j/5351236652')
    .replace(/code:6086/g, '줌주소\nhttps://zoom.us/j/7414780713')
    // mes.channel.send(objStr1)
    // 각 교시별 수업 시작/종료 시간 정보 조회
    const time = timetable.getClassTime()
    
    // const objStr2 = JSON.stringify(time)
    // mes.channel.send(objStr2)
    const embed = new Discord.MessageEmbed()
    .setColor('RED')
    .addField(week[d.getDay()] + '요일'+ '시간표', objStr1)
    
    
    .addField('컴시간알리미주소',com, true)

    .setFooter('.\n ⎛⎝⎛° ͜ʖ°⎞⎠⎞⎛⎝⎛° ͜ʖ°⎞⎠⎞⎛⎝⎛° ͜ʖ°⎞⎠⎞  ')
    
    
    
     mes.channel.send(embed)
  }
   test()
  
  
    
  }
  if(mes.content === '!시간표' && d.getDay() === 2) {
    const test = async () => {
    await timetable.init()
    await timetable.setSchool('수원정보과학고등학교')
   
    // 전교 시간표 정보 조회
    const result = await timetable.getTimetable()
    // mes.channel.send(result[1][9][0])
    
    const objStr1 = JSON.stringify(result[1][9][1])
    .replace(/\[/g, '')
    .replace(/\]/g, '')
    .replace(/\{/g, '')
    .replace(/\}/g, '')
    .replace(/\"/g, '')
    .replace(/\,/g, '\n')
    .replace(/code:1311/g, '줌주소\nhttps://us02web.zoom.us/j/7118957056?pwd=dVRQbE1IdnFKK2dvQlp1UmJtVENaZz09')
    .replace(/code:5845/g, '줌주소\nhttps://zoom.us/j/4736062751')
    .replace(/code:5879/g, '줌주소\nhttps://zoom.us/j/4736062751')
    .replace(/code:605/g, '줌주소\nhttps://zoom.us/j/9467757519')
    .replace(/code:1109/g, '줌주소\nhttps://zoom.us/j/5523718127')
    .replace(/code:1614/g, '줌주소\nhttps://us02web.zoom.us/j/9546996730?pwd=cU1hcWlSWmpGQS9OOEFYK2c1OFNrdz09')
    .replace(/code:1714/g, '줌주소\nhttps://zoom.us/j/9785974688')
    .replace(/code:503/g, '줌주소\nhttps://zoom.us/j/8717911596')
    .replace(/code:101/g, '줌주소\nhttps://zoom.us/j/8980834250')
    .replace(/code:1008/g, '줌주소\nhttps://zoom.us/j/8212455526 ')
    .replace(/code:5930/g, '줌주소\nhttps://zoom.us/j/5351236652')
    .replace(/code:6086/g, '줌주소\nhttps://zoom.us/j/7414780713')
    // mes.channel.send(objStr1)
    // 각 교시별 수업 시작/종료 시간 정보 조회
    const time = timetable.getClassTime()
    
    // const objStr2 = JSON.stringify(time)
    // mes.channel.send(objStr2)
    const embed = new Discord.MessageEmbed()
    .setColor('RED')
    .addField(week[d.getDay()] + '요일'+ '시간표', objStr1)
    
    
    .addField('컴시간알리미주소',com, true)

    .setFooter('.\n ⎛⎝⎛° ͜ʖ°⎞⎠⎞⎛⎝⎛° ͜ʖ°⎞⎠⎞⎛⎝⎛° ͜ʖ°⎞⎠⎞  ')
    
    
    
     mes.channel.send(embed)
  }
   test()
  
  
    
  }
  if(mes.content === '!시간표' && d.getDay() === 3) {
    const test = async () => {
    await timetable.init()
    await timetable.setSchool('수원정보과학고등학교')
   
    // 전교 시간표 정보 조회
    const result = await timetable.getTimetable()
    // mes.channel.send(result[1][9][0])
    
    const objStr1 = JSON.stringify(result[1][9][2])
    .replace(/\[/g, '')
    .replace(/\]/g, '')
    .replace(/\{/g, '')
    .replace(/\}/g, '')
    .replace(/\"/g, '')
    .replace(/\,/g, '\n')
    .replace(/code:1311/g, '줌주소\nhttps://us02web.zoom.us/j/7118957056?pwd=dVRQbE1IdnFKK2dvQlp1UmJtVENaZz09')
    .replace(/code:5845/g, '줌주소\nhttps://zoom.us/j/4736062751')
    .replace(/code:5879/g, '줌주소\nhttps://zoom.us/j/4736062751')
    .replace(/code:605/g, '줌주소\nhttps://zoom.us/j/9467757519')
    .replace(/code:1109/g, '줌주소\nhttps://zoom.us/j/5523718127')
    .replace(/code:1614/g, '줌주소\nhttps://us02web.zoom.us/j/9546996730?pwd=cU1hcWlSWmpGQS9OOEFYK2c1OFNrdz09')
    .replace(/code:1714/g, '줌주소\nhttps://zoom.us/j/9785974688')
    .replace(/code:503/g, '줌주소\nhttps://zoom.us/j/8717911596')
    .replace(/code:101/g, '줌주소\nhttps://zoom.us/j/8980834250')
    .replace(/code:1008/g, '줌주소\nhttps://zoom.us/j/8212455526 ')
    .replace(/code:5930/g, '줌주소\nhttps://zoom.us/j/5351236652')
    .replace(/code:6086/g, '줌주소\nhttps://zoom.us/j/7414780713')
    
    // mes.channel.send(objStr1)
    // 각 교시별 수업 시작/종료 시간 정보 조회
    const time = timetable.getClassTime()
    
    // const objStr2 = JSON.stringify(time)
    // mes.channel.send(objStr2)
    const embed = new Discord.MessageEmbed()
    .setColor('RED')
    .addField(week[d.getDay()] + '요일'+ '시간표', objStr1)
    
    
    .addField('컴시간알리미주소',com, true)

    .setFooter('.\n ⎛⎝⎛° ͜ʖ°⎞⎠⎞⎛⎝⎛° ͜ʖ°⎞⎠⎞⎛⎝⎛° ͜ʖ°⎞⎠⎞  ')
    
    
    
     mes.channel.send(embed)
  }
   test()
  
  
    
  }
  if(mes.content === '!시간표' && d.getDay() === 4) {
    const test = async () => {
    await timetable.init()
    await timetable.setSchool('수원정보과학고등학교')
   
    // 전교 시간표 정보 조회
    const result = await timetable.getTimetable()
    // mes.channel.send(result[1][9][0])
    
    const objStr1 = JSON.stringify(result[1][9][3])
    .replace(/\[/g, '')
    .replace(/\]/g, '')
    .replace(/\{/g, '')
    .replace(/\}/g, '')
    .replace(/\"/g, '')
    .replace(/\,/g, '\n')
    .replace(/code:1311/g, '줌주소\nhttps://us02web.zoom.us/j/7118957056?pwd=dVRQbE1IdnFKK2dvQlp1UmJtVENaZz09')
    .replace(/code:5845/g, '줌주소\nhttps://zoom.us/j/4736062751')
    .replace(/code:5879/g, '줌주소\nhttps://zoom.us/j/4736062751')
    .replace(/code:605/g, '줌주소\nhttps://zoom.us/j/9467757519')
    .replace(/code:1109/g, '줌주소\nhttps://zoom.us/j/5523718127')
    .replace(/code:1614/g, '줌주소\nhttps://us02web.zoom.us/j/9546996730?pwd=cU1hcWlSWmpGQS9OOEFYK2c1OFNrdz09')
    .replace(/code:1714/g, '줌주소\nhttps://zoom.us/j/9785974688')
    .replace(/code:503/g, '줌주소\nhttps://zoom.us/j/8717911596')
    .replace(/code:101/g, '줌주소\nhttps://zoom.us/j/8980834250')
    .replace(/code:1008/g, '줌주소\nhttps://zoom.us/j/8212455526 ')
    .replace(/code:5930/g, '줌주소\nhttps://zoom.us/j/5351236652')
    .replace(/code:6086/g, '줌주소\nhttps://zoom.us/j/7414780713')
    // mes.channel.send(objStr1)
    // 각 교시별 수업 시작/종료 시간 정보 조회
    const time = timetable.getClassTime()
    
    // const objStr2 = JSON.stringify(time)
    // mes.channel.send(objStr2)
    const embed = new Discord.MessageEmbed()
    .setColor('RED')
    .addField(week[d.getDay()] + '요일'+ '시간표', objStr1)
    
    
    .addField('컴시간알리미주소',com, true)

    .setFooter('.\n ⎛⎝⎛° ͜ʖ°⎞⎠⎞⎛⎝⎛° ͜ʖ°⎞⎠⎞⎛⎝⎛° ͜ʖ°⎞⎠⎞  ')
    
    
    
     mes.channel.send(embed)
  }
   test()
  
  
    
  }
  if(mes.content === '!시간표' && d.getDay() === 5) {
    const test = async () => {
    await timetable.init()
    await timetable.setSchool('수원정보과학고등학교')
   
    // 전교 시간표 정보 조회
    const result = await timetable.getTimetable()
    // mes.channel.send(result[1][9][0])
    
    const objStr1 = JSON.stringify(result[1][9][4])
    .replace(/\[/g, '')
    .replace(/\]/g, '')
    .replace(/\{/g, '')
    .replace(/\}/g, '')
    .replace(/\"/g, '')
    .replace(/\,/g, '\n')
    .replace(/code:1311/g, '줌주소\nhttps://us02web.zoom.us/j/7118957056?pwd=dVRQbE1IdnFKK2dvQlp1UmJtVENaZz09')
    .replace(/code:5845/g, '줌주소\nhttps://zoom.us/j/4736062751')
    .replace(/code:5879/g, '줌주소\nhttps://zoom.us/j/4736062751')
    .replace(/code:605/g, '줌주소\nhttps://zoom.us/j/9467757519')
    .replace(/code:1109/g, '줌주소\nhttps://zoom.us/j/5523718127')
    .replace(/code:1614/g, '줌주소\nhttps://us02web.zoom.us/j/9546996730?pwd=cU1hcWlSWmpGQS9OOEFYK2c1OFNrdz09')
    .replace(/code:1714/g, '줌주소\nhttps://zoom.us/j/9785974688')
    .replace(/code:503/g, '줌주소\nhttps://zoom.us/j/8717911596')
    .replace(/code:101/g, '줌주소\nhttps://zoom.us/j/8980834250')
    .replace(/code:1008/g, '줌주소\nhttps://zoom.us/j/8212455526 ')
    .replace(/code:5930/g, '줌주소\nhttps://zoom.us/j/5351236652')
    .replace(/code:6086/g, '줌주소\nhttps://zoom.us/j/7414780713')
    // mes.channel.send(objStr1)
    // 각 교시별 수업 시작/종료 시간 정보 조회
    const time = timetable.getClassTime()
    
    // const objStr2 = JSON.stringify(time)
    // mes.channel.send(objStr2)
    const embed = new Discord.MessageEmbed()
    .setColor('RED')
    .addField(week[d.getDay()] + '요일'+ '시간표', objStr1)
    
    
    .addField('컴시간알리미주소',com, true)

    .setFooter('.\n ⎛⎝⎛° ͜ʖ°⎞⎠⎞⎛⎝⎛° ͜ʖ°⎞⎠⎞⎛⎝⎛° ͜ʖ°⎞⎠⎞  ')
    
    
    
     mes.channel.send(embed)
  }
   test()
  
  
    
  }

});



client.login(token);