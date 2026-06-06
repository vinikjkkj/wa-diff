__d(
  "WAWebStickerUtils",
  [
    "$InternalEnum",
    "WABase64UrlSafe",
    "WACryptoSha256",
    "WALogger",
    "WAPromiseProps",
    "WAWebABProps",
    "WAWebAuraGating",
    "WAWebFeatureDetectionDetectWebpSupport",
    "WAWebInMemoryLottieStickerCache",
    "WAWebMediaDataUtils",
    "WAWebMediaMmsV4Download",
    "WAWebStickerMetadataParsing",
    "WAWebStickerMimeUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = "metadata",
      g = "customProps",
      h = 512,
      y = 512,
      C = "196",
      b =
        "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEM5mGNNmQ2U6CxBER9IwHd9qtcshk9JKsRv9Ljq6/yPW9v35AKwmAiocRH2YWMjnacj4luB3xp6h+4XxoML/KXQ==";
    function v(e) {
      var t = (4 - (e.length % 4)) % 4;
      return e + "=".repeat(t);
    }
    function S(e) {
      return v(o("WABase64UrlSafe").urlSafeBase64(e));
    }
    function R(e, t) {
      var n = S(e),
        r = S(t);
      return n === r;
    }
    async function L(e, t) {
      var n = o("WABase64UrlSafe").urlSafeBase64ToStandard(e),
        r = v(n),
        a = o("WABase64UrlSafe").getBytesFromBase64(r),
        i = new TextEncoder().encode(t).buffer,
        l = o("WABase64UrlSafe").getBytesFromBase64(b),
        s = await crypto.subtle.importKey(
          "spki",
          l,
          { name: "ECDSA", namedCurve: "P-256" },
          !1,
          ["verify"],
        ),
        u = await crypto.subtle.verify(
          { name: "ECDSA", hash: { name: "SHA-256" } },
          s,
          a,
          i,
        );
      return u;
    }
    var E = n("$InternalEnum").Mirrored(["WEBP", "LOTTIE"]);
    function k(e) {
      return o("WAWebStickerMimeUtils").WhatsAppLottieStickerMimeType === e
        ? E.LOTTIE
        : E.WEBP;
    }
    function I(t) {
      if (t == null)
        return o("WAWebStickerMetadataParsing").DEFAULT_STICKER_METADATA;
      try {
        var n,
          r,
          a = (n = (r = t[f]) == null ? void 0 : r[g]) != null ? n : {};
        return o("WAWebStickerMetadataParsing").toStickerMetadata(a);
      } catch (t) {
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "extractMetaDataFromLottieSticker: Failed to parse metadata out of lottie sticker, returning default metadata.",
              ])),
          ),
          o("WAWebStickerMetadataParsing").DEFAULT_STICKER_METADATA
        );
      }
    }
    async function T(e, t) {
      if (k(e.type) === E.LOTTIE) {
        var n = t.filehash;
        if (n != null) {
          await o(
            "WAWebInMemoryLottieStickerCache",
          ).extractAndSetBothLottieJSONInMemoryCache(n, e);
          var r = o(
              "WAWebInMemoryLottieStickerCache",
            ).InMemoryLottieStickerCache.get(n),
            a = I(r);
          return Promise.resolve(
            babelHelpers.extends({}, a, {
              size: e.size,
              fullWidth: h,
              fullHeight: y,
            }),
          );
        }
      }
      return o("WAWebFeatureDetectionDetectWebpSupport")
        .detectWebpSupport()
        .then(function (t) {
          return t
            ? o("WAPromiseProps")
                .promiseProps({
                  widthHeight: o(
                    "WAWebMediaDataUtils",
                  ).getImageWidthHeightNoOpaque(e),
                  webpData: o("WAWebMediaDataUtils").parseWebpNoOpaque(e),
                })
                .then(function (t) {
                  return {
                    fullWidth: t.widthHeight.width,
                    fullHeight: t.widthHeight.height,
                    animationDuration: t.webpData.animationDuration,
                    firstFrameLength: t.webpData.firstFrameLength,
                    singleLoopDuration: t.webpData.singleLoopDuration,
                    emojis: t.webpData.emojis,
                    isAnimated: t.webpData.animationDuration > 0,
                    size: e.size,
                    isFirstParty: t.webpData.isFirstParty,
                    isFromStickerMaker: t.webpData.isFromStickerMaker,
                    stickerPackId: t.webpData.stickerPackId,
                    stickerPackName: t.webpData.stickerPackName,
                    stickerPackPublisher: t.webpData.stickerPackPublisher,
                    isAvatar: t.webpData.isAvatar,
                    isAiSticker: t.webpData.isAiSticker,
                    stickerMakerSourceType: t.webpData.stickerMakerSourceType,
                    accessibilityLabel: t.webpData.accessibilityLabel,
                  };
                })
            : o("WAWebMediaDataUtils")
                .parseWebpNoOpaque(e)
                .then(async function (t) {
                  var n = t.accessibilityLabel,
                    r = t.animationDuration,
                    a = t.emojis,
                    i = t.firstFrameLength,
                    l = t.isAiSticker,
                    s = t.isAvatar,
                    u = t.isFirstParty,
                    c = t.isFromStickerMaker,
                    d = t.singleLoopDuration,
                    m = t.stickerMakerSourceType,
                    p = t.stickerPackId,
                    _ = t.stickerPackName,
                    f = t.stickerPackPublisher;
                  if (r > 0)
                    return {
                      animationDuration: r,
                      firstFrameLength: i,
                      singleLoopDuration: d,
                      emojis: a,
                      isAnimated: !0,
                      size: e.size,
                      isFirstParty: u,
                      isFromStickerMaker: c,
                      stickerPackId: p,
                      stickerPackName: _,
                      stickerPackPublisher: f,
                      isAvatar: s,
                      isAiSticker: l,
                      stickerMakerSourceType: m,
                      accessibilityLabel: n,
                    };
                  var g = await o(
                    "WAWebMediaDataUtils",
                  ).decodeWebpToRGBANoOpaque(e);
                  return {
                    animationDuration: r,
                    rgbaBuffer: g.rgbaBuffer,
                    rgbaWidth: g.width,
                    rgbaHeight: g.height,
                    emojis: a,
                    isAnimated: !1,
                    size: e.size,
                    isFirstParty: u,
                    isFromStickerMaker: c,
                    stickerPackId: p,
                    stickerPackName: _,
                    stickerPackPublisher: f,
                    isAvatar: s,
                    isAiSticker: l,
                    stickerMakerSourceType: m,
                    accessibilityLabel: n,
                  };
                });
        });
    }
    function D(e) {
      return e.replaceAll(/\s+/g, "");
    }
    async function x(e, t) {
      var n = new Blob([e], {
          type: o("WAWebStickerMimeUtils").WhatsAppLottieStickerMimeType,
        }),
        a = await o("WAWebMediaMmsV4Download").extractBothLottieJSON(n, t),
        i = a.primary;
      if (i == null)
        throw r("err")("Failed to extract lottie json from zipped sticker");
      var l = await $(i);
      return l;
    }
    async function $(e) {
      var t = F(e, f),
        n = await P(t);
      return n;
    }
    async function P(e) {
      var t = new TextEncoder(),
        n = t.encode(e).buffer,
        r = await o("WACryptoSha256").sha256Base64(n);
      return r;
    }
    async function N(e, t, n) {
      var r = o("WAWebABProps").getABPropConfigValue(
        "enable_sticker_verification_for_gimmick",
      );
      if (!r) return !0;
      var a = Object.keys(e).find(function (e) {
        return n.test(e);
      });
      return a == null ? !1 : A(e[a], t);
    }
    var M = async function (t, n) {
        return N(t, n, /animation\/animation.json.trust_token$/);
      },
      w = async function (t, n) {
        return N(t, n, /animation\/animation_secondary.json.trust_token$/);
      };
    async function A(e, t) {
      try {
        var n = new TextDecoder("utf-8"),
          r = n.decode(e),
          a = r.split(".");
        if (a.length !== 3)
          return (
            o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to verify Lottie trust token JWT: invalid number of parts",
                ])),
            ),
            !1
          );
        var i = a[1],
          l = o("WABase64UrlSafe").urlSafeBase64ToStandard(i),
          f = JSON.parse(atob(l)),
          g =
            (f == null ? void 0 : f.sticker_file_type) === "lottie_json" &&
            (f == null ? void 0 : f.sticker_file_trusted_origin) === "whatsapp";
        if (!g)
          return (
            o("WALogger").ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to verify Lottie trust token JWT: payload is invalid",
                ])),
            ),
            !1
          );
        var h = f == null ? void 0 : f.sticker_file_sha256;
        if (!h)
          return (
            o("WALogger").ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to verify Lottie trust token JWT: sticker_file_sha256 is missing",
                ])),
            ),
            !1
          );
        var y = await P(t);
        if (!R(y, h))
          return (
            o("WALogger").ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to verify Lottie trust token JWT: file hash does not match",
                ])),
            ),
            !1
          );
        var b = a[0],
          v = o("WABase64UrlSafe").urlSafeBase64ToStandard(b),
          S = JSON.parse(atob(v));
        if ((S == null ? void 0 : S.kid) !== C)
          return (
            o("WALogger").ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to verify Lottie trust token JWT: invalid kid in header",
                ])),
            ),
            !1
          );
        var E = a[2],
          k = b + "." + i,
          I = await L(E, k);
        return I
          ? !0
          : (o("WALogger").ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to verify Lottie trust token JWT: invalid signature",
                ])),
            ),
            !1);
      } catch (e) {
        return (
          o("WALogger").ERROR(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to verify Lottie trust token JWT ",
                "",
              ])),
            e,
          ),
          !1
        );
      }
    }
    function F(e, t) {
      var n = D(e);
      try {
        var o = JSON.parse(n);
        return (delete o[t], JSON.stringify(o));
      } catch (e) {
        throw r("err")(
          "removeKeyFromString: Failed to parse lottie json " + String(e),
        );
      }
    }
    var O = 25;
    function B(e) {
      var t = {};
      return (
        r("WAWebAuraGating").isStickersEnabled() &&
          ((t.premium = "1"),
          (t.rank = e >= O ? "1" : "0"),
          o("WAWebABProps").getABPropConfigValue(
            "sticker_store_testing_enabled",
          ) && (t.test = "1")),
        t
      );
    }
    function W() {
      var e = {},
        t = o("WAWebABProps").getABPropConfigValue(
          "gimmick_phase_two_data_suffix",
        ),
        n = new URLSearchParams(t);
      return (
        n.forEach(function (t, n) {
          e[n] = t;
        }),
        e
      );
    }
    ((l.METADATA_OBJECT = f),
      (l.LOTTIE_STICKER_FULL_WIDTH = h),
      (l.LOTTIE_STICKER_FULL_HEIGHT = y),
      (l.StickerFileType = E),
      (l.getStickerFileType = k),
      (l.extractMetaDataFromLottieSticker = I),
      (l.parseStickerMetadata = T),
      (l.removeSpacesAndEmptyLines = D),
      (l.getLottieStickerFilehashFromZippedStickerBuffer = x),
      (l.calculateLottieStickerFilehashWithoutMetadata = $),
      (l.calculateLottieStickerFilehash = P),
      (l.isLottieStickerFirstParty = M),
      (l.isSecondaryLottieStickerFirstParty = w),
      (l.removeKeyFromString = F),
      (l.getPremiumParams = B),
      (l.getStickerFetchParamsFromABConfig = W));
  },
  98,
);
