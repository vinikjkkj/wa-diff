__d(
  "WAWebTimeInput.react",
  [
    "WAWebStatusClockIcon.react",
    "WAWebUA",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "WDSText.react",
    "fbs",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebToggle",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useRef,
      d = {
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
    function m(t) {
      var n = o("react-compiler-runtime").c(29),
        a = t.label,
        i = t.name,
        l = t.onChange,
        s = t.theme,
        m = t.value,
        p = c(),
        _ = r("useWAWebToggle")(!1),
        f = _[0],
        g = _[1],
        h;
      n[0] !== l
        ? ((h = function (t) {
            var e = t.target.value;
            l(e);
          }),
          (n[0] = l),
          (n[1] = h))
        : (h = n[1]);
      var y = h,
        C;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = function () {
            var e;
            (e = p.current) == null || e.showPicker();
          }),
          (n[2] = C))
        : (C = n[2]);
      var b = C,
        v = s === "about",
        S = a != null && v,
        R = v ? d.aboutBorder : d.eventBorder,
        L = !v && o("WAWebUISpacing").uiMargin.bottom10,
        E = !v && o("WAWebUISpacing").uiPadding.vert5,
        k = f && (v ? d.aboutActiveBorder : d.eventActiveBorder),
        I = S && d.labeledContainer,
        T,
        D;
      if (n[3] !== R || n[4] !== L || n[5] !== E || n[6] !== k || n[7] !== I) {
        var x = [d.container, R, L, E, k, I];
        ((T = o("WAWebUA").UA.isChrome),
          (D = (e || (e = r("stylex"))).props(x)),
          (n[3] = R),
          (n[4] = L),
          (n[5] = E),
          (n[6] = k),
          (n[7] = I),
          (n[8] = T),
          (n[9] = D));
      } else ((T = n[8]), (D = n[9]));
      var $;
      n[10] !== S || n[11] !== a
        ? (($ =
            S &&
            u.jsx("div", {
              className:
                "x10l6tqk x13vifvy x4brfc7 x1cb1t30 x1280gxy x181vq82 x1uc92m x1vjfegm x47corl",
              children: u.jsx(r("WDSText.react"), {
                type: "Body3",
                colorName: "contentDeemphasized",
                children: a,
              }),
            })),
          (n[10] = S),
          (n[11] = a),
          (n[12] = $))
        : ($ = n[12]);
      var P;
      n[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = { className: "x1iyjqo2" }), (n[13] = P))
        : (P = n[13]);
      var N;
      n[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = {
            className:
              "xh8yej3 x5yr21d xrv4cvt xgcd1z6 x1heor9g x972fbf x10w94by x1qhh985 x14e42zd x1a2a7pz x16tdsg8 xolhmmf x18tydcn x1a7k29d x15fb772 xx784q3",
          }),
          (n[14] = N))
        : (N = n[14]);
      var M;
      n[15] !== y || n[16] !== i || n[17] !== g || n[18] !== m
        ? ((M = u.jsx(
            "span",
            babelHelpers.extends({}, P, {
              children: u.jsx(
                "input",
                babelHelpers.extends({ ref: p }, N, {
                  type: "time",
                  name: i,
                  value: m,
                  onChange: y,
                  onFocus: g,
                  onBlur: g,
                }),
              ),
            }),
          )),
          (n[15] = y),
          (n[16] = i),
          (n[17] = g),
          (n[18] = m),
          (n[19] = M))
        : (M = n[19]);
      var w, A;
      n[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = r("fbs")._(/*BTDS*/ "Select time")),
          (A = u.jsx(o("WAWebStatusClockIcon.react").StatusClockIcon, {
            height: 16,
            width: 16,
            xstyle: d.iconColor,
          })),
          (n[20] = w),
          (n[21] = A))
        : ((w = n[20]), (A = n[21]));
      var F;
      n[22] !== g
        ? ((F = u.jsx(r("WAWebUnstyledButton.react"), {
            onClick: b,
            disabled: !T,
            xstyle: o("WAWebUISpacing").uiMargin.end9,
            onFocus: g,
            onBlur: g,
            "aria-label": w,
            children: A,
          })),
          (n[22] = g),
          (n[23] = F))
        : (F = n[23]);
      var O;
      return (
        n[24] !== M || n[25] !== F || n[26] !== D || n[27] !== $
          ? ((O = u.jsxs(
              "section",
              babelHelpers.extends({}, D, { children: [$, M, F] }),
            )),
            (n[24] = M),
            (n[25] = F),
            (n[26] = D),
            (n[27] = $),
            (n[28] = O))
          : (O = n[28]),
        O
      );
    }
    l.TimeInput = m;
  },
  226,
);
