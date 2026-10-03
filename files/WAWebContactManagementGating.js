__d(
  "WAWebContactManagementGating",
  ["WAWebABProps", "WAWebPrimaryFeatures", "WAWebUserPrefsMeUser", "WAWebWid"],
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
      return (
        e() &&
        o("WAWebABProps").getABPropConfigValue("web_group_bulk_add_contact")
      );
    }
    function c() {
      return e();
    }
    function d() {
      return e();
    }
    function m() {
      return e();
    }
    function p() {
      return e();
    }
    function _() {
      return e();
    }
    function f(e, t, n) {
      return (
        e.isRegularUser() &&
        !o("WAWebUserPrefsMeUser").isMeAccount(e) &&
        !r("WAWebWid").isIAS(e) &&
        !r("WAWebWid").isCAPISupportAccount(e) &&
        !r("WAWebWid").isSupportAccount(e) &&
        !t &&
        n
      );
    }
    function g() {
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
      (l.addContactChatHeaderEnabled = c),
      (l.addContactChatListEnabled = d),
      (l.addContactGroupMemberEnabled = m),
      (l.addContactFMXCardEnabled = p),
      (l.addContactNewChatDrawerEnabled = _),
      (l.shouldShowAddContactButton = f),
      (l.getNativeContactLearnMoreArticleId = g));
  },
  98,
);
