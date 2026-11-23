__d(
  "WAWebProcessRetryKeyBundle",
  [
    "WAJids",
    "WALogger",
    "WAWebAddonRetryRequestUtils",
    "WAWebAeaAccountState",
    "WAWebApiContact",
    "WAWebApiMessageInfoStore",
    "WAWebCoexV2RetryAuthorization",
    "WAWebDBMessageSerialization",
    "WAWebE2eRetryRejectWamEvent",
    "WAWebLidMigrationUtils",
    "WAWebManageE2ESessionsJob",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebPQGatingUtils",
    "WAWebProcessKeyBundle",
    "WAWebSchemaMessage",
    "WAWebSendMsgTypes",
    "WAWebSessionScope",
    "WAWebSessionScopeWamUtils",
    "WAWebSignal",
    "WAWebUserUtils",
    "WAWebWamEnumDeviceType",
    "WAWebWamEnumEncryptionTypeCode",
    "WAWebWamEnumPqFallbackReason",
    "WAWebWamEnumRetryRejectReason",
    "WAWebWamMsgUtils",
    "WAWebWidFactory",
    "cr:17732",
    "cr:510",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y;
    async function C(e, t) {
      var n,
        a = new (r("WAWebMsgKey"))({
          id: t,
          remote: e,
          fromMe: !0,
          participant: e.isUser()
            ? void 0
            : o("WAWebUserUtils").getMeLidUserOrThrow(),
        }),
        i = o("WAWebLidMigrationUtils").getAlternateMsgKey(a),
        l =
          (n = await o("WAWebAddonRetryRequestUtils").getSentAddonMsgRecord(
            a,
          )) != null
            ? n
            : i != null
              ? await o("WAWebAddonRetryRequestUtils").getSentAddonMsgRecord(i)
              : null;
      if (l != null)
        return {
          msgKey: a,
          messageRowId: l.selfMsgRow.rowId,
          msgRecord: {
            type: o("WAWebSendMsgTypes").SendMessageRecordType.Addon,
            data: l.msgData,
          },
        };
      var s = await o("WAWebSchemaMessage").getMessageTable().get(String(a));
      return (
        s == null &&
          i != null &&
          (s = await o("WAWebSchemaMessage").getMessageTable().get(String(i))),
        s == null
          ? null
          : {
              msgKey: a,
              messageRowId:
                s.type === o("WAWebMsgType").MSG_TYPE.REVOKED
                  ? s.protocolMessageRowId
                  : s.rowId,
              msgRecord: {
                type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
                data: new (o("WAWebMsgModel").Msg)(
                  o("WAWebDBMessageSerialization").messageFromDbRow(s),
                ),
              },
            }
      );
    }
    async function b(e, t) {
      return e.isGroup() ? C(e, t) : null;
    }
    async function v(t) {
      var n = t.chat,
        r = t.identity,
        a = t.isPq,
        i = t.loadedSentMessage,
        l = t.originalMsgId,
        c = t.requester,
        d = t.retryCount,
        m = t.sessionScope,
        p = i != null ? i : await C(n, l);
      if (p == null)
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "getMsgIfAuthorized: can not find msg ",
                ".",
              ])),
            l,
          ),
          null
        );
      var _ = p.messageRowId,
        f = p.msgKey,
        g = p.msgRecord,
        h =
          g.type === o("WAWebSendMsgTypes").SendMessageRecordType.Addon
            ? r == null
              ? void 0
              : r.sentAddonRowId
            : r == null
              ? void 0
              : r.rowId;
      if (_ == null)
        return (
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "getMsgIfAuthorized: msg missing rowId ",
                ".",
              ])),
            f.toString(),
          ),
          null
        );
      var y = await o(
          "WAWebCoexV2RetryAuthorization",
        ).getCoexV2RelayRetryEligibility(c, l),
        b =
          y != null
            ? { hasAdditionalRetryTargets: !1, retryEligibility: y }
            : await o(
                "WAWebApiMessageInfoStore",
              ).getRetryEligibilityWithMetadata({
                identityRowId: h,
                messageRowId: _,
                msgKey: f,
                receiver: c,
              }),
        v = b.hasAdditionalRetryTargets,
        R = b.retryEligibility,
        L =
          R ===
          o("WAWebApiMessageInfoStore").RetryEligibilityResult
            .INELIGIBLE_RECORD_MISSING,
        E = L
          ? o("WAWebApiContact").getAlternateDeviceWid(
              o("WAWebWidFactory").createDeviceWidFromWidOrThrow(c),
            )
          : null;
      if (E) {
        var k = await o(
          "WAWebApiMessageInfoStore",
        ).getRetryEligibilityWithMetadata({
          identityRowId: h,
          messageRowId: _,
          msgKey: f,
          receiver: E,
        });
        ((v = k.hasAdditionalRetryTargets), (R = k.retryEligibility));
      }
      (g.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message &&
        (await g.data.waitForPrep()),
        (R = S(R, g)),
        o("WALogger")
          .LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "getMsgIfAuthorized: ",
                ", ",
                " retry eligibility ",
                "",
              ])),
            l,
            String(c),
            R,
          )
          .tags("messaging"));
      var I = o("WAWebWamEnumRetryRejectReason").RETRY_REJECT_REASON.OTHER,
        T = !1;
      switch (
        (g.data.type === o("WAWebMsgType").MSG_TYPE.REVOKED &&
          ((T = !0),
          (g.data.type = "protocol"),
          (g.data.subtype =
            g.data.subtype === "admin" ? "admin_revoke" : "sender_revoke")),
        R)
      ) {
        case o("WAWebApiMessageInfoStore").RetryEligibilityResult.ELIGIBLE:
          return {
            msgRecord: g,
            retryContext: { hasAdditionalRetryTargets: v },
            isIdentityChangedSinceSend: y == null && (h == null || _ < h),
          };
        case o("WAWebApiMessageInfoStore").RetryEligibilityResult
          .INELIGIBLE_ALREADY_DELIVERED:
          I = o("WAWebWamEnumRetryRejectReason").RETRY_REJECT_REASON
            .DOUBLE_CHECKMARK;
          break;
        case o("WAWebApiMessageInfoStore").RetryEligibilityResult
          .INELIGIBLE_CHANGED_IDENTITY:
          I = o("WAWebWamEnumRetryRejectReason").RETRY_REJECT_REASON
            .IDENTITY_CHANGE;
          break;
        case o("WAWebApiMessageInfoStore").RetryEligibilityResult
          .INELIGIBLE_NOT_SENDING_DEVICE:
          I = o("WAWebWamEnumRetryRejectReason").RETRY_REJECT_REASON
            .DEVICE_NOT_RECIPIENT;
          break;
        default:
          I = o("WAWebWamEnumRetryRejectReason").RETRY_REJECT_REASON.OTHER;
          break;
      }
      var D = new (o("WAWebE2eRetryRejectWamEvent").E2eRetryRejectWamEvent)({
          isPq: a === !0,
          pqFallbackReason:
            a === !1
              ? o("WAWebWamEnumPqFallbackReason").PQ_FALLBACK_REASON
                  .PQ_NO_SESSION_REGULAR_FALLBACK
              : void 0,
          senderDeviceType: c.isCompanion()
            ? o("WAWebWamEnumDeviceType").DEVICE_TYPE.COMPANION
            : o("WAWebWamEnumDeviceType").DEVICE_TYPE.PRIMARY,
          messageType: o("WAWebWamMsgUtils").getWamMessageType(g.data),
          msgRetryCount: d,
          retryRevoke: T,
          retryRejectReason: I,
          sessionScope: o("WAWebSessionScopeWamUtils").sessionScopeToWamType(m),
        }),
        x = o("WAWebWamMsgUtils").getWamE2eSenderType(c);
      return (
        x != null && (D.e2eSenderType = x),
        c.isHosted() &&
          (D.encryptionType = o(
            "WAWebWamEnumEncryptionTypeCode",
          ).ENCRYPTION_TYPE_CODE.COEX),
        D.commit(),
        null
      );
    }
    function S(e, t) {
      return e ===
        o("WAWebApiMessageInfoStore").RetryEligibilityResult.ELIGIBLE &&
        t.type === o("WAWebSendMsgTypes").SendMessageRecordType.Message &&
        t.data.type !== o("WAWebMsgType").MSG_TYPE.REVOKED &&
        o("WAWebMsgGetters").getIsStatus(t.data) &&
        t.data.local !== !0 &&
        r("justknobx")._("7583")
        ? o("WAWebApiMessageInfoStore").RetryEligibilityResult
            .INELIGIBLE_NOT_SENDING_DEVICE
        : e;
    }
    async function R(e) {
      var t = e.is1on1,
        r = e.keyBundle,
        a = e.offline,
        i = e.remoteRegId,
        l = e.requester,
        s = e.savedRegId,
        u = e.sessionScope;
      if (i == null || !r || (r.type === "regular_retry" && !r.key))
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
        if (s == null)
          return (
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "processKeyBundle: missing session for retry",
                ])),
            ),
            await I(l),
            !1
          );
        if (s !== i)
          return (
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "processKeyBundle: del session, reg mismatch saved=",
                  " recv=",
                  "",
                ])),
              s,
              i,
            ),
            await I(l),
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
      var g = await L(l, r);
      return (n("cr:510") == null
        ? void 0
        : n("cr:510").shouldRejectAeaKeyResponse(g)) === !0
        ? (o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "[aea] rejected retry key bundle for ",
                "",
              ])),
            l.toLogString(),
          ),
          !1)
        : (await o("WAWebSignal").Session.createSignalSession(
            {
              wid: l,
              regId: i,
              identity: r.identity,
              deviceIdentity: r.deviceIdentity,
              key: r.key,
              skey: r.skey,
            },
            u,
          ),
          await o("WAWebProcessKeyBundle").commitAeaKeyResponse(g),
          E({ is1on1: t, requester: l, sessionScope: u }) &&
            (await k({ keyBundle: r, regId: i, requester: l })),
          !0);
    }
    async function L(e, t) {
      var n = t.aeaEvidence,
        r = t.identity;
      if ((n == null ? void 0 : n.signedClaim) == null) return null;
      var a = await o("WAWebProcessKeyBundle").prepareAeaKeyResponses([
          { wid: e, identity: r, aeaEvidence: n },
        ]),
        i = a[0],
        l = i == null ? void 0 : i.evaluation.decision;
      return (l == null ? void 0 : l.kind) === "store" &&
        l.accountState === o("WAWebAeaAccountState").AeaAccountState.E2EE
        ? null
        : i;
    }
    function E(e) {
      var t = e.is1on1,
        n = e.requester,
        r = e.sessionScope;
      return (
        t === !0 &&
        (r == null || r === o("WAWebSessionScope").SessionScope.DEFAULT) &&
        !n.isBot() &&
        !n.isFbidBot() &&
        !n.isHosted() &&
        o("WAWebPQGatingUtils").isPq1on1MessageEnabled()
      );
    }
    async function k(e) {
      var t = e.keyBundle,
        n = e.regId,
        r = e.requester,
        a = t.kyberKey;
      try {
        var i = await o("WAWebManageE2ESessionsJob").getSignalSessionWids([r]),
          l = i.pq;
        if (
          (l.length > 0 &&
            (await o("WAWebSignal").Session.deleteRemoteSession(
              r,
              o("WAWebSessionScope").SessionScope.PQ,
            ),
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "processKeyBundle: dropped PQ session, retry bundle has PQ prekey: ",
                  "",
                ])),
              String(a != null),
            )),
          a == null)
        )
          return;
        (await o("WAWebSignal").Session.createSignalSession(
          {
            wid: r,
            regId: n,
            identity: t.identity,
            deviceIdentity: t.deviceIdentity,
            key: t.key,
            skey: t.skey,
            kyberKey: a,
          },
          o("WAWebSessionScope").SessionScope.PQ,
        ),
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "processKeyBundle: established PQXDH session from retry bundle",
              ])),
          ));
      } catch (e) {
        o("WALogger")
          .WARN(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "processKeyBundle: failed to build PQXDH session from retry bundle: ",
                "",
              ])),
            e,
          )
          .sendLogs("retry-pqxdh-session-fail");
      }
    }
    async function I(e) {
      var t;
      (((t = e.device) != null ? t : o("WAJids").DEFAULT_DEVICE_ID) ===
        o("WAJids").DEFAULT_DEVICE_ID &&
        (await (n("cr:17732") == null
          ? void 0
          : n("cr:17732").saveAeaIdentityChangeBaseline(e))),
        await o("WAWebSignal").Session.deleteRemoteInfo(e));
    }
    ((l.loadGroupSentMessage = b),
      (l.getMsgIfAuthorized = v),
      (l.processKeyBundle = R));
  },
  98,
);
