import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { towns, upcomingTowns } from '../data/towns'

// Custom green icon for active towns
const activeIcon = L.divIcon({
  className: 'custom-marker',
  html: `<div style="
    background-color: #0d9488;
    width: 30px;
    height: 30px;
    border-radius: 50% 50% 50% 0;
    transform: rotate(-45deg);
    border: 3px solid white;
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
  "></div>`,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30]
})

// Custom orange icon for upcoming towns
const upcomingIcon = L.divIcon({
  className: 'custom-marker',
  html: `<div style="
    background-color: #f59e0b;
    width: 24px;
    height: 24px;
    border-radius: 50% 50% 50% 0;
    transform: rotate(-45deg);
    border: 2px solid white;
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
    opacity: 0.8;
  "></div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  popupAnchor: [0, -24]
})

export default function TownMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const leafletMap = useRef<L.Map | null>(null)

  useEffect(() => {
    if (!mapRef.current || leafletMap.current) return

    // Initialize map centered on South Africa
    leafletMap.current = L.map(mapRef.current).setView([-29, 25], 5)

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(leafletMap.current)

    // Add markers for active towns
    towns.forEach(town => {
      if (town.lat && town.lng && leafletMap.current) {
        const marker = L.marker([town.lat, town.lng], { icon: activeIcon })
          .addTo(leafletMap.current)

        const popupContent = `
          <div style="text-align: center; padding: 8px; min-width: 150px;">
            <h3 style="font-weight: bold; font-size: 16px; margin-bottom: 4px; color: #0d9488;">
              ${town.name}<span style="color: #f59e0b;">Connect</span>
            </h3>
            <p style="font-size: 12px; color: #666; margin-bottom: 8px;">${town.region}</p>
            <span style="
              display: inline-block;
              background: #0d9488;
              color: white;
              font-size: 10px;
              font-weight: 600;
              padding: 2px 8px;
              border-radius: 9999px;
              margin-bottom: 8px;
            ">Active</span>
            <br/>
            <a href="${town.siteUrl}" target="_blank" rel="noopener noreferrer" style="
              display: inline-block;
              background: #0d9488;
              color: white;
              text-decoration: none;
              padding: 6px 12px;
              border-radius: 6px;
              font-size: 12px;
              font-weight: 600;
              margin-top: 4px;
            ">Visit Site</a>
          </div>
        `

        marker.bindPopup(popupContent)
      }
    })

    // Add markers for upcoming towns
    upcomingTowns.forEach(town => {
      if (town.lat && town.lng && leafletMap.current) {
        const marker = L.marker([town.lat, town.lng], { icon: upcomingIcon })
          .addTo(leafletMap.current)

        const popupContent = `
          <div style="text-align: center; padding: 8px; min-width: 150px;">
            <h3 style="font-weight: bold; font-size: 16px; margin-bottom: 4px; color: #666;">
              ${town.name}<span style="color: #999;">Connect</span>
            </h3>
            <p style="font-size: 12px; color: #666; margin-bottom: 8px;">${town.region}</p>
            <span style="
              display: inline-block;
              background: #f59e0b;
              color: white;
              font-size: 10px;
              font-weight: 600;
              padding: 2px 8px;
              border-radius: 9999px;
            ">${town.launchDate || 'Coming Soon'}</span>
          </div>
        `

        marker.bindPopup(popupContent)
      }
    })

    // Cleanup on unmount
    return () => {
      if (leafletMap.current) {
        leafletMap.current.remove()
        leafletMap.current = null
      }
    }
  }, [])

  return (
    <div className="relative">
      <div ref={mapRef} className="h-64 lg:h-96 w-full rounded-2xl" />
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg z-[1000]">
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-teal"></div>
            <span className="text-gray-600">Active</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber opacity-80"></div>
            <span className="text-gray-600">Coming Soon</span>
          </div>
        </div>
      </div>
    </div>
  )
}
