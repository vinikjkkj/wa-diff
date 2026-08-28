__d(
  "AdsUEditorAdgroupShopAdsBundle",
  [
    "fbt",
    "AdsAdgroupRecordAccessors",
    "AdsClientAdAssetFeedSpecFields",
    "AdsMutators",
    "ShopAdsBundleComponent",
    "immutable",
    "isEmptyObject",
    "objectValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        isOptedIn: function (t) {
          var e;
          return (e = t.creative) == null || (e = e.asset_feed_spec) == null
            ? void 0
            : e.reasons_to_shop;
        },
        toggle: function (t, n) {
          switch (n) {
            case !0:
              return r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.reasons_to_shop.set(!0, t);
            case !1:
              return o("AdsMutators").chain(
                r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
                  .reasons_to_shop.delete,
                function (e) {
                  var t, n;
                  return ((t = e.creative) == null
                    ? void 0
                    : t.asset_feed_spec) != null &&
                    (n = e.creative) != null &&
                    n.asset_feed_spec.isEmpty()
                    ? r(
                        "AdsAdgroupRecordAccessors",
                      ).creative.asset_feed_spec.delete(e)
                    : e;
                },
              )(t);
          }
        },
        getLabel: function () {
          return s._(/*BTDS*/ "Reasons to shop");
        },
        getDescription: function () {
          return s._(
            /*BTDS*/ 'Automatically add information like "Free shipping" or an existing offer to your ad.',
          );
        },
      },
      u = {
        isOptedIn: function (t) {
          var e;
          return (e = t.creative) == null ||
            (e = e.object_story_spec) == null ||
            (e = e.template_data) == null
            ? void 0
            : e.automated_product_tags;
        },
        toggle: function (t, n) {
          switch (n) {
            case !0:
              return r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.template_data.automated_product_tags.set(
                !0,
                t,
              );
            case !1:
              return r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.template_data.automated_product_tags.delete(
                t,
              );
          }
        },
        getLabel: function () {
          return s._(/*BTDS*/ "Product tags");
        },
        getDescription: function () {
          return s._(/*BTDS*/ "Automatically tag products in your ad.");
        },
      },
      c = r("objectValues")(r("ShopAdsBundleComponent")).map(function (e) {
        return d(e);
      });
    function d(t) {
      switch (t) {
        case "AUTOMATED_PRODUCT_TAGS":
          return u;
        case "REASONS_TO_SHOP":
          return e;
        default: {
          var n = new Error("Unknown ShopAdsBundleComponentType: " + t);
          throw (n.stack, n);
        }
      }
    }
    function m(e) {
      var t;
      if (
        ((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.shops_bundle) === !0
      )
        return { mode: "automatic" };
      var n = r("immutable").List(
        r("objectValues")(r("ShopAdsBundleComponent")).map(function (t) {
          return { name: t, enabled: d(t).isOptedIn(e) || !1 };
        }),
      );
      return { mode: "manual", components: n };
    }
    function p(e) {
      var t = m(e);
      return t.mode === "automatic"
        ? !0
        : t.components
            .filter(function (e) {
              return e.enabled;
            })
            .count() > 0;
    }
    var _ = ["AUTOMATED_PRODUCT_TAGS", "REASONS_TO_SHOP"];
    function f(e, t) {
      return e == null || e[t] == null
        ? !1
        : r("AdsClientAdAssetFeedSpecFields").every(function (n) {
            var o = e[n];
            return n === t
              ? o
              : o instanceof Array
                ? o.length === 0
                : o instanceof Object && r("isEmptyObject")(o)
                  ? !0
                  : o == null;
          });
    }
    function g(e) {
      var t, n;
      if (((t = e.creative) == null ? void 0 : t.asset_feed_spec) === null)
        return !1;
      var r = (n = e.creative) == null ? void 0 : n.asset_feed_spec,
        o = f(r, "shops_bundle"),
        a = f(r, "reasons_to_shop");
      return o || a;
    }
    var h = { mode: "automatic" },
      y = {
        mode: "manual",
        components: r("immutable").List([
          { name: "AUTOMATED_PRODUCT_TAGS", enabled: !1 },
          { name: "REASONS_TO_SHOP", enabled: !1 },
        ]),
      };
    ((l.ShopAdsBundleComponents = c),
      (l.getComponentFromType = d),
      (l.getEditorState = m),
      (l.isShopAdsBundle = p),
      (l.shopAdsBundleComponentList = _),
      (l.isAdgroupUsingOnlyShopAdsBundleAssetFeedFromRecord = g),
      (l.SHOP_ADS_BUNDLE_DEFAULT_EDITOR_STATE = h),
      (l.SHOP_ADS_BUNDLE_DISBLED_EDITOR_STATE = y));
  },
  226,
);
