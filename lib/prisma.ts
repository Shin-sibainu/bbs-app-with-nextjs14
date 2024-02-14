import { PrismaClient } from "@prisma/client";

// 'prisma'プロパティをグローバルオブジェクトに追加するか、既存のものを使用
var prisma = global.prisma || new PrismaClient();

// 開発環境でのみグローバルオブジェクトに'prisma'を設定
if (process.env.NODE_ENV === "development") global.prisma = prisma;

export const db = prisma;
