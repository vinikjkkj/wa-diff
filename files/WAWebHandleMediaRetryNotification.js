__d(
  "WAWebHandleMediaRetryNotification",
  [
    "WABase64",
    "WADeprecatedWapParser",
    "WALogger",
    "WANullthrows",
    "WAWap",
    "WAWebCommsWapMd",
    "WAWebCryptoMediaRetry",
    "WAWebProtobufsMmsRetry.pb",
    "WAWebRequestMediaReuploadManager",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
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
      p = new (r("WADeprecatedWapParser"))("mediaRetryNotification", function (
        e,
      ) {
        e.assertTag("notification");
        var t = e.maybeChild("error"),
          n = e.attrWapJid("from"),
          r;
        if ((e.hasAttr("participant") && (r = e.attrWapJid("participant")), t))
          return {
            from: n,
            participant: r,
            msgId: e.attrString("id"),
            ciphertext: null,
            iv: null,
            errorCode: o(
              "WAWebProtobufsMmsRetry.pb",
            ).MediaRetryNotification$ResultType.cast(t.attrInt("code")),
          };
        var a = e.child("encrypt");
        return {
          from: n,
          participant: r,
          msgId: e.attrString("id"),
          ciphertext: a.child("enc_p").contentBytes(),
          iv: a
            .child("enc_iv")
            .contentBytes(o("WAWebCryptoMediaRetry").ENC_IV_SIZE),
          errorCode: null,
        };
      });
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = p.parse(t);
          if (n.error)
            throw (
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "handleMediaRetryNotification: parsing error: ",
                    "",
                  ])),
                n.error.toString(),
              ),
              n.error
            );
          var a = n.success,
            i = a.errorCode,
            l = a.from,
            _ = a.msgId,
            f = a.participant;
          (l == null ||
            !o("WAWebUserPrefsMeUser").isMeAccount(
              o("WAWebWidFactory").createDeviceWidOrThrow(l.toString()),
            )) &&
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "handleMediaRetryNotification: received from not self-primary: ",
                  "",
                ])),
              l,
            ),
            o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "handleMediaRetryNotification: received from not self-primary",
                  ])),
              )
              .sendLogs("media-retry-notification-not-from-self-primary"));
          var g = o("WAWap").wap("ack", {
            id: o("WAWap").CUSTOM_STRING(_),
            class: "notification",
            type: "mediaretry",
            to:
              l != null
                ? l
                : o("WAWebCommsWapMd").USER_JID(
                    o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
                  ),
            participant: f || o("WAWap").DROP_ATTR,
          });
          if (i != null)
            return (
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "handleMediaRetryNotification: ",
                    ": received error code: ",
                    "",
                  ])),
                _,
                i,
              ),
              o(
                "WAWebRequestMediaReuploadManager",
              ).RequestMediaReuploadManager.resolveMediaReupload({
                msgId: _,
                result: i,
              }),
              g
            );
          var h = n.success,
            y = h.ciphertext,
            C = h.iv,
            b = o(
              "WAWebRequestMediaReuploadManager",
            ).RequestMediaReuploadManager.getMediaKey(_);
          if (!b)
            return (
              o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "handleMediaRetryNotification: ",
                    ": mediaKey is not found",
                  ])),
                _,
              ),
              g
            );
          var v = yield o(
              "WAWebCryptoMediaRetry",
            ).decryptMediaRetryNotification(
              o("WABase64").decodeB64(b),
              _,
              r("WANullthrows")(C),
              r("WANullthrows")(y),
            ),
            S = v.directPath,
            R = v.result,
            L = v.stanzaId;
          if (L !== _)
            throw (
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "handleMediaRetryNotification: ",
                    ": id mismatch",
                  ])),
                _,
              ),
              r("err")("handleMediaRetryNotification: msg id does not match")
            );
          return (
            o(
              "WAWebRequestMediaReuploadManager",
            ).RequestMediaReuploadManager.resolveMediaReupload({
              msgId: _,
              result: R,
              directPath: S,
            }),
            g
          );
        })),
        f.apply(this, arguments)
      );
    }
    l.default = _;
  },
  98,
);
