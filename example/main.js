'use strict'

exports.handler = function (event, context, callback) {
  var response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
    body: '<b>시스코X하시코프와 함께! 하이브리드 클라우드 자동화 시작하기</b><hr><center><p>AWS Lambda 애플리케이션 배포</p><p>안녕하세요 현재 버전은 0_0_2 입니다.</p></center>',
  }
  callback(null, response)
}