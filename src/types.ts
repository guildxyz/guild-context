/* eslint-disable no-unused-vars */

type AnyKey = {
  [key: string]: any | AnyKey;
};

export type Meta = {
  userId?: number;
  guildId?: number;
  roleId?: number;
  requirementId?: number;
  platformId?: number;
  guildPlatformId?: number;
  rolePlatformId?: number;
  groupId?: number;
  identityId?: number;

  address?: string;
  platformUserId?: string;
  platformGuildId?: string;
  platformRoleId?: string;

  jobId?: string;

  [key: string]: any | AnyKey;
} & AnyKey;

export type NoParamNoReturnFunc = () => void;
