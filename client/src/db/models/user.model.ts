import { Model } from "sequelize";
import { Column, DataType, HasMany, Table } from "sequelize-typescript";
import { RefreshToken } from "./refresh-token.model";

@Table({tableName: 'user', underscored: true})
class User extends Model{
    @Column(DataType.STRING)
    email!: string;

    @Column(DataType.STRING)
    password!: string;

    @Column(DataType.BOOLEAN)
    isVerified!: boolean;

    @Column(DataType.STRING)
    verificationToken!: string;

    @Column(DataType.STRING)
    passwordResetToken!: string;

    @HasMany(() => RefreshToken, (
        onDelete: 'CASCADE'
    ))
    refreshTokens!: Array<RefreshToken>
}

export{ User };