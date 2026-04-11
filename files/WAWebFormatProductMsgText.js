__d(
  "WAWebFormatProductMsgText",
  ["fbt", "WAWebFrontendMsgGetters", "WAWebUnformatMsg"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.msg,
        n = e.options,
        a = [o("WAWebFrontendMsgGetters").getText(t), t.caption, t.footer]
          .filter(Boolean)
          .join(" ");
      return a.length
        ? n.unformat === !0
          ? r("WAWebUnformatMsg")(t, a)
          : a
        : s._(/*BTDS*/ "Product");
    }
    l.default = e;
  },
  226,
);
