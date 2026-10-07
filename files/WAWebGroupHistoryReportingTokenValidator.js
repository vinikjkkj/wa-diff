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
    "WAWebMsgType",
    "WAWebProtobufsGroupHistory.pb",
    "WAWebReportingTokenConstants",
    "WAWebReportingTokenContent",
    "WAWebReportingTokenUtils",
    "WAWebWamEnumReportingTokenValidationFailureReason",
    "WAWebWamReportingTokenMismatchReporter",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e) {
      return e.type === "revoked" && e.protocolMessageKey != null
        ? e.protocolMessageKey.id
        : e.id.id;
    }
    function _(e) {
      return e.type === "revoked" && e.protocolMessageKey != null
        ? e.protocolMessageKey.toString()
        : e.id.toString();
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.bundleMessageSecret,
            r = e.bundleMsgId,
            a = e.bundleMsgTimestamp,
            i = e.bundleSenderWid,
            l = e.groupWid,
            c = e.inflatedBytes,
            d = r.toString(),
            m = r.id;
          if (
            !o(
              "WAWebGroupHistoryGating",
            ).isGroupHistoryReceiverReportingTokenEnabled()
          )
            return null;
          if (i == null)
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
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
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
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
              (t = y.outOfWindowPinnedMessages) != null ? t : [],
            ),
            bundleMessageSecret: n,
            senderJid: o("WAWebWidToJid").widToUserJid(i),
            groupJid: o("WAWebWidToJid").widToGroupJid(l),
            bundleMsgKey: d,
            bundleMsgStanzaId: m,
            bundleMsgTimestamp: a,
          };
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r,
            a = p(e),
            i = n.receivedTokenMap.get(a);
          if (i == null || i.length === 0)
            return (
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history] msg ",
                      " missing from public stanza",
                    ])),
                  a,
                )
                .tags("messaging"),
              b(
                e,
                n,
                o("WAWebWamEnumReportingTokenValidationFailureReason")
                  .REPORTING_TOKEN_VALIDATION_FAILURE_REASON
                  .GROUP_HISTORY_MESSAGE_MISSING_FROM_PUBLIC_STANZA,
                o("WAWebMessagingGatingUtils").getSenderReportingTokenVersion(),
              )
            );
          var l =
              (r = i.reduce(function (e, t) {
                return e != null ? e : t.version;
              }, null)) != null
                ? r
                : o(
                    "WAWebMessagingGatingUtils",
                  ).getSenderReportingTokenVersion(),
            s = yield v(t, n, a, l, i);
          if (!C(s == null ? void 0 : s.match)) {
            var u = L(e, t, i, n);
            if (u != null)
              return {
                row: R(e, n, a, u.tokenlessEntry),
                failureReason: null,
                reportingTokenVersion: u.version,
              };
          }
          if (s == null)
            return (
              o("WALogger")
                .WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history] Missing message secret for message ",
                      "",
                    ])),
                  a,
                )
                .tags("messaging"),
              b(
                e,
                n,
                o("WAWebWamEnumReportingTokenValidationFailureReason")
                  .REPORTING_TOKEN_VALIDATION_FAILURE_REASON
                  .MISSING_MESSAGE_SECRET,
                l,
              )
            );
          var _ = s.computedInfo,
            f = s.match,
            g = f.failureReason,
            h = f.isValid,
            y = f.receivedInfo;
          return y == null
            ? { row: null, failureReason: g, reportingTokenVersion: l }
            : (g != null &&
                (o("WALogger")
                  .ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
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
                  reason: g,
                  reportingTokenVersion: l,
                  isPartOfGroupHistory: !0,
                  groupHistoryBundleMessageId: n.bundleMsgStanzaId,
                })),
              {
                row: R(e, n, a, y, h, _),
                failureReason: g,
                reportingTokenVersion: l,
              });
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      var t;
      return (
        (e == null ? void 0 : e.isValid) === !0 &&
        ((t = e.receivedInfo) == null ? void 0 : t.reportingToken) != null
      );
    }
    function b(e, t, n, r) {
      return (
        o(
          "WAWebWamReportingTokenMismatchReporter",
        ).logReportingTokenValidationEvent({
          msg: e,
          reason: n,
          reportingTokenVersion: r,
          isPartOfGroupHistory: !0,
          groupHistoryBundleMessageId: t.bundleMsgStanzaId,
        }),
        { row: null, failureReason: n, reportingTokenVersion: r }
      );
    }
    function v(e, t, n, r, o) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            if (t.bundleMessageSecret == null) return null;
            var i = yield o(
                "WAWebGroupHistoryReportingTokenGenerator",
              ).computeReportingTokenForMessage({
                bundleMessageSecret: t.bundleMessageSecret,
                groupJid: t.groupJid,
                msgInfo: e,
                reportingTokenVersion: r,
                senderJid: t.senderJid,
                stanzaId: n,
              }),
              l = i.info,
              s = i.isSupportedReceiveVersion,
              u = k(l, a);
            return u.failureReason != null && !s
              ? {
                  computedInfo: l,
                  match: babelHelpers.extends({}, u, {
                    failureReason: o(
                      "WAWebWamEnumReportingTokenValidationFailureReason",
                    ).REPORTING_TOKEN_VALIDATION_FAILURE_REASON
                      .UNSUPPORTED_VERSION,
                  }),
                }
              : { computedInfo: l, match: u };
          },
        )),
        S.apply(this, arguments)
      );
    }
    function R(e, t, n, r, a, i) {
      (a === void 0 && (a = !0), i === void 0 && (i = null));
      var l = r.reportingTag;
      if (l == null) return null;
      var s = {
        msgKey: _(e),
        stanzaId: n,
        reportingTag: l,
        msgTs: t.bundleMsgTimestamp,
        receivedTs: o("WATimeUtils").unixTimeMs(),
        reportingTagParticipant: t.senderJid,
      };
      if (r.reportingToken != null) {
        var u, c;
        ((s.reportingToken = r.reportingToken.slice(
          0,
          a
            ? o("WAWebReportingTokenUtils").REPORTING_TOKEN_STORAGE_SIZE
            : o("WAWebReportingTokenUtils")
                .REPORTING_TOKEN_INVALID_STORAGE_SIZE,
        )),
          (s.version = r.version),
          ((u = i) == null ? void 0 : u.reportingTokenContent) != null &&
            (s.reportingTokenContentOpaqueData = i.reportingTokenContent),
          ((c = i) == null ? void 0 : c.reportingTokenKey) != null &&
            (s.reportingTokenKey = i.reportingTokenKey));
      }
      return s;
    }
    function L(t, n, r, a) {
      var i = r.find(function (e) {
        return (
          e.reportingToken == null &&
          e.reportingTag != null &&
          e.validationPolicy ===
            o("WAWebReportingTokenConstants").ReportingTokenValidationPolicy
              .LogMissingReportingToken
        );
      });
      if (
        i == null ||
        t.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN ||
        !o(
          "WAWebMessagingGatingUtils",
        ).isMissingReportingTokenDetectionEnabled()
      )
        return null;
      var l = E(n);
      return l == null
        ? null
        : (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[group-history] msg ",
                  " has no reporting token",
                ])),
              i.stanzaId,
            )
            .tags("messaging"),
          o(
            "WAWebWamReportingTokenMismatchReporter",
          ).logReportingTokenValidationEvent({
            msg: t,
            reason:
              a.bundleMessageSecret != null
                ? o("WAWebWamEnumReportingTokenValidationFailureReason")
                    .REPORTING_TOKEN_VALIDATION_FAILURE_REASON
                    .MISSING_REPORTING_TOKEN
                : o("WAWebWamEnumReportingTokenValidationFailureReason")
                    .REPORTING_TOKEN_VALIDATION_FAILURE_REASON
                    .MISSING_REPORTING_TOKEN_SECRET,
            reportingTokenVersion: l,
            isPartOfGroupHistory: !0,
            groupHistoryBundleMessageId: a.bundleMsgStanzaId,
          }),
          { tokenlessEntry: i, version: l });
    }
    function E(e) {
      var t;
      return (t = o(
        "WAWebGroupHistoryReportingTokenGenerator",
      ).deriveReportingTokenContent({
        messageBytes: e.messageBytes,
        promoteEmptyContentToV3: !1,
        reportingTokenVersion: o(
          "WAWebReportingTokenContent",
        ).getLatestReportingTokenExclusionVersion(),
      })) == null
        ? void 0
        : t.version;
    }
    function k(e, t) {
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
    ((l.prepareValidationContext = f),
      (l.validateAndBuildReportingInfoRow = h));
  },
  98,
);
