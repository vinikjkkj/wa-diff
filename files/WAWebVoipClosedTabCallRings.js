__d(
  "WAWebVoipClosedTabCallRings",
  [
    "WALogger",
    "WAWebSwObjectStores",
    "WAWebVoipClosedTabCallRingRecords",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = Promise.resolve();
    function u(e, t, n) {
      return (
        n === void 0 && (n = Date.now()),
        d(async function () {
          var r,
            a = m(),
            i = (r = o(
              "WAWebVoipClosedTabCallRingRecords",
            )).parseClosedTabCallRings(
              await a.get(r.CLOSED_TAB_CALL_RINGS_KEY),
              n,
            );
          await a.put(
            r.CLOSED_TAB_CALL_RINGS_KEY,
            r.addClosedTabCallRing(i, { callId: e, outcome: t, ringAtMs: n }),
          );
        })
      );
    }
    function c(e, t, n) {
      return (
        n === void 0 && (n = Date.now()),
        d(async function () {
          var r = m(),
            a = o("WAWebVoipClosedTabCallRingRecords").settleClosedTabCallRing(
              o("WAWebVoipClosedTabCallRingRecords").parseClosedTabCallRings(
                await r.get(
                  o("WAWebVoipClosedTabCallRingRecords")
                    .CLOSED_TAB_CALL_RINGS_KEY,
                ),
                n,
              ),
              e,
              t,
            );
          a != null &&
            (await r.put(
              o("WAWebVoipClosedTabCallRingRecords").CLOSED_TAB_CALL_RINGS_KEY,
              a,
            ));
        })
      );
    }
    function d(t) {
      var n = s.then(t, t);
      return (
        (s = n.catch(function (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[sw] closed tab call ring write failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("sw-closed-tab-call-ring-write-failed");
        })),
        n
      );
    }
    function m() {
      return new (r("WAWebSwObjectStores").ObjectStore)("prefs");
    }
    ((l.recordClosedTabCallRing = u), (l.recordClosedTabCallRingOutcome = c));
  },
  98,
);
