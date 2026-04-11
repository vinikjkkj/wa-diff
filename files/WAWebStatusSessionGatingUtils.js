__d(
  "WAWebStatusSessionGatingUtils",
  ["$InternalEnum", "WAWebABProps", "WAWebSessionScope"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
      DISABLED: 0,
      RECEIVER_ENABLED: 1,
      SENDER_ENABLED: 2,
      FORCED: 3,
    });
    function s() {
      var t;
      return (t = e.cast(
        o("WAWebABProps").getABPropConfigValue(
          "status_infra_1_1_session_split",
        ),
      )) != null
        ? t
        : e.DISABLED;
    }
    function u() {
      var t = s();
      return t === e.SENDER_ENABLED || t === e.FORCED;
    }
    function c(t) {
      t === void 0 && (t = void 0);
      var n = s();
      return n === e.DISABLED
        ? !1
        : n === e.FORCED
          ? !0
          : t === o("WAWebSessionScope").SessionScope.STATUS;
    }
    ((l.StatusSessionReceiverState = e),
      (l.getStatusSessionReceiverState = s),
      (l.shouldUseStatusSessionForOutgoingMessage = u),
      (l.shouldUseStatusSessionForIncomingMessage = c));
  },
  98,
);
