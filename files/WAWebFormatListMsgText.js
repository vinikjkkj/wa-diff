__d(
  "WAWebFormatListMsgText",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t,
        n,
        r = e.msg;
      return [
        (t = r.list) == null ? void 0 : t.title,
        (n = r.list) == null ? void 0 : n.description,
        r.footer,
      ]
        .filter(Boolean)
        .join("\n");
    }
    i.default = e;
  },
  66,
);
