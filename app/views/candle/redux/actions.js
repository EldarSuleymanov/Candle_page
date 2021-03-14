export const ThunkFunc = (jsonData) =>  {
    return function (dispatch) {

// data = JSON.parse(jsonData) // нет смысла парсить,  так как это уже объект
       dispatch(DataActionCreator(jsonData));        
}};


export const DataActionCreator = (data) => ({
   type: 'DATA_IN',
   payload: data,
});

export const ActionForTimer = (data) => ({
    type: 'SAVING_TIME',
    payload: data,
 });
