import {Delete, Get, Injectable, Post} from '@nestjs/common'

@Injectable()
export class WorkspacesService {
  @Get()
  getMyWorkspaces() {

  }

  @Post()
  createWorkspace() {

  }

  @Get(':url/members')
  getAllMembersFromWorkspace() {

  }

  @Post(':url/members')
  inviteMembersToWorkspace() {

  }

  @Delete(':url/members/:id')
  kickMemberFromWorkspace() {

  }

  @Get(':url/members/:id')
  getMemberInfoInWorkspace() {

  }

  @Get(':url/users/:id')
  DEPRECATED_getMemberInfoInWorkspace() {
    this.getMemberInfoInWorkspace()
  }

}
