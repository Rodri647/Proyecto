import { Controller, Post, Body, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('imagenes'))
  async submitEmailForm(@Body() formData: any, @UploadedFiles() imagenes: Express.Multer.File[]) {
    await this.emailService.sendContactEmail(formData, imagenes);
    return { message: 'Correo enviado exitosamente' };
  }
}
