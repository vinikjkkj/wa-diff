__d(
  "WAWebWrapperOrderEphemeralExemption",
  [
    "fbt",
    "WAWebBizGatingUtils",
    "WAWebChatEphemerality",
    "WAWebMsgGetters",
    "WAWebOrderEphemeralExemptionUtil",
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
        o("WAWebBizGatingUtils").inOrderMessagesEphemeralExceptionEnabled() &&
        o(
          "WAWebOrderEphemeralExemptionUtil",
        ).isMessageTypeExemptedFromDisappearing(n.type, r, a)
      );
    }
    function u() {
      return o("WAWebBizGatingUtils").isOrderContentOptimizationEnabled()
        ? s._(
            /*BTDS*/ "Disappearing messages are turned on in this chat. This charge request will not disappear because it contains purchase information.",
          )
        : s._(
            /*BTDS*/ "Disappearing messages are turned on in this chat. This order will not disappear because it contains purchase information.",
          );
    }
    function c() {
      return s._(/*BTDS*/ "Learn more");
    }
    ((l.isMessageExemptedFromDisappearing = e),
      (l.getOrderEphemeralExemptionInfoString = u),
      (l.getLearnMorerderEphemeralExemptionButtonString = c));
  },
  226,
);
