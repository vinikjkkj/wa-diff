__d(
  "WAWebExternalCtxAuthoriseWAChat",
  [
    "WALogger",
    "WAWebExternalCtxAuthoriseWAChatMutation",
    "WAWebExternalEntryPointPrefs",
    "WAWebRelayClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = "1",
      d = "2";
    function m(t, n, a, i) {
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[external_ctx] Authorising chat",
            ])),
        ),
        o("WAWebRelayClient")
          .commitMutation(r("WAWebExternalCtxAuthoriseWAChatMutation"), {
            input: {
              recipient_jid: t.toString(),
              deeplink_type: n,
              deeplink_source: i ? c : d,
              deeplink_platform: "Web",
              partner_token: a,
            },
          })
          .then(function (e) {
            var r, a;
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[external_ctx] Authorisation successful",
                ])),
            ),
              o("WAWebExternalEntryPointPrefs").saveExternalEntryPoint(
                t,
                n,
                (e == null || (r = e.xwa_external_ctx_authorise_wa_chat) == null
                  ? void 0
                  : r.success) === !0,
                e == null || (a = e.xwa_external_ctx_authorise_wa_chat) == null
                  ? void 0
                  : a.partner_name,
              ));
          })
          .catch(function (e) {
            o("WALogger").ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[external_ctx] Authorisation error",
                ])),
            );
          })
      );
    }
    l.default = m;
  },
  98,
);
