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
          address: null,
          altPhoneNumbers: null,
          birthday: null,
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
      return t == null
        ? e
        : new (o("WAWebCustomerDataModel").CustomerData)({
            acquisitionSource: e.acquisitionSource,
            address: t.address,
            altPhoneNumbers: t.altPhoneNumbers,
            birthday: t.birthday,
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
    function c(e) {
      var t = o("WATimeUtils").castToUnixTime(0);
      return new (o("WAWebCustomerDataModel").CustomerData)({
        acquisitionSource: null,
        address: null,
        altPhoneNumbers: null,
        birthday: null,
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
      (l.emptyCustomerData = c));
  },
  98,
);
