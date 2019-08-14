/**
 * Demo Screen
 *
 */

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  TouchableHighlight,
  Image,
  Platform,
  Dimensions,
  PixelRatio,
} from "react-native";
import {
  Container,
  Content,
  Text,
  StyleProvider,
  Header,
  Left,
  Right,
  Button,
  Icon,
  Body,
  Title,
  CardItem,
  Thumbnail,
  Card,
  Badge,
  Fab,
} from "native-base";
import Carousel, { Pagination } from "react-native-snap-carousel";

import getTheme from "../../native-base-theme/components";
import material from "../../native-base-theme/variables/material";
import Report from "../assets/images/btn_report.svg";
import Close from "../assets/images/btn_close.svg";
import Share from "../assets/images/btn_share.svg";
import CoffeeBtn1 from "../assets/images/btn_coffee_1.svg";
import CoffeeBtn3 from "../assets/images/btn_coffee_3.svg";
import TJ from "../assets/images/3J.svg";

const profile = require("../assets/images/profile.png");
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const headerIconHeight = 24;
const headerIconWidth = 24;

function CarouselItem({ item, index }) {
  return (
    <Image
      source={item.src}
      style={{
        width: "100%",
        height: deviceWidth - 100,
      }}
    />
  );
}

function CheckIcon() {
  return (
    <Icon
      type="FontAwesome5"
      name="check"
      style={styles.userInfoBlockRightIcon}
    />
  );
}

interface AppProps {}

interface AppState {
  entries: array<Object>;
  activeSlide: number;
}

