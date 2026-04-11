__d(
  "WAWebStickerMetadataParsing",
  ["WAWebStickerPremiumStatus", "WAWebWebpMetadata"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        isFirstParty: !1,
        isFromStickerMaker: !1,
        emojis: [],
        stickerPackId: null,
        stickerPackName: null,
        stickerPackPublisher: null,
        stickerPackPlayStoreLink: null,
        stickerPackAppleStoreLink: null,
        isAvatar: !1,
        stickerPremiumStatus: o("WAWebStickerPremiumStatus")
          .StickerPremiumStatus.NONE,
        isAiSticker: !1,
        stickerMakerSourceType: null,
        accessibilityLabel: null,
      },
      s = {
        isFirstParty: "is-first-party-sticker",
        isFromStickerMaker: "is-from-sticker-maker",
        emojis: "emojis",
        stickerPackId: "sticker-pack-id",
        stickerPackName: "sticker-pack-name",
        stickerPackPublisher: "sticker-pack-publisher",
        stickerPackPlayStoreLink: "android-app-store-link",
        stickerPackAppleStoreLink: "ios-app-store-link",
        isAvatar: "is-avatar-sticker",
        stickerPremiumStatus: "premium",
        isAiSticker: "is-ai-sticker",
        stickerMakerSourceType: "sticker-maker-source-type",
        accessibilityLabel: "accessibility-text",
      };
    function u(t) {
      var n = t[s.isFirstParty],
        r = t[s.isFromStickerMaker],
        a = t[s.emojis],
        i = t[s.stickerPackId],
        l = t[s.stickerPackName],
        u = t[s.stickerPackPublisher],
        c = t[s.stickerPackPlayStoreLink],
        d = t[s.stickerPackAppleStoreLink],
        m = t[s.isAvatar],
        p = t[s.stickerPremiumStatus],
        _ = t[s.isAiSticker],
        f = o("WAWebWebpMetadata").StickerMakerSourceType.cast(
          t[s.stickerMakerSourceType],
        ),
        g = t[s.accessibilityLabel],
        h = babelHelpers.extends({}, e);
      if (n != null) {
        var y = n === 1;
        h.isFirstParty = y;
      }
      if (r != null) {
        var C = r === 1;
        h.isFromStickerMaker = C;
      }
      if (
        (a != null && Array.isArray(a) && (h.emojis = a),
        i != null && (h.stickerPackId = i),
        l != null && (h.stickerPackName = l),
        u != null && (h.stickerPackPublisher = u),
        c != null && (h.stickerPackPlayStoreLink = c),
        d != null && (h.stickerPackAppleStoreLink = d),
        m != null)
      ) {
        var b = m === 1;
        h.isAvatar = b;
      }
      if (p != null) {
        var v;
        h.stickerPremiumStatus =
          (v = o("WAWebStickerPremiumStatus").StickerPremiumStatus.cast(p)) !=
          null
            ? v
            : o("WAWebStickerPremiumStatus").StickerPremiumStatus.NONE;
      }
      if (_ != null) {
        var S = _ === 1;
        h.isAiSticker = S;
      }
      return (
        f != null && (h.stickerMakerSourceType = f),
        g != null && (h.accessibilityLabel = g),
        h
      );
    }
    ((l.DEFAULT_STICKER_METADATA = e),
      (l.STICKER_METADATA_FIELDS = s),
      (l.toStickerMetadata = u));
  },
  98,
);
