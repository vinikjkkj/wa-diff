__d(
  "WAWebCoreActionsODS",
  [
    "WALogger",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebODS",
    "WAWebSyncdMetricFatalError",
    "WAWebWamEnumMessageSendResultType",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      r("WAWebODS").incr("web.msg.send.text");
    }
    function u() {
      r("WAWebODS").incr("web.msg.send.ptt");
    }
    function c() {
      r("WAWebODS").incr("web.msg.send.media");
    }
    function d() {
      r("WAWebODS").incr("web.msg.send.reply");
    }
    function m() {
      r("WAWebODS").incr("web.msg.send.reaction");
    }
    function p() {
      r("WAWebODS").incr("web.msg.send.forward");
    }
    function _() {
      r("WAWebODS").incr("web.msg.send.sticker");
    }
    function f() {
      r("WAWebODS").incr("web.status.send");
    }
    function g() {
      r("WAWebODS").incr("web.mc_migration.control");
    }
    function h() {
      r("WAWebODS").incr("web.mc_migration.test");
    }
    function y(t, n) {
      n > 0 &&
        Math.random() < n &&
        (o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[test only - not production issue] mc_migration_regression: test crashlog for bucket ",
                "",
              ])),
            t,
          )
          .sendLogs("mc-migration-regression"),
        o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
          o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
            .CYCLIC_MUTATION_DEPENDENCY_IN_PATCH,
        ));
    }
    function C() {
      r("WAWebODS").incr("web.group.create");
    }
    function b() {
      r("WAWebODS").incr("web.group.create.error");
    }
    function v() {
      r("WAWebODS").incr("web.msg.send.individual");
    }
    function S() {
      r("WAWebODS").incr("web.msg.send.group");
    }
    function R() {
      r("WAWebODS").incr("web.msg.send.channel");
    }
    function L() {
      r("WAWebODS").incr("web.group.add_participant");
    }
    function E() {
      r("WAWebODS").incr("web.group.add_participant.error");
    }
    function k() {
      r("WAWebODS").incr("web.search.has_results");
    }
    function I() {
      r("WAWebODS").incr("web.search.error");
    }
    function T(e) {
      var t = [],
        n = o("WAWebMsgGetters").getIsReply(e);
      (o("WAWebMsgGetters").getIsGroupMsg(e)
        ? t.push(S)
        : o("WAWebMsgGetters").getIs1to1Msg(e)
          ? t.push(v)
          : o("WAWebMsgGetters").getIsNewsletterMsg(e) && t.push(R),
        n ? t.push(d) : o("WAWebMsgGetters").getIsReaction(e) && t.push(m),
        o("WAWebMsgGetters").getIsStatus(e) && t.push(f),
        e.isForwarded === !0 && t.push(p));
      e: {
        if (
          e.type === o("WAWebMsgType").MSG_TYPE.CHAT ||
          e.type === o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION
        ) {
          t.push(s);
          break e;
        }
        if (
          e.type === o("WAWebMsgType").MSG_TYPE.IMAGE ||
          e.type === o("WAWebMsgType").MSG_TYPE.VIDEO ||
          e.type === o("WAWebMsgType").MSG_TYPE.ALBUM
        ) {
          t.push(c);
          break e;
        }
        if (
          e.type === o("WAWebMsgType").MSG_TYPE.AUDIO ||
          e.type === o("WAWebMsgType").MSG_TYPE.PTT
        ) {
          t.push(u);
          break e;
        }
        if (
          e.type === o("WAWebMsgType").MSG_TYPE.STICKER ||
          e.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK
        ) {
          t.push(_);
          break e;
        }
        break e;
      }
      return function () {
        t.map(function (e) {
          return e();
        });
      };
    }
    function D() {
      r("WAWebODS").incr("web.msg.send.error");
    }
    function x() {
      r("WAWebODS").incr("web.msg.send.error.terminal");
    }
    function $() {
      r("WAWebODS").incr("web.msg.send.error.network");
    }
    function P() {
      r("WAWebODS").incr("web.msg.send.error.payload_too_big");
    }
    function N() {
      r("WAWebODS").incr("web.msg.send.error.invalid_protobuf");
    }
    function M() {
      r("WAWebODS").incr("web.msg.send.error.upload");
    }
    function w() {
      r("WAWebODS").incr("web.msg.send.error.cancelled");
    }
    function A() {
      r("WAWebODS").incr("web.msg.send.error.expired");
    }
    function F() {
      r("WAWebODS").incr("web.msg.send.error.backfill_usync_failed");
    }
    function O() {
      r("WAWebODS").incr("web.msg.send.error.location");
    }
    function B() {
      r("WAWebODS").incr("web.msg.send.error.invalid_message");
    }
    function W() {
      r("WAWebODS").incr("web.msg.send.error.e2ee");
    }
    function q() {
      r("WAWebODS").incr("web.msg.send.error.ephemerally_expired");
    }
    function U() {
      r("WAWebODS").incr("web.msg.send.error.client_oom");
    }
    function V() {
      r("WAWebODS").incr("web.msg.send.error.unknown");
    }
    function H() {
      r("WAWebODS").incr("web.msg.send.individual.error.terminal");
    }
    function G() {
      r("WAWebODS").incr("web.msg.send.group.error.terminal");
    }
    function z() {
      r("WAWebODS").incr("web.msg.send.channel.error.terminal");
    }
    function j() {
      r("WAWebODS").incr("web.msg.send.text.error.terminal");
    }
    function K() {
      r("WAWebODS").incr("web.msg.send.media.error.terminal");
    }
    function Q() {
      r("WAWebODS").incr("web.msg.send.ptt.error.terminal");
    }
    function X() {
      r("WAWebODS").incr("web.msg.send.sticker.error.terminal");
    }
    function Y() {
      r("WAWebODS").incr("web.msg.send.reply.error.terminal");
    }
    function J() {
      r("WAWebODS").incr("web.msg.send.reaction.error.terminal");
    }
    function Z() {
      r("WAWebODS").incr("web.msg.send.forward.error.terminal");
    }
    function ee(e) {
      var t = [x];
      (o("WAWebMsgGetters").getIsGroupMsg(e)
        ? t.push(G)
        : o("WAWebMsgGetters").getIs1to1Msg(e)
          ? t.push(H)
          : o("WAWebMsgGetters").getIsNewsletterMsg(e) && t.push(z),
        o("WAWebMsgGetters").getIsReply(e)
          ? t.push(Y)
          : o("WAWebMsgGetters").getIsReaction(e) && t.push(J),
        e.isForwarded === !0 && t.push(Z));
      e: {
        if (
          e.type === o("WAWebMsgType").MSG_TYPE.CHAT ||
          e.type === o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION
        ) {
          t.push(j);
          break e;
        }
        if (
          e.type === o("WAWebMsgType").MSG_TYPE.IMAGE ||
          e.type === o("WAWebMsgType").MSG_TYPE.VIDEO ||
          e.type === o("WAWebMsgType").MSG_TYPE.ALBUM
        ) {
          t.push(K);
          break e;
        }
        if (
          e.type === o("WAWebMsgType").MSG_TYPE.AUDIO ||
          e.type === o("WAWebMsgType").MSG_TYPE.PTT
        ) {
          t.push(Q);
          break e;
        }
        if (
          e.type === o("WAWebMsgType").MSG_TYPE.STICKER ||
          e.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK
        ) {
          t.push(X);
          break e;
        }
        break e;
      }
      return function (e, n) {
        (D(),
          n &&
            t.map(function (e) {
              return e();
            }));
        e: {
          if (
            e ===
              o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE
                .ERROR_NETWORK ||
            e ===
              o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE
                .SERVER_ERROR
          ) {
            $();
            break e;
          }
          if (
            e ===
            o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE
              .ERROR_PAYLOAD_TOO_BIG
          ) {
            P();
            break e;
          }
          if (
            e ===
            o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE
              .ERROR_INVALID_PROTOBUF
          ) {
            N();
            break e;
          }
          if (
            e ===
              o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE
                .ERROR_UPLOAD ||
            e ===
              o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE
                .MEDIA_UPLOAD_FAILED
          ) {
            M();
            break e;
          }
          if (
            e ===
              o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE
                .ERROR_CANCELLED ||
            e ===
              o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE
                .ERROR_UPLOAD_CANCELLED_MANUALLY ||
            e ===
              o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE
                .ERROR_UPLOAD_CANCELLED_AUTOMATIC
          ) {
            w();
            break e;
          }
          if (
            e ===
            o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE
              .ERROR_EXPIRED
          ) {
            A();
            break e;
          }
          if (
            e ===
            o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE
              .ERROR_BACKFILL_USYNC_FAILED
          ) {
            F();
            break e;
          }
          if (
            e ===
            o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE
              .ERROR_LOCATION
          ) {
            O();
            break e;
          }
          if (
            e ===
            o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE
              .ERROR_INVALID_MESSAGE
          ) {
            B();
            break e;
          }
          if (
            e ===
            o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE
              .ERROR_E2EE
          ) {
            W();
            break e;
          }
          if (
            e ===
            o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE
              .EPHEMERALLY_EXPIRED
          ) {
            q();
            break e;
          }
          if (
            e ===
            o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE
              .ERROR_CLIENT_OUT_OF_MEMORY
          ) {
            U();
            break e;
          }
          {
            V();
            break e;
          }
        }
      };
    }
    var te = !1;
    function ne() {
      te = !0;
    }
    function re() {
      return te;
    }
    function oe() {
      r("WAWebODS").incr("web.page_load.success");
    }
    function ae() {
      r("WAWebODS").incr("web.page_load.success.main");
    }
    function ie() {
      r("WAWebODS").incr("web.page_load.success.qr");
    }
    var le = !1;
    function se() {
      le || ((le = !0), r("WAWebODS").incr("web.page_load.error"));
    }
    function ue() {
      (se(), r("WAWebODS").incr("web.page_load.error.storage_init"));
    }
    function ce() {
      (se(), r("WAWebODS").incr("web.page_load.error.offline_resume"));
    }
    function de() {
      (se(), r("WAWebODS").incr("web.page_load.error.error_boundary"));
    }
    function me() {
      (se(), r("WAWebODS").incr("web.page_load.error.js_exception"));
    }
    function pe() {
      (se(), r("WAWebODS").incr("web.page_load.error.unhandled_rejection"));
    }
    function _e() {
      (se(), r("WAWebODS").incr("web.page_load.error.forced_logout"));
    }
    function fe() {
      (se(), r("WAWebODS").incr("web.page_load.error.service_unavailable"));
    }
    function ge() {
      (se(), r("WAWebODS").incr("web.page_load.error.timeout"));
    }
    function he() {
      (se(), r("WAWebODS").incr("web.page_load.error.history_sync_incomplete"));
    }
    function ye() {
      (se(), r("WAWebODS").incr("web.page_load.error.unknown"));
    }
    function Ce() {
      (se(), r("WAWebODS").incr("web.page_load.error.restore_chats"));
    }
    function be() {
      (se(), r("WAWebODS").incr("web.page_load.error.restore_groups"));
    }
    function ve() {
      (se(), r("WAWebODS").incr("web.page_load.error.restore_pics"));
    }
    function Se() {
      (se(), r("WAWebODS").incr("web.page_load.error.prune_messages"));
    }
    function Re() {
      r("WAWebODS").incr("web.pair.success");
    }
    function Le() {
      r("WAWebODS").incr("web.pair.error");
    }
    function Ee() {
      r("WAWebODS").incr("web.session.forced_logout");
    }
    function ke() {
      r("WAWebODS").incr("web.media.upload.success");
    }
    function Ie() {
      r("WAWebODS").incr("web.media.upload.error");
    }
    function Te() {
      r("WAWebODS").incr("web.media.upload.error.server");
    }
    function De() {
      r("WAWebODS").incr("web.media.upload.error.network");
    }
    function xe() {
      r("WAWebODS").incr("web.media.download.success");
    }
    function $e() {
      r("WAWebODS").incr("web.media.download.error");
    }
    function Pe() {
      r("WAWebODS").incr("web.media.download.error.expired");
    }
    function Ne() {
      r("WAWebODS").incr("web.media.download.error.network");
    }
    function Me() {
      r("WAWebODS").incr("web.call.success");
    }
    function we() {
      r("WAWebODS").incr("web.call.error.terminal");
    }
    function Ae() {
      r("WAWebODS").incr("web.call.attempt");
    }
    function Fe() {
      r("WAWebODS").incr("web.call.outgoing.audio");
    }
    function Oe() {
      r("WAWebODS").incr("web.call.outgoing.video");
    }
    function Be() {
      r("WAWebODS").incr("web.call.outgoing.group.audio");
    }
    function We() {
      r("WAWebODS").incr("web.call.outgoing.group.video");
    }
    function qe() {
      r("WAWebODS").incr("web.call.voip_init.success");
    }
    function Ue() {
      r("WAWebODS").incr("web.call.voip_init.error");
    }
    function Ve() {
      r("WAWebODS").incr("web.call.relay.port_3478");
    }
    function He() {
      r("WAWebODS").incr("web.calendar.open.date_marker");
    }
    function Ge() {
      r("WAWebODS").incr("web.calendar.open.search_drawer");
    }
    function ze() {
      r("WAWebODS").incr("web.calendar.date_selected.date_marker");
    }
    function je() {
      r("WAWebODS").incr("web.calendar.date_selected.search_drawer");
    }
    function Ke() {
      r("WAWebODS").incr("web.calendar.open.sticky_date_marker");
    }
    function Qe() {
      r("WAWebODS").incr("web.calendar.date_selected.sticky_date_marker");
    }
    ((l.logStickerMsgSend = _),
      (l.logMCMigrationControl = g),
      (l.logMCMigrationTest = h),
      (l.logMCMigrationRegression = y),
      (l.logGroupCreate = C),
      (l.logGroupCreateError = b),
      (l.logChannelMsgSend = R),
      (l.logGroupAddParticipant = L),
      (l.logGroupAddParticipantError = E),
      (l.logGlobalSearchHasResults = k),
      (l.logGlobalSearchError = I),
      (l.createPostODSCountersFn = T),
      (l.logMsgSendError = D),
      (l.logMsgSendErrorUpload = M),
      (l.createPostODSErrorCountersFn = ee),
      (l.markPageLoadComplete = ne),
      (l.isPageLoadComplete = re),
      (l.logPageLoadSuccess = oe),
      (l.logPageLoadSuccessMain = ae),
      (l.logPageLoadSuccessQr = ie),
      (l.logPageLoadError = se),
      (l.logPageLoadErrorStorageInit = ue),
      (l.logPageLoadErrorOfflineResume = ce),
      (l.logPageLoadErrorErrorBoundary = de),
      (l.logPageLoadErrorJsException = me),
      (l.logPageLoadErrorUnhandledRejection = pe),
      (l.logPageLoadErrorForcedLogout = _e),
      (l.logPageLoadErrorServiceUnavailable = fe),
      (l.logPageLoadErrorTimeout = ge),
      (l.logPageLoadErrorHistorySyncIncomplete = he),
      (l.logPageLoadErrorUnknown = ye),
      (l.logPageLoadErrorRestoreChats = Ce),
      (l.logPageLoadErrorRestoreGroups = be),
      (l.logPageLoadErrorRestorePics = ve),
      (l.logPageLoadErrorPruneMessages = Se),
      (l.logPairSuccess = Re),
      (l.logPairError = Le),
      (l.logSessionForcedLogout = Ee),
      (l.logMediaUploadSuccess = ke),
      (l.logMediaUploadError = Ie),
      (l.logMediaUploadErrorServer = Te),
      (l.logMediaUploadErrorNetwork = De),
      (l.logMediaDownloadSuccess = xe),
      (l.logMediaDownloadError = $e),
      (l.logMediaDownloadErrorExpired = Pe),
      (l.logMediaDownloadErrorNetwork = Ne),
      (l.logCallSuccess = Me),
      (l.logCallErrorTerminal = we),
      (l.logCallAttempt = Ae),
      (l.logCallOutgoingAudio = Fe),
      (l.logCallOutgoingVideo = Oe),
      (l.logCallOutgoingGroupAudio = Be),
      (l.logCallOutgoingGroupVideo = We),
      (l.logCallVoipInitSuccess = qe),
      (l.logCallVoipInitError = Ue),
      (l.logCallRelayPort3478 = Ve),
      (l.logCalendarOpenFromDateMarker = He),
      (l.logCalendarOpenFromSearchDrawer = Ge),
      (l.logCalendarDateSelectedFromDateMarker = ze),
      (l.logCalendarDateSelectedFromSearchDrawer = je),
      (l.logCalendarOpenFromStickyDateMarker = Ke),
      (l.logCalendarDateSelectedFromStickyDateMarker = Qe));
  },
  98,
);
