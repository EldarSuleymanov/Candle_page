import React, {useRef, useState} from 'react';
import {useEffect} from 'react';
import {Text} from 'react-native';
import {strings} from '../../../constants';
import {styles} from './styles';

export const Timing = () => {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');
  const [endOfAction, setEndOfAction] = useState();

  let interval = useRef();

  const startTimer = () => {
    const date = new Date(strings.setActionDate).getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const gap = date - now;

      const days = Math.floor(gap / 1000 / 60 / 60 / 24);
      const hours = Math.floor(gap / 1000 / 60 / 60) % 24;
      const minutes = Math.floor(gap / 1000 / 60) % 60;
      const seconds = Math.floor(gap / 1000) % 60;

      if (gap < 0) {
        clearInterval(interval.current);
        setEndOfAction(true);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
        setEndOfAction(false);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return !endOfAction ? (
    <Text style={styles.timingText}>
      {timerDays} {strings.days} {timerHours} {strings.hours} {timerMinutes}{' '}
      {strings.minutes} {timerSeconds} {strings.seconds}
    </Text>
  ) : (
    <Text style={styles.timingText}>{strings.endOfAction}</Text>
  );
};

export default Timing;
