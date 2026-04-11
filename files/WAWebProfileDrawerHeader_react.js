__d(
  "WAWebProfileDrawerHeader.react",
  [
    "WAWebBizGatingUtils",
    "WAWebBusinessProfileLabels",
    "WAWebCloseRefreshedIcon.react",
    "WAWebDrawerManager",
    "WDSButton.react",
    "WDSIconIcVisibility.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        title: { flexGrow: "x1iyjqo2", $$css: !0 },
        buttonPreview: { width: "x2pejg6", $$css: !0 },
        buttonSave: { width: "x2pejg6", $$css: !0 },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(22),
        n = e.hasChanges,
        a = e.isSaving,
        i = e.onClose,
        l = e.onSave,
        c = e.saveDisabled,
        d = e.title,
        m = n === void 0 ? !1 : n,
        p = a === void 0 ? !1 : a,
        _ = c === void 0 ? !1 : c,
        f;
      t[0] !== i
        ? ((f = function () {
            i ? i() : o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
          }),
          (t[0] = i),
          (t[1] = f))
        : (f = t[1]);
      var g = f,
        h;
      t[2] !== l
        ? ((h = function () {
            l && l();
          }),
          (t[2] = l),
          (t[3] = h))
        : (h = t[3]);
      var y = h,
        C;
      t[4] !== d
        ? ((C =
            d != null
              ? d
              : o("WAWebBusinessProfileLabels").getProfileTitleLabel()),
          (t[4] = d),
          (t[5] = C))
        : (C = t[5]);
      var b = C,
        v;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = o("WAWebBusinessProfileLabels").getPreviewButtonLabel()),
          (t[6] = v))
        : (v = t[6]);
      var S = v,
        R;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = o("WAWebBusinessProfileLabels").getSaveButtonLabel()),
          (t[7] = R))
        : (R = t[7]);
      var L = R,
        E;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = o("WAWebBizGatingUtils").businessProfilePreviewEnabled()),
          (t[8] = E))
        : (E = t[8]);
      var k = E,
        I;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = {
            className:
              "x6s0dn4 xw6alqk x1o4lnc x1t7ytsu xpilrb4 x9f619 x78zum5 x1okw0bk x8a3fw1 x1aj3ljl x1peatla x1iw51ew xde1mab xh8yej3",
          }),
          (t[9] = I))
        : (I = t[9]);
      var T;
      t[10] !== g
        ? ((T = s.jsx(r("WDSButton.react"), {
            size: "medium",
            variant: "borderless",
            Icon: o("WAWebCloseRefreshedIcon.react").CloseRefreshedIcon,
            onPress: g,
          })),
          (t[10] = g),
          (t[11] = T))
        : (T = t[11]);
      var D;
      t[12] !== b
        ? ((D = s.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDefault",
            xstyle: u.title,
            children: b,
          })),
          (t[12] = b),
          (t[13] = D))
        : (D = t[13]);
      var x;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((x =
            k &&
            s.jsx(r("WDSButton.react"), {
              Icon: r("WDSIconIcVisibility.react"),
              label: S,
              variant: "outline",
              xstyle: u.buttonPreview,
            })),
          (t[14] = x))
        : (x = t[14]);
      var $ = !m || p || _,
        P;
      t[15] !== y || t[16] !== $
        ? ((P = s.jsx(r("WDSButton.react"), {
            label: L,
            xstyle: u.buttonSave,
            onPress: y,
            disabled: $,
          })),
          (t[15] = y),
          (t[16] = $),
          (t[17] = P))
        : (P = t[17]);
      var N;
      return (
        t[18] !== T || t[19] !== D || t[20] !== P
          ? ((N = s.jsxs(
              "header",
              babelHelpers.extends({}, I, {
                "data-testid": void 0,
                children: [T, D, x, P],
              }),
            )),
            (t[18] = T),
            (t[19] = D),
            (t[20] = P),
            (t[21] = N))
          : (N = t[21]),
        N
      );
    }
    l.default = c;
  },
  98,
);
