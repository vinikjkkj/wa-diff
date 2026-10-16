__d(
  "WAWebFormatListMsgText",
  ["WAWebFormatMsgTextUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        r = e.msg,
        a = e.options,
        i = [
          (t = r.list) == null ? void 0 : t.title,
          (n = r.list) == null ? void 0 : n.description,
          r.footer,
        ]
          .filter(Boolean)
          .join("\n");
      return o("WAWebFormatMsgTextUtils").maskSpoilersWithOptions(i, a);
    }
    l.default = e;
  },
  98,
);
