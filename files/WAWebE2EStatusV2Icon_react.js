__d(
  "WAWebE2EStatusV2Icon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "e2e-status-v2";
    function m(t) {
      var n = o("react-compiler-runtime").c(30),
        a,
        i,
        l,
        u,
        m,
        p;
      n[0] !== t
        ? ((a = t.height),
          (l = t.iconXstyle),
          (i = t.name),
          (m = t.viewBox),
          (p = t.width),
          (u = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = u),
          (n[5] = m),
          (n[6] = p))
        : ((a = n[1]),
          (i = n[2]),
          (l = n[3]),
          (u = n[4]),
          (m = n[5]),
          (p = n[6]));
      var _;
      if (m) {
        var f = m,
          g = f.height,
          h = f.width,
          y = f.x,
          C = f.y,
          b = g === void 0 ? 0 : g,
          v = h === void 0 ? 0 : h,
          S = y === void 0 ? 0 : y,
          R = C === void 0 ? 0 : C,
          L;
        (n[7] !== b || n[8] !== v || n[9] !== S || n[10] !== R
          ? ((L = [S, R, v, b]),
            (n[7] = b),
            (n[8] = v),
            (n[9] = S),
            (n[10] = R),
            (n[11] = L))
          : (L = n[11]),
          (_ = L.join(" ")));
      }
      var E = 19,
        k = 20;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 0 20 19",
        D = E,
        x = k,
        $;
      n[12] !== l
        ? (($ = (s || (s = r("stylex")))(l)), (n[12] = l), (n[13] = $))
        : ($ = n[13]);
      var P = i != null ? i : d,
        N;
      n[14] !== P
        ? ((N = c.jsx("title", { children: P })), (n[14] = P), (n[15] = N))
        : (N = n[15]);
      var M, w, A, F;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = c.jsx("path", {
            d: "M18.3356 9.58203C18.4879 13.1649 16.317 16.5818 12.7624 17.8508C12.3682 17.9914 11.9707 18.101 11.5723 18.1803",
            stroke: "currentColor",
            strokeWidth: 1.4,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          })),
          (A = c.jsx("path", {
            d: "M3.61426 4.3993C4.52735 3.35472 5.71219 2.52242 7.11157 2.02259C9.63427 1.12218 12.3025 1.50037 14.408 2.82143",
            stroke: "currentColor",
            strokeWidth: 1.4,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          })),
          (F = c.jsx("path", {
            d: "M8.30363 18.1821C5.50086 17.624 3.05315 15.6498 2.02262 12.7625C1.35894 10.9029 1.3898 8.96457 1.98122 7.23047",
            stroke: "currentColor",
            strokeWidth: 1.4,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          })),
          (M = c.jsx("path", {
            d: "M15.2773 9.93722C15.2773 12.8863 12.8865 15.2768 9.93747 15.2768C6.98841 15.2768 4.59766 12.8863 4.59766 9.93722C4.59766 6.98816 6.98841 4.59766 9.93747 4.59766C10.9759 4.59766 11.9451 4.89405 12.7651 5.40687",
            stroke: "currentColor",
            strokeWidth: 1.4,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          })),
          (n[16] = M),
          (n[17] = w),
          (n[18] = A),
          (n[19] = F))
        : ((M = n[16]), (w = n[17]), (A = n[18]), (F = n[19]));
      var O;
      n[20] !== E || n[21] !== k || n[22] !== T || n[23] !== $ || n[24] !== N
        ? ((O = c.jsxs("svg", {
            viewBox: T,
            height: D,
            width: x,
            preserveAspectRatio: "xMidYMid meet",
            className: $,
            fill: "none",
            children: [N, w, A, F, M],
          })),
          (n[20] = E),
          (n[21] = k),
          (n[22] = T),
          (n[23] = $),
          (n[24] = N),
          (n[25] = O))
        : (O = n[25]);
      var B;
      return (
        n[26] !== u || n[27] !== I || n[28] !== O
          ? ((B = c.jsx(
              o("WAWebSvgComponentBase").BaseSvgSpan,
              babelHelpers.extends({ name: I }, u, { children: O }),
            )),
            (n[26] = u),
            (n[27] = I),
            (n[28] = O),
            (n[29] = B))
          : (B = n[29]),
        B
      );
    }
    l.E2EStatusV2Icon = m;
  },
  98,
);
