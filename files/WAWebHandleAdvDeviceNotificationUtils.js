__d(
  "WAWebHandleAdvDeviceNotificationUtils",
  [
    "WALogger",
    "WAWebAdvKeyIndexSignatureVerify",
    "WAWebCryptoCurve25519",
    "WAWebProtobufsAdv.pb",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e, t) {
      var n;
      try {
        n = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsAdv.pb").ADVSignedKeyIndexListSpec,
          t,
        );
      } catch (e) {
        return null;
      }
      if (
        !o(
          "WAWebAdvKeyIndexSignatureVerify",
        ).verifyKeyIndexListAccountSignature(n, e)
      )
        return null;
      var r;
      try {
        r = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsAdv.pb").ADVKeyIndexListSpec,
          n.details,
        );
      } catch (e) {
        return null;
      }
      var a = r,
        i = a.accountType,
        l = a.currentIndex,
        s = a.rawId,
        u = a.timestamp,
        c = a.validIndexes;
      return u == null || s == null
        ? null
        : {
            timestamp: u,
            rawId: s,
            validIndexes: c,
            currentIndex: l,
            accountType: i,
          };
    }
    function p(t, n) {
      var r;
      try {
        r = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsAdv.pb").ADVSignedKeyIndexListSpec,
          n,
        );
      } catch (e) {
        return null;
      }
      var a = r.accountSignatureKey;
      if (a == null)
        return (
          o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "accountSignatureKey is null",
                ])),
            )
            .tags("verifySKeyIndexWithAccSigKey"),
          null
        );
      if (
        !o(
          "WAWebAdvKeyIndexSignatureVerify",
        ).verifyKeyIndexListAccountSignature(r, a)
      )
        return (
          o("WALogger")
            .LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "account signature verification failed",
                ])),
            )
            .tags("verifySKeyIndexWithAccSigKey"),
          null
        );
      var i;
      try {
        i = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsAdv.pb").ADVKeyIndexListSpec,
          r.details,
        );
      } catch (e) {
        return (
          o("WALogger")
            .LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "decode failed",
                ])),
            )
            .tags("verifySKeyIndexWithAccSigKey"),
          null
        );
      }
      var l = i,
        m = l.accountType,
        p = l.currentIndex,
        _ = l.rawId,
        f = l.timestamp,
        g = l.validIndexes;
      if (f == null)
        return (
          o("WALogger")
            .LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "timestamp is null",
                ])),
            )
            .tags("verifySKeyIndexWithAccSigKey"),
          null
        );
      if (_ == null)
        return (
          o("WALogger")
            .LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "rawId is null",
                ])),
            )
            .tags("verifySKeyIndexWithAccSigKey"),
          null
        );
      var h = o("WAWebSignalProtocolStore")
        .getSignalProtocolStore()
        .saveIdentity(
          o("WAWebSignalCommonUtils").createSignalAddress(t).toString(),
          o("WAWebCryptoCurve25519").toSignalCurvePubKey(a),
        );
      return {
        timestamp: f,
        rawId: _,
        validIndexes: g,
        currentIndex: p,
        accountType: m,
        identityUpdatePromise: h,
      };
    }
    ((l.decodeSignedKeyIndexBytes = m), (l.verifySKeyIndexWithAccSigKey = p));
  },
  98,
);
