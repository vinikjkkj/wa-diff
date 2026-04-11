__d(
  "WAWebWebpParseWebp",
  ["WALogger", "WATypedArraysEqual", "WAWebGetWebpMetadata", "WAWebWebp"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 3,
      u = 5e3;
    function c(e) {
      if (e === 0) return 0;
      var t = Math.min(Math.floor(u / e), s);
      return Math.max(t, 1) * e;
    }
    var d = 44,
      m = 20,
      p = 3,
      _ = 4,
      f = {
        animationDuration: 0,
        singleLoopDuration: 0,
        emojis: [],
        isFirstParty: !1,
        isFromStickerMaker: !1,
        stickerPackId: null,
        stickerPackName: null,
        stickerPackPublisher: null,
        isAvatar: !1,
        isAiSticker: !1,
        stickerMakerSourceType: null,
        accessibilityLabel: null,
      };
    function g(t) {
      var n = new Uint8Array(t);
      if (!o("WAWebWebp").isExtendedFile(n))
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Sticker file not extended format.",
              ])),
          ),
          f
        );
      var a = o("WAWebGetWebpMetadata").getWebpMetadata(t),
        i = a.accessibilityLabel,
        l = a.emojis,
        s = a.isAiSticker,
        u = a.isAvatar,
        g = a.isFirstParty,
        h = a.isFromStickerMaker,
        y = a.stickerMakerSourceType,
        C = a.stickerPackId,
        b = a.stickerPackName,
        v = a.stickerPackPublisher,
        S = babelHelpers.extends({}, f, {
          emojis: l,
          isFirstParty: g,
          isFromStickerMaker: h,
          stickerPackId: C,
          stickerPackName: b,
          stickerPackPublisher: v,
          isAvatar: u,
          isAiSticker: s,
          stickerMakerSourceType: y,
          accessibilityLabel: i,
        });
      if (!o("WAWebWebp").isAnimatedWebp(n)) return S;
      for (
        var R = 0, L = d, E;
        r("WATypedArraysEqual")(
          n.slice(L, L + _),
          o("WAWebWebp").stringToUint8(o("WAWebWebp").Chunk.ANMF),
        );
      ) {
        var k = L + m,
          I = n.slice(k, k + p);
        if (I.length !== p) return S;
        R += o("WAWebWebp").littleEndianToNumber(I);
        var T = L + _,
          D = n.slice(T, T + _);
        if (D.length !== _) return S;
        ((L += _ * 2 + o("WAWebWebp").littleEndianToNumber(D)),
          E == null && (E = L));
      }
      var x = c(R);
      return babelHelpers.extends({}, S, {
        animationDuration: x,
        firstFrameLength: E,
        singleLoopDuration: R,
      });
    }
    ((l.MAX_LOOPS = s), (l.getTotalAnimationDuration = c), (l.parseWebp = g));
  },
  98,
);
