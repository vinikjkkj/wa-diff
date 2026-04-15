__d(
  "WAWebMediaEditorRotateRightIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "media-editor-rotate-right";
    function m(t) {
      var n = o("react-compiler-runtime").c(28),
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
      var E = 24,
        k = 24;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 0 24 24",
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
      var M, w;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = c.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M17.6458 8.1443C17.6458 7.7438 17.9695 7.4185 18.3695 7.4185L18.9839 7.41915C18.9674 5.57318 18.5296 4.24139 17.657 3.36586C16.7674 2.4733 15.4053 2.03425 13.5093 2.03425H13.3865C13.0543 2.03425 12.7855 1.76409 12.7855 1.43161V0.815805C12.7855 0.415302 13.1092 0.090004 13.5093 0.090004C15.9134 0.090004 17.7714 0.730551 19.028 1.99134C20.2655 3.23304 20.9034 5.05999 20.9224 7.41919L21.8862 7.4185C22.0556 7.4185 22.2196 7.4781 22.3497 7.58684C22.6566 7.84348 22.698 8.30096 22.4423 8.60881L20.684 10.7259C20.656 10.7596 20.625 10.7907 20.5913 10.8189C20.2842 11.0757 19.8276 11.034 19.5718 10.7259L17.8134 8.60881C17.7051 8.47836 17.6458 8.31399 17.6458 8.1443Z",
            fill: "currentColor",
          })),
          (w = c.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M14.6413 8.89517L14.6413 17.2464C14.6413 18.6072 13.5367 19.71 12.1743 19.71H3.85698C2.49465 19.71 1.38998 18.6072 1.38998 17.2464V8.89517C1.38998 7.53441 2.49465 6.43158 3.85698 6.43158H12.1743C13.5367 6.43158 14.6413 7.53442 14.6413 8.89517ZM12.1743 17.764C12.4609 17.764 12.6929 17.5321 12.6929 17.2464V8.89517C12.6929 8.60945 12.4609 8.37755 12.1743 8.37755H3.85698C3.57045 8.37755 3.33845 8.60945 3.33845 8.89517V17.2464C3.33845 17.5321 3.57045 17.764 3.85698 17.764H12.1743Z",
            fill: "currentColor",
          })),
          (n[16] = M),
          (n[17] = w))
        : ((M = n[16]), (w = n[17]));
      var A;
      n[18] !== E || n[19] !== k || n[20] !== T || n[21] !== $ || n[22] !== N
        ? ((A = c.jsxs("svg", {
            viewBox: T,
            height: D,
            width: x,
            preserveAspectRatio: "xMidYMid meet",
            className: $,
            fill: "none",
            children: [N, M, w],
          })),
          (n[18] = E),
          (n[19] = k),
          (n[20] = T),
          (n[21] = $),
          (n[22] = N),
          (n[23] = A))
        : (A = n[23]);
      var F;
      return (
        n[24] !== u || n[25] !== I || n[26] !== A
          ? ((F = c.jsx(
              o("WAWebSvgComponentBase").BaseSvgSpan,
              babelHelpers.extends({ name: I }, u, { children: A }),
            )),
            (n[24] = u),
            (n[25] = I),
            (n[26] = A),
            (n[27] = F))
          : (F = n[27]),
        F
      );
    }
    l.MediaEditorRotateRightIcon = m;
  },
  98,
);
