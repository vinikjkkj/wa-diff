__d(
  "AdsAssetFeedAssetUtils",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e != null ? e.trim() : e;
    }
    function s(e) {
      var t;
      return r("immutable").fromJS(
        ((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.images) || [],
      );
    }
    function u(e) {
      var t;
      return r("immutable").fromJS(
        ((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.videos) || [],
      );
    }
    function c(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.bodies;
      return n
        ? n.filter(function (e) {
            var t = e.get("text");
            return typeof t == "string" && t.trim();
          })
        : r("immutable").List();
    }
    function d(e) {
      var t;
      return r("immutable").fromJS(
        ((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.bodies) || [],
      );
    }
    function m(e) {
      var t;
      return r("immutable").fromJS(
        ((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.descriptions) || [],
      );
    }
    function p(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.bodies;
      return n != null
        ? n.reduce(function (e, t, n) {
            return e.set(n, r("immutable").fromJS(t));
          }, r("immutable").List())
        : r("immutable").List();
    }
    function _(e) {
      var t;
      return r("immutable").fromJS(
        ((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.titles) || [],
      );
    }
    function f(e) {
      var t;
      return r("immutable").fromJS(
        ((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.link_urls) || [],
      );
    }
    function g(e) {
      var t;
      return r("immutable").fromJS(
        ((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.images) || [],
      );
    }
    function h(t) {
      var n,
        o = r("immutable").fromJS(
          ((n = t.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.titles) || [],
        );
      return o.filter(function (t) {
        return e(t.get("text"));
      });
    }
    function y(e) {
      var t;
      return r("immutable").fromJS(
        ((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.call_to_action_types) || [],
      );
    }
    function C(t) {
      var n,
        o = r("immutable").fromJS(
          ((n = t.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.descriptions) || [],
        );
      return o.filter(function (t) {
        return e(t.get("text"));
      });
    }
    ((l.getImages = s),
      (l.getVideos = u),
      (l.getText = c),
      (l.getMessagesFromAdgroup = d),
      (l.getDescriptionsFromAdgroup = m),
      (l.getTextFromAdgroup = p),
      (l.getHeadlinesFromAdgroup = _),
      (l.getWebsiteURLsFromAdgroup = f),
      (l.getImagesFromAdgroup = g),
      (l.getHeadline = h),
      (l.getCallToAction = y),
      (l.getNewsFeedLinkDescription = C));
  },
  98,
);
