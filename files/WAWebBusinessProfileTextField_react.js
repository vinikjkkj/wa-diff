__d(
  "WAWebBusinessProfileTextField.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WDSButton.react",
    "WDSText.react",
    "WDSTextField.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        editButton: {
          paddingTop: "x889kno",
          paddingBottom: "x1a8lsjc",
          paddingInlineStart: "xb0esv5",
          paddingInlineEnd: "xyo0t3i",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        fieldContainer: {
          alignSelf: "xkh2ocl",
          paddingBottom: "x12xbjc7",
          paddingInlineEnd: "xvtqlqk",
          paddingInlineStart: "x12w63v0",
          paddingTop: "x16ovd2e",
          $$css: !0,
        },
        iconContainer: {
          color: "xhslqc4",
          height: "x1nqnulx",
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          width: "x1xvr5cs",
          $$css: !0,
        },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(46),
        n = e.EndIcon,
        a = e.editable,
        i = e.error,
        l = e.errorText,
        d = e.fieldName,
        m = e.icon,
        p = e.label,
        _ = e.locked,
        f = e.onChange,
        g = e.onClick,
        h = e.onEditClick,
        y = e.onEndIconClick,
        C = e.onLockedClick,
        b = e.readOnly,
        v = e.ref,
        S = e.value,
        R = e.xstyle,
        L = a === void 0 ? !0 : a,
        E;
      t[0] !== d || t[1] !== f
        ? ((E = function (t) {
            f != null && d != null && f(d, t);
          }),
          (t[0] = d),
          (t[1] = f),
          (t[2] = E))
        : (E = t[2]);
      var k = E,
        I;
      t[3] !== _ || t[4] !== g || t[5] !== C
        ? ((I = function () {
            if (_ === !0) {
              C != null && C();
              return;
            }
            g != null && g();
          }),
          (t[3] = _),
          (t[4] = g),
          (t[5] = C),
          (t[6] = I))
        : (I = t[6]);
      var T = I;
      if (L) {
        var D;
        t[7] !== R
          ? ((D = [c.fieldContainer, R]), (t[7] = R), (t[8] = D))
          : (D = t[8]);
        var x;
        t[9] !== m
          ? ((x = u.jsx(o("WAWebFlex.react").FlexItem, {
              align: "center",
              justify: "center",
              xstyle: c.iconContainer,
              children: m,
            })),
            (t[9] = m),
            (t[10] = x))
          : (x = t[10]);
        var $;
        t[11] === Symbol.for("react.memo_cache_sentinel")
          ? (($ = { className: "x98rzlu" }), (t[11] = $))
          : ($ = t[11]);
        var P = _ === !0 ? !0 : b,
          N;
        t[12] !== n ||
        t[13] !== i ||
        t[14] !== l ||
        t[15] !== k ||
        t[16] !== T ||
        t[17] !== p ||
        t[18] !== y ||
        t[19] !== P ||
        t[20] !== S
          ? ((N = u.jsx(
              "div",
              babelHelpers.extends({}, $, {
                children: u.jsx(r("WDSTextField.react"), {
                  EndIcon: n,
                  label: p,
                  value: S,
                  onValueChange: k,
                  onFocus: T,
                  onEndIconClick: y,
                  error: i,
                  errorText: l,
                  readOnly: P,
                }),
              }),
            )),
            (t[12] = n),
            (t[13] = i),
            (t[14] = l),
            (t[15] = k),
            (t[16] = T),
            (t[17] = p),
            (t[18] = y),
            (t[19] = P),
            (t[20] = S),
            (t[21] = N))
          : (N = t[21]);
        var M;
        return (
          t[22] !== v || t[23] !== D || t[24] !== x || t[25] !== N
            ? ((M = u.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "center",
                gap: 12,
                ref: v,
                xstyle: D,
                children: [x, N],
              })),
              (t[22] = v),
              (t[23] = D),
              (t[24] = x),
              (t[25] = N),
              (t[26] = M))
            : (M = t[26]),
          M
        );
      }
      var w;
      t[27] !== R
        ? ((w = [c.fieldContainer, R]), (t[27] = R), (t[28] = w))
        : (w = t[28]);
      var A;
      t[29] !== m
        ? ((A = u.jsx(o("WAWebFlex.react").FlexItem, {
            align: "center",
            justify: "center",
            xstyle: c.iconContainer,
            children: m,
          })),
          (t[29] = m),
          (t[30] = A))
        : (A = t[30]);
      var F;
      t[31] !== p
        ? ((F = u.jsx(r("WDSText.react"), {
            type: "Body3",
            colorName: "contentDeemphasized",
            children: p,
          })),
          (t[31] = p),
          (t[32] = F))
        : (F = t[32]);
      var O;
      t[33] !== S
        ? ((O = u.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDefault",
            children: S,
          })),
          (t[33] = S),
          (t[34] = O))
        : (O = t[34]);
      var B;
      t[35] !== F || t[36] !== O
        ? ((B = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "start",
            grow: 1,
            children: [F, O],
          })),
          (t[35] = F),
          (t[36] = O),
          (t[37] = B))
        : (B = t[37]);
      var W;
      t[38] !== h
        ? ((W =
            h != null &&
            u.jsx(r("WDSButton.react"), {
              variant: "tonal",
              label: s._(/*BTDS*/ "Edit"),
              xstyle: c.editButton,
              onPress: h,
            })),
          (t[38] = h),
          (t[39] = W))
        : (W = t[39]);
      var q;
      return (
        t[40] !== v || t[41] !== w || t[42] !== A || t[43] !== B || t[44] !== W
          ? ((q = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              gap: 12,
              ref: v,
              xstyle: w,
              children: [A, B, W],
            })),
            (t[40] = v),
            (t[41] = w),
            (t[42] = A),
            (t[43] = B),
            (t[44] = W),
            (t[45] = q))
          : (q = t[45]),
        q
      );
    }
    l.default = d;
  },
  226,
);
