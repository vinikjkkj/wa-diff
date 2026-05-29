__d(
  "WAWebCallLinkCometRoot",
  [
    "WAWebCallLinkLandingPage.react",
    "WAWebModalManagerImplWrapper.react",
    "WAWebReceiverAppRoot.react",
    "WAWebUim",
    "buildWAWebCometRoot",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useEffect,
      c = "video",
      d = "",
      m = [];
    function p() {
      var e = o("react-compiler-runtime").c(1),
        t;
      (e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = []), (e[0] = t))
        : (t = e[0]),
        u(_, t));
    }
    function _() {
      var e = o("WAWebUim").setupUimListeners();
      return e;
    }
    function f() {
      var e = o("react-compiler-runtime").c(1);
      p();
      var t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = s.jsxs(o("WAWebReceiverAppRoot.react").WAWebReceiverAppRoot, {
              children: [
                s.jsx(r("WAWebCallLinkLandingPage.react"), {
                  callType: c,
                  idHash: d,
                  locales: m,
                }),
                s.jsx(
                  o("WAWebModalManagerImplWrapper.react")
                    .ModalManagerImplWrapper,
                  { type: o("WAWebModalManagerImplWrapper.react").ModalType },
                ),
              ],
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function g(e) {
      var t;
      ((c = e.callType),
        (d = e.idHash),
        (m = (t = e.locales) != null ? t : []),
        r("buildWAWebCometRoot")(f, { elementId: e.elementId }));
    }
    ((l.WAWebCallLinkCometRoot = f), (l.init = g));
  },
  98,
);
