__d(
  "WAWebNewsletterSendStatusQueryJob",
  [
    "WASmaxStatusPublishPostNewsletterStatusRPC",
    "WAStanzaUtils",
    "WAWebNewsletterValidationUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      o("WAWebNewsletterValidationUtils").validateNewsletterJidOrThrow(
        e.newsletterJid,
      );
      var t = {
          statusTo: e.newsletterJid,
          clientPostNewsletterStatusAndServerOrPostNewsletterStatusIDMixinGroupArgs:
            {
              postNewsletterStatusClientID: {
                statusId: o("WAStanzaUtils").toStanzaId(e.messageId),
                newsletterClientIdContentArgs: s(e),
              },
            },
        },
        n = await o(
          "WASmaxStatusPublishPostNewsletterStatusRPC",
        ).sendPostNewsletterStatusRPC(t);
      switch (n.name) {
        case "PostNewsletterStatusResponseSuccess":
          return {
            success: !0,
            ack: { t: n.value.t },
            serverId: n.value.serverId,
          };
        case "PostNewsletterStatusResponseNegative":
          return { success: !1, ack: { t: n.value.t, error: n.value.error } };
      }
    }
    function s(e) {
      switch (e.type) {
        case "text":
          return {
            statusNewsletterText: {
              newsletterPlaintextPayloadMixinArgs: {
                plaintextElementValue: e.payload,
              },
            },
          };
        case "media":
          return {
            statusNewsletterMediaPublish: {
              plaintextMediatype: e.mediaType,
              statusMediaId: e.mediaHandle,
              newsletterPlaintextPayloadMixinArgs: {
                plaintextElementValue: e.payload,
              },
            },
          };
        default:
          throw (e.type, r("err")("Wrong code path for " + e.type));
      }
    }
    l.querySendNewsletterStatus = e;
  },
  98,
);
