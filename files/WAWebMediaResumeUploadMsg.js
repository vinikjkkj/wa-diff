__d(
  "WAWebMediaResumeUploadMsg",
  [
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
    "err",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("requireDeferred")("WAWebNewsletterSendMsgAction").__setRef(
        "WAWebMediaResumeUploadMsg",
      );
    function u(t) {
      var n,
        a = t.mediaObject;
      if (!a)
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
          Promise.resolve(void 0)
        );
      a.userUploadAttemptCount++;
      var i = a.filehash,
        l =
          i != null &&
          (n = o("WAWebMediaInMemoryKeyCache").MediaKeyCache.get(i)) != null
            ? n
            : void 0;
      t.ack = o("WAWebAck").ACK.CLOCK;
      var u = o("WAWebMsgGetters").getIsNewsletterMsg(t)
          ? o("WAWebMediaMmsV4Upload").uploadUnencryptedMedia
          : o("WAWebMediaMmsV4Upload").uploadMedia,
        c = u({
          mimetype: t.mimetype,
          mediaObject: a,
          mediaKeyInfo: l,
          mediaType: o("WAWebMmsMediaTypes").getMsgMediaType(t),
          forwardedFromWeb: !!t.forwardedFromWeb,
          uploadOrigin: r("WAWebMediaGetUploadOriginForChat")(
            o("WAWebFrontendMsgGetters").getChat(t),
          ),
          fileOrigin: null,
          isViewOnce: !!t.isViewOnce,
        }).then(async function (e) {
          var n = e.mediaEntry;
          if (
            (i != null &&
              o("WAWebMediaInMemoryKeyCache").MediaKeyCache.delete(i),
            !n)
          )
            throw r("err")("upload failed: media entry was not created");
          a.userUploadAttemptCount = 0;
          var l = {
            deprecatedMms3Url: n.deprecatedMms3Url,
            directPath: n.directPath,
            filehash: a.filehash,
            size: a.size,
            streamingSidecar: n.sidecar,
            firstFrameSidecar: n.firstFrameSidecar,
          };
          return (
            n instanceof o("WAWebMediaEntry").EncryptedMediaEntry
              ? ((l.mediaKey = n.mediaKey),
                (l.mediaKeyTimestamp = n.mediaKeyTimestamp),
                (l.encFilehash = n.encFilehash))
              : n instanceof o("WAWebMediaEntry").UnencryptedMediaEntry &&
                (l.mediaHandle = n.handle),
            await r("WAWebMediaUpdateMsg")(t, l),
            t
          );
        }),
        d = o("WAWebMsgGetters").getIsNewsletterMsg(t)
          ? s.load().then(function (e) {
              return e.sendNewsletterMediaMsg(
                o("WAWebFrontendMsgGetters").getChat(t),
                t,
                function () {
                  return c;
                },
              );
            })
          : o("WAWebSendMsgChatAction").resendMsgToChat(
              o("WAWebFrontendMsgGetters").getChat(t),
              c,
            );
      return d.catch(function () {
        t.ack = o("WAWebAck").ACK.FAILED;
      });
    }
    l.resumeUploadMsg = u;
  },
  98,
);
