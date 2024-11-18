import { paginatedDto } from '@/common/model/paginate'
import { ApiProperty, IntersectionType, OmitType, PartialType } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber } from 'class-validator'

// export class CreateCatsDto {
//   @ApiProperty({ description: '姓名', example: 'HelloKitty' })
//   name: string
//   @ApiProperty({ description: '年龄', example: '3' })
//   age: number
// }

export class CreateCatsDto {
  // @ApiProperty({ description: 'ID' })
  // id: number

  @IsNotEmpty({ message: '名称不能为空' })
  @ApiProperty({ description: '名称', example: 'HelloKitty' })
  name: string

  @IsNotEmpty({ message: '年龄不能为空' })
  @IsNumber()
  @ApiProperty({ description: '年龄', example: '3' })
  age: number
}

export class UpdateCatsDto extends PartialType(OmitType(CreateCatsDto, [] as const)) {}

/** 分页查询 DTO */
export class PageQueryCatsDto extends IntersectionType(paginatedDto, UpdateCatsDto) {}
