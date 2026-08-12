__d(
  "WAWebContactManagerCustomerProfileQuery",
  [
    "WAJids",
    "WAWebContactManagerCustomerProfileDecoders",
    "WAWebContactManagerCustomerProfileQuery.graphql",
    "WAWebCustomerProfileBirthday",
    "WAWebFetchAdAccountToken",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebContactManagerCustomerProfileQuery.graphql"));
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = d(e),
            n = yield o("WAWebFetchAdAccountToken").fetchToken();
          if (n.type !== "success")
            throw r("err")(
              "[ContactManager] fetchCustomerProfile: no access token (" +
                n.type +
                ")",
            );
          yield r("WAWebNetworkStatus").waitIfOffline();
          var a = yield o("WAWebRelayClient").fetchQuery(
              s,
              { lid: t },
              { accessToken: n.token, environmentType: "facebook" },
            ),
            i = a == null ? void 0 : a.xfb_wa_customer_profile;
          return i == null
            ? null
            : {
                acquisitionDate: o(
                  "WAWebContactManagerCustomerProfileDecoders",
                ).toOptionalUnixTime(i.acquisition_date),
                acquisitionSource: o(
                  "WAWebContactManagerCustomerProfileDecoders",
                ).toProfileAcquisitionSourceId(i.acquisition_source),
                address: i.address,
                birthday: o(
                  "WAWebCustomerProfileBirthday",
                ).parseBirthdayFromIso(i.dob),
                birthdayIso: i.dob,
                email: i.email,
                lastOrder: o(
                  "WAWebContactManagerCustomerProfileDecoders",
                ).toOptionalUnixTime(i.last_order_date),
                leadStage: o(
                  "WAWebContactManagerCustomerProfileDecoders",
                ).toLeadStageType(i.lead_stage),
                modifiedAt: o(
                  "WAWebContactManagerCustomerProfileDecoders",
                ).latestUpdateTs(
                  i.last_updates.map(function (e) {
                    var t = e.ts;
                    return t;
                  }),
                ),
                name: i.name,
              };
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      if (!e.endsWith(o("WAJids").LID_DOMAIN))
        throw r("err")(
          "[ContactManager] fetchCustomerProfile: chatJid must be a LID-based JID",
        );
      return e.slice(0, -o("WAJids").LID_DOMAIN.length);
    }
    l.fetchCustomerProfile = u;
  },
  98,
);
