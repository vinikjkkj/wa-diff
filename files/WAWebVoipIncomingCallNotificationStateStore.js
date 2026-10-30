__d(
  "WAWebVoipIncomingCallNotificationStateStore",
  [
    "WAWebCallUserJourneyGating",
    "WAWebWamEnumCallSide",
    "WAWebWamEnumFieldStatsRowType",
    "WAWebWamEnumIncomingCallNotificationStateType",
    "WAWebWamEnumIncomingCallUiActionType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set([
        (e = o("WAWebWamEnumIncomingCallUiActionType"))
          .INCOMING_CALL_UI_ACTION_TYPE.INCOMING_CALL_SCREEN_ANSWER,
        e.INCOMING_CALL_UI_ACTION_TYPE.INCOMING_CALL_NOTIFICATION_ANSWER,
        e.INCOMING_CALL_UI_ACTION_TYPE.PENDING_CALL_SCREEN_END_AND_ANSWER,
        e.INCOMING_CALL_UI_ACTION_TYPE.PENDING_CALL_SCREEN_HOLD_AND_ANSWER,
        e.INCOMING_CALL_UI_ACTION_TYPE.PENDING_CALL_NOTIFICATION_END_AND_ANSWER,
        e.INCOMING_CALL_UI_ACTION_TYPE.MINIMIZED_BANNER_ANSWER,
      ]),
      u = new Set([
        e.INCOMING_CALL_UI_ACTION_TYPE.INCOMING_CALL_SCREEN_REJECT,
        e.INCOMING_CALL_UI_ACTION_TYPE.INCOMING_CALL_NOTIFICATION_REJECT,
        e.INCOMING_CALL_UI_ACTION_TYPE.PENDING_CALL_SCREEN_REJECT,
        e.INCOMING_CALL_UI_ACTION_TYPE.PENDING_CALL_NOTIFICATION_REJECT,
        e.INCOMING_CALL_UI_ACTION_TYPE.MINIMIZED_BANNER_REJECT,
      ]),
      c = new Map([
        [
          "clicked",
          o("WAWebWamEnumIncomingCallNotificationStateType")
            .INCOMING_CALL_NOTIFICATION_STATE_TYPE
            .INCOMING_CALL_NOTIFICATION_STATE_CLICKED,
        ],
        [
          "dismissed",
          o("WAWebWamEnumIncomingCallNotificationStateType")
            .INCOMING_CALL_NOTIFICATION_STATE_TYPE
            .INCOMING_CALL_NOTIFICATION_STATE_DISMISSED,
        ],
      ]),
      d = null;
    function m(e, t) {
      var n;
      ((n = d) == null ? void 0 : n.callId) !== e &&
        (d = { callId: e, isSkipped: !0, outcome: t });
    }
    function p(e) {
      var t, n;
      (((t = d) == null ? void 0 : t.callId) !== e ||
        ((n = d) == null ? void 0 : n.isSkipped) === !0) &&
        (d = { callId: e, outcome: "shown" });
    }
    function _(e, t) {
      var n = d,
        r =
          n == null
            ? t ===
              o("WAWebWamEnumIncomingCallNotificationStateType")
                .INCOMING_CALL_NOTIFICATION_STATE_TYPE
                .INCOMING_CALL_NOTIFICATION_STATE_NOT_DELIVERED
            : n.callId === e && f(n.outcome, t);
      r && (d = { callId: e, outcome: t });
    }
    function f(e, t) {
      return (
        e === "shown" ||
        (e ===
          o("WAWebWamEnumIncomingCallNotificationStateType")
            .INCOMING_CALL_NOTIFICATION_STATE_TYPE
            .INCOMING_CALL_NOTIFICATION_STATE_DISMISSED &&
          t ===
            o("WAWebWamEnumIncomingCallNotificationStateType")
              .INCOMING_CALL_NOTIFICATION_STATE_TYPE
              .INCOMING_CALL_NOTIFICATION_STATE_CLICKED)
      );
    }
    function g(e, t) {
      var n = c.get(t);
      if (typeof e != "string" || e === "" || n == null) return !1;
      var r = d;
      return (
        (r == null || r.callId !== e || f(r.outcome, n)) &&
          (d = { callId: e, outcome: n }),
        !0
      );
    }
    function h(e) {
      var t,
        n = (t = d) == null ? void 0 : t.outcome;
      return n == null ? null : n !== "shown" ? n : v(e);
    }
    function y(e) {
      var t;
      e != null &&
        e !== "" &&
        ((t = d) == null ? void 0 : t.callId) !== e &&
        (d = null);
    }
    function C() {
      d = null;
    }
    function b(e, t) {
      t != null &&
        e.callSide === o("WAWebWamEnumCallSide").CALL_SIDE.CALLEE &&
        S(e.fieldStatsRowType) &&
        o("WAWebCallUserJourneyGating").isCallUserJourneyM2Enabled() &&
        (e.incomingCallNotificationState = t);
    }
    function v(e) {
      return e != null && s.has(e)
        ? o("WAWebWamEnumIncomingCallNotificationStateType")
            .INCOMING_CALL_NOTIFICATION_STATE_TYPE
            .INCOMING_CALL_NOTIFICATION_STATE_ACCEPTED
        : e != null && u.has(e)
          ? o("WAWebWamEnumIncomingCallNotificationStateType")
              .INCOMING_CALL_NOTIFICATION_STATE_TYPE
              .INCOMING_CALL_NOTIFICATION_STATE_DECLINED
          : o("WAWebWamEnumIncomingCallNotificationStateType")
              .INCOMING_CALL_NOTIFICATION_STATE_TYPE
              .INCOMING_CALL_NOTIFICATION_STATE_TIMEOUT;
    }
    function S(e) {
      return (
        e === o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.SELF ||
        e === o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.BOTH
      );
    }
    ((l.recordIncomingCallNotificationSkipped = m),
      (l.recordIncomingCallNotificationShown = p),
      (l.recordIncomingCallNotificationOutcome = _),
      (l.recordServiceWorkerCallNotificationInteraction = g),
      (l.resolveIncomingCallNotificationState = h),
      (l.dropIncomingCallNotificationStateOfOtherCall = y),
      (l.resetIncomingCallNotificationState = C),
      (l.maybeStampIncomingCallNotificationState = b));
  },
  98,
);
