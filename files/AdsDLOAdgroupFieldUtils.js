__d(
  "AdsDLOAdgroupFieldUtils",
  [
    "invariant",
    "AdsAssetFeedFieldToRuleLabelMapping",
    "AdsAssetFeedFieldUtils",
    "AdsDLOFieldToAdlabelsMapping",
    "AdsDLOLanguageUtils",
    "AdsImageIDUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      var n,
        o = (n = e.creative) == null ? void 0 : n.asset_feed_spec;
      if (o == null) return -1;
      var a = o.get(t);
      return a == null
        ? -1
        : (r("immutable").List.isList(a) || s(0, 13363),
          a.findIndex(function (e) {
            var n = r("AdsDLOFieldToAdlabelsMapping").get(t);
            return e.get(n) == null;
          }));
    }
    function u(e, t) {
      return m(e, t, null);
    }
    function c(e, t, n, o) {
      var a;
      if (o === -1) return null;
      var i = (a = e.creative) == null ? void 0 : a.asset_feed_spec;
      if (i == null) return null;
      var l = i.get(t);
      return l == null
        ? null
        : (r("immutable").List.isList(l) || s(0, 13363), l.getIn([o, n]));
    }
    function d(e, t, n, o) {
      var a,
        i = (a = e.creative) == null ? void 0 : a.asset_feed_spec;
      if (i == null) return { fieldValue: null, index: null };
      var l = i.get(t);
      if (l == null) return { fieldValue: null, index: null };
      r("immutable").List.isList(l) || s(0, 13363);
      var u = r("AdsDLOFieldToAdlabelsMapping").get(t),
        c = l.findEntry(function (e) {
          var t = e.get(u);
          return t == null
            ? !1
            : t.some(function (e) {
                return e.get("name") === o;
              });
        });
      if (c == null) return { index: null, fieldValue: null };
      var d = c[0],
        m = c[1],
        p = m && m.get(n) != null ? m.get(n) : null;
      return { fieldValue: p, index: d };
    }
    function m(e, t, n) {
      var o,
        a = (o = e.creative) == null ? void 0 : o.asset_feed_spec;
      if (a == null) return [];
      var i = a.get(t);
      if (i == null) return [];
      r("immutable").List.isList(i) || s(0, 13363);
      var l = [],
        u = r("AdsDLOFieldToAdlabelsMapping").get(t);
      return (
        i.forEach(function (e, t) {
          var r;
          ((n == null && e.get(u) == null) ||
            ((r = e.get(u)) != null &&
              r.some(function (e) {
                return e.get("name") === n;
              }))) &&
            l.push(t);
        }),
        l
      );
    }
    function p(e, t, n, o) {
      var a,
        i = (a = e.creative) == null ? void 0 : a.asset_feed_spec;
      if (i == null) return [];
      var l = i.get(t);
      if (l == null) return [];
      r("immutable").List.isList(l) || s(0, 13363);
      var u = r("AdsDLOFieldToAdlabelsMapping").get(t),
        c = [];
      return (
        l.forEach(function (e, t) {
          var r;
          if (
            (r = e.get(u)) != null &&
            r.some(function (e) {
              return e.get("name") === o;
            })
          ) {
            var a = e == null ? void 0 : e.get(n, null);
            c.push({ index: t, fieldValue: a });
          }
        }),
        c
      );
    }
    function _(t, n) {
      if (n == null) {
        var r = e(t, "titles"),
          a = c(t, "titles", "text", r);
        return { index: r, fieldValue: a };
      }
      var i = o("AdsDLOLanguageUtils").languageCodeToLabelForAsset(
        t,
        n,
        "title_label",
      );
      return i == null
        ? { index: null, fieldValue: null }
        : d(t, "titles", "text", i);
    }
    function f(e, t) {
      if (t == null) {
        var n = u(e, "titles");
        return n.map(function (t) {
          var n = c(e, "titles", "text", t);
          return { index: t, fieldValue: n };
        });
      }
      var r = o("AdsDLOLanguageUtils").languageCodeToLabelForAsset(
        e,
        t,
        "title_label",
      );
      return r == null ? [] : p(e, "titles", "text", r);
    }
    function g(e, t, n) {
      if (n == null) return 0;
      var a = r("AdsAssetFeedFieldToRuleLabelMapping").get(t);
      if (a == null) return 0;
      var i = o("AdsDLOLanguageUtils").languageCodeToLabelForAsset(e, n, a);
      if (i == null) return 0;
      var l = d(e, t, "translation_confidence", i);
      return Number(l.fieldValue);
    }
    function h(t, n) {
      if (n == null) {
        var r = e(t, "bodies"),
          a = c(t, "bodies", "text", r);
        return { index: r, fieldValue: a };
      }
      var i = o("AdsDLOLanguageUtils").languageCodeToLabelForAsset(
        t,
        n,
        "body_label",
      );
      return i == null
        ? { index: null, fieldValue: null }
        : d(t, "bodies", "text", i);
    }
    function y(e, t) {
      if (t == null) {
        var n = u(e, "bodies");
        return n.map(function (t) {
          var n = c(e, "bodies", "text", t);
          return { index: t, fieldValue: n };
        });
      }
      var r = o("AdsDLOLanguageUtils").languageCodeToLabelForAsset(
        e,
        t,
        "body_label",
      );
      return r == null ? [] : p(e, "bodies", "text", r);
    }
    function C(t, n) {
      if (n == null) {
        var r = e(t, "descriptions"),
          a = c(t, "descriptions", "text", r);
        return { index: r, fieldValue: a };
      }
      var i = o("AdsDLOLanguageUtils").languageCodeToLabelForAsset(
        t,
        n,
        "description_label",
      );
      return i == null
        ? { index: null, fieldValue: null }
        : d(t, "descriptions", "text", i);
    }
    function b(t, n, r) {
      if (n == null) {
        var a = e(t, "link_urls"),
          i = c(t, "link_urls", r, a);
        return { index: a, fieldValue: i };
      }
      var l = o("AdsDLOLanguageUtils").languageCodeToLabelForAsset(
        t,
        n,
        "link_url_label",
      );
      return l == null
        ? { index: -1, fieldValue: null }
        : d(t, "link_urls", r, l);
    }
    function v(t, n, r) {
      if (r == null) {
        var a = e(t, "images"),
          i = c(t, "images", n, a);
        return { index: a, fieldValue: i };
      }
      var l = o("AdsDLOLanguageUtils").languageCodeToLabelForAsset(
        t,
        r,
        "image_label",
      );
      return l == null
        ? { index: null, fieldValue: null }
        : d(t, "images", n, l);
    }
    function S(e, t, n) {
      if (n == null) {
        var r = u(e, "images");
        return r.map(function (n) {
          var r = c(e, "images", t, n);
          return { index: n, fieldValue: r };
        });
      }
      var a = o("AdsDLOLanguageUtils").languageCodeToLabelForAsset(
        e,
        n,
        "image_label",
      );
      return a == null ? [] : p(e, "images", t, a);
    }
    function R(t, n) {
      var a,
        i = {
          index: null,
          fieldValue: {
            videoID: null,
            thumbnailURL: null,
            thumbnailSource: null,
            captionIDs: null,
          },
        },
        l = -1;
      if (n == null) l = e(t, "videos");
      else {
        var u = o("AdsDLOLanguageUtils").languageCodeToLabelForAsset(
          t,
          n,
          "video_label",
        );
        if (u == null) return i;
        l = d(t, "videos", "video_id", u).index;
      }
      var c =
        (a = t.creative) == null || (a = a.asset_feed_spec) == null
          ? void 0
          : a.videos;
      return l === -1 || c == null
        ? i
        : (r("immutable").List.isList(c) || s(0, 13363),
          {
            index: l,
            fieldValue: {
              videoID: c.getIn([l, "video_id"]),
              thumbnailURL: c.getIn([l, "thumbnail_url"]),
              thumbnailSource: c.getIn([l, "thumbnail_source"]),
              captionIDs: c.getIn([l, "caption_ids"]),
            },
          });
    }
    function L(e, t) {
      var n,
        a = null;
      if (
        t != null &&
        ((a = o("AdsDLOLanguageUtils").languageCodeToLabelForAsset(
          e,
          t,
          "video_label",
        )),
        a == null)
      )
        return [];
      var i = m(e, "videos", a),
        l =
          (n = e.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.videos;
      if (i.length === 0 || l == null) return [];
      r("immutable").List.isList(l) || s(0, 13363);
      var u = [];
      return (
        i.forEach(function (e) {
          var t = l.get(e);
          u.push({ index: e, fieldValue: t });
        }),
        u
      );
    }
    function E(e) {
      var t,
        n = (t = e.creative) == null ? void 0 : t.asset_feed_spec;
      return n == null
        ? !1
        : n.get("images") != null || n.get("videos") != null;
    }
    function k(e, t) {
      var n = L(e, t);
      return n
        .map(function (e) {
          var t;
          return (t = o("AdsAssetFeedFieldUtils").getAssetFieldStringValue(
            e.fieldValue,
            "video_id",
          )) != null
            ? t
            : "";
        })
        .filter(function (e) {
          return !!e;
        });
    }
    function I(e, t, n) {
      var a = ["url", "hash"].map(function (n) {
          return r("immutable").Map(
            S(e, n, t).map(function (e) {
              var t = e.fieldValue,
                n = e.index;
              return ["" + (n != null ? n : -1), { fieldValue: t }];
            }),
          );
        }),
        i = a[0],
        l = a[1],
        s = [];
      return (
        new Set([].concat(Array.from(i.keys()), Array.from(l.keys()))).forEach(
          function (e) {
            var t = o("AdsImageIDUtils").getImageID({
              url: i.get(e).fieldValue,
              hash: l.get(e).fieldValue,
              accountID: n,
            });
            t != null && s.push([e, t]);
          },
        ),
        r("immutable").OrderedMap(s)
      );
    }
    function T(e, t, n) {
      return !1;
    }
    function D(e, t) {
      var n = o("AdsDLOLanguageUtils").getAddedLanguaguesFromAdgroup(e);
      return t != null ? n.concat(t) : n;
    }
    function x(e, t, n) {
      var o = D(e, t);
      return o.reduce(function (t, r) {
        return t.union(I(e, r, n).values());
      }, r("immutable").OrderedSet([]));
    }
    function $(e, t) {
      var n = D(e, t);
      return n.reduce(function (t, n) {
        return t.union(k(e, n));
      }, r("immutable").OrderedSet([]));
    }
    ((l.getUnlabeledAssetIndexForField = e),
      (l.getUnlabeledAssetsIndicesForField = u),
      (l.getAssetEntryForLabel = d),
      (l.getAssetsIndicesForLabel = m),
      (l.getHeadlineValue = _),
      (l.getHeadlinesValue = f),
      (l.getTranslationConfidence = g),
      (l.getMessageValue = h),
      (l.getMessagesValue = y),
      (l.getLinkDescriptionValue = C),
      (l.getLinkUrlValue = b),
      (l.getImageValue = v),
      (l.getVideoValue = R),
      (l.hasMedia = E),
      (l.getVideoIDs = k),
      (l.getImageIDs = I),
      (l.isLanguageMediaSyncedToPrimaryLanguage = T),
      (l.getUniqueImageAssets = x),
      (l.getUniqueVideoAssets = $));
  },
  98,
);
