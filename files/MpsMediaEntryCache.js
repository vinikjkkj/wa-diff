__d(
  "MpsMediaEntryCache",
  [
    "MpsErrors",
    "MpsMessageToBridgeWrapper",
    "WADirectPath",
    "WAHashUtils",
    "WALongInt",
    "WAMediaUtils",
    "WAProgressiveJpegGetScanLengths",
    "WATimeUtils",
    "WmiE2EEPlatform",
    "WmiErrorReport",
    "classifyProtobufDecodeError",
    "getMediaTypeFromConsumerMessage",
    "justknobx",
    "nullthrows",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map();
    function s(t) {
      var n,
        r,
        a = e.get(t.plaintextHash);
      if (
        ((n = t.mediaKeyTimestamp) != null ? n : 0) >=
        ((r = a == null ? void 0 : a.mediaKeyTimestamp) != null ? r : 0)
      ) {
        var i,
          l = babelHelpers.extends({}, t, {
            e2eePlatform:
              (i = t.e2eePlatform) != null
                ? i
                : o("WmiE2EEPlatform").getE2EEPlatformFromMessageId(
                    t.message.messageId,
                  ),
          });
        return (e.set(t.plaintextHash, l), l);
      }
    }
    function u(e) {
      try {
        var t = o(
          "MpsMessageToBridgeWrapper",
        ).MpsMessageToBridgeWrapper.fromTopLevel(e);
        return [d(t), _(t)].concat(p(t)).filter(Boolean);
      } catch (e) {
        var n = r("classifyProtobufDecodeError")(e, "hydrate_media_cache");
        if (o("MpsErrors").MpsErrors.codeOf(n) === "protobuf_malformed")
          return (o("WmiErrorReport").reportWmiError(n), []);
        throw n;
      }
    }
    function c(e) {
      var t, n;
      return (
        (e == null || (t = e.integral) == null ? void 0 : t.receiverFetchId) !=
          null ||
        (e == null || (n = e.ancillary) == null ? void 0 : n.receiverFetchId) !=
          null
      );
    }
    function d(e) {
      var t,
        n = e.deserialize(),
        r =
          (t = n.encryptedTransportMessage()) == null
            ? void 0
            : t.consumerMessage();
      if (r != null) return m(e, r);
    }
    function m(e, t) {
      var n,
        r,
        a = (n = t.attachmentMessage()) == null ? void 0 : n.payload;
      if (
        !(a == null || c((r = t.stickerMessage()) == null ? void 0 : r.payload))
      ) {
        var i = o(
          "getMediaTypeFromConsumerMessage",
        ).getMediaTypeFromConsumerMessage(t.proto);
        return f(a, i, e);
      }
    }
    function p(e) {
      var t,
        n,
        r =
          (t = e.deserialize().encryptedTransportMessage()) == null
            ? void 0
            : t.armadillo(),
        o = r == null ? void 0 : r.extendedContentMessage();
      if (o == null || r == null) return [];
      var a = "xma-image",
        i = o.previews().map(function (t) {
          return f(t, a, e);
        }),
        l = o.headerImage();
      l != null && i.push(f(l, a, e));
      var s = o.favicon();
      s != null && i.push(f(s, a, e));
      var u =
        (n = o.associatedMessage()) == null ? void 0 : n.consumerMessage();
      return (u != null && i.push(m(e, u)), i.filter(Boolean));
    }
    function _(e) {
      var t,
        n =
          (t = e.deserialize().encryptedTransportMessage()) == null
            ? void 0
            : t.armadillo(),
        a = n == null ? void 0 : n.noteReply(),
        i = a == null ? void 0 : a.stickerContent(),
        l = a == null ? void 0 : a.videoContent(),
        s = i != null ? i : l;
      if (!(s == null || c(i))) {
        var u =
            l != null
              ? o("getMediaTypeFromConsumerMessage").getMediaTypeForVideo(l)
              : void 0,
          d = i != null ? "sticker" : void 0,
          m = r("nullthrows")(u != null ? u : d);
        return f(s, m, e);
      }
    }
    function f(e, t, n) {
      var a,
        i,
        l,
        u,
        c,
        d,
        m,
        p,
        _,
        f,
        g,
        h,
        y,
        C = e.ancillary,
        b = e.integral,
        v = r("justknobx")._("4340"),
        S = !v && C == null;
      if (b == null || S) {
        var R = Object.entries({ ancillary: C, integral: b })
          .filter(function (e) {
            var t = e[0],
              n = e[1];
            return n == null;
          })
          .map(function (e) {
            var t = e[0];
            return t;
          })
          .join(", ");
        o("WmiErrorReport").reportWmiError(
          o("MpsErrors").MpsErrors.error(
            "payload_incomplete",
            "media entry missing %s, type %s",
            R,
            t,
          ),
        );
        return;
      }
      var L = o("WADirectPath").validateDirectPath(
          (a = b.transport) == null || (a = a.integral) == null
            ? void 0
            : a.directPath,
        ).value,
        E =
          (i = b.transport) == null || (i = i.integral) == null
            ? void 0
            : i.mediaKeyTimestamp,
        k = E != null ? o("WATimeUtils").castLongIntToUnixTime(E) : void 0,
        I =
          (l = b.transport) == null || (l = l.integral) == null
            ? void 0
            : l.fileSha256,
        T = I != null ? o("WAHashUtils").toPlaintextHash(I) : void 0;
      if (L == null || I == null || T == null || t == null) {
        var D = Object.entries({
          directPath: L,
          fileSha256: I,
          mediaType: t,
          plaintextHash: T,
        })
          .filter(function (e) {
            var t = e[0],
              n = e[1];
            return n == null;
          })
          .map(function (e) {
            var t = e[0];
            return t;
          })
          .join(", ");
        o("WmiErrorReport").reportWmiError(
          o("MpsErrors").MpsErrors.error(
            "payload_incomplete",
            "media entry fields %s, type %s",
            D,
            t,
          ),
        );
        return;
      }
      var x = null,
        $ = C == null ? void 0 : C.scanLengths,
        P = C == null ? void 0 : C.scansSidecar;
      P != null &&
        $ != null &&
        (x = {
          scanLengths: $.map(
            o("WAProgressiveJpegGetScanLengths").asProgressiveJpegScanLength,
          ),
          sidecar: P,
        });
      var N = void 0,
        M =
          (u = b.transport) == null ||
          (u = u.ancillary) == null ||
          (u = u.thumbnail) == null
            ? void 0
            : u.downloadableThumbnail;
      if (M != null) {
        var w;
        N = {
          directPath: o("WADirectPath").validateDirectPath(M.directPath).value,
          fileEncSha256: M.fileEncSha256,
          fileSha256: M.fileSha256,
          mediaKey:
            M.mediaKey == null
              ? void 0
              : o("WAMediaUtils").castToMediaKey(M.mediaKey),
          mediaKeyTimestamp: o("WATimeUtils").castLongIntToUnixTime(
            (w = M.mediaKeyTimestamp) != null ? w : 0,
          ),
          objectId:
            M.objectId == null
              ? void 0
              : o("WAMediaUtils").stringToDeliveryObjectId(M.objectId),
        };
      }
      var A = {
          directPath: L,
          downloadableThumbnail: N,
          fileEncSha256:
            (c = b.transport) == null || (c = c.integral) == null
              ? void 0
              : c.fileEncSha256,
          filename: null,
          fileSha256: I,
          mediaKey:
            ((d = b.transport) == null || (d = d.integral) == null
              ? void 0
              : d.mediaKey) == null
              ? void 0
              : o("WAMediaUtils").castToMediaKey(
                  (m = b.transport) == null || (m = m.integral) == null
                    ? void 0
                    : m.mediaKey,
                ),
          mediaKeyTimestamp: k,
          objectId:
            (b == null || (p = b.transport) == null || (p = p.ancillary) == null
              ? void 0
              : p.objectId) == null
              ? void 0
              : o("WAMediaUtils").stringToDeliveryObjectId(
                  b == null ||
                    (_ = b.transport) == null ||
                    (_ = _.ancillary) == null
                    ? void 0
                    : _.objectId,
                ),
          progressiveJpegDetails: x,
          serverMediaType: t,
          size: o("WALongInt").numberOrThrowIfTooLarge(
            (f =
              b == null ||
              (g = b.transport) == null ||
              (g = g.ancillary) == null
                ? void 0
                : g.fileLength) != null
              ? f
              : 0,
          ),
          uploadToken: void 0,
        },
        F = o("WAMediaUtils").encodeMediaEntryWithUpdatedPath(A, L);
      return s({
        decodedMediaEntry: A,
        e2eePlatform: o("WmiE2EEPlatform").getE2EEPlatformFromMessageId(
          n.message.messageId,
        ),
        mediaEntry: F,
        mediaKeyTimestamp: k,
        message: {
          messageId: n.message.messageId,
          threadId: n.message.threadId,
        },
        plaintextHash: T,
        serverMediaType: t,
        thumbnailHash:
          ((h = N) == null ? void 0 : h.fileSha256) != null
            ? o("WAHashUtils").toPlaintextHash(
                (y = N) == null ? void 0 : y.fileSha256,
              )
            : void 0,
      });
    }
    function g(t) {
      return e.get(t);
    }
    function h() {
      (r("vulture")("MT1Msm1hoBCtT3aVbFhJTmMQ7yk="), e.clear());
    }
    ((l.storeEntry = s),
      (l.hydrateCache = u),
      (l.getEntry = g),
      (l.clear__TEST_ONLY = h));
  },
  98,
);
