__d(
  "WAWebBizVPVEligibility",
  ["WAWebMsgGetters", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      return o("WAWebMsgGetters").getIsSentByMe(e) ||
        r ||
        o("WAWebMsgType").SYSTEM_MESSAGE_TYPES.includes(
          o("WAWebMsgGetters").getType(e),
        )
        ? !1
        : !!(t || o("WAWebMsgGetters").getIsMarketingMessage(e) || n);
    }
    l.isEligibleForBizVPV = e;
  },
  98,
);
