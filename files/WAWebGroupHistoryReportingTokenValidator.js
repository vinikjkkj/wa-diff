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
    function _(e, t, n, r, o, a) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, a, i, l) {
            var u,
              c,
              d = t.toString(),
              m = t.id;
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
                  d,
                ),
                null
              );
            var p = yield o(
              "WAWebGroupHistoryReportingTokenDBUtils",
            ).getGroupHistoryReportingTokenInfosForBundle(d);
            if (p == null || p.length === 0)
              return (
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history] No stored reporting tokens found for bundle ",
                      "",
                    ])),
                  d,
                ),
                null
              );
            var _ =
                (u = p.reduce(function (e, t) {
                  return e != null ? e : t.version;
                }, null)) != null
                  ? u
                  : o(
                      "WAWebMessagingGatingUtils",
                    ).getSenderReportingTokenVersion(),
              f = new Map();
            for (var g of p) {
              var h,
                y = (h = f.get(g.stanzaId)) != null ? h : [];
              (y.push(g), f.set(g.stanzaId, y));
            }
            var C = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsGroupHistory.pb")
                .GroupHistoryWithMessageBytesSpec,
              n,
            );
            return {
              receivedTokenMap: f,
              messageBytesArray: [].concat(
                C.messages,
                (c = C.outOfWindowPinnedMessages) != null ? c : [],
              ),
              stanzaVersion: _,
              bundleMessageSecret: r,
              senderJid: o("WAWebWidToJid").widToUserJid(a),
              groupJid: o("WAWebWidToJid").widToGroupJid(i),
              bundleMsgKey: d,
              bundleMsgStanzaId: m,
              bundleMsgTimestamp: l,
            };
          },
        )),
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
                groupHistoryBundleMessageId: n.bundleMsgStanzaId,
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
              r,
            ),
            l = y(i, a),
            s = l.failureReason,
            _ = l.isValid,
            f = l.receivedInfo;
          if (f == null) return null;
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
          if (g == null) return null;
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
            h
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
