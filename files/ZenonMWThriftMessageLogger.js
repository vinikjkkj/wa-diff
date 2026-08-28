__d(
  "ZenonMWThriftMessageLogger",
  ["MultiwayCommonTypes", "ZenonLoggingEventTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set(),
      s = new Set();
    function u(t, n) {
      var r = t.messageHeader,
        a = t.messageBody;
      if (!(e.has(r.transactionId) || r.type == null)) {
        switch (r.type) {
          case o("MultiwayCommonTypes").MessageType.JOIN:
            a.joinRequest && d(a.joinRequest, n);
            break;
          case o("MultiwayCommonTypes").MessageType.ICE_CANDIDATE:
            a.iceCandidateRequest &&
              p(
                a.iceCandidateRequest,
                n,
                o("ZenonLoggingEventTypes").ZenonUpdateIceInfoDirection.Send,
              );
            break;
          case o("MultiwayCommonTypes").MessageType.CLIENT_MEDIA_UPDATE:
            a.clientMediaUpdateRequest && _(a.clientMediaUpdateRequest, n);
            break;
          case o("MultiwayCommonTypes").MessageType.SERVER_MEDIA_UPDATE:
            a.serverMediaUpdateResponse && h(a.serverMediaUpdateResponse, n);
            break;
          default:
            break;
        }
        e.add(r.transactionId);
      }
    }
    function c(e, t) {
      var n = e.messageHeader,
        r = e.messageBody;
      if (!(s.has(n.transactionId) || n.type == null)) {
        switch (n.type) {
          case o("MultiwayCommonTypes").MessageType.JOIN:
            r.joinResponse && m(r.joinResponse, t);
            break;
          case o("MultiwayCommonTypes").MessageType.ICE_CANDIDATE:
            r.iceCandidateRequest &&
              p(
                r.iceCandidateRequest,
                t,
                o("ZenonLoggingEventTypes").ZenonUpdateIceInfoDirection.Receive,
              );
            break;
          case o("MultiwayCommonTypes").MessageType.CLIENT_MEDIA_UPDATE:
            r.clientMediaUpdateResponse && f(r.clientMediaUpdateResponse, t);
            break;
          case o("MultiwayCommonTypes").MessageType.SERVER_MEDIA_UPDATE:
            r.serverMediaUpdateRequest && g(r.serverMediaUpdateRequest, t);
            break;
          default:
            break;
        }
        s.add(n.transactionId);
      }
    }
    function d(e, t) {
      var n = e.answer,
        r = e.offer;
      (t({ name: "inviteSent" }),
        y(r, t, o("ZenonLoggingEventTypes").ZenonUpdateIceInfoDirection.Send),
        n &&
          y(
            n,
            t,
            o("ZenonLoggingEventTypes").ZenonUpdateIceInfoDirection.Send,
          ));
    }
    function m(e, t) {
      var n = e.answer;
      n &&
        y(
          n,
          t,
          o("ZenonLoggingEventTypes").ZenonUpdateIceInfoDirection.Receive,
        );
    }
    function p(e, t, n) {
      var r = e.iceCandidateSdps;
      r.forEach(function (e) {
        e.candidateSdpString != null &&
          t({
            direction: n,
            name: "updateIceInfo",
            sdpString: e.candidateSdpString,
          });
      });
    }
    function _(e, t) {
      var n = e.offer;
      n &&
        y(n, t, o("ZenonLoggingEventTypes").ZenonUpdateIceInfoDirection.Send);
    }
    function f(e, t) {
      var n = e.answer;
      n &&
        y(
          n,
          t,
          o("ZenonLoggingEventTypes").ZenonUpdateIceInfoDirection.Receive,
        );
    }
    function g(e, t) {
      var n = e.answer,
        r = e.offer;
      (r &&
        y(
          r,
          t,
          o("ZenonLoggingEventTypes").ZenonUpdateIceInfoDirection.Receive,
        ),
        n &&
          y(
            n,
            t,
            o("ZenonLoggingEventTypes").ZenonUpdateIceInfoDirection.Receive,
          ));
    }
    function h(e, t) {
      var n = e.answer;
      n &&
        y(n, t, o("ZenonLoggingEventTypes").ZenonUpdateIceInfoDirection.Send);
    }
    function y(e, t, n) {
      e.sdpString != null &&
        t({ direction: n, name: "updateIceInfo", sdpString: e.sdpString });
    }
    ((l.logSentMessage = u), (l.logReceivedMessage = c));
  },
  98,
);
