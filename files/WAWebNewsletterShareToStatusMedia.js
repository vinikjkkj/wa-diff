__d(
  "WAWebNewsletterShareToStatusMedia",
  [
    "WALogger",
    "WAWebDownloadVideoThumbnail",
    "WAWebLottieStickerFirstFrame",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaOpaqueData",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterShareToStatusCardVideo",
    "WAWebNewsletterShareToStatusEligibility",
    "WAWebNewsletterStatusCardRenderer",
    "WAWebProtobufsStatusAttributions.pb",
    "WAWebStickerUtils",
    "WAWebTextStatusImageRenderer",
    "WAWebWamEnumWebcRmrReasonCode",
    "getErrorSafe",
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
      f = 3e3,
      g = "channel-update.jpg",
      h = "channel-update-card.jpg",
      y = "image/jpeg",
      C = "channel-update.mp4",
      b = "channel-update-card.mp4",
      v = "video/mp4";
    async function S(e, t) {
      if (e.type === o("WAWebMsgType").MSG_TYPE.ALBUM) {
        var n = await P(e, t);
        return n != null ? k(e, null, t, n) : null;
      }
      var r = o(
          "WAWebNewsletterShareToStatusEligibility",
        ).hasNewsletterUpdateMedia(e),
        a = r ? await F(e, t) : null;
      if (r && a == null) return null;
      if (
        !o(
          "WAWebNewsletterShareToStatusEligibility",
        ).canShareNewsletterMsgAsPlainStatus(e)
      )
        return k(e, a, t);
      if (!o("WAWebNewsletterGatingUtils").isChannelsPostStatusCardEnabled())
        return E(e, a);
      var i = await k(e, a, t);
      if (i != null) return i;
      var l = await E(e, a);
      return (l != null && t.logCardFallback(), l);
    }
    function R(e) {
      return M(e) || e.type === o("WAWebMsgType").MSG_TYPE.PTT;
    }
    function L(e) {
      var t;
      return [
        {
          type: o("WAWebProtobufsStatusAttributions.pb").StatusAttribution$Type
            .RESHARE,
          statusReshare: {
            source: o("WAWebProtobufsStatusAttributions.pb")
              .StatusAttribution$StatusReshare$Source.CHANNEL_RESHARE,
            metadata: {
              channelJid:
                e == null || (t = e.newsletterId) == null
                  ? void 0
                  : t.toString(),
              channelMessageId: e == null ? void 0 : e.serverMessageId,
            },
          },
        },
      ];
    }
    async function E(e, t) {
      var n;
      return t != null
        ? !M(e) || o("WAWebNewsletterShareToStatusCardVideo").fitsStatusVideo(e)
          ? x(e, t)
          : null
        : o("WAWebNewsletterShareToStatusEligibility").fitsTextStatus(
              (n = e.body) != null ? n : "",
            )
          ? $(e)
          : null;
    }
    async function k(e, t, n, r) {
      if ((r === void 0 && (r = null), M(e) && t != null)) return I(e, t, n);
      if (e.type === o("WAWebMsgType").MSG_TYPE.PTT && t != null)
        return T(e, t, n);
      var a = await D(e, t, n, r);
      return a != null
        ? {
            attachment: q(a.blob, h, y),
            cardTapAreas: a.interactiveAnnotations,
          }
        : null;
    }
    async function I(t, n, a) {
      var i = await w(t).catch(function (t) {
          return (
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter-share-to-status] could not load the preview of the channel update's video",
                  ])),
              )
              .catching(r("getErrorSafe")(t)),
            null
          );
        }),
        l = i != null ? await D(t, i, a) : null,
        s = l == null ? void 0 : l.video;
      if (l == null || s == null) return null;
      var u = await o(
        "WAWebNewsletterShareToStatusCardVideo",
      ).encodeShareToStatusCardVideo(s, n, a);
      return u != null
        ? { attachment: q(u, b, v), cardTapAreas: l.interactiveAnnotations }
        : null;
    }
    async function T(e, t, n) {
      var r = await D(e, null, n),
        a = r == null ? void 0 : r.voice;
      if (r == null || a == null) return null;
      var i = await o(
        "WAWebNewsletterShareToStatusCardVideo",
      ).encodeShareToStatusCardAudio(a, t, n);
      return i != null
        ? { attachment: q(i, b, v), cardTapAreas: r.interactiveAnnotations }
        : null;
    }
    async function D(e, t, n, a) {
      (a === void 0 && (a = null), n.addPoint("card_render_start"));
      try {
        var i = await r("WAWebNewsletterStatusCardRenderer")(e, t, a);
        return (n.addPoint("card_render_end"), i);
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter-share-to-status] could not draw the channel update as a status card",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("newsletter-share-to-status-card-failed"),
          n.addPoint("card_render_fail"),
          null
        );
      }
    }
    function x(e, t) {
      var n,
        r = M(e),
        o =
          t.type ||
          ((n = e.mediaData) == null ? void 0 : n.mimetype) ||
          (r ? v : y);
      return { attachment: q(t, r ? C : g, o), cardTapAreas: null };
    }
    async function $(e) {
      try {
        var t = await o("WAWebTextStatusImageRenderer").renderTextStatusToBlob(
          e,
          { fontLoadTimeoutMs: f },
        );
        return { attachment: q(t, g, y), cardTapAreas: null };
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter-share-to-status] could not render the channel text update as an image",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("newsletter-share-to-status-render-failed"),
          null
        );
      }
    }
    async function P(e, t) {
      t.addPoint("media_download_start");
      var n = o(
          "WAWebNewsletterShareToStatusEligibility",
        ).getNewsletterAlbumMedia(e),
        r = await Promise.all(
          n
            .slice(
              0,
              o("WAWebNewsletterShareToStatusEligibility")
                .NEWSLETTER_STATUS_CARD_ALBUM_MAX_ITEMS,
            )
            .map(function (e) {
              return N(e);
            }),
        );
      return r.some(Boolean)
        ? (t.addPoint("media_download_end"), { media: n, tileBlobs: r })
        : (o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter-share-to-status] could not download any of the channel album's media",
                ])),
            )
            .sendLogs("newsletter-share-to-status-album-download-failed"),
          t.addPoint("media_download_fail"),
          null);
    }
    async function N(e) {
      if (
        !o(
          "WAWebNewsletterShareToStatusEligibility",
        ).canDrawNewsletterAlbumItem(e)
      )
        return null;
      try {
        return e.type === o("WAWebMsgType").MSG_TYPE.VIDEO
          ? await w(e)
          : (await A(e), U(e));
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter-share-to-status] drawing the album card without an item whose media could not be downloaded",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          null
        );
      }
    }
    function M(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.VIDEO ||
        e.type === o("WAWebMsgType").MSG_TYPE.PTV
      );
    }
    async function w(e) {
      var t,
        n,
        a,
        i = e.safe();
      ((i.type === o("WAWebMsgType").MSG_TYPE.VIDEO && i.isGif !== !0) ||
        i.type === o("WAWebMsgType").MSG_TYPE.PTV) &&
        (await o("WAWebDownloadVideoThumbnail").downloadVideoThumbnail({
          msg: i,
        }));
      var l =
        (t = (n = e.mediaData) == null ? void 0 : n.fullPreviewData) != null
          ? t
          : (a = e.mediaData) == null
            ? void 0
            : a.preview;
      return typeof l == "string"
        ? (
            await r("WAWebMediaOpaqueData").createFromBase64Preview(l)
          ).forceToBlob()
        : l == null
          ? void 0
          : l.forceToBlob();
    }
    async function A(e) {
      var t;
      ((t = e.mediaData) == null ? void 0 : t.mediaBlob) == null &&
        (await e.downloadMedia({
          downloadEvenIfExpensive: !0,
          rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
            .SEND_TO_CHAT,
          isUserInitiated: !0,
        }));
    }
    async function F(e, t) {
      var n = await W(e, t);
      return n != null && B(e) ? O(e, n) : n;
    }
    async function O(e, t) {
      try {
        return await r("WAWebLottieStickerFirstFrame")(e, t);
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter-share-to-status] could not draw the first frame of the channel update's animated sticker",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("newsletter-share-to-status-sticker-frame-failed"),
          null
        );
      }
    }
    function B(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.STICKER &&
        o("WAWebStickerUtils").getStickerFileType(e.mimetype) ===
          o("WAWebStickerUtils").StickerFileType.LOTTIE
      );
    }
    async function W(e, t) {
      t.addPoint("media_download_start");
      try {
        await A(e);
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter-share-to-status] could not download the channel update media",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("newsletter-share-to-status-download-failed"),
          t.addPoint("media_download_fail"),
          null
        );
      }
      var n;
      try {
        n = U(e);
      } catch (e) {
        throw (t.addPoint("media_download_fail"), e);
      }
      return n == null
        ? (o("WALogger")
            .ERROR(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter-share-to-status] channel update media missing after download",
                ])),
            )
            .sendLogs("newsletter-share-to-status-no-media"),
          t.addPoint("media_download_fail"),
          null)
        : (t.addPoint("media_download_end"), n);
    }
    function q(e, t, n) {
      return { file: new File([e], t, { type: n }), filename: t, mimetype: n };
    }
    function U(e) {
      var t,
        n,
        a = (t = e.mediaData) == null ? void 0 : t.mediaBlob;
      if (a instanceof r("WAWebMediaOpaqueData")) return a.forceToBlob();
      if (a instanceof Blob) return a;
      var i = (n = e.mediaData) == null ? void 0 : n.filehash;
      return i != null
        ? o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(i)
        : null;
    }
    ((l.loadStatusShare = S),
      (l.makesCardVideo = R),
      (l.getChannelAttributions = L));
  },
  98,
);
