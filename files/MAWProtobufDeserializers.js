__d(
  "MAWProtobufDeserializers",
  [
    "MpsErrors",
    "WAArmadilloApplication.pb",
    "WAArmadilloBackupMessage.pb",
    "WAArmadilloLocallyTransformedMessage.pb",
    "WAArmadilloMiTransportAdminMessage.pb",
    "WAArmadilloTransportEvent.pb",
    "WAByteArray",
    "WAConsumerApplication.pb",
    "WAMediaTransport.pb",
    "WAMsgApplication.pb",
    "WAParseMessageApplication",
    "decodeProtobuf",
    "memoize",
    "memoizeWithArgsWeak",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      throw new TypeError('"' + e + '" is read-only');
    }
    function s(e) {
      return e instanceof ArrayBuffer
        ? e
        : o("WAByteArray").uint8ArrayToBuffer(e);
    }
    var u = function (t) {
        var e;
        ((this.kind = "imageTransport"),
          (this.payload = o("decodeProtobuf").decodeProtobuf(
            o("WAMediaTransport.pb").ImageTransportSpec,
            (e = t.image) == null ? void 0 : e.payload,
          )));
      },
      c = function (t) {
        var e;
        ((this.kind = "audioTransport"),
          (this.payload = o("decodeProtobuf").decodeProtobuf(
            o("WAMediaTransport.pb").AudioTransportSpec,
            (e = t.audio) == null ? void 0 : e.payload,
          )),
          (this.ptt = t.ptt));
      },
      d = function (t) {
        var e, n, r;
        ((this.kind = "videoTransport"),
          (this.payload = o("decodeProtobuf").decodeProtobuf(
            o("WAMediaTransport.pb").VideoTransportSpec,
            (e = t.video) == null ? void 0 : e.payload,
          )),
          (this.caption = t.caption),
          (this.gifPlayback =
            (n =
              (r = this.payload) == null || (r = r.ancillary) == null
                ? void 0
                : r.gifPlayback) != null
              ? n
              : !1));
      },
      m = function (t) {
        var e;
        ((this.kind = "documentTransport"),
          (this.payload = o("decodeProtobuf").decodeProtobuf(
            o("WAMediaTransport.pb").DocumentTransportSpec,
            (e = t.document) == null ? void 0 : e.payload,
          )),
          (this.fileName = t.fileName));
      },
      p = function (t) {
        var e;
        ((this.kind = "stickerTransport"),
          (this.payload = o("decodeProtobuf").decodeProtobuf(
            o("WAMediaTransport.pb").StickerTransportSpec,
            (e = t.sticker) == null ? void 0 : e.payload,
          )));
      },
      _ = function (t) {
        var e = this,
          n;
        ((this.kind = "extendedContentMessage"),
          (this.favicon = (n = r("memoize"))(function () {
            var t, n;
            return ((t = e.payload) == null || (t = t.favicon) == null
              ? void 0
              : t.payload) == null
              ? null
              : o("decodeProtobuf").decodeProtobuf(
                  o("WAMediaTransport.pb").ImageTransportSpec,
                  (n = e.payload) == null || (n = n.favicon) == null
                    ? void 0
                    : n.payload,
                );
          })),
          (this.headerImage = n(function () {
            var t, n;
            return ((t = e.payload) == null || (t = t.headerImage) == null
              ? void 0
              : t.payload) == null
              ? null
              : o("decodeProtobuf").decodeProtobuf(
                  o("WAMediaTransport.pb").ImageTransportSpec,
                  (n = e.payload) == null || (n = n.headerImage) == null
                    ? void 0
                    : n.payload,
                );
          })),
          (this.previews = n(function () {
            var t, n;
            return (t =
              (n = e.payload) == null || (n = n.previews) == null
                ? void 0
                : n.map(function (e) {
                    return o("decodeProtobuf").decodeProtobuf(
                      o("WAMediaTransport.pb").ImageTransportSpec,
                      e.payload,
                    );
                  })) != null
              ? t
              : [];
          })),
          (this.associatedMessage = n(function () {
            var t = e.payload.associatedMessage;
            return (t == null ? void 0 : t.payload) == null
              ? null
              : new y(t.payload);
          })),
          (this.payload = t));
      },
      f = function (t) {
        var e = this;
        ((this.stickerContent = r("memoize")(function () {
          var t,
            n = (t = e.payload) == null ? void 0 : t.stickerContent;
          return n == null
            ? null
            : o("decodeProtobuf").decodeProtobuf(
                o("WAMediaTransport.pb").StickerTransportSpec,
                n.payload,
              );
        })),
          (this.videoContent = r("memoize")(function () {
            var t,
              n = (t = e.payload) == null ? void 0 : t.videoContent;
            return n == null
              ? null
              : o("decodeProtobuf").decodeProtobuf(
                  o("WAMediaTransport.pb").VideoTransportSpec,
                  n.payload,
                );
          })),
          (this.payload = t));
      },
      g = (function () {
        function e(e) {
          ((this.kind = "armadillo"),
            (this.bytes = s(e)),
            (this.proto = o("decodeProtobuf").decodeProtobuf(
              o("WAArmadilloApplication.pb").ArmadilloSpec,
              e,
            )),
            (this.payload = this.proto.payload),
            (this.metadata = this.proto.metadata));
        }
        var t = e.prototype;
        return (
          (t.extendedContentMessage = function () {
            var e,
              t =
                (e = this.payload) == null || (e = e.content) == null
                  ? void 0
                  : e.extendedContentMessage;
            return t == null ? null : new _(t);
          }),
          (t.noteReply = function () {
            var e,
              t =
                (e = this.payload) == null || (e = e.content) == null
                  ? void 0
                  : e.noteReplyMessage;
            return t == null ? null : new f(t);
          }),
          (t.paymentsTransactionMessage = function () {
            var e,
              t =
                (e = this.payload) == null ||
                (e = e.content) == null ||
                (e = e.paymentsTransactionMessage) == null
                  ? void 0
                  : e.extendedContentMessage;
            return t == null ? null : new _(t);
          }),
          (t.paymentsTransactionDetails = function () {
            var e,
              t =
                (e = this.payload) == null || (e = e.content) == null
                  ? void 0
                  : e.paymentsTransactionMessage;
            return t == null
              ? null
              : {
                  amount: t.amount,
                  currency: t.currency,
                  paymentStatus: t.paymentStatus,
                };
          }),
          e
        );
      })(),
      h = (function () {
        function e(e) {
          var t = this,
            n;
          ((this.kind = "consumerApplication"),
            (this.imageMessage = (n = r("memoize"))(function () {
              var e,
                n =
                  (e = t.payload) == null || (e = e.content) == null
                    ? void 0
                    : e.imageMessage;
              if (n != null) return new u(n);
            })),
            (this.audioMessage = n(function () {
              var e,
                n =
                  (e = t.payload) == null || (e = e.content) == null
                    ? void 0
                    : e.audioMessage;
              if (n != null) return new c(n);
            })),
            (this.videoMessage = n(function () {
              var e,
                n =
                  (e = t.payload) == null || (e = e.content) == null
                    ? void 0
                    : e.videoMessage;
              if (n != null) return new d(n);
            })),
            (this.documentMessage = n(function () {
              var e,
                n =
                  (e = t.payload) == null || (e = e.content) == null
                    ? void 0
                    : e.documentMessage;
              if (n != null) return new m(n);
            })),
            (this.stickerMessage = n(function () {
              var e,
                n =
                  (e = t.payload) == null || (e = e.content) == null
                    ? void 0
                    : e.stickerMessage;
              if (n != null) return new p(n);
            })),
            (this.bytes = s(e)),
            (this.proto = o("decodeProtobuf").decodeProtobuf(
              o("WAConsumerApplication.pb").ConsumerApplicationSpec,
              e,
            )),
            (this.payload = this.proto.payload),
            (this.metadata = this.proto.metadata));
        }
        var t = e.prototype;
        return (
          (t.attachmentMessage = function () {
            var e, t, n, r;
            return (e =
              (t =
                (n =
                  (r = this.imageMessage()) != null
                    ? r
                    : this.audioMessage()) != null
                  ? n
                  : this.videoMessage()) != null
                ? t
                : this.documentMessage()) != null
              ? e
              : this.stickerMessage();
          }),
          e
        );
      })(),
      y = (function () {
        function e(e) {
          var t = this;
          ((this.kind = "messageApplication"),
            (this.subProtocol = r("memoize")(function () {
              var e = o("WAParseMessageApplication").parseMessageApplication(
                t.proto,
              );
              if (e.payload != null) {
                var n = e.payload;
                switch (e.subprotocolType) {
                  case "consumerMessage":
                    return new h(n);
                  case "armadillo":
                    return new g(n);
                  case "businessMessage":
                  case "paymentMessage":
                  case "multiDevice":
                  case "voip":
                    break;
                  default:
                    e.subprotocolType;
                }
              }
            })),
            (this.bytes = s(e)),
            (this.proto = o("decodeProtobuf").decodeProtobuf(
              o("WAMsgApplication.pb").MessageApplicationSpec,
              e,
            )));
        }
        var t = e.prototype;
        return (
          (t.consumerMessage = function () {
            var e = this.subProtocol();
            return (e == null ? void 0 : e.kind) !== "consumerApplication"
              ? null
              : e;
          }),
          (t.armadillo = function () {
            var e = this.subProtocol();
            return (e == null ? void 0 : e.kind) !== "armadillo" ? null : e;
          }),
          e
        );
      })(),
      C = function (t) {
        ((this.kind = "transportEvent"),
          (this.proto = o("decodeProtobuf").decodeProtobuf(
            o("WAArmadilloTransportEvent.pb").TransportEventSpec,
            t,
          )));
      },
      b = function (t) {
        ((this.kind = "locallyTransformedMessage"),
          (this.proto = o("decodeProtobuf").decodeProtobuf(
            o("WAArmadilloLocallyTransformedMessage.pb")
              .LocallyTransformedMessageSpec,
            t,
          )));
      },
      v = function (t) {
        ((this.kind = "adminMessage"),
          (this.proto = o("decodeProtobuf").decodeProtobuf(
            o("WAArmadilloMiTransportAdminMessage.pb")
              .MiTransportAdminMessageSpec,
            t,
          )));
      },
      S = "SKIP_CACHE",
      R = (function () {
        function e(e, t) {
          var n = this;
          ((this.payload = r("memoize")(function () {
            if (n.proto.encryptedTransportEvent != null)
              return new C(
                r("nullthrows")(n.proto.encryptedTransportEvent.payload),
              );
            if (n.proto.encryptedTransportLocallyTransformedMessage != null)
              return new b(
                r("nullthrows")(
                  n.proto.encryptedTransportLocallyTransformedMessage.payload,
                ),
              );
            if (n.proto.encryptedTransportMessage != null)
              return new y(r("nullthrows")(n.proto.encryptedTransportMessage));
            if (n.proto.miTransportAdminMessage != null)
              return new v(
                r("nullthrows")(n.proto.miTransportAdminMessage.payload),
              );
            throw o("MpsErrors").MpsErrors.error(
              "invariant",
              "BackupMessage proto has no payload",
            );
          })),
            (this.proto = o("decodeProtobuf").decodeProtobuf(
              o("WAArmadilloBackupMessage.pb").BackupMessageSpec,
              e,
            )));
        }
        var t = e.prototype;
        return (
          (t.encryptedTransportMessage = function () {
            var e = this.payload();
            if (e.kind === "messageApplication") return e;
          }),
          (t.encryptedTransportEvent = function () {
            var e = this.payload();
            if (e.kind === "transportEvent") return e;
          }),
          (t.locallyTransformedMessage = function () {
            var e = this.payload();
            if (e.kind === "locallyTransformedMessage") return e;
          }),
          (t.adminMessage = function () {
            var e = this.payload();
            if (e.kind === "adminMessage") return e;
          }),
          e
        );
      })();
    ((R.create = r("memoizeWithArgsWeak")(function (e) {
      return new R(e, S);
    })),
      (l.DeserializedImageMessage = u),
      (l.DeserializedAudioMessage = c),
      (l.DeserializedVideoMessage = d),
      (l.DeserializedDocumentMessage = m),
      (l.DeserializedStickerMessage = p),
      (l.DeserializedExtendedContentMessage = _),
      (l.DeserializedNoteReply = f),
      (l.DeserializedArmadilloApplication = g),
      (l.DeserializedConsumerApplication = h),
      (l.DeserializedMessageApplication = y),
      (l.DeserializedBackupMessage = R));
  },
  98,
);
