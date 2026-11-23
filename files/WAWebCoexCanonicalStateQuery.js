__d(
  "WAWebCoexCanonicalStateQuery",
  [
    "WAWebCoexBusinessRequest",
    "WAWebCoexCanonicalMembership",
    "WAWebCoexCanonicalStateQuery.graphql",
    "WAWebRelayClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e !== void 0 ? e : (e = n("WAWebCoexCanonicalStateQuery.graphql"));
    async function u() {
      var e = await o("WAWebCoexBusinessRequest").sendCoexBusinessRequest(
        c,
        "coex-canonical-state-fetch-failed",
      );
      return e.type === "failed" ? e : e.value;
    }
    async function c(e) {
      var t,
        n = e.phoneNumber,
        r = e.token,
        a = await o("WAWebRelayClient").fetchQuery(
          s,
          { request: { phone_number: n } },
          { environmentType: "facebook", accessToken: r },
        ),
        i =
          a == null ||
          (t = a.xfb_whatsapp_coexistence_bsp_info_query) == null ||
          (t = t.product_states) == null
            ? void 0
            : t.states;
      return o("WAWebCoexCanonicalMembership").getCoexCanonicalMembership(
        i == null
          ? void 0
          : i.map(function (e) {
              var t, n;
              return {
                product:
                  (t = e.coex_connection_descriptor) == null
                    ? void 0
                    : t.product,
                providerId:
                  (n = e.coex_connection_descriptor) == null
                    ? void 0
                    : n.provider_id,
                onboardingStatus: e.onboarding_status,
              };
            }),
      );
    }
    ((l.fetchCoexCanonicalMembership = u),
      (l.queryCoexCanonicalMembership = c));
  },
  98,
);
