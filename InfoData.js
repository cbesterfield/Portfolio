import ImageThree from '../images/ImageThree.jpg';
import ImageSeven from '../images/ImageSeven.jpg';
import ImageML from '../images/ImageML.jpg';
import ImagePortfolio2 from '../images/ImagePortfolio2.jpg';
import ImageBitcoinHome from '../images/ImageBitcoinHome.jpg';


export const InfoData = {
    heading: 'Explore my Machine Learning Project',
    paragraphOne: 'This is preview of my machine learning project where I predicted the response outcome using popular algorithms of breast cancer data.',
    paragraphTwo: 'Using numpy, pandas, myplotlib, grid search, and SVM for different data sorting I was able to predict with high accuracy the responses of the breast cancer data set',
    github: 'github.com/cbesterfield/BreastCancerData/',
    buttonLabel: 'View Project',
    image: ImageThree,
    reverse: false,
    delay: 100
};

export const InfoDataTwo = {
    heading: 'Explore my Personal Website',
    paragraphOne: 'Looking at the movement and source code it would validate that the website is responsive and rendered dynamicaly. I used animations, hovering, and styled class components for the source code. Click the GitHub Icon below to view the source code.',
    buttonLabel: 'View Project',
    image: ImagePortfolio2,
    reverse: true,
    delay: 300
};

export const InfoDataThree = {
    heading: 'Explore my Data Analytics Project',
    paragraphOne: 'I used a dataset for boston diabetes cases and used common data analysis techniques from the sklearn package.',
    paragraphTwo: 'The big data analysis algorithms such as linear regression, random forest, heatmaps, decision tree, lasso, and ridge to calculate and compare mean squared errors.',
    buttonLabel: 'View Project',
    image: ImageML,
    reverse: true,
    delay: 300
};

export const InfoDataFour = {
    heading: 'Explore my Machine Learning Project',
    paragraphOne: 'I used yfinance, pandas, numpy and sklearn to analyze preprocess and predict the futures outcomes of Bitcoin in USD.',
    paragraphTwo: 'Using yfinance to load my data set I was able to obtain the closing prices of bitcoin. With this information I was able to gather the datframe using pandas and preprocess and clean my data using scalers as apart of the numpy array package. After I used LSTM along with dense and sequential functions for modeling and prediction.',
    buttonLabel: 'View Project',
    image: ImageBitcoinHome,
    reverse: true,
    delay: 300
};