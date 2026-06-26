const formatDate = (date) => {
    let month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();

    month = month > 9 ? month : "0" + month;

    return `${year}-${month}-${day}`;
};

const getToday = () => {
    const date = new Date();
    const formattedDate = formatDate(date)
    return formattedDate;

};

const addDay = (fromDate, dayToAdd) => {
    const dt = new Date(fromDate);
    dt.setDate(dt.getDate() + dayToAdd);
    return formatDate(dt);
};
module.exports = { getToday, addDay };
