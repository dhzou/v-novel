import React from 'react'
import './style.css'

class CharacterItem extends React.Component {
  constructor(options) {
    super(options);
    this.state= {
      imageUrl:'//qidian.qpic.cn/qd_bbs_pic/349573/board_fb736c02_bfdc_1d1a_943c_e61c1592ecc2_file_6_w440h920/400'
    }
  }
  render() {
    return  <div className='character-cover'>
          <img onClick={this.onclick.bind(this,0)} src={this.state.imageUrl}
               className='character-cover-img'  />
          <p className='character-cover-p'>不良少年</p>
          <a onClick={this.onclick.bind(this,1)}>编辑</a>
      </div>


  }

  onclick(index) {
    const ev = {
      data:this.state,
      type:index
    };
    this.props.onClick && this.props.onClick(ev);
  }
}

export default CharacterItem
