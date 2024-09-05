import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import img1 from '../assets/images/photo.jpg'
import { BrowserProvider } from 'ethers'

const IndexPage = () => {
    const [id, setId] = useState('')

    const provider = new BrowserProvider(window.ethereum)
    async function connectToMetamask() {
        const signer = await provider.getSigner();
        console.log("signer", signer.address)
    }

    return (
        <>
            <form>
                <div className="flex justify-between space-x-4 mb-4 ml-4 mt-8">
                    <button 
                        onClick={connectToMetamask} 
                        className="rounded-md text-white bg-red-500 border-none font-serif h-10 px-4"
                    >
                        Connect To Metamask
                    </button>
                    <div className='space-x-4 mr-4'>

                    
                    <Link to="/">
                        <input 
                            type="button" 
                            name="home" 
                            value="Home"
                            className="rounded-md text-white bg-blue-500 border-none font-serif h-10 px-4"
                        />
                    </Link>
                    <Link to="/issue">
                        <input 
                            type="button" 
                            name="issue" 
                            value="Issue Certificate"
                            className="rounded-md text-white bg-blue-500 border-none font-serif h-10 px-4"
                        />
                    </Link>
                    </div>
                </div>

                <div>
                    <h1 className="pt-16 text-4xl text-center font-bold font-serif">Certificate Dapp</h1>
                    <img src={img1} className="size-60 mx-auto mt-12 mb-10" />
                </div>
                <div className="text-center">
                    <input 
                        type="text" 
                        name="textname" 
                        required 
                        placeholder="Enter Certificate Id to view" 
                        className="border-2 border-sky-400" 
                        value={id} 
                        onChange={(e) => setId(e.target.value)}
                    />
                    <Link to={`/view/${id}`}>
                        <input 
                            type="button" 
                            name="search" 
                            value="Search"
                            className="text-white bg-blue-500 w-20 size-10"
                        />
                    </Link>
                </div>
            </form>
        </>
    )
}

export default IndexPage
