__d(
  "AdsDLOAdgroupFieldMutators",
  [
    "invariant",
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedFieldToRuleLabelMapping",
    "AdsDLOAdgroupFieldUtils",
    "AdsDLOAssetFeedAutoTranslationStatus",
    "AdsDLOFieldToAdlabelsMapping",
    "AdsDLOLanguageMutators",
    "AdsDLOLanguageUtils",
    "FBLogger",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n) {
      var r = o("AdsDLOLanguageUtils").languageCodeToLabelForAsset(
        e,
        t,
        "link_url_label",
      );
      if (r == null) return e;
      var a = v(e, "link_urls", "deeplink_url", r, n),
        i = o("AdsDLOLanguageUtils").getPrimaryLanguageFromAdgroup(e),
        l = o("AdsDLOAdgroupFieldUtils").getLinkUrlValue(
          e,
          i,
          "website_url",
        ).fieldValue,
        s = o("AdsDLOLanguageUtils").getAddedLanguaguesFromAdgroup(a);
      return (
        s.forEach(function (e) {
          a = d(a, e, "website_url", l || "");
        }),
        a
      );
    }
    function u(e, t, n) {
      var r = o("AdsDLOLanguageUtils").languageCodeToLabelForAsset(
        e,
        t,
        "description_label",
      );
      return r == null ? e : v(e, "descriptions", "text", r, n);
    }
    function c(e, t, n) {
      var r = o("AdsDLOLanguageUtils").languageCodeToLabelForAsset(
        e,
        t,
        "body_label",
      );
      return r == null ? e : v(e, "bodies", "text", r, n);
    }
    function d(e, t, n, r) {
      var a = o("AdsDLOLanguageUtils").languageCodeToLabelForAsset(
        e,
        t,
        "link_url_label",
      );
      return a == null ? e : v(e, "link_urls", n, a, r);
    }
    function m(e, t, n) {
      var r = o("AdsDLOLanguageUtils").languageCodeToLabelForAsset(
        e,
        t,
        "title_label",
      );
      return r == null ? e : v(e, "titles", "text", r, n);
    }
    function p(e, t, n, a) {
      var i = r("AdsAssetFeedFieldToRuleLabelMapping").get(t);
      if (i == null) return e;
      var l = o("AdsDLOLanguageUtils").languageCodeToLabelForAsset(e, n, i);
      return l == null ? e : v(e, t, "translation_confidence", l, a);
    }
    function _(e, t, n, a) {
      var i,
        l = (i = e.creative) == null ? void 0 : i.asset_feed_spec;
      if (l == null)
        throw r("FBLogger")("ads_dynamic_language_optimization").mustfixThrow(
          "assetFeedSpec shouldn't be null",
        );
      var s = l.get(t);
      if (s === null)
        throw r("FBLogger")("ads_dynamic_language_optimization").mustfixThrow(
          "asset shouldn't be null",
        );
      var u = r("AdsAssetFeedFieldToRuleLabelMapping").get(t);
      if (u == null)
        throw r("FBLogger")("ads_dynamic_language_optimization").mustfixThrow(
          "customizationRuleFieldType shouldn't be null",
        );
      var c = l.asset_customization_rules;
      if (c == null)
        throw r("FBLogger")("ads_dynamic_language_optimization").mustfixThrow(
          "assetCustomizationRules shouldn't be null",
        );
      var d = c.some(function (e) {
          return e.getIn([u, "name"]) === a;
        }),
        m = o("AdsDLOAdgroupFieldUtils").getAssetEntryForLabel(
          e,
          t,
          n,
          a,
        ).index;
      return (
        m !== null && !d && (s = s.remove(m)),
        r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.set(
          l.set(t, s),
          e,
        )
      );
    }
    function f(e, t, n) {
      var o,
        a = e,
        i =
          ((o = a.creative) == null || (o = o.asset_feed_spec) == null
            ? void 0
            : o.autotranslate) || r("immutable").List();
      return (
        i.includes(t) &&
          ((i = i.delete(i.indexOf(t))),
          (a = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.autotranslate.set(i, a))),
        { newAdgroup: a, newAutoTranslationStatus: n.delete(t) }
      );
    }
    function g(e, t, n, a) {
      n != null || a != null || s(0, 4532);
      var i, l, u;
      n != null
        ? ((i = n), (l = "hash"), (u = "url"))
        : ((i = r("nullthrows")(a)), (l = "url"), (u = "hash"));
      var c = o("AdsDLOLanguageUtils").languageCodeToLabelForAsset(
          e,
          t,
          "image_label",
        ),
        d = o("AdsDLOLanguageUtils").getPrimaryLanguageFromAdgroup(e),
        m =
          d != null
            ? o("AdsDLOLanguageUtils").languageCodeToLabelForAsset(
                e,
                d,
                "image_label",
              )
            : null;
      c != null && c == m && (c = null);
      var p = e;
      if (
        c == null &&
        ((p = o("AdsDLOLanguageMutators").addRuleLabelForLanguage(
          e,
          "image_label",
          t,
          t,
        )),
        (c = t),
        d === t)
      ) {
        var _ = o("AdsDLOLanguageUtils").getAddedLanguaguesFromAdgroup(e);
        _.forEach(function (n) {
          var r = o("AdsDLOLanguageUtils").languageCodeToLabelForAsset(
            e,
            n,
            "image_label",
          );
          r == null &&
            (p = o("AdsDLOLanguageMutators").addRuleLabelForLanguage(
              p,
              "image_label",
              n,
              t,
            ));
        });
      }
      return ((p = v(p, "images", l, c, i)), v(p, "images", u, c, null));
    }
    function h(e, t, n) {
      var a = o("AdsDLOLanguageUtils").languageCodeToLabelForAsset(
          e,
          t,
          "video_label",
        ),
        i = e;
      return (
        a == null &&
          ((i = o("AdsDLOLanguageMutators").addRuleLabelForLanguage(
            e,
            "video_label",
            t,
            t,
          )),
          (a = t)),
        v(i, "videos", "caption_ids", a, r("immutable").List(n))
      );
    }
    function y(e, t, n, r) {
      var a = o("AdsDLOLanguageUtils").languageCodeToLabelForAsset(
          e,
          t,
          "video_label",
        ),
        i = o("AdsDLOLanguageUtils").getPrimaryLanguageFromAdgroup(e),
        l =
          i != null
            ? o("AdsDLOLanguageUtils").languageCodeToLabelForAsset(
                e,
                i,
                "video_label",
              )
            : null;
      a != null && a == l && (a = null);
      var s = e;
      if (
        a == null &&
        ((s = o("AdsDLOLanguageMutators").addRuleLabelForLanguage(
          e,
          "video_label",
          t,
          t,
        )),
        (a = t),
        i === t)
      ) {
        var u = o("AdsDLOLanguageUtils").getAddedLanguaguesFromAdgroup(e);
        u.forEach(function (n) {
          var r = o("AdsDLOLanguageUtils").languageCodeToLabelForAsset(
            e,
            n,
            "video_label",
          );
          r == null &&
            (s = o("AdsDLOLanguageMutators").addRuleLabelForLanguage(
              s,
              "video_label",
              n,
              t,
            ));
        });
      }
      return (
        (s = v(s, "videos", "video_id", a, n)),
        v(s, "videos", "thumbnail_url", a, r)
      );
    }
    function C(e, t, n, r) {
      var a = o("AdsDLOLanguageUtils").languageCodeToLabelForAsset(
          e,
          t,
          "video_label",
        ),
        i = e;
      return (
        a == null &&
          ((i = o("AdsDLOLanguageMutators").addRuleLabelForLanguage(
            e,
            "video_label",
            t,
            t,
          )),
          (a = t)),
        (i = v(i, "videos", "thumbnail_source", a, r)),
        v(i, "videos", "thumbnail_url", a, n)
      );
    }
    function b(e, t, n) {
      var o,
        a = e,
        i = n,
        l =
          ((o = a.creative) == null || (o = o.asset_feed_spec) == null
            ? void 0
            : o.autotranslate) || r("immutable").List();
      if (l.includes(t)) {
        ((l = l.delete(l.indexOf(t))),
          (a = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.autotranslate.set(l, a)));
        var s = i.get(t);
        s !==
          r("AdsDLOAssetFeedAutoTranslationStatus").TRANSLATED_AND_OUTDATED &&
          (i = i.set(
            t,
            r("AdsDLOAssetFeedAutoTranslationStatus").TRANSLATED_AND_ALTERED,
          ));
      }
      return { newAdgroup: a, newAutoTranslationStatus: i };
    }
    function v(e, t, n, a, i) {
      var l,
        u = (l = e.creative) == null ? void 0 : l.asset_feed_spec;
      u != null || s(0, 13422);
      var c = u.get(t),
        d = -1,
        m = r("immutable").Map();
      return (
        c == null
          ? (c = r("immutable").List())
          : (d = o("AdsDLOAdgroupFieldUtils").getAssetEntryForLabel(
              e,
              t,
              n,
              a,
            ).index),
        d === -1 || d == null
          ? ((m = m.set(
              r("AdsDLOFieldToAdlabelsMapping").get(t),
              r("immutable").List([r("immutable").Map().set("name", a)]),
            )),
            (m = i != null ? m.set(n, i) : m.remove(n)),
            (c = c.push(m)))
          : ((m = i != null ? c.get(d, m).set(n, i) : c.get(d, m).remove(n)),
            (c = c.set(d, m))),
        r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.set(
          u.set(t, c),
          e,
        )
      );
    }
    ((l.setDeepLink = e),
      (l.setLinkDescription = u),
      (l.setMessage = c),
      (l.setLinkURL = d),
      (l.setHeadline = m),
      (l.setTranslationConfidence = p),
      (l.deduplicateAsset = _),
      (l.removeAutoTranslatedLanguage = f),
      (l.setImage = g),
      (l.setVideoCaptionIDs = h),
      (l.setVideoID = y),
      (l.setVideoThumbnailURL = C),
      (l.updateAlteredAutoTranslatedLanguage = b));
  },
  98,
);
