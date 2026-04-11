__d(
  "WAWebGroupHistoryReportingTokenValidator",
  [
    "WACryptoUtils",
    "WALogger",
    "WATimeUtils",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryReportingTokenDBUtils",
    "WAWebGroupHistoryReportingTokenGenerator",
    "WAWebMessagingGatingUtils",
    "WAWebProtobufsGroupHistory.pb",
    "WAWebReportingTokenUtils",
    "WAWebWamEnumReportingTokenValidationFailureReason",
    "WAWebWamReportingTokenMismatchReporter",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e, t, n, r, o, a) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, a, i, l) {
            var u, c;
            if (
              !o(
                "WAWebGroupHistoryGating",
              ).isGroupHistoryReceiverReportingTokenEnabled()
            )
              return null;
            if (a == null)
              return (
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history] Missing bundle sender for ",
                      "",
                    ])),
                  t,
                ),
                null
              );
            var d = yield o(
              "WAWebGroupHistoryReportingTokenDBUtils",
            ).getGroupHistoryReportingTokenInfosForBundle(t);
            if (d == null || d.length === 0)
              return (
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history] No stored reporting tokens found for bundle ",
                      "",
                    ])),
                  t,
                ),
                null
              );
            var m =
                (u = d.reduce(function (e, t) {
                  return e != null ? e : t.version;
                }, null)) != null
                  ? u
                  : o(
                      "WAWebMessagingGatingUtils",
                    ).getSenderReportingTokenVersion(),
              p = new Map();
            for (var _ of d) {
              var f,
                g = (f = p.get(_.stanzaId)) != null ? f : [];
              (g.push(_), p.set(_.stanzaId, g));
            }
            var h = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsGroupHistory.pb")
                .GroupHistoryWithMessageBytesSpec,
              n,
            );
            return {
              receivedTokenMap: p,
              messageBytesArray: [].concat(
                h.messages,
                (c = h.outOfWindowPinnedMessages) != null ? c : [],
              ),
              stanzaVersion: m,
              bundleMessageSecret: r,
              senderJid: o("WAWebWidToJid").widToUserJid(a),
              groupJid: o("WAWebWidToJid").widToGroupJid(i),
              bundleMsgKey: t,
              bundleMsgTimestamp: l,
            };
          },
        )),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = e.id.id,
            a = n.receivedTokenMap.get(r);
          if (a == null || a.length === 0)
            return (
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history] msg ",
                      " missing from public stanza",
                    ])),
                  r,
                )
                .tags("messaging"),
              o(
                "WAWebWamReportingTokenMismatchReporter",
              ).logReportingTokenValidationEvent({
                msg: e,
                reason: o("WAWebWamEnumReportingTokenValidationFailureReason")
                  .REPORTING_TOKEN_VALIDATION_FAILURE_REASON
                  .GROUP_HISTORY_MESSAGE_MISSING_FROM_PUBLIC_STANZA,
                reportingTokenVersion: n.stanzaVersion,
                isPartOfGroupHistory: !0,
                groupHistoryBundleMessageId: n.bundleMsgKey,
              }),
              null
            );
          if (n.bundleMessageSecret == null)
            return (
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history] Missing message secret for message ",
                      "",
                    ])),
                  r,
                )
                .tags("messaging"),
              o(
                "WAWebWamReportingTokenMismatchReporter",
              ).logReportingTokenValidationEvent({
                msg: e,
                reason: o("WAWebWamEnumReportingTokenValidationFailureReason")
                  .REPORTING_TOKEN_VALIDATION_FAILURE_REASON
                  .MISSING_MESSAGE_SECRET,
                reportingTokenVersion: n.stanzaVersion,
                isPartOfGroupHistory: !0,
                groupHistoryBundleMessageId: n.bundleMsgKey,
              }),
              null
            );
          var i = yield o(
              "WAWebGroupHistoryReportingTokenGenerator",
            ).computeReportingTokenForMessage(
              t,
              n.bundleMessageSecret,
              n.senderJid,
              n.groupJid,
              n.stanzaVersion,
            ),
            l = g(i, a),
            s = l.failureReason,
            m = l.isValid,
            p = l.receivedInfo;
          if (p == null) return null;
          s != null &&
            (o("WALogger")
              .WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] token validation failed for msg ",
                    "",
                  ])),
                r,
              )
              .tags("messaging"),
            o(
              "WAWebWamReportingTokenMismatchReporter",
            ).logReportingTokenValidationEvent({
              msg: e,
              reason: s,
              reportingTokenVersion: n.stanzaVersion,
              isPartOfGroupHistory: !0,
              groupHistoryBundleMessageId: n.bundleMsgKey,
            }));
          var _ = p.reportingTag;
          if (_ == null) return null;
          var f = {
            msgKey: e.id.toString(),
            stanzaId: r,
            reportingTag: _,
            msgTs: n.bundleMsgTimestamp,
            receivedTs: o("WATimeUtils").unixTimeMs(),
            reportingTagParticipant: n.senderJid,
          };
          return (
            p.reportingToken != null &&
              ((f.reportingToken = p.reportingToken.slice(
                0,
                m
                  ? o("WAWebReportingTokenUtils").REPORTING_TOKEN_STORAGE_SIZE
                  : o("WAWebReportingTokenUtils")
                      .REPORTING_TOKEN_INVALID_STORAGE_SIZE,
              )),
              (f.version = p.version),
              (i == null ? void 0 : i.reportingTokenContent) != null &&
                (f.reportingTokenContentOpaqueData = i.reportingTokenContent),
              (i == null ? void 0 : i.reportingTokenKey) != null &&
                (f.reportingTokenKey = i.reportingTokenKey)),
            f
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      var n;
      if (e == null || e.reportingToken == null) {
        var r,
          a = t.find(function (e) {
            return e.reportingToken == null;
          });
        return a != null
          ? { receivedInfo: a, isValid: !0, failureReason: null }
          : {
              receivedInfo: (r = t[0]) != null ? r : null,
              isValid: !1,
              failureReason: o(
                "WAWebWamEnumReportingTokenValidationFailureReason",
              ).REPORTING_TOKEN_VALIDATION_FAILURE_REASON
                .EMPTY_REPORTING_TOKEN_CONTENT,
            };
      }
      var i = e.reportingToken,
        l = t.find(function (e) {
          return (
            e.reportingToken != null &&
            o("WACryptoUtils").uint8ArraysEqual(e.reportingToken, i)
          );
        });
      return l != null
        ? { receivedInfo: l, isValid: !0, failureReason: null }
        : {
            receivedInfo: (n = t[0]) != null ? n : null,
            isValid: !1,
            failureReason: o(
              "WAWebWamEnumReportingTokenValidationFailureReason",
            ).REPORTING_TOKEN_VALIDATION_FAILURE_REASON
              .MISMATCH_REPORTING_TOKEN,
          };
    }
    ((l.prepareValidationContext = m),
      (l.validateAndBuildReportingInfoRow = _));
  },
  98,
);
