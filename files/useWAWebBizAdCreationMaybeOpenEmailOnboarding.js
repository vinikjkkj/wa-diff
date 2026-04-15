__d(
  "useWAWebBizAdCreationMaybeOpenEmailOnboarding",
  [
    "CometRelay",
    "WAWebBizAdCreationEmailOnboardingFlow.react",
    "WAWebBizAdCreationIdentityContext",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdCreationSpecContext",
    "WAWebModalManager",
    "react",
    "react-compiler-runtime",
    "useWAWebBizAdCreationMaybeOpenEmailOnboarding_query.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useContext,
      p = c.useEffect,
      _ = c.useRef,
      f =
        e !== void 0
          ? e
          : (e = n(
              "useWAWebBizAdCreationMaybeOpenEmailOnboarding_query.graphql",
            ));
    function g(e) {
      var t,
        n,
        a = o("react-compiler-runtime").c(7),
        i = m(r("WAWebBizAdCreationIdentityContext")),
        l = i == null ? void 0 : i.accountType,
        s = o("CometRelay").useFragment(f, e),
        c =
          s == null || (t = s.wa_ad_account_onboarding_data) == null
            ? void 0
            : t.email,
        d = l === "WAA" && !c,
        g = _(d),
        h,
        y;
      (a[0] !== d
        ? ((h = function () {
            g.current = d;
          }),
          (y = [d]),
          (a[0] = d),
          (a[1] = h),
          (a[2] = y))
        : ((h = a[1]), (y = a[2])),
        p(h, y));
      var C = o("CometRelay").useRelayEnvironment(),
        b = m(r("WAWebBizAdCreationLoggerContext")),
        v = m(r("WAWebBizAdCreationSpecContext")),
        S =
          v == null ||
          (n = v.currentValue) == null ||
          (n = n.adAccountData) == null
            ? void 0
            : n.id,
        R;
      return (
        a[3] !== S || a[4] !== C || a[5] !== b
          ? ((R = function (t, n) {
              if (!g.current) {
                t();
                return;
              }
              o("WAWebModalManager").ModalManager.open(
                u.jsx(o("CometRelay").RelayEnvironmentProvider, {
                  environment: C,
                  children: u.jsx(
                    r("WAWebBizAdCreationEmailOnboardingFlow.react"),
                    {
                      adAccountID: S,
                      loggerContext: b,
                      onCancel: function () {
                        (o("WAWebModalManager").closeModalManager(),
                          n == null || n());
                      },
                      onComplete: function () {
                        (o("WAWebModalManager").closeModalManager(), t());
                      },
                    },
                  ),
                }),
                { blockClose: !0 },
              );
            }),
            (a[3] = S),
            (a[4] = C),
            (a[5] = b),
            (a[6] = R))
          : (R = a[6]),
        R
      );
    }
    l.default = g;
  },
  98,
);
