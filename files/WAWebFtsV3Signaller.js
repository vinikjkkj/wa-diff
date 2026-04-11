__d(
  "WAWebFtsV3Signaller",
  ["WAWebBrokerGlobalAppState"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.shouldTerminateAll = function () {
          return r("WAWebBrokerGlobalAppState").isLogoutInProgress;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
