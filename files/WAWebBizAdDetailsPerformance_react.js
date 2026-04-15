__d(
  "WAWebBizAdDetailsPerformance.react",
  [
    "fbt",
    "WAWebBizAdCreationCurrencyUtils",
    "WAWebFlex.react",
    "WAWebL10N",
    "WDSIconIcGroup.react",
    "WDSIconIcPayments.react",
    "WDSIconIcTouchApp.react",
    "WDSIconWdsIcChat.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useMemo,
      d = {
        container: {
          paddingInlineStart: "x1iw51ew",
          paddingInlineEnd: "xde1mab",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        metricRow: {
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          width: "xh8yej3",
          boxSizing: "x9f619",
          height: "xnnlda6",
          $$css: !0,
        },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.icon,
        a = e.label,
        i = e.value,
        l;
      t[0] !== a
        ? ((l = u.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDefault",
            children: a,
          })),
          (t[0] = a),
          (t[1] = l))
        : (l = t[1]);
      var s;
      t[2] !== n || t[3] !== l
        ? ((s = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            gap: 12,
            children: [n, l],
          })),
          (t[2] = n),
          (t[3] = l),
          (t[4] = s))
        : (s = t[4]);
      var c;
      t[5] !== i
        ? ((c = u.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDefault",
            children: i,
          })),
          (t[5] = i),
          (t[6] = c))
        : (c = t[6]);
      var m;
      return (
        t[7] !== s || t[8] !== c
          ? ((m = u.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: d.metricRow,
              align: "center",
              justify: "all",
              children: [s, c],
            })),
            (t[7] = s),
            (t[8] = c),
            (t[9] = m))
          : (m = t[9]),
        m
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(32),
        n = e.item,
        a = n.adClicks,
        i = n.conversations,
        l = n.currency,
        c = n.reach,
        m = n.spend,
        p;
      e: {
        if (a === 0 || m == null) {
          p = null;
          break e;
        }
        var f = m / a,
          g;
        (t[0] !== f || t[1] !== l
          ? ((g = r("WAWebBizAdCreationCurrencyUtils").formatCurrency(
              Math.round(f),
              l,
              { withDecimals: !0, withSymbol: !0 },
            )),
            (t[0] = f),
            (t[1] = l),
            (t[2] = g))
          : (g = t[2]),
          (p = g));
      }
      var h = p,
        y,
        C;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = u.jsx(r("WDSIconIcGroup.react"), {
            colorName: "contentDeemphasized",
          })),
          (C = s._(/*BTDS*/ "Reach")),
          (t[3] = y),
          (t[4] = C))
        : ((y = t[3]), (C = t[4]));
      var b;
      t[5] !== c
        ? ((b = r("WAWebL10N").d(c)), (t[5] = c), (t[6] = b))
        : (b = t[6]);
      var v;
      t[7] !== b
        ? ((v = { icon: y, label: C, value: b }), (t[7] = b), (t[8] = v))
        : (v = t[8]);
      var S, R;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = u.jsx(r("WDSIconIcTouchApp.react"), {
            colorName: "contentDeemphasized",
          })),
          (R = s._(/*BTDS*/ "Ad clicks")),
          (t[9] = S),
          (t[10] = R))
        : ((S = t[9]), (R = t[10]));
      var L;
      t[11] !== a
        ? ((L = r("WAWebL10N").d(a)), (t[11] = a), (t[12] = L))
        : (L = t[12]);
      var E;
      t[13] !== L
        ? ((E = { icon: S, label: R, value: L }), (t[13] = L), (t[14] = E))
        : (E = t[14]);
      var k, I;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = u.jsx(r("WDSIconIcPayments.react"), {
            colorName: "contentDeemphasized",
          })),
          (I = s._(/*BTDS*/ "Cost per link click")),
          (t[15] = k),
          (t[16] = I))
        : ((k = t[15]), (I = t[16]));
      var T = h != null ? h : "--",
        D;
      t[17] !== T
        ? ((D = { icon: k, label: I, value: T }), (t[17] = T), (t[18] = D))
        : (D = t[18]);
      var x, $;
      t[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = u.jsx(r("WDSIconWdsIcChat.react"), {
            colorName: "contentDeemphasized",
          })),
          ($ = s._(/*BTDS*/ "Conversations")),
          (t[19] = x),
          (t[20] = $))
        : ((x = t[19]), ($ = t[20]));
      var P;
      t[21] !== i
        ? ((P = r("WAWebL10N").d(i)), (t[21] = i), (t[22] = P))
        : (P = t[22]);
      var N;
      t[23] !== P
        ? ((N = { icon: x, label: $, value: P }), (t[23] = P), (t[24] = N))
        : (N = t[24]);
      var M;
      t[25] !== D || t[26] !== N || t[27] !== v || t[28] !== E
        ? ((M = [v, E, D, N]),
          (t[25] = D),
          (t[26] = N),
          (t[27] = v),
          (t[28] = E),
          (t[29] = M))
        : (M = t[29]);
      var w = M,
        A;
      return (
        t[30] !== w
          ? ((A = u.jsx(o("WAWebFlex.react").FlexColumn, {
              xstyle: d.container,
              children: w.map(_),
            })),
            (t[30] = w),
            (t[31] = A))
          : (A = t[31]),
        A
      );
    }
    function _(e, t) {
      return u.jsx(m, { icon: e.icon, label: e.label, value: e.value }, t);
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
