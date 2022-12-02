import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getTransactions } from "../covalent/api";

export const TXlists = () => {
    const [tx, setTx] = useState([]);

    useEffect(() => {
        (async () => {
            const balTxs = await getTransactions();
            let tx = balTxs.slice(0,6);
            setTx(tx);
        })();
    });

    
    return(
        <>

<div className="overflow-x-auto relative rounded-md">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-lg text-spicy uppercase bg-hot dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6">
                    Hash
                </th>
            </tr>
        </thead>
        <tbody>
                {
                    tx.map((hash) => (
                        <tr className="bg-hot border-bottom border-emerald-700 text-mild" key={hash.timestamp}>
                        <th scope="row" className="py-4 px-6 font-medium text-spicy whitespace-nowrap dark:text-white">
                            <a href={`https://explorer.harmony.one/tx/${hash.hash}`} target="blank">
                                {hash.hash.substring(0,30)}
                            </a>
                        </th>
                        </tr>
                    ))
                }
        </tbody>
    </table>
</div>
<div className="mt-6 mb-4 text-2xl text-spicy text-semibold font-barlow">Latest TXs</div>
        </>
    );
}
