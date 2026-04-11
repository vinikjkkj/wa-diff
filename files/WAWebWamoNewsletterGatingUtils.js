__d(
  "WAWebWamoNewsletterGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "wamo_privacy_tos_show_channels_nux_enabled",
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue("newsletter_nux_notice_id");
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "wamo_privacy_tos_unlinked_highlighted_notice_id",
      );
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "wamo_privacy_tos_linked_highlighted_notice_id",
      );
    }
    function d() {
      return [s(), u(), c(), p()];
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "wamo_privacy_tos_show_channels_nux_enabled",
      );
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "newsletter_admin_invite_nux_id",
      );
    }
    ((l.shouldUseWamoTos = e),
      (l.getNewsletterConsumerNux = s),
      (l.getWamoUnlinkedTos = u),
      (l.getWamoLinkedTos = c),
      (l.getWamoNotices = d),
      (l.shouldShowNewsletterAdminInviteNux = m),
      (l.getNewsletterAdminInviteNux = p));
  },
  98,
);
