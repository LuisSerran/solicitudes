const { z } = require('zod')

// Definimos el enum de prioridades para no repetir código
const priorityEnum = z.enum(['low', 'medium', 'high']).default('medium')

const createRequestSchema = z.object({
  title: z.string().min(1, 'El título es requerido'),
  description: z.string().optional(),
  area_id: z.number().int(),
  category_id: z.number().int().optional(),
  priority: priorityEnum // Agregado: Obligatorio en teoría, pero con default si no viene
})

const updateRequestSchema = z.object({
  title: z.string().min(1).optional(),
  description: z.string().optional(),
  area_id: z.number().int().optional(),
  category_id: z.number().int().optional(),
  priority: z.enum(['low', 'medium', 'high']).optional() // En PUT es opcional pura
})

module.exports = { createRequestSchema, updateRequestSchema }