import React from 'react'
<<<<<<< HEAD
import { Icon,Divider } from 'antd'
=======
import { Icon,Divider, Avata, Card, Col} from 'antd'
>>>>>>> ea67698ef1c4e94c89147baaf9f93aa768973fbe

import { Link } from 'dva/router'
import moment from 'moment'
import ImagePreview from '../../components/ImagePreview'
import appLocaleName from '../../common/Locale.tool'
import BaseTool from '../../common/Base.tool'
import GlobalComponents from '../../custcomponents'
import DescriptionList from '../../components/DescriptionList'
const { Description } = DescriptionList
<<<<<<< HEAD
=======

>>>>>>> ea67698ef1c4e94c89147baaf9f93aa768973fbe
const {
	defaultRenderReferenceCell,
	defaultRenderBooleanCell,
	defaultRenderMoneyCell,
	defaultRenderDateTimeCell,
	defaultRenderImageCell,
<<<<<<< HEAD
	defaultRenderDateCell,
	defaultRenderIdentifier,
	defaultRenderTextCell,
=======
	defaultRenderAvatarCell,
	defaultRenderDateCell,
	defaultRenderIdentifier,
	defaultRenderTextCell,
	defaultSearchLocalData,
>>>>>>> ea67698ef1c4e94c89147baaf9f93aa768973fbe
} = BaseTool

const renderTextCell=defaultRenderTextCell
const renderIdentifier=defaultRenderIdentifier
const renderDateCell=defaultRenderDateCell
const renderDateTimeCell=defaultRenderDateTimeCell
const renderImageCell=defaultRenderImageCell
<<<<<<< HEAD
=======
const renderAvatarCell=defaultRenderAvatarCell
>>>>>>> ea67698ef1c4e94c89147baaf9f93aa768973fbe
const renderMoneyCell=defaultRenderMoneyCell
const renderBooleanCell=defaultRenderBooleanCell
const renderReferenceCell=defaultRenderReferenceCell


