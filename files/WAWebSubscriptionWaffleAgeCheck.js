__d(
  "WAWebSubscriptionWaffleAgeCheck",
  [
    "WALogger",
    "WAWebAccountLinkingConstants",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebRelayClient",
    "WAWebSubscriptionWaffleAgeCheckQuery.graphql",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "meta_ai_metering",
      ),
      m =
        e !== void 0
          ? e
          : (e = n("WAWebSubscriptionWaffleAgeCheckQuery.graphql"));
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          try {
            e = yield d.getAccountLinkingData();
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[age-gating] account link state read failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("subscription-age-gating-link-state-read-failed", {
                  sampling: 0.01,
                }),
              "woas"
            );
          }
          if (
            e == null ||
            e.linkState !==
              o("WAWebAccountLinkingConstants").AccountLinkState.Active
          )
            return "woas";
          if (
            e.fbCrosspostingDestinationId != null ||
            e.igCrosspostingDestinationId != null
          )
            return "waffle";
          var t = e,
            n = t.accesstoken;
          return n == null || n === "" ? "pending" : "woas";
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          try {
            var t;
            e =
              (t = yield d.getAccountLinkingData()) == null
                ? void 0
                : t.accesstoken;
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[age-gating] WAFFLE age check: account linking read failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("subscription-age-gating-waffle-db-read-failed", {
                  sampling: 0.01,
                }),
              null
            );
          }
          if (e == null || e === "") return null;
          try {
            var n,
              a = yield o("WAWebRelayClient").fetchQuery(
                m,
                {},
                { accessToken: e },
              );
            return (n =
              a == null ? void 0 : a.pass_age_check_for_wa_meta_one_v2) != null
              ? n
              : null;
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[age-gating] WAFFLE age check query failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("subscription-age-gating-waffle-query-failed", {
                  sampling: 0.01,
                }),
              null
            );
          }
        })),
        g.apply(this, arguments)
      );
    }
    ((l.getSubscriptionAgeBranch = p), (l.fetchWaffleAgeCheck = f));
  },
  98,
);
