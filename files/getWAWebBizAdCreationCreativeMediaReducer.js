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
          return d(t, a);
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
            m = [].concat((i = t.creativeMedia) != null ? i : []);
          if (l < 0 || l >= m.length || u < 0 || u >= m.length)
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
                m.length,
              ),
              [t]
            );
          var p = m.splice(l, 1),
            _ = p[0];
          return (m.splice(u, 0, _), d(t, m));
          break e;
        }
        if (
          ((typeof o == "object" && o !== null) || typeof o == "function") &&
          o.type === "creative_media_reducer.substitute_creative_media_keys" &&
          "keysByReplaced" in o
        ) {
          var f = o.keysByReplaced,
            g = c(t.creativeMedia, f);
          return g == null ? [t] : d(t, g);
        }
        if (
          ((typeof o == "object" && o !== null) || typeof o == "function") &&
          o.type === "creative_media_reducer.remove_creative_media" &&
          "key" in o
        ) {
          var h = o.key,
            y = t.creativeMedia;
          if (y == null || y.length === 0) return [t];
          var C = y.filter(function (e) {
            return e.key !== h;
          });
          return C.length === y.length
            ? (r("FBLogger")("wa_ctwa_web").MUSTFIX(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Creative media removal matched no key in the store: ",
                    " (store holds ",
                    ")",
                  ])),
                h,
                y.length,
              ),
              [t])
            : d(t, C);
        }
        return [t];
      }
    }
    function c(e, t) {
      if (e == null || e.length === 0) return null;
      var n = new Set(
          e.map(function (e) {
            return e.key;
          }),
        ),
        r = !1,
        o = e.map(function (e) {
          var o = t.get(e.key);
          return o == null || n.has(o)
            ? e
            : ((r = !0), babelHelpers.extends({}, e, { key: o }));
        });
      return r ? o : null;
    }
    function d(e, t) {
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
