__d(
  "WAWebProductCatalogReportProductChoicePopup.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebModal.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = o("react-compiler-runtime").c(29),
        r,
        a;
      n[0] !== t
        ? ((a = t.ref),
          (r = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = r),
          (n[2] = a))
        : ((r = n[1]), (a = n[2]));
      var i = r,
        l = i.onPopupCancel,
        u = i.onReport,
        d;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = s._(/*BTDS*/ "Report this product?")), (n[3] = d))
        : (d = n[3]);
      var m = d,
        p;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = c.jsx(
            "div",
            {
              children: s._(
                /*BTDS*/ "We will review the product and if it does not meet our guidelines, it will be removed.",
              ),
            },
            "ReportProductChoicePopup-desc",
          )),
          (n[4] = p))
        : (p = n[4]);
      var _ = p,
        f;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s._(/*BTDS*/ "Report product")), (n[5] = f))
        : (f = n[5]);
      var g;
      n[6] !== u
        ? ((g = c.jsx(
            o("WAWebButton.react").Button,
            { testid: void 0, type: "secondary", onClick: u, children: f },
            "ReportProductChoicePopup-reportBtn",
          )),
          (n[6] = u),
          (n[7] = g))
        : (g = n[7]);
      var h = g,
        y;
      n[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = s._(/*BTDS*/ "Cancel")), (n[8] = y))
        : (y = n[8]);
      var C;
      n[9] !== l
        ? ((C = c.jsx(
            o("WAWebButton.react").Button,
            { type: "secondary", onClick: l, children: y },
            0,
          )),
          (n[9] = l),
          (n[10] = C))
        : (C = n[10]);
      var b = C,
        v;
      n[11] !== l
        ? ((v = { escape: l }), (n[11] = l), (n[12] = v))
        : (v = n[12]);
      var S = v,
        R,
        L;
      n[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = { className: "x78zum5 xdt5ytf" }),
          (L = { className: "xav9cv8" }),
          (n[13] = R),
          (n[14] = L))
        : ((R = n[13]), (L = n[14]));
      var E;
      n[15] !== h
        ? ((E = c.jsx("div", babelHelpers.extends({}, L, { children: h }))),
          (n[15] = h),
          (n[16] = E))
        : (E = n[16]);
      var k;
      n[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = { className: "xav9cv8" }), (n[17] = k))
        : (k = n[17]);
      var I;
      n[18] !== b
        ? ((I = c.jsx("div", babelHelpers.extends({}, k, { children: b }))),
          (n[18] = b),
          (n[19] = I))
        : (I = n[19]);
      var T;
      n[20] !== E || n[21] !== I
        ? ((T = c.jsxs(
            "div",
            babelHelpers.extends({}, R, { children: [E, I] }),
          )),
          (n[20] = E),
          (n[21] = I),
          (n[22] = T))
        : (T = n[22]);
      var D = T,
        x;
      n[23] !== D
        ? ((x = c.jsx(o("WAWebModal.react").Modal, {
            title: m,
            actions: D,
            children: _,
          })),
          (n[23] = D),
          (n[24] = x))
        : (x = n[24]);
      var $;
      return (
        n[25] !== S || n[26] !== a || n[27] !== x
          ? (($ = c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              ref: a,
              handlers: S,
              children: x,
            })),
            (n[25] = S),
            (n[26] = a),
            (n[27] = x),
            (n[28] = $))
          : ($ = n[28]),
        $
      );
    }
    l.default = d;
  },
  226,
);
