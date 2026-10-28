__d(
  "WAWebCustomerProfileToCustomerData",
  [
    "WATimeUtils",
    "WAWebContactType",
    "WAWebCustomerDataCollection",
    "WAWebCustomerDataModel",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return (
        t === void 0 && (t = e.leadStage),
        new (o("WAWebCustomerDataModel").CustomerData)({
          acquisitionSource: e.acquisitionSource,
          address: e.address,
          altPhoneNumbers: null,
          birthday: e.birthday,
          birthdayIso: e.birthdayIso,
          chatJid: e.chatJid,
          contactType: o("WAWebContactType").ContactType.CUSTOMER,
          createdAt: e.modifiedAt,
          email: e.email,
          id: String(e.chatJid),
          lastOrder: e.lastOrder,
          leadStage: t,
          modifiedAt: e.modifiedAt,
        })
      );
    }
    function s(e, t) {
      return new (o("WAWebCustomerDataModel").CustomerData)({
        acquisitionSource: e.acquisitionSource,
        address: e.address,
        altPhoneNumbers: e.altPhoneNumbers,
        birthday: e.birthday,
        birthdayIso: e.birthdayIso,
        chatJid: e.chatJid,
        contactType: e.contactType,
        createdAt: e.createdAt,
        email: e.email,
        id: String(e.id),
        lastOrder: e.lastOrder,
        leadStage: t,
        modifiedAt: e.modifiedAt,
      });
    }
    function u(e) {
      var t = o(
        "WAWebCustomerDataCollection",
      ).CustomerDataCollection.maybeGetCustomerDataByChatJid(e.chatJid);
      return c(
        e,
        t == null
          ? null
          : {
              address: t.address,
              altPhoneNumbers: t.altPhoneNumbers,
              birthday: t.birthday,
              createdAt: t.createdAt,
            },
      );
    }
    function c(e, t) {
      var n, r;
      return t == null
        ? e
        : new (o("WAWebCustomerDataModel").CustomerData)({
            acquisitionSource: e.acquisitionSource,
            address: (n = e.address) != null ? n : t.address,
            altPhoneNumbers: t.altPhoneNumbers,
            birthday: (r = e.birthday) != null ? r : t.birthday,
            birthdayIso: e.birthdayIso,
            chatJid: e.chatJid,
            contactType: e.contactType,
            createdAt: t.createdAt,
            email: e.email,
            id: e.id,
            lastOrder: e.lastOrder,
            leadStage: e.leadStage,
            modifiedAt: e.modifiedAt,
          });
    }
    function d(e) {
      var t = o("WATimeUtils").castToUnixTime(0);
      return new (o("WAWebCustomerDataModel").CustomerData)({
        acquisitionSource: null,
        address: null,
        altPhoneNumbers: null,
        birthday: null,
        birthdayIso: null,
        chatJid: e,
        contactType: o("WAWebContactType").ContactType.NONE,
        createdAt: t,
        email: null,
        id: String(e),
        lastOrder: null,
        leadStage: null,
        modifiedAt: t,
      });
    }
    ((l.customerDataFromProfileRecord = e),
      (l.customerDataWithLeadStage = s),
      (l.withClientOnlyFields = u),
      (l.withClientOnlyFieldsSnapshot = c),
      (l.emptyCustomerData = d));
  },
  98,
);
