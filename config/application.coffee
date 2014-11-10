# For an explanation of the steroids.config properties, see the guide at
# http://guides.appgyver.com/steroids/guides/project_configuration/config-application-coffee/

steroids.config.name = "CartDrop"

# ## Start Location
steroids.config.location = "http://localhost/index.html"

# ## Tab Bar
# steroids.config.tabBar.enabled = true
# steroids.config.tabBar.tabs = [
#   {
#     title: "Index"
#     icon: "icons/pill@2x.png"
#     location: "http://localhost/signup.html"
#   },
#   {
#     title: "Internet"
#     icon: "icons/telescope@2x.png"
#     location: "http://www.google.com"
#   }
# ]

# steroids.config.tabBar.tintColor = "#000000"
# steroids.config.tabBar.tabTitleColor = "#00aeef"
# steroids.config.tabBar.selectedTabTintColor = "#ffffff"
# steroids.config.tabBar.selectedTabBackgroundImage = "icons/pill@2x.png"

# steroids.config.tabBar.backgroundImage = ""

# ## Preloads
steroids.config.preloads = [
  {
    id: "sign"
    location: "http://localhost/signup.html"
  }
  {
    id: "leftDrawer"
    location: "http://localhost/left.html"
  }
  {
    id: "clothes"
    location: "http://localhost/Clothes.html"
  }
  {
    id: "alcohol"
    location: "http://localhost/Alcohol.html"
  }
  {
    id: "toiletries"
    location: "http://localhost/Toiletries.html"
  }
  {
    id: "stationary"
    location: "http://localhost/Stationary.html"
  }
  {
    id: "gaming"
    location: "http://localhost/Gaming.html"
  }
  {
    id: "groceries"
    location: "http://localhost/Groceries.html"
  }
  {
    id: "flowers"
    location: "http://localhost/Flowers.html"
  }
  {
    id: "electronics"
    location: "http://localhost/Electronics.html"
  }
  {
    id: "sports"
    location: "http://localhost/Sports.html"
  }
]

# ## Drawers
# steroids.config.drawers =
#   left:
#     id: "leftDrawer"
#     location: "http://localhost/leftDrawer.html"
#     showOnAppLoad: true
#     widthOfDrawerInPixels: 200
#   right:
#     id: "rightDrawer"
#     location: "http://localhost/rightDrawer.html"
#     showOnAppLoad: false
#     widthOfDrawerInPixels: 200
#   options:
#     centerViewInteractionMode: "Full"
#     closeGestures: ["PanNavBar", "PanCenterView", "TapCenterView"]
#     openGestures: ["PanNavBar", "PanCenterView"]
#     showShadow: true
#     stretchDrawer: true
#     widthOfLayerInPixels: 0

# ## Initial View
# steroids.config.initialView =
#   id: "initialView"
#   location: "http://localhost/index.html"

# ## Navigation Bar
#steroids.config.navigationBar.tintColor = "#1aacc3"
#steroids.config.navigationBar.titleColor = "#ecf0f1"
steroids.config.navigationBar.buttonTintColor = "#ffffff"

#steroids.config.navigationBar.borderColor = "#29a347"
#steroids.config.navigationBar.borderSize = 2

# steroids.config.navigationBar.landscape.backgroundImage = ""
# steroids.config.navigationBar.portrait.backgroundImage = ""

# ## Android Loading Screen
steroids.config.loadingScreen.tintColor = "#262626"

# ## iOS Status Bar
steroids.config.statusBar.enabled = true
steroids.config.statusBar.style = "light"

# ## File Watcher
# steroids.config.watch.exclude = ["www/my_excluded_file.js", "www/my_excluded_dir"]

# ## Pre- and Post-Make Hooks
# steroids.config.hooks.preMake.cmd = "echo"
# steroids.config.hooks.preMake.args = ["running yeoman"]
# steroids.config.hooks.postMake.cmd = "echo"
# steroids.config.hooks.postMake.args = ["cleaning up files"]

# ## Default Editor
# steroids.config.editor.cmd = "subl"
# steroids.config.editor.args = ["."]
