__d(
  "WAWebFormatVideoMsgText",
  ["fbt", "WAWebFormatMsgTextUtils", "WAWebMsgType", "WAWebViewOnceState"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.msg,
        n = e.options,
        r = n.unformat,
        a = t.safe();
      if (a.type === o("WAWebMsgType").MSG_TYPE.VIDEO && a.isViewOnce)
        return o("WAWebViewOnceState").isViewed(a)
          ? s._(/*BTDS*/ "Opened")
          : s._(/*BTDS*/ "Video");
      var i = o("WAWebFormatMsgTextUtils").maybeAddFooter(t.caption, t);
      return i != null && i !== ""
        ? r !== !0
          ? i
          : o("WAWebFormatMsgTextUtils").unformatTextWithSpoilerReplacement(
              t,
              i,
              n,
            )
        : t.isGif
          ? "GIF"
          : s._(/*BTDS*/ "Video");
    }
    l.default = e;
  },
  226,
);
