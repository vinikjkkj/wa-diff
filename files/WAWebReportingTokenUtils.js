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
        var r = O(e),
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
        o("WAWebWidToJid").widToJidWithType(O(e)),
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
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
          var a = v(e),
            i = T(e),
            l = i.jidType,
            s = i.remoteJid;
          if (l === "interopUser" || a == null || s == null) return null;
          var u = o(
              "WAWebMessagingGatingUtils",
            ).getSenderReportingTokenVersion(),
            c;
          if (e.reportingTokenContent != null) c = e.reportingTokenContent;
          else {
            var d = o("encodeProtobuf").encodeProtobuf(
                o("WAWebProtobufsE2E.pb").MessageSpec,
                t,
              ),
              m = d.readByteArrayView();
            ((c = o(
              "WAWebReportingTokenContent",
            ).calculateReportingTokenContent(m, u)),
              u <
                o("WAWebReportingTokenConstants").REPORTING_TOKEN_VERSION.V3 &&
                c.length === 0 &&
                o(
                  "WAWebMessagingGatingUtils",
                ).isReportingTokenV3HybridSendingEnabled() &&
                !b.has(e.type) &&
                ((u = o("WAWebReportingTokenConstants").REPORTING_TOKEN_VERSION
                  .V3),
                (c = o(
                  "WAWebReportingTokenContent",
                ).calculateReportingTokenContent(m, u))));
          }
          if (c == null || c.length === 0) return null;
          var p =
            (n = e.messageSecret) != null
              ? n
              : (r = t.messageContextInfo) == null
                ? void 0
                : r.messageSecret;
          if (p == null)
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
              }).commit(),
              null
            );
          var f = yield E({
              messageSecret: p,
              stanzaId: e.id.id,
              senderJid: o("WAWebWidToJid").widToUserJid(
                o("WAWebWidFactory").asUserWidOrThrow(a),
              ),
              remoteJid: s,
            }),
            g = yield o("WACryptoHmac").hmacSha256(
              new Uint8Array(f),
              c != null ? c : new Uint8Array(0),
              _,
            );
          return { version: u, reportingToken: new Uint8Array(g) };
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            var r,
              a = (r = yield x(t, n)) != null ? r : {},
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
                .sendLogs("report-token-unexpected-exception", y),
              null
            );
          }
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t, n) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (e.type === o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE) {
            if (
              o(
                "WAWebGroupHistoryGating",
              ).isGroupHistorySenderReportingTokenEnabled(
                o("WAWebMsgGetters").getRemote(e),
              )
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
          return P(e, t);
        })),
        w.apply(this, arguments)
      );
    }
    function A(e, t) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n,
              r = (n = yield x(e, t)) != null ? n : {},
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
                .sendLogs("report-token-unexpected-exception", y),
              null
            );
          }
        })),
        F.apply(this, arguments)
      );
    }
    function O(e) {
      var t = o("WAWebMsgGetters").getBroadcastId(e);
      if (t != null) return t;
      var n = e.id.remote;
      return n.isRegularUser()
        ? n.isLid()
          ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
          : o("WAWebUserPrefsMeUser").getMeUserOrThrow()
        : n;
    }
    function B(e, t) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            var s;
            if (
              (o("WAWebMsgGetters").getIsEdited(e) &&
                (s = yield z(e.protocolMessageKey)),
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
                    reason: H(i)
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
            var _ = yield q({
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
                reason: H(i)
                  ? o("WAWebWamEnumReportingTokenValidationFailureReason")
                      .REPORTING_TOKEN_VALIDATION_FAILURE_REASON
                      .MISMATCH_REPORTING_TOKEN
                  : o("WAWebWamEnumReportingTokenValidationFailureReason")
                      .REPORTING_TOKEN_VALIDATION_FAILURE_REASON
                      .UNSUPPORTED_VERSION,
                reportingTokenVersion: i,
              }),
              V(i))
            ) {
              var f = G(e);
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
        W.apply(this, arguments)
      );
    }
    function q(e) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        U.apply(this, arguments)
      );
    }
    function V(e) {
      return H(e)
        ? o(
            "WAWebMessagingGatingUtils",
          ).isReportingTokenValidationFailureDebugPlaceholderEnabled()
        : !1;
    }
    function H(e) {
      return e == null
        ? !1
        : e < o("WAWebReportingTokenConstants").REPORTING_TOKEN_VERSION.V3
          ? e <= o("WAWebMessagingGatingUtils").getSenderReportingTokenVersion()
          : e <=
            o(
              "WAWebReportingTokenContent",
            ).getLatestReportingTokenExclusionVersion();
    }
    function G(e) {
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
    function z(e) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e == null) return null;
          var t = yield o("WAWebSchemaMessage")
            .getMessageTable()
            .get(e.toString());
          if (t == null) return null;
          var n = o("WAWebDBMessageSerialization").messageFromDbRow(t);
          return n.messageSecret;
        })),
        j.apply(this, arguments)
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
      (l.genReportingTokenBody = P),
      (l.genReportingTokenBodyForStanza = M),
      (l.genClientReportingTokenMixinArgs = A),
      (l.validateReportingTokenInfo = B),
      (l.showDebugPlaceholderForReportingTokenMismatch = V),
      (l.isSupportedReceiveVersion = H),
      (l.genDebugMsgInfo = G));
  },
  98,
);
