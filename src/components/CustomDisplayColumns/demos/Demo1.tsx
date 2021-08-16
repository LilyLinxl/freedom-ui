import React from 'react';
import CustomDisplayColumns from '../index';
import { Table } from 'antd';
import 'antd/dist/antd.css';
const dataSource = [
  {
    nickname: '秦穆公',
    name: '嬴任好',
    rangetime: '(前659年 - 前621年)',
    years: '39年',
    remark:
      '春秋五霸之一。秦穆公胸怀大志，非常重视人才，其任内获得了百里奚、蹇叔、丕豹、公孙支等贤臣的辅佐，曾协助晋文公回到晋国夺取王位。周襄王时出兵攻打蜀国和其他位于函谷关以西的国家，开地千里，因而周襄王任命他为为西方诸侯之伯，遂称霸西戎。',
  },
  {
    nickname: '秦康公',
    name: '赢英',
    rangetime: '(前620年-前609年)',
    years: '12年',
    remark: '',
  },
  {
    nickname: '秦共公',
    name: '嬴和',
    rangetime: '(前608年-前604年)',
    years: '5年',
    remark: '《吕氏春秋》中所谓的秦三公是指秦穆公、秦康公、秦共公三人。',
  },
];

const columns = [
  {
    title: '谥号',
    dataIndex: 'nickname',
    key: 'nickname',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '在位时间',
    dataIndex: 'rangetime',
    key: 'rangetime',
  },
  {
    title: '在位年数',
    dataIndex: 'years',
    key: 'years',
  },
  {
    title: '备注',
    dataIndex: 'remark',
    key: 'remark',
  },
];

const Demo = () => {
  return (
    <>
      <CustomDisplayColumns />
      <Table dataSource={dataSource} columns={columns} />;
    </>
  );
};

export default Demo;
