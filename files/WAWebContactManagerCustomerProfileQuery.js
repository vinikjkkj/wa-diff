__d(
  "WAWebContactManagerCustomerProfileQuery",
  [
    "WAJids",
    "WAWebContactManagerCustomerProfileQuery.graphql",
    "WAWebCustomerManagerCustomerProfileDecoders",
    "WAWebCustomerManagerProfileRequest",
    "WAWebCustomerOrderPreferences",
    "WAWebCustomerProfileBirthday",
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
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAJids").validateLidUserJid(e);
          if (n == null)
            throw r("err")(
              "[CustomerManager] fetchCustomerProfile: chatJid must be a LID-based JID",
            );
          var a = yield o(
            "WAWebCustomerManagerProfileRequest",
          ).runCustomerProfileRequest(
            "fetchCustomerProfile",
            function (e) {
              return o("WAWebRelayClient").fetchQuery(s, { lid: n }, e);
            },
            {
              onTokenSettled: function () {
                t == null || t();
              },
            },
          );
          if (a == null || a.xfb_wa_customer_profile === void 0)
            throw r("err")(
              "[CustomerManager] fetchCustomerProfile: incomplete response",
            );
          var i = a.xfb_wa_customer_profile;
          if (i == null) return null;
          var l = i.etag;
          if (l == null || l === "")
            throw r("err")(
              "[CustomerManager] fetchCustomerProfile: missing profile etag",
            );
          var u = i.last_updates,
            c = u.flatMap(function (e) {
              var t = e.field_name;
              return t != null && t !== "" ? [t] : [];
            });
          return {
            acquisitionDate: o(
              "WAWebCustomerManagerCustomerProfileDecoders",
            ).toOptionalUnixTime(i.acquisition_date),
            acquisitionSource: o(
              "WAWebCustomerManagerCustomerProfileDecoders",
            ).toProfileAcquisitionSourceId(i.acquisition_source),
            address: i.address,
            aiSummary: i.ai_summary,
            birthday: o("WAWebCustomerProfileBirthday").parseBirthdayFromIso(
              i.dob,
            ),
            birthdayIso: i.dob,
            confirmedAppointmentDate: i.confirmed_appointment_date,
            etag: l,
            email: i.email,
            fieldUpdates: o(
              "WAWebCustomerManagerCustomerProfileDecoders",
            ).toFieldUpdates(
              i.last_updates.map(function (e) {
                var t = e.field_name,
                  n = e.source,
                  r = e.ts;
                return { fieldName: t, source: n != null ? n : null, ts: r };
              }),
            ),
            lastOrderDescription: i.last_order,
            leadStage: o(
              "WAWebCustomerManagerCustomerProfileDecoders",
            ).toLeadStageType(i.lead_stage),
            modifiedAt: o(
              "WAWebCustomerManagerCustomerProfileDecoders",
            ).latestUpdateTs(
              u.map(function (e) {
                var t = e.ts;
                return t;
              }),
            ),
            name: i.name,
            orderPreferences: o(
              "WAWebCustomerOrderPreferences",
            ).toOrderPreferences(i.order_preferences),
            updatedFields: c.length === u.length ? c : void 0,
          };
        })),
        c.apply(this, arguments)
      );
    }
    l.fetchCustomerProfile = u;
  },
  98,
);
