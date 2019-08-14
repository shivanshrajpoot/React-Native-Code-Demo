/**
 * Demo Screen
 *
 * @format
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

import getTheme from "../../native-base-theme/components";
import material from "../../native-base-theme/variables/material";
import Report from "../assets/images/btn_report.svg";
import Close from "../assets/images/btn_close.svg";
import Share from "../assets/images/btn_share.svg";
import CoffeeBtn1 from "../assets/images/btn_coffee_1.svg";
import CoffeeBtn3 from "../assets/images/btn_coffee_3.svg";
import TJ from "../assets/images/3J.svg";

const profile = require("../assets/images/profile.png");

const App = () => {
  return (
    <StyleProvider style={getTheme(material)}>
      <Container>
        <Header transparent>
          <Left>
            <TouchableHighlight style={{ margin: 5 }}>
              <Close width={24} height={24} />
            </TouchableHighlight>
          </Left>
          <Body style={{ alignItems: "center" }}>
            <Title
              style={{
                color: "black",
                fontSize: 16,
                justifyContent: "center",
                marginTop: 15,
                marginBottom: 14,
              }}
            >
              User Profile
            </Title>
          </Body>
          <Right>
            <TouchableHighlight style={{ margin: 5 }}>
              <Report width={24} height={24} />
            </TouchableHighlight>
            <TouchableHighlight style={{ margin: 5 }}>
              <Share width={24} height={24} />
            </TouchableHighlight>
          </Right>
        </Header>
        <Content>
          {/* <Card>
            <CardItem cardBody>
              <Image
                source={profile}
                style={{ height: 300, width: null, flex: 1 }}
              />
            </CardItem>
            
          </Card> */}
          <View>
            <Image
              source={profile}
              style={{
                height: 300,
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "column",
              backgroundColor: "#F6F6F6",
              justifyContent: "center",
              left: "0%",
              right: "0%",
              height: 48,
              // bottom: "45.57%",
            }}
          >
            <Text style={{ alignSelf: "center", fontWeight: "bold" }}>
              1-213-123-4567
            </Text>
          </View>
          <View style={{}}>
            <View style={{ padding: 16 }}>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <View style={{ padding: 5, flex: 2 }}>
                  <Text>Manhattan</Text>
                </View>
                <View
                  style={{ padding: 5, flex: 3, justifyContent: "flex-start" }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ marginHorizontal: 5 }}>Stanford Univ</Text>
                    <Badge
                      style={{
                        backgroundColor: "#3085F9",
                        justifyContent: "center",
                      }}
                    >
                      <Icon
                        type="FontAwesome5"
                        name="check"
                        style={{ fontSize: 15, color: "#fff", lineHeight: 20 }}
                      />
                    </Badge>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <View style={{ padding: 5, flex: 2 }}>
                  <Text>Thin, 168cm</Text>
                </View>
                <View
                  style={{ padding: 5, flex: 3, justifyContent: "flex-start" }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ marginHorizontal: 5 }}>Lawyer</Text>
                    <Badge
                      style={{
                        backgroundColor: "#3085F9",
                        justifyContent: "center",
                      }}
                    >
                      <Icon
                        type="FontAwesome5"
                        name="check"
                        style={{ fontSize: 15, color: "#fff", lineHeight: 20 }}
                      />
                    </Badge>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <View style={{ padding: 5, flex: 2 }}>
                  <Text>Christial</Text>
                </View>
                <View
                  style={{ padding: 5, flex: 3, justifyContent: "flex-start" }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ marginHorizontal: 5 }}>Non Smoker</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  marginTop: 10,
                }}
              >
                <View style={{ padding: 5, flex: 1 }}>
                  <Text style={{ color: "#BBBBBB" }}>Fitness</Text>
                </View>
                <View style={{ padding: 5, flex: 3.5 }}>
                  <View
                    style={{ flexDirection: "row", alignSelf: "flex-start" }}
                  >
                    <Badge
                      style={{ backgroundColor: "black", borderRadius: 3 }}
                    >
                      <Text style={{ color: "white" }}>Equinox</Text>
                    </Badge>
                    <Text style={{ marginLeft: 8.67 }}>1-2 times / week</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  marginTop: 10,
                }}
              >
                <View style={{ padding: 5, flex: 1 }}>
                  <Text style={{ color: "#BBBBBB" }}>Interest</Text>
                </View>
                <View style={{ padding: 5, flex: 3.5 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignSelf: "space-between",
                      flexWrap: "wrap",
                    }}
                  >
                    <Badge
                      style={{
                        backgroundColor: "#F6F6F6",
                        borderRadius: 3,
                        marginRight: 3,
                        marginVertical: 4,
                      }}
                    >
                      <Text style={{ color: "black" }}>Jogging</Text>
                    </Badge>
                    <Badge
                      style={{
                        backgroundColor: "#F6F6F6",
                        borderRadius: 3,
                        marginRight: 3,
                        marginVertical: 4,
                      }}
                    >
                      <Text style={{ color: "black" }}>Travel</Text>
                    </Badge>
                    <Badge
                      style={{
                        backgroundColor: "#F6F6F6",
                        borderRadius: 3,
                        marginRight: 3,
                        marginVertical: 4,
                      }}
                    >
                      <Text style={{ color: "black" }}>Yoga</Text>
                    </Badge>
                    <Badge
                      style={{
                        backgroundColor: "#F6F6F6",
                        borderRadius: 3,
                        marginRight: 3,
                        marginVertical: 4,
                      }}
                    >
                      <Text style={{ color: "black" }}>Cooking</Text>
                    </Badge>
                    <Badge
                      style={{
                        backgroundColor: "#F6F6F6",
                        borderRadius: 3,
                        marginRight: 3,
                        marginVertical: 4,
                      }}
                    >
                      <Text style={{ color: "black" }}>Stock</Text>
                    </Badge>
                    <Badge
                      style={{
                        backgroundColor: "#F6F6F6",
                        borderRadius: 3,
                        marginRight: 3,
                        marginVertical: 4,
                      }}
                    >
                      <Text style={{ color: "black" }}>Festival</Text>
                    </Badge>
                    <Badge
                      style={{
                        backgroundColor: "#F6F6F6",
                        borderRadius: 3,
                        marginRight: 3,
                        marginVertical: 4,
                      }}
                    >
                      <Text style={{ color: "black" }}>IT</Text>
                    </Badge>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  marginTop: 10,
                }}
              >
                <View style={{ padding: 5, flex: 1 }}>
                  <Text style={{ color: "#BBBBBB" }}>Intro</Text>
                </View>
                <View style={{ padding: 5, flex: 3.5 }}>
                  <View
                    style={{ flexDirection: "row", alignSelf: "flex-start" }}
                  >
                    <Text style={{ marginLeft: 8.67 }}>
                      Hi. My name is Jullia\nI live in Manhattan\nI love
                      watching movies and enjoy\njogging.
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Content>
        <View
          style={{
            bottom: 0,
            backgroundColor: "transparent",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 22,
            transparent: true,
          }}
        >
          <View
            style={{
              backgroundColor: "#8B959D",
              marginLeft: 30,
              borderRadius: 50,
              width: 52,
              height: 52,
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignSelf: "center",
                flexDirection: "row",
              }}
            >
              <TJ width={30} />
            </View>
          </View>
          <View
            style={{
              marginLeft: 30,
              borderRadius: 50,
              height: 66,
              width: 66,
            }}
          >
            <CoffeeBtn3 width={66} height={66} />
          </View>
          <View
            style={{
              marginLeft: 30,
              borderRadius: 50,
              height: 52,
              width: 52,
            }}
          >
            <CoffeeBtn1 width={52} height={52} />
          </View>
        </View>
      </Container>
    </StyleProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
