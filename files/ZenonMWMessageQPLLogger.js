__d(
  "ZenonMWMessageQPLLogger",
  [
    "DateConsts",
    "QPLMsgTypesSitevarConfig.experimental",
    "QPLUserFlow",
    "ZenonLoggingUtils",
    "ZenonMWMessageMap",
    "ZenonMWMessageReliabilityLogTypes",
    "ZenonTransportChannelStatus",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 30 * o("DateConsts").MS_PER_SEC,
      s = new Map(),
      u = new (r("ZenonTransportChannelStatus"))();
    function c(e, t, n) {
      var a, i, l, s, u, c;
      if (o("ZenonLoggingUtils").shouldAllowLogging()) {
        var d = e.jsonPayload.header,
          L = r("ZenonMWMessageMap")[d.type].toLowerCase();
        if (
          r("QPLMsgTypesSitevarConfig.experimental").QPL_MSG_TYPES.includes(L)
        ) {
          var E = m(d.transactionId);
          switch (t) {
            case o("ZenonMWMessageReliabilityLogTypes")
              .ZenonMWMessageReliabilityEvent.RECEIVED_REQUEST:
              p(
                E,
                L,
                {
                  connectionState:
                    (a = n == null ? void 0 : n.connectionState) != null
                      ? a
                      : "",
                  peerConnectionState:
                    (i = n == null ? void 0 : n.peerConnectionState) != null
                      ? i
                      : "",
                  signalingState:
                    (l = n == null ? void 0 : n.signalingState) != null
                      ? l
                      : "",
                },
                e,
              );
              return;
            case o("ZenonMWMessageReliabilityLogTypes")
              .ZenonMWMessageReliabilityEvent.PROCESSED_REQUEST:
              _(E);
              return;
            case o("ZenonMWMessageReliabilityLogTypes")
              .ZenonMWMessageReliabilityEvent.SENDING_RESPONSE:
              f(E, e);
              return;
            case o("ZenonMWMessageReliabilityLogTypes")
              .ZenonMWMessageReliabilityEvent.SENT_RESPONSE:
              g(E, e);
              return;
            case o("ZenonMWMessageReliabilityLogTypes")
              .ZenonMWMessageReliabilityEvent.SEND_RESPONSE_FAILED:
              h(E, e, n == null ? void 0 : n.errorMessage);
              return;
            case o("ZenonMWMessageReliabilityLogTypes")
              .ZenonMWMessageReliabilityEvent.SENT_REQUEST:
              y(
                E,
                L,
                {
                  connectionState:
                    (s = n == null ? void 0 : n.connectionState) != null
                      ? s
                      : "",
                  peerConnectionState:
                    (u = n == null ? void 0 : n.peerConnectionState) != null
                      ? u
                      : "",
                  signalingState:
                    (c = n == null ? void 0 : n.signalingState) != null
                      ? c
                      : "",
                },
                e,
              );
              return;
            case o("ZenonMWMessageReliabilityLogTypes")
              .ZenonMWMessageReliabilityEvent.SENDING_REQUEST:
              C(E);
              return;
            case o("ZenonMWMessageReliabilityLogTypes")
              .ZenonMWMessageReliabilityEvent.SEND_REQUEST_FAILED:
              b(E, n == null ? void 0 : n.errorMessage);
              return;
            case o("ZenonMWMessageReliabilityLogTypes")
              .ZenonMWMessageReliabilityEvent.RECEIVED_RESPONSE:
              v(E, e);
              return;
            case o("ZenonMWMessageReliabilityLogTypes")
              .ZenonMWMessageReliabilityEvent.SENT_SM_EVENT:
              S(E, n == null ? void 0 : n.smEvent);
              return;
            case o("ZenonMWMessageReliabilityLogTypes")
              .ZenonMWMessageReliabilityEvent.PROCESSED_SM_EVENT:
              R(E, n == null ? void 0 : n.smEvent);
              return;
            default:
              return;
          }
        }
      }
    }
    function d(e, t) {
      o("ZenonLoggingUtils").shouldAllowLogging() &&
        r("QPLUserFlow").addAnnotations(
          r("qpl")._(398988976, "737"),
          { string: babelHelpers.extends({}, t) },
          { instanceKey: +e },
        );
    }
    function m(e) {
      var t = isNaN(+e) ? 0 : +e,
        n = 9223372036854776e3;
      return Math.round(t % n);
    }
    function p(t, n, o, a) {
      var i = u.getTransportName() + "State",
        l = babelHelpers.extends({}, o, { messageType: n });
      if (
        ((l[i] = u.getConnectionState()),
        r("QPLUserFlow").start(r("qpl")._(398988976, "737"), {
          annotations: {
            int: { retryCount: a.jsonPayload.header.retryCount },
            int_array: { messageTags: a.jsonPayload.header.messageTags },
            string: l,
          },
          instanceKey: t,
          timeoutInMs: e,
        }),
        a.jsonPayload.body.serverMediaUpdateRequest)
      ) {
        var c = a.jsonPayload.body.serverMediaUpdateRequest,
          d = c.answer,
          m = c.offer,
          p = c.update;
        r("QPLUserFlow").addAnnotations(
          r("qpl")._(398988976, "737"),
          {
            string: {
              sdpType: m ? "offer" : d ? "answer" : p ? "delta" : "empty",
            },
          },
          { instanceKey: t },
        );
      }
      var _ = function (n) {
          r("QPLUserFlow").addPoint(
            r("qpl")._(398988976, "737"),
            u.getTransportName() + "_" + n,
            { instanceKey: t },
          );
        },
        f = u.addListener("connectionStateEvent", _);
      s.set(t, f);
    }
    function _(e) {
      r("QPLUserFlow").addPoint(
        r("qpl")._(398988976, "737"),
        "processed_request",
        { instanceKey: e },
      );
    }
    function f(e, t) {
      var n = t.jsonPayload.header,
        o = n.responseStatusCode,
        a = n.responseSubCode;
      (r("QPLUserFlow").addPoint(
        r("qpl")._(398988976, "737"),
        "sending_response",
        { instanceKey: e },
      ),
        r("QPLUserFlow").addAnnotations(
          r("qpl")._(398988976, "737"),
          { int: { responseStatusCode: o, responseSubCode: a } },
          { instanceKey: e },
        ));
    }
    function g(e, t) {
      var n = t.jsonPayload.header,
        o = n.responseStatusCode,
        a = n.responseSubCode;
      r("QPLUserFlow").endSuccess(r("qpl")._(398988976, "737"), {
        annotations: { int: { responseStatusCode: o, responseSubCode: a } },
        instanceKey: e,
      });
      var i = s.get(e);
      i && (u.removeListener(i), s.delete(e));
    }
    function h(e, t, n) {
      var o = t.jsonPayload.header,
        a = o.responseStatusCode,
        i = o.responseSubCode;
      r("QPLUserFlow").endFailure(
        r("qpl")._(398988976, "737"),
        "send_response_failed",
        {
          annotations: {
            int: { responseStatusCode: a, responseSubCode: i },
            string: { errorMessage: n },
          },
          instanceKey: e,
        },
      );
      var l = s.get(e);
      l && (u.removeListener(l), s.delete(e));
    }
    function y(t, n, o, a) {
      var i = u.getTransportName() + "State",
        l = babelHelpers.extends({}, o, { messageType: n });
      ((l[i] = u.getConnectionState()),
        r("QPLUserFlow").start(r("qpl")._(398988976, "737"), {
          annotations: {
            int: { retryCount: a.jsonPayload.header.retryCount },
            int_array: { messageTags: a.jsonPayload.header.messageTags },
            string: l,
          },
          instanceKey: t,
          timeoutInMs: e,
        }));
    }
    function C(e) {
      r("QPLUserFlow").addPoint(
        r("qpl")._(398988976, "737"),
        "sending_request",
        { instanceKey: e },
      );
    }
    function b(e, t) {
      r("QPLUserFlow").endFailure(
        r("qpl")._(398988976, "737"),
        "send_request_failed",
        { annotations: { string: { errorMessage: t } }, instanceKey: e },
      );
    }
    function v(e, t) {
      var n = t.jsonPayload.header,
        o = n.responseStatusCode,
        a = n.responseSubCode;
      r("QPLUserFlow").endSuccess(r("qpl")._(398988976, "737"), {
        annotations: { int: { responseStatusCode: o, responseSubCode: a } },
        instanceKey: e,
      });
    }
    function S(e, t) {
      t != null &&
        r("QPLUserFlow").addPoint(
          r("qpl")._(398988976, "737"),
          "sent_sm_event:" + t,
          { instanceKey: e },
        );
    }
    function R(e, t) {
      t != null &&
        r("QPLUserFlow").addPoint(
          r("qpl")._(398988976, "737"),
          "processed_sm_event:" + t,
          { instanceKey: e },
        );
    }
    ((l.log = c), (l.updateState = d));
  },
  98,
);
