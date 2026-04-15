__d(
  "WAWebVoipUiToastContainer.react",
  [
    "WAWebVoipUiPopoutWindowContext",
    "WDSToast.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useContext,
      m = c.useEffect,
      p = c.useImperativeHandle,
      _ = c.useRef,
      f = c.useState,
      g = {
        toastContainer: {
          position: "x10l6tqk",
          zIndex: "xfo81ep",
          width: "xh8yej3",
          pointerEvents: "x47corl",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          insetInlineStart: "x1o0tod",
          $$css: !0,
        },
        toastAlignStart: {
          justifyContent: "x1nhvcw1",
          paddingInlineStart: "xdx6fka",
          $$css: !0,
        },
        toastAlignEnd: {
          justifyContent: "x13a6bvl",
          paddingInlineEnd: "xvtqlqk",
          $$css: !0,
        },
        toastBottomDefault: { bottom: "x191j7n5", $$css: !0 },
        toastBottomWithControls: { bottom: "xy75b87", $$css: !0 },
        toastBottomWithControlsPopout: { bottom: "x1kiq0my", $$css: !0 },
      };
    function h(t) {
      var n = o("react-compiler-runtime").c(12),
        a = t.areCallControlsVisible,
        i = t.ref,
        l = d(r("WAWebVoipUiPopoutWindowContext")),
        s = f("center"),
        c = s[0],
        m = s[1],
        h = f(null),
        C = h[0],
        b = h[1],
        v = g.toastBottomDefault;
      a &&
        (v = l.isContextInPopoutWindow
          ? g.toastBottomWithControlsPopout
          : g.toastBottomWithControls);
      var S =
          c === "start"
            ? g.toastAlignStart
            : c === "end"
              ? g.toastAlignEnd
              : null,
        R = _(null),
        L;
      (n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = function () {
            return {
              showToast: function (t) {
                var e;
                (m((e = t.align) != null ? e : "center"),
                  R.current == null || R.current(t));
              },
            };
          }),
          (n[0] = L))
        : (L = n[0]),
        p(i, L));
      var E;
      n[1] !== S || n[2] !== v
        ? ((E = (e || (e = r("stylex"))).props(g.toastContainer, S, v)),
          (n[1] = S),
          (n[2] = v),
          (n[3] = E))
        : (E = n[3]);
      var k;
      n[4] !== E
        ? ((k = u.jsx("div", babelHelpers.extends({ ref: b }, E))),
          (n[4] = E),
          (n[5] = k))
        : (k = n[5]);
      var I;
      if (n[6] !== l || n[7] !== C) {
        var T;
        ((I =
          C != null &&
          u.jsx(o("WDSToast.react").WDSToastProvider, {
            target: C,
            targetWindow: (T = l.windowEl) != null ? T : window,
            children: u.jsx(y, {
              onMount: function (t) {
                R.current = t;
              },
            }),
          })),
          (n[6] = l),
          (n[7] = C),
          (n[8] = I));
      } else I = n[8];
      var D;
      return (
        n[9] !== k || n[10] !== I
          ? ((D = u.jsxs(u.Fragment, { children: [k, I] })),
            (n[9] = k),
            (n[10] = I),
            (n[11] = D))
          : (D = n[11]),
        D
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.onMount,
        r = o("WDSToast.react").useWDSToast(),
        a = r.showToast,
        i,
        l;
      return (
        t[0] !== n || t[1] !== a
          ? ((i = function () {
              n(a);
            }),
            (l = [a, n]),
            (t[0] = n),
            (t[1] = a),
            (t[2] = i),
            (t[3] = l))
          : ((i = t[2]), (l = t[3])),
        m(i, l),
        null
      );
    }
    l.WAWebVoipUiToastContainer = h;
  },
  98,
);
