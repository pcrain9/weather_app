(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{12:function(e,t,a){e.exports={daily_weather_card_big:"DailyWeatherDisplay_daily_weather_card_big__3JqRc",daily_weather_card_small:"DailyWeatherDisplay_daily_weather_card_small__wTr_f",words_small:"DailyWeatherDisplay_words_small__1pIjH",button_small:"DailyWeatherDisplay_button_small__p_rlx",big_weather_day_display:"DailyWeatherDisplay_big_weather_day_display__2I78G",big_weather_day_display_day:"DailyWeatherDisplay_big_weather_day_display_day__1tymW"}},15:function(e,t,a){e.exports={top_nav:"HomePage_top_nav__3fhhI",nav:"HomePage_nav__aMcPG",weekly_weather:"HomePage_weekly_weather__35Yu7",daily_weather:"HomePage_daily_weather__3ORA_",get_location:"HomePage_get_location__S3zIG"}},17:function(e,t,a){e.exports={daily_weather_card_big:"DailyWeather_daily_weather_card_big__1XNK8",loadWeather:"DailyWeather_loadWeather__Z76iM",big_weather_day_display_day:"DailyWeather_big_weather_day_display_day__1zVQq",long_forecast:"DailyWeather_long_forecast__2cDXo"}},21:function(e,t,a){e.exports={text_content:"RadarWeatherPage_text_content__NJCqh",list:"RadarWeatherPage_list__16cbp"}},25:function(e,t,a){e.exports={search_bar:"PlaceFinder_search_bar__20il3"}},28:function(e,t,a){e.exports={daily_weather:"InitialWeather_daily_weather__2GC0d",show_weather:"InitialWeather_show_weather__2AVfo"}},29:function(e,t,a){e.exports={weekly_weather:"WeeklyWeather_weekly_weather__2reWi",loadWeather:"WeeklyWeather_loadWeather__1SaXS",lds_ring:"WeeklyWeather_lds_ring__kH52V"}},31:function(e,t,a){e.exports={background_color:"App_background_color__2o_zm"}},32:function(e,t,a){e.exports={lds_ring:"Spinner_lds_ring__39HLD"}},33:function(e,t,a){e.exports={card:"Card_card__1J3_w"}},38:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a(18),n=a.n(c),s=(a(38),a(3)),o=a(31),i=a.n(o),l=a(21),d=a.n(l),h=a(0);var j=function(){return Object(h.jsxs)("div",{className:d.a.text_content,children:[Object(h.jsx)("h1",{children:"Welcome to the Weather!"}),Object(h.jsx)("h2",{children:"Click any of the links above to get started"}),Object(h.jsx)("p",{children:"This site uses data from the following APIs: "}),Object(h.jsxs)("ul",{className:d.a.list,children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"https://api.weather.gov",children:"api.weather.gov"})}),Object(h.jsx)("li",{className:d.a.list,children:Object(h.jsx)("a",{href:"maps.googleapis.com",children:"maps.googleapis.com"})}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]})]})},_=a(13),b=a(9),u=a(14),p=a.n(u),x=a(20),O=a(24),y=a.n(O),g=a(4),f=a(10),m=Object(f.b)({name:"isLoading",initialState:{loading:!0,hasError:!1},reducers:{doneLoading:function(e){e.loading=!1},beginLoading:function(e){e.loading=!0},errorOccurred:function(e){e.hasError=!0},clearError:function(e){e.hasError=!1}}}),w=Object(f.b)({name:"location",initialState:{location:"",coordinates:{lat:0,lng:0},shortForecast:"",temperature:0},reducers:{addLatLng:function(e,t){e.coordinates={lat:t.payload.coordinates.lat,lng:t.payload.coordinates.lng}},setInitialForecast:function(e,t){e.shortForecast=t.payload.shortForecast,e.temperature=t.payload.temperature},setLocation:function(e,t){e.location=t.payload.location}}}),v=Object(f.b)({name:"forecast",initialState:{weeklyForecast:[]},reducers:{addWeeklyForecast:function(e,t){if(0!==t.payload.weeklyForecast.length)for(var a=0,r=0;r<t.payload.weeklyForecast.length;r+=2)e.weeklyForecast[a]={id:a,name:t.payload.weeklyForecast[r].name,temperature:t.payload.weeklyForecast[r].temperature,forecast:t.payload.weeklyForecast[r].detailedForecast},a++;else console.log("here")}}}),k=Object(f.a)({reducer:{locationAndForecastSlice:w.reducer,weeklyForecastSlice:v.reducer,isLoadingSlice:m.reducer}}),F=w.actions,W=v.actions,S=m.actions,N=k,L=a(25),D=a.n(L);var P=function(){var e=Object(g.b)(),t=Object(r.useState)(!1),a=Object(_.a)(t,2),c=a[0],n=a[1],o=Object(s.f)();function i(e){return l.apply(this,arguments)}function l(){return(l=Object(x.a)(p.a.mark((function t(a){var r,c,s,i,l,d;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(S.beginLoading()),r="https://api.weather.gov/points/"+a.geometry.location.lat().toFixed(4)+","+a.geometry.location.lng().toFixed(4),console.log(a.geometry.location.lat().toFixed(4)),t.prev=3,t.next=6,fetch(r);case 6:if((c=t.sent).ok){t.next=10;break}return n(!0),t.abrupt("return");case 10:return t.next=12,c.json();case 12:s=t.sent,t.next=20;break;case 15:return t.prev=15,t.t0=t.catch(3),console.error(t.t0),n(!0),t.abrupt("return");case 20:return i=s.properties.forecast,t.prev=21,t.next=24,fetch(i);case 24:if((l=t.sent).ok){t.next=28;break}return n(!0),t.abrupt("return");case 28:return t.next=30,l.json();case 30:d=t.sent,t.next=40;break;case 33:return t.prev=33,t.t1=t.catch(21),console.error(t.t1),console.log(l),console.log(d),n(!0),t.abrupt("return");case 40:e(W.addWeeklyForecast({weeklyForecast:d.properties.periods})),e(S.doneLoading()),o.push("/weeklyweatherpage");case 43:case"end":return t.stop()}}),t,null,[[3,15],[21,33]])})))).apply(this,arguments)}return Object(h.jsx)(h.Fragment,{children:c?Object(h.jsx)(y.a,{apiKey:"",onPlaceSelected:i,className:D.a.search_bar,defaultValue:"Couldn't load that :( try again!",onClick:function(){n(!1)}}):Object(h.jsx)(y.a,{apiKey:"",onPlaceSelected:i,className:D.a.search_bar,onFocus:function(){document.getElementsByClassName("search_bar").value=""}})})};function C(){return(C=Object(x.a)(p.a.mark((function e(){var t,a,r,c,n,s,o,i,l,d,h;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=Object(g.b)(),0!==(a=Object(g.c)((function(e){return e.locationAndForecastSlice}))).coordinates.lat||0!==a.coordinates.lat){e.next=4;break}return e.abrupt("return");case 4:return r="https://api.weather.gov/points/"+a.coordinates.lat+","+a.coordinates.lng,e.prev=5,e.next=8,fetch(r);case 8:return c=e.sent,e.next=11,c.json();case 11:n=e.sent,e.next=18;break;case 14:e.prev=14,e.t0=e.catch(5),console.error(e.t0),t(S.errorOccurred());case 18:return d=n.properties.forecast,e.prev=19,e.next=22,fetch(d);case 22:return s=e.sent,e.next=25,s.json();case 25:o=e.sent,e.next=32;break;case 28:e.prev=28,e.t1=e.catch(19),console.error(e.t1),t(S.errorOccurred());case 32:return t(W.addWeeklyForecast({weeklyForecast:o.properties.periods})),e.prev=33,e.next=36,fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng="+a.coordinates.lat+","+a.coordinates.lng+"&key=");case 36:return i=e.sent,e.next=39,i.json();case 39:l=e.sent,e.next=46;break;case 42:e.prev=42,e.t2=e.catch(33),console.error(e.t2),t(S.errorOccurred());case 46:h=l.results[6].address_components[0].long_name+", "+l.results[6].address_components[2].short_name,t(F.setLocation({location:h})),t(F.setInitialForecast({shortForecast:o.properties.periods[0].shortForecast,temperature:o.properties.periods[0].temperature})),t(S.doneLoading());case 50:case"end":return e.stop()}}),e,null,[[5,14],[19,28],[33,42]])})))).apply(this,arguments)}var I=a(32),E=a.n(I);var H=function(){return Object(h.jsxs)("div",{className:E.a.lds_ring,children:[Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{})]})},A=a(28),J=a.n(A);var M=function(){var e=Object(g.b)(),t=Object(g.c)((function(e){return e.locationAndForecastSlice})),a=Object(g.c)((function(e){return e.isLoadingSlice.loading})),c=Object(g.c)((function(e){return e.isLoadingSlice.hasError}));return Object(r.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(t){navigator.geolocation&&e(F.addLatLng({coordinates:{lat:t.coords.latitude,lng:t.coords.longitude}}))}))}),[e]),function(){C.apply(this,arguments)}(),Object(h.jsx)(h.Fragment,{children:c?Object(h.jsx)("div",{children:"foo"}):Object(h.jsx)(h.Fragment,{children:a?Object(h.jsx)("div",{className:J.a.daily_weather,children:Object(h.jsx)(H,{})}):Object(h.jsxs)("p",{className:J.a.show_weather,children:[t.temperature,Object(h.jsx)("sup",{children:"o"}),"F \u2002 ",t.location]})})})},G=a(15),R=a.n(G);var T=function(){var e=Object(r.useState)(!1),t=Object(_.a)(e,2),a=t[0],c=t[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:R.a.top_nav,children:Object(h.jsx)(M,{})}),Object(h.jsxs)("div",{className:R.a.nav,children:[Object(h.jsx)(b.b,{to:"/weeklyweatherpage",className:R.a.weekly_weather,children:Object(h.jsx)("p",{children:"Weekly Weather"})}),a?Object(h.jsx)(P,{}):Object(h.jsx)("div",{className:R.a.get_location,onClick:function(){c(!0)},children:Object(h.jsx)("p",{children:"Search weather by location"})}),Object(h.jsx)(b.b,{to:"/dailyweatherpage",className:R.a.daily_weather,children:Object(h.jsx)("p",{children:"Daily Weather"})})]})]})},V=a(17),q=a.n(V),z=a(33),B=a.n(z);var K=function(e){return Object(h.jsx)("div",{onClick:function(){e.onShowMore&&e.onShowMore(),e.onShowLess&&e.onShowLess()},className:"".concat(B.a.card," ").concat(e.className),children:e.children})};var X=function(){var e=Object(g.c)((function(e){return e.weeklyForecastSlice.weeklyForecast})),t=Object(g.c)((function(e){return e.isLoadingSlice.loading}));return 0===e.length?Object(h.jsx)(s.a,{exact:!0,path:"/",children:Object(h.jsx)(j,{})}):Object(h.jsx)(h.Fragment,{children:t?Object(h.jsx)(H,{}):Object(h.jsxs)(K,{className:q.a.daily_weather_card_big,children:[Object(h.jsx)("span",{className:q.a.big_weather_day_display,children:Object(h.jsx)("h1",{className:q.a.big_weather_day_display_day,children:e[0].name})}),Object(h.jsxs)("h5",{children:[e[0].temperature,Object(h.jsx)("sup",{children:"o"}),"F"]}),Object(h.jsx)("p",{className:q.a.long_forecast,children:e[0].forecast})]})})},Q=a(12),Y=a.n(Q);var Z=function(e){var t=Object(r.useState)(!1),a=Object(_.a)(t,2),c=a[0],n=a[1];return Object(h.jsx)(h.Fragment,{children:c?Object(h.jsxs)(K,{onShowLess:function(){n(!1)},className:Y.a.daily_weather_card_big,children:[Object(h.jsxs)("span",{className:Y.a.big_weather_day_display,children:[Object(h.jsx)("h1",{className:Y.a.big_weather_day_display_day,children:e.day})," ",Object(h.jsx)("h3",{children:"^"})]}),Object(h.jsxs)("h5",{children:[e.temperature,Object(h.jsx)("sup",{children:"o"}),"F"]}),Object(h.jsx)("p",{children:e.forecast})]}):Object(h.jsxs)(K,{onShowMore:function(){n(!0)},className:Y.a.daily_weather_card_small,children:[Object(h.jsxs)("h3",{className:Y.a.words_small,children:[e.day,":  ",e.temperature,Object(h.jsx)("sup",{children:"o"}),"F"]}),Object(h.jsx)("h3",{className:Y.a.button_small,children:"^"})]})})},U=a(29),$=a.n(U);var ee=function(){var e=Object(g.c)((function(e){return e.isLoadingSlice.loading})),t=Object(g.c)((function(e){return e.weeklyForecastSlice.weeklyForecast})),a=Object(g.c)((function(e){return e.isLoadingSlice.hasError}));return void 0===t?(console.log("Here"),Object(h.jsx)(s.a,{exact:!0,path:"/",children:Object(h.jsx)(j,{})})):Object(h.jsx)(h.Fragment,{children:a?Object(h.jsx)("div",{children:"foo"}):Object(h.jsxs)("div",{className:$.a.weekly_weather,children:[e?Object(h.jsx)("div",{className:$.a.daily_weather,children:Object(h.jsx)(H,{})}):Object(h.jsx)(X,{}),t.slice(1).map((function(e){return Object(h.jsx)(Z,{day:e.name,temperature:e.temperature,forecast:e.forecast},e.id)}))]})})};var te=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(ee,{})})};var ae=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(X,{})})};var re=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(T,{}),Object(h.jsx)("div",{className:i.a.background_color,children:Object(h.jsxs)(s.c,{children:[Object(h.jsx)(s.a,{exact:!0,path:"/weather_app",children:Object(h.jsx)(j,{})}),Object(h.jsx)(s.a,{path:"/weeklyweatherpage",children:Object(h.jsx)(te,{})}),Object(h.jsx)(s.a,{path:"/findweatherbyplacepage",children:Object(h.jsx)(P,{})}),Object(h.jsx)(s.a,{exact:!0,path:"/dailyweatherpage",children:Object(h.jsx)(ae,{})})]})})]})},ce=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,51)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),r(e),c(e),n(e),s(e)}))};n.a.render(Object(h.jsx)(g.a,{store:N,children:Object(h.jsx)(b.a,{children:Object(h.jsx)(re,{})})}),document.getElementById("root")),ce()}},[[50,1,2]]]);
//# sourceMappingURL=main.fb3b4c4d.chunk.js.map