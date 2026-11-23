__d(
  "WAWebVoipWorkerHandler",
  [
    "WAWebVoipIncomingSignalingFromHeap",
    "WAWebVoipNativeStackTraceLogger",
    "WAWebVoipWasmHeapBuffer",
    "err",
  ],
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
    function f(e, t, n, r, o) {
      return t === "handleIncomingSignalingOfferFromHeap"
        ? e.handleIncomingSignalingOfferFromHeap(
            r,
            o,
            d(n.msgPlatform),
            d(n.msgVersion),
            d(n.msgEStr),
            d(n.msgTStr),
            p(n.msgOffline),
            p(n.isOfferNotContact),
            d(n.peerJid),
            d(n.participantJid),
          )
        : t === "handleIncomingSignalingMessageFromHeap"
          ? e.handleIncomingSignalingMessageFromHeap(
              r,
              o,
              d(n.msgPlatform),
              d(n.msgVersion),
              d(n.msgEStr),
              d(n.msgTStr),
              p(n.msgOffline),
              d(n.peerJid),
              d(n.participantJid),
              p(n.isTransferNotContact),
            )
          : t === "handleIncomingSignalingAckFromHeap"
            ? e.handleIncomingSignalingAckFromHeap(
                r,
                o,
                d(n.ackInfoError),
                d(n.ackInfoType),
                d(n.peerJid),
              )
            : t === "handleIncomingSignalingReceiptFromHeap"
              ? e.handleIncomingSignalingReceiptFromHeap(r, o, d(n.peerJid))
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      t,
                  );
                })();
    }
    function g(e, t, n) {
      var a = n.frame;
      if (!(a instanceof ArrayBuffer))
        throw r("err")(
          "voip: [WorkerHandler] " + t + " needs an ArrayBuffer frame",
        );
      var i = o("WAWebVoipIncomingSignalingFromHeap").callWithFrameOnHeap(
        e,
        a,
        function (r, o) {
          return f(e, t, n, r, o);
        },
      );
      if (i == null)
        throw r("err")(
          "voip: [WorkerHandler] " +
            t +
            " could not copy the frame to the wasm heap, len=" +
            a.byteLength,
        );
      return i;
    }
    function h(t, n, a) {
      e: {
        var i = n;
        if (i === "setHideMyIp") {
          t.setHideMyIp(p(a.hideMyIp));
          return;
        }
        if (i === "setOwnOtherDeviceJids") {
          var l = e(t, a.ownOtherDeviceJids);
          try {
            t.setOwnOtherDeviceJids(l);
          } finally {
            l.delete();
          }
          return;
        }
        if (i === "notifyWebP2PChannelReady") {
          t.notifyWebP2PChannelReady(p(a.active), p(a.useIPv6));
          return;
        }
        if (i === "voipInit") {
          (_(t, a.abProps),
            t.setABPropString("self_country_code", d(a.selfCountryCode)),
            t.setABPropString(
              "self_abprop_bucket_id_list",
              d(a.selfAbpropBucketIdList),
            ));
          var f = t.initVoipStack(d(a.selfJid), d(a.selfUserJid), d(a.selfLid));
          if (f !== 0)
            throw r("err")("voip: initVoipStack failed with status " + f);
          return;
        }
        if (i === "startCall") {
          var h = e(t, a.deviceJids),
            y = u(t, a.tcToken);
          try {
            t.startVoipCall(
              d(a.peerJid),
              h,
              d(a.callId),
              p(a.useVideo),
              d(a.phoneNumberJid),
              p(a.isFromDialer),
              y,
            );
          } finally {
            (h.delete(), y.delete());
          }
          return;
        }
        if (i === "startGroupCall") {
          var C = e(t, a.pnUserJids),
            b = e(t, a.lidUserJids),
            v = e(t, a.deviceJidsCsv);
          try {
            return t.startVoipGroupCall(
              C,
              b,
              v,
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
            (C.delete(), b.delete(), v.delete());
          }
          break e;
        }
        if (i === "acceptCall") {
          t.acceptCall(p(a.isMicEnabled), p(a.isCameraEnabled));
          return;
        }
        if (i === "rejectCallWithEndReason") {
          t.rejectCallWithEndReason(m(a.endReason));
          return;
        }
        if (i === "screenCall") return t.screenCall(p(a.isAutomatic));
        if (i === "acceptMediaOnly") return t.acceptMediaOnly();
        if (i === "commitAccept") return t.commitAccept();
        if (i === "screeningPromptFinished") return t.screeningPromptFinished();
        if (i === "getScreeningRecordingInfo")
          return t.getScreeningRecordingInfo();
        if (i === "endCall") {
          t.endCall(m(a.endCallReason), p(a.sendTerminate));
          return;
        }
        if (i === "transferCallStart")
          return t.transferCallStart(
            d(a.rootCallId),
            d(a.rootCallCreator),
            d(a.peerActiveDevice),
            d(a.callId),
            p(a.hasVideo),
            p(a.mute),
            p(a.cameraOff),
          );
        if (i === "rejectCallWithoutCallContext") {
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
        if (i === "joinOngoingCall") {
          var S = e(t, a.groupParticipantsPnUserJid),
            R = e(t, a.groupParticipantsLidUserJid),
            L = e(t, a.groupParticipantsDeviceJidsCsv);
          try {
            return t.joinVoipOngoingCall(
              d(a.callId),
              d(a.callCreatorJid),
              d(a.initialPeerJid),
              S,
              R,
              L,
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
            (S.delete(), R.delete(), L.delete());
          }
          break e;
        }
        if (i === "startVoiceChat")
          return t.startVoipVoiceChat(
            d(a.callId),
            d(a.groupJid),
            d(a.groupPhash),
            m(a.groupSize),
            p(a.mute),
          );
        if (i === "joinVoiceChat") {
          var E = [];
          try {
            return t.joinVoipVoiceChat(
              d(a.callId),
              d(a.callCreatorJid),
              e(t, a.groupParticipantsPnUserJid, E),
              e(t, a.groupParticipantsLidUserJid, E),
              e(t, a.groupParticipantsDeviceJidsCsv, E),
              d(a.groupJid),
              m(a.initialGroupTransactionId),
              p(a.callCreatorIsNotContact),
              d(a.groupPhash),
              p(a.joinAndAccept),
              p(a.isDeviceSwitch),
            );
          } finally {
            E.forEach(function (e) {
              return e.delete();
            });
          }
          break e;
        }
        if (i === "sendWaveAll") return t.sendWaveAll();
        if (i === "extendVoiceChatTimeout")
          return t.extendVoiceChatTimeout(m(a.extensionMs));
        if (i === "previewCallLink")
          return t.previewCallLink(
            d(a.token),
            p(a.videoEnabled),
            m(a.lobbyEntryType),
            d(a.username),
            p(a.videoMuted),
          );
        if (i === "joinCallLink") return t.joinCallLink();
        if (i === "previewAndJoinCallLink")
          return t.previewAndJoinCallLink(
            d(a.token),
            p(a.videoEnabled),
            m(a.lobbyEntryType),
            d(a.username),
            p(a.videoMuted),
            d(a.pushName),
          );
        if (i === "handleIncomingSignalingOffer") {
          var k = u(t, a.tcToken);
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
              k,
            );
          } finally {
            k.delete();
          }
          return;
        }
        if (i === "handleIncomingSignalingMessage") {
          var I = u(t, a.tcToken);
          try {
            t.handleIncomingSignalingMessage(
              d(a.b64Stanza),
              d(a.msgPlatform),
              d(a.msgVersion),
              d(a.msgEStr),
              d(a.msgTStr),
              p(a.msgOffline),
              d(a.peerJid),
              I,
            );
          } finally {
            I.delete();
          }
          return;
        }
        if (i === "handleIncomingSignalingAck") {
          var T = u(t, a.tcToken);
          try {
            t.handleIncomingSignalingAck(
              d(a.b64Stanza),
              d(a.ackInfoError),
              d(a.ackInfoType),
              d(a.peerJid),
              T,
            );
          } finally {
            T.delete();
          }
          return;
        }
        if (i === "handleIncomingSignalingReceipt") {
          var D = u(t, a.tcToken);
          try {
            t.handleIncomingSignalingReceipt(d(a.b64Stanza), d(a.peerJid), D);
          } finally {
            D.delete();
          }
          return;
        }
        if (
          i === "handleIncomingSignalingOfferFromHeap" ||
          i === "handleIncomingSignalingMessageFromHeap" ||
          i === "handleIncomingSignalingAckFromHeap" ||
          i === "handleIncomingSignalingReceiptFromHeap"
        ) {
          var x = i;
          return g(t, x, a);
        }
        if (i === "resendOfferOnDecryptionFailure") {
          t.resendOfferOnDecryptionFailure(d(a.peerJid), d(a.callId));
          return;
        }
        if (i === "resendEncRekeyRetry") {
          t.resendEncRekeyRetry(d(a.peerJid), m(a.retryCount));
          return;
        }
        if (i === "handleOnTransportMessage") {
          var $ = a.packet;
          if ($ instanceof ArrayBuffer) {
            var P = new Uint8Array($),
              N = o("WAWebVoipWasmHeapBuffer").ensureHeapBuffer(
                t,
                c,
                P.byteLength,
              );
            if (N === 0) return;
            (t.GROWABLE_HEAP_U8().set(P, N),
              t.handleOnMessageFromHeap(N, P.byteLength, d(a.ip), m(a.port)));
          }
          return;
        }
        if (i === "markRelayConnected") {
          t.markRelayConnected(d(a.ip), m(a.port));
          return;
        }
        if (i === "logTsEventStringData")
          return t.tsLoggerLogEventStringData(
            m(a.eventId),
            d(a.eventValue),
            p(a.ignoreDupe),
          );
        if (i === "setCallMute") return t.setCallMute(p(a.enable));
        if (i === "setCallVideoMute") return t.setCallVideoMute(p(a.enable));
        if (i === "videoStreamPause") return t.videoStreamPause();
        if (i === "videoStreamResume") return t.videoStreamResume();
        if (i === "broadcastVideoState") return t.broadcastVideoState();
        if (i === "sendReaction") {
          t.sendReaction(d(a.reaction));
          return;
        }
        if (i === "raiseHand") {
          t.raiseHand(p(a.isHandRaised));
          return;
        }
        if (i === "sendCapiDtmfTone") return t.sendCapiDtmfTone(d(a.tone));
        if (i === "notifyUiViewChange")
          return t.notifyUiViewChange(m(a.viewMode), d(a.pinnedPeerJid));
        if (i === "requestVideoUpgrade") return t.requestVideoUpgrade();
        if (i === "getCallInfo") return t.getCallInfo();
        if (i === "acceptPeerVideo") return t.acceptPeerVideo(d(a.jid));
        if (i === "requestPeerMute") return t.requestPeerMute(d(a.peerJid));
        if (i === "removeCallParticipant")
          return t.removeCallParticipant(d(a.peerJid));
        if (i === "waitingRoomAdmit") return t.waitingRoomAdmit(d(a.peerJid));
        if (i === "waitingRoomDeny") return t.waitingRoomDeny(d(a.peerJid));
        if (i === "waitingRoomAdmitAll") return t.waitingRoomAdmitAll();
        if (i === "waitingRoomToggleActiveCall")
          return t.waitingRoomToggleActiveCall(p(a.enabled));
        if (i === "startScreenShare") return t.startScreenShare();
        if (i === "stopScreenShare") return t.stopScreenShare();
        if (i === "startVideoPreview")
          return t.startVideoPreview(d(a.callId), d(a.selfJid));
        if (i === "requestKeyFrame") return t.requestKeyFrame(d(a.userJid));
        if (i === "requestAuxiliaryKeyFrame")
          return t.requestAuxiliaryKeyFrame(d(a.userJid));
        if (i === "updateParticipantsRxSubscription") {
          var M = e(t, a.participantJids),
            w = s(t, a.videoQualities);
          try {
            return t.updateParticipantsRxSubscription(M, w);
          } finally {
            (M.delete(), w.delete());
          }
          break e;
        }
        if (i === "updateNetworkMedium") {
          t.updateNetworkMedium(m(a.networkMedium), 0);
          return;
        }
        if (i === "getNetworkConditionerState") {
          var A = t.isTxNetworkConditionerOn(),
            F = t.isRxNetworkConditionerOn(),
            O = null,
            B = null;
          return (
            A && (O = t.getCurrentTxNetworkConditionerParameters()),
            F && (B = t.getCurrentRxNetworkConditionerParameters()),
            { isTxOn: A, isRxOn: F, txParams: O, rxParams: B }
          );
          break e;
        }
        if (i === "getShortStatisticString") return t.getShortStatisticString();
        if (i === "getDebugStatisticString") return t.getDebugStatisticString();
        if (i === "getVoipParam") return t.getVoipParam(d(a.paramPath));
        if (i === "cleanupUnfinishedCallStats") {
          t.cleanupUnfinishedCallStats();
          return;
        }
        if (i === "isWebP2PEnabled") return t.isWebP2PEnabled(d(a.callId));
        if (i === "inviteToCall") {
          var W = e(t, a.deviceJids);
          try {
            return t.inviteToCall(
              d(a.invitedParticipantPnUserJid),
              d(a.invitedParticipantLidUserJid),
              W,
            );
          } finally {
            W.delete();
          }
          break e;
        }
        if (i === "sendWave") {
          var q = e(t, a.deviceJids);
          try {
            return t.sendWave(
              d(a.participantPnUserJid),
              d(a.participantLidUserJid),
              q,
            );
          } finally {
            q.delete();
          }
          break e;
        }
        if (i === "checkOngoingCalls") {
          var U = e(t, a.callIds),
            V = e(t, a.callCreatorJids);
          try {
            t.checkOngoingCalls(U, V);
          } finally {
            (U.delete(), V.delete());
          }
          return;
        }
        if (i === "sendWebP2PTransport") {
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
    function y(e, t) {
      ((e.onmessage = function (n) {
        var r = n.data;
        if (!(r == null || typeof r != "object")) {
          var a = Number(r.id),
            i = String(r.method),
            l = r.args != null && typeof r.args == "object" ? r.args : {};
          r.notifyStart === !0 && e.postMessage({ id: a, started: !0 });
          try {
            var s = h(t, i, l);
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
    l.setupVoipRpcOnPort = y;
  },
  98,
);
