__d(
  "AdsPlacementAPISpecReaderUtilsShared",
  ["$InternalEnum", "AdsPlacementConstants", "getByPath"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        { platform: "facebook", position: "feed" },
        { platform: "instagram", position: "stream" },
        { platform: "instagram", position: "story" },
        { platform: "instagram", position: "explore" },
      ],
      s = n("$InternalEnum").Mirrored(["INSTAGRAM", "MESSENGER", "WHATSAPP"]);
    function u(e) {
      var t = {};
      return (
        o("AdsPlacementConstants").PLACEMENT_FIELD_TO_AD_SET_PATHS.forEach(
          function (n, o) {
            var a = r("getByPath")(e, n);
            t[o] = (a && a.toJS ? a.toJS() : a) || void 0;
          },
        ),
        t
      );
    }
    function c(e, t) {
      var n;
      return !!(
        e != null &&
        (n = e.messenger_positions) != null &&
        n.includes(t)
      );
    }
    function d(e) {
      var t, n, r, o;
      return e !== null &&
        (e == null || (t = e.publisher_platforms) == null
          ? void 0
          : t.includes("messenger")) === !0 &&
        (e == null || (n = e.messenger_positions) == null
          ? void 0
          : n.includes("marketing_messages")) === !0 &&
        (e == null || (r = e.publisher_platforms) == null
          ? void 0
          : r.includes("whatsapp")) !== !0 &&
        (e == null || (o = e.whatsapp_positions) == null
          ? void 0
          : o.includes("marketing_messages")) !== !0
        ? s.MESSENGER
        : s.WHATSAPP;
    }
    function m(e) {
      if (e == null) return !1;
      var t = e.messenger_positions,
        n = e.publisher_platforms;
      return (
        (n == null ? void 0 : n.includes("messenger")) === !0 &&
        (t == null ? void 0 : t.includes("marketing_messages")) === !0
      );
    }
    function p(e) {
      if (e == null) return !1;
      var t = e.publisher_platforms,
        n = e.whatsapp_positions;
      return (
        (t == null ? void 0 : t.includes("whatsapp")) === !0 &&
        (n == null ? void 0 : n.includes("marketing_messages")) === !0
      );
    }
    function _(e) {
      var t = d(e);
      if (t == null) return !1;
      switch (t) {
        case s.MESSENGER:
          return m(e);
        case s.WHATSAPP:
          return p(e);
        default:
          return !1;
      }
    }
    function f(t) {
      var n = e
          .filter(function (e) {
            return e.platform === "facebook";
          })
          .map(function (e) {
            return e.position;
          }),
        r = e
          .filter(function (e) {
            return e.platform === "instagram";
          })
          .map(function (e) {
            return e.position;
          }),
        o = t.facebook_positions,
        a = t.instagram_positions;
      return (
        (o == null
          ? void 0
          : o.some(function (e) {
              return n.includes(e);
            })) === !0 ||
        (a == null
          ? void 0
          : a.some(function (e) {
              return r.includes(e);
            })) === !0
      );
    }
    ((l.MDSASupportedPlacements = e),
      (l.MarketingMessagingPlacementPlatform = s),
      (l.convertCampaignToPlacementSpec_LEGACY = u),
      (l.isActiveMessengerPosition = c),
      (l.getMarketingMessagingPlacementPlatform = d),
      (l.isMessageMarketingMessengerPlacement = m),
      (l.isMessageMarketingWhatsAppPlacement = p),
      (l.isMessageMarketingPlacement = _),
      (l.isMDSASupportedPosition = f));
  },
  98,
);
