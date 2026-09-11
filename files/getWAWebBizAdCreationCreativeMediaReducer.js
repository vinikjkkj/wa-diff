__d(
  "getWAWebBizAdCreationCreativeMediaReducer",
  [
    "FBLogger",
    "WAWebBizAdCreationCreativeMediaProjection",
    "getWAWebBizAdCreationCreativeCarouselReducer",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t, n) {
      e: {
        var o = n;
        if (
          ((typeof o == "object" && o !== null) || typeof o == "function") &&
          o.type === "creative_media_reducer.set_creative_media" &&
          "items" in o
        ) {
          var a = o.items;
          return c(t, a);
        }
        if (
          ((typeof o == "object" && o !== null) || typeof o == "function") &&
          o.type === "creative_media_reducer.reorder_creative_media" &&
          "fromIndex" in o &&
          "toIndex" in o
        ) {
          var i,
            l = o.fromIndex,
            u = o.toIndex,
            d = [].concat((i = t.creativeMedia) != null ? i : []);
          if (l < 0 || l >= d.length || u < 0 || u >= d.length)
            return (
              r("FBLogger")("wa_ctwa_web").MUSTFIX(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Creative media reorder index out of range: ",
                    " -> ",
                    " of ",
                    "",
                  ])),
                l,
                u,
                d.length,
              ),
              [t]
            );
          var m = d.splice(l, 1),
            p = m[0];
          return (d.splice(u, 0, p), c(t, d));
          break e;
        }
        if (
          ((typeof o == "object" && o !== null) || typeof o == "function") &&
          o.type === "creative_media_reducer.remove_creative_media" &&
          "key" in o
        ) {
          var _ = o.key,
            f = t.creativeMedia;
          if (f == null || f.length === 0) return [t];
          var g = f.filter(function (e) {
            return e.key !== _;
          });
          return g.length === f.length
            ? (r("FBLogger")("wa_ctwa_web").MUSTFIX(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Creative media removal matched no key in the store: ",
                    " (store holds ",
                    ")",
                  ])),
                _,
                f.length,
              ),
              [t])
            : c(t, g);
        }
        return [t];
      }
    }
    function c(e, t) {
      var n = babelHelpers.extends({}, e, { creativeMedia: t });
      return r("getWAWebBizAdCreationCreativeCarouselReducer")(n, {
        carouselCardsData: o(
          "WAWebBizAdCreationCreativeMediaProjection",
        ).creativeMediaItemsToCarouselCardsData(t),
        type: "creative_carousel_reducer.set_carousel_cards",
      });
    }
    l.default = u;
  },
  98,
);
