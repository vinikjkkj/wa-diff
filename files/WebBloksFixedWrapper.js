__d(
  "WebBloksFixedWrapper",
  [
    "WebBloksComponentContext",
    "WebBloksConstants",
    "WebBloksStyle",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = "#",
      c = "$",
      d = "&",
      m = "(",
      p = ")";
    function _(e) {
      var t = o("react-compiler-runtime").c(27),
        n = e.externalStyle,
        r = e.node,
        a = o("WebBloksComponentContext").useWebBloksContext(),
        i = a.renderChildren,
        l;
      t[0] !== r ? ((l = r.get(u)), (t[0] = r), (t[1] = l)) : (l = t[1]);
      var _ = l,
        f;
      t[2] !== r ? ((f = r.get(c)), (t[2] = r), (t[3] = f)) : (f = t[3]);
      var g = f,
        h;
      t[4] !== r ? ((h = r.get(d)), (t[4] = r), (t[5] = h)) : (h = t[5]);
      var y = h,
        C;
      t[6] !== r ? ((C = r.get(m)), (t[6] = r), (t[7] = C)) : (C = t[7]);
      var b = C,
        v;
      t[8] !== r ? ((v = r.get(p)), (t[8] = r), (t[9] = v)) : (v = t[9]);
      var S = v,
        R = r.getSubNodes(o("WebBloksConstants").CHILDREN_ATTRIBUTE_KEY),
        L = _ != null ? _ : void 0,
        E = g != null ? g : void 0,
        k = y != null ? y : void 0,
        I = b != null ? b : void 0,
        T = S != null ? S : void 0,
        D;
      t[10] !== T || t[11] !== L || t[12] !== E || t[13] !== k || t[14] !== I
        ? ((D = {
            bottom: L,
            left: E,
            position: "fixed",
            right: k,
            top: I,
            zIndex: T,
          }),
          (t[10] = T),
          (t[11] = L),
          (t[12] = E),
          (t[13] = k),
          (t[14] = I),
          (t[15] = D))
        : (D = t[15]);
      var x = D,
        $;
      t[16] !== n || t[17] !== x
        ? (($ = babelHelpers.extends({ pointerEvents: "none" }, n, x)),
          (t[16] = n),
          (t[17] = x),
          (t[18] = $))
        : ($ = t[18]);
      var P = o("WebBloksStyle").useStyle(r, $),
        N = P.style,
        M = P.wrapper,
        w = P.wrapperProps,
        A = o("WebBloksStyle").WebBloksStyles,
        F = i(R),
        O;
      t[19] !== N || t[20] !== A.container || t[21] !== F || t[22] !== w
        ? ((O = s.jsx(
            "div",
            babelHelpers.extends({}, w, {
              className: A.container,
              style: N,
              children: F,
            }),
          )),
          (t[19] = N),
          (t[20] = A.container),
          (t[21] = F),
          (t[22] = w),
          (t[23] = O))
        : (O = t[23]);
      var B;
      return (
        t[24] !== O || t[25] !== M
          ? ((B = M(O)), (t[24] = O), (t[25] = M), (t[26] = B))
          : (B = t[26]),
        B
      );
    }
    l.default = _;
  },
  98,
);
