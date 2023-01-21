import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Vehicle from "App/Models/Vehicle"

export default class VehiclesController {
    public async index({ response}: HttpContextContract) {
        const vehicles = await Vehicle.all()
        return response.ok({
            message: "success",
            vehicles
        })
    }

    public async store({ request, response}: HttpContextContract) {
        const data = request.only(['nomor_registrasi', 'nama_pemilik', 'alamat', 'merk', 'tahun_pembuatan', 'kapasitas_silinder', 'warna', 'bahan_bakar'])
        const vehicles = await Vehicle.create(data)
        return response.ok({
            message: "success",
            vehicles
        })
    }

    public async show({params, response}) {
        const vehicle = await Vehicle.find(params.id)

        return response.json(vehicle)
    }

    public async update({params, request, response}) {
        const data = request.only(['nomor_registrasi', 'nama_pemilik', 'alamat', 'merk', 'tahun_pembuatan', 'kapasitas_silinder', 'warna', 'bahan_bakar'])

        const vehicle = await Vehicle.find(params.id)

        vehicle.merge(data)
        await vehicle.save()
        return response.json(vehicle)
    }

    public async destroy({params, response}) {
        const vehicle = await Vehicle.find(params.id)

        await vehicle.delete()

        return response.ok({message: "success deleted"})
    }


}
