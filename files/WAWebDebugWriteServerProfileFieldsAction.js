__d(
  "WAWebDebugWriteServerProfileFieldsAction",
  [
    "WAWebContactManagerCustomerProfileQuery",
    "WAWebContactManagerCustomerProfileUpsertMutation",
    "WAWebCustomerOrderPreferences",
    "WAWebCustomerProfileBirthday",
    "WAWebDebugLidInput",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      return await o(
        "WAWebContactManagerCustomerProfileQuery",
      ).fetchCustomerProfile(o("WAWebDebugLidInput").parseLidChatJid(e));
    }
    function s(e) {
      var t, n, r, a, i, l, s, u;
      return {
        acquisitionSource:
          (t = e == null ? void 0 : e.acquisitionSource) != null ? t : null,
        address: (n = e == null ? void 0 : e.address) != null ? n : "",
        birthdayIso: (r = e == null ? void 0 : e.birthdayIso) != null ? r : "",
        confirmedAppointmentDate:
          (a = e == null ? void 0 : e.confirmedAppointmentDate) != null
            ? a
            : "",
        email: (i = e == null ? void 0 : e.email) != null ? i : "",
        lastOrderDescription:
          (l = e == null ? void 0 : e.lastOrderDescription) != null ? l : "",
        leadStage: (s = e == null ? void 0 : e.leadStage) != null ? s : null,
        orderPreferences: o("WAWebCustomerOrderPreferences").toOrderPreferences(
          (u = e == null ? void 0 : e.orderPreferences) != null
            ? u
            : o("WAWebCustomerOrderPreferences").EMPTY_ORDER_PREFERENCES,
        ),
      };
    }
    function u(e, t) {
      var n = s(e),
        r = [];
      return (
        t.email !== n.email && r.push({ field: "email", value: t.email }),
        t.address !== n.address &&
          r.push({ field: "address", value: t.address }),
        t.birthdayIso !== n.birthdayIso && r.push(d(t.birthdayIso)),
        t.confirmedAppointmentDate !== n.confirmedAppointmentDate &&
          r.push({
            field: "confirmedAppointmentDate",
            value: t.confirmedAppointmentDate,
          }),
        t.lastOrderDescription !== n.lastOrderDescription &&
          r.push({
            field: "lastOrderDescription",
            value: t.lastOrderDescription,
          }),
        t.leadStage !== n.leadStage &&
          r.push({ field: "leadStage", value: t.leadStage }),
        t.acquisitionSource !== n.acquisitionSource &&
          r.push({ field: "acquisitionSource", value: t.acquisitionSource }),
        o("WAWebCustomerOrderPreferences").ORDER_PREFERENCE_SLOTS.some(
          function (e) {
            return t.orderPreferences[e] !== n.orderPreferences[e];
          },
        ) &&
          r.push({
            field: "orderPreferences",
            value: o("WAWebCustomerOrderPreferences").toOrderPreferences(
              t.orderPreferences,
            ),
          }),
        r
      );
    }
    async function c(e, t) {
      var n = o("WAWebDebugLidInput").parseLidChatJid(e);
      await t.reduce(function (e, t) {
        return e.then(function () {
          return o(
            "WAWebContactManagerCustomerProfileUpsertMutation",
          ).upsertCustomerProfileFieldToServer(n, t);
        });
      }, Promise.resolve());
    }
    function d(e) {
      if (e === "") return { field: "birthday", value: null, storedDob: null };
      var t = o("WAWebCustomerProfileBirthday").parseBirthdayFromIso(e);
      if (t == null)
        throw r("err")(
          '[CustomerManager] debug profile fields: birthday must be YYYY-MM-DD, got "' +
            e +
            '"',
        );
      return { field: "birthday", value: t, storedDob: e };
    }
    ((l.readServerProfileForDebug = e),
      (l.formFromProfile = s),
      (l.changedProfileFieldUpdates = u),
      (l.writeServerProfileFieldsForDebug = c));
  },
  98,
);
