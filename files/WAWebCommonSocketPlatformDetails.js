__d(
  "WAWebCommonSocketPlatformDetails",
  [
    "WALogger",
    "WAVerifyChainCertificateWA6",
    "WAWapDict",
    "WAWebProtobufsWa6.pb",
    "decodeProtobuf",
    "encodeProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Uint8Array([87, 65, 6, o("WAWapDict").DICT_VERSION]);
    function u(e) {
      return o("encodeProtobuf")
        .encodeProtobuf(o("WAWebProtobufsWa6.pb").HandshakeMessageSpec, {
          clientHello: e,
        })
        .readByteArrayView();
    }
    function c(e) {
      return o("encodeProtobuf")
        .encodeProtobuf(o("WAWebProtobufsWa6.pb").HandshakeMessageSpec, {
          clientFinish: e,
        })
        .readByteArrayView();
    }
    function d(e) {
      return o("decodeProtobuf").decodeProtobuf(
        o("WAWebProtobufsWa6.pb").HandshakeMessageSpec,
        e,
      ).serverHello;
    }
    async function m(t) {
      var n = t.certificate,
        a = t.serverStatic;
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "processCertificate start",
          ])),
      );
      var i = await o("WAVerifyChainCertificateWA6").verifyChainCertificateWA6(
        n,
        a,
      );
      if (!i.success) throw r("err")("verifyCertificateWA6 - " + i.error);
    }
    function p() {
      return null;
    }
    function _(e) {
      if (e == null) return null;
      var t = e != null ? e : {},
        n = t.intermediate,
        r = t.leaf;
      return r && n ? r.key : null;
    }
    ((l.WA_WEB_PROTO_HEADER = s),
      (l.encodeHandshakeHello = u),
      (l.encodeHandshakeFinish = c),
      (l.decodeServerHello = d),
      (l.processCertificate = m),
      (l.serverInfoIfKnown = p),
      (l.makeServerInfoIfKnown = _));
  },
  98,
);
