import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './styles';
import {Timing} from './logic';
import {ThunkFunc} from './redux/actions';
import {strings} from '../../constants';

const CandleScreen = () => {
  const back = require('../../images/back.png');
  const candle = require('../../images/candle.png');
  const clock = require('../../images/clock.png');

  const arrowRight = require('../../images/arrowRight.png');
  const arrowLeft = require('../../images/arrowLeft.png');
  const addProduct = require('../../images/addProduct.png');

  const jsonData = require('../../info.json');
  const dispatch = useDispatch();
  const dataFromStore = useSelector(state => state.data);

  useEffect(() => {
    dispatch(ThunkFunc(jsonData));
  }, []);

  return (
    <SafeAreaView style={styles.mainView}>
      {/* <ScrollView> */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={{justifyContent:'center'}} >
          <Image style={styles.backButton} source={back} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{strings.recipient}</Text>
        <View style={styles.emptyContainer} />
      </View>

      <View style={styles.timerContainer}>
        <View style={{flexDirection: 'row', alignItems:'center', height:'100%'}}>
          <Image style={styles.timer} source={clock} />
          
          <View style={styles.timerTextContainer}>
            <Text style={{color:'#ffffff'}}>{strings.left} </Text>
            <Timing />
          </View>
        </View>
      </View>

      <View style={styles.imageContainer}>
        <Image style={{width: '60%', height: '100%'}} source={candle} />
      </View>

      <View style={styles.infoContainer}>
        <View style = {{flex:1}}>

        
        <Text style={styles.productName}>{dataFromStore.product_name}</Text>

        <View style={styles.infoSubContainer}>
          <View style={{width: '80%'}}>
            <Text style={styles.mainPrice}>{dataFromStore.product_price}</Text>

            <View style={styles.containerForTables}>
              <TouchableOpacity>
                <Image style={{height:'100%'}} source={arrowLeft} />
              </TouchableOpacity>

              <Text style={styles.Tables}>{dataFromStore.priceFor3}</Text>
              <Text style={styles.Tables}>{dataFromStore.priceFor10}</Text>
              <Text style={styles.Tables}>{dataFromStore.priceFor20}</Text>

              <TouchableOpacity>
                <Image style={{height:'100%'}} source={arrowRight} />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity>
            <Image style={styles.greenBucket} source={addProduct} />
          </TouchableOpacity>
        </View>

        <View style={styles.toBuyAndSoldContainer}>
          <Text style={styles.toBuyAndSoldText}>
            {strings.toBuy}
            <Text style={{color: '#000000'}}>{dataFromStore.mustHave} </Text>
          </Text>
          <Text style={styles.toBuyAndSoldText}>
            {strings.sold}
            <Text style={{color: '#000000'}}> {dataFromStore.sold} </Text>
          </Text>
        </View>
        <View style ={{height:"17%"}}>
        <Text style={styles.hashCode}>
          {strings.art_code} {dataFromStore.hashCode}
        </Text>

        </View>
      </View>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default CandleScreen;
