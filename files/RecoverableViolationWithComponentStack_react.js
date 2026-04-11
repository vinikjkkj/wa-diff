__d(
  "RecoverableViolationWithComponentStack.react",
  ["FBLogger", "cr:7063", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.categoryKey,
        n = e.errorMessage,
        o = e.messageParams,
        a = e.project,
        i = r("FBLogger")(a).blameToPreviousFrame();
      throw (
        t != null && i.addToCategoryKey(t),
        i.mustfixThrow.apply(i, [n].concat(o != null ? o : []))
      );
    }
    function c(e) {
      var t = o("react-compiler-runtime").c(13),
        r = e.categoryKey,
        a = e.errorMessage,
        i = e.fallback,
        l = e.messageParams,
        c = e.projectName,
        d;
      t[0] !== c
        ? ((d = { project: c, type: "error" }), (t[0] = c), (t[1] = d))
        : (d = t[1]);
      var m;
      t[2] !== i
        ? ((m = function () {
            return i != null ? i : null;
          }),
          (t[2] = i),
          (t[3] = m))
        : (m = t[3]);
      var p;
      t[4] !== r || t[5] !== a || t[6] !== l || t[7] !== c
        ? ((p = s.jsx(u, {
            categoryKey: r,
            errorMessage: a,
            messageParams: l,
            project: c,
          })),
          (t[4] = r),
          (t[5] = a),
          (t[6] = l),
          (t[7] = c),
          (t[8] = p))
        : (p = t[8]);
      var _;
      return (
        t[9] !== d || t[10] !== m || t[11] !== p
          ? ((_ = s.jsx(n("cr:7063"), {
              context: d,
              fallback: m,
              children: p,
            })),
            (t[9] = d),
            (t[10] = m),
            (t[11] = p),
            (t[12] = _))
          : (_ = t[12]),
        _
      );
    }
    l.default = c;
  },
  98,
);
