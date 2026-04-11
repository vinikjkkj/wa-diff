__d(
  "WAWebEmojiAssetLoaderCompletionTracker",
  ["WALogger", "WAWebAssetLoaderSingleton", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (s || (s = o("react"))).createContext,
      c = 1e3,
      d = 5e3,
      m = function () {
        var t = this;
        ((this.$1 = 0),
          (this.$2 = !1),
          (this.$3 = !1),
          (this.beginPreload = function (e) {
            (e === void 0 && (e = !1),
              !t.$2 &&
                ((t.$2 = !0),
                self.setTimeout(
                  function () {
                    o("WAWebAssetLoaderSingleton").AssetLoader.loadEmojis();
                  },
                  e ? c : 0,
                )));
          }),
          (this.beginPreloadFallback = function () {
            self.setTimeout(function () {
              t.beginPreload(!1);
            }, d);
          }),
          (this.incrementLoadingEmojisCount = function () {
            t.$2 ||
              (t.$3 || ((t.$3 = !0), (t.$4 = self.performance.now())),
              (t.$1 += 1));
          }),
          (this.decrementLoadingEmojisCount = function () {
            t.$2 ||
              ((t.$1 -= 1),
              t.$1 === 0 &&
                t.$3 &&
                (t.beginPreload(!0),
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "EmojiCompletionTracker:firstScreenEmojis complete in ",
                      " ms",
                    ])),
                  Math.ceil(self.performance.now() - t.$4),
                )));
          }),
          (this.resetPreloadState = function () {
            ((t.$2 = !1), (t.$3 = !1), (t.$1 = 0));
          }));
      },
      p = new m(),
      _ = u(p);
    ((l.EmojiCompletionTracker = m),
      (l.emojiCompletionTracker = p),
      (l.InitialEmojisCompletionContext = _));
  },
  98,
);
