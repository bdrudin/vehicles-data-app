import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'vehicles'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('nomor_registrasi',255).primary().unique()
      table.string('nama_pemilik',255).notNullable()
      table.text('alamat')
      table.string('merk')
      table.integer('tahun_pembuatan').unsigned()
      table.integer('kapasitas_silinder').unsigned()
      table.enum('warna',['Merah','Hitam','Biru','Abu-Abu']).notNullable()
      table.string('bahan_bakar')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
