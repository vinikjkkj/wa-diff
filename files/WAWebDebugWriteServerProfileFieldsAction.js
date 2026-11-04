__d(
  "WAWebDebugWriteServerProfileFieldsAction",
  [
    "Promise",
    "WAWebContactManagerCustomerProfileQuery",
    "WAWebContactManagerCustomerProfileUpsertMutation",
    "WAWebCustomerOrderPreferences",
    "WAWebCustomerProfileBirthday",
    "WAWebDebugLidInput",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return yield o(
            "WAWebContactManagerCustomerProfileQuery",
          ).fetchCustomerProfile(o("WAWebDebugLidInput").parseLidChatJid(e));
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
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
    function d(e, t) {
      var n = c(e),
        r = [];
      return (
        t.email !== n.email && r.push({ field: "email", value: t.email }),
        t.address !== n.address &&
          r.push({ field: "address", value: t.address }),
        t.birthdayIso !== n.birthdayIso && r.push(_(t.birthdayIso)),
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
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = o("WAWebDebugLidInput").parseLidChatJid(t);
          yield r.reduce(
            function (e, t) {
              return e.then(function () {
                return o(
                  "WAWebContactManagerCustomerProfileUpsertMutation",
                ).upsertCustomerProfileFieldToServer(a, t);
              });
            },
            (e || (e = n("Promise"))).resolve(),
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
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
    ((l.readServerProfileForDebug = s),
      (l.formFromProfile = c),
      (l.changedProfileFieldUpdates = d),
      (l.writeServerProfileFieldsForDebug = m));
  },
  98,
);
