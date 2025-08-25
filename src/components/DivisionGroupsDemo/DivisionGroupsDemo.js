'use client';
import React from 'react';
import clsx from 'clsx';
import { motion, LayoutGroup } from "motion/react";
import { range } from '@/utils';
import Card from '@/components/Card';
import SliderControl from '@/components/SliderControl';
import Equation from './Equation';
import styles from './DivisionGroupsDemo.module.css';

const DivisionGroupsDemo = ({
  numOfItems = 12,
  initialNumOfGroups = 1,
  includeRemainderArea,
}) => {
  const [numOfGroups, setNumOfGroups] = React.useState(
    initialNumOfGroups
  );
  const reactId = React.useId();

  const itemsWithId = range(numOfItems).map((index) => ({
    id: `${reactId}-${index}`,
    index: `${index}`
  }));

  const numOfItemsPerGroup = Math.floor(numOfItems / numOfGroups);
  const remainder = includeRemainderArea ? numOfItems % numOfGroups : null;

  const groupedItems = range(numOfGroups).map((groupIndex) => {
    const startIndex = groupIndex * numOfItemsPerGroup;
    return range(numOfItemsPerGroup).map((index) => {
      return itemsWithId[startIndex + index];
    });
  });

  const remainderItems = remainder > 0 
    ? range(remainder).map((index) => {
        return itemsWithId[numOfGroups * numOfItemsPerGroup + index];
      })
    : [];

  const gridStructure =
    numOfGroups < 4
      ? {
          gridTemplateColumns: `repeat(${numOfGroups}, 1fr)`,
        }
      : {
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr',
        };

  return (
    <Card as="section" className={styles.wrapper}>
      <header className={styles.header}>
        <SliderControl
          label="Number of Groups"
          className={styles.slider}
          step={1}
          min={1}
          max={4}
          value={numOfGroups}
          onChange={(ev) =>
            setNumOfGroups(Number(ev.target.value))
          }
        />
      </header>

      <div className={styles.demoWrapper}>
        <LayoutGroup>
          <div
            className={clsx(styles.demoArea)}
            style={gridStructure}
          >
            {groupedItems.map((group, groupIndex) => (
              <div
                key={`group-${groupIndex}`}
                className={styles.group}
              >
                {group.map((item) => (
                  <motion.div
                    key={item.id}
                    layoutId={item.id}
                    layout
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 50,
                    }}
                    className={styles.item}
                  >
                    {item.index}
                  </motion.div>
                ))}
              </div>
            ))}
          </div>

          {includeRemainderArea && (
            <div className={styles.remainderArea}>
              <p className={styles.remainderHeading}>
                Remainder Area
              </p>
              {remainderItems.map((item) => (
                <motion.div
                  key={item.id}
                  layoutId={item.id}
                  layout
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 50,
                  }}
                  className={styles.item}
                >
                  {item.index}
                </motion.div>
              ))}
            </div>
          )}
        </LayoutGroup>
      </div>

      <Equation
        dividend={numOfItems}
        divisor={numOfGroups}
        remainder={remainder}
      />
    </Card>
  );
}

export default DivisionGroupsDemo;