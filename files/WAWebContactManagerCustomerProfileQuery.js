__d(
  "WAWebContactManagerCustomerProfileQuery",
  [
    "WAJids",
    "WAWebContactManagerCustomerProfileQuery.graphql",
    "WAWebCustomerManagerCustomerProfileDecoders",
    "WAWebCustomerManagerRequestErrors",
    "WAWebCustomerOrderPreferences",
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
              "[CustomerManager] fetchCustomerProfile: no access token (" +
                n.type +
                ")",
            );
          yield r("WAWebNetworkStatus").waitIfOffline();
          var a;
          try {
            a = yield o("WAWebRelayClient").fetchQuery(
              s,
              { lid: t },
              { accessToken: n.token, environmentType: "facebook" },
            );
          } catch (e) {
            throw o(
              "WAWebCustomerManagerRequestErrors",
            ).asCustomerManagerRequestError(e);
          }
          if (a == null)
            throw r("err")(
              "[CustomerManager] fetchCustomerProfile: incomplete response",
            );
          var i = a.xfb_wa_customer_profile;
          if (i === void 0)
            throw r("err")(
              "[CustomerManager] fetchCustomerProfile: incomplete response",
            );
          if (i == null) return null;
          var l = i.etag;
          if (l == null || l === "")
            throw r("err")(
              "[CustomerManager] fetchCustomerProfile: missing profile etag",
            );
          return {
            acquisitionDate: o(
              "WAWebCustomerManagerCustomerProfileDecoders",
            ).toOptionalUnixTime(i.acquisition_date),
            acquisitionSource: o(
              "WAWebCustomerManagerCustomerProfileDecoders",
            ).toProfileAcquisitionSourceId(i.acquisition_source),
            address: i.address,
            birthday: o("WAWebCustomerProfileBirthday").parseBirthdayFromIso(
              i.dob,
            ),
            birthdayIso: i.dob,
            etag: l,
            email: i.email,
            lastOrder: o(
              "WAWebCustomerManagerCustomerProfileDecoders",
            ).toOptionalUnixTime(i.last_order_date),
            leadStage: o(
              "WAWebCustomerManagerCustomerProfileDecoders",
            ).toLeadStageType(i.lead_stage),
            modifiedAt: o(
              "WAWebCustomerManagerCustomerProfileDecoders",
            ).latestUpdateTs(
              i.last_updates.map(function (e) {
                var t = e.ts;
                return t;
              }),
            ),
            name: i.name,
            orderPreferences: o(
              "WAWebCustomerOrderPreferences",
            ).toOrderPreferences(i.order_preferences),
          };
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      if (!e.endsWith(o("WAJids").LID_DOMAIN))
        throw r("err")(
          "[CustomerManager] fetchCustomerProfile: chatJid must be a LID-based JID",
        );
      return e.slice(0, -o("WAJids").LID_DOMAIN.length);
    }
    l.fetchCustomerProfile = u;
  },
  98,
);
