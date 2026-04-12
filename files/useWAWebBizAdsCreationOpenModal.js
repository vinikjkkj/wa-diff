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
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useContext;
    function c() {
      var e = o("CometRelay").useRelayEnvironment(),
        t = u(r("WAWebBizAdCreationConfigContext")),
        n = u(r("WAWebBizAdCreationLoggerContext")),
        a = u(r("WAWebBizAdCreationSpecContext")),
        i = u(r("WAWebBizAdCreationSpecDispatcherContext")),
        l = u(r("WAWebBizAdCreationSpecReducerContext")),
        c = u(r("WAWebBizAdCreationValidateSpecContext")),
        d = u(r("WAWebNativeAdsFlowIDContext"));
      return function (u, m) {
        return o("WAWebModalManager").ModalManager.open(
          s.jsx(r("WAWebNativeAdsFlowIDContext").Provider, {
            value: d,
            children: s.jsx(o("CometRelay").RelayEnvironmentProvider, {
              environment: e,
              children: s.jsx(r("WAWebBizAdCreationConfigContext").Provider, {
                value: t,
                children: s.jsx(r("WAWebBizAdCreationLoggerContext").Provider, {
                  value: n,
                  children: s.jsx(
                    r("WAWebBizAdCreationSpecReducerContext").Provider,
                    {
                      value: l,
                      children: s.jsx(
                        r("WAWebBizAdCreationSpecContext").Provider,
                        {
                          value: a,
                          children: s.jsx(
                            r("WAWebBizAdCreationSpecDispatcherContext")
                              .Provider,
                            {
                              value: i,
                              children: s.jsx(
                                r("WAWebBizAdCreationValidateSpecContext")
                                  .Provider,
                                { value: c, children: u },
                              ),
                            },
                          ),
                        },
                      ),
                    },
                  ),
                }),
              }),
            }),
          }),
          m,
        );
      };
    }
    l.default = c;
  },
  98,
);
