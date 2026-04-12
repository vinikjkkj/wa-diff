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
        a = m(r("WAWebBizAdCreationIdentityContext")),
        i = a == null ? void 0 : a.accountType,
        l = o("CometRelay").useFragment(f, e),
        s =
          l == null || (t = l.wa_ad_account_onboarding_data) == null
            ? void 0
            : t.email,
        c = i === "WAA" && !s,
        g = _(c);
      p(
        function () {
          g.current = c;
        },
        [c],
      );
      var h = o("CometRelay").useRelayEnvironment(),
        y = m(r("WAWebBizAdCreationLoggerContext")),
        C = m(r("WAWebBizAdCreationSpecContext")),
        b =
          C == null ||
          (n = C.currentValue) == null ||
          (n = n.adAccountData) == null
            ? void 0
            : n.id;
      return d(
        function (e, t) {
          if (!g.current) {
            e();
            return;
          }
          o("WAWebModalManager").ModalManager.open(
            u.jsx(o("CometRelay").RelayEnvironmentProvider, {
              environment: h,
              children: u.jsx(
                r("WAWebBizAdCreationEmailOnboardingFlow.react"),
                {
                  adAccountID: b,
                  loggerContext: y,
                  onCancel: (function (e) {
                    function t() {
                      return e.apply(this, arguments);
                    }
                    return (
                      (t.toString = function () {
                        return e.toString();
                      }),
                      t
                    );
                  })(function () {
                    (o("WAWebModalManager").closeModalManager(),
                      t == null || t());
                  }),
                  onComplete: (function (e) {
                    function t() {
                      return e.apply(this, arguments);
                    }
                    return (
                      (t.toString = function () {
                        return e.toString();
                      }),
                      t
                    );
                  })(function () {
                    (o("WAWebModalManager").closeModalManager(), e());
                  }),
                },
              ),
            }),
            { blockClose: !0 },
          );
        },
        [h, y, b],
      );
    }
    l.default = g;
  },
  98,
);
