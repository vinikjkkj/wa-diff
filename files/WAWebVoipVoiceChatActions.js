__d(
  "WAWebVoipVoiceChatActions",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c;
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = 0);
          var n = o(
            "WAWebVoipOngoingCallCollection",
          ).WAWebVoipOngoingCallCollection.getByChat(e);
          if (n != null && o("WAWebMsgGetters").getIsVoiceChat(n) === !0) {
            (o("WAWebVoipCallIdProvider").resetPendingCallId(),
              yield o("WAWebVoipStartCall").joinOngoingWAWebVoipGroupCallPN({
                callId: n.id.id,
                chat: e,
                isVideo: !1,
              }));
            return;
          }
          if (
            yield o("WAWebVoipCallBlockedModals").showCallBlockedModalIfNeeded()
          ) {
            o("WAWebVoipCallIdProvider").resetPendingCallId();
            return;
          }
          yield f(e, t);
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t;
          if (
            ((t = r("WAWebCallCollection").activeCall) == null
              ? void 0
              : t.isVoiceChat) !== !0 ||
            !o("WAWebVoipGatingUtils").isWebVoiceChatEnabled()
          )
            return !1;
          var n = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          if ((n == null ? void 0 : n.type) !== "web") return !1;
          var a = yield n.sendWaveAll();
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
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: startWAWebVoipVoiceChat: starting",
              ])),
          );
          var a = o("WAWebVoipCallIdProvider").consumeOrGenerateCallId();
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
            o(
              "WAWebVoipStartCallPermissions",
            ).preloadStartCallPermissionDialog());
          var i = yield o("WAWebVoipStartCall").beginOutgoingCallWithMiniplayer(
            { isGroup: !0, isJoin: !1, isVideo: !1 },
          );
          if (i.status !== "not_ready") {
            var l = i.abortController.signal,
              d = yield o(
                "WAWebVoipStartCallPermissions",
              ).checkStartCallPermissions(!1, l);
            if (d == null) {
              l.aborted ||
                o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall();
              return;
            }
            var m = o("WAWebVoipVoiceChatUtils").loadVoiceChatMemberWids(e.id),
              p = (c || (c = n("Promise"))).all([
                o("WAWebVoipStackInterface").getVoipStackInterface(),
                m,
                m.then(o("WAWebVoipVoiceChatUtils").getVoiceChatGroupPhash),
                o("WAWebVoipStartCall").preloadVoipBundleSafely(
                  o("WAWebVoipUiLoadable").requireBundle,
                  "voip-start-voice-chat-preload-ui",
                ),
              ]);
            p.catch(r("WAWebNoop"));
            try {
              var _ = yield r("WAPromiseRaceAbort")(p, l),
                f = _[0],
                g = _[1],
                h = _[2];
              if (
                (f == null ? void 0 : f.type) !== "web" ||
                !o("WAWebVoipGatingUtils").isWebVoiceChatEnabled()
              )
                throw r("err")(
                  "voip: startWAWebVoipVoiceChat: voice chats are not supported",
                );
              if (h == null)
                throw r("err")(
                  "voip: startWAWebVoipVoiceChat: a group member has no LID",
                );
              (o("WAWebCoreActionsODS").logCallAttempt(),
                o("WAWebCoreActionsODS").logCallOutgoingGroupAudio(),
                o("WAWebVoipStartCallPermissions").markCallStart(a, d));
              var y = yield f.startVoiceChat({
                callId: a,
                groupJid: e.id.toString({ legacy: !0 }),
                groupPhash: h,
                groupSize: g.length,
                mute: !1,
              });
              if (y !== 0)
                throw r("err")(
                  "voip: startWAWebVoipVoiceChat: start failed with status %s",
                  y,
                );
            } catch (e) {
              if (l.aborted) {
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
        })),
        g.apply(this, arguments)
      );
    }
    ((l.startWAWebVoipVoiceChat = d), (l.waveAllToVoiceChat = p));
  },
  98,
);
