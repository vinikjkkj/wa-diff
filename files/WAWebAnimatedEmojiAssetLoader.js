__d(
  "WAWebAnimatedEmojiAssetLoader",
  [
    "WAConcurrentPriorityPromiseQueue",
    "WALogger",
    "WAWebABProps",
    "WAWebEmojiConst",
    "WAWebMediaHostsUtil",
    "WAWebPonyfillsFetch",
    "WAWebURLUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = "/wa/static/network_resource",
      m = "nw_media";
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          ((u = u != null ? u : new Map()), (c = c != null ? c : new Map()));
          var t = new (r("WAConcurrentPriorityPromiseQueue"))(5, { emojis: 5 }),
            a = yield o("WAWebMediaHostsUtil").getStaticMediaHostName(),
            i = "" + a + d;
          o("WAWebEmojiConst")
            .getSupportedAnimatedEmojisAssetIdsMapping(e)
            .forEach(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var n = e[0],
                      a = e[1];
                    try {
                      var l = r("WAWebURLUtils").build(i, {
                          cat: m,
                          id: a,
                          _nc_cat: 1,
                        }),
                        d = yield t.enqueue(
                          function () {
                            return r("WAWebPonyfillsFetch")(l);
                          },
                          { group: "emojis", priority: 1 },
                        );
                      if (
                        o("WAWebABProps").getABPropConfigValue(
                          "animated_emoji_use_lazy_parsing",
                        )
                      ) {
                        var p,
                          _ = yield d.text();
                        (p = c) == null || p.set(n, _);
                      } else {
                        var f,
                          g = yield d.json();
                        (f = u) == null || f.set(n, g);
                      }
                    } catch (e) {
                      o("WALogger").LOG(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "initAnimatedEmojiAssets: fetch failed",
                          ])),
                      );
                    }
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            );
        })),
        _.apply(this, arguments)
      );
    }
    function f(t) {
      var n,
        r,
        a = (n = u) == null ? void 0 : n.get(t);
      if (a != null) return a;
      var i = (r = c) == null ? void 0 : r.get(t);
      if (i != null)
        try {
          var l,
            s,
            d = JSON.parse(i);
          return (
            (l = u) == null || l.set(t, d),
            (s = c) == null || s.delete(t),
            d
          );
        } catch (t) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "initAnimatedEmojiAssets: parse failed",
              ])),
          );
        }
    }
    ((l.initAnimatedEmojiAssets = p), (l.getAnimatedEmojiAsset = f));
  },
  98,
);
