__d(
  "WAWebVoipBackendCallLogTargetResolver",
  [
    "WALogger",
    "WAWebFindChat",
    "WAWebLid1X1MigrationGating",
    "WAWebMsgKey",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWaitForInitialChatsSynced",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s(t) {
      var n = t.callCreatorWid,
        a = t.callId,
        i = t.groupJid,
        l = t.isCallLink,
        s = t.peerWid,
        c = t.participants,
        d = c === void 0 ? [] : c,
        m,
        p,
        _ = o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        f = await u({
          callDestinationWid: o("WAWebWidFactory").asUserWidOrThrow(n),
        }),
        g = o("WAWebUserPrefsMeUser").isMeAccount(f),
        h = d.filter(function (e) {
          return e != null && !o("WAWebUserPrefsMeUser").isMeAccount(e);
        });
      if (i != null) ((m = i), (p = f));
      else if (!g) m = f;
      else if (h.length === 1 && l !== !0) {
        var y = h[0];
        m = await u({
          callDestinationWid: o("WAWebWidFactory").asUserWidOrThrow(y),
        });
      } else
        s != null
          ? (m = await u({
              callDestinationWid: o("WAWebWidFactory").asUserWidOrThrow(s),
            }))
          : (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] getCallLogTargetDetails: msg -> self chat",
                ])),
            ),
            (m = f),
            (_ =
              h.length > 0
                ? o("WAWebViewMode.flow").ViewModeType
                    .CALL_LOG_AD_HOC_GROUP_CALL
                : o("WAWebViewMode.flow").ViewModeType.HIDDEN));
      return {
        msgKeyId: a != null ? a : await r("WAWebMsgKey").newId(),
        fromMe: g,
        callCreatorUserWid: f,
        chatId: m,
        participant: p,
        viewMode: _,
      };
    }
    async function u(e) {
      var t = e.callDestinationWid,
        n = e.groupJid,
        r = t,
        a =
          !r.isLid() &&
          o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated(),
        i = !n && (r.isLid() || a);
      if (i) {
        o("WAWebRuntimeEnvironmentUtils").isWorker() ||
          (await o(
            "WAWebWaitForInitialChatsSynced",
          ).waitForInitialChatsSynced());
        var l = await o("WAWebFindChat").findOrCreateLatestChat(
            t,
            "voipCallLog",
          ),
          s = l.chat;
        r = o("WAWebWidFactory").asUserWidOrThrow(s.id);
      }
      return r;
    }
    ((l.getCallLogTargetDetails = s), (l.get1x1CallLidOrPnDestination = u));
  },
  98,
);
