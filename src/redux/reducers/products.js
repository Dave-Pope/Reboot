const productReducer = (
    state = [
        {
            id: 1,
            image: require('../../assets/images/prev1.jpg'),
            name: 'Monthly Box',
            price: 40.13,
        },

        {
            id: 1,
            image: require('../../assets/images/prev2.jpg'),
            name: 'Monthly Box',
            price: 40.13,
        },

        {
            id: 1,
            image: require('../../assets/images/prev3.jpg'),
            name: 'Monthly Box',
            price: 40.13,
        },

        {
            id: 1,
            image: require('../../assets/images/prev7.jpg'),
            name: 'Monthly Box',
            price: 40.13,
        },

        {
            id: 1,
            image: require('../../assets/images/prev5.jpg'),
            name: 'Monthly Box',
            price: 40.13,
        },

        {
            id: 1,
            image: require('../../assets/images/prev6.jpg'),
            name: 'Monthly Box',
            price: 40.13,
        },

        {
            id: 1,
            image: require('../../assets/images/prev9.jpg'),
            name: 'Monthly Box',
            price: 40.13,
        },

        {
            id: 1,
            image: require('../../assets/images/prev4.jpg'),
            name: 'Monthly Box',
            price: 40.13,
        },
    ],
    action
) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default productReducer;
