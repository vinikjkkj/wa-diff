__d(
  "AdsGraphAPI",
  ["FBLogger", "GraphAPI", "GraphAPIConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = s();
      return (
        t !== o("GraphAPIConfig").adsApiVersion.replace("v", "") &&
          r("FBLogger")("graph_api").warn(
            "%s is not using the correct Graph API version, using %s. It needs to use %s",
            e,
            t,
            o("GraphAPIConfig").adsApiVersion,
          ),
        r("GraphAPI")(t, e)
      );
    }
    function s() {
      switch (o("GraphAPIConfig").adsApiVersion) {
        case "v2.10":
          return "2.10";
        case "v2.11":
          return "2.11";
        case "v2.12":
          return "2.12";
        case "v3.0":
          return "3.0";
        case "v3.1":
          return "3.1";
        case "v3.2":
          return "3.2";
        case "v3.3":
          return "3.3";
        case "v4.0":
          return "4.0";
        case "v5.0":
          return "5.0";
        case "v6.0":
          return "6.0";
        case "v7.0":
          return "7.0";
        case "v8.0":
          return "8.0";
        case "v9.0":
          return "9.0";
        case "v10.0":
          return "10.0";
        case "v11.0":
          return "11.0";
        case "v12.0":
          return "12.0";
        case "v13.0":
          return "13.0";
        case "v14.0":
          return "14.0";
        case "v15.0":
          return "15.0";
        case "v16.0":
          return "16.0";
        case "v17.0":
          return "17.0";
        case "v18.0":
          return "18.0";
        case "v19.0":
          return "19.0";
        case "v20.0":
          return "20.0";
        case "v21.0":
          return "21.0";
        case "v22.0":
          return "22.0";
        case "v23.0":
          return "23.0";
        case "v24.0":
          return "24.0";
        case "v25.0":
          return "25.0";
        case "v26.0":
          return "26.0";
        default:
          return o("GraphAPIConfig").adsApiVersion.replace("v", "");
      }
    }
    ((l.get = e), (l.getVersion = s));
  },
  98,
);
