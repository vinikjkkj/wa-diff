__d(
  "WebBloksT3DFromArray",
  ["Transform3DForWebBloks"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return new (r("Transform3DForWebBloks"))(
        t.map(function (e) {
          return parseFloat(e);
        }),
      );
    }
    l.default = e;
  },
  98,
);
