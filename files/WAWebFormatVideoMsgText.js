__d(
  "WAWebFormatVideoMsgText",
  [
    "fbt",
    "WAWebFormatMsgTextUtils",
    "WAWebMsgType",
    "WAWebUnformatMsg",
    "WAWebViewOnceState",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.msg,
        n = e.options.unformat,
        a = t.safe();
      if (a.type === o("WAWebMsgType").MSG_TYPE.VIDEO && a.isViewOnce)
        return o("WAWebViewOnceState").isViewed(a)
          ? s._(/*BTDS*/ "Opened")
          : s._(/*BTDS*/ "Video");
      var i = o("WAWebFormatMsgTextUtils").maybeAddFooter(t.caption, t);
      return i != null && i !== ""
        ? n === !0
          ? r("WAWebUnformatMsg")(t, i)
          : i
        : t.isGif
          ? "GIF"
          : s._(/*BTDS*/ "Video");
    }
    l.default = e;
  },
  226,
);
