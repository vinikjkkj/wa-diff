__d(
  "WAWebVoipHandleIncomingSignalingMessage",
  [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebHandleVoipEncRekey",
    "WAWebVoipGatingUtils",
    "WAWebVoipStackInterface",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (
            (n === void 0 && (n = o("WAWebVoipGatingUtils").isCallingEnabled()),
            n)
          ) {
            var r = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            if (r) {
              var a,
                i = yield o("WAWebBackendApi").frontendSendAndReceive(
                  "getTcToken",
                  { wid: e.peer_jid },
                ),
                l = i.tcToken;
              yield r.handleIncomingSignalingMessage(
                t,
                e.peer_platform,
                e.peer_app_version,
                e.e,
                e.t,
                (a = e.isContact) != null ? a : !1,
                e.peer_jid.toString(),
                l,
              );
              return;
            }
          }
          o("WAWebBackendApi").frontendFireAndForget(
            "handleVoipWebIncomingSignalingMessageAction",
            { msg: e, voipNode: t },
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m(t, a) {
      return o("WAWebVoipGatingUtils").isCallingEnabled()
        ? (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] handleVoipIncomingEncRekey enc_rekey from ",
                "",
              ])),
            t.peer_jid.toString(),
          ),
          o("WAWebHandleVoipEncRekey").handleVoipEncRekey(t, a))
        : (o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] handleVoipIncomingEncRekey: disabled, dropped ",
                "",
              ])),
            t.peer_jid.toString(),
          ),
          (u || (u = n("Promise"))).reject(
            r("err")("incoming enc rekey received but calling is not enabled"),
          ));
    }
    ((l.handleVoipIncomingSignalingMessage = c),
      (l.handleVoipIncomingEncRekey = m));
  },
  98,
);
