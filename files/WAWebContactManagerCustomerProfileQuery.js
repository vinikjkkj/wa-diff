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
          var t,
            n = o("WAJids").validateLidUserJid(e);
          if (n == null)
            throw r("err")(
              "[CustomerManager] fetchCustomerProfile: chatJid must be a LID-based JID",
            );
          var a = yield o("WAWebFetchAdAccountToken").fetchToken();
          if (a.type !== "success")
            throw r("err")(
              "[CustomerManager] fetchCustomerProfile: no access token (" +
                a.type +
                ")",
            );
          yield r("WAWebNetworkStatus").waitIfOffline();
          var i;
          try {
            i = yield o("WAWebRelayClient").fetchQuery(
              s,
              { lid: n },
              { accessToken: a.token, environmentType: "facebook" },
            );
          } catch (e) {
            throw o(
              "WAWebCustomerManagerRequestErrors",
            ).asCustomerManagerRequestError(e);
          }
          if (i == null || i.xfb_wa_customer_profile === void 0)
            throw r("err")(
              "[CustomerManager] fetchCustomerProfile: incomplete response",
            );
          var l = i.xfb_wa_customer_profile;
          if (l == null) return null;
          var u = l.etag;
          if (u == null || u === "")
            throw r("err")(
              "[CustomerManager] fetchCustomerProfile: missing profile etag",
            );
          var c = (t = l.last_updates) != null ? t : [],
            d = c.flatMap(function (e) {
              var t = e.field_name;
              return t != null && t !== "" ? [t] : [];
            });
          return {
            acquisitionDate: o(
              "WAWebCustomerManagerCustomerProfileDecoders",
            ).toOptionalUnixTime(l.acquisition_date),
            acquisitionSource: o(
              "WAWebCustomerManagerCustomerProfileDecoders",
            ).toProfileAcquisitionSourceId(l.acquisition_source),
            address: l.address,
            aiSummary: l.ai_summary,
            birthday: o("WAWebCustomerProfileBirthday").parseBirthdayFromIso(
              l.dob,
            ),
            birthdayIso: l.dob,
            etag: u,
            email: l.email,
            fieldUpdates: o(
              "WAWebCustomerManagerCustomerProfileDecoders",
            ).toFieldUpdates(
              l.last_updates.map(function (e) {
                var t = e.field_name,
                  n = e.source,
                  r = e.ts;
                return { fieldName: t, source: n != null ? n : null, ts: r };
              }),
            ),
            lastOrder: o(
              "WAWebCustomerManagerCustomerProfileDecoders",
            ).toOptionalUnixTime(l.last_order_date),
            leadStage: o(
              "WAWebCustomerManagerCustomerProfileDecoders",
            ).toLeadStageType(l.lead_stage),
            modifiedAt: o(
              "WAWebCustomerManagerCustomerProfileDecoders",
            ).latestUpdateTs(
              c.map(function (e) {
                var t = e.ts;
                return t;
              }),
            ),
            name: l.name,
            orderPreferences: o(
              "WAWebCustomerOrderPreferences",
            ).toOrderPreferences(l.order_preferences),
            updatedFields: d.length === c.length ? d : void 0,
          };
        })),
        c.apply(this, arguments)
      );
    }
    l.fetchCustomerProfile = u;
  },
  98,
);