<<<<<<< HEAD
const menuData = {menuName:"零售店会员礼品卡", menuFor: "retailStoreMemberGiftCard",
  		subItems: [
  {name: 'retailStoreMemberGiftCardConsumeRecordList', displayName:'零售商店会员卡消费记录', icon:'gift',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '__no_group'},
=======

const menuData = {menuName: window.trans('retail_store_member_gift_card'), menuFor: "retailStoreMemberGiftCard",
  		subItems: [
  {name: 'retailStoreMemberGiftCardConsumeRecordList', displayName: window.mtrans('retail_store_member_gift_card_consume_record','retail_store_member_gift_card.retail_store_member_gift_card_consume_record_list',false), type:'retailStoreMemberGiftCardConsumeRecord',icon:'gift',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '__no_group'},
>>>>>>> ea67698ef1c4e94c89147baaf9f93aa768973fbe
  
  		],
}

<<<<<<< HEAD
=======

const settingMenuData = {menuName: window.trans('retail_store_member_gift_card'), menuFor: "retailStoreMemberGiftCard",
  		subItems: [
  
  		],
}

const fieldLabels = {
  id: window.trans('retail_store_member_gift_card.id'),
  name: window.trans('retail_store_member_gift_card.name'),
  owner: window.trans('retail_store_member_gift_card.owner'),
  number: window.trans('retail_store_member_gift_card.number'),
  remain: window.trans('retail_store_member_gift_card.remain'),

}

const displayColumns = [
  { title: fieldLabels.id, debugtype: 'string', dataIndex: 'id', width: '8', render: (text, record)=>renderTextCell(text,record,'retailStoreMemberGiftCard') , sorter: true },
  { title: fieldLabels.name, debugtype: 'string', dataIndex: 'name', width: '7',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.owner, dataIndex: 'owner', render: (text, record) => renderReferenceCell(text, record), sorter:true},
  { title: fieldLabels.number, debugtype: 'string', dataIndex: 'number', width: '11',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.remain, dataIndex: 'remain', className:'money', render: (text, record) => renderMoneyCell(text, record), sorter: true  },

]


const searchLocalData =(targetObject,searchTerm)=> defaultSearchLocalData(menuData,targetObject,searchTerm)

const renderItemOfList=(retailStoreMemberGiftCard,targetComponent)=>{

  const userContext = null
  return (
    <div key={retailStoreMemberGiftCard.id}>
	
      <DescriptionList  key={retailStoreMemberGiftCard.id} size="small" col="2" >
        <Description term={fieldLabels.id} style={{wordBreak: 'break-all'}}>{retailStoreMemberGiftCard.id}</Description> 
        <Description term={fieldLabels.name} style={{wordBreak: 'break-all'}}>{retailStoreMemberGiftCard.name}</Description> 
        <Description term={fieldLabels.owner}><div>{retailStoreMemberGiftCard.owner==null?appLocaleName(userContext,"NotAssigned"):`${retailStoreMemberGiftCard.owner.displayName}(${retailStoreMemberGiftCard.owner.id})`}
        </div></Description>
        <Description term={fieldLabels.number} style={{wordBreak: 'break-all'}}>{retailStoreMemberGiftCard.number}</Description> 
        <Description term={fieldLabels.remain}><div style={{"color":"red"}}>{retailStoreMemberGiftCard.remain}</div></Description> 
	
        
      </DescriptionList>
      <Divider style={{ height: '2px' }} />
    </div>
	)
>>>>>>> ea67698ef1c4e94c89147baaf9f93aa768973fbe

const settingMenuData = {menuName:"零售店会员礼品卡", menuFor: "retailStoreMemberGiftCard",
  		subItems: [
  
  		],
}
<<<<<<< HEAD

const fieldLabels = {
  id: '序号',
  name: '名称',
  owner: '业主',
  number: '数',
  remain: '保持',

}

const displayColumns = [
  { title: fieldLabels.id, debugtype: 'string', dataIndex: 'id', width: '8', render: (text, record)=>renderTextCell(text,record,'retailStoreMemberGiftCard') , sorter: true },
  { title: fieldLabels.name, debugtype: 'string', dataIndex: 'name', width: '7',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.owner, dataIndex: 'owner', render: (text, record) => renderReferenceCell(text, record), sorter:true},
  { title: fieldLabels.number, debugtype: 'string', dataIndex: 'number', width: '11',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.remain, dataIndex: 'remain', className:'money', render: (text, record) => renderMoneyCell(text, record), sorter: true  },

]
// refernce to https://ant.design/components/list-cn/
const renderItemOfList=(retailStoreMemberGiftCard,targetComponent)=>{

  const userContext = null
  return (
    <div key={retailStoreMemberGiftCard.id}>
	
      <DescriptionList  key={retailStoreMemberGiftCard.id} size="small" col="4">
        <Description term="序号">{retailStoreMemberGiftCard.id}</Description> 
        <Description term="名称">{retailStoreMemberGiftCard.name}</Description> 
        <Description term="业主"><div>{retailStoreMemberGiftCard.owner==null?appLocaleName(userContext,"NotAssigned"):`${retailStoreMemberGiftCard.owner.displayName}(${retailStoreMemberGiftCard.owner.id})`}
        </div></Description>
        <Description term="数">{retailStoreMemberGiftCard.number}</Description> 
        <Description term="保持"><div style={{"color":"red"}}>{retailStoreMemberGiftCard.remain}</div></Description> 
	
        
      </DescriptionList>
      <Divider style={{ height: '2px' }} />
    </div>
	)

}
	
const packFormValuesToObject = ( formValuesToPack )=>{
	const {name, number, remain, ownerId} = formValuesToPack
	const owner = {id: ownerId, version: 2^31}
	const data = {name, number, remain, owner}
	return data
}
=======
	
const packFormValuesToObject = ( formValuesToPack )=>{
	const {name, number, remain, ownerId} = formValuesToPack
	const owner = {id: ownerId, version: 2^31}
	const data = {name, number, remain, owner}
	return data
}
>>>>>>> ea67698ef1c4e94c89147baaf9f93aa768973fbe
const unpackObjectToFormValues = ( objectToUnpack )=>{
	const {name, number, remain, owner} = objectToUnpack
	const ownerId = owner ? owner.id : null
	const data = {name, number, remain, ownerId}
	return data
}
<<<<<<< HEAD

const RetailStoreMemberGiftCardBase={menuData,displayColumns,fieldLabels,renderItemOfList,packFormValuesToObject,unpackObjectToFormValues}
=======
const stepOf=(targetComponent, title, content, position, index)=>{
	return {
		title,
		content,
		position,
		packFunction: packFormValuesToObject,
		unpackFunction: unpackObjectToFormValues,
		index,
      }
}
const RetailStoreMemberGiftCardBase={menuData,displayColumns,fieldLabels,renderItemOfList, stepOf, searchLocalData}
>>>>>>> ea67698ef1c4e94c89147baaf9f93aa768973fbe
export default RetailStoreMemberGiftCardBase



