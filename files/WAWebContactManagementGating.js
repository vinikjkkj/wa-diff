__d(
  "WAWebContactManagementGating",
  ["WAWebABProps", "WAWebPrimaryFeatures"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s();
    }
    function s() {
      return o("WAWebPrimaryFeatures").primaryFeatureEnabled(
        "companion_contact_change_enabled",
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_group_bulk_add_contact",
      );
    }
    function c(e) {
      var t = o("WAWebABProps").getABPropConfigValue("web_add_contact");
      return t.split(",").includes(e);
    }
    function d() {
      return c("chat_header");
    }
    function m() {
      return c("chat_list");
    }
    function p() {
      return c("group_member");
    }
    function _() {
      return c("fmx_card");
    }
    function f() {
      return c("new_chat_drawer");
    }
    function g() {
      return c("chat_list_global_search");
    }
    function h() {
      var e = Number.parseInt(
        o("WAWebABProps").getABPropConfigValue(
          "native_contact_companion_nux_learn_more_article_id",
        ),
        10,
      );
      return (Number.isNaN(e) && (e = 0x43bafc6a5bf34), e);
    }
    ((l.contactManagementEnabled = e),
      (l.bulkAddContactGroupInfoEnabled = u),
      (l.addContactChatHeaderEnabled = d),
      (l.addContactChatListEnabled = m),
      (l.addContactGroupMemberEnabled = p),
      (l.addContactFMXCardEnabled = _),
      (l.addContactNewChatDrawerEnabled = f),
      (l.addContactChatListGlobalSearchEnabled = g),
      (l.getNativeContactLearnMoreArticleId = h));
  },
  98,
);
