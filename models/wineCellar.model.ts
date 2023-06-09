import { Model, Column, Table, DataType, HasMany } from 'sequelize-typescript'
import { Wine } from './wine.model';

@Table({
    tableName: 'WineCellar',
    underscored: true,
    timestamps: true,
    paranoid: true
})
export class WineCellar extends Model<WineCellar> {
    @Column({
        type: DataType.UUID,
        allowNull: false,
        primaryKey: true,
        unique: true,
        defaultValue: DataType.UUIDV4
    })
    id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
        defaultValue: 'null'
    })
    description: string;

    @HasMany(() => Wine, 'wineId')
    wines: Wine[];

}