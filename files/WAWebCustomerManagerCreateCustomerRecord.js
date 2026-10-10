__d(
  "WAWebCustomerManagerCreateCustomerRecord",
  [
    "WAWebContactManagerCustomerProfileQuery",
    "WAWebContactManagerCustomerProfileUpsertMutation",
    "WAWebCustomerDataFieldSaver",
    "WAWebFindChatAction",
    "WAWebNoteAction",
    "WAWebSaveContactAction",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield u(e);
          (yield y(e), yield d(e, t));
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (
            o(
              "WAWebContactManagerCustomerProfileUpsertMutation",
            ).assertPersistableLastOrderDate(e.lastOrder),
            e.birthday != null
              ? yield o(
                  "WAWebContactManagerCustomerProfileQuery",
                ).fetchCustomerProfile(e.chatJid)
              : null
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (yield p(e),
            yield o("WAWebCustomerDataFieldSaver").upsertAsCustomer(
              e.chatJid,
              e.leadStage,
              f(e, t),
            ),
            yield g(e));
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebFindChatAction").findOrCreateLatestChat(
            e.profileWid,
            "createContact",
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      var n, r, o, a, i, l, s;
      return {
        acquisitionSource: (n = e.acquisitionSource) != null ? n : void 0,
        address:
          (r = (o = e.address) == null ? void 0 : o.trim()) != null ? r : "",
        birthday:
          e.birthday != null
            ? {
                ifMatch: (a = t == null ? void 0 : t.etag) != null ? a : "",
                storedDob:
                  (i = t == null ? void 0 : t.birthdayIso) != null ? i : null,
                value: e.birthday,
              }
            : void 0,
        email: (l = (s = e.email) == null ? void 0 : s.trim()) != null ? l : "",
        lastOrder: e.lastOrder,
      };
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r = (t = e.note) == null ? void 0 : t.trim();
          r != null &&
            r !== "" &&
            ((n = e.shouldWriteNote == null ? void 0 : e.shouldWriteNote()) ==
              null ||
              n) &&
            (yield o("WAWebNoteAction").addOrEditNoteAction({
              actionType: "add",
              noteType: "unstructured",
              chatJid: e.chatJid,
              content: r,
            }));
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r,
            a,
            i,
            l,
            s =
              (t = (n = e.firstName) == null ? void 0 : n.trim()) != null
                ? t
                : "",
            u =
              (r = (a = e.lastName) == null ? void 0 : a.trim()) != null
                ? r
                : "",
            c =
              (i = (l = e.username) == null ? void 0 : l.trim()) != null
                ? i
                : "",
            d = c !== "" ? c : void 0;
          if (e.phoneNumber != null && e.phoneNumber !== "") {
            var m;
            yield o("WAWebSaveContactAction").saveContactAction({
              firstName: s,
              lastName: u,
              isExistingContact: !1,
              phoneNumber: e.phoneNumber,
              prevPhoneNumber: null,
              syncToAddressbook: !1,
              username: d,
              lid: (m = e.lid) != null ? m : void 0,
            });
            return;
          }
          e.lid != null &&
            d != null &&
            (yield o("WAWebSaveContactAction").saveContactAction({
              firstName: s,
              lastName: u,
              isExistingContact: !1,
              lid: e.lid,
              username: d,
            }));
        })),
        C.apply(this, arguments)
      );
    }
    ((l.createCustomerRecord = e),
      (l.readProfileForGuardedBirthday = u),
      (l.createCustomerChat = p),
      (l.buildCustomerProfileFields = f),
      (l.writeCustomerNote = g),
      (l.saveCustomerContact = y));
  },
  98,
);
