__d(
  "WAWebFormatListResponseMsgText",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t,
        n,
        r = e.msg;
      return (
        (((t = r.listResponse) == null ? void 0 : t.title) || "") +
        " " +
        (((n = r.listResponse) == null ? void 0 : n.description) || "")
      );
    }
    i.default = e;
  },
  66,
);
