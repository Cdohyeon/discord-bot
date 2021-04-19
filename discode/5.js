const Timetable = require('comcigan-parser')
const timetable = new Timetable()
 
const test = async () => {
  await timetable.init()
  await timetable.setSchool('수원정보과학고등학교')
 
  // 전교 시간표 정보 조회
  const result = await timetable.getTimetable()
  console.log(result[1][9])
 
  // 각 교시별 수업 시작/종료 시간 정보 조회
  const time = timetable.getClassTime()
  console.log(time)
}
  test()