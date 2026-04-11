__d(
  "WAWebFlexBox.react",
  ["WAWebBox.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s = ["ref"],
      u = ["ref"],
      c,
      d = c || (c = o("react"));
    function m(t) {
      var n = o("react-compiler-runtime").c(6),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l;
      return (
        n[3] !== a || n[4] !== i
          ? ((l = d.jsx(
              r("WAWebBox.react"),
              babelHelpers.extends({}, a, {
                flex: !0,
                direction: "horizontal",
                ref: i,
              }),
            )),
            (n[3] = a),
            (n[4] = i),
            (n[5] = l))
          : (l = n[5]),
        l
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(6),
        n,
        a;
      t[0] !== e
        ? ((a = e.ref),
          (n = babelHelpers.objectWithoutPropertiesLoose(e, s)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = a))
        : ((n = t[1]), (a = t[2]));
      var i;
      return (
        t[3] !== n || t[4] !== a
          ? ((i = d.jsx(
              r("WAWebBox.react"),
              babelHelpers.extends({}, n, {
                flex: !0,
                direction: "vertical",
                ref: a,
              }),
            )),
            (t[3] = n),
            (t[4] = a),
            (t[5] = i))
          : (i = t[5]),
        i
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(6),
        n,
        a;
      t[0] !== e
        ? ((a = e.ref),
          (n = babelHelpers.objectWithoutPropertiesLoose(e, u)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = a))
        : ((n = t[1]), (a = t[2]));
      var i;
      return (
        t[3] !== n || t[4] !== a
          ? ((i = d.jsx(
              r("WAWebBox.react"),
              babelHelpers.extends({}, n, { ref: a }),
            )),
            (t[3] = n),
            (t[4] = a),
            (t[5] = i))
          : (i = t[5]),
        i
      );
    }
    ((l.FlexRow = m), (l.FlexColumn = p), (l.FlexItem = _));
  },
  98,
);
