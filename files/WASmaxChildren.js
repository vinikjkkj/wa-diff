__d(
  "WASmaxChildren",
  ["WADeepEquals"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return t == null ? null : e(t);
    }
    function s(e, t) {
      if (t == null) return null;
      if (t) return e();
    }
    function u(e, t) {
      if (t) {
        for (var n = 1; n < t.length; n++)
          if (!o("WADeepEquals").deepEqual(t[n], t[0]))
            throw new Error(
              "expected all homogeneous children to be equal, but they were not",
            );
      }
      var r = d(e, t, 0, 1 / 0);
      return r;
    }
    function c(e, t) {
      return m(e, t, 0, 1 / 0);
    }
    function d(e, t, n, r) {
      if (t == null) {
        if (n > 0)
          throw new Error(
            "expected at least " + n + " children, but none provided",
          );
        return [];
      }
      var o = t.length;
      if (o < n)
        throw new Error("expected at least " + n + " children, but found " + o);
      if (o > r)
        throw new Error("expected at most " + r + " children, but found " + o);
      return t.map(function (t) {
        return e(t);
      });
    }
    function m(e, t, n, r) {
      if (t === 0) {
        if (n > 0)
          throw new Error(
            "expected at least " + n + " children, but none provided",
          );
        return [];
      }
      if (t < n)
        throw new Error("expected at least " + n + " children, but found " + t);
      if (t > r)
        throw new Error("expected at most " + r + " children, but found " + t);
      for (var o = [], a = 0; a < t; a++) o.push(e());
      return o;
    }
    ((l.OPTIONAL_CHILD = e),
      (l.HAS_OPTIONAL_CHILD = s),
      (l.HOMOGENEOUS_CHILD = u),
      (l.HOMOGENEOUS_CHILD_COUNT = c),
      (l.REPEATED_CHILD = d),
      (l.REPEATED_CHILD_COUNT = m));
  },
  98,
);
