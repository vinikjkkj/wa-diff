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
            var l = d(t, n, a);
            if (
              Object.values(l).every(function (e) {
                return e == null;
              })
            )
              return n.leadStage;
            if (
              yield o(
                "WAWebContactManagerCustomerProfileUpsertMutation",
              ).updateCustomerProfileIfUnchanged(t.chatJid, l, n.etag)
            ) {
              var u;
              return (
                o(
                  "WAWebCustomerProfileChangeNotifier",
                ).notifyCustomerProfileChanged(t.chatJid),
                (u = l.leadStage) != null ? u : n.leadStage
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
    function c(e, t, n) {
      return Object.values(
        m(
          o(
            "WAWebCustomerManagerCreateCustomerRecord",
          ).buildCustomerProfileFields(e, null),
          t,
          [],
          n,
        ),
      ).some(function (e) {
        return e != null;
      });
    }
    function d(e, t, n) {
      var a = t.updatedFields;
      if (a == null)
        throw r("err")(
          "[CustomerManager] imported customer field provenance unavailable",
        );
      return m(
        o(
          "WAWebCustomerManagerCreateCustomerRecord",
        ).buildCustomerProfileFields(e, t),
        t,
        a,
        n,
      );
    }
    function m(e, t, n, r) {
      function o(e, t, r) {
        return t && !n.includes(e) && r != null ? r : void 0;
      }
      return {
        acquisitionSource: o(
          "acquisition_source",
          t.acquisitionSource == null,
          e.acquisitionSource,
        ),
        address: o("address", p(t.address), _(e.address)),
        birthday: o("dob", t.birthdayIso == null, e.birthday),
        email: o("email", p(t.email), _(e.email)),
        lastOrder: o("last_order_date", t.lastOrder == null, e.lastOrder),
        leadStage: o(
          "lead_stage",
          r.canBackfillLeadStage && t.leadStage == null,
          r.leadStageToBackfill,
        ),
        name: o("name", p(t.name), r.profileName || void 0),
      };
    }
    function p(e) {
      return e == null || e.trim() === "";
    }
    function _(e) {
      return p(e) ? void 0 : e;
    }
    ((l.fillMissingImportedProfileFields = s),
      (l.hasPotentialImportedProfileFields = c),
      (l.getMissingImportedProfileFields = d));
  },
  98,
);
