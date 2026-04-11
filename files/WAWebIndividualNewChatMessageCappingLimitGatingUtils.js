__d(
  "WAWebIndividualNewChatMessageCappingLimitGatingUtils",
  ["WAWebABProps", "WAWebMobilePlatforms", "WAWebSubscriptionCollection"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_individual_new_chat_msg_capping_limit",
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_individual_new_chat_msg_latest_rampup_date",
      );
    }
    function u() {
      return o("WAWebMobilePlatforms").isSMB() && c() ? !1 : e() > 0;
    }
    function c() {
      var e = o("WAWebSubscriptionCollection").SubscriptionCollection.at(0);
      if (e == null) return !1;
      var t = e.newMessageCappingEnabled;
      if (t === !0) return !1;
      var n =
        (e == null ? void 0 : e.creationTime) != null && e.creationTime < s();
      return n;
    }
    l.isIndividualNewChatMessageCappingEnabled = u;
  },
  98,
);
