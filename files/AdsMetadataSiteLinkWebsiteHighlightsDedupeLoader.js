__d(
  "AdsMetadataSiteLinkWebsiteHighlightsDedupeLoader",
  [
    "AdsAdgroupDraftFragmentStore",
    "Promise",
    "adsCFAdgroupIsNewID",
    "gkx",
    "justknobx",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("requireDeferred")(
        "AdsMetadataSiteLinkWebsiteHighlightsDedupe",
      ).__setRef("AdsMetadataSiteLinkWebsiteHighlightsDedupeLoader"),
      u = new Map(),
      c = 50;
    function d() {
      var e = r("justknobx")._("7701");
      return e > 0 ? e : c;
    }
    function m(e, t) {
      if (t.size !== 0) {
        var n = new Map(u.get(e));
        (t.forEach(function (e, t) {
          n.set(t, e);
        }),
          u.delete(e),
          u.set(e, n));
        var r = d();
        for (var o of u.keys()) {
          if (u.size <= r) break;
          u.delete(o);
        }
      }
    }
    function p(e, t) {
      var n = e.get(t);
      return typeof n == "string" && n !== "" ? n : null;
    }
    var _ = [
      "duplicate_site_link_recommendation_type",
      "duplicate_site_link_title",
      "duplicate_site_link_url",
    ];
    function f(e) {
      var t = p(e, "duplicate_site_link_url");
      return t == null
        ? null
        : {
            duplicate_site_link_recommendation_type: p(
              e,
              "duplicate_site_link_recommendation_type",
            ),
            duplicate_site_link_title: p(e, "duplicate_site_link_title"),
            duplicate_site_link_url: t,
          };
    }
    function g(e, t, n, r) {
      var o = new Map();
      r == null ||
        r.forEach(function (e) {
          var t = p(e, "image_asset_fbid"),
            n = f(e);
          t != null && n != null && o.set(t, n);
        });
      var a = u.get(e),
        i = new Set(
          n == null
            ? void 0
            : n.map(function (e) {
                return p(e, "site_link_url");
              }),
        ),
        l = t.map(function (e) {
          var t,
            n = p(e, "duplicate_site_link_url");
          if (n != null)
            return i.has(n)
              ? e.withMutations(function (e) {
                  _.forEach(function (t) {
                    return e.delete(t);
                  });
                })
              : e;
          var r = p(e, "image_asset_fbid"),
            l =
              r == null
                ? null
                : (t = a == null ? void 0 : a.get(r)) != null
                  ? t
                  : o.get(r);
          return l == null || i.has(l.duplicate_site_link_url)
            ? e
            : e.withMutations(function (e) {
                for (var t of Object.entries(l)) {
                  var n = t[0],
                    r = t[1];
                  r != null && e.set(n, r);
                }
              });
        });
      return l.equals(t) ? t : l;
    }
    function h(e) {
      return (
        e != null &&
        (r("adsCFAdgroupIsNewID")(e) ||
          r("AdsAdgroupDraftFragmentStore").isNew(e))
      );
    }
    function y(e, t, n) {
      return e == null || t == null || t === "" || !h(n) || !r("gkx")("29224")
        ? null
        : s.load().then(
            function (r) {
              var o;
              return (o = r.fetchWebsiteHighlightsImagePaths(e, t, n)) != null
                ? o
                : { imageAssetFBIDs: null, outcome: "failed" };
            },
            function () {
              return { imageAssetFBIDs: null, outcome: "failed" };
            },
          );
    }
    function C(t, r) {
      return r == null || t.isEmpty()
        ? (e || (e = n("Promise"))).resolve(t)
        : s.load().then(
            function (e) {
              return e.removeFetchedWebsiteHighlightsDuplicates(t, r);
            },
            function () {
              return t;
            },
          );
    }
    ((l.rememberDuplicateSiteLinks = m),
      (l.markWebsiteHighlightsDuplicates = g),
      (l.fetchWebsiteHighlightsImagePaths = y),
      (l.removeFetchedWebsiteHighlightsDuplicates = C));
  },
  98,
);
