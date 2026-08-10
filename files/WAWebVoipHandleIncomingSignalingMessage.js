__d(
  "WAWebVoipHandleIncomingSignalingMessage",
  [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebHandleVoipEncRekey",
    "WAWebVoipGatingUtils",
    "WAWebVoipPeerTcToken",
    "WAWebVoipStackInterface",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d;
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (
            (n === void 0 && (n = o("WAWebVoipGatingUtils").isCallingEnabled()),
            n)
          ) {
            var r = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            if (r) {
              var a,
                i = yield o("WAWebVoipPeerTcToken").fetchPeerTcToken(
                  e.peer_jid,
                );
              yield r.handleIncomingSignalingMessage(
                t,
                e.peer_platform,
                e.peer_app_version,
                e.e,
                e.t,
                (a = e.isContact) != null ? a : !1,
                e.peer_jid.toString(),
                i,
              );
              return;
            }
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: web-only fallback, stack interface unavailable",
                ])),
            );
          } else
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: web-only fallback, voip stack unavailable",
                ])),
            );
          o("WAWebBackendApi").frontendFireAndForget(
            "handleVoipWebIncomingSignalingMessageAction",
            { msg: e, voipNode: t },
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _(t, a) {
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
          (d || (d = n("Promise"))).reject(
            r("err")("incoming enc rekey received but calling is not enabled"),
          ));
    }
    ((l.handleVoipIncomingSignalingMessage = m),
      (l.handleVoipIncomingEncRekey = _));
  },
  98,
);
