const Personaje = require('../models/Personaje');


exports.crear = async (req, res) => {
    try {
        const nuevoPersonaje = new Personaje(req.body);
        const personajeGuardado = await nuevoPersonaje.save();
        res.status(201).json(personajeGuardado);
    }

    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.obtenerTodos = async (req, res) => {
    try {
        const personajes = await Personaje.find();
        res.json(personajes);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.actualizar = async (req, res) => {
    try {
        const personajeActualizado = await Personaje.findByIdAndUpdate(
            req.params.id,
             req.body, 
             { new: true, runValidators: true }); 

        if (!personajeActualizado) {
            return res.status(404).json({ message: 'Personaje no encontrado' });
        }

        res.json(personajeActualizado);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};


exports.eliminar = async (req, res) => {
    try {
        const personajeEliminado = await Personaje.findByIdAndDelete(req.params.id);

        if (!personajeEliminado) {
            return res.status(404).json({ message: 'Personaje no encontrado' });
        }

        res.json({ message: 'Personaje eliminado correctamente', personaje: personajeEliminado });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.obtenerPorId = async (req, res) => {
  try {
    const personaje = await Personaje.findById(req.params.id);

    if (!personaje) {
      return res.status(404).json({ error: 'Personaje no encontrado' });
    }

    res.json(personaje);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};