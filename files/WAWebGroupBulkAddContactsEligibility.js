__d(
  "WAWebGroupBulkAddContactsEligibility",
  [
    "WAWebChatGroupUtils",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
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
      return !(
        o("WAWebFrontendContactGetters").getIsMyContact(e) ||
        e.pushname == null ||
        e.pushname === ""
      );
    }
    function c(e) {
      var t = [];
      return (
        e.toArray().forEach(function (e) {
          var n = s(e);
          n != null && u(n) && t.push(n);
        }),
        t
      );
    }
    function d(e) {
      return e.toArray().some(function (e) {
        var t = s(e);
        return t != null && u(t);
      });
    }
    ((l.isBulkAddEligibleContact = u),
      (l.getBulkAddEligibleContacts = c),
      (l.hasBulkAddEligibleContacts = d));
  },
  98,
);
