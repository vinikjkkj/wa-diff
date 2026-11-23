__d(
  "WAWebE2ETestSetup",
  [
    "WAWebAltDeviceLinkingApi",
    "WAWebE2ETestPairingConstants",
    "WAWebLocalStorage",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 1e4,
      s = 500,
      u = '[data-testid="link-device-qr-code"]';
    function c() {
      ((window.readWebQrCode = (function () {
        async function e() {
          var e,
            t =
              r("WAWebLocalStorage") == null
                ? void 0
                : r("WAWebLocalStorage").getItem(
                    o("WAWebE2ETestPairingConstants")
                      .PAIRING_ATTEMPT_ONGOING_KEY,
                  );
          if (t != null) return t;
          var n = (e = await d()) != null ? e : "";
          return (
            r("WAWebLocalStorage") == null ||
              r("WAWebLocalStorage").setItem(
                o("WAWebE2ETestPairingConstants").PAIRING_ATTEMPT_ONGOING_KEY,
                n,
              ),
            n
          );
        }
        return e;
      })()),
        (window.readLinkCode = (function () {
          return async function (e) {
            await o("WAWebAltDeviceLinkingApi").initializeAltDeviceLinking();
            var t = await o("WAWebAltDeviceLinkingApi").startAltLinkingFlow(
              e,
              !1,
            );
            return t;
          };
        })()));
    }
    function d() {
      return new Promise(function (t) {
        var n = Date.now(),
          r = function () {
            var o,
              a = document.querySelector(u),
              i = a == null || (o = a.dataset) == null ? void 0 : o.ref;
            if (i != null) {
              t(i);
              return;
            }
            if (Date.now() - n >= e) {
              t(null);
              return;
            }
            window.setTimeout(r, s);
          };
        r();
      });
    }
    l.default = c;
  },
  98,
);
