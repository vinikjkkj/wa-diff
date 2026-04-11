__d(
  "CometToast.react",
  [
    "fbt",
    "BaseToast.react",
    "CometPressable.react",
    "FBNucleusCrossFilled12Icon.react",
    "FDSCircleButton.react",
    "FDSText.react",
    "XPlatReactEnvironment",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = [
        "action",
        "href",
        "icon",
        "impressionLoggingRef",
        "message",
        "onDismiss",
        "target",
        "testid",
        "truncateText",
        "useVerticalLayout",
        "withoutCloseButton",
      ],
      u,
      c = u || (u = o("react")),
      d = u.useMemo,
      m = {
        pressable: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          width: "xh8yej3",
          $$css: !0,
        },
      };
    function p(t) {
      var n = o("react-compiler-runtime").c(37),
        a,
        i,
        l,
        u,
        d,
        p,
        f,
        g,
        h,
        y,
        C,
        b;
      n[0] !== t
        ? ((a = t.action),
          (i = t.href),
          (l = t.icon),
          (u = t.impressionLoggingRef),
          (d = t.message),
          (p = t.onDismiss),
          (C = t.target),
          (f = t.testid),
          (g = t.truncateText),
          (h = t.useVerticalLayout),
          (y = t.withoutCloseButton),
          (b = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = u),
          (n[5] = d),
          (n[6] = p),
          (n[7] = f),
          (n[8] = g),
          (n[9] = h),
          (n[10] = y),
          (n[11] = C),
          (n[12] = b))
        : ((a = n[1]),
          (i = n[2]),
          (l = n[3]),
          (u = n[4]),
          (d = n[5]),
          (p = n[6]),
          (f = n[7]),
          (g = n[8]),
          (h = n[9]),
          (y = n[10]),
          (C = n[11]),
          (b = n[12]));
      var v = f === void 0 ? "Toast" : f,
        S = g === void 0 ? !0 : g,
        R = h === void 0 ? !1 : h,
        L = y === void 0 ? !1 : y,
        E;
      n[13] !== i || n[14] !== C
        ? ((E = i != null ? { target: C, url: i } : void 0),
          (n[13] = i),
          (n[14] = C),
          (n[15] = E))
        : (E = n[15]);
      var k = E,
        I;
      n[16] !== a
        ? ((I =
            a != null
              ? {
                  label: a.label,
                  labelRenderer: _,
                  onPress: a.onPress,
                  testid: a.testid,
                }
              : void 0),
          (n[16] = a),
          (n[17] = I))
        : (I = n[17]);
      var T;
      n[18] !== p || n[19] !== L
        ? ((T =
            L !== !0 &&
            c.jsx(r("FDSCircleButton.react"), {
              "aria-label": s._(/*BTDS*/ "Close"),
              icon: r("FBNucleusCrossFilled12Icon.react"),
              onPress: p,
              size: 24,
              testid: void 0,
            })),
          (n[18] = p),
          (n[19] = L),
          (n[20] = T))
        : (T = n[20]);
      var D;
      n[21] !== k || n[22] !== b
        ? ((D =
            b.onPress != null || k != null
              ? function (e) {
                  return c.jsx(
                    r("CometPressable.react"),
                    babelHelpers.extends({}, b, {
                      expanding: !0,
                      linkProps: k,
                      xstyle: m.pressable,
                      children: e,
                    }),
                  );
                }
              : void 0),
          (n[21] = k),
          (n[22] = b),
          (n[23] = D))
        : (D = n[23]);
      var x;
      n[24] !== d || n[25] !== S
        ? ((x = function (t) {
            var e = t.toastMessageId;
            return c.jsx(r("FDSText.react"), {
              color: "primary",
              id: e,
              numberOfLines: S ? 4 : void 0,
              type: "body3",
              children: d,
            });
          }),
          (n[24] = d),
          (n[25] = S),
          (n[26] = x))
        : (x = n[26]);
      var $;
      return (
        n[27] !== l ||
        n[28] !== u ||
        n[29] !== p ||
        n[30] !== I ||
        n[31] !== T ||
        n[32] !== D ||
        n[33] !== x ||
        n[34] !== v ||
        n[35] !== R
          ? (($ = c.jsx(r("BaseToast.react"), {
              action: I,
              addOnStart: l,
              closeButton: T,
              linkWrapper: D,
              message: x,
              onDismiss: p,
              testid: void 0,
              toastRef: u,
              useVerticalLayout: R,
            })),
            (n[27] = l),
            (n[28] = u),
            (n[29] = p),
            (n[30] = I),
            (n[31] = T),
            (n[32] = D),
            (n[33] = x),
            (n[34] = v),
            (n[35] = R),
            (n[36] = $))
          : ($ = n[36]),
        $
      );
    }
    function _(e) {
      return c.jsx(r("FDSText.react"), {
        color: "blueLink",
        numberOfLines: 1,
        type: o("XPlatReactEnvironment").isWeb() ? "bodyLink3" : "body3",
        children: e,
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
