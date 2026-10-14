__d(
  "WAWebCustomerManagerImportProfileMerge",
  [
    "WAWebContactManagerCustomerProfileQuery",
    "WAWebContactManagerCustomerProfileUpsertMutation",
    "WAWebCustomerManagerCreateCustomerRecord",
    "WAWebCustomerProfileChangeNotifier",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 3;
    function s(e, t, n, r) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i) {
            if ((i === void 0 && (i = 1), n == null))
              throw r("err")(
                "[CustomerManager] imported customer profile disappeared",
              );
            var l = n.updatedFields;
            if (l == null)
              throw r("err")(
                "[CustomerManager] imported customer field provenance unavailable",
              );
            var u = c(t, n, l, a);
            if (
              Object.values(u).every(function (e) {
                return e == null;
              })
            )
              return n.leadStage;
            if (
              yield o(
                "WAWebContactManagerCustomerProfileUpsertMutation",
              ).updateCustomerProfileIfUnchanged(t.chatJid, u, n.etag)
            ) {
              var d;
              return (
                o(
                  "WAWebCustomerProfileChangeNotifier",
                ).notifyCustomerProfileChanged(t.chatJid),
                (d = u.leadStage) != null ? d : n.leadStage
              );
            }
            if (i >= e)
              throw r("err")(
                "[CustomerManager] imported customer profile changed during merge",
              );
            return s(
              t,
              yield o(
                "WAWebContactManagerCustomerProfileQuery",
              ).fetchCustomerProfile(t.chatJid),
              a,
              i + 1,
            );
          },
        )),
        u.apply(this, arguments)
      );
    }
    function c(e, t, n, r) {
      var a = o(
        "WAWebCustomerManagerCreateCustomerRecord",
      ).buildCustomerProfileFields(e, t);
      function i(e, t, r) {
        return t && !n.includes(e) && r != null ? r : void 0;
      }
      return {
        acquisitionSource: i(
          "acquisition_source",
          t.acquisitionSource == null,
          a.acquisitionSource,
        ),
        address: i("address", d(t.address), m(a.address)),
        birthday: i("dob", t.birthdayIso == null, a.birthday),
        email: i("email", d(t.email), m(a.email)),
        lastOrder: i("last_order_date", t.lastOrder == null, a.lastOrder),
        leadStage: i(
          "lead_stage",
          r.canBackfillLeadStage && t.leadStage == null,
          r.leadStageToBackfill,
        ),
        name: i("name", d(t.name), r.profileName || void 0),
      };
    }
    function d(e) {
      return e == null || e.trim() === "";
    }
    function m(e) {
      return d(e) ? void 0 : e;
    }
    l.fillMissingImportedProfileFields = s;
  },
  98,
);
