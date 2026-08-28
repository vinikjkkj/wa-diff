__d(
  "FBWebBloksCAARemoveProfile",
  ["XAsyncRequest", "XDeviceBasedLoginInvalidateNonceControllerRouteBuilder"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, o, a, i) {
      var l = r("XDeviceBasedLoginInvalidateNonceControllerRouteBuilder")
        .buildUri({})
        .toString();
      new (r("XAsyncRequest"))(l)
        .setMethod("POST")
        .setAutoProcess(!1)
        .setData({ flow: "account_switcher", uid: n, redirect: !1 })
        .setHandler(function (n) {
          e.executeCatch(a, [t]);
        })
        .setErrorHandler(function (n) {
          e.executeCatch(i, [t]);
        })
        .send();
    }
    l.default = e;
  },
  98,
);
