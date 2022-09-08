import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import { MdDashboardCustomize, MdLocalOffer } from "react-icons/md";
import { AiFillTool } from "react-icons/ai";

type FeatureItem = {
  title: string;
  Svg: JSX.Element;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "The Fastest Way to Configure IAPs",
    Svg: <MdLocalOffer className={styles.featureSvg} />,
    description: (
      <>
        Konfig simplifies the process of configuring IAPs, saving live ops
        managers and developers time, and allowing them to get creative without
        getting bogged down in execution.
      </>
    ),
  },
  {
    title: "Customize It to Your Game",
    Svg: <MdDashboardCustomize className={styles.featureSvg} />,
    description: (
      <>
        Konfig's flexible architecture allows developers to customize data
        models without writing a single line of code.
      </>
    ),
  },
  {
    title: "Easy to Implement",
    Svg: <AiFillTool className={styles.featureSvg} />,
    description: (
      <>
        Games can get up and running on Konfig in a day using our powerful GUI,
        content management system, and simple API.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">{Svg}</div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
