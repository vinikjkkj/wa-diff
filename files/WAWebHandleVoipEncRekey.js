__d(
  "WAWebHandleVoipEncRekey",
  [
    "WALogger",
    "WAWebHandleMsgTypes.flow",
    "WAWebVoipStackInterface",
    "WAWebVoipValidateAndDecryptEnc",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c;
    async function d(t, n) {
      var r;
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[handleVoipEncRekey] enc_rekey from ",
            " call=",
            "",
          ])),
        t.peer_jid.toString(),
        (r = t.call_id) != null ? r : "unknown",
      );
      var a = await Promise.all([
          o("WAWebVoipValidateAndDecryptEnc").validateAndDecryptEnc(n, t),
          o("WAWebVoipStackInterface").getVoipStackInterface(),
        ]),
        i = a[0],
        l = i.result,
        d = i.retryCount,
        m = a[1];
      switch (
        (o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[handleVoipEncRekey] e2e res=",
              " retry=",
              " stack=",
              "",
            ])),
          String(l),
          String(d != null ? d : 0),
          String(m != null),
        ),
        l)
      ) {
        case o("WAWebHandleMsgTypes.flow").E2EProcessResult.SUCCESS:
          if (m == null)
            o("WALogger").ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[handleVoipEncRekey] stack null, enc_rekey dropped peer=",
                  "",
                ])),
              t.peer_jid.toString(),
            );
          else {
            var p;
            (await m.handleIncomingSignalingMessage(
              n,
              t.peer_platform,
              t.peer_app_version,
              t.e,
              t.t,
              (p = t.is_offline) != null ? p : !1,
              t.peer_jid.toString(),
            ),
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
        shouldRetry: l === o("WAWebHandleMsgTypes.flow").E2EProcessResult.RETRY,
        retryCount: d,
      };
    }
    l.handleVoipEncRekey = d;
  },
  98,
);
