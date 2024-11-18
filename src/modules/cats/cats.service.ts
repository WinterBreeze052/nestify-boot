import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/common/prisma/prisma.service'
import { Prisma } from '@prisma/client'
import { CrudService } from '@/modules/core/crud/crud.service'
// import { CreateCatsDto } from './cats.dto'

@Injectable()
export class CatsService extends CrudService {
  model: Prisma.ModelName = Prisma.ModelName.Cat
  constructor(protected prisma: PrismaService) {
    super(prisma)
  }

  //   /**
  //  * @description: 新增
  //  * @param data 新增参数
  //  */
  //   create(data: CreateCatsDto): Promise<any> {
  //     console.log('data ???:>> ', data);
  //     // return this.prisma[this.model].create({ data })
  //     return ''

  //   }
}
