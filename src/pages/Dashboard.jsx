import React from 'react';
import Datacard1 from '../components/Datacard1';
import { Earnings } from '../components/Lchart';
import HoldingsPie from '../components/PieChart';
import { getHRCBalances} from '../covalent/api';
import { non_zero_tokens, portfolio_value, portfolio_value24, token_balances } from '../covalent/funcs';
import Navbar from '../components/Navbar';
import Loader from './Loader';
import { Txs } from '../components/Txs';
import { TxList } from '../components/TxList';

class Dashboard extends React.Component {
  state = {loading : true, curr_value : 0, avg_value : 0, holdingsData : [], nonZero_tokens : []};

  componentDidMount(){
    getHRCBalances().then((bal) => {
      this.setState({loading : false, curr_value : portfolio_value(bal), avg_value : portfolio_value24(bal), holdingsData : token_balances(bal), nonZero_tokens : non_zero_tokens(bal)});
    });
  }

  render (){
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="">

        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap m-4">
            <div className="p-4 md:w-1/3">
            <div className="h-full bg-sss border border-gray-700 shadow-md w-full mx-4 rounded-lg overflow-hidden py-10 ">
              {this.state.loading ? <Loader /> :<Datacard1 title={"Current Value "} data={this.state.curr_value}/>}
            </div>
            </div>
            <div className="p-4 md:w-1/3">
            <div className="h-full bg-sss border border-gray-700 shadow-md w-full mx-4 rounded-lg overflow-hidden py-10 ">
            {this.state.loading ? <Loader /> :<Datacard1 title={"24HR Avg Value "} data={this.state.avg_value}/>}
            </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full bg-sss border border-gray-700 shadow-md w-full mx-4 rounded-lg overflow-hidden py-10 ">
              <div className="">
                {this.state.loading ?<Loader /> : <Earnings />}
            </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap m-4">
            <div className="p-4 md:w-1/3">
            <div className="h-full bg-sss border border-gray-700 shadow-md w-full mx-4 rounded-lg overflow-hidden py-10 ">
            {this.state.loading ? <Loader /> :<Txs data={this.state.nonZero_tokens}/>}
            </div>
            </div>
            <div className="p-4 md:w-1/3">
            <div className="h-full bg-sss border border-gray-700 shadow-md w-full mx-4 rounded-lg overflow-hidden py-10 ">
            {this.state.loading ? <Loader /> :<HoldingsPie data={this.state.holdingsData}/>}
            </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full bg-sss border border-gray-700 shadow-md w-full mx-4 rounded-lg overflow-hidden py-10 ">
              <div className="p-3">
            {this.state.loading ?<Loader /> : <TxList />}
            </div>
              </div>
            </div>
          </div>
        </div>
        

            
         </main>
    </>
    )
  }
}
export default Dashboard;