__d(
  "WAWebReportingTokenUtils",
  [
    "WABase64",
    "WABinary",
    "WACryptoHkdf",
    "WACryptoHmac",
    "WACryptoUtils",
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAUseCaseSecret",
    "WAWap",
    "WAWebApiContact",
    "WAWebCreateNackFromStanza",
    "WAWebDBMessageSerialization",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryReportingTokenDBUtils",
    "WAWebGroupHistoryReportingTokenUtils",
    "WAWebHandleMsgTypes.flow",
    "WAWebLidMigrationUtils",
    "WAWebMessageInsertDebugPlaceholderFactory",
    "WAWebMessagePluginGenerateReportingTokenContent",
    "WAWebMessageSecretErrorsWamEvent",
    "WAWebMessagingGatingUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebReportingTokenConfig",
    "WAWebReportingTokenConstants",
    "WAWebReportingTokenContent",
    "WAWebSchemaMessage",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumMessageSecretAllowedType",
    "WAWebWamEnumMessageSecretErrorType",
    "WAWebWamEnumReportingTokenValidationFailureReason",
    "WAWebWamMsgUtils",
    "WAWebWamReportingTokenMismatchReporter",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "encodeProtobuf",
    "isEmptyObject",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = 16,
      _ = 32,
      f = 6,
      g = 7,
      h = { sampling: 0.01 },
      y = { sampling: 1 };
    function C(e) {
      var t = o("WAWebMsgGetters").getSender(e);
      return t == null
        ? null
        : t.isLid()
          ? o("WAWebLidMigrationUtils").toPn(t)
          : t;
    }
    function b(e) {
      var t = o("WAWebMsgGetters").getSender(e);
      if (t == null) return null;
      if (t.isLid()) return t;
      if (e.preMatChat != null) return e.preMatChat;
      var n = o("WAWebApiContact").getCurrentLid(
        o("WAWebWidFactory").asUserWidOrThrow(t),
      );
      return n != null ? o("WAWebWidFactory").createWid(n.toString()) : null;
    }
    function v(e) {
      var t = o("WAWebMsgGetters").getSender(e);
      if (t == null) return [];
      var n = e.id.remote.isRegularUser();
      if (!n || o("WAWebMsgGetters").getBroadcastId(e) != null) {
        var r = w(e),
          a = C(e),
          i = b(e);
        return [
          { senderWid: t, receiverWid: r },
          { senderWid: t.isLid() ? a : i, receiverWid: r },
        ];
      }
      var l = C(e),
        s = b(e),
        u = o("WAWebUserPrefsMeUser").getMeUser(),
        c = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
        d = t.isLid()
          ? [
              { senderWid: s, receiverWid: c },
              { senderWid: l, receiverWid: u },
            ]
          : [
              { senderWid: l, receiverWid: u },
              { senderWid: s, receiverWid: c },
            ];
      return (
        o(
          "WAWebMessagingGatingUtils",
        ).isReportingTokenSwappedFallbackValidationEnabled() &&
          d.push(
            { senderWid: s, receiverWid: u },
            { senderWid: l, receiverWid: c },
          ),
        d
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.messageSecret,
            n = e.remoteJid,
            r = e.senderJid,
            a = e.stanzaId,
            i = o("WABinary")
              .Binary.build(
                a,
                r,
                n,
                o("WAUseCaseSecret").UseCaseSecretModificationType.REPORT_TOKEN,
              )
              .readBuffer();
          return o("WACryptoHkdf").extractAndExpand(
            t instanceof ArrayBuffer ? new Uint8Array(t) : t,
            i,
            _,
          );
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return o("WAJids").extractFromJid(
        o("WAWebWidToJid").widToJidWithType(w(e)),
      );
    }
    function E(e) {
      var t = o("WAWebWidToJid").widToJidWithType(e.id.remote);
      return { jidType: t.jidType, remoteJid: o("WAJids").extractFromJid(t) };
    }
    function k(e) {
      var t, n;
      if (e.encFilehash == null && e.caption == null) return null;
      var r = new Uint8Array(
          o("WABase64").decodeB64((t = e.encFilehash) != null ? t : ""),
        ),
        a = new TextEncoder().encode((n = e.caption) != null ? n : ""),
        i = new Uint8Array(r.length + a.length);
      return (
        i.set(r),
        i.set(a, r.length),
        self.crypto.getRandomValues(new Uint8Array(i.length))
      );
    }
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n, r;
          if (
            !(
              o("WAWebMessagingGatingUtils").isReportingTokenSendingEnabled() &&
              o(
                "WAWebMessagePluginGenerateReportingTokenContent",
              ).isMsgTypeReportingTokenCompatible(e.type, e.subtype)
            )
          )
            return null;
          var a =
              (n = e.messageSecret) != null
                ? n
                : (r = t.messageContextInfo) == null
                  ? void 0
                  : r.messageSecret,
            i = o("WAWebMsgGetters").getSender(e),
            l = E(e),
            s = l.jidType,
            u = l.remoteJid;
          if (s === "interopUser") return null;
          if (a == null)
            return (
              new (o(
                "WAWebMessageSecretErrorsWamEvent",
              ).MessageSecretErrorsWamEvent)({
                messageSecretAllowedList: o(
                  "WAWebWamEnumMessageSecretAllowedType",
                ).MESSAGE_SECRET_ALLOWED_TYPE.MESSAGE_REPORTING_TOKEN,
                messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(e),
                messageSecretError: o("WAWebWamEnumMessageSecretErrorType")
                  .MESSAGE_SECRET_ERROR_TYPE.MISSING_MESSAGE_SECRET,
              }).commit(),
              null
            );
          if (i == null || u == null) return null;
          var c = o(
              "WAWebMessagingGatingUtils",
            ).getSenderReportingTokenVersion(),
            d = yield S({
              messageSecret: a,
              stanzaId: e.id.id,
              senderJid: o("WAWebWidToJid").widToUserJid(
                o("WAWebWidFactory").asUserWidOrThrow(i),
              ),
              remoteJid: u,
            }),
            m;
          if (e.reportingTokenContent != null) m = e.reportingTokenContent;
          else {
            var _ = o("encodeProtobuf").encodeProtobuf(
              o("WAWebProtobufsE2E.pb").MessageSpec,
              t,
            );
            m = new (o(
              "WAWebReportingTokenContent",
            ).ReportingTokenContentCalculator)(
              _.readByteArrayView(),
              o("WAWebReportingTokenConfig").getReportingTokenConfig(c),
            ).getReportingTokenContent();
          }
          if (m == null || m.length === 0) return null;
          var f = yield o("WACryptoHmac").hmacSha256(
            new Uint8Array(d),
            m != null ? m : new Uint8Array(0),
            p,
          );
          return { version: c, reportingToken: new Uint8Array(f) };
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            var r,
              a = (r = yield I(t, n)) != null ? r : {},
              i = a.reportingToken,
              l = a.version;
            return i == null || l == null
              ? null
              : o("WAWap").wap(
                  "reporting",
                  null,
                  o("WAWap").wap(
                    "reporting_token",
                    { v: o("WAWap").CUSTOM_STRING(String(l)) },
                    i,
                  ),
                );
          } catch (t) {
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "unexpected exception in generating reporting token body: ",
                      "",
                    ])),
                  t,
                )
                .tags("messaging", "wa-ice", "report-token")
                .sendLogs("report-token-unexpected-exception", h),
              null
            );
          }
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t, n) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (e.type === o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE) {
            if (
              o(
                "WAWebGroupHistoryGating",
              ).isGroupHistorySenderReportingTokenEnabled()
            ) {
              var r = yield o(
                "WAWebGroupHistoryReportingTokenDBUtils",
              ).getGroupHistoryReportingTokenInfosForBundle(n);
              if (r != null)
                return o(
                  "WAWebGroupHistoryReportingTokenUtils",
                ).buildGroupHistoryReportingMessageStanza(r);
            }
            return null;
          }
          return D(e, t);
        })),
        P.apply(this, arguments)
      );
    }
    function N(e, t) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n,
              r = (n = yield I(e, t)) != null ? n : {},
              a = r.reportingToken,
              i = r.version;
            return a == null || i == null
              ? null
              : { reportingTokenV: i, reportingTokenElementValue: a };
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "unexpected exception in generating reporting token mixin args: ",
                      "",
                    ])),
                  e,
                )
                .tags("messaging", "wa-ice", "report-token")
                .sendLogs("report-token-unexpected-exception", h),
              null
            );
          }
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      var t = o("WAWebMsgGetters").getBroadcastId(e);
      if (t != null) return t;
      var n = e.id.remote;
      return n.isRegularUser()
        ? n.isLid()
          ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
          : o("WAWebUserPrefsMeUser").getMeUser()
        : n;
    }
    function A(e) {
      return (
        o("WAWebMsgGetters").getIsEdited(e) &&
        !o("WAWebMessagingGatingUtils").isReportingTokenEditReceiveEnabled()
      );
    }
    function F(e) {
      return (
        (e.kind === o("WAWebMsgType").MsgKind.CommentEncrypted ||
          e.kind === o("WAWebMsgType").MsgKind.EventEditEncrypted ||
          e.kind === o("WAWebMsgType").MsgKind.MessageEditEncrypted) &&
        !o(
          "WAWebMessagingGatingUtils",
        ).isDualEncryptedReportingTokenReceiveEnabled()
      );
    }
    function O(e, t) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n;
            if (
              !o("WAWebMessagingGatingUtils").isReportingTokenReceivingEnabled()
            )
              return {
                res: !0,
                reportingTokenContent: null,
                reportingTokenKey: null,
              };
            var a = e.reportingTokenInfo;
            if (a == null || r("isEmptyObject")(a))
              return {
                res: !0,
                reportingTokenContent: null,
                reportingTokenKey: null,
              };
            if (a.reportingTag == null)
              return {
                res: !0,
                reportingTokenContent: null,
                reportingTokenKey: null,
              };
            var i = a.reportingToken,
              l =
                (n = a.version) != null
                  ? n
                  : o("WAWebReportingTokenConstants").REPORTING_TOKEN_VERSION
                      .DEFAULT,
              s = { msg: e, reportingTokenVersion: l };
            if (i == null)
              return {
                res: !0,
                reportingTokenContent: null,
                reportingTokenKey: null,
              };
            if (
              !o(
                "WAWebMessagePluginGenerateReportingTokenContent",
              ).isMsgTypeReportingTokenCompatible(e.type, e.subtype)
            )
              return {
                res: !0,
                reportingTokenContent: null,
                reportingTokenKey: null,
              };
            if (A(e) || F(e))
              return {
                res: !0,
                reportingTokenContent: null,
                reportingTokenKey: null,
              };
            var p;
            if (
              (o("WAWebMsgGetters").getIsEdited(e) &&
                (p = yield H(e.protocolMessageKey)),
              (p = p != null ? p : e.messageSecret),
              p == null)
            )
              return (
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "message secret cannot be null for validating reporting token info: ",
                        "-",
                        "",
                      ])),
                    e.type,
                    e.subtype,
                  )
                  .tags("messaging", "wa-ice", "report-token")
                  .sendLogs("report-token-null-message-secret", y),
                o(
                  "WAWebWamReportingTokenMismatchReporter",
                ).logReportingTokenValidationEvent(
                  babelHelpers.extends({}, s, {
                    reason: o(
                      "WAWebWamEnumReportingTokenValidationFailureReason",
                    ).REPORTING_TOKEN_VALIDATION_FAILURE_REASON
                      .MISSING_MESSAGE_SECRET,
                  }),
                ),
                {
                  res: !1,
                  reportingTokenContent: null,
                  reportingTokenKey: null,
                }
              );
            var _ = new (o(
              "WAWebReportingTokenContent",
            ).ReportingTokenContentCalculator)(
              t,
              o("WAWebReportingTokenConfig").getReportingTokenConfig(l),
            ).getReportingTokenContent();
            if (_.length === 0)
              return (
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "reporting token content cannot be empty for validating reporting token info. Message: ",
                        "-",
                        "",
                      ])),
                    e.type,
                    e.subtype,
                  )
                  .tags("messaging", "wa-ice", "report-token")
                  .sendLogs("report-token-empty-reporting-token-content", y),
                o(
                  "WAWebWamReportingTokenMismatchReporter",
                ).logReportingTokenValidationEvent(
                  babelHelpers.extends({}, s, {
                    reason:
                      l >
                      o(
                        "WAWebMessagingGatingUtils",
                      ).getSenderReportingTokenVersion()
                        ? o("WAWebWamEnumReportingTokenValidationFailureReason")
                            .REPORTING_TOKEN_VALIDATION_FAILURE_REASON
                            .UNSUPPORTED_VERSION
                        : o("WAWebWamEnumReportingTokenValidationFailureReason")
                            .REPORTING_TOKEN_VALIDATION_FAILURE_REASON
                            .EMPTY_REPORTING_TOKEN_CONTENT,
                  }),
                ),
                {
                  res: !1,
                  reportingTokenContent: null,
                  reportingTokenKey: null,
                }
              );
            var f = yield W({
              messageSecret: p,
              msg: e,
              receivedReportingToken: i,
              derivedReportingTokenContent: _,
            });
            if (f.res === !0) return f;
            if (
              (o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "Franking tag doesn't match for message ",
                      ": ",
                      "-",
                      ". Received version: ",
                      "",
                    ])),
                  e.id.toString(),
                  e.type,
                  e.subtype,
                  l,
                )
                .tags("messaging", "wa-ice", "report-token")
                .sendLogs("report-token-mismatch", y),
              l >
              o("WAWebMessagingGatingUtils").getSenderReportingTokenVersion()
                ? o(
                    "WAWebWamReportingTokenMismatchReporter",
                  ).logReportingTokenValidationEvent({
                    msg: e,
                    reason: o(
                      "WAWebWamEnumReportingTokenValidationFailureReason",
                    ).REPORTING_TOKEN_VALIDATION_FAILURE_REASON
                      .UNSUPPORTED_VERSION,
                    reportingTokenVersion: l,
                  })
                : o(
                    "WAWebWamReportingTokenMismatchReporter",
                  ).logReportingTokenValidationEvent({
                    msg: e,
                    reason: o(
                      "WAWebWamEnumReportingTokenValidationFailureReason",
                    ).REPORTING_TOKEN_VALIDATION_FAILURE_REASON
                      .MISMATCH_REPORTING_TOKEN,
                    reportingTokenVersion: l,
                  }),
              U(l))
            ) {
              var g = V(e);
              o(
                "WAWebMessageInsertDebugPlaceholderFactory",
              ).maybeInsertDebugPlaceholder({
                externalId: g.externalId,
                nackReason: o("WAWebCreateNackFromStanza").NackReason
                  .ParsingError,
                msgInfo: g,
                offline: !1,
                additionalInfo:
                  "reporting token validation failed for msg " +
                  e.id.toString(),
              });
            }
            return f;
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "unexpected exception in validating reporting token info: ",
                      "",
                    ])),
                  e,
                )
                .tags("messaging", "wa-ice", "report-token")
                .sendLogs("report-token-unexpected-exception", h),
              { res: !1, reportingTokenContent: null, reportingTokenKey: null }
            );
          }
        })),
        B.apply(this, arguments)
      );
    }
    function W(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.derivedReportingTokenContent,
            n = e.messageSecret,
            r = e.msg,
            a = e.receivedReportingToken,
            i = v(r);
          if (i.length === 0)
            return {
              res: !1,
              reportingTokenContent: null,
              reportingTokenKey: null,
            };
          var l = null;
          for (var s of i) {
            var u,
              c = s.receiverWid,
              d = s.senderWid;
            if (!(d == null || c == null)) {
              var m = o("WAJids").extractFromJid(
                  o("WAWebWidToJid").widToJidWithType(c),
                ),
                _ = o("WAWebWidToJid").widToUserJid(d),
                f = new Uint8Array(
                  yield S({
                    messageSecret: n,
                    stanzaId: r.id.id,
                    senderJid: _,
                    remoteJid: m,
                  }),
                );
              l = f;
              var g = new Uint8Array(
                  yield o("WACryptoHmac").hmacSha256(f, t, p),
                ),
                h = o("WACryptoUtils").uint8ArraysEqual(
                  g,
                  (u = a.subarray(0, 32)) != null ? u : new Uint8Array(0),
                );
              if (h)
                return {
                  res: !0,
                  reportingTokenContent: t,
                  reportingTokenKey: f,
                };
            }
          }
          return { res: !1, reportingTokenContent: t, reportingTokenKey: l };
        })),
        q.apply(this, arguments)
      );
    }
    function U(e) {
      return e > o("WAWebMessagingGatingUtils").getSenderReportingTokenVersion()
        ? !1
        : o(
            "WAWebMessagingGatingUtils",
          ).isReportingTokenValidationFailureDebugPlaceholderEnabled();
    }
    function V(e) {
      var t,
        n,
        a = e.id.id + "DEBUG",
        i = e.id.remote,
        l = {
          author: (t = o("WAWebMsgGetters").getSender(e)) != null ? t : e.from,
          chat: i,
          count: null,
          edit: -1,
          isHsm: !1,
          externalId: a,
          pushname: "Debug",
          ts: o("WATimeUtils").castToUnixTime(((n = e.t) != null ? n : 0) + 1),
        };
      return r("WAWebWid").isGroup(i)
        ? babelHelpers.extends({}, l, {
            type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.GROUP,
            isDirect: !1,
          })
        : babelHelpers.extends({}, l, {
            type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT,
          });
    }
    function H(e) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e == null) return null;
          var t = yield o("WAWebSchemaMessage")
            .getMessageTable()
            .get(e.toString());
          if (t == null) return null;
          var n = o("WAWebDBMessageSerialization").messageFromDbRow(t);
          return n.messageSecret;
        })),
        G.apply(this, arguments)
      );
    }
    ((l.REPORTING_TOKEN_SIZE = p),
      (l.REPORTING_TOKEN_KEY_SIZE = _),
      (l.REPORTING_TOKEN_STORAGE_SIZE = f),
      (l.REPORTING_TOKEN_INVALID_STORAGE_SIZE = g),
      (l.genReportingTokenKeyFromMessageSecret = S),
      (l.getRemoteJidOnReceiverSide = L),
      (l.getMediaReportingTokenContent = k),
      (l.genReportingToken = I),
      (l.genReportingTokenBody = D),
      (l.genReportingTokenBodyForStanza = $),
      (l.genClientReportingTokenMixinArgs = N),
      (l.shouldSkipProcessingEditedMsg = A),
      (l.shouldSkipProcessingDualEncryptedMsg = F),
      (l.validateReportingTokenInfo = O),
      (l.showDebugPlaceholderForReportingTokenMismatch = U));
  },
  98,
);
