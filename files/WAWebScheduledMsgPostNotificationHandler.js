__d(
  "WAWebScheduledMsgPostNotificationHandler",
  [
    "WALogger",
    "WAWebAck",
    "WAWebBackendApi",
    "WAWebModelStorageUtils",
    "WAWebMsgKey",
    "WAWebScheduledMessagesGatingUtils",
    "WAWebScheduledMsgRevealKeyStore",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _;
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (
            o(
              "WAWebScheduledMessagesGatingUtils",
            ).isScheduledMessagesSenderEnabled()
          ) {
            var a = n.xwa2_notify_scheduled_message_post;
            if (a == null) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg][mex][post] missing post data in notification",
                    ])),
                )
                .sendLogs("mex-scheduled-msg-post-missing-data");
              return;
            }
            var i = a.rkid,
              l = a.status;
            if (i == null) {
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg][mex][post] missing rkid in notification",
                    ])),
                )
                .sendLogs("mex-scheduled-msg-post-missing-rkid");
              return;
            }
            if (
              (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][post] received rkid, status=",
                    "",
                  ])),
                l,
              ),
              l == null)
            ) {
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg][mex][post] missing status in notification",
                    ])),
                )
                .sendLogs("mex-scheduled-msg-post-missing-status");
              return;
            }
            try {
              var p = yield o(
                "WAWebScheduledMsgRevealKeyStore",
              ).getRevealKeyByRevealKeyId(i);
              if (p == null) {
                o("WALogger").WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg][mex][post] no record found for rkid",
                    ])),
                );
                return;
              }
              switch (l) {
                case "SUCCESS":
                  yield h(p.msgId);
                  break;
                default:
                  yield C(p.msgId, l);
              }
            } catch (e) {
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg][mex][post] handler failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("mex-scheduled-msg-post-handler-failed");
            }
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][mex][post] SUCCESS for msgId",
              ])),
          ),
            yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                ["message", "scheduled-msg-reveal-key"],
                (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (t) {
                      var n = t[0],
                        r = t[1];
                      (yield n.merge(e, {
                        ack: o("WAWebAck").ACK.RECEIVED,
                        isScheduledMsg: void 0,
                      }),
                        yield r.remove(e));
                    },
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              ),
            o("WAWebBackendApi").frontendFireAndForget("updateMsgModelAcks", {
              updates: [
                {
                  id: r("WAWebMsgKey").from(e),
                  ack: o("WAWebAck").ACK.RECEIVED,
                },
              ],
            }));
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (o("WALogger")
            .ERROR(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][post] FAILURE for msgId status=",
                  "",
                ])),
              t,
            )
            .sendLogs("mex-scheduled-msg-post-failure"),
            yield o("WAWebScheduledMsgRevealKeyStore").updateRevealKeyStatus(
              e,
              "FAILED",
            ));
        })),
        b.apply(this, arguments)
      );
    }
    l.mexHandleScheduledMsgPost = f;
  },
  98,
);
