import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Collapse } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import styles from './AboutAccordion.module.css';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

ReactDOM.render(
  <Collapse
    accordion
    bordered={false}
    expandIconPosition="right"
    expandIcon={({ isActive }) => (
      <CaretDownOutlined
        className={styles.CaretDownOutlined}
        rotate={isActive ? 90 : 0}
      />
    )}
    className="site-collapse-custom-collapse"
  >
    <Panel
      header="This is panel header 1"
      key="1"
      className="site-collapse-custom-panel"
    >
      <p>{text}</p>
    </Panel>
    <Panel
      header="This is panel header 2"
      key="2"
      className="site-collapse-custom-panel"
    >
      <p>{text}</p>
    </Panel>
    <Panel
      header="This is panel header 3"
      key="3"
      className="site-collapse-custom-panel"
    >
      <p>{text}</p>
    </Panel>
  </Collapse>,
  document.getElementById("container")
);
export default Collapse(Panel);
