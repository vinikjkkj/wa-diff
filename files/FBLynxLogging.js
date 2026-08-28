__d(
  "FBLynxLogging",
  ["AsyncRequest", "ODS", "XLynxAsyncCallbackControllerRouteBuilder"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var n = r("XLynxAsyncCallbackControllerRouteBuilder").buildURL({});
      new (r("AsyncRequest"))(n)
        .setData({ lynx_uri: t })
        .setErrorHandler(function (t) {
          var n = t.getError();
          (e || (e = o("ODS"))).bumpEntityKey(
            3861,
            "linkshim",
            "click_log.post.fail." + n,
          );
        })
        .setTransportErrorHandler(function (t) {
          var n = t.getError();
          (e || (e = o("ODS"))).bumpEntityKey(
            3861,
            "linkshim",
            "click_log.post.transport_fail." + n,
          );
        })
        .send();
    }
    l.log = s;
  },
  98,
);
