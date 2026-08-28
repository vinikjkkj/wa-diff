__d(
  "withCometTokenizerTokenManagementDecorator",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "onChangeEntries",
        "onPressEntry",
        "onRemoveEntry",
        "selectedEntries",
      ],
      s,
      u = s || (s = o("react")),
      c = s.useCallback;
    function d(t) {
      function n(n) {
        var r = o("react-compiler-runtime").c(20),
          a,
          i,
          l,
          s,
          c;
        r[0] !== n
          ? ((a = n.onChangeEntries),
            (i = n.onPressEntry),
            (l = n.onRemoveEntry),
            (c = n.selectedEntries),
            (s = babelHelpers.objectWithoutPropertiesLoose(n, e)),
            (r[0] = n),
            (r[1] = a),
            (r[2] = i),
            (r[3] = l),
            (r[4] = s),
            (r[5] = c))
          : ((a = r[1]), (i = r[2]), (l = r[3]), (s = r[4]), (c = r[5]));
        var d;
        r[6] !== a || r[7] !== i || r[8] !== c
          ? ((d = function (t) {
              var e = [].concat(c, [t]);
              (a(e), i(t));
            }),
            (r[6] = a),
            (r[7] = i),
            (r[8] = c),
            (r[9] = d))
          : (d = r[9]);
        var m = d,
          p;
        r[10] !== a || r[11] !== l || r[12] !== c
          ? ((p = function (t) {
              var e = c.filter(function (e) {
                return e.key !== t.key;
              });
              (a(e), l(t));
            }),
            (r[10] = a),
            (r[11] = l),
            (r[12] = c),
            (r[13] = p))
          : (p = r[13]);
        var _ = p,
          f;
        return (
          r[14] !== m ||
          r[15] !== _ ||
          r[16] !== a ||
          r[17] !== s ||
          r[18] !== c
            ? ((f = u.jsx(
                t,
                babelHelpers.extends({}, s, {
                  onChangeEntries: a,
                  onPressEntry: m,
                  onRemoveEntry: _,
                  selectedEntries: c,
                }),
              )),
              (r[14] = m),
              (r[15] = _),
              (r[16] = a),
              (r[17] = s),
              (r[18] = c),
              (r[19] = f))
            : (f = r[19]),
          f
        );
      }
      return n;
    }
    l.default = d;
  },
  98,
);
