__d(
  "WAWebFormatProductMsgText",
  ["fbt", "WAWebFormatMsgTextUtils", "WAWebFrontendMsgGetters"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.msg,
        n = e.options,
        r = [o("WAWebFrontendMsgGetters").getText(t), t.caption, t.footer]
          .filter(Boolean)
          .join(" ");
      return r.length
        ? n.unformat !== !0
          ? r
          : o("WAWebFormatMsgTextUtils").unformatTextWithSpoilerReplacement(
              t,
              r,
              n,
            )
        : s._(/*BTDS*/ "Product");
    }
    l.default = e;
  },
  226,
);
