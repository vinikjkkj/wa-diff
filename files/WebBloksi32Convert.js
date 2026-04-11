__d(
  "WebBloksi32Convert",
  ["WebBloksErrors"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = parseInt(t, 10);
      if (Number.isNaN(n))
        throw new (o("WebBloksErrors").WebBloksScriptError)(
          "Failed to convert value to `i32`",
          e,
        );
      return n;
    }
    l.default = e;
  },
  98,
);
