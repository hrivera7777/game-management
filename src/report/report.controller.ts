import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { Game } from 'src/game/game.entity';
import { User } from 'src/user/entities/user.entity';
import { UserRole } from 'src/user/role.enum';
import { ReportService } from './report.service';

@UseGuards(AuthGuard())
@Controller('report')
export class ReportController {
  constructor(private reportService: ReportService) {}

  @Roles(UserRole.ADMIN)
  @Get('most-added-game')
  getMostAddedGame(): Promise<Game> {
    return this.reportService.getMostAddedGame();
  }

  // @Roles(UserRole.ADMIN)
  // @Get()
  // getUserWithMostLists(): Promise<User> {
  //   return this.reportService.getUserWithMostLists();
  // }
}
