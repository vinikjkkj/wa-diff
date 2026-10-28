__d(
  "WAWebConversationDeprecatedLidChatUtils",
  ["WAWebApiContact"],
  function (t, n, r, o, a, i, l) {
    var e = { isLidDeprecated: !1 };
    function s(e) {
      return u(e).isLidDeprecated;
    }
    function u(e) {
      return c(e.id, e.accountLid);
    }
    function c(t, n) {
      if (!t.isRegularUser() || !n) return e;
      var r = o("WAWebApiContact").getDeprecatedLidLatestLid(n);
      return r != null ? { isLidDeprecated: !0, latestLid: r } : e;
    }
    ((l.isDeprecatedLidChatSendBlocked = s),
      (l.getLidDeprecatedInfo = u),
      (l.getLidDeprecatedInfoForAccount = c));
  },
  98,
);
