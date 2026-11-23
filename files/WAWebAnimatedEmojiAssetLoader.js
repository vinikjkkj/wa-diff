__d(
  "WAWebAnimatedEmojiAssetLoader",
  [
    "WAConcurrentPriorityPromiseQueue",
    "WALogger",
    "WAWebEmojiConst",
    "WAWebMediaHostsUtil",
    "WAWebPonyfillsFetch",
    "WAWebURLUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = "/wa/static/network_resource",
      m = "nw_media";
    async function p(t) {
      ((u = u != null ? u : new Map()), (c = c != null ? c : new Map()));
      var n = new (r("WAConcurrentPriorityPromiseQueue"))(5, { emojis: 5 }),
        a = await o("WAWebMediaHostsUtil").getStaticMediaHostName(),
        i = "" + a + d;
      o("WAWebEmojiConst")
        .getSupportedAnimatedEmojisAssetIdsMapping(t)
        .forEach(async function (t) {
          var a = t[0],
            l = t[1];
          try {
            var s,
              u = r("WAWebURLUtils").build(i, { cat: m, id: l, _nc_cat: 1 }),
              d = await n.enqueue(
                function () {
                  return r("WAWebPonyfillsFetch")(u);
                },
                { group: "emojis", priority: 1 },
              ),
              p = await d.text();
            (s = c) == null || s.set(a, p);
          } catch (t) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "initAnimatedEmojiAssets: fetch failed",
                ])),
            );
          }
        });
    }
    function _(e) {
      var t,
        n,
        r = (t = u) == null ? void 0 : t.get(e);
      if (r != null) return r;
      var a = (n = c) == null ? void 0 : n.get(e);
      if (a != null)
        try {
          var i,
            l,
            d = JSON.parse(a);
          return (
            (i = u) == null || i.set(e, d),
            (l = c) == null || l.delete(e),
            d
          );
        } catch (e) {
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "initAnimatedEmojiAssets: parse failed",
              ])),
          );
        }
    }
    ((l.initAnimatedEmojiAssets = p), (l.getAnimatedEmojiAsset = _));
  },
  98,
);
