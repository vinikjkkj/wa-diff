__d(
  "WAWebCustomerManagerLocalFilterDates",
  [
    "WAWebCustomerManagerChatJid",
    "WAWebCustomerManagerChatResolver",
    "WAWebCustomerManagerFilterRegistry",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r, a) {
      if (!e || t == null || n == null) return null;
      var i = o(
          "WAWebCustomerManagerFilterRegistry",
        ).createLastMessageTimeMatcher({
          lastMessageCustomRange: r,
          lastMessageRange: a,
        }),
        l = t.filter(function (e) {
          var t,
            n = o("WAWebCustomerManagerChatJid").toChatJidOrNull(e);
          return (
            n != null &&
            i(
              (t = o(
                "WAWebCustomerManagerChatResolver",
              ).resolveCustomerManagerChat(n)) == null
                ? void 0
                : t.t,
            )
          );
        });
      return { currentIds: l, expectedIds: n };
    }
    function s(e, t, n, r, o) {
      var a = [];
      return (
        o && a.push("label"),
        e && t != null && r != null && a.push("lastMessage"),
        e && t != null && n != null && a.push("lastMessageCustomRange"),
        a
      );
    }
    ((l.currentDateScope = e), (l.appliedLocalFilterKeys = s));
  },
  98,
);
