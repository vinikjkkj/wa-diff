__d(
  "CometSuspendedDialogImpl.react",
  ["CometPlaceholder.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.unstable_ViewTransition;
    function c(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.animateReveal,
        a = e.dialog,
        l = e.dialogProps,
        c = e.fallback,
        d = e.onClose,
        m = e.onHide,
        p = n === void 0 ? !1 : n,
        _;
      t[0] !== c || t[1] !== d
        ? ((_ = c(d)), (t[0] = c), (t[1] = d), (t[2] = _))
        : (_ = t[2]);
      var f;
      t[3] !== a || t[4] !== l || t[5] !== d || t[6] !== m
        ? ((f = s.jsx(
            a,
            babelHelpers.extends({}, l, { onClose: d, onHide: m }),
          )),
          (t[3] = a),
          (t[4] = l),
          (t[5] = d),
          (t[6] = m),
          (t[7] = f))
        : (f = t[7]);
      var g;
      t[8] !== _ || t[9] !== f
        ? ((g = s.jsx(r("CometPlaceholder.react"), {
            fallback: _,
            name: i.id,
            children: f,
          })),
          (t[8] = _),
          (t[9] = f),
          (t[10] = g))
        : (g = t[10]);
      var h = g;
      if (p) {
        var y;
        return (
          t[11] !== h
            ? ((y = s.jsx(u, { children: h })), (t[11] = h), (t[12] = y))
            : (y = t[12]),
          y
        );
      }
      return h;
    }
    l.default = c;
  },
  98,
);
