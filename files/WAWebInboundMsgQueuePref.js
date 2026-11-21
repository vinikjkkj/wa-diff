__d(
  "WAWebInboundMsgQueuePref",
  ["WAWebUserPrefsKeys", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    var e = !1;
    function s() {
      e ||
        (r("WAWebUserPrefsStore").set(
          o("WAWebUserPrefsKeys").UserPrefs.InboundMsgQueueMayHaveRows,
          !0,
        ),
        (e = !0));
    }
    function u() {
      ((e = !1),
        r("WAWebUserPrefsStore").set(
          o("WAWebUserPrefsKeys").UserPrefs.InboundMsgQueueMayHaveRows,
          !1,
        ));
    }
    ((l.markInboundMsgQueueMayHaveRows = s),
      (l.clearInboundMsgQueueMayHaveRows = u));
  },
  98,
);
