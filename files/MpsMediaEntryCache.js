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
    "gkx",
    "justknobx",
    "nullthrows",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 2e3,
      s = new Map(),
      u = null,
      c = !1;
    function d() {
      if (!(s.size <= e) && (u != null || (u = r("gkx")("30009")), !!u))
        for (var t of s.keys()) {
          if (s.size <= e) break;
          (s.delete(t), (c = !0));
        }
    }
    function m(e) {
      var t,
        n,
        r = s.get(e.plaintextHash);
      if (
        ((t = e.mediaKeyTimestamp) != null ? t : 0) >=
        ((n = r == null ? void 0 : r.mediaKeyTimestamp) != null ? n : 0)
      ) {
        var a,
          i = babelHelpers.extends({}, e, {
            e2eePlatform:
              (a = e.e2eePlatform) != null
                ? a
                : o("WmiE2EEPlatform").getE2EEPlatformFromMessageId(
                    e.message.messageId,
                  ),
          });
        return (s.delete(e.plaintextHash), s.set(e.plaintextHash, i), d(), i);
      }
    }
    function p(e) {
      try {
        var t = o(
          "MpsMessageToBridgeWrapper",
        ).MpsMessageToBridgeWrapper.fromTopLevel(e);
        return [f(t), y(t)].concat(h(t)).filter(Boolean);
      } catch (e) {
        var n = r("classifyProtobufDecodeError")(e, "hydrate_media_cache");
        if (o("MpsErrors").MpsErrors.codeOf(n) === "protobuf_malformed")
          return (o("WmiErrorReport").reportWmiError(n), []);
        throw n;
      }
    }
    function _(e) {
      var t, n;
      return (
        (e == null || (t = e.integral) == null ? void 0 : t.receiverFetchId) !=
          null ||
        (e == null || (n = e.ancillary) == null ? void 0 : n.receiverFetchId) !=
          null
      );
    }
    function f(e) {
      var t,
        n = e.deserialize(),
        r =
          (t = n.encryptedTransportMessage()) == null
            ? void 0
            : t.consumerMessage();
      if (r != null) return g(e, r);
    }
    function g(e, t) {
      var n,
        r,
        a = (n = t.attachmentMessage()) == null ? void 0 : n.payload;
      if (
        !(a == null || _((r = t.stickerMessage()) == null ? void 0 : r.payload))
      ) {
        var i = o(
          "getMediaTypeFromConsumerMessage",
        ).getMediaTypeFromConsumerMessage(t.proto);
        return C(a, i, e);
      }
    }
    function h(e) {
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
          return C(t, a, e);
        }),
        l = o.headerImage();
      l != null && i.push(C(l, a, e));
      var s = o.favicon();
      s != null && i.push(C(s, a, e));
      var u =
        (n = o.associatedMessage()) == null ? void 0 : n.consumerMessage();
      return (u != null && i.push(g(e, u)), i.filter(Boolean));
    }
    function y(e) {
      var t,
        n =
          (t = e.deserialize().encryptedTransportMessage()) == null
            ? void 0
            : t.armadillo(),
        a = n == null ? void 0 : n.noteReply(),
        i = a == null ? void 0 : a.stickerContent(),
        l = a == null ? void 0 : a.videoContent(),
        s = i != null ? i : l;
      if (!(s == null || _(i))) {
        var u =
            l != null
              ? o("getMediaTypeFromConsumerMessage").getMediaTypeForVideo(l)
              : void 0,
          c = i != null ? "sticker" : void 0,
          d = r("nullthrows")(u != null ? u : c);
        return C(s, d, e);
      }
    }
    function C(e, t, n) {
      var a,
        i,
        l,
        s,
        u,
        c,
        d,
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
          (s = b.transport) == null ||
          (s = s.ancillary) == null ||
          (s = s.thumbnail) == null
            ? void 0
            : s.downloadableThumbnail;
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
            (u = b.transport) == null || (u = u.integral) == null
              ? void 0
              : u.fileEncSha256,
          filename: null,
          fileSha256: I,
          mediaKey:
            ((c = b.transport) == null || (c = c.integral) == null
              ? void 0
              : c.mediaKey) == null
              ? void 0
              : o("WAMediaUtils").castToMediaKey(
                  (d = b.transport) == null || (d = d.integral) == null
                    ? void 0
                    : d.mediaKey,
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
      return m({
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
    function b(e) {
      var t = s.get(e);
      return (t != null && (s.delete(e), s.set(e, t)), t);
    }
    function v() {
      return c;
    }
    function S() {
      (r("vulture")("MT1Msm1hoBCtT3aVbFhJTmMQ7yk="),
        s.clear(),
        (u = null),
        (c = !1));
    }
    ((l.storeEntry = m),
      (l.hydrateCache = p),
      (l.getEntry = b),
      (l.hasEvicted = v),
      (l.clear__TEST_ONLY = S));
  },
  98,
);
