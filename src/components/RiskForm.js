// src/components/RiskForm.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateOption } from '../slices/riskSlice';

const RiskForm = () => {
  const dispatch = useDispatch();
  const options = useSelector((state) => state.risk.options);
  const totalValue = useSelector((state) => state.risk.totalValue);

  const handleOptionChange = (index, value) => {
    dispatch(updateOption({ index, value }));
  };

  return (
    <div>
      {options.map((value, index) => (
        <div key={index}>
          <select
            value={value}
            onChange={(e) => handleOptionChange(index, parseInt(e.target.value))}
          >
            <option value={5}>Very Low</option>
            <option value={4}>Low</option>
            <option value={3}>Medium</option>
            <option value={2}>High</option>
            <option value={1}>Very High</option>
          </select>
          <span>{value}</span>
        </div>
      ))}
      <div>Total Value: {totalValue}</div>
    </div>
  );
};

export default RiskForm;
