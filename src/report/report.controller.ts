import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { User } from 'src/auth/entity/user.entity';
import { UserRole } from 'src/auth/role.enum';
import { Game } from 'src/game/game.entity';
import { ReportService } from './report.service';

@UseGuards(AuthGuard())
@Controller('report')
export class ReportController {
  constructor(private reportService: ReportService) {}

  @Roles(UserRole.ADMIN)
  @Get()
  getMostAddedGame(): Promise<Game> {
    return this.reportService.getMostAddedGame();
  }

  // @Roles(UserRole.ADMIN)
  // @Get()
  // getUserWithMostLists(): Promise<User> {
  //   return this.reportService.getUserWithMostLists();
  // }
}
