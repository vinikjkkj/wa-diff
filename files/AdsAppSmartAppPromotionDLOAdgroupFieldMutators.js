__d(
  "AdsAppSmartAppPromotionDLOAdgroupFieldMutators",
  [
    "invariant",
    "AdsAdgroupRecordAccessors",
    "AdsDLOAdgroupFieldUtils",
    "AdsDLOLanguageMutators",
    "AdsDLOLanguageUtils",
    "AdsVideoStore",
    "immutable",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n) {
      var a;
      r("vulture")("BS9BSlyI_Qceauq3-CjMQdJUOzI=");
      var i = o("AdsDLOLanguageUtils").languageCodeToLabelForAsset(
        e,
        t,
        "body_label",
      );
      if (i == null) return e;
      var l = (a = e.creative) == null ? void 0 : a.asset_feed_spec;
      l != null || s(0, 38319);
      var u = r("immutable").List([r("immutable").Map().set("name", i)]),
        c = [
          ["adlabels", u],
          ["text", n],
        ],
        d = r("immutable").Map(c),
        m = l.bodies || r("immutable").List();
      return r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.bodies.set(
        m.push(d),
        e,
      );
    }
    function u(e, t, n) {
      var r = 0;
      for (var o of e.entries()) {
        var a = o[0],
          i = o[1];
        if (t(i)) {
          if (r === n) return a;
          r++;
        }
      }
      return -1;
    }
    var c = function (t) {
      return function (e) {
        var n = e.get("adlabels");
        return (
          n instanceof r("immutable").List || s(0, 38320),
          n.some(function (e) {
            return e.get("name") === t;
          })
        );
      };
    };
    function d(t, n, a, i, l) {
      var d,
        m = o("AdsDLOLanguageUtils").languageCodeToLabelForAsset(
          t,
          n,
          "body_label",
        ),
        p = t;
      m == null &&
        ((m = n),
        (p = o("AdsDLOLanguageMutators").addRuleLabelForLanguage(
          p,
          "body_label",
          n,
          n,
        )),
        n === a && (p = b(p, a, n, "body_label")));
      var _ = (d = p.creative) == null ? void 0 : d.asset_feed_spec;
      _ != null || s(0, 38319);
      var f = _.bodies || r("immutable").List(),
        g = u(f, c(m), i);
      if (g === -1) return e(p, n, l);
      var h = f.setIn([g, "text"], l),
        y = [g, "translation_confidence"];
      return r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.bodies.set(
        h.deleteIn(y),
        p,
      );
    }
    function m(e, t, n) {
      var a,
        i = o("AdsDLOLanguageUtils").languageCodeToLabelForAsset(
          e,
          t,
          "body_label",
        );
      if (i == null) return e;
      var l = (a = e.creative) == null ? void 0 : a.asset_feed_spec;
      l != null || s(0, 38319);
      var d = l.bodies || r("immutable").List(),
        m = u(d, c(i), n);
      return m === -1
        ? e
        : r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.bodies.set(
            d.delete(m),
            e,
          );
    }
    function p(e, t, n) {
      var a,
        i = o("AdsDLOLanguageUtils").languageCodeToLabelForAsset(
          e,
          t,
          "title_label",
        );
      if (i == null) return e;
      var l = (a = e.creative) == null ? void 0 : a.asset_feed_spec;
      l != null || s(0, 38319);
      var u = r("immutable").List([r("immutable").Map().set("name", i)]),
        c = [
          ["adlabels", u],
          ["text", n],
        ],
        d = r("immutable").Map(c),
        m = l.titles || r("immutable").List();
      return r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.titles.set(
        m.push(d),
        e,
      );
    }
    function _(e, t, n, a, i) {
      var l,
        d = o("AdsDLOLanguageUtils").languageCodeToLabelForAsset(
          e,
          t,
          "title_label",
        ),
        m = e;
      d == null &&
        ((d = t),
        (m = o("AdsDLOLanguageMutators").addRuleLabelForLanguage(
          m,
          "title_label",
          t,
          t,
        )),
        t === n && (m = b(m, n, t, "title_label")));
      var _ = (l = m.creative) == null ? void 0 : l.asset_feed_spec;
      _ != null || s(0, 38319);
      var f = _.titles || r("immutable").List(),
        g = u(f, c(d), a);
      if (g === -1) return p(m, t, i);
      var h = f.setIn([g, "text"], i),
        y = [g, "translation_confidence"];
      return r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.titles.set(
        h.deleteIn(y),
        m,
      );
    }
    function f(e, t, n) {
      var a,
        i = o("AdsDLOLanguageUtils").languageCodeToLabelForAsset(
          e,
          t,
          "title_label",
        );
      if (i == null) return e;
      var l = (a = e.creative) == null ? void 0 : a.asset_feed_spec;
      l != null || s(0, 38319);
      var d = l.titles || r("immutable").List(),
        m = u(d, c(i), n);
      return m === -1
        ? e
        : r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.titles.set(
            d.delete(m),
            e,
          );
    }
    function g(e, t, n) {
      var o,
        a = (o = e.creative) == null ? void 0 : o.asset_feed_spec;
      a != null || s(0, 38319);
      var i = a.get(t);
      return i == null
        ? e
        : r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.set(
            a.set(t, i.delete(n)),
            e,
          );
    }
    function h(e, t, n, a) {
      var i,
        l = n === "images" ? "image_label" : "video_label",
        u = o("AdsDLOLanguageUtils").languageCodeToLabelForAsset(e, t, l);
      if (u == null) return e;
      var c = r("immutable").Map(a),
        d = (i = e.creative) == null ? void 0 : i.asset_feed_spec;
      d != null || s(0, 38319);
      var m = r("immutable").List([r("immutable").Map().set("name", u)]);
      c = c.set("adlabels", m);
      var p = d.get(n) || r("immutable").List();
      return r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.set(
        d.set(n, p.push(c)),
        e,
      );
    }
    function y(e, t, n) {
      var r = o("AdsDLOAdgroupFieldUtils")
          .getAssetsIndicesForLabel(e, n, t)
          .sort(function (e, t) {
            return t - e;
          }),
        a = e;
      return (
        r.forEach(function (e) {
          return (a = g(a, n, e));
        }),
        a
      );
    }
    function C(e, t, n, r) {
      var a;
      if (r !== "images" && r !== "videos") return e;
      var i = o("AdsDLOAdgroupFieldUtils").getAssetsIndicesForLabel(e, r, t),
        l = (a = e.creative) == null ? void 0 : a.asset_feed_spec;
      l != null || s(0, 38319);
      var u = r === "images" ? l.images : l.videos;
      if (u == null) return e;
      var c = e;
      return (
        i.forEach(function (e) {
          c = h(c, n, r, u.get(e));
        }),
        c
      );
    }
    function b(e, t, n, r) {
      var a = e,
        i = o("AdsDLOLanguageUtils")
          .getAddedLanguaguesFromAdgroup(e)
          .filter(function (e) {
            return o(
              "AdsDLOAdgroupFieldUtils",
            ).isLanguageMediaSyncedToPrimaryLanguage(a, t, e);
          });
      return (
        i.forEach(function (e) {
          a = o("AdsDLOLanguageMutators").addRuleLabelForLanguage(a, r, e, n);
        }),
        a
      );
    }
    function v(e, t, n, r, a, i, l) {
      var s = i === "images" ? "image_label" : "video_label",
        u = o("AdsDLOLanguageUtils").languageCodeToLabelForAsset(e, t, s);
      if (a.size === r.size && r.intersect(a).size === a.size) return e;
      var c = y(e, u != null ? u : t, i);
      return (
        (r.size === 0 && a.size !== 0) ||
          (r.size !== 0 &&
            a.size === 0 &&
            ((u = u != null ? u : t),
            (c = o("AdsDLOLanguageMutators").addRuleLabelForLanguage(
              c,
              s,
              t,
              t,
            )),
            t === n && (c = b(c, n, t, s))),
          r.forEach(function (e) {
            var n = l(e);
            n != null && (c = h(c, t, i, n));
          })),
        c
      );
    }
    function S(e, t, n, a) {
      var i = r("immutable").OrderedSet(
          o("AdsDLOAdgroupFieldUtils").getVideoIDs(e, t),
        ),
        l = r("AdsVideoStore").getSelector();
      return v(
        e,
        t,
        n,
        r("immutable").OrderedSet(a),
        i,
        "videos",
        function (e) {
          var t,
            n = l(e),
            o =
              n == null || (t = n.preferredThumbnail) == null ? void 0 : t.uri;
          return o == null
            ? r("immutable").Map({ video_id: e })
            : r("immutable").Map({ video_id: e, thumbnail_url: o });
        },
      );
    }
    function R(e, t, n) {
      if (t === n || t == null || n == null) return e;
      var r = ["image_label", "video_label"],
        a = ["images", "videos"],
        i = e;
      return (
        a.forEach(function (e) {
          i = y(i, t, e);
        }),
        r.forEach(function (e) {
          i = o("AdsDLOLanguageMutators").addRuleLabelForLanguage(i, e, t, t);
        }),
        a.forEach(function (e) {
          i = C(i, n, t, e);
        }),
        i
      );
    }
    ((l.updateBodyText = d),
      (l.deleteBodyText = m),
      (l.updateTitleText = _),
      (l.deleteTitleText = f),
      (l.updateVideos = S),
      (l.replaceMediaAssets = R));
  },
  98,
);
