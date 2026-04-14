__d(
  "WAWebVoipUiToastContainer.react",
  ["WAWebVoipUiPopoutWindowContext", "WDSToast.react", "react", "stylex"],
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
      var n,
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
        R = _(null);
      return (
        p(i, function () {
          return {
            showToast: function (t) {
              var e;
              (m((e = t.align) != null ? e : "center"),
                R.current == null || R.current(t));
            },
          };
        }),
        u.jsxs(u.Fragment, {
          children: [
            u.jsx(
              "div",
              babelHelpers.extends(
                { ref: b },
                (e || (e = r("stylex"))).props(g.toastContainer, S, v),
              ),
            ),
            C != null &&
              u.jsx(o("WDSToast.react").WDSToastProvider, {
                target: C,
                targetWindow: (n = l.windowEl) != null ? n : window,
                children: u.jsx(y, {
                  onMount: function (t) {
                    R.current = t;
                  },
                }),
              }),
          ],
        })
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.onMount,
        n = o("WDSToast.react").useWDSToast(),
        r = n.showToast;
      return (
        m(
          function () {
            t(r);
          },
          [r, t],
        ),
        null
      );
    }
    ((y.displayName = y.name + " [from " + i.id + "]"),
      (l.WAWebVoipUiToastContainer = h));
  },
  98,
);
