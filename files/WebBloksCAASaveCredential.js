__d(
  "WebBloksCAASaveCredential",
  [
    "XDeviceBasedLoginUpdateNonceAsyncControllerRouteBuilder",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("requireDeferred")("XAsyncRequest").__setRef(
      "WebBloksCAASaveCredential",
    );
    function s(t, n, o, a, i, l, s) {
      if (!i) {
        t.executeCatch(l, [n]);
        return;
      }
      var u = r("XDeviceBasedLoginUpdateNonceAsyncControllerRouteBuilder")
        .buildUri({})
        .toString();
      e.onReady(function (e) {
        new e(u)
          .setMethod("POST")
          .setAutoProcess(!1)
          .setData({ client_event_flow: a })
          .setPayloadHandler(function (e) {
            t.executeCatch(e.success ? l : s, [n]);
          })
          .setErrorHandler(function (e) {
            t.executeCatch(s, [n]);
          })
          .send();
      });
    }
    l.default = s;
  },
  98,
);
