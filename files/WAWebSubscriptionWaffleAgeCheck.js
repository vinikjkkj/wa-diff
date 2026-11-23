__d(
  "WAWebSubscriptionWaffleAgeCheck",
  [
    "WALogger",
    "WAWebAccountLinkingConstants",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebRelayClient",
    "WAWebSubscriptionWaffleAgeCheckQuery.graphql",
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
    async function p() {
      var e;
      try {
        e = await d.getAccountLinkingData();
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
    }
    async function _() {
      var e;
      try {
        var t;
        e =
          (t = await d.getAccountLinkingData()) == null
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
          a = await o("WAWebRelayClient").fetchQuery(m, {}, { accessToken: e });
        return (n = a == null ? void 0 : a.pass_age_check_for_wa_meta_one_v2) !=
          null
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
    }
    ((l.getSubscriptionAgeBranch = p), (l.fetchWaffleAgeCheck = _));
  },
  98,
);
