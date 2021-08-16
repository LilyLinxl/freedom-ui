import React, { memo, useMemo, useState, useCallback, useEffect } from 'react';
import { Button, Modal, Checkbox, Grid, Tooltip } from 'antd';
import { ButtonProps } from 'antd/lib/button';

interface CheckButtonProps {
  onCheckAll: () => void;
  onCheckEmpty: () => void;
  onInvertSelection: () => void;
}

const CheckButton = ({
  onCheckAll,
  onCheckEmpty,
  onInvertSelection,
}: CheckButtonProps) => {
  return useMemo(
    () => (
      <div>
        <Button type="primary" onClick={onCheckAll}>
          全选
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button type="primary" onClick={onCheckEmpty}>
          全不选
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button type="primary" onClick={onInvertSelection}>
          反选
        </Button>
      </div>
    ),
    [onCheckAll, onCheckEmpty, onInvertSelection],
  );
};
export default memo(function index() {
  return (
    <div>
      {CheckButton({
        onCheckAll: () => console.log('全选'),
        onCheckEmpty: () => console.log('全不选'),
        onInvertSelection: () => console.log('反选'),
      })}
    </div>
  );
});
