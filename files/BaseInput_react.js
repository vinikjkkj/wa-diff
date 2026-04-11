__d(
  "BaseInput.react",
  [
    "CometContainerPressableContext",
    "Locale",
    "react",
    "react-compiler-runtime",
    "stylex",
    "testID",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "ref",
        "xstyle",
        "onChange",
        "onClick",
        "onValueChange",
        "testid",
        "type",
      ],
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useContext,
      p = d.useMemo,
      _ = {
        root: {
          WebkitTapHighlightColor: "x1i10hfl",
          boxSizing: "x9f619",
          touchAction: "xggy1nq",
          ":-webkit-autofill_-webkit-background-clip": "xtpw4lu",
          ":-webkit-autofill_-webkit-text-fill-color": "x1tutvks",
          ":-webkit-autofill_transition": "x1s3xk63",
          ":disabled_cursor": "x1s07b3s",
          $$css: !0,
        },
        zIndex: { zIndex: "x1vjfegm", $$css: !0 },
      },
      f = o("Locale").isRTL();
    function g(t) {
      var n = o("react-compiler-runtime").c(31),
        a,
        i,
        l,
        u,
        d,
        p,
        g,
        h;
      n[0] !== t
        ? ((d = t.ref),
          (h = t.xstyle),
          (a = t.onChange),
          (i = t.onClick),
          (l = t.onValueChange),
          (g = t.testid),
          (p = t.type),
          (u = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = u),
          (n[5] = d),
          (n[6] = p),
          (n[7] = g),
          (n[8] = h))
        : ((a = n[1]),
          (i = n[2]),
          (l = n[3]),
          (u = n[4]),
          (d = n[5]),
          (p = n[6]),
          (g = n[7]),
          (h = n[8]));
      var y = p === void 0 ? "text" : p,
        C;
      e: switch (y) {
        case "switch": {
          C = "checkbox";
          break e;
        }
        default:
          C = y;
      }
      var b = C,
        v = b === "checkbox" || b === "radio",
        S = b === "textarea",
        R = m(r("CometContainerPressableContext")) != null,
        L = S ? "textarea" : "input",
        E;
      n[9] !== R || n[10] !== h
        ? ((E = (s || (s = r("stylex"))).props(_.root, h, R && _.zIndex)),
          (n[9] = R),
          (n[10] = h),
          (n[11] = E))
        : (E = n[11]);
      var k;
      n[12] !== g
        ? ((k = r("testID")(g)), (n[12] = g), (n[13] = k))
        : (k = n[13]);
      var I;
      n[14] !== v || n[15] !== a || n[16] !== l
        ? ((I = function (t) {
            (v || l == null || l(t.currentTarget.value, t), a == null || a(t));
          }),
          (n[14] = v),
          (n[15] = a),
          (n[16] = l),
          (n[17] = I))
        : (I = n[17]);
      var T;
      n[18] !== v || n[19] !== i || n[20] !== l
        ? ((T = function (t) {
            if (v) {
              var e = t.currentTarget;
              e instanceof HTMLInputElement && (l == null || l(e.checked, t));
            }
            i == null || i(t);
          }),
          (n[18] = v),
          (n[19] = i),
          (n[20] = l),
          (n[21] = T))
        : (T = n[21]);
      var D = S ? void 0 : b,
        x;
      return (
        n[22] !== L ||
        n[23] !== u ||
        n[24] !== d ||
        n[25] !== E ||
        n[26] !== k ||
        n[27] !== I ||
        n[28] !== T ||
        n[29] !== D
          ? ((x = c.jsx(
              L,
              babelHelpers.extends({}, E, { dir: f ? "rtl" : "ltr" }, u, k, {
                onChange: I,
                onClick: T,
                ref: d,
                type: D,
              }),
            )),
            (n[22] = L),
            (n[23] = u),
            (n[24] = d),
            (n[25] = E),
            (n[26] = k),
            (n[27] = I),
            (n[28] = T),
            (n[29] = D),
            (n[30] = x))
          : (x = n[30]),
        x
      );
    }
    var h = c.memo(g);
    l.default = h;
  },
  98,
);
