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
          if (!o("WADeepEquals").deepEqual(t[n], t[0])) {
            var r = new Error(
              "expected all homogeneous children to be equal, but they were not",
            );
            throw (r.stack, r);
          }
      }
      var a = d(e, t, 0, 1 / 0);
      return a;
    }
    function c(e, t) {
      return m(e, t, 0, 1 / 0);
    }
    function d(e, t, n, r) {
      if (t == null) {
        if (n > 0) {
          var o = new Error(
            "expected at least " + n + " children, but none provided",
          );
          throw (o.stack, o);
        }
        return [];
      }
      var a = t.length;
      if (a < n) {
        var i = new Error(
          "expected at least " + n + " children, but found " + a,
        );
        throw (i.stack, i);
      } else if (a > r) {
        var l = new Error(
          "expected at most " + r + " children, but found " + a,
        );
        throw (l.stack, l);
      }
      return t.map(function (t) {
        return e(t);
      });
    }
    function m(e, t, n, r) {
      if (t === 0) {
        if (n > 0) {
          var o = new Error(
            "expected at least " + n + " children, but none provided",
          );
          throw (o.stack, o);
        }
        return [];
      }
      if (t < n) {
        var a = new Error(
          "expected at least " + n + " children, but found " + t,
        );
        throw (a.stack, a);
      } else if (t > r) {
        var i = new Error(
          "expected at most " + r + " children, but found " + t,
        );
        throw (i.stack, i);
      }
      for (var l = [], s = 0; s < t; s++) l.push(e());
      return l;
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
