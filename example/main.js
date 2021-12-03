'use strict'

exports.handler = function (event, context, callback) {
  var response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
    body: '<h1>시스코X하시코프와 함께! 하이브리드 클라우드 자동화 시작하기</h1><hr><center><h2><b><p>AWS Lambda 애플리케이션 배포</p><hr><img src="https://fine0300s.com/2021/1207seminar/invitation/images/1207invitation.gif"></b></h2></center>',
  }
  callback(null, response)
}