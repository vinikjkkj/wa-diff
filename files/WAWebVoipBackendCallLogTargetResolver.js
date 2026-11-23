__d(
  "WAWebVoipBackendCallLogTargetResolver",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebContactExternalUserState",
    "WAWebLidMigrationUtils",
    "WAWebMessageProcessUtils",
    "WAWebMsgKey",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebSyncContactJob",
    "WAWebUserUtils",
    "WAWebViewMode.flow",
    "WAWebVoipCallLogMessageTarget",
    "WAWebVoipTransferredCallRegistry",
    "WAWebWaitForInitialChatsSynced",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    async function c(t) {
      var n,
        a,
        i,
        l = t.callCreatorWid,
        s = t.callId,
        u = t.groupJid,
        c = t.isCallLink,
        p = t.peerWid,
        _ = t.participants,
        f = _ === void 0 ? [] : _,
        g,
        h,
        y = o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        C = o("WAWebVoipTransferredCallRegistry").getTransferredCallRoot(s),
        b = await m({
          callDestinationWid: o("WAWebWidFactory").asUserWidOrThrow(
            (n = C == null ? void 0 : C.rootCallCreatorWid) != null ? n : l,
          ),
        }),
        v = o("WAWebUserUtils").isMeAccount(b),
        S = f.filter(function (e) {
          return e != null && !o("WAWebUserUtils").isMeAccount(e);
        });
      if (u != null) ((g = u), (h = b));
      else if (!v) g = b;
      else {
        var R = S.length === 1 ? S[0] : null;
        c !== !0 && R != null && !(await d(R))
          ? (g = await m({
              callDestinationWid: o("WAWebWidFactory").asUserWidOrThrow(R),
            }))
          : c !== !0 && p != null && !(await d(p))
            ? (g = await m({
                callDestinationWid: o("WAWebWidFactory").asUserWidOrThrow(p),
              }))
            : (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] getCallLogTargetDetails: msg -> self chat",
                  ])),
              ),
              (g = b),
              (y =
                S.length > 0 || p != null
                  ? o("WAWebViewMode.flow").ViewModeType
                      .CALL_LOG_AD_HOC_GROUP_CALL
                  : o("WAWebViewMode.flow").ViewModeType.HIDDEN));
      }
      return {
        msgKeyId:
          (a = (i = C == null ? void 0 : C.rootCallId) != null ? i : s) != null
            ? a
            : await r("WAWebMsgKey").newId(),
        fromMe: v,
        callCreatorUserWid: b,
        chatId: g,
        participant: h,
        viewMode: y,
      };
    }
    async function d(e) {
      if (!e.isUser()) return !1;
      try {
        var t;
        return o("WAWebContactExternalUserState").isGuestUser(
          (t = await o("WAWebApiContact").getContactRecord(
            o("WAWebWidFactory").asUserWidOrThrow(e),
          )) == null
            ? void 0
            : t.externalUserState,
        );
      } catch (e) {
        return (
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] isGuest: contact read failed, treating as non-guest",
              ])),
          ),
          !1
        );
      }
    }
    async function m(e) {
      var t = e.callDestinationWid,
        n = e.groupJid;
      if (
        n != null ||
        (o("WAWebRuntimeEnvironmentUtils").isWorker() ||
          (await o(
            "WAWebWaitForInitialChatsSynced",
          ).waitForInitialChatsSynced()),
        !t.isRegularUser())
      )
        return t;
      var r = o("WAWebLidMigrationUtils").toUserLid(t);
      if (
        (r == null &&
          (await o("WAWebSyncContactJob").syncContactListJob([t], !0, "query"),
          (r = o("WAWebLidMigrationUtils").toUserLid(t))),
        r == null)
      )
        return (
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] call log target: no LID after contact sync",
              ])),
          ),
          t
        );
      var a = await o("WAWebMessageProcessUtils").selectChatForOneOnOneMessage({
        lid: r,
      });
      return o("WAWebWidFactory").asUserWidOrThrow(a.chatId);
    }
    async function p(e) {
      var t = e.id.remote;
      if (!t.isRegularUser()) return e;
      var n = o("WAWebLidMigrationUtils").toUserLid(
        o("WAWebWidFactory").asUserWidOrThrow(t),
      );
      if (n == null) return e;
      var r = await o("WAWebMessageProcessUtils").selectChatForOneOnOneMessage({
          lid: n,
        }),
        a = r.chatId;
      return o("WAWebVoipCallLogMessageTarget").withCallLogChatId(e, a);
    }
    ((l.getCallLogTargetDetails = c),
      (l.get1x1CallLidOrPnDestination = m),
      (l.resolveCallLogMessageTarget = p));
  },
  98,
);
