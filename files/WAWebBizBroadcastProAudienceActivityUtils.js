__d(
  "WAWebBizBroadcastProAudienceActivityUtils",
  ["WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      var a = r - n * o("WATimeUtils").DAY_SECONDS,
        i = t === "active_chats";
      return e
        .filter(function (e) {
          var t = e.hasChat,
            n = e.lastIncomingTs;
          return t === !0 && s(n, a) === i;
        })
        .map(function (e) {
          var t = e.accountLid;
          return t;
        });
    }
    function s(e, t) {
      return e != null && Number.isFinite(e) && e >= t;
    }
    l.selectProActivityRecipientLids = e;
  },
  98,
);
