__d(
  "AdsLinkTypeUtils",
  [
    "ix",
    "AdsAPIAdgroupPaths",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedUtils",
    "AppAdsPlayablesUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "BUY_TICKETS",
      u = "CALL_NOW",
      c = "PAY_TO_ACCESS",
      d = "WHATSAPP",
      m = "MESSENGER",
      p = "INSTAGRAM_DIRECT";
    function _(e) {
      switch (e) {
        case "event":
          return s("418961");
        case "messenger":
          return s("374487");
        case "movie":
          return s("724795");
        case "phone_call":
          return s("558163");
        case "whatsapp":
          return s("497240");
        default:
          return s("383904");
      }
    }
    function f(t, n) {
      var a, i;
      if (n) i = r("AdsAdgroupSemanticFields").callToActionType.get(n, t);
      else if (
        ((i =
          t.getIn(
            r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
              .CALL_TO_ACTION.TYPE,
          ) ||
          t.getIn(
            r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA
              .CALL_TO_ACTION.TYPE,
          ) ||
          t.getIn(
            r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC
              .CALL_TO_ACTION_TYPES,
          )),
        !i)
      ) {
        var l = t.getIn(
          r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.CALL_TO_ACTIONS,
        );
        l != null &&
          (i = l.map(function (e) {
            return e.get("type");
          }));
      }
      return typeof i == "string"
        ? i === e || i === c
        : i != null &&
            o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(t) &&
            ((a = i) == null ? void 0 : a.size) == 1 &&
            i.first() === e;
    }
    function g(e, t) {
      if (t) {
        var n = r("AdsAdgroupSemanticFields").callToActionType.get(t, e);
        return typeof n == "string" && n === u;
      } else {
        var o =
          e.getIn(
            r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
              .CALL_TO_ACTION.TYPE,
          ) ||
          e.getIn(
            r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA
              .CALL_TO_ACTION.TYPE,
          );
        return typeof o == "string" && o === u;
      }
    }
    function h(e, t, n) {
      var r,
        a,
        i = o("AppAdsPlayablesUtils").isPlayableAdsAdgroupFromRecord(e.adgroup),
        l = (r = e.adgroup.creative) == null ? void 0 : r.playable_asset_id,
        s =
          t == null || (a = t.adgroupPlayableAssetTypes) == null
            ? void 0
            : a.get(e.adgroup.id),
        u = null;
      if (l != null && n.hasValue()) {
        var c = n.getValueEnforcing();
        u = c.find(function (e) {
          return e.id == l;
        });
      }
      var d = i && (s === "html5" || u != null);
      return d ? "playable_source" : null;
    }
    function y(e, t) {
      var n = null;
      if (t) {
        var o, a;
        if (
          ((n =
            ((o = e.creative) == null ||
            (o = o.object_story_spec) == null ||
            (o = o.link_data) == null ||
            (o = o.call_to_action) == null ||
            (o = o.value) == null
              ? void 0
              : o.app_destination) ||
            ((a = e.creative) == null ||
            (a = a.object_story_spec) == null ||
            (a = a.video_data) == null ||
            (a = a.call_to_action) == null ||
            (a = a.value) == null
              ? void 0
              : a.app_destination)),
          n == null)
        ) {
          var i,
            l =
              (i = e.creative) == null || (i = i.asset_feed_spec) == null
                ? void 0
                : i.call_to_actions;
          if (l != null && l.size === 1)
            if (l instanceof r("immutable").List) {
              var s,
                u = (s = l.first()) == null ? void 0 : s.get("value");
              u instanceof r("immutable").Map &&
                (n = u == null ? void 0 : u.get("app_destination"));
            } else {
              var c;
              n =
                (c = l[0]) == null || (c = c.value) == null
                  ? void 0
                  : c.app_destination;
            }
        }
      }
      return n === d;
    }
    function C(e, t) {
      var n = null;
      if (
        t &&
        ((n =
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.call_to_action.value.app_destination.get(
            e,
          ) ||
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.video_data.call_to_action.value.app_destination.get(
            e,
          ) ||
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.photo_data.call_to_action.value.app_destination.get(
            e,
          )),
        n == null)
      ) {
        var o = e.getIn(
          r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.CALL_TO_ACTIONS,
        );
        if (o != null && o.size <= 3) {
          var a;
          n =
            (a = o.first()) == null || (a = a.get("value")) == null
              ? void 0
              : a.get("app_destination");
        }
      }
      return n;
    }
    function b(e) {
      return e === m || e === p || e === d;
    }
    function v(e, t) {
      var n = C(e, t);
      return b(n);
    }
    function S(e, t) {
      if (t == null) return !1;
      var n = r("AdsAdgroupSemanticFields").callToActionType.get(t, e);
      return n === "JOIN_LIVE_VIDEO";
    }
    function R(e, t) {
      return C(e, t) === "INSTAGRAM_LIVE_VIDEO";
    }
    function L(e, t) {
      return C(e, t) === "INSTAGRAM_LIVE_WEBSITE";
    }
    function E(e, t) {
      return C(e, t) === "INSTAGRAM_LIVE_WHATSAPP";
    }
    function k(e) {
      var t = /\/events\/(\d+)/.exec(e);
      if (t) return t[1];
      var n = /\/(\d+)/.exec(e);
      return n ? n[1] : "";
    }
    ((l.getLinkIconImage = _),
      (l.isEventLinkTypeSelected = f),
      (l.isPhoneCallLinkTypeSelected = g),
      (l.getPlayableSourceLinkType = h),
      (l.isWhatsAppLinkTypeSelected = y),
      (l.getCurrentMessagingType = C),
      (l.isMessagingDestination = b),
      (l.isMessagingAppsLinkTypeSelected = v),
      (l.isLiveVideoLinkTypeSelected = S),
      (l.isInstagramLiveVideoLinkTypeSelected = R),
      (l.isInstagramLiveWebsiteLinkTypeSelected = L),
      (l.isInstagramLiveWhatsappLinkTypeSelected = E),
      (l.getEventIDFromLink = k));
  },
  98,
);
