__d(
  "WAWebQueryGetPublicKeyJob",
  [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAWap",
    "WAWapDeprecatedSmaxID",
    "WAWebBackendErrors",
    "WAWebBizGatingUtils",
    "WAWebCommsWapMd",
    "WAWebDefinePersistedJob",
    "WAWebDirectConnectionUtils",
    "WAWebGraphQLProductCatalogGetPublicKeyJob",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new (r("WADeprecatedWapParser"))("getPublicKeyResponse", function (
        e,
      ) {
        var t;
        (e.assertTag("iq"), e.assertFromServer());
        var n =
            (t = e.maybeChild("public_key")) == null ||
            (t = t.maybeChild("pem")) == null
              ? void 0
              : t.contentString(),
          r =
            n != null
              ? o("WAWebDirectConnectionUtils").stringToCertificateString(n)
              : null;
        return { certificate: r };
      }),
      s = o("WAWebDefinePersistedJob")
        .defineWebPersistedJob()
        .finalStep(
          "sendStanza",
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = t.businessJid,
                  a = o("WAWebWidFactory").createWid(n);
                if (o("WAWebBizGatingUtils").isGraphQLForGetPublicKeyEnabled())
                  return o(
                    "WAWebGraphQLProductCatalogGetPublicKeyJob",
                  ).getPublicKey(a);
                var i = o("WAWap").wap(
                    "iq",
                    {
                      to: o("WAWap").S_WHATSAPP_NET,
                      type: "get",
                      smax_id: o("WAWap").SMAX_ID(
                        r("WAWapDeprecatedSmaxID").BizGetPublicKey,
                      ),
                      xmlns: "w:biz:catalog",
                      id: o("WAWap").generateId(),
                    },
                    o("WAWap").wap("public_key", {
                      jid: o("WAWebCommsWapMd").USER_JID(a),
                    }),
                  ),
                  l = yield o("WADeprecatedSendIq").deprecatedSendIq(i, e);
                if (l.success) return l.result;
                throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  l.errorCode,
                );
              },
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        )
        .end();
    l.QueryGetPublicKey = s;
  },
  98,
);
