__d(
  "WAWebVoipHandleIncomingSignalingMessage",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebHandleVoipEncRekey",
    "WAWebVoipGatingUtils",
    "WAWebVoipStackInterface",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    async function u(e, t, n) {
      if (
        (n === void 0 && (n = o("WAWebVoipGatingUtils").isCallingEnabled()), n)
      ) {
        var r = await o("WAWebVoipStackInterface").getVoipStackInterface();
        if (r) {
          var a,
            i = await o("WAWebBackendApi").frontendSendAndReceive(
              "getTcToken",
              { wid: e.peer_jid },
            ),
            l = i.tcToken;
          await r.handleIncomingSignalingMessage(
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
    }
    function c(t, n) {
      return o("WAWebVoipGatingUtils").isCallingEnabled()
        ? (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] handleVoipIncomingEncRekey enc_rekey from ",
                "",
              ])),
            t.peer_jid.toString(),
          ),
          o("WAWebHandleVoipEncRekey").handleVoipEncRekey(t, n))
        : (o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] handleVoipIncomingEncRekey: disabled, dropped ",
                "",
              ])),
            t.peer_jid.toString(),
          ),
          Promise.reject(
            r("err")("incoming enc rekey received but calling is not enabled"),
          ));
    }
    ((l.handleVoipIncomingSignalingMessage = u),
      (l.handleVoipIncomingEncRekey = c));
  },
  98,
);
