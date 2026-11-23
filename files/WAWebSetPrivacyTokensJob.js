__d(
  "WAWebSetPrivacyTokensJob",
  [
    "$InternalEnum",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAWap",
    "WAWebBackendErrors",
    "WAWebCommsWapMd",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new (r("WADeprecatedWapParser"))(
        "setPrivacyTokensParser",
        function (e) {
          var t = { stanzaId: e.attrString("id") };
          return t;
        },
      ),
      s = n("$InternalEnum")({ TrustedContact: "trusted_contact" });
    async function u(t, n, r) {
      var a,
        i = n.map(function (e) {
          return o("WAWap").wap("token", {
            jid: o("WAWebCommsWapMd").USER_JID(t),
            t: o("WAWap").CUSTOM_STRING(String(r)),
            type: o("WAWap").CUSTOM_STRING(e),
          });
        }),
        l = await o("WADeprecatedSendIq").deprecatedSendIq(
          (a = o("WAWap")).wap(
            "iq",
            {
              to: a.S_WHATSAPP_NET,
              type: "set",
              xmlns: "privacy",
              id: a.generateId(),
            },
            a.wap("tokens", null, i),
          ),
          e,
        );
      if (!l.success)
        throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
          l.errorCode,
          l.errorText,
        );
    }
    ((l.TokenType = s), (l.issuePrivacyToken = u));
  },
  98,
);
