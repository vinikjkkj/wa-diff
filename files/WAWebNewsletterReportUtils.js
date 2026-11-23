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
            a = r.errorSpamIqErrors.value.code,
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
    async function m(e, t, n, a) {
      var i = t.serverId;
      if (i == null)
        throw r("err")("reportNewsletterStatus failed: missing serverId");
      var l = o("WAJids").toNewsletterJid(e.id.toJid()),
        u = e.name,
        c = o("WAWebReportSpamJob").getSpamMessageProtobuf(
          o("WAWebOutgoingMessage").createOutgoingMsgModelProtobuf(
            o("WAWebOutgoingMessage").OutgoingMessageOriginType.Report,
            t,
          ),
        ),
        d = o("encodeProtobuf")
          .encodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, c)
          .readByteArrayView(),
        m = { plaintextElementValue: d },
        p =
          t.type === o("WAWebMsgType").MSG_TYPE.IMAGE
            ? {
                statusNewsletterMedia: {
                  plaintextMediatype: "image",
                  newsletterPlaintextPayloadMixinArgs: m,
                },
              }
            : t.type === o("WAWebMsgType").MSG_TYPE.VIDEO
              ? {
                  statusNewsletterMedia: {
                    plaintextMediatype: "video",
                    newsletterPlaintextPayloadMixinArgs: m,
                  },
                }
              : {
                  statusNewsletterText: {
                    newsletterPlaintextPayloadMixinArgs: m,
                  },
                },
        _ = babelHelpers.extends(
          { spamListSpamFlow: n, spamListWiTraceId: a, spamListJid: l },
          u != null && u !== ""
            ? { entitySubjectMixinArgs: { spamListSubject: u } }
            : null,
          {
            reportableNewsletterStatusMixinArgs: {
              statusServerId: i,
              statusT: t.t,
              statusNewsletterTextOrMediaMixinGroupArgs: p,
            },
          },
        ),
        f = await o("WASmaxSpamStatusReportV2RPC").sendStatusReportV2RPC(_);
      e: {
        var g = f;
        if (
          ((typeof g == "object" && g !== null) || typeof g == "function") &&
          g.name === "StatusReportV2ResponseError" &&
          "value" in g
        ) {
          var h = g.value,
            y =
              h
                .errorIQErrorInternalServerErrorOrBadRequestOrForbiddenOrRateOverlimitMixinGroup
                .value,
            C = y.code,
            b = y.text;
          return (
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "reportNewsletterStatus: server error response ",
                  "",
                ])),
              C,
            ),
            { errorCode: C, errorText: b }
          );
          break e;
        }
        if (
          ((typeof g == "object" && g !== null) || typeof g == "function") &&
          g.name === "StatusReportV2ResponseSuccess" &&
          "value" in g
        ) {
          var v = g.value;
          return v;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            g,
        );
      }
    }
    async function p(e, t, n, r) {
      var a = await d(t, e),
        i,
        l = await Promise.all(
          a.map(async function (t) {
            var n = await o("WAWebReportUtils").getMessageMixinArgs(t);
            return (
              n != null &&
                (i = babelHelpers.extends(
                  { messageFrom: o("WAJids").toNewsletterJid(e.id.toJid()) },
                  n,
                )),
              i
            );
          }),
        ),
        s = {
          spamListJid: o("WAJids").toNewsletterJid(e.id.toJid()),
          spamListSpamFlow: n,
          spamListWiTraceId: r,
          spamListSubject: e.name,
          messageArgs: l.filter(Boolean),
        },
        c = await o("WASmaxSpamNewsletterReportRPC").sendNewsletterReportRPC(s);
      return u(c);
    }
    ((l.sendNewsletterStatusReport = m), (l.sendNewsletterReport = p));
  },
  98,
);
