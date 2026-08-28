__d(
  "AdsAdgroupPostTypeMutatorsUtils",
  [
    "invariant",
    "AdCampaignDestination",
    "AdsAPIAdgroupPaths",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
    "AdsAssetFeedUtils",
    "AdsChildAttachmentsUtils",
    "AdsPACSupportedLinkCTAs",
    "AdsPECampaignSelectors",
    "AdsUnifiedCreativeAPIFieldMappings",
    "ApiAdObjectTypes",
    "ApiDynamicCreativeOptimizationTypes",
    "FBLogger",
    "adsAssetFeedAdgroupRequireCallToActionSpec",
    "adsConvertAdObjectRecordToPlainJS",
    "getErrorSafe",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m = (e = r("immutable")).List([]),
      p = e.Set([]),
      _ = e.List([
        (u = r("AdsAPIAdgroupPaths")).CREATIVE.IMAGE_CROPS,
        u.CREATIVE.IMAGE_HASH,
        u.CREATIVE.VIDEO_ID,
      ]),
      f = e.List([
        u.CREATIVE.BODY,
        u.CREATIVE.CALL_TO_ACTION_TYPE,
        u.CREATIVE.IMAGE_CROPS,
        u.CREATIVE.IMAGE_HASH,
        u.CREATIVE.IMAGE_URL,
        u.CREATIVE.INSTAGRAM_PERMALINK_URL,
        u.CREATIVE.INTERACTIVE_COMPONENTS_SPEC.path,
        u.CREATIVE.PLATFORM_CUSTOMIZATIONS.path,
        u.CREATIVE.TITLE,
        u.CREATIVE.VIDEO_ID,
        u.CREATIVE.APPLINK_TREATMENT,
        u.CREATIVE.DEGREES_OF_FREEDOM_SPEC.VIDEO_TRANSFORMATION_TYPES,
      ]),
      g = e.List([
        u.CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA.MESSAGE,
        u.CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA.NAME,
        u.CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA.LINK,
        u.CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA.DESCRIPTION,
      ]);
    function h(e, t) {
      return !t.imageURL || !e.getIn(r("nullthrows")(t.imageHash))
        ? e
        : e.deleteIn(t.imageURL);
    }
    function y(e) {
      return r("immutable").Set.fromKeys(
        r("immutable")
          .Map(e)
          .filter(function (e) {
            return !!e;
          }),
      );
    }
    var C = e.Record({
        dataPath: null,
        deletePaths: m,
        dofEnabledFieldKeys: p,
        mapping: null,
        objectType: null,
        resolvers: m,
        useThisConfigForTheGivenObjectType: !0,
      }),
      b = C({
        dataPath: [],
        objectType: (c = r("ApiAdObjectTypes")).DOMAIN,
        mapping: (d = r("AdsUnifiedCreativeAPIFieldMappings")).DOMAIN_MAPPING,
      }),
      v = C({
        dataPath: u.CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA.path,
        deletePaths: _,
        mapping: d.TEMPLATE_MAPPING,
        objectType: c.SHARE,
        resolvers: e.List([h]),
        useThisConfigForTheGivenObjectType: !1,
      }),
      S = {
        dataPath: u.CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.path,
        deletePaths: _,
        objectType: c.SHARE,
        resolvers: e.List([h]),
      },
      R = C(
        babelHelpers.extends({}, S, {
          dofEnabledFieldKeys: y(d.LINK_MAPPING_DOF_ENABLED_FIELDS),
          mapping: d.LINK_DOF_MAPPING,
          useThisConfigForTheGivenObjectType: !1,
        }),
      ),
      L = C(
        babelHelpers.extends({}, S, {
          dofEnabledFieldKeys: y(d.LINK_MAPPING_DOF_WITH_IMAGE_ENABLED_FIELDS),
          mapping: d.LINK_DOF_WITH_IMAGE_MAPPING,
          useThisConfigForTheGivenObjectType: !1,
          resolvers: e.List([]),
        }),
      ),
      E = C(babelHelpers.extends({}, S, { mapping: d.LINK_MAPPING })),
      k = function (t) {
        return C({
          dataPath: o(
            "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
          ).isUnifiedCreativePhotoDataSupported(t)
            ? r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.path
            : r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.PHOTO_DATA
                .path,
          deletePaths: _,
          mapping: o(
            "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
          ).isUnifiedCreativePhotoDataSupported(t)
            ? r("AdsUnifiedCreativeAPIFieldMappings").UCA_PHOTO_MAPPING
            : r("AdsUnifiedCreativeAPIFieldMappings").PHOTO_MAPPING,
          objectType: r("ApiAdObjectTypes").PHOTO,
          resolvers: r("immutable").List([h]),
        });
      },
      I = function (t) {
        return C({
          dataPath: o(
            "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
          ).isUnifiedCreativePhotoDataSupported(t)
            ? r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.path
            : r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.PHOTO_DATA
                .path,
          deletePaths: _,
          mapping: o(
            "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
          ).isUnifiedCreativePhotoDataSupported(t)
            ? r("AdsUnifiedCreativeAPIFieldMappings")
                .UCA_PHOTO_MAPPING_POST_ENGAGEMENT
            : r("AdsUnifiedCreativeAPIFieldMappings")
                .PHOTO_MAPPING_POST_ENGAGEMENT,
          objectType: r("ApiAdObjectTypes").PHOTO,
          resolvers: r("immutable").List([h]),
        });
      },
      T = function (t) {
        return C({
          dataPath: o(
            "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
          ).isUnifiedCreativePhotoDataSupported(t)
            ? r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.path
            : r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.PHOTO_DATA
                .path,
          deletePaths: _,
          objectType: r("ApiAdObjectTypes").PHOTO,
          dofEnabledFieldKeys: y(
            r("AdsUnifiedCreativeAPIFieldMappings")
              .PHOTO_MAPPING_DOF_ENABLED_FIELDS,
          ),
          mapping: o(
            "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
          ).isUnifiedCreativePhotoDataSupported(t)
            ? r("AdsUnifiedCreativeAPIFieldMappings").UCA_PHOTO_DOF_MAPPING
            : r("AdsUnifiedCreativeAPIFieldMappings").PHOTO_DOF_MAPPING,
          useThisConfigForTheGivenObjectType: !1,
        });
      },
      D = C({
        dataPath: u.CREATIVE.OBJECT_STORY_SPEC.PHOTO_DATA.path,
        deletePaths: _,
        mapping: d.MCA_FROM_MAPPING,
        objectType: c.PHOTO,
        resolvers: e.List([h]),
        useThisConfigForTheGivenObjectType: !1,
      }),
      x = C({
        dataPath: u.CREATIVE.path,
        deletePaths: _.push(u.CREATIVE.OBJECT_STORY_ID),
        mapping: d.STATUS_MAPPING,
        objectType: c.STATUS,
      }),
      $ = C({ dataPath: u.CREATIVE.path, mapping: d.STATUS_MAPPING }),
      P = C({
        dataPath: u.CREATIVE.path,
        dofEnabledFieldKeys: y(d.LINK_MAPPING_DOF_ENABLED_FIELDS),
        mapping: d.EPA_DOF_MAPPING,
      }),
      N = {
        dataPath: u.CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA.path,
        deletePaths: _.push(u.CREATIVE.IMAGE_URL),
        objectType: c.VIDEO,
      },
      M = C(
        babelHelpers.extends({}, N, {
          dofEnabledFieldKeys: y(d.VIDEO_MAPPING_DOF_ENABLED_FIELDS),
          mapping: d.VIDEO_DOF_MAPPING,
          useThisConfigForTheGivenObjectType: !1,
        }),
      ),
      w = C(babelHelpers.extends({}, N, { mapping: d.VIDEO_MAPPING })),
      A = C({
        dataPath: u.CREATIVE.ASSET_FEED_SPEC.path,
        deletePaths: f,
        mapping: d.ASSET_FEED_MAPPING,
        objectType: c.SHARE,
        useThisConfigForTheGivenObjectType: !1,
      }),
      F = C({
        dataPath: u.CREATIVE.ASSET_FEED_SPEC.path,
        deletePaths: f,
        mapping: d.ASSET_FEED_MAPPING_WITH_CTA,
        objectType: c.SHARE,
        useThisConfigForTheGivenObjectType: !1,
      }),
      O = C({
        dataPath: u.CREATIVE.ASSET_FEED_SPEC.path,
        deletePaths: f,
        mapping: d.ASSET_FEED_MAPPING_PAC_CAROUSEL,
        objectType: c.SHARE,
        useThisConfigForTheGivenObjectType: !1,
      }),
      B = C({
        dataPath: u.CREATIVE.ASSET_FEED_SPEC.path,
        deletePaths: g,
        mapping: d.ASSET_FEED_MAPPING_WITH_CTA,
        objectType: c.SHARE,
        useThisConfigForTheGivenObjectType: !1,
      }),
      W = e.Set([r("AdsAPIObjectives").LEAD_GENERATION]),
      q = function (t) {
        return r("immutable").Set([b, E, k(t), x, v, w]);
      },
      U = function (t) {
        return r("immutable").Set([R, M, T(t)]);
      },
      V = e.Set([L, M]);
    function H(e, t, n) {
      return n === r("AdsAPIObjectives").STORE_VISITS
        ? v
        : o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e)
          ? $
          : n === r("AdsAPIObjectives").POST_ENGAGEMENT &&
              t === r("ApiAdObjectTypes").PHOTO
            ? I(e)
            : q(e)
                .filter(function (e) {
                  return (
                    e.objectType === t && e.useThisConfigForTheGivenObjectType
                  );
                })
                .first();
    }
    function G(e, t, n) {
      return r("nullthrows")(H(e, t, n));
    }
    function z(e, t, n) {
      if (o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e)) return P;
      var a = (n ? V : U(e))
        .filter(function (e) {
          return e.objectType === t && !e.useThisConfigForTheGivenObjectType;
        })
        .first();
      return a == null
        ? (r("FBLogger")("ads-dof").mustfix(
            "Cannot find DOF config for object type %s",
            t,
          ),
          G(e, t))
        : a;
    }
    function j(e, t, n) {
      return (
        r("AdsPACSupportedLinkCTAs").includes(n) &&
        ((e === F && t === w) || (t === F && e === w))
      );
    }
    function K(e, t, n) {
      return (
        (n === M && t === w) ||
        (n === R && t === E) ||
        (n === L && t === E) ||
        (n === P && t === $) ||
        (n.equals(T(e)) && t.equals(k(e)))
      );
    }
    function Q(e, t, n) {
      return (
        (t === M && n === w) ||
        (t === R && n === E) ||
        (t === L && n === E) ||
        (n === $ && t === P) ||
        (t.equals(T(e)) && n.equals(k(e)))
      );
    }
    function X(e, t) {
      return (
        t.dataPath === r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.path &&
        e.dataPath === r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.path &&
        (t.objectType === r("ApiAdObjectTypes").PHOTO ||
          e.objectType === r("ApiAdObjectTypes").PHOTO)
      );
    }
    function Y(e, t) {
      return (
        t.dataPath ===
          r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.path &&
        e.dataPath === r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.path
      );
    }
    function J(e, t, n, o, a) {
      var i = y(
        r("AdsUnifiedCreativeAPIFieldMappings").DOF_CAROUSEL_ENABLED_FIELDS,
      );
      return n
        ? a
          ? i
          : t.dofEnabledFieldKeys
        : o
          ? a
            ? i
            : e.dofEnabledFieldKeys
          : p;
    }
    function Z(e, t, n, a, i, l, u, c) {
      var d;
      (a === void 0 && (a = null), i === void 0 && (i = null));
      var p = n,
        _ = i;
      if (e.equals(t)) return p;
      var f = e.dataPath,
        g = e.mapping,
        h = t.dataPath,
        y = t.mapping,
        C = K(p, e, t),
        b = Q(p, e, t),
        v = X(e, t),
        S = Y(e, t),
        R =
          ((d = p.creative) == null || (d = d.asset_feed_spec) == null
            ? void 0
            : d.optimization_type) ===
          r("ApiDynamicCreativeOptimizationTypes").DEGREES_OF_FREEDOM,
        L = r("adsConvertAdObjectRecordToPlainJS")(p),
        E = o(
          "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
        ).isUnifiedCreativePhotoData(L),
        k = C || b,
        I = o("AdsChildAttachmentsUtils").isStaticCarouselAd(p),
        T = J(e, t, C, b, I),
        D = function (t) {
          var e = g[t];
          if (e) return (!e.path || s(0, 1992, e), p.getIn(e));
        },
        x = D("callToActionType"),
        N =
          x instanceof r("immutable").List
            ? x.first()
            : x instanceof Array
              ? x[0]
              : x,
        M = j(t, e, N);
      y.forEach(function (e, t) {
        var n = D(t);
        if (
          !(t === "message" && E && (!S || R) && !k) &&
          !(t === "linkURL" && M) &&
          !(!e || e.path || n == null)
        ) {
          if (k) {
            if (!T.has(t)) return;
            var o = g[t];
            o && !(E && C && t === "message") && (_ = (_ || m).push(o));
          }
          if (l && u) {
            var a = u(t),
              i;
            (a &&
              ((i = {}),
              Object.keys(a).forEach(function (e) {
                if (!(a[e] === "linkURL" && M)) {
                  var t = D(a[e]);
                  t && (i[e] = t);
                }
              })),
              (n = l(t, n, i, c)));
          }
          var s = p.getSubRecordClass(e);
          if (s && n != null)
            try {
              p = p.setIn(e, new s(n.toJS()));
            } catch (o) {
              var d = r("getErrorSafe")(o);
              r("FBLogger")("ads")
                .blameToPreviousFrame()
                .warn(
                  "Error setting adgroup property | Message: ",
                  d.message,
                  " | Key:",
                  t,
                  " | toPath:",
                  String(e),
                  " | Data type:",
                  typeof n,
                  " | Data:",
                  n,
                );
            }
          else
            try {
              p = p.setIn(e, n);
            } catch (e) {
              var f = r("getErrorSafe")(e);
              r("FBLogger")("ads")
                .blameToPreviousFrame()
                .mustfix(
                  "Error setting adgroup property | Message: ",
                  f.message,
                  " | Key:",
                  t,
                );
            }
        }
      });
      var w = a && a.getIn(h);
      if (w) {
        var A = p.getIn(h);
        ((A =
          A &&
          A.mergeDeepWith(function (e, t) {
            return t || e;
          }, w)),
          (p = p.setIn(h, A || w)));
      }
      ((t.objectType == null && (t === $ || t === P)) ||
        (p = r("AdsAdgroupRecordAccessors").creative.object_type.set(
          t.objectType,
          p,
        )),
        !k && !v && f && !(E && R) && (p = p.deleteIn(f) || p));
      var F = ee(t.deletePaths, _ || m);
      return (
        v &&
          (F = F.filter(function (e) {
            return !(
              f.length <= e.length &&
              f.every(function (t, n) {
                return e[n] === t;
              })
            );
          })),
        F.forEach(function (e) {
          return (p = p.deleteIn(e));
        }),
        t.resolvers.forEach(function (e) {
          return (p = e(p, y));
        }),
        p
      );
    }
    function ee(e, t) {
      return e.toSet().union(t.toSet()).toList();
    }
    function te(e, t, n, r, o) {
      if ((r === void 0 && (r = null), o === void 0 && (o = null), e === t))
        return n;
      var a = G(n, e),
        i = G(n, t);
      return Z(a, i, n, r, o);
    }
    function ne(e, t, n) {
      var a;
      if (
        n === r("ApiDynamicCreativeOptimizationTypes").PLACEMENT &&
        o("AdsChildAttachmentsUtils").isCarouselAd(e)
      )
        return O;
      if (
        (o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(e) ||
          n === r("ApiDynamicCreativeOptimizationTypes").PLACEMENT) &&
        r("adsAssetFeedAdgroupRequireCallToActionSpec")(e)
      )
        return F;
      var l =
        (a = o("AdsPECampaignSelectors")
          .getCachedByFieldsSelector()(
            e.adset_id,
            { destination_type: null },
            i.id,
          )
          .getValue()) == null
          ? void 0
          : a.destination_type;
      return (t != null && W.contains(t)) ||
        l === r("AdCampaignDestination").WEBSITE_AND_LEAD_FORM ||
        (t === r("AdsAPIObjectives").VIDEO_VIEWS &&
          o("AdsAssetFeedUtils").isDCAssetCustomizationAdgroupFromSpec(e)) ||
        (t === r("AdsAPIObjectives").MESSAGES &&
          n ===
            r("ApiDynamicCreativeOptimizationTypes").DOF_MESSAGING_DESTINATION)
        ? F
        : t === r("AdsAPIObjectives").STORE_VISITS
          ? B
          : n === r("ApiDynamicCreativeOptimizationTypes").LANGUAGE ||
              n === r("ApiDynamicCreativeOptimizationTypes").MULTI_CREATOR
            ? F
            : A;
    }
    ((l.ConversionConfig = C),
      (l.domainConversionConfig = b),
      (l.templateConversionConfig = v),
      (l.linkConversionConfig = E),
      (l.mcaFromConversionConfig = D),
      (l.videoConversionConfig = w),
      (l.findTheNullableConfig = H),
      (l.findTheConfig = G),
      (l.findDOFConfig = z),
      (l.convertPostTypeInAdgroupRecordUsingConfig = Z),
      (l.convertPostTypeInAdgroupRecord = te),
      (l.getConversionConfigForAdgroupAndObjective = ne));
  },
  98,
);
