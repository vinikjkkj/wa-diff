__d(
  "WAHandleInfoBulletin",
  [
    "Promise",
    "WACryptoUtils",
    "WAGetRoutingInfoApi",
    "WAGlobals",
    "WALogger",
    "WASetRoutingInfoApi",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c;
    function d(t) {
      var n = t.edgeInfo;
      return o("WAGetRoutingInfoApi")
        .getRoutingInfo()
        .then(function (t) {
          var r = t.edgeInfo;
          if (r != null && o("WACryptoUtils").uint8ArraysEqual(r, n))
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "handleInfoBulletin no change to edge info",
                ])),
            );
          else
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "handleInfoBulletin setting edge info",
                  ])),
              ),
              o("WASetRoutingInfoApi").setRoutingInfo({ edgeInfo: n })
            );
        })
        .then(function () {
          return "NO_ACK";
        });
    }
    function m(e) {
      return (
        o("WAGlobals").getWaOneQueue().handleOfflineStartStanza(e),
        (c || (c = n("Promise"))).resolve("NO_ACK")
      );
    }
    function p() {
      return (
        o("WAGlobals")
          .getWaOneQueue()
          .handleOfflineEndStanza()
          .catch(function (e) {
            o("WALogger").ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "Error while processing <offline> ",
                  "",
                ])),
              e,
            );
          }),
        (c || (c = n("Promise"))).resolve("NO_ACK")
      );
    }
    ((l.handleEdgeRoutingInfo = d),
      (l.handleOfflineStart = m),
      (l.handleOfflineEnd = p));
  },
  98,
);
