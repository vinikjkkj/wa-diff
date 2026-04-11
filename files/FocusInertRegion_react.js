__d(
  "FocusInertRegion.react",
  ["react", "react-compiler-runtime", "setElementCanTab"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useLayoutEffect,
      d = u.useRef,
      m = s.unstable_Scope;
    function p(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.children,
        r = e.disabled,
        a = e.focusQuery,
        i = e.forceHTMLInert,
        l = r === void 0 ? !1 : r,
        u = i === void 0 ? !1 : i,
        p = d(null),
        _,
        f;
      (t[0] !== l || t[1] !== a
        ? ((_ = function () {
            var e = p.current;
            if (a && e != null) {
              var t = e.DO_NOT_USE_queryAllNodes(a);
              if (t !== null)
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  o("setElementCanTab").setElementCanTab(r, l);
                }
            }
          }),
          (f = [l, a]),
          (t[0] = l),
          (t[1] = a),
          (t[2] = _),
          (t[3] = f))
        : ((_ = t[2]), (f = t[3])),
        c(_, f));
      var g;
      t[4] !== n || t[5] !== l || t[6] !== u
        ? ((g = !l && u ? s.jsx("div", { inert: "", children: n }) : n),
          (t[4] = n),
          (t[5] = l),
          (t[6] = u),
          (t[7] = g))
        : (g = t[7]);
      var h;
      return (
        t[8] !== g
          ? ((h = s.jsx(m, { ref: p, children: g })), (t[8] = g), (t[9] = h))
          : (h = t[9]),
        h
      );
    }
    l.default = p;
  },
  98,
);
