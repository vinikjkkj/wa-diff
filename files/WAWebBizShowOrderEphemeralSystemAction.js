__d(
  "WAWebBizShowOrderEphemeralSystemAction",
  [
    "WAWebBizGatingUtils",
    "WAWebDBChatEphemeralExemptionData",
    "WAWebDBEphemeralDisplayedExemptions",
    "WAWebOrderEphemeralExemptionUtil",
    "WAWebOrderSystemMsg",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (!o("WAWebBizGatingUtils").inOrderMessagesEphemeralExceptionEnabled())
        return null;
      var n = e.safe(),
        r = e.interactiveType,
        a = e.nativeFlowName;
      if (
        !o(
          "WAWebOrderEphemeralExemptionUtil",
        ).isMessageTypeExemptedFromDisappearing(n.type, r, a)
      )
        return null;
      var i = {
        id: t.id.toString(),
        ephemeralDuration: t.ephemeralDuration,
        ephemeralDisplayedExemptions: t.ephemeralDisplayedExemptions,
      };
      return o(
        "WAWebOrderEphemeralExemptionUtil",
      ).shouldShowOrderExemptionSystemMessage(i)
        ? ((t.ephemeralDisplayedExemptions = o(
            "WAWebDBEphemeralDisplayedExemptions",
          ).EphemeralExemptionType.ORDERS_AND_PAYMENTS),
          o(
            "WAWebDBChatEphemeralExemptionData",
          ).persistsEphemeralDisplayedExemptions(
            t.id,
            t.ephemeralDuration,
            o("WAWebDBEphemeralDisplayedExemptions").EphemeralExemptionType
              .ORDERS_AND_PAYMENTS,
          ),
          o("WAWebOrderSystemMsg").getOrderEphemeralExemptionSystemMsg(t.id))
        : (o(
            "WAWebOrderEphemeralExemptionUtil",
          ).shouldUnsetChatEphemeralDisplayedExemption(i) &&
            ((t.ephemeralDisplayedExemptions = o(
              "WAWebDBEphemeralDisplayedExemptions",
            ).EphemeralExemptionType.UNSET),
            o(
              "WAWebDBChatEphemeralExemptionData",
            ).persistsEphemeralDisplayedExemptions(
              t.id,
              t.ephemeralDuration,
              o("WAWebDBEphemeralDisplayedExemptions").EphemeralExemptionType
                .UNSET,
            )),
          null);
    }
    l.getMaybeSystemMsgForOrderEphemeralExemption = e;
  },
  98,
);
