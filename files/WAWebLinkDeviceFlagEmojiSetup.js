__d(
  "WAWebLinkDeviceFlagEmojiSetup",
  [
    "Promise",
    "WAWebAssetLoaderSingleton",
    "WAWebEmojiConst",
    "WAWebMobilePlatforms",
    "asyncToGeneratorRuntime",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s = r("requireDeferred"))("WAWebEmojiJsonWaEmojiCategory").__setRef(
        "WAWebLinkDeviceFlagEmojiSetup",
      ),
      c = s("WAWebEmojiJsonWaEmojiUnicode").__setRef(
        "WAWebLinkDeviceFlagEmojiSetup",
      ),
      d = s("WAWebEmojiSetup").__setRef("WAWebLinkDeviceFlagEmojiSetup"),
      m = s("WAWebFlagEmojiAssetLoader").__setRef(
        "WAWebLinkDeviceFlagEmojiSetup",
      );
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield (e || (e = n("Promise"))).all([
              m.load(),
              d.load(),
              c.load(),
              u.load(),
            ]),
            r = t[0],
            a = t[1],
            i = t[2],
            l = t[3],
            s = r.flagEmojiAssetMapCreator,
            p = { orderedEmojis: i, categorizedEmojis: l, selector: "wa" };
          (o("WAWebAssetLoaderSingleton").AssetLoader.setPlatform(
            o("WAWebMobilePlatforms").PLATFORMS.ANDROID,
          ),
            o("WAWebAssetLoaderSingleton").AssetLoader.initEmojiAsset(s(p)),
            a(o("WAWebEmojiConst").EMOJI_TYPE.WHATSAPP));
        })),
        _.apply(this, arguments)
      );
    }
    l.default = p;
  },
  98,
);
