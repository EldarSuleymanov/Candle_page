import React from 'react';
import {useEffect} from 'react';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ActionForTimer} from '../redux/actions';
import {styles} from './styles';

export const Timing = () => {
  const date = new Date('march 13 2022 14:13:00');
  const now = new Date();
//   const dispatch = useDispatch();
//   const now2 = useSelector(state => state.now);
  const gap = date - now;

//   useEffect(() => {
//     setInterval(dispatch(ActionForTimer(now)), 1000);
//   }, [now2, gap]);

  const days = Math.floor(gap / 1000 / 60 / 60 / 24);
  const hours = Math.floor(gap / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(gap / 1000 / 60) % 60;
  const seconds = Math.floor(gap / 1000) % 60;

  return gap > 0 ? (
    <Text style={styles.timingText}>
      {days} ДНЯ {hours} ЧАСОВ(A) {minutes} МИНУТ(Ы) {seconds} СЕКУНД
    </Text>
  ) : (
    <Text style={styles.timingText}>Конец Акции</Text>
  );
};

export default Timing;
