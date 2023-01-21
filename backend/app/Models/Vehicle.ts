import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Vehicle extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ isPrimary: true })
  public nomor_registrasi: string

  @column()
  public nama_pemilik: string
  
  @column()
  public alamat: string

  @column()
  public merk: string

  @column()
  public tahun_pembuatan: number

  @column()
  public kapasitas_silinder: number

  @column()
  public warna: string

  @column()
  public bahan_bakar: string
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
