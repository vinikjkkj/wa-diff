__d(
  "AdsArDataContainerDataLoader",
  [
    "AdsArDataContainer",
    "AdsArDynamicEffect",
    "AdsArEffectAttachment",
    "AsyncTypedRequest",
    "FBLogger",
    "ThisControllerNoLongerExists",
    "ads-lib-urllib",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.getEffectAttachment();
      if (t != null) {
        var n =
            t.ctaUri != null ? r("ads-lib-urllib").normalize(t.ctaUri) : null,
          o = e.dynamicEffect;
        return {
          effect_id: t.effectID,
          uri: n,
          cta: e.ctaType,
          feed_unit_overlay_text: e.feedUnitOverlayTextType,
          camera_mode: e.cameraMode,
          camera_facing: e.cameraFacing,
          container_effect_enum: o == null ? void 0 : o.containerEffectEnum,
          container_effect_asset_id: o == null ? void 0 : o.assetID,
          container_effect_json_asset: o == null ? void 0 : o.jsonAsset,
        };
      }
      return {};
    }
    function s(e) {
      return new (r("AdsArDynamicEffect"))({
        containerEffectEnum:
          e.container_effect_enum == null ? 0 : e.container_effect_enum,
        assetID: e.asset_id,
        jsonAsset: e.json_asset,
      });
    }
    function u(e) {
      var t = new (r("AdsArDataContainer"))(),
        n = e.data;
      if (n == null) return t;
      var o = n.effect_list;
      if (o.length > 0) {
        var a = o[0],
          i = a.effect_id;
        i != null &&
          (t = t.setEffectAttachment(
            new (r("AdsArEffectAttachment"))({ effectID: i, ctaUri: a.uri }),
          ));
        var l = a.cta;
        l != null && (t = t.set("ctaType", l));
      }
      var u = n.dynmic_effect,
        c = u == null ? null : s(u);
      return (
        (t = t
          .set("feedUnitOverlayTextType", n.feed_unit_overlay_text)
          .set("isPublished", n.is_published)
          .set("cameraMode", n.camera_mode)
          .set("cameraFacing", n.camera_facing)
          .set("dynamicEffect", c)),
        t
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = /^\d+$/.test(e);
          if (!t) {
            var n = new Error(
              "Trying to network fetch local dataContainerID: " + e,
            );
            throw (n.stack, n);
          }
          var o = "",
            a = new (r("AsyncTypedRequest"))(o);
          try {
            var i = yield a.promisePayload();
            return u(i);
          } catch (t) {
            var l = r("getErrorSafe")(t);
            throw (
              r("FBLogger")("ar_ads_creation_frontend")
                .catching(l)
                .warn("Failed to fetch Data Container(%s)", e),
              l
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = o("ThisControllerNoLongerExists")
              .__DEADBUILDER__("b7gemrir5")
              .getURI(),
            i = new (r("AsyncTypedRequest"))(a).setData(
              babelHelpers.extends({ page_id: t }, e(n)),
            );
          try {
            var l = yield i.promisePayload();
            return l.id;
          } catch (e) {
            var s = r("getErrorSafe")(e);
            throw (
              r("FBLogger")("ar_ads_creation_frontend")
                .catching(s)
                .warn("Page(%s) failed to create Data Container", t),
              s
            );
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i = o("ThisControllerNoLongerExists")
              .__DEADBUILDER__("3i5iid3s6")
              .getURI(),
            l = new (r("AsyncTypedRequest"))(i).setData(
              babelHelpers.extends({ page_id: t, data_container_id: n }, e(a)),
            );
          try {
            var s = yield l.promisePayload();
            return s.id;
          } catch (e) {
            var u = r("getErrorSafe")(e);
            throw (
              r("FBLogger")("ar_ads_creation_frontend")
                .catching(u)
                .warn("Page(%s) failed to update Data Container(%s)", t, n),
              u
            );
          }
        })),
        f.apply(this, arguments)
      );
    }
    ((l.getDataContainer = c),
      (l.createDataContainer = m),
      (l.updateDataContainer = _));
  },
  98,
);
