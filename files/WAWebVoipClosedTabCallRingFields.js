__d(
  "WAWebVoipClosedTabCallRingFields",
  [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebCallUserJourneyGating",
    "WAWebIndexedDB",
    "WAWebVoipClosedTabCallRingRecords",
    "WAWebWamEnumIncomingCallNotificationStateType",
    "WAWebWamEnumWebTabState",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (!o("WAWebCallUserJourneyGating").isCallUserJourneyM2Enabled())
            return {};
          try {
            var n = yield _(t);
            return n == null
              ? {}
              : babelHelpers.extends({}, yield y(), {
                  incomingCallNotificationState: b(n.outcome),
                  webTabStateAtOffer: o("WAWebWamEnumWebTabState").WEB_TAB_STATE
                    .CLOSED,
                });
          } catch (t) {
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Fieldstats] closed tab call ring lookup failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t)),
              {}
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    var m = "sw",
      p = "prefs";
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = Date.now());
          var n = yield g();
          if (n == null) return null;
          try {
            if (!n.objectStoreNames.contains(p)) return null;
            var r = n.transaction([p], "readwrite").objectStore(p),
              a = o(
                "WAWebVoipClosedTabCallRingRecords",
              ).parseClosedTabCallRings(
                yield h(
                  r.get(
                    o("WAWebVoipClosedTabCallRingRecords")
                      .CLOSED_TAB_CALL_RINGS_KEY,
                  ),
                ),
                t,
              ),
              i = a.find(function (t) {
                return t.callId === e;
              });
            return (
              i != null &&
                (yield h(
                  r.put(
                    a.filter(function (e) {
                      return e !== i;
                    }),
                    o("WAWebVoipClosedTabCallRingRecords")
                      .CLOSED_TAB_CALL_RINGS_KEY,
                  ),
                )),
              i != null ? i : null
            );
          } finally {
            n.close();
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g() {
      var e = r("WAWebIndexedDB");
      return e == null
        ? (u || (u = n("Promise"))).resolve(null)
        : new (u || (u = n("Promise")))(function (t) {
            var n = e.open(m);
            ((n.onupgradeneeded = function () {
              var e;
              (e = n.transaction) == null || e.abort();
            }),
              (n.onsuccess = function () {
                return t(n.result);
              }),
              (n.onerror = function () {
                return t(null);
              }));
          });
    }
    function h(e) {
      return new (u || (u = n("Promise")))(function (t, n) {
        ((e.onsuccess = function () {
          return t(e.result);
        }),
          (e.onerror = function () {
            return n(e.error);
          }));
      });
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            return yield o("WAWebBackendApi").frontendSendAndReceive(
              "getVoipCallReachability",
            );
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [Fieldstats] call reachability read failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              null
            );
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return e === "shown"
        ? o("WAWebWamEnumIncomingCallNotificationStateType")
            .INCOMING_CALL_NOTIFICATION_STATE_TYPE
            .INCOMING_CALL_NOTIFICATION_STATE_TIMEOUT
        : e === "clicked"
          ? o("WAWebWamEnumIncomingCallNotificationStateType")
              .INCOMING_CALL_NOTIFICATION_STATE_TYPE
              .INCOMING_CALL_NOTIFICATION_STATE_CLICKED
          : e === "dismissed"
            ? o("WAWebWamEnumIncomingCallNotificationStateType")
                .INCOMING_CALL_NOTIFICATION_STATE_TYPE
                .INCOMING_CALL_NOTIFICATION_STATE_DISMISSED
            : e === "not_delivered"
              ? o("WAWebWamEnumIncomingCallNotificationStateType")
                  .INCOMING_CALL_NOTIFICATION_STATE_TYPE
                  .INCOMING_CALL_NOTIFICATION_STATE_NOT_DELIVERED
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    ((l.takeClosedTabCallRingFields = c), (l.takeClosedTabCallRing = _));
  },
  98,
);
