__d(
  "WebBloksFixedWrapper",
  [
    "WebBloksComponentContext",
    "WebBloksStyle",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(27),
        n = e.externalStyle,
        r = e.node,
        a = o("WebBloksComponentContext").useWebBloksContext(),
        i = a.renderChildren,
        l;
      t[0] !== r ? ((l = r.get("bottom")), (t[0] = r), (t[1] = l)) : (l = t[1]);
      var u = l,
        c;
      t[2] !== r ? ((c = r.get("left")), (t[2] = r), (t[3] = c)) : (c = t[3]);
      var d = c,
        m;
      t[4] !== r ? ((m = r.get("right")), (t[4] = r), (t[5] = m)) : (m = t[5]);
      var p = m,
        _;
      t[6] !== r ? ((_ = r.get("top")), (t[6] = r), (t[7] = _)) : (_ = t[7]);
      var f = _,
        g;
      t[8] !== r
        ? ((g = r.get("z_index")), (t[8] = r), (t[9] = g))
        : (g = t[9]);
      var h = g,
        y = r.getSubNodes("children"),
        C = u != null ? u : void 0,
        b = d != null ? d : void 0,
        v = p != null ? p : void 0,
        S = f != null ? f : void 0,
        R = h != null ? h : void 0,
        L;
      t[10] !== R || t[11] !== C || t[12] !== b || t[13] !== v || t[14] !== S
        ? ((L = {
            bottom: C,
            left: b,
            position: "fixed",
            right: v,
            top: S,
            zIndex: R,
          }),
          (t[10] = R),
          (t[11] = C),
          (t[12] = b),
          (t[13] = v),
          (t[14] = S),
          (t[15] = L))
        : (L = t[15]);
      var E = L,
        k;
      t[16] !== n || t[17] !== E
        ? ((k = babelHelpers.extends({ pointerEvents: "none" }, n, E)),
          (t[16] = n),
          (t[17] = E),
          (t[18] = k))
        : (k = t[18]);
      var I = o("WebBloksStyle").useStyle(r, k),
        T = I.style,
        D = I.wrapper,
        x = I.wrapperProps,
        $ = o("WebBloksStyle").WebBloksStyles,
        P = i(y),
        N;
      t[19] !== T || t[20] !== $.container || t[21] !== P || t[22] !== x
        ? ((N = s.jsx(
            "div",
            babelHelpers.extends({}, x, {
              className: $.container,
              style: T,
              children: P,
            }),
          )),
          (t[19] = T),
          (t[20] = $.container),
          (t[21] = P),
          (t[22] = x),
          (t[23] = N))
        : (N = t[23]);
      var M;
      return (
        t[24] !== N || t[25] !== D
          ? ((M = D(N)), (t[24] = N), (t[25] = D), (t[26] = M))
          : (M = t[26]),
        M
      );
    }
    l.default = u;
  },
  98,
);
