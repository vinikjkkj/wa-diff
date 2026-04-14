__d(
  "WAWebContactManagementGating",
  ["WAWebABProps", "WAWebPrimaryFeatures"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s() && u();
    }
    function s() {
      return o("WAWebPrimaryFeatures").primaryFeatureEnabled(
        "companion_contact_change_enabled",
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "native_contact_companion_change_enabled",
      );
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_bulk_add_contacts_enabled",
      );
    }
    function d(e) {
      var t = o("WAWebABProps").getABPropConfigValue("web_add_contact");
      return t.split(",").includes(e);
    }
    function m() {
      return d("chat_header");
    }
    function p() {
      return d("chat_list");
    }
    function _() {
      return d("group_member");
    }
    function f() {
      var e = Number.parseInt(
        o("WAWebABProps").getABPropConfigValue(
          "native_contact_companion_nux_learn_more_article_id",
        ),
        10,
      );
      return (Number.isNaN(e) && (e = 0x43bafc6a5bf34), e);
    }
    ((l.contactManagementEnabled = e),
      (l.bulkAddContactsFromGroupsEnabled = c),
      (l.addContactChatHeaderEnabled = m),
      (l.addContactChatListEnabled = p),
      (l.addContactGroupMemberEnabled = _),
      (l.getNativeContactLearnMoreArticleId = f));
  },
  98,
);
