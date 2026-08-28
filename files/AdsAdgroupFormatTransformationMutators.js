__d(
  "AdsAdgroupFormatTransformationMutators",
  [
    "AdsAPlusCStickyOptOutUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAutomaticFlowUtils",
    "AdsFlexibleFormatAdexUtils",
    "AdsFlexibleFormatDAUtils",
    "AdsMetadataConnectedSourcesUtils",
    "AdsMutators",
    "ApiDynamicCreativeOptimizationTypes",
    "DAFlexibleFormatUtils",
    "ODS",
    "PERelevanceUtils",
    "gkx",
    "immutable",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return e === "collage" || e === "photo_collage";
    }
    function u(e) {
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
    function c(e, t) {
      var n = [].concat(u(e), u(t)).filter(function (e) {
          return e !== "none";
        }),
        r = Array.from(new Set(n));
      return r.length > 0 ? r : ["none"];
    }
    function d(e) {
      var t = r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.get(e);
      if (t == null) return e;
      var n = o("AdsFlexibleFormatAdexUtils").getCollageFtsFormatForAdgroup(e),
        a = n === "photo_collage" ? "collage" : "photo_collage",
        i = t.find(function (e) {
          return e.get("format") === a;
        });
      if (i == null) return e;
      var l = t.find(function (e) {
          return e.get("format") === n;
        }),
        s;
      if (l == null)
        s = t.map(function (e) {
          return e.get("format") === a ? e.set("format", n) : e;
        });
      else {
        var u,
          d = c(l.get("data_source"), i.get("data_source")),
          m =
            (u = l.get("customizations")) != null ? u : i.get("customizations");
        s = t
          .filter(function (e) {
            return e.get("format") !== a;
          })
          .map(function (e) {
            if (e.get("format") !== n) return e;
            var t = e.set("data_source", d);
            return (m != null && (t = t.set("customizations", m)), t);
          });
      }
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.set(s)(e);
    }
    function m(e, t) {
      return !o("AdsFlexibleFormatDAUtils").isReactiveControlCardVisibleForDA(
        e,
      ) ||
        t === "aPlusc" ||
        r("AdsAdgroupRecordAccessors").creative.format_transformation_spec.get(
          e,
        ) === null
        ? e
        : t === "reactive_control"
          ? r(
              "AdsAdgroupRecordAccessors",
            ).creative.format_transformation_spec.set(
              r("immutable").List([
                r("immutable").Map({
                  data_source: ["none"],
                  format: "da_collection",
                }),
              ]),
            )(e)
          : r(
              "AdsAdgroupRecordAccessors",
            ).creative.format_transformation_spec.delete(e);
    }
    function p(e, t) {
      if (
        !o("AdsFlexibleFormatDAUtils").isReactiveControlCardVisibleForDA(e) ||
        t === "aPlusc"
      )
        return e;
      var n = e;
      r("AdsAdgroupRecordAccessors").creative.format_transformation_spec.get(
        e,
      ) !== null &&
        (n = r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.delete(e));
      var a = o(
        "DAFlexibleFormatUtils",
      ).isAdgroupEligibleForDACarouselIntroCardRevamp(e)
        ? ["catalog"]
        : [];
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.set(
        r("immutable").List([
          r("immutable").Map({ data_source: a, format: "da_collection" }),
        ]),
      )(n);
    }
    function _(e) {
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
    function f(e) {
      return r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete(e);
    }
    function g(e) {
      var t = ["catalog"];
      (o("DAFlexibleFormatUtils").hasDAIntroCard(e) && t.push("manual_uploads"),
        o("DAFlexibleFormatUtils").hasRelatedMedia(e) &&
          t.push("related_media"));
      var n = e;
      return (
        t.forEach(function (e) {
          n = y(n, "da_collection", e);
        }),
        (n = _(n)),
        n
      );
    }
    function h(e) {
      var t = b(e, "da_collection");
      return ((t = f(t)), t);
    }
    function y(e, t, n) {
      var a = s(t),
        i = a ? d(e) : e,
        l = a
          ? o("AdsFlexibleFormatAdexUtils").getCollageFtsFormatForAdgroup(e)
          : t,
        u = r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.get(i);
      if (u == null)
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.set(
          r("immutable").List([
            r("immutable").Map({ data_source: [n], format: l }),
          ]),
        )(i);
      var c = u.find(function (e) {
        return e.get("format") === l;
      });
      if (c != null) {
        var m = c.get("data_source"),
          p =
            m instanceof r("immutable").List
              ? m.toArray()
              : Array.isArray(m)
                ? m
                : [];
        if (p.length === 1 && p[0] === "none")
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.format_transformation_spec.set(
            u.map(function (e) {
              return e.get("format") === l ? e.set("data_source", [n]) : e;
            }),
          )(i);
        if (p != null && !p.includes(n))
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.format_transformation_spec.set(
            u.map(function (e) {
              return e.get("format") === l
                ? e.set("data_source", p.concat([n]))
                : e;
            }),
          )(i);
      } else
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.set(
          u.push(r("immutable").Map({ data_source: [n], format: l })),
        )(i);
      return i;
    }
    function C(e, t, n) {
      var a = s(t),
        i = a ? d(e) : e,
        l = a
          ? o("AdsFlexibleFormatAdexUtils").getCollageFtsFormatForAdgroup(e)
          : t,
        u = r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.get(i);
      if (u == null) return i;
      var c = u.find(function (e) {
        return e.get("format") === l;
      });
      if (c == null)
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.set(
          u.push(r("immutable").Map({ data_source: ["none"], format: l })),
        )(i);
      var m = u.map(function (e) {
        if (e.get("format") === l) {
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
      ).creative.format_transformation_spec.set(m)(i);
    }
    function b(e, t) {
      var n = s(t),
        a = n ? d(e) : e,
        i = n
          ? o("AdsFlexibleFormatAdexUtils").getCollageFtsFormatForAdgroup(e)
          : t,
        l = r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.get(a);
      if (l == null) return a;
      var u = l.find(function (e) {
        return e.get("format") === i;
      });
      if (u == null) return a;
      var c = l.map(function (e) {
        return e.get("format") === i
          ? e.set("data_source", r("immutable").List(["none"]))
          : e;
      });
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.set(c)(a);
    }
    function v(e, t) {
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
      return y(i, o, a);
    }
    function S(e, t, n, a) {
      var i = s(t),
        l = i ? d(e) : e,
        u = i
          ? o("AdsFlexibleFormatAdexUtils").getCollageFtsFormatForAdgroup(e)
          : t,
        c = r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.get(l);
      if (c == null) {
        var m = (a != null ? a : [])
          .filter(function (e) {
            return e !== n;
          })
          .filter(Boolean);
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.set(
          r("immutable").List([
            r("immutable").Map({
              data_source: m.length === 0 ? ["none"] : m,
              format: u,
            }),
          ]),
        )(l);
      }
      var p = c.find(function (e) {
        return e.get("format") === u;
      });
      if (p == null) {
        var _ = (a != null ? a : [])
            .filter(function (e) {
              return e !== n;
            })
            .filter(Boolean),
          f = c.push(
            r("immutable").Map({
              data_source: _.length === 0 ? ["none"] : _,
              format: u,
            }),
          );
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.set(f)(l);
      }
      var g = c.map(function (e) {
        if (e.get("format") === u) {
          var t = e.get("data_source"),
            o = Array.isArray(t)
              ? t
              : t instanceof r("immutable").List
                ? t.toArray()
                : [];
          if (Array.isArray(o) && (o.includes(n) || o.length === 0)) {
            if (o.length === 1)
              return e.set("data_source", r("immutable").List(["none"]));
            var i = (o.length === 0 ? (a != null ? a : []) : o)
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
      ).creative.format_transformation_spec.set(g)(l);
    }
    function R(e, t, n, a, i) {
      var l = F(e, i);
      return (
        (l = S(l, t, n, a)),
        t === "sa_collection" &&
          n === "catalog" &&
          (l = o("AdsMutators").chain(
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
          )(l)),
        t === "carousel" &&
          n === "catalog" &&
          (l = o("AdsMutators").chain(
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
          )(l)),
        t === "sa_collection" &&
          n === "site_links" &&
          (l = o("AdsMutators").chain(
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
          )(l)),
        t === "carousel" &&
          n === "site_links" &&
          !o("AdsFlexibleFormatAdexUtils").passGKForModalUX(!0) &&
          (l = C(l, "video_slideshow", "site_links")),
        l
      );
    }
    function L(e, t, n, a) {
      var i = F(e, a);
      i = y(i, t, n);
      var l =
        a !== "MANUAL" &&
        o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(
          "product_extensions",
        );
      (t === "sa_collection" &&
        n === "catalog" &&
        !l &&
        (i = o("AdsMutators").chain(
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
        )(i)),
        t === "carousel" &&
          n === "catalog" &&
          !l &&
          (i = o("AdsMutators").chain(
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
          )(i)));
      var s =
        a !== "MANUAL" &&
        o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(
          "site_extensions",
        );
      return (
        t === "sa_collection" &&
          n === "site_links" &&
          !s &&
          (i = o("AdsMutators").chain(
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
          )(i)),
        t === "carousel" &&
          n === "site_links" &&
          !o("AdsAutomaticFlowUtils").isStaticSingleVideoFormat(i) &&
          !o("AdsFlexibleFormatAdexUtils").passGKForModalUX(!0) &&
          (i = y(i, "video_slideshow", "site_links")),
        i
      );
    }
    function E(e, t, n, r, a, i, l, s, u, c) {
      var d;
      (s === void 0 && (s = !0), u === void 0 && (u = !1));
      var m =
          (e == null || (d = e.metadata) == null
            ? void 0
            : d.is_pca_unified_format_ad) === !0,
        p = r
          .filter(function (e) {
            return e.includes(t);
          })
          .keySeq()
          .toArray(),
        _ = e;
      return (
        (i != null ? i : p).forEach(function (i) {
          var d,
            p,
            f,
            g,
            h = o("AdsMetadataConnectedSourcesUtils").countL1SpecImageUrl(_),
            y =
              u === !0 &&
              t === "site_links" &&
              (i === "carousel" ||
                o("AdsFlexibleFormatAdexUtils").passGKForModalUX(!0)),
            C = y ? c : l;
          _ = x(
            _,
            i,
            t,
            s === !0
              ? (a == null || (d = a.get(i)) == null
                  ? void 0
                  : d.find(function (e) {
                      return e.status === "OPT_IN";
                    })) != null
                ? "OPT_IN"
                : (a == null || (p = a.get(i)) == null
                      ? void 0
                      : p.find(function (e) {
                          return e.status === "OPT_OUT";
                        })) != null
                  ? "OPT_OUT"
                  : null
              : a &&
                  (a == null ||
                  (f = a.get(i)) == null ||
                  (f = f.find(function (e) {
                    return e.data_source === t;
                  })) == null
                    ? void 0
                    : f.status),
            n &&
              (i !== "carousel" ||
                t !== "site_links" ||
                ((g = e.creative) == null ||
                (g = g.creative_sourcing_spec) == null ||
                (g = g.dynamic_site_links_spec) == null
                  ? void 0
                  : g.enroll_status) === "OPT_IN" ||
                u === !0 ||
                h > 0),
            r.get(i),
            C,
            m && (i === "sa_collection" || i === "carousel"),
          );
        }),
        _
      );
    }
    var k = ["MANUAL", "DUPLICATION_UPGRADE"];
    function I(e, t) {
      var n,
        r =
          (n = e.creative) == null ||
          (n = n.degrees_of_freedom_spec) == null ||
          (n = n.creative_features_spec) == null
            ? void 0
            : n.product_extensions;
      if (t === "carousel") {
        var o,
          a,
          i =
            r == null || (o = r.customizations) == null
              ? void 0
              : o.pe_carousel,
          l = i == null || (a = i.action_metadata) == null ? void 0 : a.type;
        return (
          (i == null ? void 0 : i.enroll_status) === "OPT_IN" &&
          l != null &&
          k.includes(l)
        );
      }
      if (t === "sa_collection") {
        var s,
          u = r == null || (s = r.action_metadata) == null ? void 0 : s.type;
        return (
          (r == null ? void 0 : r.enroll_status) === "OPT_IN" &&
          u != null &&
          k.includes(u)
        );
      }
      return !1;
    }
    var T = ["MANUAL", "DUPLICATION_UPGRADE"];
    function D(e, t, n) {
      var r,
        o =
          (r = e.creative) == null || (r = r.degrees_of_freedom_spec) == null
            ? void 0
            : r.creative_features_spec,
        a = null,
        i = null;
      if (n === "catalog") {
        if (t === "carousel") {
          var l,
            s,
            u =
              o == null ||
              (l = o.product_extensions) == null ||
              (l = l.customizations) == null
                ? void 0
                : l.pe_carousel;
          ((a = u == null ? void 0 : u.enroll_status),
            (i =
              u == null || (s = u.action_metadata) == null ? void 0 : s.type));
        } else if (t === "sa_collection") {
          var c, d;
          ((a =
            o == null || (c = o.product_extensions) == null
              ? void 0
              : c.enroll_status),
            (i =
              o == null ||
              (d = o.product_extensions) == null ||
              (d = d.action_metadata) == null
                ? void 0
                : d.type));
        }
      } else if (n === "site_links" && t === "sa_collection") {
        var m, p;
        ((a =
          o == null || (m = o.site_extensions) == null
            ? void 0
            : m.enroll_status),
          (i =
            o == null ||
            (p = o.site_extensions) == null ||
            (p = p.action_metadata) == null
              ? void 0
              : p.type));
      }
      return a === "OPT_OUT" && i != null && T.includes(i);
    }
    function x(t, n, a, i, l, s, u, c) {
      var d = ["sa_collection", "carousel"],
        m = ["sa_collection", "carousel", "video_slideshow"],
        p =
          a === "catalog" && d.includes(n)
            ? "product_extensions"
            : a === "site_links" && m.includes(n)
              ? "site_extensions"
              : null,
        _ =
          i == null &&
          p != null &&
          o("AdsAPlusCStickyOptOutUtils").isAPlusCFeatureStickyOptedOut(p),
        f = i === "OPT_OUT" || u === !0 || !l || _;
      if (
        f &&
        l &&
        p === "product_extensions" &&
        I(t, n) &&
        r("gkx")("5791") === !0
      )
        return (
          (e || (e = o("ODS"))).bumpEntityKey(
            68,
            "format_transformation_default_on",
            "prevent_pe_optin_overwrite",
          ),
          c === !0 ? t : y(t, n, a)
        );
      if (!f && D(t, n, a) && r("gkx")("4221")) return t;
      if (c === !0) {
        var g = f
            ? u === !0
              ? "DEFAULT_OFF"
              : l
                ? "STICKY"
                : "MANUAL"
            : i === "OPT_IN"
              ? "STICKY"
              : "DEFAULT",
          h = f ? "OPT_OUT" : "OPT_IN";
        return $(t, n, a, h, g);
      }
      return f
        ? R(
            t,
            n,
            a,
            s != null ? s : [],
            u === !0 ? "DEFAULT_OFF" : l ? "STICKY" : "MANUAL",
          )
        : L(t, n, a, i === "OPT_IN" ? "STICKY" : "DEFAULT");
    }
    function $(e, t, n, a, i) {
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
    function P(e) {
      var t,
        n,
        r,
        a,
        i,
        l = [],
        s = [];
      if (
        ((t = e.creative) == null ||
        (t = t.degrees_of_freedom_spec) == null ||
        (t = t.creative_features_spec) == null
          ? void 0
          : t.product_extensions) != null
      ) {
        var u,
          c =
            (u = e.creative) == null ||
            (u = u.degrees_of_freedom_spec) == null ||
            (u = u.creative_features_spec) == null ||
            (u = u.product_extensions) == null
              ? void 0
              : u.enroll_status;
        if (c === "OPT_IN") {
          var d,
            m =
              ((d = e.creative) == null ||
              (d = d.creative_sourcing_spec) == null
                ? void 0
                : d.associated_product_set_id) != null ||
              o("PERelevanceUtils").hasVirtualProductSetId(e);
          if (m) {
            var p;
            l.push("catalog");
            var _ =
              (p = e.creative) == null ||
              (p = p.degrees_of_freedom_spec) == null ||
              (p = p.creative_features_spec) == null ||
              (p = p.product_extensions) == null ||
              (p = p.customizations) == null ||
              (p = p.pe_carousel) == null
                ? void 0
                : p.enroll_status;
            _ !== "OPT_OUT" && s.push("catalog");
          }
        }
      }
      var f =
          (n = e.creative) == null ||
          (n = n.creative_sourcing_spec) == null ||
          (n = n.site_links_data_consented) == null
            ? void 0
            : n.enroll_status,
        g =
          (r =
            (a = e.creative) == null ||
            (a = a.creative_sourcing_spec) == null ||
            (a = a.site_links_spec) == null
              ? void 0
              : a.size) != null
            ? r
            : 0,
        h =
          (i = e.creative) == null ||
          (i = i.creative_sourcing_spec) == null ||
          (i = i.dynamic_site_links_spec) == null
            ? void 0
            : i.enroll_status,
        y = f !== "OPT_OUT" && (g > 0 || h === "OPT_IN");
      y && (l.push("site_links"), s.push("site_links"));
      var C = [];
      return (
        s.includes("site_links") &&
          (!o("AdsAutomaticFlowUtils").isStaticSingleVideoFormat(e) ||
            o("AdsFlexibleFormatAdexUtils").passGKForModalUX(!0)) &&
          C.push("site_links"),
        { carousel: s, collection: l, videoSlideshow: C }
      );
    }
    var N = ["sa_collection", "carousel", "video_slideshow"];
    function M(e, t) {
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
    function w(e) {
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
    function A(e) {
      return N.map(function (t) {
        var n = M(t, e);
        return r("immutable").Map({
          data_source: n.length > 0 ? n : ["none"],
          format: t,
        });
      });
    }
    function F(e, t) {
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
      var l = A(P(e));
      return o("AdsMutators").chain(
        r("AdsAdgroupRecordAccessors").creative.format_transformation_spec.set(
          r("immutable").List(l),
        ),
      )(e);
    }
    function O(e, t) {
      if (!r("gkx")("4221")) return e;
      var n = P(e),
        o = r(
          "AdsAdgroupRecordAccessors",
        ).creative.format_transformation_spec.get(e),
        a =
          n.collection.length === 0 &&
          n.carousel.length === 0 &&
          n.videoSlideshow.length === 0;
      if (o == null || o.size === 0)
        return a
          ? e
          : r(
              "AdsAdgroupRecordAccessors",
            ).creative.format_transformation_spec.set(
              r("immutable").List(A(n)),
            )(e);
      var i = o.map(function (e) {
        var t = e.get("format");
        if (typeof t != "string" || !N.includes(t)) return e;
        var o = new Set(M(t, n)),
          a = t !== "sa_collection",
          i = w(e.get("data_source")).filter(function (e) {
            return o.has(e) || (a && e === "site_links");
          });
        return e.set(
          "data_source",
          r("immutable").List(i.length > 0 ? i : ["none"]),
        );
      });
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.format_transformation_spec.set(i)(e);
    }
    function B(e, t, n) {
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
        if (t == null) return W(e, a, i, n);
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
    function W(e, t, n, r) {
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
    function q(e, t) {
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
    function U(e) {
      var t = r(
          "AdsAdgroupRecordAccessors",
        ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.enroll_status.get(
          e,
        ),
        n = r(
          "AdsAdgroupRecordAccessors",
        ).creative.creative_sourcing_spec.site_links_data_consented.enroll_status.get(
          e,
        ),
        a = [];
      return (
        t === "OPT_IN" &&
          a.push(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.enroll_status.set(
              "OPT_OUT",
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.degrees_of_freedom_spec.creative_features_spec.site_extensions.action_metadata.type.set(
              "MANUAL",
            ),
          ),
        n === "OPT_IN" &&
          a.push(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.site_links_data_consented.enroll_status.set(
              "OPT_OUT",
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.creative_sourcing_spec.site_links_data_consented.action_metadata.type.set(
              "MANUAL",
            ),
          ),
        a.length === 0
          ? e
          : o("AdsMutators").chain.apply(o("AdsMutators"), a)(e)
      );
    }
    function V(e) {
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
    ((l.canonicalizeCollageFamily = d),
      (l.adsAdgroupFormatTransformationDAOptOutMutator = m),
      (l.adsAdgroupFormatTransformationDAOptInMutator = p),
      (l.adsDACollectionAssetFeedSpecOptInMutator = _),
      (l.adsDACollectionAssetFeedSpecOptOutMutator = f),
      (l.adsDACollectionOptInMutator = g),
      (l.adsDACollectionOptOutMutator = h),
      (l.adsAdgroupFormatTransformationDataSourceOptInMutator = y),
      (l.adsAdgroupFormatTransformationDataSourceOptOutMutator = C),
      (l.adsAdgroupFormatTransformationFormatOptOutMutator = b),
      (l.adsAdgroupFormatTransformationDASingleMediaAsCollectionDefaultOptInAndOutMutator =
        v),
      (l.adsAdgroupReactiveControlOptionOptOutMutator = S),
      (l.adsAdgroupReactiveControlOptionOptOutWithBoundleMutationMutator = R),
      (l.adsAdgroupReactiveControlOptionOptInWithBoundleMutationMutator = L),
      (l.adsAdgroupFormatTransformationDataSourceDefaultOnMutator = E),
      (l.syncFTSFromCFS = O),
      (l.adsAdgroupFTSSetUseIntroCardMutator = B),
      (l.applyActiveMediaItemToAdgroupMutator = q),
      (l.applyNoSiteLinksToAdgroupMutator = U),
      (l.defaultOffProductExtensionEnrollStatusMutator = V));
  },
  98,
);
