__d(
  "WebBloksAbstractButton",
  [
    "WebBloksComponentContext",
    "WebBloksStyle",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "accessibility_label",
        "badge_count",
        "className",
        "icon",
        "role",
        "tabIndex",
        "title",
        "trailing",
      ],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n,
        r = o("react-compiler-runtime").c(36),
        a,
        i,
        l,
        s,
        c,
        m,
        p,
        _,
        f;
      r[0] !== t
        ? ((a = t.accessibility_label),
          (i = t.badge_count),
          (l = t.className),
          (s = t.icon),
          (m = t.role),
          (p = t.tabIndex),
          (_ = t.title),
          (f = t.trailing),
          (c = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (r[0] = t),
          (r[1] = a),
          (r[2] = i),
          (r[3] = l),
          (r[4] = s),
          (r[5] = c),
          (r[6] = m),
          (r[7] = p),
          (r[8] = _),
          (r[9] = f))
        : ((a = r[1]),
          (i = r[2]),
          (l = r[3]),
          (s = r[4]),
          (c = r[5]),
          (m = r[6]),
          (p = r[7]),
          (_ = r[8]),
          (f = r[9]));
      var g = m === void 0 ? "button" : m,
        h = p === void 0 ? 0 : p,
        y = o("WebBloksComponentContext").useWebBloksContext(),
        C = y.objectSet;
      if (s == null && _ == null) return null;
      var b = d.abstractButton,
        v = _ == null,
        S = (n = _ != null ? _ : a) != null ? n : "",
        R = null;
      if (s != null) {
        var L = C.environment,
          E = L.AssetRenderer,
          k = L.logger;
        if (!E)
          k.mustfix(
            "Trying to render an asset, but AssetRenderer is not defined for %s",
            JSON.stringify(s),
          );
        else {
          var I;
          r[10] !== S || r[11] !== v
            ? ((I = {}),
              S && ((I.alt = ""), v || (I.className = d.marginRight4)),
              (r[10] = S),
              (r[11] = v),
              (r[12] = I))
            : (I = r[12]);
          var T;
          (r[13] !== E || r[14] !== s || r[15] !== I
            ? ((T = u.jsx(E, babelHelpers.extends({ src: s }, I))),
              (r[13] = E),
              (r[14] = s),
              (r[15] = I),
              (r[16] = T))
            : (T = r[16]),
            (R = T));
        }
      }
      var D;
      r[17] !== c
        ? ((D = function (t) {
            ((t.key === "Enter" || t.key === " ") &&
              (t.preventDefault(), t.currentTarget.click()),
              c.onKeyDown == null || c.onKeyDown(t));
          }),
          (r[17] = c),
          (r[18] = D))
        : (D = r[18]);
      var x = D,
        $ = f === !0 ? d.TrailingButton : "",
        P;
      r[19] !== l || r[20] !== $
        ? ((P = o("WebBloksStyle").classNames($, b, l)),
          (r[19] = l),
          (r[20] = $),
          (r[21] = P))
        : (P = r[21]);
      var N;
      r[22] !== S || r[23] !== v
        ? ((N = v
            ? u.jsx("span", {
                className: d.abstractButton + "_accessible_elem",
                children: S,
              })
            : S),
          (r[22] = S),
          (r[23] = v),
          (r[24] = N))
        : (N = r[24]);
      var M;
      r[25] !== x ||
      r[26] !== R ||
      r[27] !== c ||
      r[28] !== g ||
      r[29] !== P ||
      r[30] !== N ||
      r[31] !== h
        ? ((M = u.jsxs(
            "div",
            babelHelpers.extends({ role: g, tabIndex: h }, c, {
              onKeyDown: x,
              className: P,
              children: [R, N],
            }),
          )),
          (r[25] = x),
          (r[26] = R),
          (r[27] = c),
          (r[28] = g),
          (r[29] = P),
          (r[30] = N),
          (r[31] = h),
          (r[32] = M))
        : (M = r[32]);
      var w = i != null && i > 0 ? i : void 0,
        A;
      return (
        r[33] !== M || r[34] !== w
          ? ((A = u.jsxs(u.Fragment, { children: [M, w] })),
            (r[33] = M),
            (r[34] = w),
            (r[35] = A))
          : (A = r[35]),
        A
      );
    }
    var d = o("WebBloksStyle").createStyles({
      TrailingButton: {
        backgroundColor: "transparent",
        border: "none",
        color: "rgb(23, 99, 207)",
      },
      marginRight4: { marginRight: 4 },
      abstractButton: function (t) {
        var e;
        return (
          (e = {}),
          (e[t] = {
            cursor: "pointer",
            display: "inline-block",
            textDecoration: "none",
            whiteSpace: "nowrap",
            padding: "1px 6px",
          }),
          (e[".gecko " + t + ":focus"] = {
            outline: "1px dotted #3b5998",
            outlineColor: "invert",
          }),
          (e[t + ":hover"] = { textDecoration: "none" }),
          (e[t + " + " + t] = { marginLeft: 4 }),
          (e[t + "_accessible_elem"] = {
            clip: "rect(1px, 1px, 1px, 1px)",
            height: 1,
            overflow: "hidden",
            position: "absolute",
            whiteSpace: "nowrap",
            width: 1,
          }),
          e
        );
      },
    });
    l.default = c;
  },
  98,
);
