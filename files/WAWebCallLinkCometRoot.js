__d(
  "WAWebCallLinkCometRoot",
  [
    "BaseContextualLayerAnchorRoot.react",
    "WAWebCallLinkLandingPage.react",
    "WAWebModalManagerImplWrapper.react",
    "WAWebReceiverAppRoot.react",
    "WAWebUim",
    "WDSThemes",
    "buildWAWebCometRoot",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useEffect,
      d = "video",
      m = null,
      p = "",
      _ = !1,
      f = [],
      g = null;
    function h() {
      c(function () {
        var e = o("WAWebUim").setupUimListeners();
        return e;
      }, []);
    }
    function y() {
      return (
        h(),
        u.jsx(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props(o("WDSThemes").WDSLightTheme),
            {
              children: u.jsx(r("BaseContextualLayerAnchorRoot.react"), {
                children: u.jsxs(
                  o("WAWebReceiverAppRoot.react").WAWebReceiverAppRoot,
                  {
                    children: [
                      u.jsx(r("WAWebCallLinkLandingPage.react"), {
                        callType: d,
                        errorReason: m,
                        idHash: p,
                        isGuestRedirectEnabled: _,
                        locales: f,
                        signedClearStaleVCUrl: g,
                      }),
                      u.jsx(
                        o("WAWebModalManagerImplWrapper.react")
                          .ModalManagerImplWrapper,
                        {
                          type: o("WAWebModalManagerImplWrapper.react")
                            .ModalType,
                        },
                      ),
                    ],
                  },
                ),
              }),
            },
          ),
        )
      );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t, n, o;
      ((d = e.callType),
        (m = (t = e.errorReason) != null ? t : null),
        (p = e.idHash),
        (_ = e.isGuestRedirectEnabled),
        (f = (n = e.locales) != null ? n : []),
        (g = (o = e.signedClearStaleVCUrl) != null ? o : null),
        r("buildWAWebCometRoot")(y, { elementId: e.elementId }));
    }
    ((l.WAWebCallLinkCometRoot = y), (l.init = C));
  },
  98,
);
