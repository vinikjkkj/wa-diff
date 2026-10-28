__d(
  "WAWebMediaResumeUploadMsg",
  [
    "Promise",
    "WALogger",
    "WAWebAck",
    "WAWebFrontendMsgGetters",
    "WAWebMediaEntry",
    "WAWebMediaGetUploadOriginForChat",
    "WAWebMediaInMemoryKeyCache",
    "WAWebMediaMmsV4Upload",
    "WAWebMediaUpdateMsg",
    "WAWebMmsMediaTypes",
    "WAWebMsgGetters",
    "WAWebSendMsgChatAction",
    "asyncToGeneratorRuntime",
    "err",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = r("requireDeferred")("WAWebNewsletterSendMsgAction").__setRef(
        "WAWebMediaResumeUploadMsg",
      );
    function c(t) {
      var a,
        i = t.mediaObject;
      if (!i)
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "id: ",
                  " type: ",
                  "",
                ])),
              t.id.toString(),
              t.type,
            )
            .sendLogs("media-fault: resumeUploadMsg msg without mediaObject"),
          (s || (s = n("Promise"))).resolve()
        );
      i.userUploadAttemptCount++;
      var l = i.filehash,
        c =
          l != null &&
          (a = o("WAWebMediaInMemoryKeyCache").MediaKeyCache.get(l)) != null
            ? a
            : void 0;
      t.ack = o("WAWebAck").ACK.CLOCK;
      var d = o("WAWebMsgGetters").getIsNewsletterMsg(t)
          ? o("WAWebMediaMmsV4Upload").uploadUnencryptedMedia
          : o("WAWebMediaMmsV4Upload").uploadMedia,
        m = d({
          mimetype: t.mimetype,
          mediaObject: i,
          mediaKeyInfo: c,
          mediaType: o("WAWebMmsMediaTypes").getMsgMediaType(t),
          forwardedFromWeb: !!t.forwardedFromWeb,
          uploadOrigin: r("WAWebMediaGetUploadOriginForChat")(
            o("WAWebFrontendMsgGetters").getChat(t),
          ),
          fileOrigin: null,
          isViewOnce: !!t.isViewOnce,
        }).then(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var n = e.mediaEntry;
                if (
                  (l != null &&
                    o("WAWebMediaInMemoryKeyCache").MediaKeyCache.delete(l),
                  !n)
                )
                  throw r("err")("upload failed: media entry was not created");
                i.userUploadAttemptCount = 0;
                var a = {
                  deprecatedMms3Url: n.deprecatedMms3Url,
                  directPath: n.directPath,
                  filehash: i.filehash,
                  size: i.size,
                  streamingSidecar: n.sidecar,
                  firstFrameSidecar: n.firstFrameSidecar,
                };
                return (
                  n instanceof o("WAWebMediaEntry").EncryptedMediaEntry
                    ? ((a.mediaKey = n.mediaKey),
                      (a.mediaKeyTimestamp = n.mediaKeyTimestamp),
                      (a.encFilehash = n.encFilehash))
                    : n instanceof o("WAWebMediaEntry").UnencryptedMediaEntry &&
                      (a.mediaHandle = n.handle),
                  yield r("WAWebMediaUpdateMsg")(t, a),
                  t
                );
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        ),
        p = o("WAWebMsgGetters").getIsNewsletterMsg(t)
          ? u.load().then(function (e) {
              return e.sendNewsletterMediaMsg(
                o("WAWebFrontendMsgGetters").getChat(t),
                t,
                function () {
                  return m;
                },
              );
            })
          : o("WAWebSendMsgChatAction").resendMsgToChat(
              o("WAWebFrontendMsgGetters").getChat(t),
              m,
            );
      return p.catch(function () {
        t.ack = o("WAWebAck").ACK.FAILED;
      });
    }
    l.resumeUploadMsg = c;
  },
  98,
);
