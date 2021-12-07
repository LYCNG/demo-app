let Google = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png';
let GA = 'https://developers.google.com/analytics/images/terms/logo_lockup_analytics_icon_vertical_black_2x.png';

const INIT_STATE ={
    src:GA
};

const reducer=(state=INIT_STATE,action)=>{
    switch(action.type){
        case 'google':
            return { src:Google};
        case 'google_Analytics':
            return { src:GA};
        default:
            return state
    }
}

export default reducer;