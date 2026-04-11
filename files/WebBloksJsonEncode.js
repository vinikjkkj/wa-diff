__d(
  "WebBloksJsonEncode",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t) {
      return JSON.stringify(t, function (e, t) {
        return typeof t == "boolean" ? (t ? 1 : 0) : t;
      });
    }
    i.default = e;
  },
  66,
);
