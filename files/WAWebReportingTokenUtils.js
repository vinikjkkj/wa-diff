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
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebCreateNackFromStanza",
    "WAWebCriticalEventWamEvent",
    "WAWebDBMessageSerialization",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryReportingTokenDBUtils",
    "WAWebGroupHistoryReportingTokenUtils",
    "WAWebHandleMsgTypes.flow",
    "WAWebLidMigrationUtils",
    "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
    "WAWebMessagePluginGenerateReportingTokenContent",
    "WAWebMessageSecretErrorsWamEvent",
    "WAWebMessagingGatingUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
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
      p,
      _ = 16,
      f = 32,
      g = 6,
      h = 7,
      y = { sampling: 0.01 },
      C = { sampling: 1 },
      b = new Set([
        (p = o("WAWebMsgType")).MSG_TYPE.COMMENT,
        p.MSG_TYPE.EVENT_EDIT_ENCRYPTED,
        p.MSG_TYPE.EVENT_RESPONSE,
        p.MSG_TYPE.MESSAGE_EDIT_ENCRYPTED,
        p.MSG_TYPE.POLL_ADD_OPTION_ENCRYPTED,
        p.MSG_TYPE.POLL_EDIT_ENCRYPTED,
        p.MSG_TYPE.POLL_UPDATE,
        p.MSG_TYPE.REACTION,
        p.MSG_TYPE.REACTION_ENC,
      ]);
    function v(e) {
      return o("WAWebMsgGetters").getIsGroupStatus(e)
        ? o("WAWebMsgGetters").getAuthor(e)
        : o("WAWebMsgGetters").getSender(e);
    }
    function S(e) {
      var t = v(e);
      return t == null
        ? null
        : t.isLid()
          ? o("WAWebLidMigrationUtils").toPn(t)
          : t;
    }
    function R(e) {
      var t = v(e);
      if (t == null) return null;
      if (t.isLid()) return t;
      if (e.preMatChat != null) return e.preMatChat;
      var n = o("WAWebApiContact").getCurrentLid(
        o("WAWebWidFactory").asUserWidOrThrow(t),
      );
      return n != null ? o("WAWebWidFactory").createWid(n.toString()) : null;
    }
    function L(e) {
      var t = v(e);
      if (t == null) return [];
      var n = e.id.remote.isRegularUser();
      if (!n || o("WAWebMsgGetters").getBroadcastId(e) != null) {
        var r = W(e),
          a = S(e),
          i = R(e);
        return [
          { senderWid: t, receiverWid: r },
          { senderWid: t.isLid() ? a : i, receiverWid: r },
        ];
      }
      var l = S(e),
        s = R(e),
        u = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
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
        o("WAWebABProps").getABPropConfigValue(
          "rt_swapped_fallback_validation",
        ) &&
          d.push(
            { senderWid: s, receiverWid: u },
            { senderWid: l, receiverWid: c },
          ),
        d
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            f,
          );
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return o("WAJids").extractFromJid(
        o("WAWebWidToJid").widToJidWithType(W(e)),
      );
    }
    function T(e) {
      var t = e.id.remote;
      t.isRegularUser() && !t.isLid() && e.to.isLid() && (t = e.to);
      var n = o("WAWebWidToJid").widToJidWithType(t);
      return { jidType: n.jidType, remoteJid: o("WAJids").extractFromJid(n) };
    }
    function D(e) {
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
    function x(e, t, n) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r, a;
          if (
            (n === void 0 && (n = "send"),
            !o(
              "WAWebMessagePluginGenerateReportingTokenContent",
            ).isMsgTypeReportingTokenCompatible(e.type, e.subtype))
          )
            return null;
          var i = o(
            "WAWebMessagingGatingUtils",
          ).getSenderReportingTokenVersion();
          if (i <= 0) return null;
          var l = v(e),
            s = T(e),
            u = s.jidType,
            c = s.remoteJid;
          if (u === "interopUser" || l == null || c == null) return null;
          var d = e.reportingTokenContentInfo;
          if (d == null) {
            if (b.has(e.type)) return null;
            var m = o("encodeProtobuf").encodeProtobuf(
                o("WAWebProtobufsE2E.pb").MessageSpec,
                t,
              ),
              p = m.readByteArrayView();
            d = N(p, i);
          }
          var f = d,
            g = f.content,
            h = f.version;
          if (g.length === 0) return null;
          var y =
            (r = e.messageSecret) != null
              ? r
              : (a = t.messageContextInfo) == null
                ? void 0
                : a.messageSecret;
          if (y == null)
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
              new (o("WAWebCriticalEventWamEvent").CriticalEventWamEvent)({
                name: "reporting_token_missing_fk_at_send",
                context: P(e, n),
              }).commit(),
              null
            );
          var C = yield E({
              messageSecret: y,
              stanzaId: e.id.id,
              senderJid: o("WAWebWidToJid").widToUserJid(
                o("WAWebWidFactory").asUserWidOrThrow(l),
              ),
              remoteJid: c,
            }),
            S = yield o("WACryptoHmac").hmacSha256(
              new Uint8Array(C),
              g != null ? g : new Uint8Array(0),
              _,
            );
          return { version: h, reportingToken: new Uint8Array(S) };
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t) {
      var n,
        r,
        o = e.local === !0 ? 1 : 0;
      return (
        "type=" +
        e.type +
        ";subtype=" +
        ((n = e.subtype) != null ? n : "") +
        ";origin=" +
        t +
        ";ack=" +
        ((r = e.ack) != null ? r : "") +
        ";local=" +
        o
      );
    }
    function N(e, t) {
      var n = o("WAWebReportingTokenContent").calculateReportingTokenContent(
        e,
        t,
      );
      return t < o("WAWebReportingTokenConstants").REPORTING_TOKEN_VERSION.V3 &&
        n.length === 0 &&
        o("WAWebMessagingGatingUtils").isReportingTokenV3HybridSendingEnabled()
        ? {
            content: o(
              "WAWebReportingTokenContent",
            ).calculateReportingTokenContent(
              e,
              o("WAWebReportingTokenConstants").REPORTING_TOKEN_VERSION.V3,
            ),
            version: o("WAWebReportingTokenConstants").REPORTING_TOKEN_VERSION
              .V3,
          }
        : { content: n, version: t };
    }
    function M(e, t, n) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          r === void 0 && (r = "send");
          try {
            var a,
              i = (a = yield x(t, n, r)) != null ? a : {},
              l = i.reportingToken,
              s = i.version;
            return l == null || s == null
              ? null
              : o("WAWap").wap(
                  "reporting",
                  null,
                  o("WAWap").wap(
                    "reporting_token",
                    { v: o("WAWap").CUSTOM_STRING(String(s)) },
                    l,
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
                .sendLogs("report-token-unexpected-exception", y),
              null
            );
          }
        })),
        w.apply(this, arguments)
      );
    }
    function A(e, t, n, r) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            if (
              (r === void 0 && (r = "send"),
              e.type === o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE)
            ) {
              if (
                o(
                  "WAWebGroupHistoryGating",
                ).isGroupHistorySenderReportingTokenEnabled(
                  o("WAWebMsgGetters").getRemote(e),
                )
              ) {
                var a = yield o(
                  "WAWebGroupHistoryReportingTokenDBUtils",
                ).getGroupHistoryReportingTokenInfosForBundle(n);
                if (a != null)
                  return o(
                    "WAWebGroupHistoryReportingTokenUtils",
                  ).buildGroupHistoryReportingMessageStanza(a);
              }
              return null;
            }
            return M(e, t, r);
          },
        )),
        F.apply(this, arguments)
      );
    }
    function O(e, t, n) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          n === void 0 && (n = "send");
          try {
            var r,
              a = (r = yield x(e, t, n)) != null ? r : {},
              i = a.reportingToken,
              l = a.version;
            return i == null || l == null
              ? null
              : { reportingTokenV: l, reportingTokenElementValue: i };
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
                .sendLogs("report-token-unexpected-exception", y),
              null
            );
          }
        })),
        B.apply(this, arguments)
      );
    }
    function W(e) {
      var t = o("WAWebMsgGetters").getBroadcastId(e);
      if (t != null) return t;
      var n = e.id.remote;
      return n.isRegularUser()
        ? n.isLid()
          ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
          : o("WAWebUserPrefsMeUser").getMeUserOrThrow()
        : n;
    }
    function q(e, t) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            if (
              !o("WAWebMessagingGatingUtils").isReportingTokenReceivingEnabled()
            )
              return {
                res: !0,
                reportingTokenContent: null,
                reportingTokenKey: null,
              };
            var n = e.reportingTokenInfo;
            if (n == null || r("isEmptyObject")(n))
              return {
                res: !0,
                reportingTokenContent: null,
                reportingTokenKey: null,
              };
            if (n.reportingTag == null)
              return {
                res: !0,
                reportingTokenContent: null,
                reportingTokenKey: null,
              };
            var a = n.reportingToken,
              i = n.version,
              l = { msg: e, reportingTokenVersion: i };
            if (a == null)
              return (
                yield H(e, t, n.validationPolicy),
                {
                  res: !0,
                  reportingTokenContent: null,
                  reportingTokenKey: null,
                }
              );
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
            var s;
            if (
              (o("WAWebMsgGetters").getIsEdited(e) &&
                (s = yield Y(e.protocolMessageKey)),
              (s = s != null ? s : e.messageSecret),
              s == null)
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
                  .sendLogs("report-token-null-message-secret", C),
                o(
                  "WAWebWamReportingTokenMismatchReporter",
                ).logReportingTokenValidationEvent(
                  babelHelpers.extends({}, l, {
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
            var p =
              i == null
                ? new Uint8Array(0)
                : o(
                    "WAWebReportingTokenContent",
                  ).calculateReportingTokenContent(t, i);
            if (p.length === 0)
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
                  .sendLogs("report-token-empty-reporting-token-content", C),
                o(
                  "WAWebWamReportingTokenMismatchReporter",
                ).logReportingTokenValidationEvent(
                  babelHelpers.extends({}, l, {
                    reason: Q(i)
                      ? o("WAWebWamEnumReportingTokenValidationFailureReason")
                          .REPORTING_TOKEN_VALIDATION_FAILURE_REASON
                          .EMPTY_REPORTING_TOKEN_CONTENT
                      : o("WAWebWamEnumReportingTokenValidationFailureReason")
                          .REPORTING_TOKEN_VALIDATION_FAILURE_REASON
                          .UNSUPPORTED_VERSION,
                  }),
                ),
                {
                  res: !1,
                  reportingTokenContent: null,
                  reportingTokenKey: null,
                }
              );
            var _ = yield z({
              messageSecret: s,
              msg: e,
              receivedReportingToken: a,
              derivedReportingTokenContent: p,
            });
            if (_.res === !0) return _;
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
                  i,
                )
                .tags("messaging", "wa-ice", "report-token")
                .sendLogs("report-token-mismatch", C),
              o(
                "WAWebWamReportingTokenMismatchReporter",
              ).logReportingTokenValidationEvent({
                msg: e,
                reason: Q(i)
                  ? o("WAWebWamEnumReportingTokenValidationFailureReason")
                      .REPORTING_TOKEN_VALIDATION_FAILURE_REASON
                      .MISMATCH_REPORTING_TOKEN
                  : o("WAWebWamEnumReportingTokenValidationFailureReason")
                      .REPORTING_TOKEN_VALIDATION_FAILURE_REASON
                      .UNSUPPORTED_VERSION,
                reportingTokenVersion: i,
              }),
              K(i))
            ) {
              var f = X(e);
              o(
                "WAWebMessageInsertDebugPlaceholderWorkerCompatible",
              ).maybeInsertDebugPlaceholder({
                externalId: f.externalId,
                nackReason: o("WAWebCreateNackFromStanza").NackReason
                  .ParsingError,
                msgInfo: f,
                offline: !1,
                additionalInfo:
                  "reporting token validation failed for msg " +
                  e.id.toString(),
              });
            }
            return _;
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
                .sendLogs("report-token-unexpected-exception", y),
              { res: !1, reportingTokenContent: null, reportingTokenKey: null }
            );
          }
        })),
        U.apply(this, arguments)
      );
    }
    function V(e, t) {
      return t !==
        o("WAWebReportingTokenConstants").ReportingTokenValidationPolicy
          .LogMissingReportingToken ||
        e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN
        ? !1
        : o(
            "WAWebMessagePluginGenerateReportingTokenContent",
          ).isMsgTypeReportingTokenCompatible(e.type, e.subtype);
    }
    function H(e, t, n) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (
            !(
              !V(e, n) ||
              !o(
                "WAWebMessagingGatingUtils",
              ).isMissingReportingTokenDetectionEnabled()
            )
          ) {
            var r = o(
                "WAWebReportingTokenContent",
              ).getLatestReportingTokenExclusionVersion(),
              a = o(
                "WAWebReportingTokenContent",
              ).calculateReportingTokenContent(t, r);
            if (a.length !== 0) {
              var i = null;
              if (o("WAWebMsgGetters").getIsEdited(e)) {
                var l = yield Z(e.protocolMessageKey);
                if (l == null) return;
                i = l.messageSecret;
              }
              var s = i != null ? i : e.messageSecret;
              o(
                "WAWebWamReportingTokenMismatchReporter",
              ).logReportingTokenValidationEvent({
                msg: e,
                reason:
                  s != null
                    ? o("WAWebWamEnumReportingTokenValidationFailureReason")
                        .REPORTING_TOKEN_VALIDATION_FAILURE_REASON
                        .MISSING_REPORTING_TOKEN
                    : o("WAWebWamEnumReportingTokenValidationFailureReason")
                        .REPORTING_TOKEN_VALIDATION_FAILURE_REASON
                        .MISSING_REPORTING_TOKEN_SECRET,
                reportingTokenVersion: r,
              });
            }
          }
        })),
        G.apply(this, arguments)
      );
    }
    function z(e) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.derivedReportingTokenContent,
            n = e.messageSecret,
            r = e.msg,
            a = e.receivedReportingToken,
            i = L(r);
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
                p = o("WAWebWidToJid").widToUserJid(d),
                f = new Uint8Array(
                  yield E({
                    messageSecret: n,
                    stanzaId: r.id.id,
                    senderJid: p,
                    remoteJid: m,
                  }),
                );
              l = f;
              var g = new Uint8Array(
                  yield o("WACryptoHmac").hmacSha256(f, t, _),
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
        j.apply(this, arguments)
      );
    }
    function K(e) {
      return Q(e)
        ? o(
            "WAWebMessagingGatingUtils",
          ).isReportingTokenValidationFailureDebugPlaceholderEnabled()
        : !1;
    }
    function Q(e) {
      return e == null
        ? !1
        : e < o("WAWebReportingTokenConstants").REPORTING_TOKEN_VERSION.V3
          ? e <= o("WAWebMessagingGatingUtils").getSenderReportingTokenVersion()
          : e <=
            o(
              "WAWebReportingTokenContent",
            ).getLatestReportingTokenExclusionVersion();
    }
    function X(e) {
      var t,
        n,
        a = e.id.id + "DEBUG",
        i = e.id.remote,
        l = {
          author: (t = v(e)) != null ? t : e.from,
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
    function Y(e) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield Z(e);
          return t == null ? void 0 : t.messageSecret;
        })),
        J.apply(this, arguments)
      );
    }
    function Z(e) {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e == null) return null;
          var t = yield o("WAWebSchemaMessage")
            .getMessageTable()
            .get(e.toString());
          return t != null
            ? o("WAWebDBMessageSerialization").messageFromDbRow(t)
            : null;
        })),
        ee.apply(this, arguments)
      );
    }
    ((l.REPORTING_TOKEN_SIZE = _),
      (l.REPORTING_TOKEN_KEY_SIZE = f),
      (l.REPORTING_TOKEN_STORAGE_SIZE = g),
      (l.REPORTING_TOKEN_INVALID_STORAGE_SIZE = h),
      (l.genReportingTokenKeyFromMessageSecret = E),
      (l.getRemoteJidOnReceiverSide = I),
      (l.getMediaReportingTokenContent = D),
      (l.genReportingToken = x),
      (l.calculateSenderReportingTokenContent = N),
      (l.genReportingTokenBody = M),
      (l.genReportingTokenBodyForStanza = A),
      (l.genClientReportingTokenMixinArgs = O),
      (l.validateReportingTokenInfo = q),
      (l.showDebugPlaceholderForReportingTokenMismatch = K),
      (l.isSupportedReceiveVersion = Q),
      (l.genDebugMsgInfo = X));
  },
  98,
);
