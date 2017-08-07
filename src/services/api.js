// for getting locally stored .json data only
const port = 3000 


const key = 'C496357C-2312-4D25-8F0E-8661E3ADAF76'


const endpoint = 'datasetname=RegionalIncome&TableName=CA1&LineCode=3&GeoFIPS=DE&%20Year=2014'
// api endpoint
export default `https://www.bea.gov/api/data/?&UserID=${key}&method=GetData&${endpoint}&ResultFormat=JSON&`