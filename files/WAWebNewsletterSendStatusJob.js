__d(
  "WAWebNewsletterSendStatusJob",
  [
    "WAWebBackendJobs.flow",
    "WAWebBackendJobsCommon",
    "WAWebNewsletterSendStatusQueryJob",
    "WAWebNewsletterValidationUtils",
    "WAWebOutgoingMessage",
    "WAWebProtobufsE2E.pb",
    "asyncToGeneratorRuntime",
    "encodeProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebOutgoingMessage").createOutgoingMsgModelProtobuf(
        o("WAWebOutgoingMessage").OutgoingMessageOriginType.Newsletter,
        e,
      );
    }
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          o("WAWebNewsletterValidationUtils").validateNewsletterJidOrThrow(
            t.newsletterJid,
          );
          var n = t.msg,
            r = e(n),
            a = o("encodeProtobuf")
              .encodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, r)
              .readByteArrayView();
          switch (t.type) {
            case "text":
              return o(
                "WAWebNewsletterSendStatusQueryJob",
              ).querySendNewsletterStatus({
                type: "text",
                messageId: n.id.id,
                newsletterJid: t.newsletterJid,
                payload: a,
              });
            case "media": {
              var i = c(r);
              return o(
                "WAWebNewsletterSendStatusQueryJob",
              ).querySendNewsletterStatus({
                type: "media",
                messageId: n.id.id,
                newsletterJid: t.newsletterJid,
                payload: a,
                mediaType: i,
                mediaHandle: t.mediaHandle,
              });
            }
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      var t = o("WAWebBackendJobsCommon").mediaTypeFromProtobuf(e);
      if (t == null)
        throw r("err")(
          "[newsletter][status] Could not determine media type from protobuf",
        );
      switch (t) {
        case o("WAWebBackendJobs.flow").EncMediaType.Image:
          return "image";
        case o("WAWebBackendJobs.flow").EncMediaType.Video:
          return "video";
        default:
          throw r("err")(
            "[newsletter][status] Unsupported status media type: " + String(t),
          );
      }
    }
    l.sendNewsletterStatus = s;
  },
  98,
);
