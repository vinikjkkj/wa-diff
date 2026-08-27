__d(
  "WAWebContactManagerCreateCustomerRecord",
  [
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
          var t, n, r, a, i, l, s;
          (yield u(e),
            yield o("WAWebFindChatAction").findOrCreateLatestChat(
              e.profileWid,
              "createContact",
            ),
            yield o("WAWebCustomerDataFieldSaver").upsertAsCustomer(
              e.chatJid,
              e.leadStage,
              {
                acquisitionSource:
                  (t = e.acquisitionSource) != null ? t : void 0,
                address:
                  (n = (r = e.address) == null ? void 0 : r.trim()) != null
                    ? n
                    : "",
                altPhoneNumbers: "",
                email:
                  (a = (i = e.email) == null ? void 0 : i.trim()) != null
                    ? a
                    : "",
              },
            ));
          var c = (l = e.note) == null ? void 0 : l.trim();
          c != null &&
            c !== "" &&
            ((s = e.shouldWriteNote == null ? void 0 : e.shouldWriteNote()) ==
              null ||
              s) &&
            (yield o("WAWebNoteAction").addOrEditNoteAction(
              {
                actionType: "add",
                noteType: "unstructured",
                chatJid: e.chatJid,
                content: c,
              },
              !0,
            ));
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
        c.apply(this, arguments)
      );
    }
    l.createCustomerRecord = e;
  },
  98,
);
