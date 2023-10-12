import React from 'react'

function CardData({ value }) {

    const progressBar = <>
        <div className="col">
            <div className="progress progress-sm mr-2">
                <div className="progress-bar bg-info" role="progressbar"
                    style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0"
                    aria-valuemax="100"></div>
            </div>
        </div>
    </>



    return (
        <>
            <div className="col-xl-3 col-md-6 mb-4">
                <div className={value.border}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={value.fontColor}>
                                    {value.text}</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{value.price}</div>
                            </div>
                            {value.id === "3" ? progressBar :<></>}
                            {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                            {/* <div className="col">
                                <div className="progress progress-sm mr-2">
                                    <div className="progress-bar bg-info" role="progressbar"
                                        style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0"
                                        aria-valuemax="100"></div>
                                </div>
                            </div> */}
                            {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}


                            <div className="col-auto">
                                <i className={value.icon}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="col-xl-3 col-md-6 mb-4">
                <div className=>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                    {value.text2}</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{value.price2}</div>
                            </div>
                            <div className="col-auto">
                                <i className=></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-xl-3 col-md-6 mb-4">
                <div className=>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="">{value.text3}
                                </div>
                                <div className="row no-gutters align-items-center">
                                    <div className="col-auto">
                                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{value.text3}</div>
                                    </div>
                                    <div className="col">
                                        <div className="progress progress-sm mr-2">
                                            <div className="progress-bar bg-info" role="progressbar"
                                                style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0"
                                                aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto">
                                <i className=></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-3 col-md-6 mb-4">
                <div className=>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="">
                                    {value.text4}</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{value.price4}</div>
                            </div>
                            <div className="col-auto">
                                <i className=></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </>
    )
}

export default CardData

