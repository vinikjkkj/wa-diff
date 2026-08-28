__d(
  "AdsDynamicAdCustomizationFieldMutators",
  [
    "AdsAPIAdgroupPaths",
    "AdsAdgroupRecordAccessors",
    "AdsCanvasConstants",
    "AdsCollectionsAdUtils",
    "AdsDLOAdgroupFieldMutators",
    "AdsDynamicAdCustomizationAddedLanguageFieldPaths",
    "AdsDynamicAdCustomizationAssetFeedUtils",
    "AdsDynamicAdCustomizationCreativeUtils",
    "AdsDynamicAdCustomizationCustomizationSpecUtils",
    "AdsDynamicAdCustomizationFieldUtils",
    "AdsDynamicAdCustomizationLanguageUtils",
    "AdsDynamicAdCustomizationPrimaryLanguageFieldPaths",
    "FBLogger",
    "immutable",
    "isFalsey",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["call_to_action"],
      s = "placeholder.link";
    function u(e) {
      if (!o("AdsCollectionsAdUtils").isCollectionsAd(e.creative)) return e;
      var t = o(
          "AdsDynamicAdCustomizationCustomizationSpecUtils",
        ).getCustomizationSpecFromAdgroup(e),
        n = o("AdsDynamicAdCustomizationCreativeUtils").getCreativeSpecData(e),
        a = o("AdsDynamicAdCustomizationCreativeUtils").getCreativeSpecPath(e),
        i = o("AdsDynamicAdCustomizationFieldUtils").getDefaultCanvasLinkPath(
          e,
        );
      if (n == null || a == null || i == null) return e;
      var l = e
        .setIn(i, o("AdsCanvasConstants").EMPTY_CANVAS_LINK)
        .deleteIn([].concat(a, ["image_hash"]))
        .deleteIn([].concat(a, ["picture"]))
        .deleteIn([].concat(a, ["video_id"]))
        .deleteIn([].concat(a, ["thumbnail_url"]));
      if (t == null) return l;
      var s = t.reduce(function (e, t) {
        if (
          o("AdsDynamicAdCustomizationCustomizationSpecUtils").isPrimaryRule(t)
        )
          return e.push(t);
        var n = t
          .delete("link")
          .delete("image_hash")
          .delete("picture")
          .delete("video_id")
          .delete("thumbnail_url");
        return n.count() === 1 ? e : e.push(n);
      }, r("immutable").List());
      return s.size === 1
        ? l.deleteIn(
            o(
              "AdsDynamicAdCustomizationCustomizationSpecUtils",
            ).getCustomizationSpecPathFromAdgroup(e),
          )
        : l.setIn(
            o(
              "AdsDynamicAdCustomizationCustomizationSpecUtils",
            ).getCustomizationSpecPathFromAdgroup(e),
            s,
          );
    }
    function c(e, t, n) {
      var a = e,
        i = t.caption,
        l = t.description,
        s = t.image_hash,
        u = t.link,
        c = t.message,
        d = t.name,
        m = t.picture,
        p = t.template_url_spec,
        _ = t.thumbnail_url,
        f = t.video_id;
      return (
        p != null &&
          (a = o("AdsDLOAdgroupFieldMutators").setLinkURL(
            a,
            n,
            "deeplink_url",
            p.web.url,
          )),
        d != null && (a = o("AdsDLOAdgroupFieldMutators").setHeadline(a, n, d)),
        l != null &&
          (a = o("AdsDLOAdgroupFieldMutators").setLinkDescription(a, n, l)),
        u != null &&
          (a = o("AdsDLOAdgroupFieldMutators").setLinkURL(
            a,
            n,
            "website_url",
            u,
          )),
        c != null && (a = o("AdsDLOAdgroupFieldMutators").setMessage(a, n, c)),
        i != null &&
          (a = o("AdsDLOAdgroupFieldMutators").setLinkURL(
            a,
            n,
            "display_url",
            i,
          )),
        (r("isFalsey")(m) ||
          r("isFalsey")(s) ||
          r("isFalsey")(f) ||
          r("isFalsey")(_)) &&
          r("FBLogger")("dynamic_ad_customization").mustfix(
            "We don't support setting picture, image hash, video id, and thumbnail for asset feed based MMDA",
          ),
        a
      );
    }
    function d(e, t, n, a) {
      if (o("AdsDynamicAdCustomizationAssetFeedUtils").isAssetFeedBasedMMDA(e))
        return c(e, t, n);
      var i = o(
          "AdsDynamicAdCustomizationCustomizationSpecUtils",
        ).getCustomizationSpecFromAdgroup(e),
        l = o(
          "AdsDynamicAdCustomizationCustomizationSpecUtils",
        ).getCustomizationRuleIndexForLanguage(i, n),
        s = r("immutable").Map({
          customization_spec: r("immutable").Map({ language: n }),
        }),
        u = l !== -1 ? i.get(l, s) : s,
        d = u;
      r("AdsDynamicAdCustomizationAddedLanguageFieldPaths").forEach(
        function (e, n) {
          d = f(d, e, t[n]);
        },
      );
      var m = o(
        "AdsDynamicAdCustomizationCustomizationSpecUtils",
      ).getCustomizationSpecPathFromAdgroup(e);
      return !a && d.count() === 1 && d.has("customization_spec")
        ? e.setIn(m, l !== -1 ? i.remove(l) : i)
        : e.setIn(m, l !== -1 ? i.set(l, d) : i.push(d));
    }
    function m(e, t) {
      var n = o(
          "AdsDynamicAdCustomizationFieldUtils",
        ).getPrimaryLanguageFieldPaths(e),
        r = e;
      return (
        n.forEach(function (e, n) {
          r = f(r, e, t[n]);
        }),
        r
      );
    }
    function p(e, t) {
      var n = _(e, t),
        o = n.updatedAdgroup,
        a = n.updatedFields;
      return r("AdsDynamicAdCustomizationPrimaryLanguageFieldPaths")
        .filter(function (e, t) {
          return !a.has(t);
        })
        .reduce(function (e, n, r) {
          return f(e, n, t[r]);
        }, o);
    }
    function _(e, t) {
      var n,
        a = new Set(),
        i =
          (n = e.creative) == null ||
          (n = n.object_story_spec) == null ||
          (n = n.template_data) == null
            ? void 0
            : n.child_attachments,
        l = e;
      if (i != null) {
        var s = i.findIndex(function (e) {
            return !e.get("static_card");
          }),
          u = i.get(s),
          c = o(
            "AdsDynamicAdCustomizationFieldUtils",
          ).FIELDS_IN_CHILD_ATTACHMENTS.filter(function (e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          });
        for (var d of c) (a.add(d), (u = u.set(d, t[d])));
        var m = i.set(s, u);
        l = f(
          e,
          r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA
            .CHILD_ATTACHMENTS,
          m,
        );
      }
      return { updatedFields: a, updatedAdgroup: l };
    }
    function f(e, t, n) {
      var o, a;
      return (
        n != null && typeof n != "string"
          ? (o = r("immutable").Iterable.isIterable(n)
              ? r("immutable").fromJS(n.toJS())
              : r("immutable").fromJS(n))
          : (o = n),
        Array.isArray(t) ? (a = t) : (a = t.path),
        g(e, a, o)
      );
    }
    function g(e, t, n) {
      var o = e;
      return n === void 0
        ? e
        : n === null
          ? e.removeIn(t)
          : r("immutable").Map.isMap(n) && typeof n != "string"
            ? (n.forEach(function (e, n) {
                o = g(o, t.concat([n]), e);
              }),
              o)
            : o.setIn(t, n);
    }
    function h(t, n) {
      var a = _(t, n),
        i = a.updatedAdgroup,
        l = o(
          "AdsDynamicAdCustomizationLanguageUtils",
        ).getPrimaryLanguageFromAdgroup(i);
      if (l == null)
        return (
          r("FBLogger")("dynamic_ad_customization").mustfix(
            "Asset Feed Based MMDA should have primary language",
          ),
          i
        );
      var s = n.call_to_action,
        u = babelHelpers.objectWithoutPropertiesLoose(n, e);
      if ((s == null ? void 0 : s.type) != null) {
        var d;
        i = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.call_to_action_types.set(
          r("immutable").List([s == null ? void 0 : s.type]),
          i,
        );
        var m =
            ((d = t.creative) == null || (d = d.asset_feed_spec) == null
              ? void 0
              : d.call_to_actions) || r("immutable").List(),
          p = m.setIn(["0", "type"], s == null ? void 0 : s.type);
        i = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.call_to_actions.set(p, i);
      }
      return c(i, u, l);
    }
    function y(e, t) {
      if (o("AdsDynamicAdCustomizationAssetFeedUtils").isAssetFeedBasedMMDA(e))
        return h(e, t);
      var n = o("AdsCollectionsAdUtils").isCollectionsAd(e.creative);
      return n ? m(e, t) : p(e, t);
    }
    function C(e) {
      if (!o("AdsDynamicAdCustomizationAssetFeedUtils").isAssetFeedBasedMMDA(e))
        return (
          r("FBLogger")("dynamic_ad_customization").mustfix(
            "Only Asset_Feed based MMDA should call this fixTemplateDataForAssetFeedMMDALegacyFields",
          ),
          e
        );
      var t = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.template_data.image_layer_specs.get(e),
        n = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.template_data.child_attachments.get(e),
        a = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.template_data.link.get(e);
      return (r("isTruthy")(t) || r("isTruthy")(n)) && r("isFalsey")(a)
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.template_data.link.set(s, e)
        : r("isFalsey")(t) && r("isFalsey")(n)
          ? r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.template_data.delete(e)
          : e;
    }
    ((l.removeAllCanvasLink = u),
      (l.updateCustomizationSpecForLanguage = d),
      (l.updatePrimaryLanguageFieldsForCollection = m),
      (l.updatePrimaryLanguageFieldsForNonCollection = p),
      (l.updatePrimaryLanguageFieldsInChildAttachments = _),
      (l.updateWithOverrideValue = f),
      (l.updateWithOverrideValueRecursive = g),
      (l.updatePrimaryLanguageFields = y),
      (l.fixTemplateDataForAssetFeedMMDALegacyFields = C));
  },
  98,
);
