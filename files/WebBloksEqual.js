__d(
  "WebBloksEqual",
  ["WebBloksBooleanUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return (
        e === t ||
        (e == null && t == null) ||
        (o("WebBloksBooleanUtils").isTrue(e) &&
          o("WebBloksBooleanUtils").isTrue(t)) ||
        (o("WebBloksBooleanUtils").isFalse(e) &&
          o("WebBloksBooleanUtils").isFalse(t))
      );
    }
    l.isEqual = e;
  },
  98,
);
