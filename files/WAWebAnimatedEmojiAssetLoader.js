__d(
  "WAWebAnimatedEmojiAssetLoader",
  [
    "WAConcurrentPriorityPromiseQueue",
    "WALogger",
    "WAWebEmojiConst",
    "WAWebMediaHostsUtil",
    "WAWebPonyfillsFetch",
    "WAWebURLUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = "/wa/static/network_resource",
      c = "nw_media";
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          s = s != null ? s : new Map();
          var a = new (r("WAConcurrentPriorityPromiseQueue"))(5, { emojis: 5 }),
            i = yield o("WAWebMediaHostsUtil").getStaticMediaHostName(),
            l = "" + i + u;
          o("WAWebEmojiConst")
            .getSupportedAnimatedEmojisAssetIdsMapping(t)
            .forEach(
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    var n = t[0],
                      i = t[1];
                    try {
                      var u,
                        d = r("WAWebURLUtils").build(l, {
                          cat: c,
                          id: i,
                          _nc_cat: 1,
                        }),
                        m = yield a.enqueue(
                          function () {
                            return r("WAWebPonyfillsFetch")(d);
                          },
                          { group: "emojis", priority: 1 },
                        ),
                        p = yield m.json();
                      (u = s) == null || u.set(n, p);
                    } catch (t) {
                      o("WALogger").LOG(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "initAnimatedEmojiAssets: fetch failed",
                          ])),
                      );
                    }
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      var t;
      return (t = s) == null ? void 0 : t.get(e);
    }
    ((l.initAnimatedEmojiAssets = d), (l.getAnimatedEmojiAsset = p));
  },
  98,
);
