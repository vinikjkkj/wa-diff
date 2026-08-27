__d(
  "LWICometEntryPointUtils",
  ["AdsLWIEntryPoint", "FBLogger", "firstKeyWithValue"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("firstKeyWithValue")(r("AdsLWIEntryPoint"), e);
      if (t == null)
        throw r("FBLogger")("pages_lwi").mustfixThrow(
          "entryPoint should be a valid AdsLWIEntryPoint",
        );
      return t;
    }
    function s(e, t) {
      var n = String(e),
        o = Object.values(r("AdsLWIEntryPoint"))
          .concat(Object.keys(r("AdsLWIEntryPoint")))
          .find(function (e) {
            return e === n;
          });
      if (o == null)
        return (
          r("FBLogger")("pages_lwi").info(
            "unknown entry point " + n + ", fallback to " + t,
          ),
          t
        );
      var a = n;
      return a;
    }
    function u(e) {
      return e === "bizweb_home_boost_post";
    }
    function c(e) {
      return e === "www_page_ig_link_boost_upsell";
    }
    ((l.jsEnumToGraphQLEnum = e),
      (l.convertEntryPointParamToJSEnumWithFallback = s),
      (l.isMBSHomeBoostPostEntryPoint = u),
      (l.isPageIGLinkingEntryPoint = c));
  },
  98,
);
