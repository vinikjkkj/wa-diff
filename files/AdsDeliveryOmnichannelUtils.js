__d(
  "AdsDeliveryOmnichannelUtils",
  [
    "AdsApiOmnichannelSupportedStoreConstants",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorDatasetSplitLightweightUtils",
    "filterNulls",
    "immutable",
    "isEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      var n;
      return r(
        "AdsCampaignRecordAccessors",
      ).promoted_object.omnichannel_object.onsite.set(
        r("immutable").List([
          r("immutable").Map(
            ((n = {}), (n.commerce_merchant_settings_id = t), n),
          ),
        ]),
        e,
      );
    }
    function u(e, t) {
      var n,
        o =
          (n = e.promoted_object) == null || (n = n.omnichannel_object) == null
            ? void 0
            : n.app,
        a = o == null ? void 0 : o.get(0);
      if (a == null || a.get("application_id") == null) return e;
      var i = a;
      return (
        (i = i.set("object_store_urls", t)),
        r(
          "AdsCampaignRecordAccessors",
        ).promoted_object.omnichannel_object.app.set(
          r("immutable").List([i]),
          e,
        )
      );
    }
    function c(e, t, n) {
      return o("AdsMutators").chain(
        function (e) {
          return h(e, t);
        },
        function (e) {
          return _(e, t);
        },
        function (e) {
          return d(e, n);
        },
      )(e);
    }
    function d(e, t) {
      return t != null
        ? r("AdsCampaignRecordAccessors").promoted_object.product_set_id.set(
            t,
            e,
          )
        : e;
    }
    function m(e) {
      var t;
      return (t = e.promoted_object) == null ||
        (t = t.omnichannel_object) == null ||
        (t = t.pixel) == null ||
        (t = t.first()) == null
        ? void 0
        : t.toJS().custom_event_type;
    }
    function p(e, t, n) {
      var o;
      return r(
        "AdsCampaignRecordAccessors",
      ).promoted_object.omnichannel_object.pixel.set(
        r("immutable").List([
          r("immutable").Map(
            ((o = {}),
            (o.pixel_id = t),
            (o.custom_event_type = "PURCHASE"),
            (o.pixel_rule = n),
            o),
          ),
        ]),
        e,
      );
    }
    function _(e, t) {
      var n,
        o,
        a =
          ((n = e.promoted_object) == null || (n = n.omnichannel_object) == null
            ? void 0
            : n.pixel) || r("immutable").Map(),
        i = (o = a.get(0)) != null ? o : r("immutable").Map();
      return i.get("pixel_id") == null
        ? e
        : r(
            "AdsCampaignRecordAccessors",
          ).promoted_object.omnichannel_object.pixel.set(
            r("immutable").List([i.set("custom_event_type", t)]),
            e,
          );
    }
    function f(e, t) {
      var n = r("immutable").Map();
      return t.length !== 1
        ? e
        : r(
            "AdsCampaignRecordAccessors",
          ).promoted_object.omnichannel_object.pixel.set(
            r("immutable").List([
              n
                .set("pixel_id", t[0])
                .set("pixel_rule", null)
                .set("custom_event_type", "PURCHASE"),
            ]),
            e,
          );
    }
    function g(e, t) {
      var n = r("immutable").Map();
      return t.length !== 1
        ? e
        : r(
            "AdsCampaignRecordAccessors",
          ).promoted_object.omnichannel_object.app.set(
            r("immutable").List([
              n
                .set("application_id", t[0])
                .set("object_store_urls", [])
                .set("custom_event_type", "PURCHASE"),
            ]),
            e,
          );
    }
    function h(e, t) {
      var n,
        o,
        a =
          ((n = e.promoted_object) == null || (n = n.omnichannel_object) == null
            ? void 0
            : n.app) || r("immutable").Map(),
        i = (o = a.get(0)) != null ? o : r("immutable").Map();
      return i.get("application_id") == null
        ? e
        : r(
            "AdsCampaignRecordAccessors",
          ).promoted_object.omnichannel_object.app.set(
            r("immutable").List([i.set("custom_event_type", t)]),
            e,
          );
    }
    function y(e, t) {
      var n, o;
      if (t == null) return e;
      var a =
          (n = r(
            "AdsCampaignRecordAccessors",
          ).promoted_object.omnichannel_object.offline.get(e)) == null
            ? void 0
            : n.first(),
        i =
          a != null
            ? a
                .set("offline_conversion_data_set_id", { offlineDatasetID: t })
                .set("custom_event_type", "PURCHASE")
            : r("immutable").Map(
                ((o = {}),
                (o.offline_conversion_data_set_id = t),
                (o.custom_event_type = "PURCHASE"),
                o),
              );
      return r(
        "AdsCampaignRecordAccessors",
      ).promoted_object.omnichannel_object.offline.set(
        r("immutable").List([
          i
            .set("offline_conversion_data_set_id", t)
            .set("custom_event_type", "PURCHASE"),
        ]),
        e,
      );
    }
    function C(e, t, n, a) {
      var i, l, s, u;
      if (t == null || n == null) return e;
      var c = a;
      if (c == null) {
        var d,
          m,
          p =
            (d =
              (m = e.promoted_object) == null ||
              (m = m.omnichannel_object) == null
                ? void 0
                : m.pixel) != null
              ? d
              : r("immutable").List(),
          _ = p.get(0),
          f = _ == null ? void 0 : _.get("pixel_id");
        c = typeof f == "string" ? f : null;
      }
      if (c == null) return e;
      var g =
          ((i =
            (l = o(
              "AdsUEditorDatasetSplitLightweightUtils",
            ).findDatasetWithSplitsByTypeAndId("PIXEL", c, n)) == null
              ? void 0
              : l.dataset_splits) != null
            ? i
            : []
          ).length > 0,
        h =
          ((s =
            (u = o(
              "AdsUEditorDatasetSplitLightweightUtils",
            ).findDatasetWithSplitsByTypeAndId("OFFLINE", t, n)) == null
              ? void 0
              : u.dataset_splits) != null
            ? s
            : []
          ).length > 0;
      if (!g && !h) return e;
      var y = o(
          "AdsUEditorDatasetSplitLightweightUtils",
        ).getMatchingWebsiteAndInStoreDatasetSplitIds(c, t, n),
        C = e;
      if (h) {
        var b,
          v,
          S,
          R =
            (b = (
              (v =
                (S = C.promoted_object) == null ||
                (S = S.omnichannel_object) == null
                  ? void 0
                  : S.offline) != null
                ? v
                : r("immutable").List()
            ).get(0)) != null
              ? b
              : r("immutable").Map();
        C = r(
          "AdsCampaignRecordAccessors",
        ).promoted_object.omnichannel_object.offline.set(
          r("immutable").List([
            R.set(
              "dataset_split_ids",
              y != null ? [y.offlineDatasetSplitId] : [],
            ),
          ]),
          C,
        );
      }
      if (g) {
        var L,
          E,
          k,
          I =
            (L = (
              (E =
                (k = C.promoted_object) == null ||
                (k = k.omnichannel_object) == null
                  ? void 0
                  : k.pixel) != null
                ? E
                : r("immutable").List()
            ).get(0)) != null
              ? L
              : r("immutable").Map();
        C = r(
          "AdsCampaignRecordAccessors",
        ).promoted_object.omnichannel_object.pixel.set(
          r("immutable").List([
            I.set(
              "dataset_split_ids",
              y != null ? [y.pixelDatasetSplitId] : [],
            ),
          ]),
          C,
        );
      }
      return C;
    }
    function b(e, t, n) {
      var o, a;
      if (t == null) return e;
      var i =
          (o = r(
            "AdsCampaignRecordAccessors",
          ).promoted_object.omnichannel_object.app.get(e)) == null
            ? void 0
            : o.first(),
        l =
          i != null
            ? i
                .set("application_id", t)
                .set("custom_event_type", "PURCHASE")
                .set("object_store_urls", n != null ? n : [])
            : r("immutable").Map(
                ((a = {}),
                (a.application_id = t),
                (a.custom_event_type = "PURCHASE"),
                (a.object_store_urls = n != null ? n : []),
                a),
              );
      return r(
        "AdsCampaignRecordAccessors",
      ).promoted_object.omnichannel_object.app.set(r("immutable").List([l]), e);
    }
    function v(e) {
      return e.intersect(
        Object.values(r("AdsApiOmnichannelSupportedStoreConstants")).map(
          function (e) {
            return String(e);
          },
        ),
      );
    }
    function S(e) {
      var t, n, r, o, a;
      return ((t = e.promoted_object) == null
        ? void 0
        : t.omnichannel_object) == null ||
        ((n = e.promoted_object) == null || (n = n.omnichannel_object) == null
          ? void 0
          : n.onsite) != null
        ? !1
        : ((r = e.promoted_object) == null ||
          (r = r.omnichannel_object) == null ||
          (r = r.pixel) == null ||
          (r = r.at(0)) == null
            ? void 0
            : r.pixel_id) != null &&
            ((o = e.promoted_object) == null ||
            (o = o.omnichannel_object) == null ||
            (o = o.app) == null ||
            (o = o.at(0)) == null
              ? void 0
              : o.application_id) != null &&
            ((a = e.promoted_object) == null ||
            (a = a.omnichannel_object) == null ||
            (a = a.offline) == null ||
            (a = a.at(0)) == null
              ? void 0
              : a.offline_conversion_data_set_id) != null;
    }
    function R(e) {
      var t, n, r;
      return (
        ((t = e.promoted_object) == null ? void 0 : t.omnichannel_object) !=
          null &&
        ((n = e.promoted_object) == null ||
        (n = n.omnichannel_object) == null ||
        (n = n.onsite) == null ||
        (n = n.at(0)) == null
          ? void 0
          : n.onboarding_state) == null &&
        ((r = e.promoted_object) == null ||
        (r = r.omnichannel_object) == null ||
        (r = r.offline) == null ||
        (r = r.at(0)) == null
          ? void 0
          : r.offline_conversion_data_set_id) == null
      );
    }
    function L(t, n) {
      var o;
      if (t == null) return null;
      var a = r("filterNulls")(
        Array.from(
          n
            .map(function (e) {
              return e.mini_shop_storefront;
            })
            .filter(function (e) {
              var n;
              return (
                (e == null || (n = e.commerce_merchant_settings) == null
                  ? void 0
                  : n.id) === t
              );
            })
            .values(),
        ),
      );
      return (e || (e = r("isEmpty")))(a)
        ? null
        : (o = a[0]) == null || (o = o.page) == null
          ? void 0
          : o.id;
    }
    function E(e, t) {
      var n = e != null ? e : "",
        r = t != null ? t : "",
        o = n !== "" && r !== "",
        a = n !== r;
      return !(o && a);
    }
    ((l.setCommerceMerchantSettingsForOmnichannelObject = s),
      (l.setObjectStoreUrlsForOmnichannelAppObject = u),
      (l.setEventTypeForOmnichannelPixelAndAppObject = c),
      (l.getEventType = m),
      (l.setOmnichannelPixelObjectFromCustomConversion = p),
      (l.setEventTypeForOmnichannelPixelObject = _),
      (l.setDefaultPixelForOmnichannelOnsitePixelObject = f),
      (l.setDefaultAppForOmnichannelOnsiteAppObject = g),
      (l.setEventTypeForOmnichannelAppObject = h),
      (l.setOfflineObjectForOmnichannelObject = y),
      (l.setDatasetSplitIdsForOmnichannelObjects = C),
      (l.setAppObjectForOmnichannelObject = b),
      (l.filterAvailableAppPlatforms = v),
      (l.canUseOmnichannelForWebsiteAppAndInStore = S),
      (l.canUseOmnichannelForWebsiteAndApp = R),
      (l.getPageConnectedToCMS = L),
      (l.shouldShowUnifiedDeepLinkField = E));
  },
  98,
);