export default class App extends React.Component<any, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      entries: [{ src: profile }, { src: profile }],
      activeSlide: 0,
    };
  }
  get pagination() {
    const { entries, activeSlide } = this.state;
    return (
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        containerStyle={{
          backgroundColor: "transparent",
          opacity: 0.96,
          top: -20,
          position: "absolute",
          zIndex: 1000,
          width: "100%",
          left: 0,
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: "white",
        }}
        inactiveDotStyle={{
          backgroundColor: "black",
        }}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
      />
    );
  }
  render() {
    const theme = getTheme(material);
    return (
      <StyleProvider style={theme}>
        <Container>
          {/* Header */}
          <Header transparent>
            <Left>
              <TouchableHighlight style={styles.headerIcon}>
                <Close width={headerIconWidth} height={headerIconHeight} />
              </TouchableHighlight>
            </Left>
            <Body style={styles.headerBody}>
              <Title style={styles.headerTitle}>User Profile</Title>
            </Body>
            <Right style={styles.headerRight}>
              <TouchableHighlight style={styles.headerIcon}>
                <Report width={headerIconWidth} height={headerIconHeight} />
              </TouchableHighlight>
              <TouchableHighlight style={styles.headerIcon}>
                <Share width={headerIconWidth} height={headerIconHeight} />
              </TouchableHighlight>
            </Right>
          </Header>
          {/* Header */}
          <Content>
            {/* Carousel */}
            <View>
              {this.pagination}
              <View style={styles.carouselContainer}>
                <View style={styles.carouselContent}>
                  <Badge style={styles.carouselPhotoBadge}>
                    <Text style={styles.carouselPhotoText}>Photo verified</Text>
                  </Badge>
                  <Badge style={styles.carouselSalaryBadge}>
                    <Text style={styles.carouselSalaryText}>Salary $100K+</Text>
                  </Badge>
                  <Text style={styles.carouselUserText}>Julia, 28</Text>
                </View>
                <View style={styles.carouselMessageContainer}>
                  <Text style={styles.carouselMessage}>
                    Successfully matched
                  </Text>
                </View>
              </View>
              <Carousel
                data={this.state.entries}
                renderItem={CarouselItem}
                sliderWidth={deviceWidth}
                itemWidth={deviceWidth}
                onBeforeSnapToItem={index =>
                  this.setState({ activeSlide: index })
                }
              />
            </View>
            {/* Carousel */}

            <View style={styles.contactNumberContainer}>
              <Text style={styles.contactNumberText}>1-213-123-4567</Text>
            </View>
            <View style={styles.userInfoContainer}>
              <View style={styles.userInfoContent}>
                <View style={styles.userInfoBlock}>
                  <View style={styles.userInfoBlockText}>
                    <Text>Manhattan</Text>
                  </View>
                  <View style={styles.userInfoBlockRight}>
                    <View style={styles.userInfoBlockRightRow}>
                      <Text style={styles.userInfoBlockRightText}>
                        Stanford Univ
                      </Text>
                      <Badge style={styles.userInfoBlockRightBadge}>
                        <CheckIcon />
                      </Badge>
                    </View>
                  </View>
                </View>
                <View style={styles.userInfoBlock}>
                  <View style={styles.userInfoBlockText}>
                    <Text>Thin, 168cm</Text>
                  </View>
                  <View style={styles.userInfoBlockRight}>
                    <View style={styles.userInfoBlockRightRow}>
                      <Text style={styles.userInfoBlockRightText}>Lawyer</Text>
                      <Badge style={styles.userInfoBlockRightBadge}>
                        <CheckIcon />
                      </Badge>
                    </View>
                  </View>
                </View>
                <View style={styles.userInfoBlock}>
                  <View style={styles.userInfoBlockText}>
                    <Text>Christian</Text>
                  </View>
                  <View style={styles.userInfoBlockRight}>
                    <View style={styles.userInfoBlockRightRow}>
                      <Text style={styles.userInfoBlockRightText}>
                        Non Smoker
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.userPIBlock}>
                  <View style={styles.userPIBlockTextContainer}>
                    <Text style={styles.userPIBlockText}>Fitness</Text>
                  </View>
                  <View style={styles.userPIBlockRight}>
                    <View style={styles.userPIBlockRightContainer}>
                      <Badge style={styles.userPIFitnessBadge}>
                        <Text style={styles.userPIFitnessBadgeText}>
                          Equinox
                        </Text>
                      </Badge>
                      <Text style={styles.userPIFitnessText}>
                        1-2 times / week
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.userPIBlock}>
                  <View style={styles.userPIBlockTextContainer}>
                    <Text style={styles.userPIBlockText}>Interest</Text>
                  </View>
                  <View style={styles.userPIBlockRight}>
                    <View style={styles.userInterest}>
                      <Badge style={styles.userInterestBadge}>
                        <Text style={styles.userInterestBadgeText}>
                          Jogging
                        </Text>
                      </Badge>
                      <Badge style={styles.userInterestBadge}>
                        <Text style={styles.userInterestBadgeText}>Travel</Text>
                      </Badge>
                      <Badge style={styles.userInterestBadge}>
                        <Text style={styles.userInterestBadgeText}>Yoga</Text>
                      </Badge>
                      <Badge style={styles.userInterestBadge}>
                        <Text style={styles.userInterestBadgeText}>
                          Cooking
                        </Text>
                      </Badge>
                      <Badge style={styles.userInterestBadge}>
                        <Text style={styles.userInterestBadgeText}>Stock</Text>
                      </Badge>
                      <Badge style={styles.userInterestBadge}>
                        <Text style={styles.userInterestBadgeText}>
                          Festival
                        </Text>
                      </Badge>
                      <Badge style={styles.userInterestBadge}>
                        <Text style={styles.userInterestBadgeText}>IT</Text>
                      </Badge>
                    </View>
                  </View>
                </View>
                <View style={styles.userPIBlock}>
                  <View style={styles.userPIBlockTextContainer}>
                    <Text style={styles.userPIBlockText}>Intro</Text>
                  </View>
                  <View style={styles.userPIBlockRight}>
                    <View style={styles.userIntroText}>
                      <Text>
                        Hi. My name is Jullia\nI live in Manhattan\nI love
                        watching movies and enjoy\njogging.
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </Content>
          {/* FAB */}
          <View style={styles.fabContainer}>
            <View style={styles.fabLike}>
              <View>
                <TJ width={30} />
              </View>
            </View>
            <View style={styles.fabBtn}>
              <CoffeeBtn3 width={66} height={66} />
            </View>
            <View style={styles.fabBtn}>
              <CoffeeBtn1 width={52} height={52} />
            </View>
          </View>
          {/* FAB */}
        </Container>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  headerBody: {
    alignItems: "center",
    width: "100%",
  },
  headerTitle: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 15,
    marginBottom: 14,
  },
  headerRight: { maxWidth: 80 },
  headerIcon: { margin: 5 },
  carouselContainer: {
    position: "absolute",
    left: 0,
    bottom: 0,
    zIndex: 10000,
    width: "100%",
  },
  carouselContent: {
    margin: 15,
  },
  carouselPhotoBadge: {
    borderColor: "#47DDD2",
    borderRadius: 3,
    marginRight: 3,
    marginVertical: 4,
    borderWidth: 1,
    backgroundColor: "transparent",
  },
  carouselPhotoText: {
    fontSize: 11,
    color: "#47DDD2",
    fontWeight: "500",
  },
  carouselSalaryBadge: {
    borderRadius: 3,
    marginRight: 3,
    marginVertical: 4,
    borderWidth: 1,
    borderColor: "#EAAD55",
    backgroundColor: "transparent",
  },
  carouselSalaryText: {
    color: "#EAAD55",
    fontSize: 11,
    fontWeight: "500",
  },
  carouselUserText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  carouselMessageContainer: {
    backgroundColor: "#FCD86F",
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  carouselMessage: {
    color: "#222222",
    alignSelf: "center",
    fontSize: 14,
    fontWeight: "500",
    paddingVertical: 4,
    paddingHorizontal: 15.5,
  },
  contactNumberContainer: {
    flexDirection: "column",
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
    left: "0%",
    right: "0%",
    height: 48,
  },
  contactNumberText: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  userInfoContainer: { paddingBottom: 100 },
  userInfoContent: { padding: 16 },
  userInfoBlock: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  userInfoBlockText: { padding: 5, flex: 2 },
  userInfoBlockRight: {
    padding: 5,
    flex: 3,
    justifyContent: "flex-start",
  },
  userInfoBlockRightRow: { flexDirection: "row" },
  userInfoBlockRightText: { marginHorizontal: 5 },
  userInfoBlockRightBadge: {
    backgroundColor: "#3085F9",
    justifyContent: "center",
  },
  userInfoBlockRightIcon: {
    fontSize: 15,
    color: "#fff",
    lineHeight: 20,
  },
  userPIBlock: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  userPIBlockTextContainer: { padding: 5, flex: 1 },
  userPIBlockText: { color: "#BBBBBB" },
  userPIBlockRight: { padding: 5, flex: 3.5 },
  userPIBlockRightContainer: { flexDirection: "row", alignSelf: "flex-start" },
  userPIFitnessBadge: { backgroundColor: "black", borderRadius: 3 },
  userPIFitnessBadgeText: { color: "white" },
  userPIFitnessText: { marginLeft: 8 },
  userInterest: {
    flexDirection: "row",
    alignSelf: "auto",
    flexWrap: "wrap",
  },
  userInterestBadge: {
    backgroundColor: "#F6F6F6",
    borderRadius: 3,
    marginRight: 3,
    marginVertical: 4,
  },
  userInterestBadgeText: { color: "black" },
  userIntroText: { flexDirection: "row", alignSelf: "flex-start" },
  fabContainer: {
    bottom: 0,
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 22,
    position: "absolute",
    width: "100%",
    left: 0,
  },
  fabLike: {
    backgroundColor: "#8B959D",
    marginLeft: 30,
    borderRadius: 50,
    width: 52,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
  },
  fabBtn: {
    marginLeft: 30,
    borderRadius: 50,
    height: 66,
    width: 66,
  },
});
