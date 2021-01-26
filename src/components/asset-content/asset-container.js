import React, {Component} from 'react';
import './asset-content-container.css'
import Path from './path';
import Gendata from './gendata/gendata';
import Mani from './mani/mani';// Header-for asset info

					// <div className='gendata-container'>
					// 	<Gendata data={id}/>
					// </div>
export default class AssetContainer extends Component {
	constructor(props){
		super(props)
		this.state = {
			data : this.props

		}
	}

	render(){
		// console.log(this)
		const {gpsid, id} = this.state.data.assetData
		return(
			<div className='asset-content-container'>
				<div className='asset-details'>
					<Mani data={{'id':id, 'gps':gpsid}}/>
				</div>
				<div className='big-boys-container'>

					<div className='path-container'>
						<Path data={id}/>
					</div>
				</div>
			</div>
		)
	}
}
