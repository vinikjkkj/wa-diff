__d(
  "ZenonMWThriftSendMessageMutation",
  [
    "CometRelayErrorHandling",
    "Promise",
    "RequestStreamBodyUtils",
    "ZenonMWThriftMessageSerializer",
    "ZenonMWThriftSendMessageMutation.graphql",
    "asyncToGeneratorRuntime",
    "cr:1012418",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t, a, i) {
      return new (s || (s = n("Promise")))(function (l, s) {
        n("cr:1012418").commitMutation(i, {
          mutation:
            e !== void 0
              ? e
              : (e = n("ZenonMWThriftSendMessageMutation.graphql")),
          onCompleted: function (t) {
            return l(t);
          },
          onError: function (t) {
            return (
              r("gkx")("20935") &&
                o("CometRelayErrorHandling").markErrorAsHandled(t),
              s(t)
            );
          },
          variables: {
            input: {
              endpoint: JSON.stringify(t),
              message: o("RequestStreamBodyUtils").uint8ArrayToBase64(
                o("ZenonMWThriftMessageSerializer").serializeMWThriftMessage(
                  a,
                  !0,
                ),
              ),
            },
          },
        });
      });
    }
    function c(e) {
      var t = e.rtc_web_send_multiway_thrift_signaling_message;
      if (t != null && t.response != null) {
        var n = o("RequestStreamBodyUtils").base64ToUint8Array(t.response),
          r = o("ZenonMWThriftMessageSerializer").deserializeMWThriftMessage(
            n,
            !0,
          ),
          a = r.messageBody,
          i = r.messageHeader;
        return { body: a, header: i };
      }
      return { body: null, header: null };
    }
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield u(e, t, n);
          return c(r);
        })),
        m.apply(this, arguments)
      );
    }
    l.sendMessage = d;
  },
  98,
);
