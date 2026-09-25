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
            r = t.bundleMessageSecret,
            a = t.bundleMsgId,
            i = t.bundleMsgTimestamp,
            l = t.bundleSenderWid,
            u = t.groupWid,
            c = t.inflatedBytes,
            d = a.toString(),
            m = a.id;
          if (
            !o(
              "WAWebGroupHistoryGating",
            ).isGroupHistoryReceiverReportingTokenEnabled()
          )
            return null;
          if (l == null)
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
          var _ = new Map();
          for (var f of p) {
            var g,
              h = (g = _.get(f.stanzaId)) != null ? g : [];
            (h.push(f), _.set(f.stanzaId, h));
          }
          var y = o("decodeProtobuf").decodeProtobuf(
            o("WAWebProtobufsGroupHistory.pb").GroupHistoryWithMessageBytesSpec,
            c,
          );
          return {
            receivedTokenMap: _,
            messageBytesArray: [].concat(
              y.messages,
              (n = y.outOfWindowPinnedMessages) != null ? n : [],
            ),
            bundleMessageSecret: r,
            senderJid: o("WAWebWidToJid").widToUserJid(l),
            groupJid: o("WAWebWidToJid").widToGroupJid(u),
            bundleMsgKey: d,
            bundleMsgStanzaId: m,
            bundleMsgTimestamp: i,
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
          var r,
            a = m(e),
            i = n.receivedTokenMap.get(a);
          if (i == null || i.length === 0) {
            var l = o(
              "WAWebMessagingGatingUtils",
            ).getSenderReportingTokenVersion();
            return (
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history] msg ",
                      " missing from public stanza",
                    ])),
                  a,
                )
                .tags("messaging"),
              o(
                "WAWebWamReportingTokenMismatchReporter",
              ).logReportingTokenValidationEvent({
                msg: e,
                reason: o("WAWebWamEnumReportingTokenValidationFailureReason")
                  .REPORTING_TOKEN_VALIDATION_FAILURE_REASON
                  .GROUP_HISTORY_MESSAGE_MISSING_FROM_PUBLIC_STANZA,
                reportingTokenVersion: l,
                isPartOfGroupHistory: !0,
                groupHistoryBundleMessageId: n.bundleMsgStanzaId,
              }),
              {
                row: null,
                failureReason: o(
                  "WAWebWamEnumReportingTokenValidationFailureReason",
                ).REPORTING_TOKEN_VALIDATION_FAILURE_REASON
                  .GROUP_HISTORY_MESSAGE_MISSING_FROM_PUBLIC_STANZA,
                reportingTokenVersion: l,
              }
            );
          }
          var s =
            (r = i.reduce(function (e, t) {
              return e != null ? e : t.version;
            }, null)) != null
              ? r
              : o("WAWebMessagingGatingUtils").getSenderReportingTokenVersion();
          if (n.bundleMessageSecret == null)
            return (
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history] Missing message secret for message ",
                      "",
                    ])),
                  a,
                )
                .tags("messaging"),
              o(
                "WAWebWamReportingTokenMismatchReporter",
              ).logReportingTokenValidationEvent({
                msg: e,
                reason: o("WAWebWamEnumReportingTokenValidationFailureReason")
                  .REPORTING_TOKEN_VALIDATION_FAILURE_REASON
                  .MISSING_MESSAGE_SECRET,
                reportingTokenVersion: s,
                isPartOfGroupHistory: !0,
                groupHistoryBundleMessageId: n.bundleMsgStanzaId,
              }),
              {
                row: null,
                failureReason: o(
                  "WAWebWamEnumReportingTokenValidationFailureReason",
                ).REPORTING_TOKEN_VALIDATION_FAILURE_REASON
                  .MISSING_MESSAGE_SECRET,
                reportingTokenVersion: s,
              }
            );
          var _ = yield o(
              "WAWebGroupHistoryReportingTokenGenerator",
            ).computeReportingTokenForMessage({
              bundleMessageSecret: n.bundleMessageSecret,
              groupJid: n.groupJid,
              msgInfo: t,
              reportingTokenVersion: s,
              senderJid: n.senderJid,
              stanzaId: a,
            }),
            f = _.info,
            g = _.isSupportedReceiveVersion,
            h = y(f, i),
            C = h.failureReason,
            b = h.isValid,
            v = h.receivedInfo,
            S =
              C != null && !g
                ? o("WAWebWamEnumReportingTokenValidationFailureReason")
                    .REPORTING_TOKEN_VALIDATION_FAILURE_REASON
                    .UNSUPPORTED_VERSION
                : C;
          if (v == null)
            return { row: null, failureReason: S, reportingTokenVersion: s };
          S != null &&
            (o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-history] token validation failed for msg ",
                    "",
                  ])),
                a,
              )
              .tags("messaging"),
            o(
              "WAWebWamReportingTokenMismatchReporter",
            ).logReportingTokenValidationEvent({
              msg: e,
              reason: S,
              reportingTokenVersion: s,
              isPartOfGroupHistory: !0,
              groupHistoryBundleMessageId: n.bundleMsgStanzaId,
            }));
          var R = v.reportingTag;
          if (R == null)
            return { row: null, failureReason: S, reportingTokenVersion: s };
          var L = {
            msgKey: p(e),
            stanzaId: a,
            reportingTag: R,
            msgTs: n.bundleMsgTimestamp,
            receivedTs: o("WATimeUtils").unixTimeMs(),
            reportingTagParticipant: n.senderJid,
          };
          return (
            v.reportingToken != null &&
              ((L.reportingToken = v.reportingToken.slice(
                0,
                b
                  ? o("WAWebReportingTokenUtils").REPORTING_TOKEN_STORAGE_SIZE
                  : o("WAWebReportingTokenUtils")
                      .REPORTING_TOKEN_INVALID_STORAGE_SIZE,
              )),
              (L.version = v.version),
              (f == null ? void 0 : f.reportingTokenContent) != null &&
                (L.reportingTokenContentOpaqueData = f.reportingTokenContent),
              (f == null ? void 0 : f.reportingTokenKey) != null &&
                (L.reportingTokenKey = f.reportingTokenKey)),
            { row: L, failureReason: S, reportingTokenVersion: s }
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      var n;
      if (
        (e == null ? void 0 : e.reportingToken) == null ||
        t.every(function (e) {
          return e.reportingToken == null;
        })
      ) {
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
