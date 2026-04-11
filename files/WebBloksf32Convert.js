__d(
  "WebBloksf32Convert",
  ["WebBloksErrors"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t === !0) return 1;
      if (t === !1) return 0;
      var n = parseFloat(t);
      if (Number.isNaN(n))
        throw new (o("WebBloksErrors").WebBloksScriptError)(
          "Failed to convert value to `f32`",
          e,
        );
      return n;
    }
    l.default = e;
  },
  98,
);
