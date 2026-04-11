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
        toastBottomDefault: { bottom: "x191j7n5", $$css: !0 },
        toastBottomWithControls: { bottom: "xy75b87", $$css: !0 },
        toastBottomWithControlsPopout: { bottom: "x1kiq0my", $$css: !0 },
      };
    function h(t) {
      var n = o("react-compiler-runtime").c(11),
        a = t.areCallControlsVisible,
        i = t.ref,
        l = d(r("WAWebVoipUiPopoutWindowContext")),
        s = f(null),
        c = s[0],
        m = s[1],
        h = g.toastBottomDefault;
      a &&
        (h = l.isContextInPopoutWindow
          ? g.toastBottomWithControlsPopout
          : g.toastBottomWithControls);
      var C = _(null),
        b;
      (n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = function () {
            return {
              showToast: function (t) {
                C.current == null || C.current(t);
              },
            };
          }),
          (n[0] = b))
        : (b = n[0]),
        p(i, b));
      var v;
      n[1] !== h
        ? ((v = (e || (e = r("stylex"))).props(g.toastContainer, h)),
          (n[1] = h),
          (n[2] = v))
        : (v = n[2]);
      var S;
      n[3] !== v
        ? ((S = u.jsx("div", babelHelpers.extends({ ref: m }, v))),
          (n[3] = v),
          (n[4] = S))
        : (S = n[4]);
      var R;
      if (n[5] !== l || n[6] !== c) {
        var L;
        ((R =
          c != null &&
          u.jsx(o("WDSToast.react").WDSToastProvider, {
            target: c,
            targetWindow: (L = l.windowEl) != null ? L : window,
            children: u.jsx(y, {
              onMount: function (t) {
                C.current = t;
              },
            }),
          })),
          (n[5] = l),
          (n[6] = c),
          (n[7] = R));
      } else R = n[7];
      var E;
      return (
        n[8] !== S || n[9] !== R
          ? ((E = u.jsxs(u.Fragment, { children: [S, R] })),
            (n[8] = S),
            (n[9] = R),
            (n[10] = E))
          : (E = n[10]),
        E
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
