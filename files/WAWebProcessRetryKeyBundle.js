__d(
  "WAWebProcessRetryKeyBundle",
  [
    "WALogger",
    "WAWebAddonRetryRequestUtils",
    "WAWebApiContact",
    "WAWebApiMessageInfoStore",
    "WAWebDBMessageSerialization",
    "WAWebE2eRetryRejectWamEvent",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebPQGatingUtils",
    "WAWebSchemaMessage",
    "WAWebSendMsgTypes",
    "WAWebSessionScope",
    "WAWebSessionScopeWamUtils",
    "WAWebSignal",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumDeviceType",
    "WAWebWamEnumEncryptionTypeCode",
    "WAWebWamEnumRetryRejectReason",
    "WAWebWamMsgUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g;
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.chat,
            a = t.identity,
            i = t.originalMsgId,
            l = t.requester,
            c = t.retryCount,
            d = t.sessionScope,
            m = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            p = m,
            _ = new (r("WAWebMsgKey"))({
              id: i,
              remote: n,
              fromMe: !0,
              participant: n.isUser() ? void 0 : p,
            }),
            f,
            g,
            h,
            y = yield o("WAWebAddonRetryRequestUtils").getSentAddonMsgRecord(_);
          if (y != null)
            ((h = a == null ? void 0 : a.sentAddonRowId),
              (g = y.selfMsgRow.rowId),
              (f = {
                type: o("WAWebSendMsgTypes").SendMessageRecordType.Addon,
                data: y.msgData,
              }));
          else {
            var C = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .get(String(_));
            if (!C) {
              var b = o("WAWebLidMigrationUtils").getAlternateMsgKey(_);
              if (
                (b &&
                  (C = yield o("WAWebSchemaMessage")
                    .getMessageTable()
                    .get(String(b))),
                !C)
              )
                return (
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "getMsgIfAuthorized: can not find msg ",
                        ".",
                      ])),
                    _.toString(),
                  ),
                  null
                );
            }
            ((h = a == null ? void 0 : a.rowId),
              (g =
                C.type === o("WAWebMsgType").MSG_TYPE.REVOKED
                  ? C.protocolMessageRowId
                  : C.rowId));
            var v = new (o("WAWebMsgModel").Msg)(
              o("WAWebDBMessageSerialization").messageFromDbRow(C),
            );
            f = {
              type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
              data: v,
            };
          }
          if (g == null)
            return (
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "getMsgIfAuthorized: msg missing rowId ",
                    ".",
                  ])),
                _.toString(),
              ),
              null
            );
          var S = yield o("WAWebApiMessageInfoStore").isRetryEligible(
              _,
              l,
              h,
              g,
            ),
            R =
              S ===
              o("WAWebApiMessageInfoStore").RetryEligibilityResult
                .INELIGIBLE_RECORD_MISSING,
            L = R
              ? o("WAWebApiContact").getAlternateDeviceWid(
                  o("WAWebWidFactory").createDeviceWidFromWidOrThrow(l),
                )
              : null;
          (L &&
            (S = yield o("WAWebApiMessageInfoStore").isRetryEligible(
              _,
              L,
              h,
              g,
            )),
            f.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message &&
              (yield f.data.waitForPrep()),
            o("WALogger")
              .LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "getMsgIfAuthorized: ",
                    ", ",
                    " retry eligibility ",
                    "",
                  ])),
                i,
                String(l),
                S,
              )
              .tags("messaging"));
          var E = o("WAWebWamEnumRetryRejectReason").RETRY_REJECT_REASON.OTHER,
            k = !1;
          switch (
            (f.data.type === o("WAWebMsgType").MSG_TYPE.REVOKED &&
              ((k = !0),
              (f.data.type = "protocol"),
              (f.data.subtype =
                f.data.subtype === "admin" ? "admin_revoke" : "sender_revoke")),
            S)
          ) {
            case o("WAWebApiMessageInfoStore").RetryEligibilityResult.ELIGIBLE:
              return f;
            case o("WAWebApiMessageInfoStore").RetryEligibilityResult
              .INELIGIBLE_ALREADY_DELIVERED:
              E = o("WAWebWamEnumRetryRejectReason").RETRY_REJECT_REASON
                .DOUBLE_CHECKMARK;
              break;
            case o("WAWebApiMessageInfoStore").RetryEligibilityResult
              .INELIGIBLE_CHANGED_IDENTITY:
              E = o("WAWebWamEnumRetryRejectReason").RETRY_REJECT_REASON
                .IDENTITY_CHANGE;
              break;
            default:
              E = o("WAWebWamEnumRetryRejectReason").RETRY_REJECT_REASON.OTHER;
              break;
          }
          var I = new (o("WAWebE2eRetryRejectWamEvent").E2eRetryRejectWamEvent)(
              {
                senderDeviceType: l.isCompanion()
                  ? o("WAWebWamEnumDeviceType").DEVICE_TYPE.COMPANION
                  : o("WAWebWamEnumDeviceType").DEVICE_TYPE.PRIMARY,
                messageType: o("WAWebWamMsgUtils").getWamMessageType(f.data),
                msgRetryCount: c,
                retryRevoke: k,
                retryRejectReason: E,
                sessionScope: o(
                  "WAWebSessionScopeWamUtils",
                ).sessionScopeToWamType(d),
              },
            ),
            T = o("WAWebWamMsgUtils").getWamE2eSenderType(l);
          return (
            T != null && (I.e2eSenderType = T),
            l.isHosted() &&
              (I.encryptionType = o(
                "WAWebWamEnumEncryptionTypeCode",
              ).ENCRYPTION_TYPE_CODE.COEX),
            I.commit(),
            null
          );
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.is1on1,
            n = e.keyBundle,
            r = e.offline,
            a = e.remoteRegId,
            i = e.requester,
            l = e.savedRegId,
            s = e.sessionScope;
          if (a == null || !n || (n.type === "regular_retry" && !n.key))
            return (
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "processKeyBundle: skip due to missing key bundle",
                  ])),
              ),
              !1
            );
          if (r) {
            if (l == null)
              return (
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "processKeyBundle: missing session for retry",
                    ])),
                ),
                yield o("WAWebSignal").Session.deleteRemoteInfo(i),
                !1
              );
            if (l !== a)
              return (
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "processKeyBundle: del session, reg mismatch saved=",
                      " recv=",
                      "",
                    ])),
                  l,
                  a,
                ),
                yield o("WAWebSignal").Session.deleteRemoteInfo(i),
                !1
              );
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "processKeyBundle: update session w/ retry bundle (offline)",
                ])),
            );
          } else
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "processKeyBundle: update session w/ retry bundle",
                ])),
            );
          if (
            (yield o("WAWebSignal").Session.createSignalSession(
              {
                wid: i,
                regId: a,
                identity: n.identity,
                deviceIdentity: n.deviceIdentity,
                key: n.key,
                skey: n.skey,
              },
              s,
            ),
            n.kyberKey != null &&
              t === !0 &&
              (s == null ||
                s === o("WAWebSessionScope").SessionScope.DEFAULT) &&
              !i.isBot() &&
              !i.isFbidBot() &&
              !i.isHosted() &&
              o("WAWebPQGatingUtils").isPq1on1MessageEnabled())
          )
            try {
              (yield o("WAWebSignal").Session.createSignalSession(
                {
                  wid: i,
                  regId: a,
                  identity: n.identity,
                  deviceIdentity: n.deviceIdentity,
                  key: n.key,
                  skey: n.skey,
                  kyberKey: n.kyberKey,
                },
                o("WAWebSessionScope").SessionScope.PQ,
              ),
                o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "processKeyBundle: established PQXDH session from retry bundle",
                    ])),
                ));
            } catch (e) {
              o("WALogger")
                .WARN(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "processKeyBundle: failed to build PQXDH session from retry bundle: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("retry-pqxdh-session-fail");
            }
          return !0;
        })),
        b.apply(this, arguments)
      );
    }
    ((l.getMsgIfAuthorized = h), (l.processKeyBundle = C));
  },
  98,
);
