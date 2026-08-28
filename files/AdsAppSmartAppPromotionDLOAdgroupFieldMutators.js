__d(
  "AdsAppSmartAppPromotionDLOAdgroupFieldMutators",
  [
    "invariant",
    "AdsAdgroupRecordAccessors",
    "AdsDLOAdgroupFieldUtils",
    "AdsDLOFieldToAdlabelsMapping",
    "AdsDLOLanguageMutators",
    "AdsDLOLanguageUtils",
    "AdsImageIDUtils",
    "AdsVideoStore",
    "immutable",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n, a) {
      var i;
      r("vulture")("BS9BSlyI_Qceauq3-CjMQdJUOzI=");
      var l = o("AdsDLOLanguageUtils").languageCodeToLabelForAsset(
        e,
        t,
        "body_label",
      );
      if (l == null) return e;
      var u = (i = e.creative) == null ? void 0 : i.asset_feed_spec;
      u != null || s(0, 38319);
      var c = r("immutable").List([r("immutable").Map().set("name", l)]),
        d = [
          ["adlabels", c],
          ["text", n],
        ];
      a != null && d.push(["translation_confidence", a]);
      var m = r("immutable").Map(d),
        p = u.bodies || r("immutable").List();
      return r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.bodies.set(
        p.push(m),
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
    function d(t, n, a, i, l, d) {
      var m,
        p = o("AdsDLOLanguageUtils").languageCodeToLabelForAsset(
          t,
          n,
          "body_label",
        ),
        _ = t;
      p == null &&
        ((p = n),
        (_ = o("AdsDLOLanguageMutators").addRuleLabelForLanguage(
          _,
          "body_label",
          n,
          n,
        )),
        n === a && (_ = b(_, a, n, "body_label")));
      var f = (m = _.creative) == null ? void 0 : m.asset_feed_spec;
      f != null || s(0, 38319);
      var g = f.bodies || r("immutable").List(),
        h = u(g, c(p), i);
      if (h === -1) return e(_, n, l, d);
      var y = g.setIn([h, "text"], l),
        C = [h, "translation_confidence"];
      return (
        d == null ? (y = y.deleteIn(C)) : (y = y.setIn(C, d)),
        r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.bodies.set(y, _)
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
    function p(e, t, n, a) {
      var i,
        l = o("AdsDLOLanguageUtils").languageCodeToLabelForAsset(
          e,
          t,
          "title_label",
        );
      if (l == null) return e;
      var u = (i = e.creative) == null ? void 0 : i.asset_feed_spec;
      u != null || s(0, 38319);
      var c = r("immutable").List([r("immutable").Map().set("name", l)]),
        d = [
          ["adlabels", c],
          ["text", n],
        ];
      a != null && d.push(["translation_confidence", a]);
      var m = r("immutable").Map(d),
        p = u.titles || r("immutable").List();
      return r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.titles.set(
        p.push(m),
        e,
      );
    }
    function _(e, t, n, a, i, l) {
      var d,
        m = o("AdsDLOLanguageUtils").languageCodeToLabelForAsset(
          e,
          t,
          "title_label",
        ),
        _ = e;
      m == null &&
        ((m = t),
        (_ = o("AdsDLOLanguageMutators").addRuleLabelForLanguage(
          _,
          "title_label",
          t,
          t,
        )),
        t === n && (_ = b(_, n, t, "title_label")));
      var f = (d = _.creative) == null ? void 0 : d.asset_feed_spec;
      f != null || s(0, 38319);
      var g = f.titles || r("immutable").List(),
        h = u(g, c(m), a);
      if (h === -1) return p(_, t, i, l);
      var y = g.setIn([h, "text"], i),
        C = [h, "translation_confidence"];
      return (
        l == null ? (y = y.deleteIn(C)) : (y = y.setIn(C, l)),
        r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.titles.set(y, _)
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
    function S(e, t, n, a, i) {
      var l = r("immutable").OrderedSet(
        o("AdsDLOAdgroupFieldUtils").getImageIDs(e, n, t).values(),
      );
      return v(e, n, a, i, l, "images", function (e) {
        var t = o("AdsImageIDUtils").getImageHashFromID(e);
        return t != null ? r("immutable").Map({ hash: t }) : null;
      });
    }
    function R(e, t, n, a) {
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
    function L(t, n, r, o) {
      for (var a = t, i; a !== i; ) ((i = a), (a = m(a, n, 0)));
      return (
        r.forEach(function (t, r) {
          var i = o && o[r];
          a = e(a, n, t, i);
        }),
        a
      );
    }
    function E(e, t, n, r) {
      for (var o = e, a; o !== a; ) ((a = o), (o = f(o, t, 0)));
      return (
        n.forEach(function (e, n) {
          var a = r && r[n];
          o = p(o, t, e, a);
        }),
        o
      );
    }
    function k(e, t, n) {
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
    function I(e) {
      var t = ["images", "videos"],
        n = e;
      return (
        t.forEach(function (e) {
          var t,
            o = (t = n.creative) == null ? void 0 : t.asset_feed_spec;
          o != null || s(0, 38319);
          var a = o.get(e),
            i = r("AdsDLOFieldToAdlabelsMapping").get(e);
          i != null || s(0, 45981);
          var l = r("immutable").List();
          (a == null ||
            a.forEach(function (e) {
              var t = e.get(i);
              t !== void 0 &&
                t instanceof r("immutable").List &&
                t.size &&
                t.forEach(function (t) {
                  var n = r("immutable").Map.isMap(t) ? t.get("name") : null;
                  n != null &&
                    (l = l.push(e.set(i, r("immutable").List().push(t))));
                });
            }),
            l.size > 0 &&
              (n = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.set(
                o.set(e, l),
                n,
              )));
        }),
        n
      );
    }
    ((l.addBodyText = e),
      (l.updateBodyText = d),
      (l.deleteBodyText = m),
      (l.addTitleText = p),
      (l.updateTitleText = _),
      (l.deleteTitleText = f),
      (l.deleteAsset = g),
      (l.addMediaForLanguage = h),
      (l.removeAssets = y),
      (l.copyMediaAssets = C),
      (l.updateImages = S),
      (l.updateVideos = R),
      (l.replaceBodies = L),
      (l.replaceTitles = E),
      (l.replaceMediaAssets = k),
      (l.expandMediaAssets = I));
  },
  98,
);
