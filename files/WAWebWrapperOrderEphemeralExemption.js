__d(
  "WAWebWrapperOrderEphemeralExemption",
  [
    "fbt",
    "WAWebChatEphemerality",
    "WAWebMsgGetters",
    "WAWebOrderEphemeralExemptionUtil",
    "WAWebOrderGatingUtils",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      if (
        !o("WAWebChatEphemerality").isEphemeralSettingOn(e) ||
        o("WAWebMsgGetters").getIsEphemeral(t)
      )
        return !1;
      var n = t.safe(),
        r = t.interactiveType,
        a = t.nativeFlowName;
      return (
        o("WAWebOrderGatingUtils").inOrderMessagesEphemeralExceptionEnabled() &&
        o(
          "WAWebOrderEphemeralExemptionUtil",
        ).isMessageTypeExemptedFromDisappearing(n.type, r, a)
      );
    }
    function u() {
      var e = r("justknobx")._("8068");
      return o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled()
        ? e
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ "")
        : e
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ "");
    }
    function c() {
      return s._(/*BTDS*/ "");
    }
    ((l.isMessageExemptedFromDisappearing = e),
      (l.getOrderEphemeralExemptionInfoString = u),
      (l.getLearnMorerderEphemeralExemptionButtonString = c));
  },
  226,
);
