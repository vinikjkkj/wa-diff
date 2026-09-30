__d(
  "WebBloksMinsBinShr",
  ["WebBloksMinsUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return (
        (o("WebBloksMinsUtils").toInt32(t, e, ">>>") >>>
          (o("WebBloksMinsUtils").toInt32(n, e, ">>>") & 31)) >>>
        0
      );
    }
    l.default = e;
  },
  98,
);
