import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },

  headerContainer: {
    backgroundColor: '#ff3200',
    width: '100%',
    height: '10%',
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
    marginTop: 24,
    marginLeft: 10,
  },
  emptyContainer: {
    width: 20,
    height: 20,
    marginTop: 24,
    marginRight: 10,
  },

  timerContainer: {
    backgroundColor: '#ff6600',
    width: '100%',
    height: '8%',
    // flex: 0.08,
  },

  timerTextContainer: {
    flexDirection: 'column',
    marginLeft: 15,
    marginTop: '1%',
  },

  timer: {
    marginLeft: 10,
    marginTop: 15,
    width: 20,
    height: 20,
  },

  imageContainer: {
    backgroundColor: 'blue',
    // flex: 0.5,
    height: '55%',
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1,
  },

  infoContainer: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: '35%',
    // flex: 0.22,
  },

  infoSubContainer: {
    flexDirection: 'row',
    // backgroundColor: 'grey',
    height: '35%',
    justifyContent: 'space-between',
  },

  productName: {
    // backgroundColor: 'yellow',
    textAlignVertical: 'center',
    fontSize: 20,
    marginLeft: 10,
  },

  mainPrice: {
    marginLeft: 10,
    fontSize: 25,
    // backgroundColor: 'green',
    width: '50%',
  },

  greenBucket: {
    marginRight: 10,
    height: 60,
    width: 60,
  },

  containerForTables: {
    flexDirection: 'row',
    width: '90%',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    marginLeft: 10,
  },

  Tables: {
    fontSize: 12,
    width: 80,
    borderColor: '#808080',
    borderWidth: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  toBuyAndSoldContainer: {
    flexDirection: 'row',
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
  },

  toBuyAndSoldText: {
    marginLeft: 10,
    color: '#808080',
  },

  hashCode: {
    marginLeft: 10,
    height: '22%',
    color: '#808080',
    textAlignVertical: 'center',
  },

  tabNavigartion: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    width: '100%',
    height: '10%',
    // flex: 0.1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
