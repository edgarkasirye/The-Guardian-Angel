import React, { Component } from 'react'
import {
  Header, Container, StyleProvider, Left, Text,
  Body, Title, Tab, Tabs, Icon, TabHeading, Button,
  Right, Content, List,Fab,Badge,
  Thumbnail,
  ListItem, View
} from 'native-base'
import { StyleSheet,Image,AppRegistry,TouchableOpacity} from 'react-native'
import CustomVariables from './native-base-theme/variables'
import getTheme from './native-base-theme/components'
import {RNCamera} from 'react-native-camera'


export default class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(CustomVariables)}>
        <Container>
          <Header hasTabs androidStatusBarColor='#054E47' >
            <Left>
              <Title> WhatsApp Voice</Title>
            </Left>
            <Right>
              <Button transparent>
                <Icon name='search' style={{ fontSize: 19 }} />
              </Button>
              <Button transparent>
                <Icon name='md-more' />
              </Button>
            </Right>
          </Header>



          <Tabs initialPage={1}>
            <Tab heading={
              <TabHeading >
                <Icon name='camera' />
              </TabHeading>
            }>
              <RNCamera style={{flex: 1}} ref={ref => {
              this.camera = ref;}}>
              </RNCamera>
            </Tab>




            <Tab heading={
              <TabHeading>
                <Text>CHATS</Text>      
                <Badge style={{backgroundColor: "#FFF", alignSelf: "auto"}}><Text style={{color:"#006257"}}>4</Text></Badge>
              </TabHeading>
            }>
            <Fab style={{backgroundColor: "#20C659"}}><Icon name="mail"/></Fab>

            <Content>
            <List>
              <ListItem>
                <View style={{ flexDirection: "row" }}>
                  <Thumbnail style={{marginRight: 10}} source={require("./img/batman.jpg")} />
                  <View style={{flex:1}}>
                    <Text>Batman</Text>
                    <Text note> <Icon name="done-all" style={{color: "#01C6FF",fontSize: 12}}/>  I can always beat you again, superman!</Text>
                  </View>
                  <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                    <Text note>3:43 pm</Text>
                  </View>
                </View>
              </ListItem>

              <ListItem>
                <View style={{ flexDirection: "row" }}>
                  <Thumbnail style={{marginRight: 10}} source={require("./img/captain.jpg")} />
                  <View style={{flex:1}}>
                    <Text>Captain America</Text>
                    
                    <Text note><Icon name="done-all" style={{color: "#01C6FF",fontSize: 12}}/> Hulk i could always help you with my looks, you know.</Text>
                  </View>
                  <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                    <Text note>3:30 pm</Text>
                  </View>
                </View>
              </ListItem>

              <ListItem>
                <View style={{ flexDirection: "row" }}>
                  <Thumbnail style={{marginRight: 10}} source={require("./img/flash.jpg")} />
                  <View style={{flex:1}}>
                    <Text>Flash</Text>
                    
                    <Text note><Icon name="done-all" style={{color: "#A7A7A7",fontSize: 12}}/> I should just go back in time and eradicate you moron.</Text>
                  </View>
                  <View >
                    <Text style={{color: "#00FF7F"}}note>3:17 pm</Text>
                    <Image style={{width: 20, height: 20, alignContent:"center"}} source={require("./img/messages_4.png")}/>
                   
                  </View>
                </View>

                
                
              </ListItem>

              <ListItem>
                <View style={{ flexDirection: "row" }}>
                  <Thumbnail style={{marginRight: 10}} source={require("./img/hulk.jpg")} />
                  <View style={{flex:1}}>
                    <Text>Hulk</Text>
                    
                    <Text note><Icon name="done-all" style={{color: "#01C6FF",fontSize: 12}}/> Cap! you dont want to see me mad...princess</Text>
                  </View>
                  <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                    <Text note>3:12 pm</Text>
                  </View>
                </View>
              </ListItem>

              <ListItem>
                <View style={{ flexDirection: "row" }}>
                  <Thumbnail style={{marginRight: 10}} source={require("./img/super_man.jpg")} />
                  <View style={{flex:1}}>
                    <Text>Superman</Text>
                    
                    <Text note><Icon name="done-all" style={{color: "#01C6FF",fontSize: 12}}/> But Batman, we all know you cheated! let's take that crypton and we see</Text>
                  </View>
                  <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                    <Text note>3:09 pm</Text>
                  </View>
                </View>
              </ListItem>

              
            
              <ListItem>
                <View style={{ flexDirection: "row" }}>
                  <Thumbnail style={{marginRight: 10}} source={require("./img/green_lantern.png")} />
                  <View style={{flex:1}}>
                    <Text>Green Lantern</Text>
                    
                    <Text note><Icon name="done-all" style={{color: "#01C6FF",fontSize: 12}}/> I can always take on any of you. Anytime</Text>
                  </View>
                  <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                    <Text note>3:43 pm</Text>
                  </View>
                </View>
              </ListItem>

              <ListItem>
                <View style={{ flexDirection: "row" }}>
                  <Thumbnail style={{marginRight: 10}} source={require("./img/superwoman.jpg")} />
                  <View style={{flex:1}}>
                    <Text>Superwoman</Text>
                    
                    <Text note><Icon name="done-all" style={{color: "#01C6FF",fontSize: 12}}/> Hey cuz, you need help?</Text>
                  </View>
                  <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                    <Text note>3:30 pm</Text>
                  </View>
                </View>
              </ListItem>

              <ListItem>
                <View style={{ flexDirection: "row" }}>
                  <Thumbnail style={{marginRight: 10}} source={require("./img/thor.jpg")} />
                  <View style={{flex:1}}>
                    <Text>Thor</Text>
                    
                    <Text note><Icon name="done-all" style={{color: "#01C6FF",fontSize: 12}}/> Hulk, you want to help with my harmer?</Text>
                  </View>
                  <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                    <Text note>3:17 pm</Text>
                  </View>
                </View>
              </ListItem>

              <ListItem>
                <View style={{ flexDirection: "row" }}>
                  <Thumbnail style={{marginRight: 10}} source={require("./img/justice_league.jpg")} />
                  <View style={{flex:1}}>
                    <Text>Justice League</Text>
                    
                    <Text note><Icon name="done-all" style={{color: "#01C6FF",fontSize: 12}}/> Batman: we should add the panther</Text>
                  </View>
                  <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                    <Text note>3:12 pm</Text>
                  </View>
                </View>
              </ListItem>

              <ListItem>
                <View style={{ flexDirection: "row" }}>
                  <Thumbnail style={{marginRight: 10}} source={require("./img/iron_man.jpg")} />
                  <View style={{flex:1}}>
                    <Text>Iron Man</Text>
                    
                    <Text note><Icon name="done-all" style={{color: "#01C6FF",fontSize: 12}}/> wonder woman, i would die to have you on my side</Text>
                  </View>
                  <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                    <Text note>3:02 pm</Text>
                  </View>
                </View>
              </ListItem>

              <ListItem>
                <View style={{ flexDirection: "row" }}>
                  <Thumbnail style={{marginRight: 10}} source={require("./img/wonder_woman.jpg")} />
                  <View style={{flex:1}}>
                    <Text>Wonder Woman</Text>
                    
                    <Text note><Icon name="done-all" style={{color: "#01C6FF",fontSize: 12}}/> Tony, you are still a boy.</Text>
                  </View>
                  <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                    <Text note>3:09 pm</Text>
                  </View>
                </View>
              </ListItem>
              
            
           
          

            </List>
          </Content>

            </Tab>

            <Tab heading='STATUS'>
              <List>
              <ListItem>
                <View style={{ flexDirection: "row" }}>
                  <Thumbnail style={{padding: 10 , marginRight: 10, borderColor: "grey"}} source={require("./img/iron_man.jpg")} />
                  <View style={{flex:1}}>
                    <Text>My Status</Text>
                    <Text note>Today, 1:00 pm</Text>
                  </View>
                  <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                    <Text style={{color: "green", fontSize: 30}} note >...</Text>
                  </View>
                </View>
              </ListItem>
                <View style={{backgroundColor: "#ECECEC", padding: 10}}>
                <Text style={{color: "#747474"}}>Recent updates</Text>

                </View>

                <ListItem>
                <View style={{ flexDirection: "row" }}>
                  <Thumbnail style={{padding: 10 , marginRight: 10, borderColor: "grey"}} source={require("./img/iron_man.jpg")} />
                  <View style={{flex:1}}>
                    <Text>Iron Man</Text>
                    <Text note>17 minutes ago</Text>
                 </View>
                </View>
              </ListItem>

              <ListItem>
                <View style={{ flexDirection: "row" }}>
                  <Thumbnail style={{padding: 10 , marginRight: 10, borderColor: "grey"}} source={require("./img/iron_man.jpg")} />
                  <View style={{flex:1}}>
                    <Text>Iron Man</Text>
                    <Text note>17 minutes ago</Text>
                 </View>
                </View>
              </ListItem>

              <ListItem>
                <View style={{ flexDirection: "row" }}>
                  <Thumbnail style={{padding: 10 , marginRight: 10, borderColor: "grey"}} source={require("./img/iron_man.jpg")} />
                  <View style={{flex:1}}>
                    <Text>Iron Man</Text>
                    <Text note>17 minutes ago</Text>
                 </View>
                </View>
              </ListItem>

              <ListItem>
                <View style={{ flexDirection: "row" }}>
                  <Thumbnail style={{padding: 10 , marginRight: 10, borderColor: "grey"}} source={require("./img/iron_man.jpg")} />
                  <View style={{flex:1}}>
                    <Text>Iron Man</Text>
                    <Text note>17 minutes ago</Text>
                 </View>
                </View>
              </ListItem>

              <ListItem>
                <View style={{ flexDirection: "row" }}>
                  <Thumbnail style={{padding: 10 , marginRight: 10, borderColor: "grey"}} source={require("./img/iron_man.jpg")} />
                  <View style={{flex:1}}>
                    <Text>Iron Man</Text>
                    <Text note>17 minutes ago</Text>
                 </View>
                </View>
              </ListItem>

              <ListItem>
                <View style={{ flexDirection: "row" }}>
                  <Thumbnail style={{padding: 10 , marginRight: 10, borderColor: "grey"}} source={require("./img/iron_man.jpg")} />
                  <View style={{flex:1}}>
                    <Text>Iron Man</Text>
                    <Text note>17 minutes ago</Text>
                 </View>
                </View>
              </ListItem>

              <ListItem>
                <View style={{ flexDirection: "row" }}>
                  <Thumbnail style={{padding: 10 , marginRight: 10, borderColor: "grey"}} source={require("./img/iron_man.jpg")} />
                  <View style={{flex:1}}>
                    <Text>Iron Man</Text>
                    <Text note>17 minutes ago</Text>
                 </View>
                </View>
              </ListItem>
              </List>
            </Tab>





            <Tab heading='CALLS'>
            <ListItem>
                <View style={{ flexDirection: "row" }}>
                  <Thumbnail style={{marginRight: 10}} source={require("./img/thor.jpg")} />
                  <View style={{flex:1}}>
                    <Text>Thor</Text>
                    
                    <Text note><Image style={{width:12,height:12}}source={require("./img/redarrow.png")}></Image> 23 March, 3:31 pm</Text>
                  </View>
                  <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Text note>
                    <Icon style={{color: "#006257"}} name ="call"/>
                    </Text>
                  </View>
                </View>
              </ListItem>

              <ListItem>
                <View style={{ flexDirection: "row" }}>
                  <Thumbnail style={{marginRight: 10}} source={require("./img/thor.jpg")} />
                  <View style={{flex:1}}>
                    <Text>Thor</Text>
                    
                    <Text note><Image style={{width:12,height:12}}source={require("./img/greenarrow.png")}></Image> 23 March, 3:31 pm</Text>
                  </View>
                  <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Text note>
                    <Icon style={{color: "#006257"}} name ="call"/>
                    </Text>
                  </View>
                </View>
              </ListItem>

              <ListItem>
                <View style={{ flexDirection: "row" }}>
                  <Thumbnail style={{marginRight: 10}} source={require("./img/thor.jpg")} />
                  <View style={{flex:1}}>
                    <Text>Thor</Text>
                    
                    <Text note><Image style={{width:12,height:12}}source={require("./img/greenarrow.png")}></Image> 23 March, 3:31 pm</Text>
                  </View>
                  <View style={{flexDirection:"row", alignItems:"center"}}>
                    
                    <Image style={{width:25,height:25}}source={require("./img/camera.png")}></Image>
                  
                  </View>
                </View>
              </ListItem>

              <ListItem>
                <View style={{ flexDirection: "row" }}>
                  <Thumbnail style={{marginRight: 10}} source={require("./img/thor.jpg")} />
                  <View style={{flex:1}}>
                    <Text>Thor</Text>
                    
                    <Text note><Image style={{width:12,height:12}}source={require("./img/greenarrow.png")}></Image> 23 March, 3:31 pm</Text>
                  </View>
                  <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Text note>
                    <Icon style={{color: "#006257"}} name ="call"/>
                    </Text>
                  </View>
                </View>
              </ListItem>

              <ListItem>
                <View style={{ flexDirection: "row" }}>
                  <Thumbnail style={{marginRight: 10}} source={require("./img/thor.jpg")} />
                  <View style={{flex:1}}>
                    <Text>Thor</Text>
                    
                    <Text note><Image style={{width:12,height:12}}source={require("./img/redarrow.png")}></Image> 23 March, 3:31 pm</Text>
                  </View>
                  <View style={{flexDirection:"row", alignItems:"center"}}>
                  <Image style={{width:25,height:25}}source={require("./img/camera.png")}></Image>
                  </View>
                </View>
              </ListItem>

              <ListItem>
                <View style={{ flexDirection: "row" }}>
                  <Thumbnail style={{marginRight: 10}} source={require("./img/thor.jpg")} />
                  <View style={{flex:1}}>
                    <Text>Thor</Text>
                    
                    <Text note><Image style={{width:12,height:12}}source={require("./img/redarrow.png")}></Image> 23 March, 3:31 pm</Text>
                  </View>
                  <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Text note>
                    <Icon style={{color: "#006257"}} name ="call"/>
                    </Text>
                  </View>
                </View>
              </ListItem>
              
              <ListItem>
                <View style={{ flexDirection: "row" }}>
                  <Thumbnail style={{marginRight: 10}} source={require("./img/thor.jpg")} />
                  <View style={{flex:1}}>
                    <Text>Thor</Text>
                    
                    <Text note><Image style={{width:12,height:12}}source={require("./img/redarrow.png")}></Image> 23 March, 3:31 pm</Text>
                  </View>
                  <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Text note>
                    <Icon style={{color: "#006257"}} name ="call"/>
                    </Text>
                  </View>
                </View>
              </ListItem>

              <ListItem>
                <View style={{ flexDirection: "row" }}>
                  <Thumbnail style={{marginRight: 10}} source={require("./img/thor.jpg")} />
                  <View style={{flex:1}}>
                    <Text>Thor</Text>
                    
                    <Text note><Image style={{width:12,height:12}}source={require("./img/redarrow.png")}></Image> 23 March, 3:31 pm</Text>
                  </View>
                  <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Text note>
                    <Icon style={{color: "#006257"}} name ="call"/>
                    </Text>
                  </View>
                </View>
              </ListItem>
            </Tab>
          </Tabs>

 
        </Container>
      </StyleProvider>
      
  
    )
  }
}

