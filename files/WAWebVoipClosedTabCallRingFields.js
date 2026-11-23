__d(
  "WAWebVoipClosedTabCallRingFields",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebCallUserJourneyGating",
    "WAWebIndexedDB",
    "WAWebVoipClosedTabCallRingRecords",
    "WAWebWamEnumIncomingCallNotificationStateType",
    "WAWebWamEnumWebTabState",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    async function u(t) {
      if (!o("WAWebCallUserJourneyGating").isCallUserJourneyM2Enabled())
        return {};
      try {
        var n = await m(t);
        return n == null
          ? {}
          : babelHelpers.extends({}, await f(), {
              incomingCallNotificationState: g(n.outcome),
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
    }
    var c = "sw",
      d = "prefs";
    async function m(e, t) {
      t === void 0 && (t = Date.now());
      var n = await p();
      if (n == null) return null;
      try {
        if (!n.objectStoreNames.contains(d)) return null;
        var r = n.transaction([d], "readwrite").objectStore(d),
          a = o("WAWebVoipClosedTabCallRingRecords").parseClosedTabCallRings(
            await _(
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
            (await _(
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
    }
    function p() {
      var e = r("WAWebIndexedDB");
      return e == null
        ? Promise.resolve(null)
        : new Promise(function (t) {
            var n = e.open(c);
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
    function _(e) {
      return new Promise(function (t, n) {
        ((e.onsuccess = function () {
          return t(e.result);
        }),
          (e.onerror = function () {
            return n(e.error);
          }));
      });
    }
    async function f() {
      try {
        return await o("WAWebBackendApi").frontendSendAndReceive(
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
    }
    function g(e) {
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
    ((l.takeClosedTabCallRingFields = u),
      (l.takeClosedTabCallRing = m),
      (l.readCallReachability = f));
  },
  98,
);
