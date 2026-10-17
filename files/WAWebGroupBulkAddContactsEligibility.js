__d(
  "WAWebGroupBulkAddContactsEligibility",
  [
    "WAWebApiContact",
    "WAWebChatGroupUtils",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebLidMigrationUtils",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameTypes",
    "WAWebUsernameWorkerCompatibleGatingUtils",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "group_info_participant_section_click";
    function s(t) {
      var n = o("WAWebChatGroupUtils").getOneToOneContactFromGroupContact(
        t.contact.id,
        e,
      );
      return n == null
        ? null
        : o("WAWebContactCollection").ContactCollection.get(n);
    }
    function u(e) {
      if (
        o("WAWebUserPrefsMeUser").isMeAccount(e.id) ||
        o("WAWebFrontendContactGetters").getIsMyContact(e) ||
        o("WAWebFrontendContactGetters").getIsContactBlocked(e)
      )
        return !1;
      var t = d(e);
      return t == null
        ? !1
        : t.type === "username" || !r("isStringNullOrEmpty")(e.pushname);
    }
    function c(e, t) {
      var n = e.pushname;
      return r("isStringNullOrEmpty")(n)
        ? t.type === "username"
          ? o("WAWebUsernameTypes").serializeUsername(t.username)
          : ""
        : n;
    }
    function d(e) {
      var t = e.username;
      if (
        t != null &&
        !e.isSmb &&
        o("WAWebUsernameWorkerCompatibleGatingUtils").usernameContactUIEnabled()
      ) {
        var n = o("WAWebLidMigrationUtils").toUserLid(e.id);
        return n != null ? { type: "username", lid: n, username: t } : null;
      }
      var r = e.id.isLid() ? o("WAWebApiContact").getPhoneNumber(e.id) : e.id;
      return r != null ? { type: "phone_number", phoneNumber: r } : null;
    }
    function m(e) {
      var t = [];
      return (
        e.toArray().forEach(function (e) {
          var n = s(e);
          n != null && u(n) && t.push(n);
        }),
        t
      );
    }
    function p(e) {
      return e.toArray().some(function (e) {
        var t = s(e);
        return t != null && u(t);
      });
    }
    ((l.isBulkAddEligibleContact = u),
      (l.getBulkAddContactName = c),
      (l.getBulkAddSaveTarget = d),
      (l.getBulkAddEligibleContacts = m),
      (l.hasBulkAddEligibleContacts = p));
  },
  98,
);
