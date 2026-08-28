__d(
  "ZenonMWMessageReliabilityLogger",
  [
    "ODS",
    "ZenonMWMessageMap",
    "ZenonMWMessageQPLLogger",
    "ZenonMWMessageReliabilityLogTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Map(),
      u = new Map(),
      c = new Map();
    function d(e) {
      c.set(e, !0);
    }
    function m(e, t, n) {
      var r = u.get(e);
      r && k(r, t, n);
    }
    function p(e) {
      v(e)
        ? k(
            e,
            o("ZenonMWMessageReliabilityLogTypes")
              .ZenonMWMessageReliabilityEvent.RECEIVED_RESPONSE,
          )
        : k(
            e,
            o("ZenonMWMessageReliabilityLogTypes")
              .ZenonMWMessageReliabilityEvent.RECEIVED_REQUEST,
          );
    }
    function _(e) {
      v(e)
        ? k(
            e,
            o("ZenonMWMessageReliabilityLogTypes")
              .ZenonMWMessageReliabilityEvent.PROCESSING_RESPONSE,
          )
        : k(
            e,
            o("ZenonMWMessageReliabilityLogTypes")
              .ZenonMWMessageReliabilityEvent.PROCESSING_REQUEST,
          );
    }
    function f(e) {
      v(e) ||
        k(
          e,
          o("ZenonMWMessageReliabilityLogTypes").ZenonMWMessageReliabilityEvent
            .REQUEST_AFTER_NULL_CHECK,
        );
    }
    function g(e) {
      v(e) ||
        k(
          e,
          o("ZenonMWMessageReliabilityLogTypes").ZenonMWMessageReliabilityEvent
            .REQUEST_AFTER_TRANSLATION,
        );
    }
    function h(e) {
      v(e)
        ? k(
            e,
            o("ZenonMWMessageReliabilityLogTypes")
              .ZenonMWMessageReliabilityEvent.PROCESSED_RESPONSE,
          )
        : k(
            e,
            o("ZenonMWMessageReliabilityLogTypes")
              .ZenonMWMessageReliabilityEvent.PROCESSED_REQUEST,
          );
    }
    function y(e) {
      v(e)
        ? k(
            e,
            o("ZenonMWMessageReliabilityLogTypes")
              .ZenonMWMessageReliabilityEvent.SENDING_RESPONSE,
          )
        : k(
            e,
            o("ZenonMWMessageReliabilityLogTypes")
              .ZenonMWMessageReliabilityEvent.SENDING_REQUEST,
          );
    }
    function C(e) {
      v(e)
        ? k(
            e,
            o("ZenonMWMessageReliabilityLogTypes")
              .ZenonMWMessageReliabilityEvent.SENT_RESPONSE,
          )
        : k(
            e,
            o("ZenonMWMessageReliabilityLogTypes")
              .ZenonMWMessageReliabilityEvent.SENT_REQUEST,
          );
    }
    function b(e, t) {
      var n = v(e)
        ? o("ZenonMWMessageReliabilityLogTypes").ZenonMWMessageReliabilityEvent
            .SEND_RESPONSE_FAILED
        : o("ZenonMWMessageReliabilityLogTypes").ZenonMWMessageReliabilityEvent
            .SEND_REQUEST_FAILED;
      k(e, n, { errorMessage: t });
    }
    function v(e) {
      var t = e.jsonPayload.header;
      return t.responseStatusCode != null;
    }
    function S(e) {
      var t = isNaN(+e) ? 0 : +e,
        n = 9223372036854776e3;
      return Math.round(t % n);
    }
    function R(t, n) {
      var a = t.jsonPayload.header,
        i = r("ZenonMWMessageMap")[a.type].toLowerCase(),
        l = v(t) ? "response" : "request",
        s = "ZenonMWMessageReliabilityLogger";
      switch (n) {
        case o("ZenonMWMessageReliabilityLogTypes")
          .ZenonMWMessageReliabilityEvent.RECEIVED_REQUEST:
        case o("ZenonMWMessageReliabilityLogTypes")
          .ZenonMWMessageReliabilityEvent.RECEIVED_RESPONSE:
          ((e || (e = o("ODS"))).bumpEntityKey(
            4083,
            "zenon_multiway",
            "receive_" + l + "_" + i + "_" + s,
          ),
            (e || (e = o("ODS"))).flush());
          return;
        case o("ZenonMWMessageReliabilityLogTypes")
          .ZenonMWMessageReliabilityEvent.PROCESSING_REQUEST:
          ((e || (e = o("ODS"))).bumpEntityKey(
            4083,
            "zenon_multiway",
            "processing_" + l + "_" + i + "_" + s,
          ),
            (e || (e = o("ODS"))).flush());
          return;
        case o("ZenonMWMessageReliabilityLogTypes")
          .ZenonMWMessageReliabilityEvent.PROCESSED_REQUEST:
          ((e || (e = o("ODS"))).bumpEntityKey(
            4083,
            "zenon_multiway",
            "processed_" + l + "_" + i + "_" + s,
          ),
            (e || (e = o("ODS"))).flush());
          return;
        case o("ZenonMWMessageReliabilityLogTypes")
          .ZenonMWMessageReliabilityEvent.SENDING_RESPONSE:
          ((e || (e = o("ODS"))).bumpEntityKey(
            4083,
            "zenon_multiway",
            "sending_" + l + "_" + i + "_" + s,
          ),
            (e || (e = o("ODS"))).flush());
          return;
        case o("ZenonMWMessageReliabilityLogTypes")
          .ZenonMWMessageReliabilityEvent.REQUEST_AFTER_TRANSLATION:
          ((e || (e = o("ODS"))).bumpEntityKey(
            4083,
            "zenon_multiway",
            "after_translation_" + l + "_" + i + "_" + s,
          ),
            (e || (e = o("ODS"))).flush());
          return;
        case o("ZenonMWMessageReliabilityLogTypes")
          .ZenonMWMessageReliabilityEvent.REQUEST_AFTER_NULL_CHECK:
          ((e || (e = o("ODS"))).bumpEntityKey(
            4083,
            "zenon_multiway",
            "after_null_check_" + l + "_" + i + "_" + s,
          ),
            (e || (e = o("ODS"))).flush());
          return;
        case o("ZenonMWMessageReliabilityLogTypes")
          .ZenonMWMessageReliabilityEvent.SENT_RESPONSE:
        case o("ZenonMWMessageReliabilityLogTypes")
          .ZenonMWMessageReliabilityEvent.SENT_REQUEST:
          ((e || (e = o("ODS"))).bumpEntityKey(
            4083,
            "zenon_multiway",
            "sent_" + l + "_" + i + "_" + s,
          ),
            (e || (e = o("ODS"))).flush());
          return;
        default:
          return;
      }
    }
    var L = {
      connectionState: "",
      peerConnectionState: "",
      signalingState: "",
    };
    function E(e) {
      var t = babelHelpers.extends({}, L, e);
      if (
        L.connectionState !== t.connectionState ||
        L.peerConnectionState !== t.peerConnectionState ||
        L.signalingState !== t.signalingState
      ) {
        L = t;
        for (var n of s.keys()) o("ZenonMWMessageQPLLogger").updateState(n, e);
      }
    }
    function k(e, t, n) {
      var r,
        a = e.jsonPayload.header,
        i = (r = s.get(a.transactionId)) != null ? r : new Set();
      (s.set(a.transactionId, i),
        !(
          t !==
            o("ZenonMWMessageReliabilityLogTypes")
              .ZenonMWMessageReliabilityEvent.SENT_SM_EVENT &&
          t !==
            o("ZenonMWMessageReliabilityLogTypes")
              .ZenonMWMessageReliabilityEvent.PROCESSED_SM_EVENT &&
          i.has(t)
        ) &&
          (i.add(t),
          u.set(a.transactionId, e),
          R(e, t),
          o("ZenonMWMessageQPLLogger").log(
            e,
            t,
            babelHelpers.extends({}, n, L),
          )));
    }
    ((l.setE2eeIsMandatedForCall = d),
      (l.logEventForTxid = m),
      (l.logReceivedMessage = p),
      (l.logProcessingMessage = _),
      (l.logMessageAfterNullCheck = f),
      (l.logMessageAfterTranslation = g),
      (l.logProcessedMessage = h),
      (l.logSendingMessage = y),
      (l.logSentMessage = C),
      (l.logSendMessageFailed = b),
      (l.updateState = E));
  },
  98,
);
