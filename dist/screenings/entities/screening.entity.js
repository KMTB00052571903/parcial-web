"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Screening = exports.ScreeningStatus = void 0;
const typeorm_1 = require("typeorm");
const room_entity_1 = require("../../rooms/entities/room.entity");
var ScreeningStatus;
(function (ScreeningStatus) {
    ScreeningStatus["SCHEDULED"] = "scheduled";
    ScreeningStatus["CANCELLED"] = "cancelled";
})(ScreeningStatus || (exports.ScreeningStatus = ScreeningStatus = {}));
let Screening = class Screening {
    id;
    movieTitle;
    startsAt;
    status;
    room;
};
exports.Screening = Screening;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Screening.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false }),
    __metadata("design:type", String)
], Screening.prototype, "movieTitle", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: false }),
    __metadata("design:type", Date)
], Screening.prototype, "startsAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: ScreeningStatus,
        default: ScreeningStatus.SCHEDULED,
        nullable: false,
    }),
    __metadata("design:type", String)
], Screening.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => room_entity_1.Room, { nullable: false, eager: true, onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'roomId' }),
    __metadata("design:type", room_entity_1.Room)
], Screening.prototype, "room", void 0);
exports.Screening = Screening = __decorate([
    (0, typeorm_1.Entity)('screenings')
], Screening);
//# sourceMappingURL=screening.entity.js.map