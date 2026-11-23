__d(
  "AdsAppExperiencesUtils",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAppExperiencesLoggerUtils",
    "AdsBuyingTypes",
    "AdsNonEcommDlpLandingPagePreviewGating",
    "AdsRegulatedCategory",
    "AdsSensitiveVerticalUtils",
    "DateTime",
    "PERelevanceUtils",
    "appExperienceContainerSourceManifest",
    "getWebsiteMediaSpecHadData",
    "gkx",
    "immutable",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return !(
        e == null ||
        e.length === 0 ||
        e.includes(r("AdsRegulatedCategory").NONE)
      );
    }
    function s(e) {
      return e != null && e !== r("AdsBuyingTypes").AUCTION;
    }
    function u(t, n, r, o, a) {
      return !(s(n) || e(t) || o === !1 || a === !1);
    }
    function c(e) {
      var t,
        n,
        o,
        a,
        i,
        l,
        s,
        u,
        c =
          e == null || (t = e.creative) == null ? void 0 : t.object_story_spec,
        d =
          (n =
            (o =
              (a = c == null || (i = c.link_data) == null ? void 0 : i.link) !=
              null
                ? a
                : c == null ||
                    (l = c.video_data) == null ||
                    (l = l.call_to_action) == null ||
                    (l = l.value) == null
                  ? void 0
                  : l.link) != null
              ? o
              : r("justknobx")._("7508")
                ? c == null || (s = c.template_data) == null
                  ? void 0
                  : s.link
                : null) != null
            ? n
            : e == null || (u = e.creative) == null
              ? void 0
              : u.link_url;
      return d != null && d !== "";
    }
    function d(e) {
      return e == null ? !1 : Array.isArray(e) ? e.length > 0 : e.size > 0;
    }
    function m(e) {
      return e != null && e !== "";
    }
    function p(e, t) {
      return e == null || typeof e != "object"
        ? null
        : e instanceof r("immutable").Map
          ? e.get(t)
          : e[t];
    }
    function _(e) {
      if (e == null) return !1;
      var t;
      if (Array.isArray(e)) t = e;
      else if (e instanceof r("immutable").List) t = e.toArray();
      else return !0;
      if (t.length === 0) return !1;
      var n = t.some(function (e) {
        return p(e, "is_checked") != null;
      });
      return n
        ? t.some(function (e) {
            return p(e, "is_checked") === !0;
          })
        : !0;
    }
    function f(e) {
      var t, n;
      return (
        ((t = o("PERelevanceUtils").getProductExtensionsSpec(
          e == null ||
            (n = e.creative) == null ||
            (n = n.creative_sourcing_spec) == null
            ? void 0
            : n.ad_extensions_relevancy_spec,
        )) == null
          ? void 0
          : t.virtual_pset_id) != null
      );
    }
    function g(e) {
      var t;
      return (
        (e == null ||
        (t = e.creative) == null ||
        (t = t.creative_sourcing_spec) == null
          ? void 0
          : t.associated_product_set_id) != null ||
        (G() && f(e))
      );
    }
    function h(e) {
      return {
        website_summaries: e.hasWebsiteSummary,
        website_media: e.hasWebsiteMedia || e.hasFeaturedOfferingMedia,
        website_screenshot: e.hasWebsiteScreenshot,
        website_form: e.hasWebsiteForm,
        app_info: e.hasAppInfoMedia || e.hasAppInfoOverview || e.hasAppReviews,
        app_reviews: e.hasAppReviews,
        products: e.hasProductSet,
      };
    }
    function y(e, t) {
      var n,
        o,
        a,
        i,
        l,
        s,
        u,
        p,
        _ =
          e == null || (n = e.creative) == null
            ? void 0
            : n.creative_sourcing_spec,
        f = _ == null ? void 0 : _.website_summary_spec,
        y = _ == null ? void 0 : _.website_media_spec,
        C = _ == null ? void 0 : _.featured_offering_spec,
        b = _ == null ? void 0 : _.app_info_spec,
        v = c(e);
      return h({
        hasAppInfoMedia:
          m(b == null || (o = b.media) == null ? void 0 : o.icon_image_url) ||
          d(b == null || (a = b.media) == null ? void 0 : a.screenshot_urls),
        hasAppInfoOverview:
          m(
            b == null || (i = b.app_information) == null ? void 0 : i.app_name,
          ) ||
          m(
            b == null || (l = b.app_information) == null
              ? void 0
              : l.app_author,
          ) ||
          m(
            b == null || (s = b.app_information) == null
              ? void 0
              : s.app_category,
          ),
        hasAppReviews:
          m(
            b == null || (u = b.ratings_and_reviews) == null
              ? void 0
              : u.star_reviews,
          ) ||
          m(
            b == null || (p = b.ratings_and_reviews) == null
              ? void 0
              : p.ratings,
          ),
        hasFeaturedOfferingMedia:
          (C == null ? void 0 : C.adex_had_data) === !0 ||
          d(C == null ? void 0 : C.media),
        hasProductSet: g(e),
        hasWebsiteForm: v && t,
        hasWebsiteMedia:
          r("getWebsiteMediaSpecHadData")(y) === !0 ||
          d(y == null ? void 0 : y.media),
        hasWebsiteScreenshot: v,
        hasWebsiteSummary:
          (f == null ? void 0 : f.is_summary_text_available) === !0 ||
          (f == null ? void 0 : f.is_selling_points_available) === !0 ||
          d(f == null ? void 0 : f.selling_points) ||
          m(f == null ? void 0 : f.summary_text),
      });
    }
    function C(e) {
      return (
        e === r("AdsAPIObjectives").OUTCOME_LEADS ||
        e === r("AdsAPIObjectives").LEAD_GENERATION
      );
    }
    function b(e) {
      var t,
        n,
        r,
        o,
        a,
        i,
        l,
        s,
        u,
        c,
        p,
        _ =
          e == null || (t = e.creative) == null
            ? void 0
            : t.creative_sourcing_spec,
        f = _ == null ? void 0 : _.app_info_spec,
        g = _ == null ? void 0 : _.website_summary_spec,
        h =
          d(g == null ? void 0 : g.selling_points) ||
          m(g == null ? void 0 : g.summary_text),
        y =
          m(f == null || (n = f.media) == null ? void 0 : n.icon_image_url) ||
          d(f == null || (r = f.media) == null ? void 0 : r.screenshot_urls) ||
          m(
            f == null || (o = f.app_information) == null ? void 0 : o.app_name,
          ) ||
          m(
            f == null || (a = f.app_information) == null
              ? void 0
              : a.app_author,
          ) ||
          m(
            f == null || (i = f.app_information) == null
              ? void 0
              : i.app_category,
          ) ||
          m(
            f == null || (l = f.ratings_and_reviews) == null
              ? void 0
              : l.star_reviews,
          ) ||
          m(
            f == null || (s = f.ratings_and_reviews) == null
              ? void 0
              : s.ratings,
          );
      return (
        (R(e) && h) ||
        (k(e) && y) ||
        (I(e) &&
          d(
            f == null || (u = f.ratings_and_reviews) == null
              ? void 0
              : u.top_reviews,
          )) ||
        (D(e) &&
          d(
            _ == null || (c = _.website_media_spec) == null ? void 0 : c.media,
          )) ||
        (x(e) &&
          d(
            _ == null || (p = _.featured_offering_spec) == null
              ? void 0
              : p.media,
          )) ||
        T(e)
      );
    }
    function v(e) {
      var t,
        n =
          e == null || (t = e.creative) == null
            ? void 0
            : t.app_experience_spec;
      return [
        n == null ? void 0 : n.ad_extensions,
        n == null ? void 0 : n.collection,
        n == null ? void 0 : n.details_to_ad_layout,
        n == null ? void 0 : n.reveal_details,
        n == null ? void 0 : n.show_spotlights,
      ].some(function (e) {
        return d(e == null ? void 0 : e.data_sources);
      });
    }
    function S(e, t, n) {
      var r = y(e, C(t == null ? void 0 : t.objective)),
        a = c(e),
        i =
          Q(!0) &&
          Object.values(r).some(function (e) {
            return e === !0;
          }),
        l = b(e) || a || v(e);
      if (!i && !l) return !1;
      var s = u(
        t == null ? void 0 : t.special_ad_categories,
        t == null ? void 0 : t.buying_type,
        e != null ? o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e) : !1,
        null,
        null,
      );
      return (
        n != null &&
          o("AdsAppExperiencesLoggerUtils").logAppExperiencesModalEligible(
            n,
            s,
            r,
            "precondition",
          ),
        s
      );
    }
    function R(e) {
      var t,
        n =
          e == null ||
          (t = e.creative) == null ||
          (t = t.creative_sourcing_spec) == null
            ? void 0
            : t.website_summary_spec;
      if ((n == null ? void 0 : n.enroll_status) !== "OPT_IN") return !1;
      var r = n == null ? void 0 : n.subfeatures;
      return r == null
        ? !1
        : Array.isArray(r)
          ? r.some(function (e) {
              return (
                (e.feature_name === "selling_points" ||
                  e.feature_name === "reviews") &&
                e.enroll_status === "OPT_IN"
              );
            })
          : r.some(function (e) {
              return (
                (e.get("feature_name") === "selling_points" ||
                  e.get("feature_name") === "reviews") &&
                e.get("enroll_status") === "OPT_IN"
              );
            });
    }
    function L(e) {
      return (e == null ? void 0 : e.enroll_status) === "OPT_IN";
    }
    function E(e) {
      var t;
      return (
        (e == null || (t = e.ratings_and_reviews) == null
          ? void 0
          : t.enroll_status) === "OPT_IN"
      );
    }
    function k(e) {
      var t;
      return (
        (e == null ||
        (t = e.creative) == null ||
        (t = t.creative_sourcing_spec) == null ||
        (t = t.app_info_spec) == null
          ? void 0
          : t.enroll_status) === "OPT_IN"
      );
    }
    function I(e) {
      var t;
      return (
        (e == null ||
        (t = e.creative) == null ||
        (t = t.creative_sourcing_spec) == null ||
        (t = t.app_info_spec) == null ||
        (t = t.ratings_and_reviews) == null
          ? void 0
          : t.enroll_status) === "OPT_IN"
      );
    }
    function T(e) {
      var t;
      return (
        g(e) &&
        (e == null ||
        (t = e.creative) == null ||
        (t = t.creative_sourcing_spec) == null ||
        (t = t.catalog) == null
          ? void 0
          : t.enroll_status) === "OPT_IN"
      );
    }
    function D(e) {
      var t;
      return (
        (e == null ||
        (t = e.creative) == null ||
        (t = t.creative_sourcing_spec) == null ||
        (t = t.website_media_spec) == null
          ? void 0
          : t.enroll_status) === "OPT_IN"
      );
    }
    function x(e) {
      var t;
      return (
        (e == null ||
        (t = e.creative) == null ||
        (t = t.creative_sourcing_spec) == null ||
        (t = t.featured_offering_spec) == null
          ? void 0
          : t.enroll_status) === "OPT_IN"
      );
    }
    function $(e) {
      var t,
        n,
        r,
        o,
        a =
          (t = e.creative) == null ||
          (t = t.creative_sourcing_spec) == null ||
          (t = t.site_links_spec) == null
            ? void 0
            : t.toArray(),
        i =
          (n = e.creative) == null ||
          (n = n.creative_sourcing_spec) == null ||
          (n = n.site_links_data_consented) == null
            ? void 0
            : n.enroll_status,
        l =
          (r = e.creative) == null ||
          (r = r.creative_sourcing_spec) == null ||
          (r = r.dynamic_site_links_spec) == null
            ? void 0
            : r.enroll_status,
        s = (o = a == null ? void 0 : a.length) != null ? o : 0;
      return i !== "OPT_OUT" && (s > 0 || l === "OPT_IN");
    }
    function P(e) {
      var t,
        n,
        r,
        o,
        a,
        i,
        l = (t = e.creative) == null ? void 0 : t.creative_sourcing_spec;
      return (
        ((n =
          l == null ||
          (r = l.website_media_spec) == null ||
          (r = r.media) == null
            ? void 0
            : r.size) != null
          ? n
          : 0) > 0 ||
        (l == null || (o = l.featured_offering_spec) == null
          ? void 0
          : o.adex_had_data) === !0 ||
        ((a =
          l == null ||
          (i = l.featured_offering_spec) == null ||
          (i = i.media) == null
            ? void 0
            : i.size) != null
          ? a
          : 0) > 0
      );
    }
    function N(e, t) {
      switch (e) {
        case "website_media":
          return P(t) && (D(t) || x(t));
        case "app_info":
          return k(t);
        case "app_reviews":
          return I(t);
        case "products":
          return T(t);
        case "site_links":
          return $(t);
        default:
          return !1;
      }
    }
    function M(e) {
      var t,
        n =
          e == null ||
          (t = e.creative) == null ||
          (t = t.creative_sourcing_spec) == null
            ? void 0
            : t.featured_offering_spec;
      return w(
        n == null ? void 0 : n.enroll_status,
        n == null ? void 0 : n.media,
      );
    }
    function w(e, t) {
      return e === "OPT_IN" && d(t);
    }
    function A(e) {
      return e ? F() : !1;
    }
    function F(e) {
      return (
        e === void 0 && (e = !1),
        O() ? !0 : e ? r("qex")._("3086") === !0 : r("qex")._("3140") === !0
      );
    }
    function O() {
      return r("gkx")("18538") === !0;
    }
    function B() {
      return r("qex")._("1752") === !0 ? "two_card" : "single";
    }
    function W(e, t, n, r) {
      return e.filter(function (e) {
        return t.has(e) && n(e) === r;
      });
    }
    function q(e, t, n) {
      var r,
        o = function (r) {
          return t.has(r) && n[r] === !0;
        };
      return (
        e.requiredSourceKeys.some(o) &&
        ((r = e.mandatorySourceKeys) != null ? r : []).every(o)
      );
    }
    function U(e) {
      return (e === "ad_extensions" || e === "collection") &&
        B() === "two_card" &&
        !O()
        ? ["ad_extensions", "collection"]
        : (e === "show_landing_page_preview" || e === "show_summaries") && V(!0)
          ? ["show_landing_page_preview", "show_summaries"]
          : [e];
    }
    function V(e) {
      return (
        e === void 0 && (e = !1),
        o(
          "AdsNonEcommDlpLandingPagePreviewGating",
        ).isLandingPagePreviewSurfaceEnabled({ silent: e })
      );
    }
    function H() {
      return r("justknobx")._("7625");
    }
    function G() {
      return !0;
    }
    function z() {
      var e;
      return K() ? !1 : (e = r("qex")._("2851")) != null ? e : !0;
    }
    function j() {
      return (Q() && r("qex")._("4348") === !0) || K();
    }
    function K() {
      return Q() && r("qex")._("5799") === !0;
    }
    function Q(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("gkx")("27228") === !0 : r("gkx")("27230") === !0
      );
    }
    function X(e) {
      var t,
        n,
        r,
        o = e == null || (t = e.media) == null ? void 0 : t.icon_image_url,
        a =
          (n =
            e == null || (r = e.media) == null ? void 0 : r.screenshot_urls) !=
          null
            ? n
            : [];
      return (
        (o != null && o !== "") ||
        a.some(function (e) {
          return e != null && e !== "";
        })
      );
    }
    function Y(e) {
      var t,
        n,
        r,
        o = e == null || (t = e.app_information) == null ? void 0 : t.app_name,
        a =
          e == null || (n = e.app_information) == null ? void 0 : n.app_author,
        i =
          e == null || (r = e.app_information) == null
            ? void 0
            : r.app_category;
      return (
        (o != null && o !== "") ||
        (a != null && a !== "") ||
        (i != null && i !== "")
      );
    }
    function J(e) {
      var t,
        n,
        r =
          e == null || (t = e.ratings_and_reviews) == null
            ? void 0
            : t.star_reviews,
        o =
          e == null || (n = e.ratings_and_reviews) == null ? void 0 : n.ratings;
      return (r != null && r !== "") || (o != null && o !== "");
    }
    function Z(e) {
      return X(e);
    }
    function ee(e) {
      return Y(e);
    }
    function te(e) {
      return J(e);
    }
    function ne(e) {
      var t, n;
      return (
        ((t =
          e == null ||
          (n = e.ratings_and_reviews) == null ||
          (n = n.top_reviews) == null
            ? void 0
            : n.length) != null
          ? t
          : 0) > 0
      );
    }
    function re(e) {
      var t,
        n,
        r =
          ((e == null || (t = e.media) == null ? void 0 : t.enroll_status) ===
            "OPT_IN" &&
            X(e)) ||
          ((e == null || (n = e.app_information) == null
            ? void 0
            : n.enroll_status) === "OPT_IN" &&
            Y(e)) ||
          (E(e) && J(e));
      return L(e) && r;
    }
    function oe(e) {
      return X(e) || Y(e) || J(e);
    }
    function ae(e) {
      var t, n;
      return (
        L(e) ||
        (e == null || (t = e.media) == null ? void 0 : t.enroll_status) ===
          "OPT_IN" ||
        (e == null || (n = e.app_information) == null
          ? void 0
          : n.enroll_status) === "OPT_IN" ||
        E(e)
      );
    }
    function ie(e) {
      return ne(e) || J(e);
    }
    function le(e, t, n, a) {
      var i = n === "website_screenshot" || n === "website_form";
      if (
        (i && !a) ||
        (o("AdsSensitiveVerticalUtils").isAccountInSensitiveVerticals() &&
          (n === "website_form" ||
            (n === "website_screenshot" && !r("justknobx")._("7509"))))
      )
        return !1;
      if (
        (t === "ad_extensions" || t === "collection") &&
        (n === "website_media" || n === "site_links")
      ) {
        var l = O();
        return l && n === "website_media"
          ? e.website_media
          : e.aplusSiteExtensions != null
            ? e.aplusSiteExtensions === "OPT_IN"
            : l
              ? e.site_links
              : e.website_media || e.site_links;
      }
      if (
        t === "show_landing_page_preview" &&
        n === "website_media" &&
        e.isWebsiteMediaSpecOptedOut === !0 &&
        H()
      )
        return !1;
      var s =
        t === "ad_extensions" || t === "collection"
          ? e.aplusProductExtensions
          : t === "details_to_ad_layout"
            ? e.aplusAdsWithBenefits
            : t === "show_landing_page_preview" || t === "show_summaries"
              ? null
              : t === "reveal_details"
                ? e.aplusRevealDetailsOverTime
                : t === "show_spotlights"
                  ? e.aplusShowDestinationBlurbs
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          t,
                      );
                    })();
      return s != null
        ? s === "OPT_IN"
        : n === "app_info"
          ? e.app_info
          : n === "app_reviews"
            ? e.app_reviews
            : n === "products"
              ? e.products
              : n === "website_media"
                ? e.website_media
                : n === "website_screenshot" || n === "website_form";
    }
    function se(e, t) {
      return t === "details_to_ad_layout"
        ? babelHelpers.extends({}, e, { aplusAdsWithBenefits: null })
        : t === "reveal_details"
          ? babelHelpers.extends({}, e, { aplusRevealDetailsOverTime: null })
          : t === "show_spotlights"
            ? babelHelpers.extends({}, e, { aplusShowDestinationBlurbs: null })
            : t === "ad_extensions" || t === "collection"
              ? babelHelpers.extends({}, e, {
                  aplusProductExtensions: null,
                  aplusSiteExtensions: null,
                })
              : e;
    }
    var ue = 1440 * 60 * 1e3;
    function ce(e, t) {
      if (e == null || t || !r("justknobx")._("6768")) return e;
      var n = r("DateTime").now(0).getUnixTimestamp(),
        o = {};
      for (var a of Object.keys(e)) {
        o[a] = {};
        for (var i of Object.keys(e[a])) {
          var l = e[a][i],
            s = l.status === "OPT_OUT" && n - l.timestamp * 1e3 >= ue;
          s || (o[a][i] = l);
        }
      }
      return o;
    }
    function de(e) {
      var t;
      return (
        (e == null ||
        (t = e.ad_extensions) == null ||
        (t = t.data_sources) == null
          ? void 0
          : t.some(function (e) {
              return e.feature_name === "ugc" && e.enroll_status === "OPT_OUT";
            })) === !0
      );
    }
    function me(e, t, n, r, o, a) {
      var i, l, s;
      if (o === "website_summaries") return !1;
      if (o === "ugc") return t.ugc === !0 && !de(e);
      var u =
          r === "details_to_ad_layout"
            ? e == null
              ? void 0
              : e.details_to_ad_layout
            : r === "reveal_details"
              ? e == null
                ? void 0
                : e.reveal_details
              : r === "show_spotlights"
                ? e == null
                  ? void 0
                  : e.show_spotlights
                : r === "ad_extensions"
                  ? O()
                    ? e == null
                      ? void 0
                      : e.ad_extensions
                    : null
                  : r === "collection" && O()
                    ? e == null
                      ? void 0
                      : e.collection
                    : null,
        c =
          u == null || (i = u.data_sources) == null
            ? void 0
            : i.find(function (e) {
                return e.feature_name === o;
              }),
        d =
          (c == null || (l = c.action_metadata) == null ? void 0 : l.type) ===
          "MANUAL";
      if (!le(d ? se(t, r) : t, r, o, a)) return !1;
      if (d) return (c == null ? void 0 : c.enroll_status) === "OPT_IN";
      var m =
        n == null || (s = n[r]) == null || (s = s[o]) == null
          ? void 0
          : s.status;
      return m != null
        ? m === "OPT_IN"
        : c != null
          ? c.enroll_status === "OPT_IN"
          : !0;
    }
    function pe(e) {
      var t,
        n = e.apluscShowSummaryStatus,
        r = e.apSellingPointsStatus,
        o = e.csEnrollStatus,
        a = e.csSellingPointsStatus,
        i = e.ueditorSellingPointsOptedIn,
        l = (t = a != null ? a : o) != null ? t : i ? "OPT_IN" : n;
      return l !== "OPT_IN" ? !1 : r != null ? r === "OPT_IN" : !0;
    }
    function _e(e, t, n) {
      return e
        ? t == null || (t === "OPT_OUT" && n === "DEFAULT")
          ? "OPT_IN"
          : null
        : t === "OPT_IN"
          ? "OPT_OUT"
          : null;
    }
    var fe = new Set(["website_media", "app_info", "app_reviews", "products"]);
    function ge(e, t) {
      var n = [];
      for (var r of Object.keys(
        o("appExperienceContainerSourceManifest")
          .APP_EXPERIENCE_CONTAINER_SOURCES,
      ))
        for (var a of o("appExperienceContainerSourceManifest")
          .APP_EXPERIENCE_CONTAINER_SOURCES[r])
          fe.has(a) && !N(a, e) && N(a, t) && n.push([r, a]);
      return n;
    }
    ((l.isAdSetupEligibleForAppExperiences = u),
      (l.hasSelectedAppReview = _),
      (l.buildAppExperiencesSourceDataExistence = h),
      (l.getAppExperiencesSourceDataExistence = y),
      (l.isAppExperiencesLeadCampaign = C),
      (l.isAdgroupEligibleForAppExperiences = S),
      (l.isWebsiteSummaryDataOptedIn = R),
      (l.appInfoSpecIsOptedIn = L),
      (l.appReviewsSpecIsOptedIn = E),
      (l.isAppInfoOptedIn = k),
      (l.isAppReviewsOptedIn = I),
      (l.isCatalogOptedIn = T),
      (l.isWebsiteMediaOptedIn = D),
      (l.isFeaturedOfferingOptedIn = x),
      (l.isSESiteLinksConsented = $),
      (l.hasWebsiteMediaData = P),
      (l.isAdditionalSourceOptedIn = N),
      (l.isFeaturedOfferingDataOptedIn = M),
      (l.isFeaturedOfferingDataOptedInFromSpec = w),
      (l.isAdgroupEligibleForAdExtensionsL1AEMigration = A),
      (l.isADUToL1AEPhase1Enabled = F),
      (l.isADUToL1AEPhase2Enabled = O),
      (l.getADUToL1AECardVariant = B),
      (l.collectAppExperienceKeysForState = W),
      (l.isAppExperienceEnabled = q),
      (l.getAppExperienceKeysSharingConsent = U),
      (l.isNonEcommDlpLandingPagePreviewEnabled = V),
      (l.isLandingPagePreviewWebsiteMediaOptOutEnabled = H),
      (l.isAppExperiencesVirtualProductSetEnabled = G),
      (l.isAppExperiencesM4ContainerGranularControlEnabled = z),
      (l.isEligibleForL1AEM4 = j),
      (l.isEligibleForL1AEM41 = K),
      (l.isAppExperiencesM4Enabled = Q),
      (l.appInfoHasMediaContent = X),
      (l.appInfoHasOverviewContent = Y),
      (l.appInfoHasRatingsContent = J),
      (l.appInfoHasMedia = Z),
      (l.appInfoHasOverview = ee),
      (l.appInfoHasRatings = te),
      (l.appInfoHasTopReviews = ne),
      (l.appInfoSpecHasData = re),
      (l.appInfoSpecHasAvailableData = oe),
      (l.appInfoSpecIsEnrolled = ae),
      (l.appReviewsSpecHasAvailableData = ie),
      (l.applyL1AEContainerStickyCooldown = ce),
      (l.hasUGCExtendAdOptOut = de),
      (l.resolveAdditionalSourceEnrollStatus = me),
      (l.resolveWebsiteSummariesEnrollStatus = pe),
      (l.computeAdditionalSourceCascadeEnrollStatus = _e),
      (l.CONSENT_DRIVEN_ADDITIONAL_SOURCES = fe),
      (l.getReadoptedAdditionalSourcePairs = ge));
  },
  98,
);
