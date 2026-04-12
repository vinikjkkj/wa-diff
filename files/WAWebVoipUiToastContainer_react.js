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
        toastBottomDefault: { bottom: "x191j7n5", $$css: !0 },
        toastBottomWithControls: { bottom: "xy75b87", $$css: !0 },
        toastBottomWithControlsPopout: { bottom: "x1kiq0my", $$css: !0 },
      };
    function h(t) {
      var n,
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
      var C = _(null);
      return (
        p(i, function () {
          return {
            showToast: function (t) {
              C.current == null || C.current(t);
            },
          };
        }),
        u.jsxs(u.Fragment, {
          children: [
            u.jsx(
              "div",
              babelHelpers.extends(
                { ref: m },
                (e || (e = r("stylex"))).props(g.toastContainer, h),
              ),
            ),
            c != null &&
              u.jsx(o("WDSToast.react").WDSToastProvider, {
                target: c,
                targetWindow: (n = l.windowEl) != null ? n : window,
                children: u.jsx(y, {
                  onMount: function (t) {
                    C.current = t;
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
