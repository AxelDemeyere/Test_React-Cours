import { useEffect, useState } from 'react'

interface Product {
  id: number
  name: string
}

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let active = true
    fetch('https://api.example.com/products')
        .then(res => {
          if (!res.ok) throw new Error('Erreur réseau')
          return res.json()
        })
        .then(data => {
          if (active) setProducts(Array.isArray(data) ? data : [])
        })
        .catch(() => {
          if (active) setError('Impossible de charger')
        })
        .finally(() => {
          if (active) setLoading(false)
        })
    return () => { active = false }
  }, [])

  if (loading) return <p>Chargement...</p>
  if (error) return <p role="alert">{error}</p>
  if (products.length === 0) return <p>Aucun produit</p>

  return (
      <ul>
        {products.map(p => <li key={p.id}>{p.name}</li>)}
      </ul>
  )
}
