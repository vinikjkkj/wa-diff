__d(
  "WAWebStickerUtils",
  [
    "$InternalEnum",
    "Promise",
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
    "asyncToGeneratorRuntime",
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
      f,
      g = "metadata",
      h = "customProps",
      y = 512,
      C = 512,
      b = "196",
      v =
        "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEM5mGNNmQ2U6CxBER9IwHd9qtcshk9JKsRv9Ljq6/yPW9v35AKwmAiocRH2YWMjnacj4luB3xp6h+4XxoML/KXQ==";
    function S(e) {
      var t = (4 - (e.length % 4)) % 4;
      return e + "=".repeat(t);
    }
    function R(e) {
      return S(o("WABase64UrlSafe").urlSafeBase64(e));
    }
    function L(e, t) {
      var n = R(e),
        r = R(t);
      return n === r;
    }
    function E(e, t) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WABase64UrlSafe").urlSafeBase64ToStandard(e),
            r = S(n),
            a = o("WABase64UrlSafe").getBytesFromBase64(r),
            i = new TextEncoder().encode(t).buffer,
            l = o("WABase64UrlSafe").getBytesFromBase64(v),
            s = yield crypto.subtle.importKey(
              "spki",
              l,
              { name: "ECDSA", namedCurve: "P-256" },
              !1,
              ["verify"],
            ),
            u = yield crypto.subtle.verify(
              { name: "ECDSA", hash: { name: "SHA-256" } },
              s,
              a,
              i,
            );
          return u;
        })),
        k.apply(this, arguments)
      );
    }
    var I = n("$InternalEnum").Mirrored(["WEBP", "LOTTIE"]);
    function T(e) {
      return o("WAWebStickerMimeUtils").WhatsAppLottieStickerMimeType === e
        ? I.LOTTIE
        : I.WEBP;
    }
    function D(t) {
      if (t == null)
        return o("WAWebStickerMetadataParsing").DEFAULT_STICKER_METADATA;
      try {
        var n,
          r,
          a = (n = (r = t[g]) == null ? void 0 : r[h]) != null ? n : {};
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
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (T(e.type) === I.LOTTIE) {
            var r = t.filehash;
            if (r != null) {
              yield o(
                "WAWebInMemoryLottieStickerCache",
              ).extractAndSetBothLottieJSONInMemoryCache(r, e);
              var a = o(
                  "WAWebInMemoryLottieStickerCache",
                ).InMemoryLottieStickerCache.get(r),
                i = D(a);
              return (f || (f = n("Promise"))).resolve(
                babelHelpers.extends({}, i, {
                  size: e.size,
                  fullWidth: y,
                  fullHeight: C,
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
                        stickerMakerSourceType:
                          t.webpData.stickerMakerSourceType,
                        accessibilityLabel: t.webpData.accessibilityLabel,
                      };
                    })
                : o("WAWebMediaDataUtils")
                    .parseWebpNoOpaque(e)
                    .then(
                      (function () {
                        var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (t) {
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
                            var g = yield o(
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
                          },
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })(),
                    );
            });
        })),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return e.replaceAll(/\s+/g, "");
    }
    function N(e, t) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new Blob([e], {
              type: o("WAWebStickerMimeUtils").WhatsAppLottieStickerMimeType,
            }),
            a = yield o("WAWebMediaMmsV4Download").extractBothLottieJSON(n, t),
            i = a.primary;
          if (i == null)
            throw r("err")("Failed to extract lottie json from zipped sticker");
          var l = yield w(i);
          return l;
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = G(e, g),
            n = yield F(t);
          return n;
        })),
        A.apply(this, arguments)
      );
    }
    function F(e) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new TextEncoder(),
            n = t.encode(e).buffer,
            r = yield o("WACryptoSha256").sha256Base64(n);
          return r;
        })),
        O.apply(this, arguments)
      );
    }
    function B(e, t, n) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = o("WAWebABProps").getABPropConfigValue(
            "enable_sticker_verification_for_gimmick",
          );
          if (!r) return !0;
          var a = Object.keys(e).find(function (e) {
            return n.test(e);
          });
          return a == null ? !1 : V(e[a], t);
        })),
        W.apply(this, arguments)
      );
    }
    var q = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return B(e, t, /animation\/animation.json.trust_token$/);
        });
        return function (n, r) {
          return e.apply(this, arguments);
        };
      })(),
      U = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return B(e, t, /animation\/animation_secondary.json.trust_token$/);
        });
        return function (n, r) {
          return e.apply(this, arguments);
        };
      })();
    function V(e, t) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                (f == null ? void 0 : f.sticker_file_trusted_origin) ===
                  "whatsapp";
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
            var y = yield F(t);
            if (!L(y, h))
              return (
                o("WALogger").ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to verify Lottie trust token JWT: file hash does not match",
                    ])),
                ),
                !1
              );
            var C = a[0],
              v = o("WABase64UrlSafe").urlSafeBase64ToStandard(C),
              S = JSON.parse(atob(v));
            if ((S == null ? void 0 : S.kid) !== b)
              return (
                o("WALogger").ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to verify Lottie trust token JWT: invalid kid in header",
                    ])),
                ),
                !1
              );
            var R = a[2],
              k = C + "." + i,
              I = yield E(R, k);
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
        })),
        H.apply(this, arguments)
      );
    }
    function G(e, t) {
      var n = P(e);
      try {
        var o = JSON.parse(n);
        return (delete o[t], JSON.stringify(o));
      } catch (e) {
        throw r("err")(
          "removeKeyFromString: Failed to parse lottie json " + String(e),
        );
      }
    }
    var z = 25;
    function j(e) {
      var t = {};
      return (
        r("WAWebAuraGating").isStickersEnabled() &&
          ((t.premium = "1"),
          (t.rank = e >= z ? "1" : "0"),
          o("WAWebABProps").getABPropConfigValue(
            "sticker_store_testing_enabled",
          ) && (t.test = "1")),
        t
      );
    }
    function K() {
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
    ((l.METADATA_OBJECT = g),
      (l.LOTTIE_STICKER_FULL_WIDTH = y),
      (l.LOTTIE_STICKER_FULL_HEIGHT = C),
      (l.StickerFileType = I),
      (l.getStickerFileType = T),
      (l.extractMetaDataFromLottieSticker = D),
      (l.parseStickerMetadata = x),
      (l.removeSpacesAndEmptyLines = P),
      (l.getLottieStickerFilehashFromZippedStickerBuffer = N),
      (l.calculateLottieStickerFilehashWithoutMetadata = w),
      (l.calculateLottieStickerFilehash = F),
      (l.isLottieStickerFirstParty = q),
      (l.isSecondaryLottieStickerFirstParty = U),
      (l.removeKeyFromString = G),
      (l.getPremiumParams = j),
      (l.getStickerFetchParamsFromABConfig = K));
  },
  98,
);
