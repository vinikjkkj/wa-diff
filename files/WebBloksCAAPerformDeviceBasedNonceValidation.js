__d(
  "WebBloksCAAPerformDeviceBasedNonceValidation",
  [
    "XAsyncRequest",
    "XMobileWebDeviceBasedNonceValidationAsyncControllerRouteBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      var a = t.join(","),
        i = r(
          "XMobileWebDeviceBasedNonceValidationAsyncControllerRouteBuilder",
        ).buildURL({ cuids: a });
      new (r("XAsyncRequest"))(i)
        .setMethod("POST")
        .setAutoProcess(!1)
        .setHandler(function (t) {
          if (t.payload) {
            var r = Object.fromEntries(
              Object.entries(t.payload).filter(function (e) {
                var t = e[0],
                  n = e[1];
                return n.dbln_validated === !0 && n.notif_count !== 0;
              }),
            );
            e.execute(n, [r]);
          }
        })
        .setErrorHandler(function () {
          e.execute(o, []);
        })
        .send();
    }
    l.default = e;
  },
  98,
);
