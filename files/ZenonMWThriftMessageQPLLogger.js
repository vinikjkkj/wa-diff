__d(
  "ZenonMWThriftMessageQPLLogger",
  [
    "DateConsts",
    "QPLMsgTypesSitevarConfig.experimental",
    "QPLUserFlow",
    "ZenonLoggingUtils",
    "ZenonMWMessageReliabilityLogTypes",
    "ZenonMWThriftMessageMap",
    "ZenonMWThriftMessageTagUtils",
    "ZenonMWThriftResponseStatusCodeUtils",
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
        var d = e.messageHeader,
          L = o("ZenonMWThriftMessageMap")
            .messageTypeToString(e.messageHeader.type)
            .toLowerCase();
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
    function p(t, n, a, i) {
      var l = u.getTransportName() + "State",
        c = babelHelpers.extends({}, a, { messageType: n });
      if (
        ((c[l] = u.getConnectionState()),
        r("QPLUserFlow").start(r("qpl")._(398988976, "737"), {
          annotations: {
            int: { retryCount: i.messageHeader.retryCount },
            int_array: {
              messageTags: o(
                "ZenonMWThriftMessageTagUtils",
              ).fromThriftMessageTags(i.messageHeader.messageTags),
            },
            string: c,
          },
          instanceKey: t,
          timeoutInMs: e,
        }),
        i.messageBody.serverMediaUpdateRequest)
      ) {
        var d = i.messageBody.serverMediaUpdateRequest,
          m = d.answer,
          p = d.offer,
          _ = d.update;
        r("QPLUserFlow").addAnnotations(
          r("qpl")._(398988976, "737"),
          {
            string: {
              sdpType: p ? "offer" : m ? "answer" : _ ? "delta" : "empty",
            },
          },
          { instanceKey: t },
        );
      }
      var f = function (n) {
          r("QPLUserFlow").addPoint(
            r("qpl")._(398988976, "737"),
            u.getTransportName() + "_" + n,
            { instanceKey: t },
          );
        },
        g = u.addListener("connectionStateEvent", f);
      s.set(t, g);
    }
    function _(e) {
      r("QPLUserFlow").addPoint(
        r("qpl")._(398988976, "737"),
        "processed_request",
        { instanceKey: e },
      );
    }
    function f(e, t) {
      var n = t.messageHeader,
        a = n.responseStatusCode,
        i = n.responseSubCode;
      (r("QPLUserFlow").addPoint(
        r("qpl")._(398988976, "737"),
        "sending_response",
        { instanceKey: e },
      ),
        r("QPLUserFlow").addAnnotations(
          r("qpl")._(398988976, "737"),
          {
            int: {
              responseStatusCode: a
                ? o(
                    "ZenonMWThriftResponseStatusCodeUtils",
                  ).getResponseStatusCodeFromThrift(a)
                : 200,
              responseSubCode: i
                ? o(
                    "ZenonMWThriftResponseStatusCodeUtils",
                  ).getResponseSubCodeFromThrift(i)
                : 9e3,
            },
          },
          { instanceKey: e },
        ));
    }
    function g(e, t) {
      var n = t.messageHeader,
        a = n.responseStatusCode,
        i = n.responseSubCode;
      r("QPLUserFlow").endSuccess(r("qpl")._(398988976, "737"), {
        annotations: {
          int: {
            responseStatusCode: a
              ? o(
                  "ZenonMWThriftResponseStatusCodeUtils",
                ).getResponseStatusCodeFromThrift(a)
              : 200,
            responseSubCode: i
              ? o(
                  "ZenonMWThriftResponseStatusCodeUtils",
                ).getResponseSubCodeFromThrift(i)
              : 9e3,
          },
        },
        instanceKey: e,
      });
      var l = s.get(e);
      l && (u.removeListener(l), s.delete(e));
    }
    function h(e, t, n) {
      var a = t.messageHeader,
        i = a.responseStatusCode,
        l = a.responseSubCode;
      r("QPLUserFlow").endFailure(
        r("qpl")._(398988976, "737"),
        "send_response_failed",
        {
          annotations: {
            int: {
              responseStatusCode: i
                ? o(
                    "ZenonMWThriftResponseStatusCodeUtils",
                  ).getResponseStatusCodeFromThrift(i)
                : 200,
              responseSubCode: l
                ? o(
                    "ZenonMWThriftResponseStatusCodeUtils",
                  ).getResponseSubCodeFromThrift(l)
                : 9e3,
            },
            string: { errorMessage: n },
          },
          instanceKey: e,
        },
      );
      var c = s.get(e);
      c && (u.removeListener(c), s.delete(e));
    }
    function y(t, n, a, i) {
      var l = u.getTransportName() + "State",
        s = babelHelpers.extends({}, a, { messageType: n });
      ((s[l] = u.getConnectionState()),
        r("QPLUserFlow").start(r("qpl")._(398988976, "737"), {
          annotations: {
            int: { retryCount: i.messageHeader.retryCount },
            int_array: {
              messageTags: o(
                "ZenonMWThriftMessageTagUtils",
              ).fromThriftMessageTags(i.messageHeader.messageTags),
            },
            string: s,
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
      var n = t.messageHeader,
        a = n.responseStatusCode,
        i = n.responseSubCode;
      r("QPLUserFlow").endSuccess(r("qpl")._(398988976, "737"), {
        annotations: {
          int: {
            responseStatusCode: a
              ? o(
                  "ZenonMWThriftResponseStatusCodeUtils",
                ).getResponseStatusCodeFromThrift(a)
              : 200,
            responseSubCode: i
              ? o(
                  "ZenonMWThriftResponseStatusCodeUtils",
                ).getResponseSubCodeFromThrift(i)
              : 9e3,
          },
        },
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
