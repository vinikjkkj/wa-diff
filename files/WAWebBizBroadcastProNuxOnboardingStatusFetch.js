__d(
  "WAWebBizBroadcastProNuxOnboardingStatusFetch",
  [
    "WAExponentialBackoff",
    "WALogger",
    "WAWebBizBroadcastProNuxOnboardingStatusFetchQuery.graphql",
    "WAWebBizBroadcastProNuxTos",
    "WAWebFetchWithAdAccountToken",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c =
        e !== void 0
          ? e
          : (e = n(
              "WAWebBizBroadcastProNuxOnboardingStatusFetchQuery.graphql",
            )),
      d = {
        maxTimeout: 16e3,
        minTimeout: 1e3,
        retries: 3,
        signal: new AbortController().signal,
      };
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAExponentialBackoff").exponentialBackoff(
            d,
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  try {
                    var t,
                      n = yield o(
                        "WAWebFetchWithAdAccountToken",
                      ).fetchWithAdAccountToken(function (e) {
                        return o("WAWebRelayClient").fetchQuery(
                          c,
                          {},
                          { accessToken: e, environmentType: "facebook" },
                        );
                      }),
                      a =
                        n == null || (t = n.xfb_whatsapp_bb_pro) == null
                          ? void 0
                          : t.onboarding_status;
                    if (a == null)
                      return e(
                        r("err")("bb-pro-nux onboarding status missing"),
                      );
                    var i = o(
                      "WAWebBizBroadcastProNuxTos",
                    ).BBProOnboardingStatus.cast(a);
                    if (i == null) {
                      (o("WALogger")
                        .WARN(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "[biz-broadcast-pro-nux-tos] unrecognized onboarding status",
                            ])),
                        )
                        .catching(r("err")(String(a))),
                        o(
                          "WAWebBizBroadcastProNuxTos",
                        ).setBizBroadcastProNuxOnboardingStatus(
                          o("WAWebBizBroadcastProNuxTos").BBProOnboardingStatus
                            .NOT_ELIGIBLE,
                        ));
                      return;
                    }
                    o(
                      "WAWebBizBroadcastProNuxTos",
                    ).setBizBroadcastProNuxOnboardingStatus(i);
                  } catch (t) {
                    return (
                      o("WALogger")
                        .WARN(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
                              "[biz-broadcast-pro-nux-tos] onboarding status sync error",
                            ])),
                        )
                        .catching(r("getErrorSafe")(t)),
                      e(t instanceof Error ? t : r("err")(String(t)))
                    );
                  }
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          );
        })),
        p.apply(this, arguments)
      );
    }
    l.syncBizBroadcastProNuxOnboardingStatusFromServer = m;
  },
  98,
);
