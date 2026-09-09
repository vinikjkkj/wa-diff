__d(
  "getWAWebBizAdCreationCreativeMediaReducer",
  [
    "FBLogger",
    "WAWebBizAdCreationCreativeMediaProjection",
    "getWAWebBizAdCreationCreativeCarouselReducer",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      e: {
        var o = n;
        if (
          ((typeof o == "object" && o !== null) || typeof o == "function") &&
          o.type === "creative_media_reducer.set_creative_media" &&
          "items" in o
        ) {
          var a = o.items;
          return u(t, a);
        }
        if (
          ((typeof o == "object" && o !== null) || typeof o == "function") &&
          o.type === "creative_media_reducer.reorder_creative_media" &&
          "fromIndex" in o &&
          "toIndex" in o
        ) {
          var i,
            l = o.fromIndex,
            s = o.toIndex,
            c = [].concat((i = t.creativeMedia) != null ? i : []);
          if (l < 0 || l >= c.length || s < 0 || s >= c.length)
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
                s,
                c.length,
              ),
              [t]
            );
          var d = c.splice(l, 1),
            m = d[0];
          return (c.splice(s, 0, m), u(t, c));
          break e;
        }
        if (
          ((typeof o == "object" && o !== null) || typeof o == "function") &&
          o.type === "creative_media_reducer.remove_creative_media" &&
          "key" in o
        ) {
          var p,
            _ = o.key;
          return u(
            t,
            ((p = t.creativeMedia) != null ? p : []).filter(function (e) {
              return e.key !== _;
            }),
          );
        }
        return [t];
      }
    }
    function u(e, t) {
      var n = babelHelpers.extends({}, e, { creativeMedia: t });
      return r("getWAWebBizAdCreationCreativeCarouselReducer")(n, {
        carouselCardsData: o(
          "WAWebBizAdCreationCreativeMediaProjection",
        ).creativeMediaItemsToCarouselCardsData(t),
        type: "creative_carousel_reducer.set_carousel_cards",
      });
    }
    l.default = s;
  },
  98,
);
