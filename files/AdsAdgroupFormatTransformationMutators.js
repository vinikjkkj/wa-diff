__d(
  "AdsAdgroupFormatTransformationMutators",
  [
    "AdCreativeFeatureActionTypeUtils",
    "AdCreativeFormatTransformationDataSourceType",
    "AdCreativeFormatTransformationFormatType",
    "AdsAPlusCStickyOptOutUtils",
    "AdsAdgroupConnectedSourcesMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSiteLinksAdvertiserFormatOffMutators",
    "AdsAssetFeedUtils",
    "AdsAutomaticFlowUtils",
    "AdsCreativeEnrollmentDefaultOnStoreUtils",
    "AdsCreativeEnrollmentDefaultOnUtils",
    "AdsDynamicAdsFormatUtils",
    "AdsDynamicAdsUtils",
    "AdsFlexibleFormatAdexUtils",
    "AdsFlexibleFormatDAUtils",
    "AdsFlexibleFormatTransformationUtils",
    "AdsGovernedCreativeFeaturesMutators",
    "AdsMetadataConnectedSourcesUtils",
    "AdsMutators",
    "AdsSiteLinksFormatConsentRefresh",
    "AdsSiteLinksSharedCooldownGK",
    "AdsSiteLinksSharedCooldownUtils",
    "AdsUGCDataConsentUtils",
    "ApiDynamicCreativeOptimizationTypes",
    "DAFlexibleFormatUtils",
    "ODS",
    "PEDefaultOnExclusions",
    "PERelevanceUtils",
    "SEFormatConsentProducerErrorUtils",
    "gkx",
    "immutable",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n, o) {
      if (n !== "carousel" || o !== "site_links") return [n];
      var a = function (t) {
        var e;
        return (e = r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.get(t)) == null
          ? void 0
          : e.find(function (e) {
              return e.get("format") === "video_slideshow";
            });
      };
      return r("immutable").is(a(e), a(t)) ? [n] : [n, "video_slideshow"];
    }
    function u(e) {
      return e === "collage" || e === "photo_collage";
    }
    function c(e) {
      var t =
        e instanceof r("immutable").List
          ? e.toArray()
          : Array.isArray(e)
            ? e
            : [];
      return t.map(function (e) {
        return String(e);
      });
    }
    var d = ["ugc"];
    function m(e) {
      return d.some(function (t) {
        return t === e;
      });
    }
    function p(e) {
      return (e != null ? e : []).filter(function (e) {
        return !m(e);
      });
    }
    function _(e, t) {
      var n = c(e),
        r = c(t),
        o = Array.from(
          new Set(
            [].concat(n, r).filter(function (e) {
              return e !== "none";
            }),
          ),
        );
      if (o.length > 0) return o;
      var a = function (t) {
        return t.includes("none");
      };
      return a(n) && a(r) ? ["none"] : [];
    }
    function f(e, t) {
      var n = r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.get(e);
      if (n == null) return e;
      var a =
          t != null
            ? t
            : o("AdsFlexibleFormatAdexUtils").getCollageFtsFormatForAdgroup(e),
        i = a === "photo_collage" ? "collage" : "photo_collage",
        l = n.find(function (e) {
          return e.get("format") === i;
        });
      if (l == null) return e;
      var s = n.find(function (e) {
          return e.get("format") === a;
        }),
        u;
      if (s == null)
        u = n.map(function (e) {
          return e.get("format") === i ? e.set("format", a) : e;
        });
      else {
        var c,
          d = _(s.get("data_source"), l.get("data_source")),
          m =
            (c = s.get("customizations")) != null ? c : l.get("customizations");
        u = n
          .filter(function (e) {
            return e.get("format") !== i;
          })
          .map(function (e) {
            if (e.get("format") !== a) return e;
            var t = e.set("data_source", d);
            return (m != null && (t = t.set("customizations", m)), t);
          });
      }
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.set(u)(e);
    }
    function g(e, t) {
      var n = "photo_collage",
        o = f(e, n),
        a = r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.get(o),
        i = function (o) {
          return o.set("format", n).set("data_source", r("immutable").List(t));
        };
      if (a == null)
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.set(
          r("immutable").List([i(r("immutable").Map())]),
        )(o);
      var l = a.some(function (e) {
          return u(e.get("format"));
        }),
        s = l
          ? a.map(function (e) {
              return u(e.get("format")) ? i(e) : e;
            })
          : a.push(i(r("immutable").Map()));
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.set(s)(o);
    }
    function h(e) {
      return g(e, []);
    }
    function y(e) {
      return g(e, ["none"]);
    }
    function C(e) {
      var t;
      if (
        !o("AdsGovernedCreativeFeaturesMutators").isFDOGovernanceEnabled() ||
        !o("AdsFlexibleFormatAdexUtils").isSASingleCollageSurface(e)
      )
        return !1;
      var n =
        (t = e.creative) == null || (t = t.format_transformation_spec) == null
          ? void 0
          : t.find(function (e) {
              return u(e.get("format"));
            });
      if (n != null) {
        var a = n.get("data_source");
        return (
          (r("immutable").List.isList(a) || Array.isArray(a)) &&
          a.includes("none")
        );
      }
      return o(
        "AdsCreativeEnrollmentDefaultOnStoreUtils",
      ).isFormatEnrollmentDefaultOnVetoedForSelectedAccount("photo_collage");
    }
    function b(e) {
      return !o("AdsFlexibleFormatAdexUtils").isSASingleCollageSurface(e) ||
        !o("AdsFlexibleFormatAdexUtils").passGKForSASingleCollage(!0) ||
        C(e) ||
        v(e)
        ? e
        : h(e);
    }
    function v(e) {
      var t = r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.get(e);
      return (
        t != null &&
        t.some(function (e) {
          return u(e.get("format"));
        })
      );
    }
    function S(e) {
      var t = r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.get(e);
      if (t == null) return e;
      var n = t.filter(function (e) {
        return e.get("format") !== "da_collection";
      });
      return n.size === t.size
        ? e
        : n.isEmpty()
          ? r(
              "AdsAdgroupRecordAccessors",
            ).creative.format_transformation_spec.delete(e)
          : r(
              "AdsAdgroupRecordAccessors",
            ).creative.format_transformation_spec.set(n, e);
    }
    function R(e, t) {
      var n = r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.get(e);
      if (n == null) return e;
      var o = n.some(function (e) {
        return e.get("format") === "da_collection";
      });
      return o && t !== "aPlusc" ? e : T(S(e));
    }
    function L(e, t) {
      if (!o("AdsFlexibleFormatDAUtils").isReactiveControlCardVisibleForDA(e))
        return o("AdsDynamicAdsUtils").isDynamicAd(e) &&
          !o("AdsFlexibleFormatDAUtils").isEligibleForReactiveControl()
          ? S(e)
          : e;
      if (t === "aPlusc") return e;
      var n = r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.get(e);
      return n == null
        ? e
        : t === "reactive_control"
          ? r(
              "AdsAdgroupRecordAccessors",
            ).creative.format_transformation_spec.set(
              n
                .filter(function (e) {
                  return e.get("format") !== "da_collection";
                })
                .unshift(
                  r("immutable").Map({
                    data_source: ["none"],
                    format: "da_collection",
                  }),
                ),
              e,
            )
          : r(
              "AdsAdgroupRecordAccessors",
            ).creative.format_transformation_spec.delete(e);
    }
    function E(e, t, n) {
      var a;
      if (!o("AdsFlexibleFormatDAUtils").isReactiveControlCardVisibleForDA(e))
        return o("AdsDynamicAdsUtils").isDynamicAd(e) &&
          !o("AdsFlexibleFormatDAUtils").isEligibleForReactiveControl() &&
          (n == null ? void 0 : n.da_collection) !== !1
          ? R(e, t)
          : e;
      if (t === "aPlusc") return e;
      var i = "catalog_single_media",
        l =
          (a = r(
            "AdsAdgroupRecordAccessors",
          ).creative.format_transformation_spec.get(e)) == null
            ? void 0
            : a.find(function (e) {
                return e.get("format") === i;
              }),
        s = e;
      if (
        t === "reactive_control" ||
        (n == null ? void 0 : n.da_collection) !== !1
      ) {
        var u = o(
          "DAFlexibleFormatUtils",
        ).isAdgroupEligibleForDACarouselIntroCardRevamp(e)
          ? ["catalog"]
          : [];
        if (
          ((s = r(
            "AdsAdgroupRecordAccessors",
          ).creative.format_transformation_spec.set(
            r("immutable").List([
              r("immutable").Map({ data_source: u, format: "da_collection" }),
            ]),
            s,
          )),
          !o("AdsDynamicAdsFormatUtils").getIsDynamicAdCarouselMediaFormat(s))
        )
          return s;
        if (l != null) {
          var c = r(
            "AdsAdgroupRecordAccessors",
          ).creative.format_transformation_spec.get(s);
          s = r(
            "AdsAdgroupRecordAccessors",
          ).creative.format_transformation_spec.set(
            (c != null ? c : r("immutable").List()).push(l),
            s,
          );
        }
      } else if (
        o("AdsDynamicAdsFormatUtils").getIsDynamicAdCarouselMediaFormat(s)
      ) {
        var d = r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.get(s);
        if (d != null) {
          var m = d.filter(function (e) {
            return (
              e.get("format") !== "sa_collection" &&
              e.get("format") !== "sa_carousel" &&
              e.get("format") !== "collage" &&
              e.get("format") !== "photo_collage"
            );
          });
          m.size !== d.size &&
            (s = m.isEmpty()
              ? r(
                  "AdsAdgroupRecordAccessors",
                ).creative.format_transformation_spec.delete(s)
              : r(
                  "AdsAdgroupRecordAccessors",
                ).creative.format_transformation_spec.set(m, s));
        }
      }
      return (
        t !== "reactive_control" &&
          (n == null ? void 0 : n.catalog_single_media) !== !1 &&
          l == null &&
          (s = A(s)),
        s
      );
    }
    function k(e) {
      return o("AdsMutators").chain(
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.optimization_type.set(
          r("ApiDynamicCreativeOptimizationTypes").FORMAT_AUTOMATION,
        ),
        r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.ad_formats.set(
          r("immutable").List(["CAROUSEL", "COLLECTION"]),
        ),
      )(e);
    }
    function I(e) {
      return r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete(e);
    }
    function T(e) {
      var t = ["catalog"];
      (o("DAFlexibleFormatUtils").hasDAIntroCard(e) && t.push("manual_uploads"),
        o("DAFlexibleFormatUtils").hasRelatedMedia(e) &&
          t.push("related_media"));
      var n = e;
      return (
        t.forEach(function (e) {
          n = $(n, "da_collection", e);
        }),
        (n = k(n)),
        n
      );
    }
    function D(e) {
      var t = N(e, "da_collection");
      return ((t = I(t)), t);
    }
    function x(e, t) {
      var n, a;
      if (
        (t !== "catalog_single_media" && t !== "single_media") ||
        !o("AdsDynamicAdsUtils").isDynamicAd(e) ||
        ((n = e.creative) == null ? void 0 : n.format_transformation_spec) !=
          null ||
        !o("AdsAssetFeedUtils").isFormatAutomationAdgroupFromRecord(e) ||
        ((a = e.creative) == null ||
        (a = a.asset_feed_spec) == null ||
        (a = a.ad_formats) == null
          ? void 0
          : a.includes("COLLECTION")) !== !0
      )
        return e;
      var i = T(e);
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.set(
        r("AdsAdgroupRecordAccessors").creative.format_transformation_spec.get(
          i,
        ),
      )(e);
    }
    function $(e, t, n, a, i) {
      var l,
        s = u(t),
        c = s
          ? o("AdsFlexibleFormatAdexUtils").getCollageFtsFormatForAdgroup(e, i)
          : null,
        d = s ? f(e, c) : x(e, a != null ? a : t),
        m = (l = c != null ? c : a) != null ? l : t,
        p = r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.get(d);
      if (p == null)
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.set(
          r("immutable").List([
            r("immutable").Map({ data_source: [n], format: m }),
          ]),
        )(d);
      var _ = p.find(function (e) {
        return e.get("format") === m;
      });
      if (_ != null) {
        var g = _.get("data_source"),
          h =
            g instanceof r("immutable").List
              ? g.toArray()
              : Array.isArray(g)
                ? g
                : [];
        if (h.length === 1 && h[0] === "none")
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.format_transformation_spec.set(
            p.map(function (e) {
              return e.get("format") === m ? e.set("data_source", [n]) : e;
            }),
          )(d);
        if (h != null && !h.includes(n))
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.format_transformation_spec.set(
            p.map(function (e) {
              return e.get("format") === m
                ? e.set("data_source", h.concat([n]))
                : e;
            }),
          )(d);
      } else
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.set(
          p.push(r("immutable").Map({ data_source: [n], format: m })),
        )(d);
      return d;
    }
    function P(e, t, n, a) {
      var i = u(t),
        l = i ? f(e) : x(e, a != null ? a : t),
        s = i
          ? o("AdsFlexibleFormatAdexUtils").getCollageFtsFormatForAdgroup(e)
          : a != null
            ? a
            : t,
        c = r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.get(l);
      if (c == null)
        return a === "catalog_single_media"
          ? r(
              "AdsAdgroupRecordAccessors",
            ).creative.format_transformation_spec.set(
              r("immutable").List([
                r("immutable").Map({ data_source: ["none"], format: s }),
              ]),
            )(l)
          : l;
      var d = c.find(function (e) {
        return e.get("format") === s;
      });
      if (d == null)
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.set(
          c.push(r("immutable").Map({ data_source: ["none"], format: s })),
        )(l);
      var m = c.map(function (e) {
        if (e.get("format") === s) {
          var t = e.get("data_source"),
            o = Array.isArray(t)
              ? t
              : t instanceof r("immutable").List
                ? t.toArray()
                : [];
          if (Array.isArray(o) && (o.includes(n) || o.length === 0))
            return o.length <= 1
              ? e.set("data_source", r("immutable").List(["none"]))
              : e.set(
                  "data_source",
                  o.filter(function (e) {
                    return e !== n;
                  }),
                );
        }
        return e;
      });
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.set(m)(l);
    }
    function N(e, t) {
      var n = u(t),
        a = n ? f(e) : e,
        i = n
          ? o("AdsFlexibleFormatAdexUtils").getCollageFtsFormatForAdgroup(e)
          : t,
        l = r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.get(a);
      if (l == null) return a;
      var s = l.find(function (e) {
        return e.get("format") === i;
      });
      if (s == null) return a;
      var c = l.map(function (e) {
        return e.get("format") === i
          ? e.set("data_source", r("immutable").List(["none"]))
          : e;
      });
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.set(c)(a);
    }
    function M(e, t) {
      var n,
        o = "da_collection",
        a = "catalog";
      if (t === !1)
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.get(e) == null
          ? e
          : r(
              "AdsAdgroupRecordAccessors",
            ).creative.format_transformation_spec.delete(e);
      var i =
        (r("AdsAdgroupRecordAccessors") == null ||
        (n = r("AdsAdgroupRecordAccessors").creative) == null
          ? void 0
          : n.format_transformation_spec.delete(e)) || e;
      return $(i, o, a);
    }
    function w(e) {
      var t = r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.get(e),
        n = "catalog_single_media",
        o =
          t == null
            ? void 0
            : t.find(function (e) {
                return e.get("format") === n;
              });
      return o != null ? e : $(e, "single_media", "catalog", n);
    }
    function A(e) {
      return !o("AdsFlexibleFormatDAUtils").isReactiveControlCardVisibleForDA(
        e,
      ) ||
        !o("AdsDynamicAdsFormatUtils").getIsDynamicAdCarouselMediaFormat(e) ||
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.media_type_automation.enroll_status.get(
          e,
        ) !== "OPT_IN" ||
        !o(
          "AdsDynamicAdsFormatUtils",
        ).isDASingleVideoTransformationEnabledByDefault() ||
        !o("AdsDynamicAdsFormatUtils").passGKForSingleVideoTransformation()
        ? e
        : w(e);
    }
    function F(e, t, n, a, i, l) {
      var s,
        c = u(t),
        d = c
          ? o("AdsFlexibleFormatAdexUtils").getCollageFtsFormatForAdgroup(e, l)
          : null,
        m = c ? f(e, d) : e,
        _ = (s = d != null ? d : i) != null ? s : t,
        g = r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.get(m);
      if (g == null) {
        var h = p(a)
          .filter(function (e) {
            return e !== n;
          })
          .filter(Boolean);
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.set(
          r("immutable").List([
            r("immutable").Map({
              data_source: h.length === 0 ? ["none"] : h,
              format: _,
            }),
          ]),
        )(m);
      }
      var y = g.find(function (e) {
        return e.get("format") === _;
      });
      if (y == null) {
        var C = p(a)
            .filter(function (e) {
              return e !== n;
            })
            .filter(Boolean),
          b = g.push(
            r("immutable").Map({
              data_source: C.length === 0 ? ["none"] : C,
              format: _,
            }),
          );
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.set(b)(m);
      }
      var v = g.map(function (e) {
        if (e.get("format") === _) {
          var t = e.get("data_source"),
            o = Array.isArray(t)
              ? t
              : t instanceof r("immutable").List
                ? t.toArray()
                : [];
          if (Array.isArray(o) && (o.includes(n) || o.length === 0)) {
            if (o.length === 1)
              return e.set("data_source", r("immutable").List(["none"]));
            var i = (o.length === 0 ? p(a) : o)
              .filter(function (e) {
                return e !== n;
              })
              .filter(Boolean);
            return e.set(
              "data_source",
              i.length === 0 ? r("immutable").List(["none"]) : i,
            );
          }
        }
        return e;
      });
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.set(v)(m);
    }
    function O(e, t, n, a, i, l, s) {
      s === void 0 && (s = !1);
      var u = ye(e, i);
      return (
        (u = F(u, t, n, a, void 0, l)),
        t === "sa_collection" &&
          n === "catalog" &&
          (u = o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.enroll_status.set(
              "OPT_OUT",
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.action_metadata.type.set(
              i != null ? i : "MANUAL",
            ),
          )(u)),
        t === "carousel" &&
          n === "catalog" &&
          (u = o("AdsMutators").chain(
            r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
              .creative_features_spec.product_extensions.customizations.delete,
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.customizations.pe_carousel.enroll_status.set(
              "OPT_OUT",
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.customizations.pe_carousel.action_metadata.type.set(
              i != null ? i : "MANUAL",
            ),
          )(u)),
        t === "sa_collection" &&
          n === "site_links" &&
          (u = o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.enroll_status.set(
              "OPT_OUT",
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.action_metadata.type.set(
              i != null ? i : "MANUAL",
            ),
          )(u)),
        t === "carousel" &&
          n === "site_links" &&
          !o("AdsFlexibleFormatAdexUtils").passGKForModalUX(!0) &&
          (u = P(u, "video_slideshow", "site_links")),
        s &&
          n === "catalog" &&
          !o(
            "AdsFlexibleFormatTransformationUtils",
          ).getHasOptedInProductExtensionsForGivenTargetFormat(
            u,
            "sa_collection",
          ) &&
          !o(
            "AdsFlexibleFormatTransformationUtils",
          ).getHasOptedInProductExtensionsForGivenTargetFormat(u, "carousel") &&
          (u = o(
            "AdsAdgroupConnectedSourcesMutators",
          ).withdrawDefaultedCatalogConsentMutator(e, u)),
        u
      );
    }
    function B(e, t, n, a, i) {
      var l = ye(e, a);
      l = $(l, t, n, void 0, i);
      var s =
        (a !== "MANUAL" &&
          o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(
            "product_extensions",
          )) ||
        (a != null &&
          o(
            "AdsCreativeEnrollmentDefaultOnUtils",
          ).GOVERNED_AUTOMATIC_ACTION_TYPES.has(a) &&
          o(
            "AdsCreativeEnrollmentDefaultOnStoreUtils",
          ).isCreativeEnrollmentDefaultOnVetoedForSelectedAccount(
            "product_extensions",
          ));
      (t === "sa_collection" &&
        n === "catalog" &&
        !s &&
        (l = o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.enroll_status.set(
            "OPT_IN",
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.action_metadata.type.set(
            a != null ? a : "MANUAL",
          ),
        )(l)),
        t === "carousel" &&
          n === "catalog" &&
          !s &&
          (l = o("AdsMutators").chain(
            r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
              .creative_features_spec.product_extensions.customizations.delete,
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.customizations.pe_carousel.enroll_status.set(
              "OPT_IN",
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.customizations.pe_carousel.action_metadata.type.set(
              a != null ? a : "MANUAL",
            ),
          )(l)));
      var u =
        a !== "MANUAL" &&
        o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(
          "site_extensions",
        );
      return (
        t === "sa_collection" &&
          n === "site_links" &&
          !u &&
          (l = o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.enroll_status.set(
              "OPT_IN",
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.action_metadata.type.set(
              a != null ? a : "MANUAL",
            ),
          )(l)),
        t === "carousel" &&
          n === "site_links" &&
          !o("AdsAutomaticFlowUtils").isStaticSingleVideoFormat(l) &&
          !o("AdsFlexibleFormatAdexUtils").passGKForModalUX(!0) &&
          (l = $(l, "video_slideshow", "site_links")),
        l
      );
    }
    function W() {
      try {
        var e = [];
        return (
          o("AdsSiteLinksSharedCooldownGK").isSEDisableDefaultOn(!0) &&
            e.push("GK_BLOCKED"),
          o("AdsSiteLinksSharedCooldownGK").isSESourcingBlocklisted(!0) &&
            e.push("SE_SOURCING_BLOCKLISTED"),
          o("PEDefaultOnExclusions").isExcludedBySaefSensitiveVerticals() &&
            e.push("SENSITIVE_VERTICAL"),
          e
        );
      } catch (e) {
        return (
          o(
            "SEFormatConsentProducerErrorUtils",
          ).reportSEFormatConsentRecorderError(e),
          []
        );
      }
    }
    function q(e, t, n, r, a) {
      var i,
        l = a == null ? void 0 : a.get(n);
      if (r)
        return l != null &&
          l.some(function (e) {
            return e.status === "OPT_IN";
          })
          ? "OPT_IN"
          : l != null &&
              l.some(function (e) {
                return e.status === "OPT_OUT";
              })
            ? "OPT_OUT"
            : null;
      var s =
        u(n) && o("AdsFlexibleFormatAdexUtils").isSASingleCollageSurface(e)
          ? o("AdsFlexibleFormatAdexUtils").MIXED_COLLAGE_STICKY_DATA_SOURCE
          : t;
      return l == null ||
        (i = l.find(function (e) {
          return e.data_source === s;
        })) == null
        ? void 0
        : i.status;
    }
    function U(e, t, n, r, a, i, l, s, u, c, d, m, p) {
      var _;
      (s === void 0 && (s = !0),
        u === void 0 && (u = !1),
        d === void 0 && (d = !1),
        p === void 0 && (p = !1));
      var f =
          (e == null || (_ = e.metadata) == null
            ? void 0
            : _.is_pca_unified_format_ad) === !0,
        g = r
          .filter(function (e) {
            return e.includes(t);
          })
          .keySeq()
          .toArray(),
        h = e,
        y = null;
      return (
        (i != null ? i : g).forEach(function (i) {
          var _ = o("AdsMetadataConnectedSourcesUtils").countL1SpecImageUrl(h),
            g =
              u === !0 &&
              t === "site_links" &&
              (i === "carousel" ||
                o("AdsFlexibleFormatAdexUtils").passGKForModalUX(!0)),
            C = g ? c : l,
            b = q(h, t, i, s === !0, a),
            v = n && (i !== "carousel" || t !== "site_links" || V(e, u, _)),
            S = b,
            R = C,
            L = null,
            E =
              t === "site_links" &&
              o("AdsSiteLinksSharedCooldownUtils").SE_A_PLUS_C_FORMATS.includes(
                i,
              ) &&
              !g;
          if (E) {
            var k =
                o(
                  "AdsMetadataConnectedSourcesUtils",
                ).sitelinkShouldStickyOptOutUnderAlphaPause(
                  h.account_id,
                  o(
                    "AdsMetadataConnectedSourcesUtils",
                  ).readAdsUserSettingsDuringDispatch(),
                ) &&
                !o(
                  "AdsSiteLinksSharedCooldownUtils",
                ).isSiteLinksPauseExemptByDataConsent(h),
              I = o(
                "AdsSiteLinksSharedCooldownUtils",
              ).isSEFormatDefaultOnBlocklisted(),
              T =
                b === "OPT_OUT" &&
                !z(h, i, t) &&
                (d === !0 ||
                  (o(
                    "AdsAdgroupSiteLinksAdvertiserFormatOffMutators",
                  ).isNewUncopiedAd(h) &&
                    !H(h, i, t))),
              D =
                T &&
                !I &&
                C !== !0 &&
                v &&
                o(
                  "AdsSiteLinksFormatConsentRefresh",
                ).isSEFormatConsentRefreshCutoffPassed() &&
                (s === !0
                  ? o(
                      "AdsSiteLinksFormatConsentRefresh",
                    ).areFormatLevelOptOutsReleasedByRefresh(
                      o(
                        "AdsMetadataConnectedSourcesUtils",
                      ).readAdsUserSettingsDuringDispatch(),
                      i,
                    )
                  : o(
                      "AdsSiteLinksFormatConsentRefresh",
                    ).areFormatOptOutsReleasedByRefresh(
                      o(
                        "AdsMetadataConnectedSourcesUtils",
                      ).readAdsUserSettingsDuringDispatch(),
                      i,
                      t,
                    ));
            (k || I || T) &&
            o("AdsSiteLinksSharedCooldownGK").isSEAlphaPauseEnabled()
              ? ((S = k ? "OPT_OUT" : T ? null : b),
                (R = l === !0 || I),
                (L = {
                  blocklistReasons: I && m != null ? W() : [],
                  callerBlockedDefaultOn: l === !0,
                  formatStickyOptOutBlocks: b === "OPT_OUT" && !T,
                  formatStickyOptOutSetAside: T && !k,
                  pauseActive: k,
                }))
              : D &&
                (y == null &&
                  (y = o(
                    "AdsSiteLinksFormatConsentRefresh",
                  ).isSEFormatConsentRefreshEnabled()),
                y &&
                  ((S = null),
                  (L = {
                    blocklistReasons: [],
                    callerBlockedDefaultOn: l === !0,
                    formatStickyOptOutBlocks: !1,
                    formatStickyOptOutSetAside: !0,
                    pauseActive: !1,
                  })));
          }
          h = ee(
            h,
            i,
            t,
            S,
            v,
            n,
            r.get(i),
            R,
            f && (i === "sa_collection" || i === "carousel"),
            m,
            p,
            L,
          );
        }),
        h
      );
    }
    function V(e, t, n) {
      var r;
      return (
        ((r = e.creative) == null ||
        (r = r.creative_sourcing_spec) == null ||
        (r = r.dynamic_site_links_spec) == null
          ? void 0
          : r.enroll_status) === "OPT_IN" ||
        t === !0 ||
        n > 0
      );
    }
    function H(e, t, n) {
      return (
        z(e, t, n) ||
        (t === "carousel" &&
          o(
            "AdsAdgroupSiteLinksAdvertiserFormatOffMutators",
          ).hasVideoSlideshowSiteLinksFTSOptOut(e) &&
          o(
            "AdsAdgroupSiteLinksAdvertiserFormatOffMutators",
          ).doesCarouselDefaultOnTurnOnVideoSlideshow(e)) ||
        o(
          "AdsAdgroupSiteLinksAdvertiserFormatOffMutators",
        ).hasPCAAdvertiserSiteExtensionsOptOut(e)
      );
    }
    function G(e, t) {
      return o(
        "AdsAdgroupSiteLinksAdvertiserFormatOffMutators",
      ).isAdvertiserSiteExtensionsOptOut(e) &&
        o("AdsAdgroupSiteLinksAdvertiserFormatOffMutators").isNewUncopiedAd(
          e,
        ) &&
        o("AdsSiteLinksSharedCooldownGK").isSEAlphaPauseEnabled()
        ? o(
            "AdsAdgroupSiteLinksAdvertiserFormatOffMutators",
          ).keepAdvertiserSiteExtensionsOptOut(e, t)
        : t;
    }
    function z(e, t, n) {
      var r;
      if (t === "sa_collection") return Q(e, t, n);
      var o = (r = oe(e, t)) != null ? r : [];
      return o.length > 0 && !o.includes(n);
    }
    function j(e, t) {
      var n,
        r =
          (n = e.creative) == null ||
          (n = n.degrees_of_freedom_spec) == null ||
          (n = n.creative_features_spec) == null
            ? void 0
            : n.product_extensions;
      if (t === "carousel") {
        var a,
          i,
          l =
            r == null || (a = r.customizations) == null
              ? void 0
              : a.pe_carousel;
        return (
          (l == null ? void 0 : l.enroll_status) === "OPT_IN" &&
          o("AdCreativeFeatureActionTypeUtils").isExplicitAdvertiserActionType(
            l == null || (i = l.action_metadata) == null ? void 0 : i.type,
          )
        );
      }
      if (t === "sa_collection") {
        var s;
        return (
          (r == null ? void 0 : r.enroll_status) === "OPT_IN" &&
          o("AdCreativeFeatureActionTypeUtils").isExplicitAdvertiserActionType(
            r == null || (s = r.action_metadata) == null ? void 0 : s.type,
          )
        );
      }
      return !1;
    }
    function K(e, t) {
      var n,
        r,
        o,
        a =
          (n = e.creative) == null ||
          (n = n.degrees_of_freedom_spec) == null ||
          (n = n.creative_features_spec) == null
            ? void 0
            : n.product_extensions,
        i =
          t === "carousel"
            ? a == null || (r = a.customizations) == null
              ? void 0
              : r.pe_carousel
            : t === "sa_collection"
              ? a
              : null;
      return (
        (i == null || (o = i.action_metadata) == null ? void 0 : o.type) ===
        "MANUAL"
      );
    }
    function Q(e, t, n) {
      var r;
      if (n === "catalog")
        return (
          (t === "carousel" || t === "sa_collection") &&
          o("PERelevanceUtils").isCatalogFormatOptedOutByHand(e, t)
        );
      var a =
          (r = e.creative) == null || (r = r.degrees_of_freedom_spec) == null
            ? void 0
            : r.creative_features_spec,
        i = null,
        l = null;
      if (n === "site_links" && t === "sa_collection") {
        var s, u;
        ((i =
          a == null || (s = a.site_extensions) == null
            ? void 0
            : s.enroll_status),
          (l =
            a == null ||
            (u = a.site_extensions) == null ||
            (u = u.action_metadata) == null
              ? void 0
              : u.type));
      }
      return (
        i === "OPT_OUT" &&
        o("AdCreativeFeatureActionTypeUtils").isExplicitAdvertiserActionType(l)
      );
    }
    function X(e, t, n, r, o) {
      return e
        ? t === !0
          ? "DEFAULT_OFF"
          : n
            ? "STICKY"
            : o
              ? "DEFAULT_OFF"
              : "MANUAL"
        : r === "OPT_IN"
          ? "STICKY"
          : "DEFAULT";
    }
    function Y(e, t, n) {
      var r,
        a,
        i =
          (r = e.creative) == null ||
          (r = r.degrees_of_freedom_spec) == null ||
          (r = r.creative_features_spec) == null
            ? void 0
            : r.site_extensions,
        l =
          (i == null ? void 0 : i.enroll_status) === "OPT_IN"
            ? i == null || (a = i.action_metadata) == null
              ? void 0
              : a.type
            : null;
      return l != null
        ? l
        : t === "OPT_IN" &&
            n != null &&
            o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(n)
          ? "STICKY"
          : "DEFAULT";
    }
    function J(e, t, n, r, o, a, i, l, s) {
      var u = [];
      (i && u.push("EXPLICIT_USER_OPT_OUT"),
        a && u.push("EXPLICIT_USER_OPT_IN"));
      var c = (s == null ? void 0 : s.pauseActive) === !0;
      if (
        (e === "OPT_OUT" &&
          ((!c || (s == null ? void 0 : s.formatStickyOptOutBlocks) === !0) &&
            u.push("FORMAT_STICKY_OPT_OUT"),
          c && u.push("COOLDOWN")),
        r)
      ) {
        var d,
          m = (d = s == null ? void 0 : s.blocklistReasons) != null ? d : [];
        (((s == null ? void 0 : s.callerBlockedDefaultOn) !== !1 ||
          m.length === 0) &&
          u.push("DEFAULT_ON_BLOCKED"),
          u.push.apply(u, m));
      }
      (t
        ? n || u.push("CAROUSEL_SITE_LINKS_NO_SOURCE")
        : u.push("DATA_NOT_CONSENTED"),
        o && u.push("A_PLUS_C_FEATURE_STICKY_OPT_OUT"));
      var p = "DEFAULT_ON";
      i
        ? (p = "PRESERVE_EXPLICIT_USER_OPT_OUT")
        : a
          ? (p = "PRESERVE_EXPLICIT_USER_OPT_IN")
          : u.length > 0
            ? (p = u[0])
            : e === "OPT_IN"
              ? (p = "FORMAT_STICKY_OPT_IN")
              : (s == null ? void 0 : s.formatStickyOptOutSetAside) === !0 &&
                (p = "FORMAT_STICKY_OPT_OUT_SET_ASIDE");
      var _ = u.length > 0 ? "block" : "allow";
      return {
        blockingReasons: u,
        decisionOutcome: _,
        decisionReason: p,
        requestedState: a ? "off" : "on",
      };
    }
    function Z(e, t, n, r, a, i) {
      var l = ["sa_collection", "carousel"],
        s =
          t === "catalog" && l.includes(e)
            ? "product_extensions"
            : t === "site_links" &&
                o(
                  "AdsSiteLinksSharedCooldownUtils",
                ).SE_A_PLUS_C_FORMATS.includes(e)
              ? "site_extensions"
              : null,
        u =
          n == null &&
          s != null &&
          o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(s),
        c = n === "OPT_OUT" || a === !0 || !r || u;
      return {
        actionType: X(c, a, r, n, i),
        aPlusCFeature: s,
        aPlusCStickyBlocked: u,
        enrollStatus: c ? "OPT_OUT" : "OPT_IN",
        shouldOptOut: c,
      };
    }
    function ee(t, n, a, i, l, c, d, m, p, _, f, g) {
      var b, v;
      f === void 0 && (f = !1);
      var S =
          a === "site_links" &&
          o("AdsSiteLinksSharedCooldownUtils").SE_A_PLUS_C_FORMATS.includes(
            n,
          ) &&
          !o("AdCreativeFeatureActionTypeUtils").isExplicitAdvertiserActionType(
            (b = t.creative) == null ||
              (b = b.degrees_of_freedom_spec) == null ||
              (b = b.creative_features_spec) == null ||
              (b = b.site_extensions) == null ||
              (b = b.action_metadata) == null
              ? void 0
              : b.type,
          ) &&
          o(
            "AdsCreativeEnrollmentDefaultOnStoreUtils",
          ).isCreativeEnrollmentDefaultOnVetoedForSelectedAccount(
            "site_extensions",
          ),
        R =
          a === "catalog" &&
          (n === "sa_collection" || n === "carousel") &&
          !j(t, n) &&
          o(
            "AdsCreativeEnrollmentDefaultOnStoreUtils",
          ).isCreativeEnrollmentDefaultOnVetoedForSelectedAccount(
            "product_extensions",
          ),
        L = u(n) && C(t),
        E = L || m === !0 || S || R,
        k = Z(n, a, i, l, E, f),
        I = k.actionType,
        T = k.aPlusCFeature,
        D = k.aPlusCStickyBlocked,
        x = k.enrollStatus,
        P = k.shouldOptOut;
      if (a === "ugc")
        return n !== "sa_collection"
          ? t
          : P
            ? se(t)
            : le(t, d != null ? d : []);
      var N = P && l && T === "product_extensions" && j(t, n),
        M = !P && Q(t, n, a) && (a === "catalog" || r("gkx")("4221")),
        w = J(i, c, l, E, D, N, M, P, g),
        A = function (r) {
          try {
            var e = s(t, r, n, a);
            _ == null ||
              _(
                t,
                r,
                babelHelpers.extends({}, w, {
                  advertiserDataConsented: c,
                  affectedDecisions: e.map(function (e) {
                    return babelHelpers.extends(
                      {},
                      w,
                      e === n
                        ? {}
                        : { decisionReason: "CASCADE_FROM_CAROUSEL" },
                      { format: e },
                    );
                  }),
                  affectedFormats: e,
                  aPlusCStickyBlocked: D,
                  blockDefaultOn: E,
                  datasource: a,
                  format: n,
                  preservedExplicitOptIn: N,
                  preservedExplicitOptOut: M,
                  resolvedDataConsented: l,
                  shouldOptOut: P,
                  skipFormatTransformationSpec: p === !0,
                  stickyStatus: i,
                }),
              );
          } catch (e) {
            o(
              "SEFormatConsentProducerErrorUtils",
            ).reportSEFormatConsentRecorderError(e);
          }
          return r;
        };
      if (L) return A(t);
      if (N)
        return (
          (e || (e = o("ODS"))).bumpEntityKey(
            68,
            "format_transformation_default_on",
            "prevent_pe_optin_overwrite",
          ),
          A(p === !0 ? t : $(t, n, a))
        );
      if (M) return A(t);
      var F = p === !0 ? n === "carousel" : n === "sa_collection",
        W = a === "site_links" && !P && F ? Y(t, i, T) : I;
      if (p === !0) {
        var q = ne(t, n, a, x, W);
        return A(P ? G(t, q) : q);
      }
      if (
        (u(n) && a === "site_links") ||
        (u(n) && o("AdsFlexibleFormatAdexUtils").isSASingleCollageSurface(t))
      )
        return A(P ? y(t) : h(t));
      if (P) return A(G(t, O(t, n, a, d != null ? d : [], I)));
      var U = te(t, B(t, n, a, I), n, a);
      return A(
        W === I ||
          ((v = U.creative) == null ||
          (v = v.degrees_of_freedom_spec) == null ||
          (v = v.creative_features_spec) == null ||
          (v = v.site_extensions) == null
            ? void 0
            : v.enroll_status) !== "OPT_IN"
          ? U
          : r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.action_metadata.type.set(
              W,
            )(U),
      );
    }
    function te(e, t, n, o) {
      if (o !== "catalog") return t;
      var a = r("AdsAdgroupRecordAccessors").creative.degrees_of_freedom_spec
          .creative_features_spec.product_extensions,
        i =
          n === "sa_collection"
            ? {
                enrollStatus: a.enroll_status,
                actionType: a.action_metadata.type,
              }
            : n === "carousel"
              ? {
                  enrollStatus: a.customizations.pe_carousel.enroll_status,
                  actionType: a.customizations.pe_carousel.action_metadata.type,
                }
              : null;
      if (i == null) return t;
      var l = i.actionType.get(e);
      return l == null ||
        i.enrollStatus.get(e) !== "OPT_IN" ||
        i.enrollStatus.get(t) !== "OPT_IN" ||
        i.actionType.get(t) === l ||
        !r("gkx")("16980")
        ? t
        : i.actionType.set(l, t);
    }
    function ne(e, t, n, a, i) {
      return t === "carousel" && n === "site_links"
        ? o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.enroll_status.set(
              a,
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.action_metadata.type.set(
              i != null ? i : "MANUAL",
            ),
          )(e)
        : e;
    }
    function re(e) {
      return (
        e.get("format") ===
        r("AdCreativeFormatTransformationFormatType").SA_COLLECTION
      );
    }
    function oe(e, t) {
      var n,
        o =
          (n = r(
            "AdsAdgroupRecordAccessors",
          ).creative.format_transformation_spec.get(e)) == null
            ? void 0
            : n.find(function (e) {
                return e.get("format") === t;
              });
      return o == null ? null : c(o.get("data_source"));
    }
    function ae(e) {
      return oe(e, r("AdCreativeFormatTransformationFormatType").SA_COLLECTION);
    }
    function ie(e, t) {
      var n,
        o =
          (n = r(
            "AdsAdgroupRecordAccessors",
          ).creative.format_transformation_spec.get(e)) != null
            ? n
            : r("immutable").List(),
        a = r("immutable").List(t);
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.set(
        o.some(re)
          ? o.map(function (e) {
              return re(e) ? e.set("data_source", a) : e;
            })
          : o.push(
              r("immutable").Map({
                data_source: a,
                format: r("AdCreativeFormatTransformationFormatType")
                  .SA_COLLECTION,
              }),
            ),
      )(e);
    }
    function le(e, t) {
      var n,
        o = (n = ae(e)) != null ? n : [];
      if (o.includes(r("AdCreativeFormatTransformationDataSourceType").UGC))
        return e;
      var a = (o.length === 0 ? p(t) : o).filter(function (e) {
        return e !== r("AdCreativeFormatTransformationDataSourceType").NONE;
      });
      return ie(
        e,
        Array.from(
          new Set(
            [].concat(a, [
              r("AdCreativeFormatTransformationDataSourceType").UGC,
            ]),
          ),
        ),
      );
    }
    function se(e) {
      var t = ae(e);
      if (
        t == null ||
        !t.includes(r("AdCreativeFormatTransformationDataSourceType").UGC)
      )
        return e;
      var n = t.filter(function (e) {
        return e !== r("AdCreativeFormatTransformationDataSourceType").UGC;
      });
      return ie(
        e,
        n.length > 0
          ? n
          : [r("AdCreativeFormatTransformationDataSourceType").NONE],
      );
    }
    function ue(e, t) {
      return e === "ugc" && t === "OPT_OUT";
    }
    function ce(e, t) {
      var n = le(e, t),
        a = r("AdsAdgroupRecordAccessors").creative.app_experience_spec
          .ad_extensions.data_sources,
        i = a.get(n);
      return i == null ||
        !i.some(function (e) {
          return ue(e.get("feature_name"), e.get("enroll_status"));
        }) ||
        !o("AdsUGCDataConsentUtils").isUGCDataConsentEffectivelyOn(n)
        ? n
        : a.set(
            i.map(function (e) {
              return ue(e.get("feature_name"), e.get("enroll_status"))
                ? e
                    .set("enroll_status", "OPT_IN")
                    .set(
                      "action_metadata",
                      r("immutable").fromJS({ type: "MANUAL" }),
                    )
                : e;
            }),
          )(n);
    }
    function de(e, t) {
      var n,
        o = t.blockDefaultOn,
        a = t.consentOn,
        i = t.eligibleDataSources,
        l = t.priorConsentOn,
        s = t.stickyMap,
        u = ae(e),
        c = u == null || u.length === 0;
      if (a === l && !(a && c)) return e;
      var d =
        s == null ||
        (n = s.get(
          r("AdCreativeFormatTransformationFormatType").SA_COLLECTION,
        )) == null ||
        (n = n.find(function (e) {
          return (
            e.data_source ===
            r("AdCreativeFormatTransformationDataSourceType").UGC
          );
        })) == null
          ? void 0
          : n.status;
      return ee(e, "sa_collection", "ugc", d, a, a, i, o);
    }
    function me(e) {
      var t,
        n,
        r,
        o,
        a,
        i = (t = e.creative) == null ? void 0 : t.creative_sourcing_spec;
      return (
        (i == null || (n = i.site_links_data_consented) == null
          ? void 0
          : n.enroll_status) !== "OPT_OUT" &&
        (((r =
          i == null || (o = i.site_links_spec) == null ? void 0 : o.size) !=
        null
          ? r
          : 0) > 0 ||
          (i == null || (a = i.dynamic_site_links_spec) == null
            ? void 0
            : a.enroll_status) === "OPT_IN")
      );
    }
    function pe(e) {
      var t,
        n = [],
        r = [];
      if (
        ((t = e.creative) == null ||
        (t = t.degrees_of_freedom_spec) == null ||
        (t = t.creative_features_spec) == null
          ? void 0
          : t.product_extensions) != null
      ) {
        var a,
          i =
            (a = e.creative) == null ||
            (a = a.degrees_of_freedom_spec) == null ||
            (a = a.creative_features_spec) == null ||
            (a = a.product_extensions) == null
              ? void 0
              : a.enroll_status;
        if (i === "OPT_IN") {
          var l,
            s =
              ((l = e.creative) == null ||
              (l = l.creative_sourcing_spec) == null
                ? void 0
                : l.associated_product_set_id) != null ||
              o("PERelevanceUtils").hasVirtualProductSetId(e);
          if (s) {
            var u;
            n.push("catalog");
            var c =
              (u = e.creative) == null ||
              (u = u.degrees_of_freedom_spec) == null ||
              (u = u.creative_features_spec) == null ||
              (u = u.product_extensions) == null ||
              (u = u.customizations) == null ||
              (u = u.pe_carousel) == null
                ? void 0
                : u.enroll_status;
            c !== "OPT_OUT" && r.push("catalog");
          }
        }
      }
      me(e) && (n.push("site_links"), r.push("site_links"));
      var d = [];
      return (
        r.includes("site_links") &&
          (!o("AdsAutomaticFlowUtils").isStaticSingleVideoFormat(e) ||
            o("AdsFlexibleFormatAdexUtils").passGKForModalUX(!0)) &&
          d.push("site_links"),
        { carousel: r, collection: n, videoSlideshow: d }
      );
    }
    var _e = ["sa_collection", "carousel", "video_slideshow"];
    function fe(e, t) {
      switch (e) {
        case "sa_collection":
          return t.collection;
        case "carousel":
          return t.carousel;
        case "video_slideshow":
          return t.videoSlideshow;
        default:
          return [];
      }
    }
    function ge(e) {
      return Array.isArray(e)
        ? e.map(function (e) {
            return String(e);
          })
        : e instanceof r("immutable").List
          ? e.toArray().map(function (e) {
              return String(e);
            })
          : [];
    }
    function he(e) {
      return _e.map(function (t) {
        var n = fe(t, e);
        return r("immutable").Map({
          data_source: n.length > 0 ? n : ["none"],
          format: t,
        });
      });
    }
    function ye(e, t) {
      var n, a, i;
      if (
        !r("justknobx")._("4319") ||
        ((n = e.creative) == null ? void 0 : n.format_transformation_spec) !=
          null ||
        t !== "MANUAL" ||
        (((a = e.creative) == null ||
        (a = a.degrees_of_freedom_spec) == null ||
        (a = a.creative_features_spec) == null
          ? void 0
          : a.product_extensions) == null &&
          ((i = e.creative) == null ||
          (i = i.degrees_of_freedom_spec) == null ||
          (i = i.creative_features_spec) == null
            ? void 0
            : i.site_extensions) == null)
      )
        return e;
      var l = he(pe(e));
      return o("AdsMutators").chain(
        r("AdsAdgroupRecordAccessors").creative.format_transformation_spec.set(
          r("immutable").List(l),
        ),
      )(e);
    }
    function Ce(e) {
      if (!r("gkx")("4221")) return e;
      var t = pe(e),
        n = r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.get(e),
        o =
          t.collection.length === 0 &&
          t.carousel.length === 0 &&
          t.videoSlideshow.length === 0;
      if (n == null || n.size === 0)
        return o
          ? e
          : r(
              "AdsAdgroupRecordAccessors",
            ).creative.format_transformation_spec.set(
              r("immutable").List(he(t)),
            )(e);
      var a = n.map(function (e) {
        var n = e.get("format");
        if (typeof n != "string" || !_e.includes(n)) return e;
        var o = new Set(fe(n, t)),
          a = n !== "sa_collection",
          i = ge(e.get("data_source")).filter(function (e) {
            return o.has(e) || (a && e === "site_links") || m(e);
          });
        return e.set(
          "data_source",
          r("immutable").List(i.length > 0 ? i : ["none"]),
        );
      });
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.set(a)(e);
    }
    function be(e, t, n) {
      var a = r(
        "AdsAdgroupRecordAccessors",
      ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.enroll_status.get(
        t,
      );
      return a ===
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.enroll_status.get(
          e,
        )
        ? t
        : a === "OPT_IN"
          ? Fe(t, "catalog", n)
          : o("AdsFlexibleFormatAdexUtils").isEligibleForEPAFDOSurface(t)
            ? ve(t)
            : t;
    }
    function ve(e) {
      var t = r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.get(e);
      if (t == null || t.size === 0) return e;
      var n = t.map(function (t) {
        var n = t.get("format");
        if (typeof n != "string" || !_e.includes(n)) return t;
        var o = ge(t.get("data_source")),
          a = o.length === 0 && (n === "sa_collection" || n === "carousel");
        if (!a && !o.includes("catalog")) return t;
        var i = o;
        a && (i = me(e) ? ["site_links"] : []);
        var l = i.filter(function (e) {
          return e !== "catalog";
        });
        return t.set(
          "data_source",
          r("immutable").List(l.length > 0 ? l : ["none"]),
        );
      });
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.set(n)(e);
    }
    function Se(e, t) {
      var n = r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.get(t);
      if (n == null || n.size === 0) return t;
      var o = r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.get(e),
        a =
          o != null && o.size > 0
            ? o
            : r(
                "AdsAdgroupRecordAccessors",
              ).creative.format_transformation_spec.get(
                Ce(
                  r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.format_transformation_spec.delete(t),
                ),
              ),
        i = new Map();
      return (
        a == null ||
          a.forEach(function (e) {
            var t = e.get("format"),
              n = ge(e.get("data_source"));
            typeof t == "string" && n.includes("catalog") && i.set(t, n);
          }),
        i.size === 0
          ? t
          : r(
              "AdsAdgroupRecordAccessors",
            ).creative.format_transformation_spec.set(
              n.map(function (e) {
                var t = e.get("format"),
                  n = typeof t == "string" ? i.get(t) : null,
                  o = ge(e.get("data_source"));
                return n == null || o.includes("catalog")
                  ? e
                  : e.set(
                      "data_source",
                      r("immutable").List(
                        [].concat(
                          n.filter(function (e) {
                            return e === "catalog" || o.includes(e);
                          }),
                          o.filter(function (e) {
                            return e !== "none" && !n.includes(e);
                          }),
                        ),
                      ),
                    );
              }),
            )(t)
      );
    }
    function Re(e, t) {
      var n,
        o,
        a,
        i = e.creative,
        l = r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.set(
          i == null ||
            (n = i.degrees_of_freedom_spec) == null ||
            (n = n.creative_features_spec) == null
            ? void 0
            : n.product_extensions,
          t,
        );
      return (
        (l = r(
          "AdsAdgroupRecordAccessors",
        ).creative.creative_sourcing_spec.catalog.set(
          i == null || (o = i.creative_sourcing_spec) == null
            ? void 0
            : o.catalog,
          l,
        )),
        (l = r(
          "AdsAdgroupRecordAccessors",
        ).creative.creative_sourcing_spec.associated_product_set_id.set(
          i == null || (a = i.creative_sourcing_spec) == null
            ? void 0
            : a.associated_product_set_id,
          l,
        )),
        Se(e, l)
      );
    }
    function Le(e, t, n) {
      n === void 0 && (n = "catalog");
      var o = r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.get(e);
      if (o == null) return e;
      var a = o.some(function (e) {
        return e.get("format") === "carousel";
      });
      if (!a && t != null) {
        var i = r("immutable").Map({
            format: "carousel",
            data_source: r("immutable").List([n]),
            customizations: [
              { name: "preserve_hero_media", enroll_status: t, scope: [n] },
            ],
          }),
          l = o.push(i);
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.set(l)(e);
      }
      var s = o.map(function (e) {
        if (e.get("format") !== "carousel") return e;
        var r = e.toJS(),
          o = r.customizations,
          a = Array.isArray(o) ? [].concat(o) : [],
          i = Array.isArray(r.data_source) ? r.data_source : [];
        if (t == null) return Ee(e, a, i, n);
        var l = [],
          s = !1;
        for (var u of a) {
          if (u.name !== "preserve_hero_media") {
            l.push(u);
            continue;
          }
          var c = u.scope;
          if (c == null || c.length === 0) {
            var d = i.filter(function (e) {
              return e !== n;
            });
            (d.length > 0 && l.push(babelHelpers.extends({}, u, { scope: d })),
              (s = !0));
          } else
            c.length === 1 && c[0] === n
              ? (l.push(babelHelpers.extends({}, u, { enroll_status: t })),
                (s = !0))
              : c.includes(n)
                ? (l.push(
                    babelHelpers.extends({}, u, {
                      scope: c.filter(function (e) {
                        return e !== n;
                      }),
                    }),
                  ),
                  (s = !0))
                : l.push(u);
        }
        if (s) {
          var m = l.some(function (e) {
            return (
              e.name === "preserve_hero_media" &&
              e.scope != null &&
              e.scope.includes(n)
            );
          });
          m ||
            l.push({
              name: "preserve_hero_media",
              enroll_status: t,
              scope: [n],
            });
        } else
          l.push({ name: "preserve_hero_media", enroll_status: t, scope: [n] });
        return e.set("customizations", l);
      });
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.set(s)(e);
    }
    function Ee(e, t, n, r) {
      var o = [];
      for (var a of t) {
        if (a.name !== "preserve_hero_media") {
          o.push(a);
          continue;
        }
        var i = a.scope;
        if (i == null || i.length === 0) {
          var l = n.filter(function (e) {
            return e !== r;
          });
          l.length > 0 && o.push(babelHelpers.extends({}, a, { scope: l }));
        } else
          (i.length === 1 && i[0] === r) ||
            (i.includes(r)
              ? o.push(
                  babelHelpers.extends({}, a, {
                    scope: i.filter(function (e) {
                      return e !== r;
                    }),
                  }),
                )
              : o.push(a));
      }
      return o.length === 0
        ? e.delete("customizations")
        : e.set("customizations", o);
    }
    function ke(e, t) {
      if (t.assetType !== "image") return e;
      var n = t.asset.get("hash"),
        r = t.asset.get("url");
      return n != null
        ? e
            .setIn(
              ["creative", "object_story_spec", "link_data", "image_hash"],
              n,
            )
            .deleteIn(["creative", "object_story_spec", "link_data", "picture"])
        : r != null
          ? e
              .setIn(
                ["creative", "object_story_spec", "link_data", "picture"],
                r,
              )
              .deleteIn([
                "creative",
                "object_story_spec",
                "link_data",
                "image_hash",
              ])
          : e;
    }
    var Ie = ["creative", "object_story_spec", "link_data"],
      Te = ["creative", "object_story_spec", "video_data"],
      De = [
        [["name"], ["title"]],
        [["description"], ["link_description"]],
        [
          ["call_to_action", "type"],
          ["call_to_action", "type"],
        ],
        [
          ["call_to_action", "value", "link"],
          ["call_to_action", "value", "link"],
        ],
        [["link"], ["call_to_action", "value", "link"]],
      ];
    function xe(e, t) {
      if (t.assetType !== "video") return e;
      var n = t.asset.get("video_id");
      if (n == null) return e;
      var r = e
        .setIn([].concat(Te, ["video_id"]), n)
        .setIn([].concat(Te, ["image_url"]), t.asset.get("thumbnail_url"));
      for (var o of De) {
        var a = o[0],
          i = o[1],
          l = e.getIn([].concat(Ie, a));
        l != null &&
          r.getIn([].concat(Te, i)) == null &&
          (r = r.setIn([].concat(Te, i), l));
      }
      return r.deleteIn(Ie);
    }
    var $e = ["creative", "asset_feed_spec", "images"];
    function Pe(e, t) {
      var n;
      if (t.assetType !== "image") return e;
      var r = t.asset.get("hash"),
        o =
          (n = e.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.images;
      return r == null || o == null || o.size === 0
        ? e
        : e.setIn(
            $e,
            o.map(function (e) {
              return e.set("hash", r);
            }),
          );
    }
    var Ne = ["creative", "asset_feed_spec", "videos"],
      Me = ["creative", "asset_feed_spec", "asset_customization_rules"];
    function we(e, t) {
      var n;
      if (t.assetType !== "video") return e;
      var o = t.asset.get("video_id"),
        a = (n = e.creative) == null ? void 0 : n.asset_feed_spec,
        i = a == null ? void 0 : a.images;
      if (o == null || i == null || i.size === 0) return e;
      var l = i.map(function (e) {
          return r("immutable").Map({
            adlabels: e.get("adlabels"),
            thumbnail_url: t.asset.get("thumbnail_url"),
            video_id: o,
          });
        }),
        s = a == null ? void 0 : a.asset_customization_rules,
        u = e.setIn(Ne, l).deleteIn($e);
      return s == null
        ? u
        : u.setIn(
            Me,
            s.map(function (e) {
              var t = e.get("image_label");
              return t == null
                ? e
                : e.delete("image_label").set("video_label", t);
            }),
          );
    }
    function Ae(e) {
      var t = e;
      return (
        (t = o("AdsMutators").chain(
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.enroll_status.set(
            "OPT_OUT",
          ),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.degrees_of_freedom_spec.creative_features_spec.product_extensions.action_metadata.type.set(
            "MANUAL",
          ),
        )(t)),
        t
      );
    }
    function Fe(e, t, n) {
      if (
        (n === void 0 && (n = ["sa_collection", "carousel"]),
        !o("AdsFlexibleFormatAdexUtils").isEligibleForEPAFDOSurface(e))
      )
        return e;
      var r = e;
      for (var a of n) r = $(r, a, t);
      return r;
    }
    ((l.canonicalizeCollageFamily = f),
      (l.adsAdgroupMixedCollageOptInMutator = h),
      (l.adsAdgroupMixedCollageOptOutMutator = y),
      (l.adsAdgroupMixedCollageRelevanceOptInMutator = b),
      (l.adsAdgroupFormatTransformationDAOptOutMutator = L),
      (l.adsAdgroupFormatTransformationDAOptInMutator = E),
      (l.adsDACollectionAssetFeedSpecOptInMutator = k),
      (l.adsDACollectionAssetFeedSpecOptOutMutator = I),
      (l.adsDACollectionOptInMutator = T),
      (l.adsDACollectionOptOutMutator = D),
      (l.adsAdgroupFormatTransformationDataSourceOptInMutator = $),
      (l.adsAdgroupFormatTransformationDataSourceOptOutMutator = P),
      (l.adsAdgroupFormatTransformationFormatOptOutMutator = N),
      (l.adsAdgroupFormatTransformationDASingleMediaAsCollectionDefaultOptInAndOutMutator =
        M),
      (l.adsAdgroupCatalogSingleMediaDefaultOptInMutator = w),
      (l.adsAdgroupCatalogSingleMediaDefaultOptInIfEligibleMutator = A),
      (l.adsAdgroupReactiveControlOptionOptOutMutator = F),
      (l.adsAdgroupReactiveControlOptionOptOutWithBoundleMutationMutator = O),
      (l.adsAdgroupReactiveControlOptionOptInWithBoundleMutationMutator = B),
      (l.adsAdgroupFormatTransformationDataSourceDefaultOnMutator = U),
      (l.isCatalogFormatManuallySet = K),
      (l.adsAdgroupUGCCollectionOptInMutator = le),
      (l.adsAdgroupUGCCollectionOptOutMutator = se),
      (l.adsAdgroupUGCCollectionManualOptInMutator = ce),
      (l.applyUGCCollectionDefaultOn = de),
      (l.syncFTSFromCFS = Ce),
      (l.mirrorEPAProductExtensionsEnrollStatusChange = be),
      (l.removeCatalogFromExistingManagedFTS = ve),
      (l.restoreProductExtensionsStateMutator = Re),
      (l.adsAdgroupFTSSetUseIntroCardMutator = Le),
      (l.applyActiveMediaItemToAdgroupMutator = ke),
      (l.applyActiveVideoItemToAdgroupMutator = xe),
      (l.applyActiveImageItemToAssetFeedMutator = Pe),
      (l.applyActiveVideoItemToAssetFeedMutator = we),
      (l.defaultOffProductExtensionEnrollStatusMutator = Ae),
      (l.dualWriteEPAFormatTransformationOptIn = Fe));
  },
  98,
);
