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
    function m(e) {
      return e.type === "revoked" && e.protocolMessageKey != null
        ? e.protocolMessageKey.id
        : e.id.id;
    }
    function p(e) {
      return e.type === "revoked" && e.protocolMessageKey != null
        ? e.protocolMessageKey.toString()
        : e.id.toString();
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            r,
            a = t.bundleMessageSecret,
            i = t.bundleMsgId,
            l = t.bundleMsgTimestamp,
            u = t.bundleSenderWid,
            c = t.groupWid,
            d = t.inflatedBytes,
            m = i.toString(),
            p = i.id;
          if (
            !o(
              "WAWebGroupHistoryGating",
            ).isGroupHistoryReceiverReportingTokenEnabled()
          )
            return null;
          if (u == null)
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] Missing bundle sender for ",
                    "",
                  ])),
                m,
              ),
              null
            );
          var _ = yield o(
            "WAWebGroupHistoryReportingTokenDBUtils",
          ).getGroupHistoryReportingTokenInfosForBundle(m);
          if (_ == null || _.length === 0)
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] No stored reporting tokens found for bundle ",
                    "",
                  ])),
                m,
              ),
              null
            );
          var f =
              (n = _.reduce(function (e, t) {
                return e != null ? e : t.version;
              }, null)) != null
                ? n
                : o(
                    "WAWebMessagingGatingUtils",
                  ).getSenderReportingTokenVersion(),
            g = new Map();
          for (var h of _) {
            var y,
              C = (y = g.get(h.stanzaId)) != null ? y : [];
            (C.push(h), g.set(h.stanzaId, C));
          }
          var b = o("decodeProtobuf").decodeProtobuf(
            o("WAWebProtobufsGroupHistory.pb").GroupHistoryWithMessageBytesSpec,
            d,
          );
          return {
            receivedTokenMap: g,
            messageBytesArray: [].concat(
              b.messages,
              (r = b.outOfWindowPinnedMessages) != null ? r : [],
            ),
            stanzaVersion: f,
            bundleMessageSecret: a,
            senderJid: o("WAWebWidToJid").widToUserJid(u),
            groupJid: o("WAWebWidToJid").widToGroupJid(c),
            bundleMsgKey: m,
            bundleMsgStanzaId: p,
            bundleMsgTimestamp: l,
          };
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = m(e),
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
                groupHistoryBundleMessageId: n.bundleMsgStanzaId,
              }),
              {
                row: null,
                failureReason: o(
                  "WAWebWamEnumReportingTokenValidationFailureReason",
                ).REPORTING_TOKEN_VALIDATION_FAILURE_REASON
                  .GROUP_HISTORY_MESSAGE_MISSING_FROM_PUBLIC_STANZA,
              }
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
                groupHistoryBundleMessageId: n.bundleMsgStanzaId,
              }),
              {
                row: null,
                failureReason: o(
                  "WAWebWamEnumReportingTokenValidationFailureReason",
                ).REPORTING_TOKEN_VALIDATION_FAILURE_REASON
                  .MISSING_MESSAGE_SECRET,
              }
            );
          var i = yield o(
              "WAWebGroupHistoryReportingTokenGenerator",
            ).computeReportingTokenForMessage({
              bundleMessageSecret: n.bundleMessageSecret,
              groupJid: n.groupJid,
              msgInfo: t,
              reportingTokenVersion: n.stanzaVersion,
              senderJid: n.senderJid,
              stanzaId: r,
            }),
            l = y(i, a),
            s = l.failureReason,
            _ = l.isValid,
            f = l.receivedInfo;
          if (f == null) return { row: null, failureReason: s };
          s != null &&
            (o("WALogger")
              .ERROR(
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
              groupHistoryBundleMessageId: n.bundleMsgStanzaId,
            }));
          var g = f.reportingTag;
          if (g == null) return { row: null, failureReason: s };
          var h = {
            msgKey: p(e),
            stanzaId: r,
            reportingTag: g,
            msgTs: n.bundleMsgTimestamp,
            receivedTs: o("WATimeUtils").unixTimeMs(),
            reportingTagParticipant: n.senderJid,
          };
          return (
            f.reportingToken != null &&
              ((h.reportingToken = f.reportingToken.slice(
                0,
                _
                  ? o("WAWebReportingTokenUtils").REPORTING_TOKEN_STORAGE_SIZE
                  : o("WAWebReportingTokenUtils")
                      .REPORTING_TOKEN_INVALID_STORAGE_SIZE,
              )),
              (h.version = f.version),
              (i == null ? void 0 : i.reportingTokenContent) != null &&
                (h.reportingTokenContentOpaqueData = i.reportingTokenContent),
              (i == null ? void 0 : i.reportingTokenKey) != null &&
                (h.reportingTokenKey = i.reportingTokenKey)),
            { row: h, failureReason: s }
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
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
    ((l.prepareValidationContext = _),
      (l.validateAndBuildReportingInfoRow = g));
  },
  98,
);
