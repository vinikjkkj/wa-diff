__d(
  "debounceCore",
  ["TimeSlice"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, o, a, i) {
      (n === void 0 && (n = null),
        o === void 0 && (o = setTimeout),
        a === void 0 && (a = clearTimeout),
        i === void 0 && (i = !1));
      var l,
        s = !0;
      function u() {
        for (var c = arguments.length, d = new Array(c), m = 0; m < c; m++)
          d[m] = arguments[m];
        var p;
        if (i) {
          if (
            ((p = r("TimeSlice").guard(function () {
              ((s = !0), (l = null));
            }, "debounceCore")),
            !s)
          ) {
            (a(l), (l = o(p, t)));
            return;
          }
          ((s = !1), e.apply(n, d));
        } else
          (u.reset(),
            (p = r("TimeSlice").guard(function () {
              ((l = null), e.apply(n, d));
            }, "debounceCore")));
        ((p.__SMmeta = e.__SMmeta), (l = o(p, t)));
      }
      return (
        (u.reset = function () {
          (a(l), (l = null), (s = !0));
        }),
        (u.isPending = function () {
          return l != null;
        }),
        u
      );
    }
    l.default = e;
  },
  98,
);
