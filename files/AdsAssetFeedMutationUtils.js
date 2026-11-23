__d(
  "AdsAssetFeedMutationUtils",
  [
    "AdImageSpecCropKeys",
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedConstant",
    "AdsAssetFeedUtils",
    "AdsDLOLanguageUtils",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorAdgroupBodyMutators",
    "AdsUEditorAdgroupHeadlineMutators",
    "AdsUnifiedCreativeAPIFields",
    "FBLogger",
    "adsAssetFeedSpecRemoveAssetFieldAtIndex",
    "adsPlacementAssetMutationConvertFromAssetFeedSpec",
    "immutable",
    "isFalsey",
    "isTruthy",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("immutable").List(),
      s = r("immutable").Map({
        message: "bodies",
        callToAction: "call_to_actions",
        linkDescription: "descriptions",
        imageURL: "images",
        imageHash: "images",
        imageCrops: "images",
        linkURL: "link_urls",
        displayURL: "link_urls",
        post: "posts",
        headline: "titles",
        videoThumbnailURL: "videos",
        videoThumbnailSource: "videos",
        videoThumbnailHash: "videos",
        videoID: "videos",
        interactiveComponentsSpec: "videos",
        captionIDs: "videos",
        phoneDataID: "phone_data_ids",
      }),
      u = new Set([
        "text",
        "asset_source",
        "automation_status",
        "uuid",
        "text_gen_original_text",
        "language",
        "action_type",
        "text_gen_input_text",
        "target_audience",
      ]),
      c = new Set([
        "text",
        "asset_source",
        "uuid",
        "text_gen_original_text",
        "language",
        "action_type",
        "text_gen_input_text",
        "target_audience",
      ]);
    function d(e, t, n, r, o, a, i) {
      var l = y(e, t, n, o, i);
      return g(l, t, n, a, i);
    }
    function m(e, t, n, o) {
      var a = s.get(n.name),
        i;
      if (
        (a !== void 0
          ? (i = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec[a].get(
              e,
            ))
          : (i = n.getValue(e, t)),
        !(i instanceof r("immutable").List))
      )
        throw r("FBLogger")("ads_dynamic_creative_optimization")
          .blameToPreviousFile()
          .mustfixThrow("this function must be invoked on an asset feed field");
      if (o < 0 || o >= i.count())
        throw r("FBLogger")("ads_dynamic_creative_optimization")
          .blameToPreviousFile()
          .mustfixThrow(
            "assetIndex should be non-negative and smaller than the asset count",
          );
      return (
        (i = i.delete(o)),
        a !== void 0
          ? r("AdsAdgroupRecordAccessors").creative.asset_feed_spec[a].set(i, e)
          : e.setIn(n.getPathOrThrow(e, t), i)
      );
    }
    function p(e, t, n) {
      var o = s.get(n.name),
        a;
      if (
        (o !== void 0
          ? (a = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec[o].get(
              e,
            ))
          : (a = n.getValue(e, t)),
        r("isFalsey")(a) && (a = r("immutable").List()),
        !(a instanceof r("immutable").List))
      )
        throw r("FBLogger")("ads_dynamic_creative_optimization")
          .blameToPreviousFile()
          .mustfixThrow("this function must be invoked on an asset feed field");
      return a.count();
    }
    function _(e, t, n, o, a, i, l) {
      l === void 0 && (l = !1);
      var u = s.get(n.name),
        c;
      if (
        (u !== void 0
          ? (c = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec[u].get(
              e,
            ))
          : (c = n.getValue(e, t)),
        (c == null || c === "") && (c = r("immutable").List()),
        !(c instanceof r("immutable").List))
      )
        throw r("FBLogger")("ads_dynamic_creative_optimization")
          .blameToPreviousFile()
          .mustfixThrow("this function must be invoked on an asset feed field");
      for (var d = c; l && o > d.count(); )
        if (((d = d.push(r("immutable").Map().set(a, i))), d.count() > 100))
          throw r("FBLogger")("ads_dynamic_creative_optimization")
            .blameToPreviousFile()
            .mustfixThrow("Not expect to pad more than 100");
      if (((c = d), !(c instanceof r("immutable").List)))
        throw r("FBLogger")("ads_dynamic_creative_optimization")
          .blameToPreviousFile()
          .mustfixThrow("this function must be invoked on an asset feed field");
      if (o < 0 || o > c.count())
        throw r("FBLogger")("ads_dynamic_creative_optimization")
          .blameToPreviousFile()
          .mustfixThrow(
            "assetIndex should be non-negative and no greater than the asset count",
          );
      o === c.count() && (c = c.set(o, r("immutable").Map()));
      var m = c;
      return (
        (c = m.update(o, function (e) {
          return e.set(a, i);
        })),
        u !== void 0
          ? r("AdsAdgroupRecordAccessors").creative.asset_feed_spec[u].set(c, e)
          : e.setIn(n.getPathOrThrow(e, t), c)
      );
    }
    function f(e, t, n, o, a, i, l) {
      l === void 0 && (l = !1);
      var u = s.get(n.name),
        c;
      if (
        (u !== void 0
          ? (c = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec[u].get(
              e,
            ))
          : (c = n.getValue(e, t)),
        c == null && (c = r("immutable").List()),
        !(c instanceof r("immutable").List))
      )
        throw r("FBLogger")("ads_dynamic_creative_optimization")
          .blameToPreviousFile()
          .mustfixThrow("this function must be invoked on an asset feed field");
      for (var d = c; l && o > d.count(); )
        if (((d = d.push(r("immutable").Map().set(a, i))), d.count() > 100))
          throw r("FBLogger")("ads_dynamic_creative_optimization")
            .blameToPreviousFile()
            .mustfixThrow("Not expect to pad more than 100");
      if (((c = d), !(c instanceof r("immutable").List)))
        throw r("FBLogger")("ads_dynamic_creative_optimization")
          .blameToPreviousFile()
          .mustfixThrow("this function must be invoked on an asset feed field");
      if (o < 0 || o > c.count())
        throw r("FBLogger")("ads_dynamic_creative_optimization")
          .blameToPreviousFile()
          .mustfixThrow(
            "assetIndex should be non-negative and no greater than the asset count",
          );
      return (
        (c = c.splice(o, 0, r("immutable").Map().set(a, i))),
        u !== void 0
          ? r("AdsAdgroupRecordAccessors").creative.asset_feed_spec[u].set(c, e)
          : e.setIn(n.getPathOrThrow(e, t), c)
      );
    }
    function g(e, t, n, a, i) {
      var l = s.get(n.name),
        u;
      if (
        (l !== void 0
          ? (u = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec[l].get(
              e,
            ))
          : (u = n.getValue(e, t)),
        u != null)
      ) {
        if (!(u instanceof r("immutable").List))
          throw r("FBLogger")("ads_dynamic_creative_optimization")
            .blameToPreviousFile()
            .mustfixThrow(
              "this function must be invoked on an asset feed field",
            );
        if (a < 0 || a >= u.count())
          throw r("FBLogger")("ads_dynamic_creative_optimization")
            .blameToPreviousFile()
            .mustfixThrow(
              "assetIndex should be non-negative and less than the asset count",
            );
        return (
          (u = u.update(a, function (e) {
            var t;
            return e.set(
              o("AdsAssetFeedConstant").ADLABELS,
              r("immutable").List.of(
                r("immutable").Map(((t = {}), (t.name = i), t)),
              ),
            );
          })),
          l !== void 0
            ? r("AdsAdgroupRecordAccessors").creative.asset_feed_spec[l].set(
                u,
                e,
              )
            : e.setIn(n.getPathOrThrow(e, t), u)
        );
      }
      return (
        r("FBLogger")("ads_dynamic_creative_optimization").warn(
          "Could not set asset label at index because assets were not found. " +
            JSON.stringify({ assets: u, specField: n, assetIndex: a }, null, 2),
        ),
        e
      );
    }
    function h(e, t, n, a, i) {
      var l = s.get(n.name),
        u;
      return (
        l !== void 0
          ? (u = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec[l].get(
              e,
            ))
          : (u = n.getValue(e, t)),
        u != null
          ? u instanceof r("immutable").List
            ? a < 0 || a >= u.count()
              ? (r("FBLogger")("ads_dynamic_creative_optimization").warn(
                  "assetIndex in getting all ad labels should be non-negative and less than the asset count",
                ),
                e)
              : ((u = u.update(a, function (e) {
                  return e.set(o("AdsAssetFeedConstant").ADLABELS, i);
                })),
                l !== void 0
                  ? r("AdsAdgroupRecordAccessors").creative.asset_feed_spec[
                      l
                    ].set(u, e)
                  : e.setIn(n.getPathOrThrow(e, t), u))
            : (r("FBLogger")("ads_dynamic_creative_optimization").warn(
                "this function to get all ad labels must be invoked on an asset feed field",
              ),
              e)
          : (r("FBLogger")("ads_dynamic_creative_optimization").warn(
              "Could not set all asset labels at index because assets were not found. %s",
              JSON.stringify(
                { assets: u, specField: n, assetIndex: a },
                null,
                2,
              ),
            ),
            e)
      );
    }
    function y(e, t, n, a, i) {
      var l = s.get(n.name),
        u;
      if (
        (l !== void 0
          ? (u = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec[l].get(
              e,
            ))
          : (u = n.getValue(e, t)),
        !(u instanceof r("immutable").List))
      )
        throw r("FBLogger")("ads_dynamic_creative_optimization")
          .blameToPreviousFile()
          .mustfixThrow("this function must be invoked on an asset feed field");
      if (a < 0 || a >= u.count())
        throw r("FBLogger")("ads_dynamic_creative_optimization")
          .blameToPreviousFile()
          .mustfixThrow(
            "assetIndex should be non-negative and less than the asset count",
          );
      return (
        (u = u.update(a, function (e) {
          return e.update(o("AdsAssetFeedConstant").ADLABELS, function (e) {
            return e.filter(function (e) {
              return e.get("name") !== i;
            });
          });
        })),
        l !== void 0
          ? r("AdsAdgroupRecordAccessors").creative.asset_feed_spec[l].set(u, e)
          : e.setIn(n.getPathOrThrow(e, t), u)
      );
    }
    function C(e, t, n, o) {
      var a = s.get(n.name);
      return a !== void 0
        ? r("AdsAdgroupRecordAccessors").creative.asset_feed_spec[a].set(
            r("immutable").List(o),
            e,
          )
        : e.setIn(n.getPathOrThrow(e, t), r("immutable").List(o));
    }
    function b(e, t, n, a, i) {
      var l = r("isTruthy")(a)
          ? { toSet: "hash", toRemove: "url", value: a }
          : { toSet: "url", toRemove: "hash", value: i },
        s = l.value;
      if (!r("isTruthy")(s))
        throw r("FBLogger")("ads_dynamic_creative_optimization")
          .blameToPreviousFile()
          .mustfixThrow("both imageHash and imageURL cannot be null");
      var u = _(
        e,
        t,
        r("AdsUnifiedCreativeAPIFields").imageHash,
        n,
        l.toSet,
        s,
      );
      return o(
        "adsAssetFeedSpecRemoveAssetFieldAtIndex",
      ).adsAssetFeedSpecRemoveAssetFieldAtIndex(u, "images", n, l.toRemove);
    }
    function v(e, t, n, a) {
      var i = Object.keys(a);
      return i.length === 0 ||
        (i.length === 1 && a[r("AdImageSpecCropKeys").NO_CROP])
        ? o(
            "adsAssetFeedSpecRemoveAssetFieldAtIndex",
          ).adsAssetFeedSpecRemoveAssetFieldAtIndex(
            e,
            "images",
            n,
            "image_crops",
          )
        : _(
            e,
            t,
            r("AdsUnifiedCreativeAPIFields").imageHash,
            n,
            "image_crops",
            r("immutable").fromJS(a),
          );
    }
    function S(e, t, n, a, i) {
      var l = e;
      if (r("isTruthy")(a)) {
        if (
          ((l = _(
            l,
            t,
            r("AdsUnifiedCreativeAPIFields").videoID,
            n,
            "video_id",
            a,
          )),
          o("AdsAssetFeedUtils").isDLOAdgroupFromRecord(l))
        ) {
          var s = o("AdsDLOLanguageUtils").getPrimaryLanguageFromAdgroup(l);
          l = o("AdsDLOLanguageUtils").setLanguageLabelForUnlabeledMediaAsset(
            l,
            s,
          );
        }
      } else if (r("isFalsey")(i))
        return r("AdsAdgroupRecordAccessors")
          .creative.asset_feed_spec.videos.at(n)
          .delete(l);
      return (
        r("isTruthy")(i)
          ? (l = _(
              l,
              t,
              r("AdsUnifiedCreativeAPIFields").videoThumbnailURL,
              n,
              "thumbnail_url",
              i,
            ))
          : (l = o(
              "adsAssetFeedSpecRemoveAssetFieldAtIndex",
            ).adsAssetFeedSpecRemoveAssetFieldAtIndex(
              l,
              "videos",
              n,
              "thumbnail_url",
            )),
        l
      );
    }
    function R(e, t, n) {
      var o,
        a =
          (o = e.creative) == null || (o = o.asset_feed_spec) == null
            ? void 0
            : o.videos;
      if (!(a instanceof r("immutable").List))
        throw r("FBLogger")("ads_dynamic_creative_optimization")
          .blameToPreviousFile()
          .mustfixThrow("this function must be invoked on an asset feed field");
      if (t < 0 || t >= a.count())
        throw r("FBLogger")("ads_dynamic_creative_optimization")
          .blameToPreviousFile()
          .mustfixThrow(
            "assetIndex should be non-negative and less than the asset count",
          );
      var i;
      return (
        !n || n.length === 0
          ? (i = a.update(t, function (e) {
              return e.delete("caption_ids");
            }))
          : (i = a.update(t, function (e) {
              return e.set("caption_ids", r("immutable").List(n));
            })),
        r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.videos.set(i, e)
      );
    }
    function L(e, t, n, o) {
      var a,
        i =
          ((a = e.creative) == null || (a = a.asset_feed_spec) == null
            ? void 0
            : a.asset_customization_rules) || r("immutable").List();
      if (!(i instanceof r("immutable").List))
        throw r("FBLogger")("ads_dynamic_creative_optimization")
          .blameToPreviousFile()
          .mustfixThrow(
            "this function must be invoked on a valid customization rules field",
          );
      var l = i
        .map(function (e) {
          return e.getIn([t, "name"]);
        })
        .filter(Boolean);
      if (l.size === 0) return e;
      var s = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec[o].get(e),
        u = new Map(
          l.map(function (e) {
            return [
              e,
              s.filter(function (t) {
                return t
                  .getIn(["adlabels"])
                  .map(function (e) {
                    return e.get("name");
                  })
                  .contains(e);
              }),
            ];
          }),
        ),
        c = [];
      return (
        u.forEach(function (e, t) {
          var n = e.get(0),
            o = n.get("adlabels").find(function (e) {
              return e.get("name") == t;
            }),
            a = !1;
          (c.forEach(function (e, t) {
            e.get("text") == n.get("text") &&
              ((c[t] = e.set("adlabels", e.get("adlabels").push(o))), (a = !0));
          }),
            a || c.push(n.set("adlabels", r("immutable").List([o]))));
        }),
        r("AdsAdgroupRecordAccessors").creative.asset_feed_spec[o].set(
          r("immutable").List(c),
          e,
        )
      );
    }
    function E(t, n, o, a) {
      var i = s.get(o.name),
        l;
      if (
        (i !== void 0
          ? (l = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec[i].get(
              t,
            ))
          : (l = o.getValue(t, n)),
        l == null || !(l instanceof r("immutable").List))
      )
        return t;
      var u = l
          .groupBy(function (e) {
            return e.remove(a).filter(function (e) {
              return e !== void 0;
            });
          })
          .map(function (t) {
            return t
              .flatMap(function (t) {
                var n = t.get(a);
                return n instanceof r("immutable").List ? n : e;
              })
              .toSet()
              .toList();
          }),
        c = u
          .mapEntries(function (e) {
            var t = e[0],
              n = e[1];
            return [t, t.set(a, n)];
          })
          .valueSeq()
          .toList();
      return i !== void 0
        ? r("AdsAdgroupRecordAccessors").creative.asset_feed_spec[i].set(c, t)
        : t.setIn(o.getPathOrThrow(t, n), c);
    }
    function k(e, t, n, o, a, i, l) {
      l === void 0 && (l = !1);
      var u = s.get(n.name),
        c;
      if (
        (u !== void 0
          ? (c = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec[u].get(
              e,
            ))
          : (c = n.getValue(e, t)),
        !(c != null && r("immutable").List.isList(c) && typeof c != "string"))
      )
        throw r("FBLogger")("ads_dynamic_creative_optimization")
          .blameToPreviousFile()
          .mustfixThrow("this function must be invoked on an asset feed field");
      if (o < 0 || o >= c.size)
        throw r("FBLogger")("ads_dynamic_creative_optimization")
          .blameToPreviousFile()
          .mustfixThrow(
            "assetIndex should be non-negative and less than the asset count",
          );
      var m = r("nullthrows")(c.get(o)),
        p = m.get(a);
      if (p != null && p.size === 1)
        return { adgroupWithIsolatedAsset: e, isolatedAssetIndex: o };
      var _ = c,
        f = _;
      l === !0 ? (f = _.splice(o, 0, m)) : (f = _.push(m));
      var g;
      u !== void 0
        ? (g = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec[u].set(
            f,
            e,
          ))
        : (g = e.setIn(n.getPathOrThrow(e, t), f));
      var h = l === !0 ? o : f.size - 1,
        y = l === !0 ? o + 1 : o;
      return (
        (g = d(g, t, n, a, y, h, i)),
        { adgroupWithIsolatedAsset: g, isolatedAssetIndex: h }
      );
    }
    function I(e, t, n) {
      var o,
        a =
          (o = e.creative) == null || (o = o.asset_feed_spec) == null
            ? void 0
            : o.asset_customization_rules;
      if (a == null) return e;
      var i = t === "image_label" ? "images" : "videos",
        l = T(e, i, n),
        s = a.filter(function (e) {
          var o = e.get(t);
          return o == null || !(o instanceof r("immutable").Map)
            ? !0
            : o.get("name") !== n;
        });
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.asset_customization_rules.set(s, l);
    }
    function T(e, t, n) {
      var o,
        a = (o = e.creative) == null ? void 0 : o.asset_feed_spec;
      if (a == null) return e;
      var i = a.get(t);
      if (i == null || !(i instanceof r("immutable").List)) return e;
      var l = i.reduce(function (e, t) {
        if (!(t instanceof r("immutable").Map)) return e.push(t);
        var o = t.get("adlabels");
        if (!(o instanceof r("immutable").List)) return e.push(t);
        var a = o.filter(function (e) {
          return !(e instanceof r("immutable").Map) || e.get("name") !== n;
        });
        if (a.size === 0) return e;
        var i = t.set("adlabels", a);
        return e.push(i);
      }, r("immutable").List());
      return r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.set(
        a.set(t, l),
        e,
      );
    }
    function D(e, t) {
      var n,
        o =
          (n = e.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.asset_customization_rules;
      if (o == null) return e;
      var a = o.map(function (e) {
        return e.delete(t);
      });
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.asset_customization_rules.set(a, e);
    }
    function x(e, t, n, a) {
      var i = o("AdsUEditorAdgroupBodyMutators").getDefaultPlacementBodyAssets(
          e,
        ),
        l = o(
          "AdsUEditorAdgroupHeadlineMutators",
        ).getDefaultPlacementHeadlineAssets(e),
        s = r("adsPlacementAssetMutationConvertFromAssetFeedSpec")(
          t,
          e,
          r("nullthrows")(n.pivots.objective),
        );
      return o(
        "AdsUEditorAdgroupAssetFeedMutators",
      ).convertPACDoFToDoFAssetFeedSpec(s, n, t, i, l, a);
    }
    function $(e, t, n, o, a, i, l, s) {
      var u = n.getValue(e, t);
      if (
        (u == null && (u = r("immutable").List()),
        !(u instanceof r("immutable").List))
      )
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "[PAC] this function must be invoked on an asset feed field, and asset must be Immutable.List",
        );
      var c = f(e, t, n, s, o, a, !1);
      return g(c, t, n, s, l);
    }
    ((l.UnifiedCreativeAPIToAssetFeedField = s),
      (l.PAC_DOF_TO_DOF_ALLOWED_BODY_ASSET_FIELDS = u),
      (l.PAC_DOF_TO_DOF_ALLOWED_TITLE_ASSET_FIELDS = c),
      (l.removeAssetAtIndex = m),
      (l.countAssets = p),
      (l.setAssetFieldAtIndex = _),
      (l.insertAssetFieldAtIndex = f),
      (l.setAssetAdLabelAtIndex = g),
      (l.setAssetAllAdLabelsAtIndex = h),
      (l.removeAssetAdLabelAtIndex = y),
      (l.setAssetsArrayInField = C),
      (l.setImageAssetAtIndex = b),
      (l.setImageCropAtIndex = v),
      (l.setVideoAssetAtIndex = S),
      (l.setVideoCaptionAtIndex = R),
      (l.removeDofOptionAssetsFromPACAssetFeed = L),
      (l.removeDuplicateAssets = E),
      (l.isolateAssetWithLabel = k),
      (l.removeMediaByLabel = I),
      (l.removeMediaLabelFromAssetCustomizationRules = D),
      (l.convertPACDofToDofAssetFeedSpecAdgroup = x),
      (l.insertAssetValueWithLabelAtIndex = $));
  },
  98,
);
