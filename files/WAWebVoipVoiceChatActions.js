__d(
  "WAWebVoipVoiceChatActions",
  [
    "WALogger",
    "WAPromiseRaceAbort",
    "WAWebCallCollection",
    "WAWebCoreActionsODS",
    "WAWebMsgGetters",
    "WAWebNoop",
    "WAWebVoipActivityTracker",
    "WAWebVoipCallBlockedModals",
    "WAWebVoipCallFromUiStore",
    "WAWebVoipCallIdProvider",
    "WAWebVoipCancelOutgoingCall",
    "WAWebVoipGatingUtils",
    "WAWebVoipOngoingCallCollection",
    "WAWebVoipStackInterface",
    "WAWebVoipStartCall",
    "WAWebVoipStartCallPermissions",
    "WAWebVoipUiLoadable",
    "WAWebVoipVoiceChatUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    async function c(e, t) {
      t === void 0 && (t = 0);
      var n = o(
        "WAWebVoipOngoingCallCollection",
      ).WAWebVoipOngoingCallCollection.getByChat(e);
      if (n != null && o("WAWebMsgGetters").getIsVoiceChat(n) === !0) {
        (o("WAWebVoipCallIdProvider").resetPendingCallId(),
          await o("WAWebVoipStartCall").joinOngoingWAWebVoipGroupCallPN({
            callId: n.id.id,
            chat: e,
            isVideo: !1,
          }));
        return;
      }
      if (
        await o("WAWebVoipCallBlockedModals").showCallBlockedModalIfNeeded()
      ) {
        o("WAWebVoipCallIdProvider").resetPendingCallId();
        return;
      }
      await m(e, t);
    }
    async function d() {
      var t;
      if (
        ((t = r("WAWebCallCollection").activeCall) == null
          ? void 0
          : t.isVoiceChat) !== !0 ||
        !o("WAWebVoipGatingUtils").isWebVoiceChatEnabled()
      )
        return !1;
      var n = await o("WAWebVoipStackInterface").getVoipStackInterface();
      if ((n == null ? void 0 : n.type) !== "web") return !1;
      var a = await n.sendWaveAll();
      return a !== 0
        ? (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: waveAllToVoiceChat: failed with status ",
                  "",
                ])),
              a,
            )
            .sendLogs("voip-voice-chat-wave-all-failed"),
          !1)
        : !0;
    }
    async function m(e, t) {
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "voip: startWAWebVoipVoiceChat: starting",
          ])),
      );
      var n = o("WAWebVoipCallIdProvider").consumeOrGenerateCallId();
      (o("WAWebVoipCallFromUiStore").setCallFromUi(t),
        o("WAWebVoipActivityTracker").startActivityTracking(),
        o("WAWebVoipActivityTracker").startUiActivityTracking(),
        o("WAWebVoipActivityTracker").trackActivity(
          o("WAWebVoipActivityTracker").VoipActivity
            .START_OUTGOING_AUDIO_GROUP_CALL,
        ),
        o("WAWebVoipActivityTracker").trackUiActivity(
          o("WAWebVoipActivityTracker").VoipUiActivity
            .USER_INITIATE_OUTGOING_CALL,
        ),
        o("WAWebVoipStartCallPermissions").preloadStartCallPermissionDialog());
      var a = await o("WAWebVoipStartCall").beginOutgoingCallWithMiniplayer({
        isGroup: !0,
        isJoin: !1,
        isVideo: !1,
      });
      if (a.status !== "not_ready") {
        var i = a.abortController.signal,
          l = await o(
            "WAWebVoipStartCallPermissions",
          ).checkStartCallPermissions(!1, i);
        if (l == null) {
          i.aborted ||
            o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall();
          return;
        }
        var c = o("WAWebVoipVoiceChatUtils").loadVoiceChatMemberWids(e.id),
          d = Promise.all([
            o("WAWebVoipStackInterface").getVoipStackInterface(),
            c,
            c.then(o("WAWebVoipVoiceChatUtils").getVoiceChatGroupPhash),
            o("WAWebVoipStartCall").preloadVoipBundleSafely(
              o("WAWebVoipUiLoadable").requireBundle,
              "voip-start-voice-chat-preload-ui",
            ),
          ]);
        d.catch(r("WAWebNoop"));
        try {
          var m = await r("WAPromiseRaceAbort")(d, i),
            p = m[0],
            _ = m[1],
            f = m[2];
          if (
            (p == null ? void 0 : p.type) !== "web" ||
            !o("WAWebVoipGatingUtils").isWebVoiceChatEnabled()
          )
            throw r("err")(
              "voip: startWAWebVoipVoiceChat: voice chats are not supported",
            );
          if (f == null)
            throw r("err")(
              "voip: startWAWebVoipVoiceChat: a group member has no LID",
            );
          (o("WAWebCoreActionsODS").logCallAttempt(),
            o("WAWebCoreActionsODS").logCallOutgoingGroupAudio(),
            o("WAWebVoipStartCallPermissions").markCallStart(n, l));
          var g = await p.startVoiceChat({
            callId: n,
            groupJid: e.id.toString({ legacy: !0 }),
            groupPhash: f,
            groupSize: _.length,
            mute: !1,
          });
          if (g !== 0)
            throw r("err")(
              "voip: startWAWebVoipVoiceChat: start failed with status %s",
              g,
            );
        } catch (e) {
          if (i.aborted) {
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: startWAWebVoipVoiceChat: cancelled before signaling",
                ])),
            );
            return;
          }
          throw (
            o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall(),
            e
          );
        }
      }
    }
    ((l.startWAWebVoipVoiceChat = c), (l.waveAllToVoiceChat = d));
  },
  98,
);
