__d(
  "WAWebFormatListResponseMsgText",
  ["WAWebFormatMsgTextUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        r = e.msg,
        a = e.options,
        i =
          (((t = r.listResponse) == null ? void 0 : t.title) || "") +
          " " +
          (((n = r.listResponse) == null ? void 0 : n.description) || "");
      return o("WAWebFormatMsgTextUtils").maskSpoilersWithOptions(i, a);
    }
    l.default = e;
  },
  98,
);
