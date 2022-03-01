"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20220202173427 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20220202173427 extends migrations_1.Migration {
    async up() {
        this.addSql('create table "post" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" text not null);');
    }
}
exports.Migration20220202173427 = Migration20220202173427;
//# sourceMappingURL=Migration20220202173427.js.map