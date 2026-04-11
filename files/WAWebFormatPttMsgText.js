__d(
  "WAWebFormatPttMsgText",
  ["fbt", "WAWebClock", "WAWebMsgType", "WAWebViewOnceState"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.msg,
        n = t.safe(),
        r = s._(/*BTDS*/ "Voice message"),
        a = o("WAWebClock").Clock.durationStr(t.duration);
      return n.type === o("WAWebMsgType").MSG_TYPE.PTT && n.isViewOnce
        ? o("WAWebViewOnceState").isViewed(n)
          ? s._(/*BTDS*/ "Opened")
          : r
        : a || r;
    }
    l.default = e;
  },
  226,
);
