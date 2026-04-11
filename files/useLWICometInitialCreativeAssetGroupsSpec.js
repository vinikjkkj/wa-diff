__d(
  "useLWICometInitialCreativeAssetGroupsSpec",
  [
    "AdsAPICreativeAssetGroupsSpecOrigin",
    "AdsAPICreativeAssetImageSource",
    "AdsAPICreativeAssetTextTypeSpecFields",
    "RelayHooks",
    "VideoThumbnailSource",
    "enumUtils",
    "getJSEnumSafe",
    "react",
    "react-compiler-runtime",
    "useLWICometInitialCreativeAssetGroupsSpec_BoostedComponentSpec.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s || (s = o("react"))).useMemo,
      c =
        e !== void 0
          ? e
          : (e = n(
              "useLWICometInitialCreativeAssetGroupsSpec_BoostedComponentSpec.graphql",
            ));
    function d(e) {
      var t = o("react-compiler-runtime").c(2),
        n = o("RelayHooks").useFragment(c, e),
        r = n == null ? void 0 : n.adgroup_spec,
        a;
      e: {
        if (r == null) {
          a = null;
          break e;
        }
        var i;
        (t[0] !== r ? ((i = r.map(m)), (t[0] = r), (t[1] = i)) : (i = t[1]),
          (a = i));
      }
      return a;
    }
    function m(e) {
      var t = e.creative_asset_groups_spec;
      if (t == null || t.origins == null) return null;
      var n = t.origins.map(h).filter(Boolean);
      if (n.length !== 1) return null;
      var r = n[0];
      if (r !== "flexible_format" && r !== "gen_ai") return null;
      var o = { groups: t.groups.map(p), origins: n };
      return o;
    }
    function p(e) {
      var t = e.images,
        n = e.texts,
        r = e.videos;
      return { images: t.map(g), texts: n.map(f), videos: r.map(_) };
    }
    function _(e) {
      var t = { video_id: e.video_id };
      (e.image_hash != null && (t.image_hash = e.image_hash),
        e.image_url != null && (t.image_url = e.image_url),
        e.thumbnail_id != null && (t.thumbnail_id = e.thumbnail_id));
      var n = r("getJSEnumSafe")(r("AdsAPICreativeAssetImageSource"), e.source);
      n != null && (t.source = n);
      var a = o("enumUtils").coerceNullable(
        e.thumbnail_source,
        r("VideoThumbnailSource"),
      );
      return (a != null && (t.thumbnail_source = a), t);
    }
    function f(e) {
      return {
        text: e.text,
        text_type: r("getJSEnumSafe")(
          r("AdsAPICreativeAssetTextTypeSpecFields"),
          e.text_type,
        ),
      };
    }
    function g(e) {
      return {
        hash: e.hash,
        source: r("getJSEnumSafe")(
          r("AdsAPICreativeAssetImageSource"),
          e.source,
        ),
        url: e.url,
      };
    }
    function h(e) {
      return r("getJSEnumSafe")(r("AdsAPICreativeAssetGroupsSpecOrigin"), e);
    }
    l.default = d;
  },
  98,
);
