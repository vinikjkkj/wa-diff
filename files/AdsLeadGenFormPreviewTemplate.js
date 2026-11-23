__d(
  "AdsLeadGenFormPreviewTemplate",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.children,
        n = e.disableScroll,
        r = e.footerContent,
        o = e.footerHeight,
        a = e.progressBarValue,
        i = e.ref;
      return s.jsxs("div", {
        children: [
          s.jsx(
            "div",
            babelHelpers.extends(
              { ref: i },
              {
                0: {
                  className:
                    "x6ikm8r x1odjw0f x1n2onr6 xuo6tqj x1q8sqs3 x1597r2g x6mjcih",
                },
                1: { className: "x6ikm8r x10wlt62 x1n2onr6 x17ol07n x1q8sqs3" },
              }[!!n << 0],
              {
                style: o != null && !n ? { height: 540 - o } : void 0,
                children: t,
              },
            ),
          ),
          n
            ? null
            : s.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  {
                    0: {
                      className:
                        "x178xt8z x13fuv20 x8cjs6t xng8ra x2izyaf x5c4s84",
                    },
                    1: {
                      className:
                        "x178xt8z x13fuv20 x8cjs6t xy75621 x2izyaf x5c4s84",
                    },
                  }[(a != null) << 0],
                  { style: o != null ? { height: o } : void 0, children: r },
                ),
              ),
        ],
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
