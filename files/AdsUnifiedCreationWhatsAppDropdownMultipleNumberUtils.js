__d(
  "AdsUnifiedCreationWhatsAppDropdownMultipleNumberUtils",
  ["fbt", "ClickToMessagingStrings", "isMessageMarketingWABARestricted"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return e.whatsAppNumberPlatformType === "CLOUD_API";
    }
    function u(e, t, n, r) {
      return r != null
        ? s._(/*BTDS*/ "{BSP name}", [s._param("BSP name", r)])
        : n
          ? o("ClickToMessagingStrings").CONNECTED_CLOUD_API_SUBTITLE
          : e
            ? null
            : o("ClickToMessagingStrings").getConnectedBusinessSubtitle(t);
    }
    function c() {
      return o("ClickToMessagingStrings").CONNECTED_CLOUD_API_SUBTITLE;
    }
    function d(e) {
      var t;
      if (e == null) return !1;
      var n = (t = e.accountReviewStatus) != null ? t : null;
      return (
        r("isMessageMarketingWABARestricted")(e) ||
        n === "BANNED" ||
        n === "RESTRICTED" ||
        n === "REJECTED"
      );
    }
    function m(e, t, n, r, o) {
      var a;
      (r === void 0 && (r = !1), o === void 0 && (o = !1));
      var i =
        (t == null ||
        (a = t.find(function (t) {
          return (
            t.page_whatsapp_number_id ===
            (e == null ? void 0 : e.getAuxiliaryData().pageWhatsAppNumberID)
          );
        })) == null
          ? void 0
          : a.is_business_number) === !0;
      if (i) return null;
      var l =
        t == null
          ? void 0
          : t.find(function (e) {
              return e.is_business_number === !0;
            });
      if ((l == null ? void 0 : l.page_whatsapp_number_id) != null) {
        var s = n.find(function (e) {
          return (
            e.getAuxiliaryData().pageWhatsAppNumberID ===
            (l == null ? void 0 : l.page_whatsapp_number_id)
          );
        });
        if (s != null) return s;
      }
      if (r) {
        var u = t != null && t.length > 0;
        if (!(o && u)) {
          var c = n.find(function (e) {
            return (
              e.getAuxiliaryData().whatsAppNumberID != null &&
              e.getAuxiliaryData().whatsAppNumberID !== "" &&
              !e.getIsDisabled()
            );
          });
          if (c != null) return c;
        }
      }
      return null;
    }
    ((l.getIsWhatsAppNumberPlatformTypeCloudAPI = e),
      (l.getConnectedBusinessSubtitleForSearchableEntry = u),
      (l.getSubtitleForCloudAPIPageNumber = c),
      (l.isWABABanned = d),
      (l.selectPreferredSMBEntry = m));
  },
  226,
);
