import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Artist from "../components/Explore/Artist";
import TrackList from "../components/Explore/TrackList";
import ConcertList from "../components/Explore/ConcertList";
import Cylinder from "../components/Explore/Cylinder";
import BrandList from "../components/Explore/BrandList";
import Category from "../components/Explore/Category";

const { height, width } = Dimensions.get("window");

export default class PromoterEventSignup extends Component {
  constructor() {
    super();
    this.state = {
      value: "Submit Interest"
    };
  }

  onClick() {
    this.setState({ value: "Interest Sent" });
  }

  render() {
    return (
      <View
        style={{ flex: 1, backgroundColor: "#060A25", fontFamily: "Roboto" }}
      >
        <ScrollView
          style={{ marginTop: 60 }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          <View style={styles.line}></View>

          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 21,
                fontWeight: "500",
                color: "white",
                marginLeft: 20,
                marginRight: 115,
                marginTop: 25,
                lineHeight: 25,
                marginBottom: 20
              }}
            >
              Bio Summary
            </Text>
            <View style={{ marginTop: 15 }}>
              <View style={styles.cylinder}>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#D87FF9",
                    textAlign: "center",
                    lineHeight: 16,
                    marginTop: 12
                  }}
                >
                  Edit
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.rect}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../assets/shan.png")}
                style={{
                  width: 80,
                  height: 132,
                  borderRadius: 8,
                  marginTop: 15,
                  marginLeft: 15
                }}
              />
              <View style={{ marginLeft: 17, marginTop: 17 }}>
                <Text style={styles.BioText}>Shan Vincent de Paul</Text>
                <Text style={styles.Bioproffession}>Hip Hop / RnB</Text>
                <Text style={styles.Bioplace}>Toronto . Mumbai</Text>
                <View style={{ flexDirection: "row", marginTop: 20 }}>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.BioViewCount}>12.1 K</Text>
                    <Text style={styles.Bio}> FANS</Text>
                  </View>
                  <View style={{ flexDirection: "row", marginLeft: 10 }}>
                    <Text style={styles.BioViewCount}>23</Text>
                    <Text style={styles.Bio}> TRACKS</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View>
              <View style={styles.directionHalf}></View>
              <View style={styles.direction}></View>
              <View style={styles.direction}></View>
              <View style={styles.directionHalf}></View>
            </View>
            <View>
              <Text style={styles.interest}> is interested in </Text>
            </View>
          </View>

          <View style={styles.rect}>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../assets/humma1.png")}
                style={{
                  width: 80,
                  height: 132,
                  borderRadius: 8,
                  marginTop: 15,
                  marginLeft: 15
                }}
              />
              <View style={{ marginLeft: 17, marginTop: 17 }}>
                <Text style={styles.BioText}>Humma 2020</Text>
                <Text style={styles.Bioplace}>
                  YMCA Grounds, Nandanam, Chennai
                </Text>
                <Text style={styles.Bioplace}>Tue,June 14, 2020</Text>
                <View style={{ flexDirection: "row", marginTop: 20 }}>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.BioViewCount}>620</Text>
                    <Text style={styles.Bio}> ATTENDING</Text>
                  </View>
                  <View style={{ flexDirection: "row", marginLeft: 10 }}>
                    <Text style={styles.BioViewCount}>6</Text>
                    <Text style={styles.Bio}> ARTISTS</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={{ marginTop: 45 }}>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 21,
                  fontWeight: "500",
                  color: "white",
                  marginLeft: 20,
                  marginRight: 100,

                  lineHeight: 25,
                  marginBottom: 20
                }}
              >
                Popular Tracks
              </Text>
              <View style={{ marginTop: -13 }}>
                <View style={styles.cylinder}>
                  <View style={{ marginLeft: 15, marginTop: 10 }}>
                    <Ionicons name="md-close" color="#D87FF9" size={18} />
                  </View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#D87FF9",
                      textAlign: "center",
                      lineHeight: 16,
                      marginTop: -16,
                      marginLeft: 10
                    }}
                  >
                    Remove
                  </Text>
                </View>
              </View>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.container}
            >
              <TouchableOpacity>
                <Category
                  imageUri={require("../assets/Img1.png")}
                  name="Thank God"
                  count="1,567"
                  percent="6"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Category
                  imageUri={require("../assets/Trigger.jpg")}
                  name="Trigger Happy Heartbreak"
                  count="4,500"
                  percent="9"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Category
                  imageUri={require("../assets/Shan1.png")}
                  name="Best Friends"
                  count="2,209"
                  percent="8"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Category
                  imageUri={require("../assets/Mridangam.jpg")}
                  name="SVDP 2"
                  count="8109"
                  percent="5"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Category
                  imageUri={require("../assets/WantyouShan.jpg")}
                  name="Want You"
                  count="9,906"
                  percent="7"
                />
              </TouchableOpacity>
            </ScrollView>
          </View>

          <View style={{ marginTop: 45 }}>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 21,
                  fontWeight: "500",
                  color: "white",
                  marginLeft: 20,
                  marginRight: 100,

                  lineHeight: 25,
                  marginBottom: 20
                }}
              >
                Previous Events
              </Text>
              <View style={{ marginTop: -13 }}>
                <View style={styles.cylinder}>
                  <View style={{ marginLeft: 15, marginTop: 10 }}>
                    <Ionicons name="md-close" color="#D87FF9" size={18} />
                  </View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: "#D87FF9",
                      textAlign: "center",
                      lineHeight: 16,
                      marginTop: -16,
                      marginLeft: 10
                    }}
                  >
                    Remove
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.list}
            >
              {this.state.childVisible ? null : (
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Event")}
                >
                  <ConcertList
                    FeedsImg={require("../assets/band11.png")}
                    date="02 Feb"
                    title="Speedy Nights Festival"
                    place="Sir Shankar Lal Concert Hall"
                    country="Delhi"
                  />
                </TouchableOpacity>
              )}

              {this.state.childVisible ? null : (
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("Event")}
                >
                  <ConcertList
                    FeedsImg={require("../assets/band1.png")}
                    date="16 May"
                    title="Delhi Red Bull SoundClash 2020"
                    place="Sir Shankar Lal Concert Hall"
                    country="Delhi"
                  />
                </TouchableOpacity>
              )}
            </ScrollView>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 21,
                fontWeight: "500",
                color: "white",
                marginLeft: 18,
                marginRight: 60,
                marginTop: 40,
                lineHeight: 25
              }}
            >
              Artist Brand Power
            </Text>
            <View style={{ marginTop: 25 }}>
              <View style={styles.cylinder}>
                <View style={{ marginLeft: 15, marginTop: 10 }}>
                  <Ionicons name="md-close" color="#D87FF9" size={18} />
                </View>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#D87FF9",
                    textAlign: "center",
                    lineHeight: 16,
                    marginTop: -16,
                    marginLeft: 10
                  }}
                >
                  Remove
                </Text>
              </View>
            </View>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ marginBottom: 70, marginHorizontal: 7 }}
          >
            <BrandList
              imageURI={require("../assets/Apple.png")}
              brandname="Apple Music"
              capacity="720"
              percent="12"
            />
            <BrandList
              imageURI={require("../assets/spotify.png")}
              brandname="Spotify"
              capacity="20345"
              percent="10"
            />
            <BrandList
              imageURI={require("../assets/insta.png")}
              brandname="Instagram"
              capacity="1152"
              percent="2"
            />
          </ScrollView>
        </ScrollView>
        <View
          style={{
            marginLeft: 20,
            marginTop: 45,
            flexDirection: "row",
            position: "absolute"
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <View style={{ width: 56, height: 56 }}>
              <Ionicons name="md-arrow-dropleft" color="white" size={32} />
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{ flexDirection: "row", position: "absolute", marginTop: 615 }}
        >
          <TouchableOpacity>
            <View style={styles.CylinderCompare}>
              <Text
                style={{
                  fontSize: 18,
                  color: "#D87FF9",
                  marginLeft: 50,
                  marginTop: 10
                }}
              >
                Compare
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
          // onPress={() => {
          //   {
          //     this.onClick();
          //     this.props.navigation.navigate("Success");
          //   }
          // }}
          >
            <View style={styles.CylinderAccept}>
              <Text
                style={{
                  fontSize: 18,
                  color: "#FFFFFF",
                  marginLeft: 60,
                  marginTop: 10
                }}
              >
                Accept
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  line: {
    marginTop: 30,
    width: 380,
    marginLeft: 5,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#141A45"
  },
  rect: {
    marginLeft: 15,
    width: 370,
    height: 164,
    backgroundColor: "#141A45",
    borderRadius: 8
  },
  interest: {
    marginTop: 20,
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 24,
    marginLeft: 20,
    fontStyle: "normal"
  },
  BioText: {
    color: "#F2F2F2",
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 21,
    fontStyle: "normal"
  },
  Listcontainer: {
    width: 378,
    height: 190,
    marginVertical: 15,
    marginHorizontal: 15,
    flexDirection: "row"
  },
  BioViewCount: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
    fontStyle: "normal"
  },
  Bio: {
    color: "#BDBDBD",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 19,
    fontStyle: "normal"
  },
  Bioproffession: {
    marginTop: 7,
    color: "#F2994A",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 19,
    fontStyle: "normal"
  },
  Bioplace: {
    marginTop: 7,
    color: "#BDBDBD",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 19,
    fontStyle: "normal"
  },
  direction: {
    backgroundColor: "#5A6190",
    width: 6,
    height: 20,
    marginLeft: 60,
    marginTop: 2
  },
  directionHalf: {
    backgroundColor: "#5A6190",
    width: 6,
    height: 10,
    marginLeft: 60,
    marginTop: 2
  },
  titleText: {
    marginTop: 10,
    marginLeft: 12,
    color: "#F2F2F2",
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 21,
    fontStyle: "normal"
  },

  CylinderCompare: {
    marginLeft: 10,
    width: 178,
    height: 50,
    borderRadius: 26,
    backgroundColor: "#360673",
    marginTop: 50,
    marginBottom: 20
  },
  CylinderAccept: {
    marginLeft: 15,
    width: 178,
    height: 50,
    borderRadius: 26,
    backgroundColor: "#9B51E0",
    marginTop: 50,
    marginBottom: 20
  },
  container: {
    marginTop: 15,
    marginLeft: 15,
    width: 595,
    height: 226,
    backgroundColor: "#141A45",
    borderRadius: 8,
    flexDirection: "row"
  },
  cylinder: {
    width: 111,
    height: 40,
    borderRadius: 26,
    marginLeft: 10,
    marginTop: 5,
    backgroundColor: "#360673"
  },
  list: {
    marginHorizontal: 7
  },
  circle: {
    width: 45,
    height: 45,
    borderRadius: 200,
    marginLeft: 12,
    backgroundColor: "#FFFFFF"
  }
});
