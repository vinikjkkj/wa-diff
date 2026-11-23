__d(
  "WAParseMediaTransportProtocol",
  [
    "WAHashUtils",
    "WALogger",
    "WALongInt",
    "WAMedia",
    "WAMediaHdType",
    "WAMediaTransport.pb",
    "WAMediaUtils",
    "WAMsgMap",
    "WAParseConsumerMessageProtocol",
    "WAProgressiveJpegGetScanLengths",
    "WATimeUtils",
    "decodeProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(t, n, r, a) {
      var i, l, c, d, m, p, _, f, g, h, y, C, b, v;
      if (!((i = t.integral) != null && i.transport)) return null;
      var S = (l = t.integral) == null ? void 0 : l.transport;
      if (o("decodeProtobuf").getUnknownFields(S.integral) != null)
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "There is unknown fileds in integral of VideoTransport",
              ])),
          ),
          null
        );
      var R = (c = S.integral) == null ? void 0 : c.fileSha256;
      if (!R)
        return (
          r ||
            o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "protobuf msg with no plaintext hash",
                ])),
            ),
          null
        );
      var L = null;
      if (
        ((d = t.ancillary) == null ? void 0 : d.scansSidecar) != null &&
        ((m = t.ancillary) == null ? void 0 : m.scanLengths) != null
      ) {
        var E, k;
        L = {
          sidecar: (E = t.ancillary) == null ? void 0 : E.scansSidecar,
          scanLengths:
            (k = t.ancillary) == null || (k = k.scanLengths) == null
              ? void 0
              : k.map(
                  o("WAProgressiveJpegGetScanLengths")
                    .asProgressiveJpegScanLength,
                ),
        };
      }
      if (
        ((p = S.integral) == null ? void 0 : p.fileSha256) == null ||
        ((_ = S.integral) == null ? void 0 : _.fileEncSha256) == null ||
        ((f = S.integral) == null ? void 0 : f.mediaKey) == null ||
        ((g = S.integral) == null ? void 0 : g.directPath) == null ||
        ((h = S.integral) == null ? void 0 : h.mediaKeyTimestamp) == null ||
        ((y = S.ancillary) == null ? void 0 : y.objectId) == null
      )
        return (
          o("WALogger").ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "cannot compose mediaEntry with the media message",
              ])),
          ),
          null
        );
      var I = (C = S.ancillary) == null ? void 0 : C.fileLength,
        T =
          (b = S.ancillary.thumbnail) == null
            ? void 0
            : b.downloadableThumbnail,
        D = o("WAMediaUtils").rawDataToMediaEntry({
          fileSha256: S.integral.fileSha256,
          fileEncSha256: S.integral.fileEncSha256,
          mediaKey: S.integral.mediaKey,
          directPath: S.integral.directPath,
          mediaKeyTimestamp: o("WATimeUtils").castLongIntToUnixTime(
            S.integral.mediaKeyTimestamp,
          ),
          serverMediaType: n,
          objectId: (v = S.ancillary) == null ? void 0 : v.objectId,
          fbid: void 0,
          downloadableThumbnail: {
            directPath: T == null ? void 0 : T.directPath,
            fileEncSha256: T == null ? void 0 : T.fileEncSha256,
            fileSha256: T == null ? void 0 : T.fileSha256,
            mediaKey: T == null ? void 0 : T.mediaKey,
            mediaKeyTimestamp:
              (T == null ? void 0 : T.mediaKeyTimestamp) == null
                ? null
                : o("WATimeUtils").castLongIntToUnixTime(
                    T == null ? void 0 : T.mediaKeyTimestamp,
                  ),
            objectId: T == null ? void 0 : T.objectId,
          },
          filename: a,
          progressiveJpegDetails: L,
          size: I == null ? I : o("WALongInt").numberOrThrowIfTooLarge(I),
        });
      return {
        size:
          I == null
            ? o("WAParseConsumerMessageProtocol").DEFAULT_FILE_SIZE
            : o("WALongInt").numberOrThrowIfTooLarge(I),
        plaintextHash: o("WAHashUtils").toPlaintextHash(new Uint8Array(R)),
        mediaEntry: D,
      };
    }
    function d(e) {
      switch (e) {
        case o("WAMediaTransport.pb").IMAGE_TRANSPORT_ANCILLARY_HD_TYPE.NONE:
          return o("WAMediaHdType").HD_TYPE_NONE;
        case o("WAMediaTransport.pb").IMAGE_TRANSPORT_ANCILLARY_HD_TYPE.LQ_4K:
          return o("WAMediaHdType").HD_TYPE_LQ_4K;
        case o("WAMediaTransport.pb").IMAGE_TRANSPORT_ANCILLARY_HD_TYPE.HQ_4K:
          return o("WAMediaHdType").HD_TYPE_HQ_4K;
        default:
          return o("WAMediaHdType").HD_TYPE_NONE;
      }
    }
    function m(e, t, n) {
      var r,
        a,
        i,
        l,
        s,
        u,
        m = c(e, n, !1);
      if (!m) return null;
      var p = C(m, t),
        _ = (r = e.ancillary) == null ? void 0 : r.width,
        f = (a = e.ancillary) == null ? void 0 : a.height;
      e.ancillary != null &&
        (e.ancillary.width != null &&
          e.ancillary.width === 4294967295 &&
          (_ = void 0),
        e.ancillary.height != null &&
          e.ancillary.height === 4294967295 &&
          (f = void 0));
      var g = babelHelpers.extends({}, p, {
        mediaType: o("WAMedia").MEDIA_TYPE.IMAGE,
        validatedVideoInfo: null,
        validatedImageInfo: {
          width: _,
          height: f,
          jpegThumbnail:
            (i = e.integral) == null ||
            (i = i.transport) == null ||
            (i = i.ancillary) == null ||
            (i = i.thumbnail) == null
              ? void 0
              : i.jpegThumbnail,
          jpegThumbnailHeight:
            (l = e.integral) == null ||
            (l = l.transport) == null ||
            (l = l.ancillary) == null ||
            (l = l.thumbnail) == null
              ? void 0
              : l.thumbnailHeight,
          jpegThumbnailWidth:
            (s = e.integral) == null ||
            (s = s.transport) == null ||
            (s = s.ancillary) == null ||
            (s = s.thumbnail) == null
              ? void 0
              : s.thumbnailWidth,
          hdType: d((u = e.ancillary) == null ? void 0 : u.hdType),
        },
        validatedAudioInfo: null,
        validatedDocumentFileInfo: null,
      });
      return g;
    }
    function p(e, t, n) {
      var a = o("decodeProtobuf").decodeProtobufWithUnknowns(
          o("WAMediaTransport.pb").ImageTransportSpec,
          e,
        ),
        i = m(a, t, n);
      if (i == null) throw r("err")("consumerMessage has no image media info");
      return i;
    }
    function _(e, t, n) {
      var r, a, i, l, s, u, d, m, p, _, f, g, h, y, b, v, S;
      if (!((r = e.integral) != null && r.transport)) return null;
      var R = c(e, n ? "gif" : "video", !1);
      if (!R) return null;
      var L = C(R, t),
        E = babelHelpers.extends({}, L, {
          accessibilitySummaryText:
            (a = e.ancillary) == null ? void 0 : a.accessibilityLabel,
          mediaType: n
            ? o("WAMedia").MEDIA_TYPE.GIF
            : o("WAMedia").MEDIA_TYPE.VIDEO,
          validatedVideoInfo: n
            ? null
            : {
                duration:
                  (e == null || (i = e.ancillary) == null
                    ? void 0
                    : i.seconds) != null &&
                  (e == null || (l = e.ancillary) == null
                    ? void 0
                    : l.seconds) >
                    o("WAParseConsumerMessageProtocol").MINIMAL_MEDIA_DURATION
                    ? e == null || (s = e.ancillary) == null
                      ? void 0
                      : s.seconds
                    : o("WAParseConsumerMessageProtocol")
                        .MINIMAL_MEDIA_DURATION,
                width:
                  e == null || (u = e.ancillary) == null ? void 0 : u.width,
                height:
                  e == null || (d = e.ancillary) == null ? void 0 : d.height,
                mimetype:
                  e == null ||
                  (m = e.integral) == null ||
                  (m = m.transport) == null ||
                  (m = m.ancillary) == null
                    ? void 0
                    : m.mimetype,
                jpegThumbnail:
                  (p = e.integral) == null ||
                  (p = p.transport) == null ||
                  (p = p.ancillary) == null ||
                  (p = p.thumbnail) == null
                    ? void 0
                    : p.jpegThumbnail,
                jpegThumbnailHeight:
                  (_ = e.integral) == null ||
                  (_ = _.transport) == null ||
                  (_ = _.ancillary) == null ||
                  (_ = _.thumbnail) == null
                    ? void 0
                    : _.thumbnailHeight,
                jpegThumbnailWidth:
                  (f = e.integral) == null ||
                  (f = f.transport) == null ||
                  (f = f.ancillary) == null ||
                  (f = f.thumbnail) == null
                    ? void 0
                    : f.thumbnailWidth,
                gifPlayback: (g = e.ancillary) == null ? void 0 : g.gifPlayback,
              },
          validatedImageInfo: n
            ? {
                width: (h = e.ancillary) == null ? void 0 : h.width,
                height: (y = e.ancillary) == null ? void 0 : y.height,
                jpegThumbnail:
                  (b = e.integral) == null ||
                  (b = b.transport) == null ||
                  (b = b.ancillary) == null ||
                  (b = b.thumbnail) == null
                    ? void 0
                    : b.jpegThumbnail,
                jpegThumbnailHeight:
                  (v = e.integral) == null ||
                  (v = v.transport) == null ||
                  (v = v.ancillary) == null ||
                  (v = v.thumbnail) == null
                    ? void 0
                    : v.thumbnailHeight,
                jpegThumbnailWidth:
                  (S = e.integral) == null ||
                  (S = S.transport) == null ||
                  (S = S.ancillary) == null ||
                  (S = S.thumbnail) == null
                    ? void 0
                    : S.thumbnailWidth,
              }
            : null,
          validatedAudioInfo: null,
          validatedDocumentFileInfo: null,
        });
      return E;
    }
    function f(e, t, n) {
      var r, a, i, l, s, u;
      if (!((r = e.integral) != null && r.transport)) return null;
      var d = c(e, "ptt", !1);
      if (!d) return null;
      var m = C(d, n),
        p = babelHelpers.extends({}, m, {
          mediaType: o("WAMedia").MEDIA_TYPE.PTT,
          validatedVideoInfo: null,
          validatedImageInfo: null,
          validatedDocumentFileInfo: null,
          validatedAudioInfo: {
            duration:
              (e == null || (a = e.ancillary) == null ? void 0 : a.seconds) !=
                null &&
              (e == null || (i = e.ancillary) == null ? void 0 : i.seconds) >
                o("WAParseConsumerMessageProtocol").MINIMAL_MEDIA_DURATION
                ? e == null || (l = e.ancillary) == null
                  ? void 0
                  : l.seconds
                : o("WAParseConsumerMessageProtocol").MINIMAL_MEDIA_DURATION,
            mimetype:
              e == null ||
              (s = e.integral) == null ||
              (s = s.transport) == null ||
              (s = s.ancillary) == null
                ? void 0
                : s.mimetype,
            played: !1,
            waveform:
              e == null || (u = e.ancillary) == null ? void 0 : u.waveform,
          },
        });
      return p;
    }
    function g(e, t) {
      var n, r, a, i, l, s, u, d;
      if (!((n = e.integral) != null && n.transport)) return null;
      var m = ((r = e.integral) == null ? void 0 : r.receiverFetchId) != null,
        p = c(e, "sticker", m);
      if (!p) return null;
      var _ = C(p, t),
        f = babelHelpers.extends({}, _, {
          accessibilitySummaryText:
            (a = e.ancillary) == null ? void 0 : a.accessibilityLabel,
          mediaType: o("WAMedia").MEDIA_TYPE.STICKER,
          validatedVideoInfo: null,
          validatedImageInfo: {
            width: (i = e.ancillary) == null ? void 0 : i.width,
            height: (l = e.ancillary) == null ? void 0 : l.height,
            jpegThumbnail:
              (s = e.integral) == null ||
              (s = s.transport) == null ||
              (s = s.ancillary) == null ||
              (s = s.thumbnail) == null
                ? void 0
                : s.jpegThumbnail,
            jpegThumbnailHeight:
              (u = e.integral) == null ||
              (u = u.transport) == null ||
              (u = u.ancillary) == null ||
              (u = u.thumbnail) == null
                ? void 0
                : u.thumbnailHeight,
            jpegThumbnailWidth:
              (d = e.integral) == null ||
              (d = d.transport) == null ||
              (d = d.ancillary) == null ||
              (d = d.thumbnail) == null
                ? void 0
                : d.thumbnailWidth,
          },
          validatedAudioInfo: null,
          validatedDocumentFileInfo: null,
        });
      return f;
    }
    function h(e) {
      var t, n, r, o, a, i, l;
      if (!((t = e.integral) != null && t.transport)) return null;
      var s = (n = e.ancillary) == null ? void 0 : n.width,
        u = (r = e.ancillary) == null ? void 0 : r.height,
        c =
          (o = (a = e.integral) == null ? void 0 : a.receiverFetchId) != null
            ? o
            : (i = e.ancillary) == null
              ? void 0
              : i.receiverFetchId,
        d =
          e == null ||
          (l = e.integral) == null ||
          (l = l.transport) == null ||
          (l = l.ancillary) == null
            ? void 0
            : l.mimetype;
      if (s == null || u == null || c == null || d == null) return null;
      var m = {
        receiverFetchId: c,
        previewWidth: s,
        previewHeight: u,
        mimetype: d,
        type: "sticker",
      };
      return m;
    }
    function y(e, t, n) {
      var r, a;
      if (!((r = e.integral) != null && r.transport)) return null;
      var i = c(e, "document", !1, t);
      if (!i) return null;
      var l = C(i, n);
      return babelHelpers.extends({}, l, {
        mediaType: o("WAMedia").MEDIA_TYPE.DOCUMENT_FILE,
        validatedVideoInfo: null,
        validatedImageInfo: null,
        validatedAudioInfo: null,
        validatedDocumentFileInfo: {
          mimetype:
            e == null ||
            (a = e.integral) == null ||
            (a = a.transport) == null ||
            (a = a.ancillary) == null
              ? void 0
              : a.mimetype,
          filename: t != null ? t : void 0,
        },
      });
    }
    function C(e, t) {
      return {
        mediaEntry: e.mediaEntry,
        plaintextHash: e.plaintextHash,
        size: e.size,
        msgIds: [],
        mediaEntries: new (o("WAMsgMap").MsgMap)(),
        ts: t,
      };
    }
    ((l.decodeImageTransport = p),
      (l.parseVideoMsg = _),
      (l.parseAudioMsg = f),
      (l.parseStickerMsg = g),
      (l.parseStickerReceiverFetchInfo = h),
      (l.parseDocumentMsg = y));
  },
  98,
);
