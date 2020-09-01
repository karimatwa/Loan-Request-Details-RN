import React from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';
import {icons} from '../Components/icons';
import ScoreItem from '../Components/ScoreItem';
import Slider from 'react-native-slider';
import FinancialHealthRow from '../Components/FinancialHealthRow';
import AppButton from '../Components/AppButton';
import {generateGradient} from '../Components/Gradients';

/*
This is our page, inside the container of this screen we have 3 sections: creditScore, financialHealth, offerInformation
I have mostly used FlexBox to make the front end design, to keep it consistent and compatible with different screen sizes. 
Hence, I have kept the field margins to a minimum.
Concerning the first section, creditScore, I have used a ScoreItem component to display the score.
For the second section, financialHealth, I have created a row item called FinancialHealthRow that returns 2 box fields with 
the desired data.

For the last section, offerInformation, I have only found it useful to create a custom app button and I have decided to take 
another approach and divide this section to different Body sections with different Flex values to control the space distribution.
After many trials and fails working on the linear gradient track of the slider. I have decided to go with the closest approach
possibe to meet the required design - I have created a function called generateGradient in Gradients.js in Components folder
to simulate a linear gradient effect for the slider based on the current percentage of the slider. The percentage text above the slider
is also linked to the slider using useState.
*/
const LoanRequestDetails = ({navigation}) => {
  const [data, setData] = React.useState({
    value: 0.04,
  });

  return (
    <View style={styles.container}>
      <View style={styles.creditScore}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.AvatarView}>
            <View style={{alignItems: 'center'}}>
              <Image style={styles.icon} source={icons.avatar.uri} />
            </View>
          </View>
          <View style={styles.AvatarTextView}>
            <Text style={styles.title}>IO</Text>
            <View style={{flexDirection: 'row'}}>
              <ScoreItem
                title={'LENME SCORE'}
                icon={icons.score1.uri}
                score={'73'}
              />
              <ScoreItem
                title={'CREDIT SCORE'}
                icon={icons.score2.uri}
                score={'500-630'}
              />
            </View>
            <Text style={styles.score}>Vantage Score 4.0</Text>
          </View>
        </View>
      </View>

      <View style={styles.financialHealth}>
        <FinancialHealthRow
          title={'PAYMENT HISTORY'}
          text={'1 yr 5 mos'}
          status={icons.greenStatus.uri}
          title2={'CREDIT UTILIZATION'}
          text2={'100%'}
          status2={icons.greenStatus.uri}
        />
        <FinancialHealthRow
          title={'TOTAL ACCOUNTS'}
          text={'2'}
          status={icons.orangeStatus.uri}
          title2={'TOTAL ACCOUNTS'}
          text2={'11%'}
          status2={icons.orangeStatus.uri}
        />
        <FinancialHealthRow
          title={'ANNUAL INCOME'}
          text={'$53,000/yr'}
          status={icons.orangeStatus.uri}
          title2={'DEROGATORY MARKS'}
          text2={'3'}
          status2={icons.orangeStatus.uri}
        />
      </View>

      <View style={styles.offerInformation}>
        <View style={styles.body1}>
          <View style={{flex: 0.5, justifyContent: 'center'}}>
            <View style={{flex: 0.6, justifyContent: 'center'}}>
              <Text
                style={{
                  color: '#BD2EFF',
                  fontFamily: 'Helvetica',
                  fontSize: 15,
                }}>
                Investement Amount
              </Text>
            </View>
            <View style={{flexDirection: 'row', flex: 0.4}}>
              <View
                style={{
                  height: 23,
                  marginRight: 5,
                  marginTop: 2,
                }}>
                <Text
                  style={{
                    color: '#000000',
                    fontFamily: 'Avenir-Medium',
                    fontSize: 18,
                    marginTop: 3,
                  }}>
                  $
                </Text>
              </View>
              <Text
                style={{
                  color: '#000000',
                  fontFamily: 'Avenir-Medium',
                  fontSize: 30,
                }}>
                970
              </Text>
            </View>
          </View>
          <View style={{flex: 0.5}}>
            <View style={{flex: 0.6, justifyContent: 'center'}}>
              <Text
                style={{
                  color: '#BD2EFF',
                  fontFamily: 'Helvetica',
                  fontSize: 15,
                }}>
                Payback Period
              </Text>
            </View>
            <View style={{flexDirection: 'row', flex: 0.4}}>
              <Text
                style={{
                  color: '#000000',
                  fontFamily: 'Avenir-Medium',
                  fontSize: 30,
                }}>
                1
              </Text>
              <View
                style={{
                  height: 23,
                  marginRight: 5,
                  marginTop: 2,
                }}>
                <Text
                  style={{
                    color: '#000000',
                    fontFamily: 'Avenir-Medium',
                    fontSize: 18,
                    marginTop: 3,
                  }}>
                  month
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.body2}>
          <Text
            style={{color: '#BD2EFF', fontFamily: 'Helvetica', fontSize: 15}}>
            Annual Interests
          </Text>
          <Text
            style={{
              color: '#9B9B9B',
              fontFamily: 'Avenir-Roman',
              fontSize: 15,
              marginVertical: 5,
            }}>
            Recommended interest rate: 3%
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                height: 30,
              }}>
              <Text
                style={{
                  color: '#000000',
                  fontFamily: 'Avenir-Medium',
                  fontSize: 30,
                }}>
                {(data.value * 100).toFixed(0)}
              </Text>
            </View>
            <Text
              style={{
                color: '#000000',
                fontFamily: 'Avenir-Medium',
                fontSize: 18,
                marginTop: 5,
                marginLeft: 3,
              }}>
              %
            </Text>
          </View>
        </View>
        <View style={styles.body3}>
          <Slider
            value={data.value}
            onValueChange={(value) => {
              setData({
                ...data,
                value: value,
              });
            }}
            minimumTrackTintColor={generateGradient(
              '#BF2BFF',
              '#568FFC',
              data.value,
            )}
            maximumTrackTintColor={'#D8D8D8'}
            thumbStyle={styles.thumb}
            trackStyle={styles.track}
          />
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 0.1, alignItems: 'flex-start'}}>
              <Text
                style={{
                  fontFamily: 'Avenir-Roman',
                  fontSize: 15,
                  color: '#9B9B9B',
                }}>
                0%
              </Text>
            </View>
            <View style={{flex: 0.78}} />
            <View style={{flex: 0.12, alignItems: 'flex-end'}}>
              <Text
                style={{
                  fontFamily: 'Avenir-Roman',
                  fontSize: 15,
                  color: '#9B9B9B',
                }}>
                100%
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.body4}>
          <AppButton
            onPress={() => {}}
            title={'Dismiss'}
            Bcolor={'#FFFFFF'}
            Tcolor={'#FF4040'}
            Grad={false}
          />
          <View style={{backgroundColor: '#F8F8F8', marginTop: 10}}>
            <AppButton
              onPress={() => {}}
              title={'Make Offer'}
              Bcolor={'black'}
              Tcolor={'#FFFFFF'}
              Grad={true}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoanRequestDetails;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  creditScore: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F8F8',
  },
  financialHealth: {
    flex: 0.3,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
  },
  offerInformation: {
    flex: 0.55,
    marginHorizontal: 39,
  },
  body1: {
    flex: 0.2,
    flexDirection: 'row',
  },
  body2: {
    flex: 0.3,
    justifyContent: 'center',
  },
  body3: {
    flex: 0.15,
  },
  body4: {
    flex: 0.35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  AvatarView: {
    flex: 0.35,
  },
  AvatarTextView: {
    flex: 0.75,
    justifyContent: 'center',
  },
  image: {
    width: 80,
    height: 80,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Avenir-Heavy',
  },
  score: {
    fontSize: 9.6,
    fontFamily: 'Avenir-Heavy',
    color: '#9B9B9B',
  },
  track: {
    height: 6,
    borderRadius: 3,
  },
  thumb: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 6},
    shadowRadius: 2,
    shadowOpacity: 0.35,
  },
});
