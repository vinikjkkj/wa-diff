__d(
  "WAWebWamoNewsletterGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue("newsletter_nux_notice_id");
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "wamo_privacy_tos_unlinked_highlighted_notice_id",
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "wamo_privacy_tos_linked_highlighted_notice_id",
      );
    }
    function c() {
      return [e(), s(), u(), d()];
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "newsletter_admin_invite_nux_id",
      );
    }
    ((l.getNewsletterConsumerNux = e),
      (l.getWamoUnlinkedTos = s),
      (l.getWamoLinkedTos = u),
      (l.getWamoNotices = c),
      (l.getNewsletterAdminInviteNux = d));
  },
  98,
);
