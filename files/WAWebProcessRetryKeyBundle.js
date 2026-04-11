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
    "WAWebSchemaMessage",
    "WAWebSendMsgTypes",
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
    var e, s, u, c, d, m, p, _;
    function f(e, t, n, r, o, a) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i, l, c) {
            var d = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
              m = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              p = a.isLid() || i ? d : m,
              _ = new (r("WAWebMsgKey"))({
                id: t,
                remote: n,
                fromMe: !0,
                participant: n.isUser() ? void 0 : p,
              }),
              f,
              g,
              h,
              y = yield o("WAWebAddonRetryRequestUtils").getSentAddonMsgRecord(
                _,
              );
            if (y != null)
              ((h = c == null ? void 0 : c.sentAddonRowId),
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
              ((h = c == null ? void 0 : c.rowId),
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
                a,
                h,
                g,
              ),
              R =
                S ===
                o("WAWebApiMessageInfoStore").RetryEligibilityResult
                  .INELIGIBLE_RECORD_MISSING,
              L = R
                ? o("WAWebApiContact").getAlternateDeviceWid(
                    o("WAWebWidFactory").createDeviceWidFromWidOrThrow(a),
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
                  t,
                  String(a),
                  S,
                )
                .tags("messaging"));
            var E = o("WAWebWamEnumRetryRejectReason").RETRY_REJECT_REASON
                .OTHER,
              k = !1;
            switch (
              (f.data.type === o("WAWebMsgType").MSG_TYPE.REVOKED &&
                ((k = !0),
                (f.data.type = "protocol"),
                (f.data.subtype =
                  f.data.subtype === "admin"
                    ? "admin_revoke"
                    : "sender_revoke")),
              S)
            ) {
              case o("WAWebApiMessageInfoStore").RetryEligibilityResult
                .ELIGIBLE:
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
                E = o("WAWebWamEnumRetryRejectReason").RETRY_REJECT_REASON
                  .OTHER;
                break;
            }
            var I = new (o(
                "WAWebE2eRetryRejectWamEvent",
              ).E2eRetryRejectWamEvent)({
                senderDeviceType: a.isCompanion()
                  ? o("WAWebWamEnumDeviceType").DEVICE_TYPE.COMPANION
                  : o("WAWebWamEnumDeviceType").DEVICE_TYPE.PRIMARY,
                messageType: o("WAWebWamMsgUtils").getWamMessageType(f.data),
                msgRetryCount: l,
                retryRevoke: k,
                retryRejectReason: E,
              }),
              T = o("WAWebWamMsgUtils").getWamE2eSenderType(a);
            return (
              T != null && (I.e2eSenderType = T),
              a.isHosted() &&
                (I.encryptionType = o(
                  "WAWebWamEnumEncryptionTypeCode",
                ).ENCRYPTION_TYPE_CODE.COEX),
              I.commit(),
              null
            );
          },
        )),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n, r, o, a) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i) {
            if (n == null || !e || (e.type === "regular_retry" && !e.key))
              return (
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "processKeyBundle: skip due to missing key bundle",
                    ])),
                ),
                !1
              );
            if (a) {
              if (r == null)
                return (
                  o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "processKeyBundle: missing session for retry",
                      ])),
                  ),
                  yield o("WAWebSignal").Session.deleteRemoteInfo(t),
                  !1
                );
              if (r !== n)
                return (
                  o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "processKeyBundle: del session, reg mismatch saved=",
                        " recv=",
                        "",
                      ])),
                    r,
                    n,
                  ),
                  yield o("WAWebSignal").Session.deleteRemoteInfo(t),
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
            return (
              yield o("WAWebSignal").Session.createSignalSession(
                {
                  wid: t,
                  regId: n,
                  identity: e.identity,
                  deviceIdentity: e.deviceIdentity,
                  key: e.key,
                  skey: e.skey,
                },
                i,
              ),
              !0
            );
          },
        )),
        y.apply(this, arguments)
      );
    }
    ((l.getMsgIfAuthorized = f), (l.processKeyBundle = h));
  },
  98,
);
