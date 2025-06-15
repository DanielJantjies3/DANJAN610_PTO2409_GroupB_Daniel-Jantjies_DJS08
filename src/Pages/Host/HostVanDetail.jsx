import React from "react"
import { useParams } from "react-router-dom"

export default function HostVanDetail() {
    const { id } = useParams()
    const [currentVan, setCurrentVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)  // Removed extra slash
            .then(res => res.json())
            .then(data => setCurrentVan(data.van))  // Fixed to data.van
    }, [id])  // Added id to dependencies

    if (!currentVan) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <img src={currentVan.imageUrl} alt={currentVan.name} width={150} />
            <h2>{currentVan.name}</h2>
            <p>${currentVan.price}/day</p>
            <p>{currentVan.type}</p>
        </div>
    )
}