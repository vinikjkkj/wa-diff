__d(
  "AdsDLOLanguageUtils",
  [
    "invariant",
    "AdsAPIAdAssetFeedFields",
    "AdsAPITargetFields",
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedFieldToRuleLabelMapping",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedLanguageMappingsStatic",
    "AdsAssetFeedUtils",
    "AdsDLOFieldToAdlabelsMapping",
    "AdsDLOSupportedTranslationDirections.experimental",
    "AdsLanguageAssetDialects.experimental",
    "FBLogger",
    "firstx",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return !o("AdsAssetFeedUtils").isAAAFromRecord(e) &&
        !o("AdsAssetFeedUtils").hasLanguageCustomizationFromRecord(e)
        ? 0
        : c(e).size;
    }
    function u(e) {
      var t;
      return e instanceof r("immutable").Map
        ? e.getIn(["customization_spec", r("AdsAPITargetFields").LOCALES])
        : (t = e.customization_spec) == null
          ? void 0
          : t.locales;
    }
    function c(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.asset_customization_rules;
      if (!n) return r("immutable").List();
      var o = p(e),
        a = n.reduce(function (e, t) {
          var n = u(t);
          if (n == null) return e;
          var a = r("firstx")(n),
            i = r("AdsAssetFeedLanguageMappingsStatic")
              .locales_to_language_codes[a];
          return i === void 0 || i === o ? e : e.add(i);
        }, new Set());
      return r("immutable").List(a);
    }
    function d(e, t) {
      var n = [],
        o = !1;
      return (
        t.forEach(function (t) {
          if (!(t.path == null || t.path.length < 4)) {
            var a = e.getIn(t.path.slice(0, 4)) || r("immutable").Map(),
              i = t.path ? t.path[2] : null;
            if (i != null) {
              var l = Object.keys(r("AdsAPIAdAssetFeedFields")).find(
                function (e) {
                  return r("AdsAPIAdAssetFeedFields")[e] === i;
                },
              );
              if (l != null) {
                i = r("AdsAPIAdAssetFeedFields")[l];
                var s =
                  a instanceof r("immutable").Map
                    ? a.get(r("AdsDLOFieldToAdlabelsMapping").get(i))
                    : null;
                if (s instanceof r("immutable").List && s.size) {
                  var u = s.first(),
                    c = u instanceof r("immutable").Map ? u.get("name") : null;
                  if (c == null) return;
                  var d = R(e, c, i),
                    m = d.languageCodes,
                    p = d.primaryLanguageHasLabel;
                  (m.forEach(function (e) {
                    n.push(e);
                  }),
                    p === !0 && (o = !0));
                } else o = !0;
              }
            }
          }
        }),
        {
          languagesWithErrors: r("immutable").Set(n),
          unlabeledPrimaryAssetHasErrors: o,
        }
      );
    }
    function m(e) {
      return e instanceof r("immutable").Map
        ? e.get("is_default")
        : e.is_default;
    }
    function p(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.asset_customization_rules;
      if (!n) return null;
      var o = n.find(function (e) {
        return m(e) === !0;
      });
      if (o === void 0) return null;
      var a = u(o);
      if (a == null) return null;
      var i = r("firstx")(a),
        l = r("AdsAssetFeedLanguageMappingsStatic").locales_to_language_codes[
          i
        ];
      return l == null ? null : l;
    }
    function _(e) {
      var t = p(e);
      return t != null
        ? r("AdsLanguageAssetDialects.experimental").dialects_to_locales[t]
        : null;
    }
    function f(e, t) {
      var n = r(
        "AdsDLOSupportedTranslationDirections.experimental",
      ).supportedTranslationDirections.get(e);
      return n != null && Array.isArray(n) ? n.includes(t) : !1;
    }
    function g(e, t, n) {
      var o,
        a =
          (o = e.creative) == null || (o = o.asset_feed_spec) == null
            ? void 0
            : o.asset_customization_rules;
      if (a == null)
        throw r("FBLogger")("ads_dynamic_language_optimization").mustfixThrow(
          "assetCustomizationRules should not be null at this point",
        );
      return a.reduce(function (e, r) {
        var o = r.getIn([t, "name"]);
        if (o !== n) return e;
        var a = S(r);
        return a != null ? e.add(a) : e;
      }, r("immutable").Set());
    }
    function h(e, t) {
      return e === void 0
        ? !1
        : (e instanceof r("immutable").List || s(0, 4530),
          e.findIndex(function (e) {
            return (
              e instanceof r("immutable").Map || s(0, 1235),
              e.get("name") === t
            );
          }) !== -1);
    }
    function y(e, t) {
      return !o("AdsAssetFeedUtils").isDLOAdgroupFromRecord(e) || t == null
        ? e
        : o("AdsAssetFeedUtils").hasSingleVideoFormat(e)
          ? C(e, "videos", "adlabels", t)
          : o("AdsAssetFeedUtils").hasSingleImageFormat(e)
            ? C(e, "images", "adlabels", t)
            : e;
    }
    function C(e, t, n, a) {
      var i,
        l,
        u = (i = e.creative) == null ? void 0 : i.asset_feed_spec;
      if (u == null) return e;
      var c = u.asset_customization_rules;
      if (c == null) return e;
      var d = o("AdsAssetFeedFieldUtils").getDefaultIndexForAsset(e, t),
        m =
          (l = e.creative) == null || (l = l.asset_feed_spec) == null
            ? void 0
            : l.get(t);
      if (!m) return e;
      var p = m.get(d);
      if (!p || !(p instanceof r("immutable").Map)) return e;
      var _ = p.get("adlabels");
      if (_ != null && !r("immutable").is(_, r("immutable").List())) return e;
      var f = p.set(
          n,
          r("immutable").List.of(r("immutable").Map().set("name", a)),
        ),
        g = r("immutable").Map().set("name", a),
        h = r("AdsAssetFeedFieldToRuleLabelMapping").get(t);
      if (h == null) return e;
      var y = c.map(function (e) {
          var t = e.get(h);
          if (t == null) return e.set(h, g);
          t instanceof r("immutable").Map || s(0, 15031);
          var n = t.get("name");
          if (typeof n != "string") return e.set(h, g);
          var o = r(
              "AdsAssetFeedLanguageMappingsStatic",
            ).language_codes_to_locales,
            a = o[n];
          return a == null ? e.set(h, g) : e;
        }),
        C = u.set(t, m.set(d, f)).set("asset_customization_rules", y);
      return r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.set(C, e);
    }
    function b(e, t, n) {
      var o,
        a =
          (o = e.creative) == null || (o = o.asset_feed_spec) == null
            ? void 0
            : o.asset_customization_rules;
      if (a == null) return null;
      var i = a.find(function (e) {
        var n = e.getIn([
            "customization_spec",
            r("AdsAPITargetFields").LOCALES,
          ]),
          o = e.getIn([
            "customization_spec",
            r("AdsAPITargetFields").PUBLISHER_PLATFORMS,
          ]);
        if (n == null || o != null) return !1;
        var a = r("firstx")(n);
        return (
          r("AdsAssetFeedLanguageMappingsStatic").locales_to_language_codes[
            a
          ] === t
        );
      });
      if (i === void 0) return null;
      var l = i.get(n);
      return l === void 0
        ? null
        : (r("immutable").Map.isMap(l) || s(0, 13282), l.get("name"));
    }
    function v(e, t, n) {
      return b(e, t, n == null ? "body_label" : n);
    }
    function S(e) {
      var t = e.getIn(["customization_spec", r("AdsAPITargetFields").LOCALES]);
      return t == null
        ? null
        : r("AdsAssetFeedLanguageMappingsStatic").locales_to_language_codes[
            r("firstx")(t)
          ];
    }
    function R(e, t, n) {
      var o,
        a =
          e == null ||
          (o = e.creative) == null ||
          (o = o.asset_feed_spec) == null
            ? void 0
            : o.asset_customization_rules,
        i = [],
        l = !1;
      if (a == null) return { languageCodes: i, primaryLanguageHasLabel: l };
      if (n === "videos" || n === "images") {
        var u = p(e);
        return (
          u != null && (i.push(u), (l = !0)),
          { languageCodes: i, primaryLanguageHasLabel: l }
        );
      }
      return (
        a.forEach(function (e) {
          e instanceof r("immutable").Map || s(0, 13526);
          var o = r("AdsAssetFeedFieldToRuleLabelMapping").get(n);
          if (o != null) {
            var a = e.get(o);
            if (a != null && a instanceof r("immutable").Map) {
              var u = a.get("name"),
                c = u != null ? u == t : !1;
              if (c) {
                var d = e.getIn([
                  "customization_spec",
                  r("AdsAPITargetFields").LOCALES,
                ]);
                if (d != null) {
                  var m = r("firstx")(d),
                    p = r("AdsAssetFeedLanguageMappingsStatic")
                      .locales_to_language_codes[m];
                  p != null &&
                    (i.push(p), e.get("is_default") === !0 && (l = !0));
                }
              }
            }
          }
        }),
        { languageCodes: i, primaryLanguageHasLabel: l }
      );
    }
    function L(e) {
      var t = e.get("image_label"),
        n = e.get("video_label"),
        r = [];
      return (
        t != null && r.push("image_label"),
        n != null && r.push("video_label"),
        r
      );
    }
    function E(e, t) {
      if (!r("gkx")("22138") || t) return e;
      return (
        e.map(function (e) {
          var t = e;
          switch (e.assetFeedField) {
            case "bodies":
              t.getDefaultValue = n("Sample string for body");
              break;
            case "titles":
              t.getDefaultValue = n("Sample string for title");
              break;
            case "descriptions":
              t.getDefaultValue = n("Sample string for description");
              break;
            case "link_urls":
              t.getDefaultValue = n("https://facebook.com");
              break;
          }
          return t;
        }),
        e
      );
      function n(e) {
        return function (t) {
          return e;
        };
      }
    }
    ((l.getAddedLanguagesCountFromAdgroup = e),
      (l.getAddedLanguaguesFromAdgroup = c),
      (l.getLanguagesWithErrors = d),
      (l.getPrimaryLanguageFromAdgroup = p),
      (l.getPrimaryLocaleFromAdgroup = _),
      (l.isAutoTranslationAvailable = f),
      (l._getLanguagesByAssetLabel = g),
      (l._doesLabelExistInAssetValue = h),
      (l.setLanguageLabelForUnlabeledMediaAsset = y),
      (l._setLanguageLabelForUnlabeledAsset = C),
      (l.languageCodeToLabelForAsset = b),
      (l._getAdLabelForLanguage = v),
      (l.getLanguageCodeForRule = S),
      (l._getLanguageCodesForLabelWithError = R),
      (l.getMediaLabelsForRule = L),
      (l.getDLODevDefaultAssetPlugin = E));
  },
  98,
);
