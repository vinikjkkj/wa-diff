__d(
  "WAWebFormatOrderMsgText",
  ["WAWebFormatMsgTextUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.msg,
        n = e.options;
      return o("WAWebFormatMsgTextUtils").maskSpoilersWithOptions(
        t.message || "",
        n,
      );
    }
    l.default = e;
  },
  98,
);
