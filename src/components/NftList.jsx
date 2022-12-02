import React from "react";
import { getNFTs } from "../covalent/api";

class NftList extends React.Component {
    state = {nfts : [{}], loading : true, empty : false};

    componentDidMount(){
        getNFTs().then((balNFTs) => {
            if(balNFTs.length === 0){
                this.setState({empty : true, loading : false});
            }
            else{
                this.setState({nfts : balNFTs, loading : false});
            }
        }
    )}

    render() {
    return(
        <>
        <div className="mt-6 mb-4 text-2xl text-mild text-semibold font-barlow">{ this.state.loading ? "Loading..." : <div className="mt-2 mb-4 text-2xl text-spicy text-bold font-barlow">{ this.state.empty ? "No NFTs Found For The Entered Address/es" : "NFT Holdings"}</div>}</div>
        <div className="overflow-x-auto relative rounded-md">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-lg text-mild uppercase bg-sss dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Address
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Type
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Last Interacted 
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Count
                        </th>
                    </tr>
                </thead>
                <tbody>
                        {
                            this.state.nfts.map((tok) => (
                                <tr className="bg-hot border-bottom border-emerald-700 text-spicy" key={tok.contract_address}>
                                <th scope="row" className="py-4 px-6 font-medium text-spicy whitespace-nowrap dark:text-white">
                                    <a href={`https://explorer.harmony.one/address/${tok.contract_address}`} target="blank" >
                                        {tok.contract_name}
                                    </a>
                                </th>
                                <th scope="row" className="py-4 px-6 font-medium text-spicy whitespace-nowrap dark:text-white">
                                <a href={`https://explorer.harmony.one/address/${tok.contract_address}`} target="blank" >
                                        {tok.contract_address}
                                    </a>
                                </th>
                                <th scope="row" className="py-4 px-6 font-medium text-spicy whitespace-nowrap dark:text-white">
                                        {tok.type}
                                </th>
                                <th scope="row" className="py-4 px-6 font-medium text-spicy whitespace-nowrap dark:text-white">
                                        {tok.last_interacted}
                                </th>
                                <th scope="row" className="py-4 px-6 font-medium text-spicy whitespace-nowrap dark:text-white">
                                        {tok.balances}
                                </th>
                                </tr>
                            ))
                        }
                </tbody>
            </table>
        </div>
        </>
    )
}
}

export default NftList;
