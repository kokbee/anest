import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import cookieParser from 'cookie-parser'
import { session } from 'express-session'
import { passport } from 'passport'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const port = process.env.PORT || 3000

  const config = new DocumentBuilder()
    .setTitle('API DOC')
    .setDescription('API 문서입니다.')
    .setVersion('1.0.0')
    .addCookieAuth('connect.sid')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)
  /**
  app.use(cookieParser())
  app.use(
    session({
      resave: false,
      saveUninitalized: false,
      secret: process.env.COOKIE_SECRET,
      cookie: {
        httpOnly: true
      },
    })
  )
  app.use(passport.initialize())
  app.use(passport.session())

   **/

  await app.listen(port)
  console.log(`start port : ${port}`)
}
bootstrap()
