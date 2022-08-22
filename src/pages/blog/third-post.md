---
layout: "../../layouts/BlogPost.astro"
title: "Lets build Future with Future builder"
description: "Lets build Future with Future builder"
pubDate: "Jul 15 2022"
heroImage: "https://miro.medium.com/max/620/1*KNLpvu2fijlesXzIdyS1Jw.jpeg"
---

You have a future and not sure what will be the future result. Flutter have a right widget for you, called Future Builder. Lets see how it works.

Lets create a Future with 3 seconds delay

```js
Future<String> getFutureMessage()
  async{ await Timer(Duration(seconds: 3), (){});
  return "Hello From Future";}
```

Now we have to use this future in our widget, lets see how to use Future Builder to consume this Future

```js
FutureBuilder(
future: _futureProvider.getFutureMessage(),
builder: (context, snapshot){
if(snapshot.connectionState == ConnectionState.waiting){
 return CircularProgressIndicator();
}
else if(snapshot.connectionState == ConnectionState.done){if(snapshot.data != null){
 Text(snapshot.data);
}else{
Text("No Data");
}
}else{
Text("Some Error");}
});
```

Our Future Builder is ready, first we have to provide the future for which our widget is waiting for. Then we have to create builder method which will return the snapshot of the data with the current state.

```
snapshot.connectionState = waiting
```

We can use this state to display loading icon on the screen

```
  snapshot.connectionState = done
```

If the connection state is done then we can be sure that Future has returned and have something in it, we check if the snapshot.data is null, means we have no data.

At the end we can use else statement to display some error which might have occurred at the time fetching the Future data.

I will be posting more amazing widgets every week, till then happy fluttering!!
