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
    var e = null;
    function s(t, n) {
      var r;
      ((r = e) == null ? void 0 : r.callId) !== t &&
        (e = { callId: t, tabState: p(n) });
    }
    function u() {
      var t, n;
      return (t = (n = e) == null ? void 0 : n.tabState) != null ? t : null;
    }
    function c(t) {
      var n;
      t != null &&
        t !== "" &&
        ((n = e) == null ? void 0 : n.callId) !== t &&
        (e = null);
    }
    function d() {
      e = null;
    }
    function m(e, t) {
      t != null &&
        e.callSide === o("WAWebWamEnumCallSide").CALL_SIDE.CALLEE &&
        _(e.fieldStatsRowType) &&
        o("WAWebCallUserJourneyGating").isCallUserJourneyM2Enabled() &&
        (e.webTabStateAtOffer = t);
    }
    function p(e) {
      return e === "visible_focused"
        ? o("WAWebWamEnumWebTabState").WEB_TAB_STATE.ACTIVE
        : e === "visible_unfocused"
          ? o("WAWebWamEnumWebTabState").WEB_TAB_STATE.VISIBLE_UNFOCUSED
          : e === "hidden"
            ? o("WAWebWamEnumWebTabState").WEB_TAB_STATE.HIDDEN
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function _(e) {
      return (
        e === o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.SELF ||
        e === o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.BOTH
      );
    }
    ((l.recordTabStateAtOffer = s),
      (l.getTabStateAtOffer = u),
      (l.dropTabStateAtOfferOfOtherCall = c),
      (l.resetTabStateAtOffer = d),
      (l.maybeStampTabStateAtOffer = m));
  },
  98,
);
