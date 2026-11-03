__d(
  "WAWebVoipWorkerHandler",
  ["WAWebVoipNativeStackTraceLogger", "WAWebVoipWasmHeapBuffer", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r = new e.StringList();
      return (
        n == null || n.push(r),
        Array.isArray(t) &&
          t.forEach(function (e) {
            r.push_back(String(e));
          }),
        r
      );
    }
    function s(e, t) {
      var n = new e.IntList();
      return (
        Array.isArray(t) &&
          t.forEach(function (e) {
            n.push_back(Number(e));
          }),
        n
      );
    }
    function u(e, t) {
      var n = new e.Uint8List();
      if (t instanceof ArrayBuffer) {
        var r = new Uint8Array(t);
        r.forEach(function (e) {
          return n.push_back(e);
        });
      }
      return n;
    }
    var c = o("WAWebVoipWasmHeapBuffer").createHeapBufferState();
    function d(e) {
      return String(e != null ? e : "");
    }
    function m(e) {
      return Number(e != null ? e : 0);
    }
    function p(e) {
      return !!e;
    }
    function _(e, t) {
      if (!(t == null || typeof t != "object")) {
        var n = t;
        for (var r of Object.keys(n)) {
          var o = n[r];
          if (!(o == null || typeof o != "object")) {
            var a = o.type,
              i = o.value;
            a === "bool"
              ? e.setABPropBool(r, p(i))
              : a === "string"
                ? e.setABPropString(r, d(i))
                : e.setABPropInt(r, m(i));
          }
        }
      }
    }
    function f(t, n, a) {
      e: {
        if (n === "setHideMyIp") {
          t.setHideMyIp(p(a.hideMyIp));
          return;
        }
        if (n === "setOwnOtherDeviceJids") {
          var i = e(t, a.ownOtherDeviceJids);
          try {
            t.setOwnOtherDeviceJids(i);
          } finally {
            i.delete();
          }
          return;
        }
        if (n === "notifyWebP2PChannelReady") {
          t.notifyWebP2PChannelReady(p(a.active), p(a.useIPv6));
          return;
        }
        if (n === "voipInit") {
          (_(t, a.abProps),
            t.setABPropString("self_country_code", d(a.selfCountryCode)),
            t.setABPropString(
              "self_abprop_bucket_id_list",
              d(a.selfAbpropBucketIdList),
            ));
          var l = t.initVoipStack(d(a.selfJid), d(a.selfUserJid), d(a.selfLid));
          if (l !== 0)
            throw r("err")("voip: initVoipStack failed with status " + l);
          return;
        }
        if (n === "startCall") {
          var f = e(t, a.deviceJids),
            g = u(t, a.tcToken);
          try {
            t.startVoipCall(
              d(a.peerJid),
              f,
              d(a.callId),
              p(a.useVideo),
              d(a.phoneNumberJid),
              p(a.isFromDialer),
              g,
            );
          } finally {
            (f.delete(), g.delete());
          }
          return;
        }
        if (n === "startGroupCall") {
          var h = e(t, a.pnUserJids),
            y = e(t, a.lidUserJids),
            C = e(t, a.deviceJidsCsv);
          try {
            return t.startVoipGroupCall(
              h,
              y,
              C,
              d(a.callId),
              p(a.useVideo),
              d(a.groupJid),
              p(a.isLightWeight),
              d(a.scheduleId),
              d(a.chatName),
              d(a.chatIcon),
              m(a.callFromUI),
              m(a.lobbyEntryType),
              d(a.username),
            );
          } finally {
            (h.delete(), y.delete(), C.delete());
          }
          break e;
        }
        if (n === "acceptCall") {
          t.acceptCall(p(a.isMicEnabled), p(a.isCameraEnabled));
          return;
        }
        if (n === "rejectCall") {
          t.rejectCall();
          return;
        }
        if (n === "screenCall") return t.screenCall(p(a.isAutomatic));
        if (n === "acceptMediaOnly") return t.acceptMediaOnly();
        if (n === "commitAccept") return t.commitAccept();
        if (n === "screeningPromptFinished") return t.screeningPromptFinished();
        if (n === "getScreeningRecordingInfo")
          return t.getScreeningRecordingInfo();
        if (n === "endCall") {
          t.endCall(m(a.endCallReason), p(a.sendTerminate));
          return;
        }
        if (n === "transferCallStart")
          return t.transferCallStart(
            d(a.rootCallId),
            d(a.rootCallCreator),
            d(a.peerActiveDevice),
            d(a.callId),
            p(a.hasVideo),
          );
        if (n === "rejectCallWithoutCallContext") {
          t.rejectCallWithoutCallContext(
            d(a.callId),
            p(a.isGroupCall),
            d(a.peerJid),
            d(a.callCreatorJid),
            d(a.reason),
            m(a.retryCount),
            m(a.registration),
          );
          return;
        }
        if (n === "joinOngoingCall") {
          var b = e(t, a.groupParticipantsPnUserJid),
            v = e(t, a.groupParticipantsLidUserJid),
            S = e(t, a.groupParticipantsDeviceJidsCsv);
          try {
            return t.joinVoipOngoingCall(
              d(a.callId),
              d(a.callCreatorJid),
              d(a.initialPeerJid),
              b,
              v,
              S,
              p(a.hasVideo),
              d(a.groupJid),
              m(a.initialGroupTransactionId),
              p(a.callCreatorIsNotContact),
              d(a.callLinkCode),
              p(a.isLightweight),
              d(a.scheduledId),
              p(a.joinAndAccept),
              d(a.chatName),
              m(a.lobbyEntryType),
              p(a.isDeviceSwitch),
            );
          } finally {
            (b.delete(), v.delete(), S.delete());
          }
          break e;
        }
        if (n === "startVoiceChat")
          return t.startVoipVoiceChat(
            d(a.callId),
            d(a.groupJid),
            d(a.groupPhash),
            m(a.groupSize),
            p(a.mute),
          );
        if (n === "joinVoiceChat") {
          var R = [];
          try {
            return t.joinVoipVoiceChat(
              d(a.callId),
              d(a.callCreatorJid),
              e(t, a.groupParticipantsPnUserJid, R),
              e(t, a.groupParticipantsLidUserJid, R),
              e(t, a.groupParticipantsDeviceJidsCsv, R),
              d(a.groupJid),
              m(a.initialGroupTransactionId),
              p(a.callCreatorIsNotContact),
              d(a.groupPhash),
              p(a.joinAndAccept),
              p(a.isDeviceSwitch),
            );
          } finally {
            R.forEach(function (e) {
              return e.delete();
            });
          }
          break e;
        }
        if (n === "sendWaveAll") return t.sendWaveAll();
        if (n === "extendVoiceChatTimeout")
          return t.extendVoiceChatTimeout(m(a.extensionMs));
        if (n === "previewCallLink")
          return t.previewCallLink(
            d(a.token),
            p(a.videoEnabled),
            m(a.lobbyEntryType),
            d(a.username),
            p(a.videoMuted),
          );
        if (n === "joinCallLink") return t.joinCallLink();
        if (n === "previewAndJoinCallLink")
          return t.previewAndJoinCallLink(
            d(a.token),
            p(a.videoEnabled),
            m(a.lobbyEntryType),
            d(a.username),
            p(a.videoMuted),
            d(a.pushName),
          );
        if (n === "handleIncomingSignalingOffer") {
          var L = u(t, a.tcToken);
          try {
            t.handleIncomingSignalingOffer(
              d(a.b64Stanza),
              d(a.msgPlatform),
              d(a.msgVersion),
              d(a.msgEStr),
              d(a.msgTStr),
              p(a.msgOffline),
              p(a.isOfferNotContact),
              d(a.peerJid),
              L,
            );
          } finally {
            L.delete();
          }
          return;
        }
        if (n === "handleIncomingSignalingMessage") {
          var E = u(t, a.tcToken);
          try {
            t.handleIncomingSignalingMessage(
              d(a.b64Stanza),
              d(a.msgPlatform),
              d(a.msgVersion),
              d(a.msgEStr),
              d(a.msgTStr),
              p(a.msgOffline),
              d(a.peerJid),
              E,
            );
          } finally {
            E.delete();
          }
          return;
        }
        if (n === "handleIncomingSignalingAck") {
          var k = u(t, a.tcToken);
          try {
            t.handleIncomingSignalingAck(
              d(a.b64Stanza),
              d(a.ackInfoError),
              d(a.ackInfoType),
              d(a.peerJid),
              k,
            );
          } finally {
            k.delete();
          }
          return;
        }
        if (n === "handleIncomingSignalingReceipt") {
          var I = u(t, a.tcToken);
          try {
            t.handleIncomingSignalingReceipt(d(a.b64Stanza), d(a.peerJid), I);
          } finally {
            I.delete();
          }
          return;
        }
        if (n === "resendOfferOnDecryptionFailure") {
          t.resendOfferOnDecryptionFailure(d(a.peerJid), d(a.callId));
          return;
        }
        if (n === "resendEncRekeyRetry") {
          t.resendEncRekeyRetry(d(a.peerJid), m(a.retryCount));
          return;
        }
        if (n === "handleOnTransportMessage") {
          var T = a.packet;
          if (T instanceof ArrayBuffer) {
            var D = new Uint8Array(T),
              x = o("WAWebVoipWasmHeapBuffer").ensureHeapBuffer(
                t,
                c,
                D.byteLength,
              );
            if (x === 0) return;
            (t.GROWABLE_HEAP_U8().set(D, x),
              t.handleOnMessageFromHeap(x, D.byteLength, d(a.ip), m(a.port)));
          }
          return;
        }
        if (n === "markRelayConnected") {
          t.markRelayConnected(d(a.ip), m(a.port));
          return;
        }
        if (n === "setCallMute") return t.setCallMute(p(a.enable));
        if (n === "setCallVideoMute") return t.setCallVideoMute(p(a.enable));
        if (n === "videoStreamPause") return t.videoStreamPause();
        if (n === "videoStreamResume") return t.videoStreamResume();
        if (n === "broadcastVideoState") return t.broadcastVideoState();
        if (n === "sendReaction") {
          t.sendReaction(d(a.reaction));
          return;
        }
        if (n === "raiseHand") {
          t.raiseHand(p(a.isHandRaised));
          return;
        }
        if (n === "notifyUiViewChange")
          return t.notifyUiViewChange(m(a.viewMode), d(a.pinnedPeerJid));
        if (n === "requestVideoUpgrade") return t.requestVideoUpgrade();
        if (n === "getCallInfo") return t.getCallInfo();
        if (n === "acceptPeerVideo") return t.acceptPeerVideo(d(a.jid));
        if (n === "requestPeerMute") return t.requestPeerMute(d(a.peerJid));
        if (n === "removeCallParticipant")
          return t.removeCallParticipant(d(a.peerJid));
        if (n === "waitingRoomAdmit") return t.waitingRoomAdmit(d(a.peerJid));
        if (n === "waitingRoomDeny") return t.waitingRoomDeny(d(a.peerJid));
        if (n === "waitingRoomAdmitAll") return t.waitingRoomAdmitAll();
        if (n === "waitingRoomToggleActiveCall")
          return t.waitingRoomToggleActiveCall(p(a.enabled));
        if (n === "startScreenShare") return t.startScreenShare();
        if (n === "stopScreenShare") return t.stopScreenShare();
        if (n === "startVideoPreview")
          return t.startVideoPreview(d(a.callId), d(a.selfJid));
        if (n === "requestKeyFrame") return t.requestKeyFrame(d(a.userJid));
        if (n === "requestAuxiliaryKeyFrame")
          return t.requestAuxiliaryKeyFrame(d(a.userJid));
        if (n === "updateParticipantsRxSubscription") {
          var $ = e(t, a.participantJids),
            P = s(t, a.videoQualities);
          try {
            return t.updateParticipantsRxSubscription($, P);
          } finally {
            ($.delete(), P.delete());
          }
          break e;
        }
        if (n === "updateNetworkMedium") {
          t.updateNetworkMedium(m(a.networkMedium), 0);
          return;
        }
        if (n === "getNetworkConditionerState") {
          var N = t.isTxNetworkConditionerOn(),
            M = t.isRxNetworkConditionerOn(),
            w = null,
            A = null;
          return (
            N && (w = t.getCurrentTxNetworkConditionerParameters()),
            M && (A = t.getCurrentRxNetworkConditionerParameters()),
            { isTxOn: N, isRxOn: M, txParams: w, rxParams: A }
          );
          break e;
        }
        if (n === "getShortStatisticString") return t.getShortStatisticString();
        if (n === "getDebugStatisticString") return t.getDebugStatisticString();
        if (n === "getVoipParam") return t.getVoipParam(d(a.paramPath));
        if (n === "cleanupUnfinishedCallStats") {
          t.cleanupUnfinishedCallStats();
          return;
        }
        if (n === "isWebP2PEnabled") return t.isWebP2PEnabled(d(a.callId));
        if (n === "inviteToCall") {
          var F = e(t, a.deviceJids);
          try {
            return t.inviteToCall(
              d(a.invitedParticipantPnUserJid),
              d(a.invitedParticipantLidUserJid),
              F,
            );
          } finally {
            F.delete();
          }
          break e;
        }
        if (n === "sendWave") {
          var O = e(t, a.deviceJids);
          try {
            return t.sendWave(
              d(a.participantPnUserJid),
              d(a.participantLidUserJid),
              O,
            );
          } finally {
            O.delete();
          }
          break e;
        }
        if (n === "checkOngoingCalls") {
          var B = e(t, a.callIds),
            W = e(t, a.callCreatorJids);
          try {
            t.checkOngoingCalls(B, W);
          } finally {
            (B.delete(), W.delete());
          }
          return;
        }
        if (n === "sendWebP2PTransport") {
          t.sendWebP2PTransport(
            d(a.callId),
            d(a.ufrag),
            d(a.pwd),
            d(a.algo),
            d(a.fingerprint),
            d(a.candidatesJson),
          );
          return;
        }
        throw r("err")("voip: [WorkerHandler] Unknown method: " + n);
      }
    }
    function g(e, t) {
      ((e.onmessage = function (n) {
        var r = n.data;
        if (!(r == null || typeof r != "object")) {
          var a = Number(r.id),
            i = String(r.method),
            l = r.args != null && typeof r.args == "object" ? r.args : {};
          r.notifyStart === !0 && e.postMessage({ id: a, started: !0 });
          try {
            var s = f(t, i, l);
            a !== -1 && e.postMessage({ id: a, result: s, error: void 0 });
          } catch (n) {
            o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(t, n);
            var u = n instanceof Error ? n.message : String(n);
            e.postMessage({ id: a, result: void 0, error: u });
          }
        }
      }),
        e.start());
    }
    l.setupVoipRpcOnPort = g;
  },
  98,
);
