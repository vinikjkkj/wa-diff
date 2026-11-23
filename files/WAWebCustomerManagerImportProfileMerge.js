__d(
  "WAWebCustomerManagerImportProfileMerge",
  [
    "WAWebContactManagerCustomerProfileQuery",
    "WAWebContactManagerCustomerProfileUpsertMutation",
    "WAWebCustomerManagerCreateCustomerRecord",
    "WAWebCustomerProfileChangeNotifier",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 3;
    async function s(t, n, a, i) {
      if ((i === void 0 && (i = 1), n == null))
        throw r("err")(
          "[CustomerManager] imported customer profile disappeared",
        );
      var l = c(t, n, a);
      if (
        Object.values(l).every(function (e) {
          return e == null;
        })
      )
        return n.leadStage;
      if (
        await o(
          "WAWebContactManagerCustomerProfileUpsertMutation",
        ).updateCustomerProfileIfUnchanged(t.chatJid, l, n.etag)
      ) {
        var u;
        return (
          o("WAWebCustomerProfileChangeNotifier").notifyCustomerProfileChanged(
            t.chatJid,
          ),
          (u = l.leadStage) != null ? u : n.leadStage
        );
      }
      if (i >= e)
        throw r("err")(
          "[CustomerManager] imported customer profile changed during merge",
        );
      return s(
        t,
        await o("WAWebContactManagerCustomerProfileQuery").fetchCustomerProfile(
          t.chatJid,
        ),
        a,
        i + 1,
      );
    }
    function u(e, t, n) {
      return Object.values(
        d(
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
    function c(e, t, n) {
      var a = t.updatedFields;
      if (a == null)
        throw r("err")(
          "[CustomerManager] imported customer field provenance unavailable",
        );
      return d(
        o(
          "WAWebCustomerManagerCreateCustomerRecord",
        ).buildCustomerProfileFields(e, t),
        t,
        a,
        n,
      );
    }
    function d(e, t, n, r) {
      function o(e, t, r) {
        return t && !n.includes(e) && r != null ? r : void 0;
      }
      return {
        acquisitionSource: o(
          "acquisition_source",
          t.acquisitionSource == null,
          e.acquisitionSource,
        ),
        address: o("address", m(t.address), p(e.address)),
        birthday: o("dob", t.birthdayIso == null, e.birthday),
        email: o("email", m(t.email), p(e.email)),
        lastOrderDescription: o(
          "last_order",
          m(t.lastOrderDescription),
          p(e.lastOrderDescription),
        ),
        leadStage: o(
          "lead_stage",
          r.canBackfillLeadStage && t.leadStage == null,
          r.leadStageToBackfill,
        ),
        name: o("name", m(t.name), r.profileName || void 0),
      };
    }
    function m(e) {
      return e == null || e.trim() === "";
    }
    function p(e) {
      return m(e) ? void 0 : e;
    }
    ((l.fillMissingImportedProfileFields = s),
      (l.hasPotentialImportedProfileFields = u),
      (l.getMissingImportedProfileFields = c));
  },
  98,
);
