import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter;

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: this.configService.get<string>('EMAIL_USER'),
        pass: this.configService.get<string>('EMAIL_PASS'),
      },
    });
  }

  async sendContactEmail(formData: any, imagenes: Express.Multer.File[]) {
    const emailOptions = {
      from: formData.correo,
      to: this.configService.get<string>('EMAIL_USER'),
      subject: `Nuevo coreo de ${formData.nombre}`,
      text: `
        Nombre: ${formData.nombre}
        Teléfono: ${formData.telefono}
        Asunto: ${formData.asunto}
        Comentarios: ${formData.comentarios}
      `,
      attachments: imagenes?.map((file) => ({
        filename: file.originalname,
        content: file.buffer,
      })),
    };

    return this.transporter.sendMail(emailOptions);
  }
}

