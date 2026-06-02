__d(
  "WAWebNewsletterReportUtils",
  [
    "WAJids",
    "WALogger",
    "WASmaxSpamNewsletterReportRPC",
    "WASmaxSpamStatusReportV2RPC",
    "WAWebDBMsgUtils",
    "WAWebMessageAssociation.flow",
    "WAWebMessageAssociationUIUtils",
    "WAWebMsgType",
    "WAWebOutgoingMessage",
    "WAWebPollCreationUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebReportSpamJob",
    "WAWebReportUtils",
    "encodeProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t) {
      e: {
        var n = t;
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.name === "NewsletterReportResponseError" &&
          "value" in n
        ) {
          var r = n.value,
            a = parseInt(r.errorSpamIqErrors.value, 10),
            i = r.errorSpamIqErrors.name;
          return (
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "parseNewsletterReportResponse: server response with ",
                  ", ",
                  "",
                ])),
              a,
              i,
            ),
            { errorCode: a, errorText: i }
          );
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.name === "NewsletterReportResponseSuccess" &&
          "value" in n
        ) {
          var l = n.value;
          return l;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            n,
        );
      }
    }
    async function c(e) {
      return e.parentMsgKey != null
        ? o("WAWebDBMsgUtils").getMsgByMsgKey(e.parentMsgKey)
        : null;
    }
    async function d(e, t) {
      if (e == null)
        return o("WAWebReportSpamJob").loadMsgsForSpamReport(
          t,
          o("WAWebReportSpamJob").SPAM_REPORT_MESSAGE_COUNT,
          null,
        );
      var n = [e];
      if (
        e.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION &&
        e.pollContentType === o("WAWebPollCreationUtils").PollContentType.IMAGE
      )
        n.push.apply(
          n,
          o("WAWebMessageAssociationUIUtils").getHiddenAssociatedMessages(e.id),
        );
      else if (
        e.associationType ===
        o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_POLL
      ) {
        var r = await c(e);
        r != null &&
          n.push.apply(
            n,
            o("WAWebMessageAssociationUIUtils").getHiddenAssociatedMessages(
              r.id,
            ),
          );
      }
      return n;
    }
    async function m(e, t, n) {
      var a = t.serverId;
      if (a == null)
        throw r("err")("reportNewsletterStatus failed: missing serverId");
      var i = o("WAJids").toNewsletterJid(e.id.toJid()),
        l = e.name,
        u = o("WAWebReportSpamJob").getSpamMessageProtobuf(
          o("WAWebOutgoingMessage").createOutgoingMsgModelProtobuf(
            o("WAWebOutgoingMessage").OutgoingMessageOriginType.Report,
            t,
          ),
        ),
        c = o("encodeProtobuf")
          .encodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, u)
          .readByteArrayView(),
        d = { plaintextElementValue: c },
        m =
          t.type === o("WAWebMsgType").MSG_TYPE.IMAGE
            ? {
                statusNewsletterMedia: {
                  plaintextMediatype: "image",
                  newsletterPlaintextPayloadMixinArgs: d,
                },
              }
            : t.type === o("WAWebMsgType").MSG_TYPE.VIDEO
              ? {
                  statusNewsletterMedia: {
                    plaintextMediatype: "video",
                    newsletterPlaintextPayloadMixinArgs: d,
                  },
                }
              : {
                  statusNewsletterText: {
                    newsletterPlaintextPayloadMixinArgs: d,
                  },
                },
        p = babelHelpers.extends(
          { spamListSpamFlow: n, spamListJid: i },
          l != null && l !== ""
            ? { entitySubjectMixinArgs: { spamListSubject: l } }
            : null,
          {
            reportableNewsletterStatusMixinArgs: {
              statusServerId: a,
              statusT: t.t,
              statusNewsletterTextOrMediaMixinGroupArgs: m,
            },
          },
        ),
        _ = await o("WASmaxSpamStatusReportV2RPC").sendStatusReportV2RPC(p);
      e: {
        var f = _;
        if (
          ((typeof f == "object" && f !== null) || typeof f == "function") &&
          f.name === "StatusReportV2ResponseError" &&
          "value" in f
        ) {
          var g = f.value;
          return (
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "reportNewsletterStatus: server error response",
                ])),
            ),
            { errorCode: 500, errorText: "newsletter status report failed" }
          );
          break e;
        }
        if (
          ((typeof f == "object" && f !== null) || typeof f == "function") &&
          f.name === "StatusReportV2ResponseSuccess" &&
          "value" in f
        ) {
          var h = f.value;
          return h;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            f,
        );
      }
    }
    async function p(e, t, n) {
      var r = await d(t, e),
        a,
        i = await Promise.all(
          r.map(async function (t) {
            var n = await o("WAWebReportUtils").getMessageMixinArgs(t);
            return (
              n != null &&
                (a = babelHelpers.extends(
                  { messageFrom: o("WAJids").toNewsletterJid(e.id.toJid()) },
                  n,
                )),
              a
            );
          }),
        ),
        l = {
          spamListJid: o("WAJids").toNewsletterJid(e.id.toJid()),
          spamListSpamFlow: n,
          spamListSubject: e.name,
          messageArgs: i.filter(Boolean),
        },
        s = await o("WASmaxSpamNewsletterReportRPC").sendNewsletterReportRPC(l);
      return u(s);
    }
    ((l.sendNewsletterStatusReport = m), (l.sendNewsletterReport = p));
  },
  98,
);
