__d(
  "WAWebCustomerManagerListCell.react",
  [
    "fbt",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebDropdownV2.react",
    "WAWebLabelCollection",
    "WAWebLabelGetters",
    "WAWebListsGatingUtils",
    "WDSIconIcLabelFilled.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useMemo,
      p = d.useRef,
      _ = {
        dotBase: {
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        cellDot: {
          width: "xsmyaan",
          height: "x1kpxq89",
          marginInlineEnd: "xqf2s3x",
          $$css: !0,
        },
        tooltipDot: {
          width: "xsmyaan",
          height: "x1kpxq89",
          marginInlineEnd: "xqf2s3x",
          $$css: !0,
        },
        moreCount: {
          flexShrink: "x2lah0s",
          marginInlineStart: "x1wbi8v6",
          $$css: !0,
        },
        labelIcon: {
          flexShrink: "x2lah0s",
          marginInlineEnd: "xqf2s3x",
          display: "x78zum5",
          $$css: !0,
        },
        tooltipLabelIcon: {
          flexShrink: "x2lah0s",
          marginInlineEnd: "xqf2s3x",
          display: "x78zum5",
          $$css: !0,
        },
      },
      f = {
        bgColor: function (t) {
          return [
            { backgroundColor: t != null ? "xl8spv7" : t, $$css: !0 },
            { "--x-backgroundColor": t != null ? t : void 0 },
          ];
        },
        fgColor: function (t) {
          return [
            { color: t != null ? "x14rh7hd" : t, $$css: !0 },
            { "--x-color": t != null ? t : void 0 },
          ];
        },
      };
    function g(t) {
      var n,
        a,
        i = o("react-compiler-runtime").c(56),
        l = t.chatJid,
        u = p(null),
        d;
      i[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = o("WAWebListsGatingUtils").isListsEnabled()), (i[0] = d))
        : (d = i[0]);
      var m = d,
        g;
      i[1] !== l
        ? ((g = o("WAWebContactCollection").ContactCollection.get(l)),
          (i[1] = l),
          (i[2] = g))
        : (g = i[2]);
      var y = g,
        C =
          (n =
            (a = o("useWAWebContactValues").useOptionalContactValues(
              y == null ? void 0 : y.id,
              [o("WAWebContactGetters").getLabels],
            )) == null
              ? void 0
              : a[0]) != null
            ? n
            : null,
        b;
      i[3] !== C
        ? ((b = C != null ? C : []), (i[3] = C), (i[4] = b))
        : (b = i[4]);
      var v;
      i[5] !== b
        ? ((v = b.map(h).filter(Boolean)), (i[5] = b), (i[6] = v))
        : (v = i[6]);
      var S = v;
      if (S.length === 0) {
        var R;
        return (
          i[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((R = c.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                maxLines: 1,
                children: "\u2014",
              })),
              (i[7] = R))
            : (R = i[7]),
          R
        );
      }
      var L = S[0],
        E,
        k,
        I,
        T,
        D,
        x,
        $,
        P,
        N,
        M,
        w;
      if (i[8] !== L || i[9] !== S) {
        x = Symbol.for("react.early_return_sentinel");
        e: {
          var A,
            F =
              (A = o("WAWebLabelGetters").getHexColor(L)) != null
                ? A
                : "transparent";
          if (S.length === 1) {
            var O;
            i[21] === Symbol.for("react.memo_cache_sentinel")
              ? ((O = {
                  className:
                    "x78zum5 x6s0dn4 xeuugli x193iq5w x6ikm8r x10wlt62",
                }),
                (i[21] = O))
              : (O = i[21]);
            var B = m
                ? c.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      (e || (e = r("stylex"))).props(
                        _.dotBase,
                        _.cellDot,
                        f.bgColor(F),
                      ),
                    ),
                  )
                : c.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      (e || (e = r("stylex"))).props(_.labelIcon, f.fgColor(F)),
                      {
                        children: c.jsx(r("WDSIconIcLabelFilled.react"), {
                          width: 20,
                          height: 20,
                        }),
                      },
                    ),
                  ),
              W;
            i[22] === Symbol.for("react.memo_cache_sentinel")
              ? ((W = {
                  className: "xeuugli x6ikm8r x10wlt62 xlyipyv xuxw1ft xs83m0k",
                }),
                (i[22] = W))
              : (W = i[22]);
            var q;
            i[23] !== L.name
              ? ((q = c.jsx(
                  "span",
                  babelHelpers.extends({}, W, {
                    children: c.jsx(r("WDSText.react"), {
                      type: "Body2",
                      colorName: "contentDefault",
                      maxLines: 1,
                      children: L.name,
                    }),
                  }),
                )),
                (i[23] = L.name),
                (i[24] = q))
              : (q = i[24]);
            var U;
            (i[25] !== B || i[26] !== q
              ? ((U = c.jsxs(
                  "div",
                  babelHelpers.extends({}, O, { children: [B, q] }),
                )),
                (i[25] = B),
                (i[26] = q),
                (i[27] = U))
              : (U = i[27]),
              (x = U));
            break e;
          }
          var V = S.slice(1),
            H = V.length;
          i[28] === Symbol.for("react.memo_cache_sentinel")
            ? ((T = { className: "x6ikm8r x10wlt62 xh8yej3" }), (i[28] = T))
            : (T = i[28]);
          var G;
          i[29] === Symbol.for("react.memo_cache_sentinel")
            ? ((G = {
                className: "x78zum5 x6s0dn4 xeuugli x193iq5w x6ikm8r x10wlt62",
              }),
              (i[29] = G))
            : (G = i[29]);
          var z = m
              ? c.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(
                      _.dotBase,
                      _.cellDot,
                      f.bgColor(F),
                    ),
                  ),
                )
              : c.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(_.labelIcon, f.fgColor(F)),
                    {
                      children: c.jsx(r("WDSIconIcLabelFilled.react"), {
                        width: 20,
                        height: 20,
                      }),
                    },
                  ),
                ),
            j;
          i[30] === Symbol.for("react.memo_cache_sentinel")
            ? ((j = {
                className: "xeuugli x6ikm8r x10wlt62 xlyipyv xuxw1ft xs83m0k",
              }),
              (i[30] = j))
            : (j = i[30]);
          var K;
          i[31] !== L.name
            ? ((K = c.jsx(
                "span",
                babelHelpers.extends({}, j, {
                  children: c.jsx(r("WDSText.react"), {
                    type: "Body2",
                    colorName: "contentDefault",
                    maxLines: 1,
                    children: L.name,
                  }),
                }),
              )),
              (i[31] = L.name),
              (i[32] = K))
            : (K = i[32]);
          var Q = s._(/*BTDS*/ "+{count}", [s._param("count", H)]),
            X;
          (i[33] !== Q
            ? ((X = c.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                xstyle: _.moreCount,
                children: Q,
              })),
              (i[33] = Q),
              (i[34] = X))
            : (X = i[34]),
            i[35] !== z || i[36] !== K || i[37] !== X
              ? ((D = c.jsxs(
                  "div",
                  babelHelpers.extends({ ref: u }, G, { children: [z, K, X] }),
                )),
                (i[35] = z),
                (i[36] = K),
                (i[37] = X),
                (i[38] = D))
              : (D = i[38]),
            (E = o("WAWebDropdownV2.react").DropdownV2),
            (N = u),
            (M = o("WAWebDropdownV2.react").PopoverPosition.Bottom),
            (w = o("WAWebDropdownV2.react").PopoverAlignment.Start),
            (k = "hover"),
            (I = !1),
            i[39] === Symbol.for("react.memo_cache_sentinel")
              ? (($ = {
                  className:
                    "x78zum5 xdt5ytf x129bwdz x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x1yc453h",
                }),
                (i[39] = $))
              : ($ = i[39]));
          var Y;
          (i[40] === Symbol.for("react.memo_cache_sentinel")
            ? ((Y = function (n) {
                var t,
                  a =
                    (t = o("WAWebLabelGetters").getHexColor(n)) != null
                      ? t
                      : "transparent";
                return c.jsxs(
                  "div",
                  {
                    className: "x78zum5 x6s0dn4",
                    children: [
                      m
                        ? c.jsx(
                            "div",
                            babelHelpers.extends(
                              {},
                              (e || (e = r("stylex"))).props(
                                _.dotBase,
                                _.tooltipDot,
                                f.bgColor(a),
                              ),
                            ),
                          )
                        : c.jsx(
                            "div",
                            babelHelpers.extends(
                              {},
                              (e || (e = r("stylex"))).props(
                                _.tooltipLabelIcon,
                                f.fgColor(a),
                              ),
                              {
                                children: c.jsx(
                                  r("WDSIconIcLabelFilled.react"),
                                  { width: 16, height: 16 },
                                ),
                              },
                            ),
                          ),
                      c.jsx(r("WDSText.react"), {
                        type: "Body3",
                        colorName: "contentDefault",
                        children: n.name,
                      }),
                    ],
                  },
                  n.id,
                );
              }),
              (i[40] = Y))
            : (Y = i[40]),
            (P = V.map(Y)));
        }
        ((i[8] = L),
          (i[9] = S),
          (i[10] = E),
          (i[11] = k),
          (i[12] = I),
          (i[13] = T),
          (i[14] = D),
          (i[15] = x),
          (i[16] = $),
          (i[17] = P),
          (i[18] = N),
          (i[19] = M),
          (i[20] = w));
      } else
        ((E = i[10]),
          (k = i[11]),
          (I = i[12]),
          (T = i[13]),
          (D = i[14]),
          (x = i[15]),
          ($ = i[16]),
          (P = i[17]),
          (N = i[18]),
          (M = i[19]),
          (w = i[20]));
      if (x !== Symbol.for("react.early_return_sentinel")) return x;
      var J;
      i[41] !== $ || i[42] !== P
        ? ((J = c.jsx("div", babelHelpers.extends({}, $, { children: P }))),
          (i[41] = $),
          (i[42] = P),
          (i[43] = J))
        : (J = i[43]);
      var Z;
      i[44] !== E ||
      i[45] !== k ||
      i[46] !== I ||
      i[47] !== J ||
      i[48] !== N ||
      i[49] !== M ||
      i[50] !== w
        ? ((Z = c.jsx(E, {
            target: N,
            position: M,
            alignment: w,
            initHandling: k,
            dismissable: I,
            children: J,
          })),
          (i[44] = E),
          (i[45] = k),
          (i[46] = I),
          (i[47] = J),
          (i[48] = N),
          (i[49] = M),
          (i[50] = w),
          (i[51] = Z))
        : (Z = i[51]);
      var ee;
      return (
        i[52] !== T || i[53] !== D || i[54] !== Z
          ? ((ee = c.jsxs(
              "div",
              babelHelpers.extends({}, T, { children: [D, Z] }),
            )),
            (i[52] = T),
            (i[53] = D),
            (i[54] = Z),
            (i[55] = ee))
          : (ee = i[55]),
        ee
      );
    }
    function h(e) {
      return o("WAWebLabelCollection").LabelCollection.get(e);
    }
    l.default = g;
  },
  226,
);
