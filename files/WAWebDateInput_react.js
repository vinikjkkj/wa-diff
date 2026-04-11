__d(
  "WAWebDateInput.react",
  [
    "WAWeb-moment",
    "WAWebCalendarMonthIcon.react",
    "WAWebUA",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "WDSText.react",
    "fbs",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useMemo,
      m = c.useRef,
      p = c.useState,
      _ = {
        container: {
          flexGrow: "x1iyjqo2",
          flexBasis: "x1r8uery",
          display: "x78zum5",
          $$css: !0,
        },
        eventBorder: {
          borderBottomWidth: "xso031l",
          borderBottomStyle: "x1q0q8m5",
          borderBottomColor: "x13um86b",
          $$css: !0,
        },
        aboutBorder: {
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "x1pyc6se",
          borderInlineEndColor: "x1mlb2bo",
          borderBottomColor: "x16pkwpw",
          borderInlineStartColor: "xqe4bef",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          paddingInlineStart: "x12w63v0",
          height: "x1vqgdyp",
          alignItems: "x6s0dn4",
          $$css: !0,
        },
        eventActiveBorder: { borderBottomColor: "x1rrvw3c", $$css: !0 },
        aboutActiveBorder: {
          borderTopColor: "xlze6vy",
          borderInlineEndColor: "x47fsot",
          borderBottomColor: "x1rrvw3c",
          borderInlineStartColor: "x18djku1",
          $$css: !0,
        },
        iconColor: { color: "xhslqc4", $$css: !0 },
        labeledContainer: {
          position: "x1n2onr6",
          marginTop: "x1xmf6yo",
          $$css: !0,
        },
      };
    function f(t) {
      var n = o("react-compiler-runtime").c(41),
        a = t.getDateBoundaries,
        i = t.label,
        l = t.name,
        s = t.onChange,
        c = t.theme,
        d = t.value,
        f = m(),
        g = p(!1),
        h = g[0],
        y = g[1],
        C;
      n[0] !== a ? ((C = a()), (n[0] = a), (n[1] = C)) : (C = n[1]);
      var b = C,
        v = b[0],
        S = b[1],
        R;
      n[2] !== s
        ? ((R = function (t) {
            var e = t.target.value;
            s(e);
          }),
          (n[2] = s),
          (n[3] = R))
        : (R = n[3]);
      var L = R,
        E;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = function () {
            var e;
            return (e = f.current) == null ? void 0 : e.showPicker();
          }),
          (n[4] = E))
        : (E = n[4]);
      var k = E,
        I;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = function () {
            return y(!1);
          }),
          (n[5] = I))
        : (I = n[5]);
      var T = I,
        D;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = function () {
            return y(!0);
          }),
          (n[6] = D))
        : (D = n[6]);
      var x = D,
        $ = c === "about",
        P = i != null && $,
        N = $ ? _.aboutBorder : _.eventBorder,
        M = !$ && o("WAWebUISpacing").uiMargin.bottom10,
        w = !$ && o("WAWebUISpacing").uiPadding.vert5,
        A = h && ($ ? _.aboutActiveBorder : _.eventActiveBorder),
        F = P && _.labeledContainer,
        O,
        B,
        W;
      if (
        n[7] !== h ||
        n[8] !== F ||
        n[9] !== N ||
        n[10] !== M ||
        n[11] !== w ||
        n[12] !== A ||
        n[13] !== d
      ) {
        var q = [_.container, N, M, w, A, F],
          U = !("showPicker" in HTMLInputElement.prototype);
        B = (U || o("WAWebUA").UA.isFirefox || o("WAWebUA").UA.isSafari) && h;
        var V;
        (n[17] !== d
          ? ((V = r("WAWeb-moment")(d).format("LL")), (n[17] = d), (n[18] = V))
          : (V = n[18]),
          (O = V),
          (W = (e || (e = r("stylex"))).props(q)),
          (n[7] = h),
          (n[8] = F),
          (n[9] = N),
          (n[10] = M),
          (n[11] = w),
          (n[12] = A),
          (n[13] = d),
          (n[14] = O),
          (n[15] = B),
          (n[16] = W));
      } else ((O = n[14]), (B = n[15]), (W = n[16]));
      var H;
      n[19] !== P || n[20] !== i
        ? ((H =
            P &&
            u.jsx("div", {
              className:
                "x10l6tqk x13vifvy x4brfc7 x1cb1t30 x1280gxy x181vq82 x1uc92m x1vjfegm x47corl",
              children: u.jsx(r("WDSText.react"), {
                type: "Body3",
                colorName: "contentDeemphasized",
                children: i,
              }),
            })),
          (n[19] = P),
          (n[20] = i),
          (n[21] = H))
        : (H = n[21]);
      var G;
      n[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = { className: "x1iyjqo2 x78zum5" }), (n[22] = G))
        : (G = n[22]);
      var z = h ? -1 : 0,
        j;
      n[23] !== O ||
      n[24] !== L ||
      n[25] !== h ||
      n[26] !== S ||
      n[27] !== v ||
      n[28] !== l ||
      n[29] !== d
        ? ((j = h
            ? u.jsx("input", {
                ref: f,
                className:
                  "xgcd1z6 x1heor9g x1iyjqo2 xrv4cvt x5yr21d x972fbf x10w94by x1qhh985 x14e42zd x1a2a7pz x16tdsg8 xolhmmf xk5dnk7 x1ti3vn2 x1jsrl1z",
                type: "date",
                name: l,
                value: d,
                onChange: L,
                min: v,
                max: S,
                autoFocus: !0,
                onBlur: T,
              })
            : u.jsx("span", {
                className: "x1iyjqo2 xrv4cvt x5yr21d",
                children: O,
              })),
          (n[23] = O),
          (n[24] = L),
          (n[25] = h),
          (n[26] = S),
          (n[27] = v),
          (n[28] = l),
          (n[29] = d),
          (n[30] = j))
        : (j = n[30]);
      var K;
      n[31] !== B
        ? ((K =
            !B &&
            u.jsx(r("WAWebUnstyledButton.react"), {
              onClick: k,
              xstyle: o("WAWebUISpacing").uiMargin.end5,
              "aria-label": r("fbs")._(/*BTDS*/ "Select date from calendar"),
              onBlur: T,
              children: u.jsx(
                o("WAWebCalendarMonthIcon.react").CalendarMonthIcon,
                { height: 16, width: 16, xstyle: _.iconColor },
              ),
            })),
          (n[31] = B),
          (n[32] = K))
        : (K = n[32]);
      var Q;
      n[33] !== z || n[34] !== j || n[35] !== K
        ? ((Q = u.jsxs(
            "span",
            babelHelpers.extends({}, G, {
              role: "textbox",
              tabIndex: z,
              onFocus: x,
              children: [j, K],
            }),
          )),
          (n[33] = z),
          (n[34] = j),
          (n[35] = K),
          (n[36] = Q))
        : (Q = n[36]);
      var X;
      return (
        n[37] !== W || n[38] !== H || n[39] !== Q
          ? ((X = u.jsxs(
              "section",
              babelHelpers.extends({}, W, { children: [H, Q] }),
            )),
            (n[37] = W),
            (n[38] = H),
            (n[39] = Q),
            (n[40] = X))
          : (X = n[40]),
        X
      );
    }
    l.DateInput = f;
  },
  226,
);
