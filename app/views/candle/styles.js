import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },

  headerContainer: {
    backgroundColor: '#ff3200',
    width: '100%',
    height: '8%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // flex: 0.1,
  },
  headerText: {
    textAlign: 'center',
    color: '#ffffff',
    textAlignVertical: 'center',
    height: '100%',
    fontSize: 20,
  },

  backButton: {
    width: 20,
    height: 20,
    marginLeft: '15%',
  },
  emptyContainer: {
    width: 20,
    height: 20,
    marginTop: '30%',
    marginRight: '15%',
  },

  timerContainer: {
    backgroundColor: '#ff6600',
    width: '100%',
    height: '8%',
    // flex: 0.08,
  },

  timerTextContainer: {
    marginLeft: 15,
  },

  timer: {
    marginLeft: '3%',
    width: 20,
    height: 20,
  },

  imageContainer: {
    // flex: 0.55,
    height: '55%',
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1,
    alignItems:'center',
    backgroundColor:'#ffffff'
  },

  infoContainer: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: '32%',
    // flex: 0.22,    
  },

  infoSubContainer: {
    flexDirection: 'row',
    // backgroundColor: 'grey',
    height: '40%',
    justifyContent: 'space-between',
  },

  productName: {
    // backgroundColor: 'red',
    textAlignVertical: 'center',
    fontSize: 20,
    marginLeft: '2%',
    height:'15%',
  },

  mainPrice: {
    marginLeft: '3%',
    fontSize: 24,
    height:'50%',
    width:'80%',
    // backgroundColor: 'green',
  },

  greenBucket: {
    marginRight: '3%',
    height: 60,
    width: 60,
  },

  containerForTables: {
    flexDirection: 'row',
    width: '90%',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    marginLeft: '3%',
    height:'50%'
  },

  Tables: {
    fontSize: 12,
    width: '30%',
    borderColor: '#808080',
    borderWidth: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    // backgroundColor:'green'
  },

  toBuyAndSoldContainer: {
    flexDirection: 'row',
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    height:'17%'
  },

  toBuyAndSoldText: {
    marginLeft: '3%',
    color: '#808080',
    marginRight:'3%',
    textAlignVertical:'center',
    // backgroundColor:'blue'
  },

  hashCode: {
    marginLeft: '3%',
    color: '#808080',
    textAlignVertical: 'center',
    // backgroundColor:'green',
    height:'100%'
  },  
});
