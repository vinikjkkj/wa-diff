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
    function m(t) {
      var n = t.chatId,
        a = t.deepLinkType,
        i = t.isExternal,
        l = t.partnerToken;
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
              recipient_jid: n.toString(),
              deeplink_type: a,
              deeplink_source: i ? c : d,
              deeplink_platform: "Web",
              partner_token: l,
            },
          })
          .then(function (e) {
            var t, r;
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[external_ctx] Authorisation successful",
                ])),
            ),
              o("WAWebExternalEntryPointPrefs").saveExternalEntryPoint({
                authSuccess:
                  (e == null ||
                  (t = e.xwa_external_ctx_authorise_wa_chat) == null
                    ? void 0
                    : t.success) === !0,
                chatId: n,
                deepLinkType: a,
                partnerName:
                  e == null ||
                  (r = e.xwa_external_ctx_authorise_wa_chat) == null
                    ? void 0
                    : r.partner_name,
              }));
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
