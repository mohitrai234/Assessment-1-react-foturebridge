import React from "react";
import { Card } from 'primereact/card'
import { Image } from 'primereact/image'
import { Rating } from 'primereact/rating'

const MovieCard = (props) => {
    const { data } = props
    const cardHeader = () => {
        return (
            <Image alt={""} src={data?.image} zoomSrc={data?.image} preview height="200" />
        )
    }
    return (
        <div>
            {
                data != undefined &&
                <div className="card">
                    <Card title={data?.name} header={cardHeader} >
                        <div className="grid">
                            <div className="col-12">
                                <p className="m-0">Release: {data?.released_date}</p>
                            </div>
                            <div className="col-8 col-offset-2" >
                                <Rating stars={10} readOnly value={data?.rating} />
                            </div>
                        </div>
                    </Card>
                </div>
            }
        </div>
    )
}

export default MovieCard;