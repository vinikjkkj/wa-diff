__d(
  "WAWebBizVPVEligibility",
  ["WAWebMsgGetters", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.isEnterprise,
        n = e.isGroupChat,
        r = e.isHosted,
        a = e.msg;
      return o("WAWebMsgGetters").getIsSentByMe(a) ||
        n ||
        o("WAWebMsgType").SYSTEM_MESSAGE_TYPES.includes(
          o("WAWebMsgGetters").getType(a),
        )
        ? !1
        : !!(t || o("WAWebMsgGetters").getIsMarketingMessage(a) || r);
    }
    l.isEligibleForBizVPV = e;
  },
  98,
);
