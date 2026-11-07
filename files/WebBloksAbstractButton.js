__d(
  "WebBloksAbstractButton",
  [
    "WebBloksComponentContext",
    "WebBloksStyle",
    "WebBloksTheme",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "accessibility_label",
        "badge_count",
        "className",
        "disabled",
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
        r = o("react-compiler-runtime").c(43),
        a,
        i,
        l,
        s,
        c,
        m,
        p,
        _,
        f,
        g;
      r[0] !== t
        ? ((a = t.accessibility_label),
          (i = t.badge_count),
          (l = t.className),
          (m = t.disabled),
          (s = t.icon),
          (p = t.role),
          (_ = t.tabIndex),
          (f = t.title),
          (g = t.trailing),
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
          (r[9] = f),
          (r[10] = g))
        : ((a = r[1]),
          (i = r[2]),
          (l = r[3]),
          (s = r[4]),
          (c = r[5]),
          (m = r[6]),
          (p = r[7]),
          (_ = r[8]),
          (f = r[9]),
          (g = r[10]));
      var h = m === void 0 ? !1 : m,
        y = p === void 0 ? "button" : p,
        C = _ === void 0 ? 0 : _,
        b = o("WebBloksComponentContext").useWebBloksContext(),
        v = b.objectSet;
      if (s == null && f == null) return null;
      var S = d.abstractButton,
        R = f == null,
        L = (n = f != null ? f : a) != null ? n : "",
        E = null;
      if (s != null) {
        var k = v.environment,
          I = k.AssetRenderer,
          T = k.logger;
        if (!I)
          T.mustfix(
            "Trying to render an asset, but AssetRenderer is not defined for %s",
            JSON.stringify(s),
          );
        else {
          var D;
          r[11] !== L || r[12] !== R
            ? ((D = {}),
              L && ((D.alt = ""), R || (D.className = d.marginRight4)),
              (r[11] = L),
              (r[12] = R),
              (r[13] = D))
            : (D = r[13]);
          var x;
          (r[14] !== I || r[15] !== s || r[16] !== D
            ? ((x = u.jsx(I, babelHelpers.extends({ src: s }, D))),
              (r[14] = I),
              (r[15] = s),
              (r[16] = D),
              (r[17] = x))
            : (x = r[17]),
            (E = x));
        }
      }
      var $;
      r[18] !== h || r[19] !== c
        ? (($ = function (t) {
            if (!(h || t.target !== t.currentTarget)) {
              if (c.onKeyDown != null) {
                c.onKeyDown(t);
                return;
              }
              (t.key === "Enter" || t.key === " ") &&
                (t.preventDefault(), t.currentTarget.click());
            }
          }),
          (r[18] = h),
          (r[19] = c),
          (r[20] = $))
        : ($ = r[20]);
      var P = $,
        N = h ? -1 : C,
        M = h || void 0,
        w = h ? void 0 : c.onClick,
        A = h ? void 0 : c.onClickCapture,
        F = h ? void 0 : c.onKeyUp,
        O = g === !0 ? d.TrailingButton : "",
        B = h ? d.disabled : null,
        W;
      r[21] !== l || r[22] !== O || r[23] !== B
        ? ((W = o("WebBloksStyle").classNames(O, S, l, B)),
          (r[21] = l),
          (r[22] = O),
          (r[23] = B),
          (r[24] = W))
        : (W = r[24]);
      var q;
      r[25] !== L || r[26] !== R
        ? ((q = R
            ? u.jsx("span", {
                className: d.abstractButton + "_accessible_elem",
                children: L,
              })
            : L),
          (r[25] = L),
          (r[26] = R),
          (r[27] = q))
        : (q = r[27]);
      var U;
      r[28] !== P ||
      r[29] !== E ||
      r[30] !== c ||
      r[31] !== y ||
      r[32] !== W ||
      r[33] !== q ||
      r[34] !== N ||
      r[35] !== M ||
      r[36] !== w ||
      r[37] !== A ||
      r[38] !== F
        ? ((U = u.jsxs(
            "div",
            babelHelpers.extends({ role: y, tabIndex: N }, c, {
              "aria-disabled": M,
              onClick: w,
              onClickCapture: A,
              onKeyUp: F,
              onKeyDown: P,
              className: W,
              children: [E, q],
            }),
          )),
          (r[28] = P),
          (r[29] = E),
          (r[30] = c),
          (r[31] = y),
          (r[32] = W),
          (r[33] = q),
          (r[34] = N),
          (r[35] = M),
          (r[36] = w),
          (r[37] = A),
          (r[38] = F),
          (r[39] = U))
        : (U = r[39]);
      var V = i != null && i > 0 ? i : void 0,
        H;
      return (
        r[40] !== U || r[41] !== V
          ? ((H = u.jsxs(u.Fragment, { children: [U, V] })),
            (r[40] = U),
            (r[41] = V),
            (r[42] = H))
          : (H = r[42]),
        H
      );
    }
    var d = o("WebBloksStyle").createStyles({
      disabled: {
        color: o("WebBloksTheme").WebBloksThemeVars["fds-gray-65"],
        cursor: "default",
      },
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
