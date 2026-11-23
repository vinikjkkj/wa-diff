__d(
  "WAWebLinkDeviceFlagEmojiSetup",
  [
    "WAWebAssetLoaderSingleton",
    "WAWebEmojiConst",
    "WAWebMobilePlatforms",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = r("requireDeferred"))("WAWebEmojiJsonWaEmojiCategory").__setRef(
        "WAWebLinkDeviceFlagEmojiSetup",
      ),
      u = e("WAWebEmojiJsonWaEmojiUnicode").__setRef(
        "WAWebLinkDeviceFlagEmojiSetup",
      ),
      c = e("WAWebEmojiSetup").__setRef("WAWebLinkDeviceFlagEmojiSetup"),
      d = e("WAWebFlagEmojiAssetLoader").__setRef(
        "WAWebLinkDeviceFlagEmojiSetup",
      );
    async function m() {
      var e = await Promise.all([d.load(), c.load(), u.load(), s.load()]),
        t = e[0],
        n = e[1],
        r = e[2],
        a = e[3],
        i = t.flagEmojiAssetMapCreator,
        l = { orderedEmojis: r, categorizedEmojis: a, selector: "wa" };
      (o("WAWebAssetLoaderSingleton").AssetLoader.setPlatform(
        o("WAWebMobilePlatforms").PLATFORMS.ANDROID,
      ),
        o("WAWebAssetLoaderSingleton").AssetLoader.initEmojiAsset(i(l)),
        n(o("WAWebEmojiConst").EMOJI_TYPE.WHATSAPP));
    }
    l.default = m;
  },
  98,
);
