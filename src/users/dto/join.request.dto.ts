import { ApiProperty } from '@nestjs/swagger'


export class JoinRequestDTO {
  @ApiProperty({
    example: 'test',
    description: 'test',
    required: true,
    }
  )

  public email: string
  public nickname: string
  public password: string
}
