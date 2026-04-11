__d(
  "WAWebFormatImageMsgText",
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
      if (a.type === o("WAWebMsgType").MSG_TYPE.IMAGE && a.isViewOnce)
        return o("WAWebViewOnceState").isViewed(a)
          ? s._(/*BTDS*/ "Opened")
          : s._(/*BTDS*/ "Photo");
      var i = o("WAWebFormatMsgTextUtils").maybeAddFooter(t.caption, t);
      return i != null && i !== ""
        ? n === !0
          ? r("WAWebUnformatMsg")(t, i)
          : i
        : s._(/*BTDS*/ "Photo");
    }
    l.default = e;
  },
  226,
);
