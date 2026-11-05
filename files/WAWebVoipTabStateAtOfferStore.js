__d(
  "WAWebVoipTabStateAtOfferStore",
  [
    "WAWebCallUserJourneyGating",
    "WAWebWamEnumCallSide",
    "WAWebWamEnumFieldStatsRowType",
    "WAWebWamEnumWebTabState",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3e5,
      s = 32,
      u = new Map(),
      c = null;
    function d(e, t, n) {
      var r;
      ((r = c) == null ? void 0 : r.callId) !== e &&
        (c = { callId: e, isGroupCall: n, tabState: b(t) });
    }
    function m() {
      var e, t;
      return (e = (t = c) == null ? void 0 : t.tabState) != null ? e : null;
    }
    function p() {
      var e;
      return ((e = c) == null ? void 0 : e.isGroupCall) === !1
        ? c.callId
        : null;
    }
    function _(e) {
      var t;
      e != null &&
        e !== "" &&
        ((t = c) == null ? void 0 : t.callId) !== e &&
        (c = null);
    }
    function f() {
      c = null;
    }
    function g(e, t, n) {
      (n === void 0 && (n = Date.now()),
        S(n),
        u.has(e) || u.set(e, { recordedAtMs: n, tabState: b(t) }));
    }
    function h(e, t) {
      t === void 0 && (t = Date.now());
      var n = u.get(e);
      return n != null && !R(n.recordedAtMs, t) ? n.tabState : null;
    }
    function y() {
      u.clear();
    }
    function C(e, t) {
      t != null &&
        e.callSide === o("WAWebWamEnumCallSide").CALL_SIDE.CALLEE &&
        v(e.fieldStatsRowType) &&
        o("WAWebCallUserJourneyGating").isCallUserJourneyM2Enabled() &&
        (e.webTabStateAtOffer = t);
    }
    function b(e) {
      return e === "visible_focused"
        ? o("WAWebWamEnumWebTabState").WEB_TAB_STATE.ACTIVE
        : e === "visible_unfocused"
          ? o("WAWebWamEnumWebTabState").WEB_TAB_STATE.VISIBLE_UNFOCUSED
          : e === "hidden"
            ? o("WAWebWamEnumWebTabState").WEB_TAB_STATE.HIDDEN
            : e === "not_connected"
              ? o("WAWebWamEnumWebTabState").WEB_TAB_STATE.CLOSED
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function v(e) {
      return (
        e === o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.SELF ||
        e === o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.BOTH
      );
    }
    function S(e) {
      for (var t of u) {
        var n = t[0],
          r = t[1].recordedAtMs;
        if (!R(r, e) && u.size < s) return;
        u.delete(n);
      }
    }
    function R(t, n) {
      return n - t >= e;
    }
    ((l.recordTabStateAtOffer = d),
      (l.getTabStateAtOffer = m),
      (l.getOneToOneOfferCallId = p),
      (l.dropTabStateAtOfferOfOtherCall = _),
      (l.resetTabStateAtOffer = f),
      (l.recordTabStateAtOfferForCall = g),
      (l.getTabStateAtOfferForCall = h),
      (l.resetTabStatesAtOfferForCalls = y),
      (l.maybeStampTabStateAtOffer = C));
  },
  98,
);
