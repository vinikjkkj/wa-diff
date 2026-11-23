__d(
  "AdsMetadataSiteLinkWebsiteHighlightsDedupe",
  [
    "AdsMetadataSiteLinkWebsiteHighlightsDedupeLoader",
    "FBLogger",
    "clearTimeout",
    "getErrorSafe",
    "gkx",
    "isStringNullOrEmpty",
    "requireDeferred",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("fetchWebsiteMediaImageURLs").__setRef(
      "AdsMetadataSiteLinkWebsiteHighlightsDedupe",
    );
    function s() {
      return r("gkx")("29224");
    }
    function u(e) {
      var t = (e != null ? e : "")
        .replace(/^(?:[a-z][a-z0-9+.-]*:)?\/\/[^/]*/i, "")
        .replace(/[?#][^]*$/, "");
      return t.slice(t.lastIndexOf("/") + 1).includes(".") ? t : "";
    }
    function c(e) {
      var t = new Set();
      for (var n of e) {
        var r = u(n);
        r !== "" && t.add(r);
      }
      return t;
    }
    var d = 4;
    function m(e) {
      var t = e.site_link_recommendation_type;
      return (
        t === "MANUAL" ||
        t === "MANUAL_CAMPAIGN" ||
        t === "STICKY" ||
        e.is_site_link_sticky === !0
      );
    }
    function p(e, t) {
      var n = u(e.site_link_image_url);
      return !m(e) && n !== "" && t.has(n);
    }
    function _(e, t) {
      var n = e.size - d,
        r = e.filter(function (e) {
          return n <= 0 || !p(e, t) ? !0 : (n--, !1);
        });
      return r.size === e.size
        ? { droppedCount: 0, siteLinks: e }
        : { droppedCount: e.size - r.size, siteLinks: r };
    }
    function f(e) {
      var t = new Map();
      for (var n of e) {
        var o = n.image_asset_fbid,
          a = n.image_url,
          i = u(a);
        i !== "" &&
          t.get(i) == null &&
          t.set(i, r("isStringNullOrEmpty")(o) ? null : o);
      }
      return t;
    }
    function g(e, t, n) {
      var o = new Set(t),
        a = new Map();
      return (
        e.forEach(function (e) {
          var t = n.get(u(e.site_link_image_url)),
            i = e.site_link_url;
          !o.has(e) &&
            t != null &&
            !r("isStringNullOrEmpty")(i) &&
            a.set(t, {
              duplicate_site_link_recommendation_type:
                e.site_link_recommendation_type,
              duplicate_site_link_title: e.site_link_title,
              duplicate_site_link_url: i,
            });
        }),
        a
      );
    }
    var h = 3e3;
    function y(t, n, o) {
      return t == null || n == null || n === "" || !s()
        ? null
        : e
            .load()
            .then(function (e) {
              return e.fetchWebsiteMediaImageURLs(t.replace(/^act_/, ""), n);
            })
            .then(
              function (e) {
                return {
                  adgroupID: o,
                  imageAssetFBIDs: f(e),
                  outcome: "fetched",
                };
              },
              function (e) {
                return (
                  r("FBLogger")("ads_extensions")
                    .catching(r("getErrorSafe")(e))
                    .warn(
                      "Failed to fetch Website Highlights images for Site Links",
                    ),
                  { imageAssetFBIDs: null, outcome: "failed" }
                );
              },
            );
    }
    async function C(e) {
      var t = null,
        n = new Promise(function (e) {
          t = r("setTimeout")(function () {
            return e({ imageAssetFBIDs: null, outcome: "timed_out" });
          }, h);
        });
      try {
        return await Promise.race([e, n]);
      } finally {
        r("clearTimeout")(t);
      }
    }
    async function b(e, t) {
      if (t == null || e.isEmpty()) return e;
      try {
        var n = await C(t),
          a = n.adgroupID,
          i = n.imageAssetFBIDs;
        if (i == null) return e;
        var l = _(e, new Set(i.keys())).siteLinks;
        return (
          a != null &&
            o(
              "AdsMetadataSiteLinkWebsiteHighlightsDedupeLoader",
            ).rememberDuplicateSiteLinks(a, g(e, l, i)),
          l
        );
      } catch (t) {
        return (
          r("FBLogger")("ads_extensions")
            .catching(r("getErrorSafe")(t))
            .warn(
              "Failed to drop Site Links that repeat a Website Highlights image",
            ),
          e
        );
      }
    }
    ((l.isSiteLinkWebsiteHighlightsDedupeEnabled = s),
      (l.imagePath = u),
      (l.getWebsiteHighlightsImagePaths = c),
      (l.removeWebsiteHighlightsDuplicates = _),
      (l.getWebsiteHighlightsImageAssetFBIDs = f),
      (l.fetchWebsiteHighlightsImagePaths = y),
      (l.removeFetchedWebsiteHighlightsDuplicates = b));
  },
  98,
);
