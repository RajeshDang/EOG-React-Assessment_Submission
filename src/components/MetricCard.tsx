import React from "react";
import { Card, makeStyles, CircularProgress } from "@material-ui/core";
import { chartingColors } from '../Features/Charting/Charting'

const useStyles = makeStyles({
  root: {
    padding: '20px',
    color: '#FFFFFF'
  },
  title: {
    margin: 0
  },
  value: {
    margin: 0,
    fontSize: 40,
    fontFamily: 'Roboto'
  }
});

interface IMetricCard {
  title: string;
  value: string | number;
  index: number,
};

const MetricCard: React.SFC<IMetricCard> = ({ index = 0, title = '', value = '' }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} style={{ background: chartingColors[index] }}>
      <h4 className={classes.title}>{title}</h4>
      <h4 className={classes.value}>{
        value === ''
          ? <CircularProgress />
          : value
      }</h4>
    </Card>
  );
};

export default MetricCard;