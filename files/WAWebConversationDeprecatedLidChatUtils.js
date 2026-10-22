__d(
  "WAWebConversationDeprecatedLidChatUtils",
  ["WAWebApiContact"],
  function (t, n, r, o, a, i, l) {
    var e = { isLidDeprecated: !1 };
    function s(e) {
      return u(e).isLidDeprecated;
    }
    function u(t) {
      if (!t.id.isRegularUser() || !t.accountLid) return e;
      var n = o("WAWebApiContact").getDeprecatedLidLatestLid(t.accountLid);
      return n != null ? { isLidDeprecated: !0, latestLid: n } : e;
    }
    ((l.isDeprecatedLidChatSendBlocked = s), (l.getLidDeprecatedInfo = u));
  },
  98,
);
