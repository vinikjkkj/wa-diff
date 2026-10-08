__d(
  "WAWebNewsletterReportUtils",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "encodeProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(t) {
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
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return e.parentMsgKey != null
            ? o("WAWebDBMsgUtils").getMsgByMsgKey(e.parentMsgKey)
            : null;
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e == null)
            return o("WAWebReportSpamJob").loadMsgsForSpamReport(
              t,
              o("WAWebReportSpamJob").SPAM_REPORT_MESSAGE_COUNT,
              null,
            );
          var n = [e];
          if (
            e.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION &&
            e.pollContentType ===
              o("WAWebPollCreationUtils").PollContentType.IMAGE
          )
            n.push.apply(
              n,
              o("WAWebMessageAssociationUIUtils").getHiddenAssociatedMessages(
                e.id,
              ),
            );
          else if (
            e.associationType ===
            o("WAWebMessageAssociation.flow").MessageAssociationType.MEDIA_POLL
          ) {
            var r = yield d(e);
            r != null &&
              n.push.apply(
                n,
                o("WAWebMessageAssociationUIUtils").getHiddenAssociatedMessages(
                  r.id,
                ),
              );
          }
          return n;
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n, r) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
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
              f = yield o("WASmaxSpamStatusReportV2RPC").sendStatusReportV2RPC(
                _,
              );
            e: {
              var g = f;
              if (
                ((typeof g == "object" && g !== null) ||
                  typeof g == "function") &&
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
                ((typeof g == "object" && g !== null) ||
                  typeof g == "function") &&
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
          },
        )),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n, r) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a) {
            var i = yield p(t, e),
              l,
              s = yield (u || (u = n("Promise"))).all(
                i.map(
                  (function () {
                    var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (t) {
                        var n =
                          yield o("WAWebReportUtils").getMessageMixinArgs(t);
                        return (
                          n != null &&
                            (l = babelHelpers.extends(
                              {
                                messageFrom: o("WAJids").toNewsletterJid(
                                  e.id.toJid(),
                                ),
                              },
                              n,
                            )),
                          l
                        );
                      },
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                ),
              ),
              d = {
                spamListJid: o("WAJids").toNewsletterJid(e.id.toJid()),
                spamListSpamFlow: r,
                spamListWiTraceId: a,
                spamListSubject: e.name,
                messageArgs: s.filter(Boolean),
              },
              m = yield o(
                "WASmaxSpamNewsletterReportRPC",
              ).sendNewsletterReportRPC(d);
            return c(m);
          },
        )),
        y.apply(this, arguments)
      );
    }
    ((l.sendNewsletterStatusReport = f), (l.sendNewsletterReport = h));
  },
  98,
);
