__d(
  "ZenonUtils",
  ["AsyncRequest", "AsyncResponse", "emptyFunction"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 6e3;
    function s(t, n, o, a, i, l) {
      (n === void 0 && (n = r("emptyFunction")),
        o === void 0 && (o = r("emptyFunction")),
        a === void 0 && (a = !1),
        i === void 0 && (i = e),
        l === void 0 && (l = {}));
      var s = new (r("AsyncRequest"))()
        .setURI(t)
        .setData(l)
        .setAllowCrossPageTransition(!0)
        .setHandler(n)
        .setErrorHandler(o)
        .setTimeoutHandler(i, function (e) {
          var t = new (r("AsyncResponse"))(e, {});
          ((t.error = 408), t.setErrorSummary("Client side timeout"), o(t));
        });
      (s.setMethod("POST"),
        a && s.setOption("asynchronous_DEPRECATED", !1),
        s.send());
    }
    l.sendServerRequest = s;
  },
  98,
);
