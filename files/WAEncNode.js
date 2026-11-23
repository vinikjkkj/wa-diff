__d(
  "WAEncNode",
  [
    "WAAsMessageTransport",
    "WACryptoManagerUtils",
    "WAGlobals",
    "WALogger",
    "WAMapUtils",
    "WAMsgTransport.pb",
    "WAProtocolMediaType",
    "encodeProtobuf",
    "err",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t, n, a, i) {
      var l = new Set(),
        s = new Set(),
        u = new Set(),
        c = o("WAMapUtils").mapValues(t, function (e, t) {
          var n = e.params,
            r;
          switch ((l.add(n.type), n.type)) {
            case "message": {
              ((r = d({
                messageBytes: n.messageBytes,
                to: t,
                chat: n.chat,
                backupDirective: n.backupDirective,
                applicationPayloadVersion: n.applicationPayloadVersion,
              })),
                s.add(n.messageType.type),
                n.messageType.mediaType != null &&
                  u.add(n.messageType.mediaType));
              break;
            }
            case "appdata": {
              r = m({ messageBytes: n.messageBytes });
              break;
            }
            default:
              (n.type, (r = p({ skdm: n.skdm })));
          }
          return { plaintext: r };
        });
      return o("WACryptoManagerUtils")
        .bulkEncryptMsgWithMetrics(c, n)
        .then(function (n) {
          return n.success
            ? o("WAMapUtils").mapValues(n.value, function (e, n) {
                var a,
                  l = e.baseKey,
                  s = e.ciphertext,
                  u = e.type,
                  c = r("nullthrows")(t.get(n)),
                  d = c.params,
                  m =
                    d.type === "message" && d.messageType.type === "media"
                      ? o("WAProtocolMediaType").castToProtocolMediaType(
                          d.messageType.mediaType,
                        )
                      : null,
                  p = {
                    encType: "device",
                    to: n,
                    v:
                      ((a = d.messageBytes) == null ? void 0 : a.version) ===
                      "v2"
                        ? "2"
                        : "3",
                    type: u,
                    mediaType: m,
                    count: i,
                    ciphertext: s,
                    baseKey: l,
                  };
                return (
                  c.isStateless === !0 && u === "pkmsg" && (p.isStateless = !0),
                  p
                );
              })
            : (o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "sendWrittenMsg failed to encrypt message: ",
                    "",
                  ])),
                n.error,
              ),
              null);
        });
    }
    function c(e, t, n, r, a, i, l, u) {
      var c;
      switch (t.type) {
        case "message": {
          c = d({
            messageBytes: t.messageBytes,
            to: e,
            chat: t.chat,
            backupDirective: l,
            applicationPayloadVersion: t.applicationPayloadVersion,
          });
          break;
        }
        case "appdata": {
          c = m({ messageBytes: t.messageBytes });
          break;
        }
        default:
          (t.type, (c = p({ skdm: t.skdm })));
      }
      var _ = o("WACryptoManagerUtils").encryptMsgWithMetrics(e, c, n, a, i);
      return _.then(function (n) {
        var a;
        if (!n.success)
          return (
            o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "sendWrittenMsg failed to encrypt message: ",
                  "",
                ])),
              n.error,
            ),
            null
          );
        var i =
            t.type === "message" && t.messageType.type === "media"
              ? o("WAProtocolMediaType").castToProtocolMediaType(
                  t.messageType.mediaType,
                )
              : null,
          l = n.value,
          c = l.ciphertext,
          d = l.type,
          m = {
            encType: "device",
            to: e,
            v:
              ((a = t.messageBytes) == null ? void 0 : a.version) === "v2"
                ? "2"
                : "3",
            type: d,
            mediaType: i,
            count: r,
            ciphertext: c,
            baseKey: n.value.baseKey,
          };
        return (u === !0 && d === "pkmsg" && (m.isStateless = !0), m);
      });
    }
    function d(e) {
      var t = e.applicationPayloadVersion,
        n = e.backupDirective,
        r = e.chat,
        a = e.messageBytes,
        i = e.to;
      if (a.version === "v3") {
        var l = null;
        o("WAGlobals").isPeerDevice(i) && (l = r);
        var s = o("WAAsMessageTransport").asMessageTransport(
          a.bytes,
          l,
          null,
          n,
          t,
        );
        return o("encodeProtobuf")
          .encodeProtobuf(o("WAMsgTransport.pb").MessageTransportSpec, s)
          .readByteArrayView();
      } else return o("WAGlobals").isPeerDevice(i) ? a.bytesForPeer : a.bytes;
    }
    function m(e) {
      var t = e.messageBytes;
      if (t.version === "v3") {
        var n = o("WAAsMessageTransport").asMessageTransport(t.bytes);
        return o("encodeProtobuf")
          .encodeProtobuf(o("WAMsgTransport.pb").MessageTransportSpec, n)
          .readByteArrayView();
      } else throw r("err")("Plaintext v2 not supported yet");
    }
    function p(e) {
      var t = e.skdm,
        n = o("WAAsMessageTransport").asMessageTransport(null, null, t);
      return o("encodeProtobuf")
        .encodeProtobuf(o("WAMsgTransport.pb").MessageTransportSpec, n)
        .readByteArrayView();
    }
    ((l.getEncNodes = u), (l.getEncNode = c));
  },
  98,
);
