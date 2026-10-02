__d(
  "WAWebHandleVoipEncRekey",
  [
    "Promise",
    "WALogger",
    "WAWebHandleMsgTypes.flow",
    "WAWebVoipStackInterface",
    "WAWebVoipValidateAndDecryptEnc",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d;
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[handleVoipEncRekey] enc_rekey from ",
                " call=",
                "",
              ])),
            t.peer_jid.toString(),
            (a = t.call_id) != null ? a : "unknown",
          );
          var i = yield (d || (d = n("Promise"))).all([
              o("WAWebVoipValidateAndDecryptEnc").validateAndDecryptEnc(r, t),
              o("WAWebVoipStackInterface").getVoipStackInterface(),
            ]),
            l = i[0],
            m = l.result,
            p = l.retryCount,
            _ = i[1];
          switch (
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[handleVoipEncRekey] e2e res=",
                  " retry=",
                  " stack=",
                  "",
                ])),
              String(m),
              String(p != null ? p : 0),
              String(_ != null),
            ),
            m)
          ) {
            case o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS:
              if (_ == null)
                o("WALogger").ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[handleVoipEncRekey] stack null, enc_rekey dropped peer=",
                      "",
                    ])),
                  t.peer_jid.toString(),
                );
              else {
                var f;
                (yield _.handleIncomingSignalingMessage({
                  msgE: t.e,
                  msgOffline: (f = t.is_offline) != null ? f : !1,
                  msgPlatform: t.peer_platform,
                  msgT: t.t,
                  msgVersion: t.peer_app_version,
                  peerJid: t.peer_jid.toString(),
                  tcToken: void 0,
                  xmlNode: r,
                }),
                  o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[handleVoipEncRekey] forwarded to WASM stack +",
                      ])),
                  ));
              }
              break;
            default:
              break;
          }
          return {
            shouldRetry:
              m === o("WAWebHandleMsgTypes.flow").E2EProcessResult.RETRY,
            retryCount: p,
          };
        })),
        p.apply(this, arguments)
      );
    }
    l.handleVoipEncRekey = m;
  },
  98,
);
