__d(
  "WAWebCustomerManagerCreateCustomerRecord",
  [
    "WAWebContactManagerCustomerProfileQuery",
    "WAWebCustomerDataFieldSaver",
    "WAWebFindChatAction",
    "WAWebNoteAction",
    "WAWebSaveContactAction",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = await s(e);
      (await p(e), await u(e, t));
    }
    async function s(e) {
      return e.birthday != null
        ? await o(
            "WAWebContactManagerCustomerProfileQuery",
          ).fetchCustomerProfile(e.chatJid)
        : null;
    }
    async function u(e, t) {
      (await c(e),
        await o("WAWebCustomerDataFieldSaver").upsertAsCustomer(
          e.chatJid,
          e.leadStage,
          d(e, t),
        ),
        await m(e));
    }
    async function c(e) {
      await o("WAWebFindChatAction").findOrCreateLatestChat(
        e.profileWid,
        "createContact",
      );
    }
    function d(e, t) {
      var n, r, o, a, i, l, s, u;
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
        lastOrderDescription:
          (u = e.lastOrderDescription) == null ? void 0 : u.trim(),
      };
    }
    async function m(e) {
      var t,
        n,
        r = (t = e.note) == null ? void 0 : t.trim();
      r != null &&
        r !== "" &&
        ((n = e.shouldWriteNote == null ? void 0 : e.shouldWriteNote()) ==
          null ||
          n) &&
        (await o("WAWebNoteAction").addOrEditNoteAction({
          actionType: "add",
          noteType: "unstructured",
          chatJid: e.chatJid,
          content: r,
        }));
    }
    async function p(e) {
      var t,
        n,
        r,
        a,
        i,
        l,
        s =
          (t = (n = e.firstName) == null ? void 0 : n.trim()) != null ? t : "",
        u = (r = (a = e.lastName) == null ? void 0 : a.trim()) != null ? r : "",
        c = (i = (l = e.username) == null ? void 0 : l.trim()) != null ? i : "",
        d = c !== "" ? c : void 0;
      if (e.phoneNumber != null && e.phoneNumber !== "") {
        var m;
        await o("WAWebSaveContactAction").saveContactAction({
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
        (await o("WAWebSaveContactAction").saveContactAction({
          firstName: s,
          lastName: u,
          isExistingContact: !1,
          lid: e.lid,
          username: d,
        }));
    }
    ((l.createCustomerRecord = e),
      (l.readProfileForGuardedBirthday = s),
      (l.createCustomerChat = c),
      (l.buildCustomerProfileFields = d),
      (l.saveCustomerContact = p));
  },
  98,
);
