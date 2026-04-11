__d(
  "useWAWebBizAdsCreationOpenModal",
  [
    "CometRelay",
    "WAWebBizAdCreationConfigContext",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdCreationSpecContext",
    "WAWebBizAdCreationSpecDispatcherContext",
    "WAWebBizAdCreationSpecReducerContext",
    "WAWebBizAdCreationValidateSpecContext",
    "WAWebModalManager",
    "WAWebNativeAdsFlowIDContext",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useContext;
    function c() {
      var e = o("react-compiler-runtime").c(9),
        t = o("CometRelay").useRelayEnvironment(),
        n = u(r("WAWebBizAdCreationConfigContext")),
        a = u(r("WAWebBizAdCreationLoggerContext")),
        i = u(r("WAWebBizAdCreationSpecContext")),
        l = u(r("WAWebBizAdCreationSpecDispatcherContext")),
        c = u(r("WAWebBizAdCreationSpecReducerContext")),
        d = u(r("WAWebBizAdCreationValidateSpecContext")),
        m = u(r("WAWebNativeAdsFlowIDContext")),
        p;
      return (
        e[0] !== n ||
        e[1] !== m ||
        e[2] !== a ||
        e[3] !== t ||
        e[4] !== i ||
        e[5] !== l ||
        e[6] !== c ||
        e[7] !== d
          ? ((p = function (u, p) {
              return o("WAWebModalManager").ModalManager.open(
                s.jsx(r("WAWebNativeAdsFlowIDContext").Provider, {
                  value: m,
                  children: s.jsx(o("CometRelay").RelayEnvironmentProvider, {
                    environment: t,
                    children: s.jsx(
                      r("WAWebBizAdCreationConfigContext").Provider,
                      {
                        value: n,
                        children: s.jsx(
                          r("WAWebBizAdCreationLoggerContext").Provider,
                          {
                            value: a,
                            children: s.jsx(
                              r("WAWebBizAdCreationSpecReducerContext")
                                .Provider,
                              {
                                value: c,
                                children: s.jsx(
                                  r("WAWebBizAdCreationSpecContext").Provider,
                                  {
                                    value: i,
                                    children: s.jsx(
                                      r(
                                        "WAWebBizAdCreationSpecDispatcherContext",
                                      ).Provider,
                                      {
                                        value: l,
                                        children: s.jsx(
                                          r(
                                            "WAWebBizAdCreationValidateSpecContext",
                                          ).Provider,
                                          { value: d, children: u },
                                        ),
                                      },
                                    ),
                                  },
                                ),
                              },
                            ),
                          },
                        ),
                      },
                    ),
                  }),
                }),
                p,
              );
            }),
            (e[0] = n),
            (e[1] = m),
            (e[2] = a),
            (e[3] = t),
            (e[4] = i),
            (e[5] = l),
            (e[6] = c),
            (e[7] = d),
            (e[8] = p))
          : (p = e[8]),
        p
      );
    }
    l.default = c;
  },
  98,
);
