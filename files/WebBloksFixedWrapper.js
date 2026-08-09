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
      var t = o("react-compiler-runtime").c(19),
        n = e.externalStyle,
        r = e.node,
        a = o("WebBloksComponentContext").useWebBloksContext(),
        i = a.renderChildren,
        l;
      t[0] !== r ? ((l = r.getValues()), (t[0] = r), (t[1] = l)) : (l = t[1]);
      var u = l,
        c = u.bottom,
        d = u.left,
        m = u.right,
        p = u.top,
        _ = u.z_index,
        f = r.getSubNodes("children"),
        g = c != null ? c : void 0,
        h = d != null ? d : void 0,
        y = m != null ? m : void 0,
        C = p != null ? p : void 0,
        b = _ != null ? _ : void 0,
        v;
      t[2] !== g || t[3] !== h || t[4] !== y || t[5] !== C || t[6] !== b
        ? ((v = {
            bottom: g,
            left: h,
            position: "fixed",
            right: y,
            top: C,
            zIndex: b,
          }),
          (t[2] = g),
          (t[3] = h),
          (t[4] = y),
          (t[5] = C),
          (t[6] = b),
          (t[7] = v))
        : (v = t[7]);
      var S = v,
        R;
      t[8] !== n || t[9] !== S
        ? ((R = babelHelpers.extends({ pointerEvents: "none" }, n, S)),
          (t[8] = n),
          (t[9] = S),
          (t[10] = R))
        : (R = t[10]);
      var L = o("WebBloksStyle").useStyle(r, R),
        E = L.style,
        k = L.wrapper,
        I = L.wrapperProps,
        T = o("WebBloksStyle").WebBloksStyles,
        D = i(f),
        x;
      t[11] !== E || t[12] !== D || t[13] !== T.container || t[14] !== I
        ? ((x = s.jsx(
            "div",
            babelHelpers.extends({}, I, {
              className: T.container,
              style: E,
              children: D,
            }),
          )),
          (t[11] = E),
          (t[12] = D),
          (t[13] = T.container),
          (t[14] = I),
          (t[15] = x))
        : (x = t[15]);
      var $;
      return (
        t[16] !== x || t[17] !== k
          ? (($ = k(x)), (t[16] = x), (t[17] = k), (t[18] = $))
          : ($ = t[18]),
        $
      );
    }
    l.default = u;
  },
  98,
);
