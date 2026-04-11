__d(
  "WAWebVerifyPostcodeJob",
  [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAWap",
    "WAWapDeprecatedSmaxID",
    "WAWebBackendErrors",
    "WAWebBizGatingUtils",
    "WAWebCommsWapMd",
    "WAWebDefinePersistedJob",
    "WAWebGraphQLVerifyPostcodeJob",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new (r("WADeprecatedWapParser"))("productResponse", function (e) {
        (e.assertTag("iq"), e.assertFromServer());
        var t = e.child("result_code"),
          n = e.maybeChild("encrypted_location_name"),
          r = n == null ? void 0 : n.contentString(),
          a = t.contentString();
        if (
          a !== "invalid_postcode" &&
          a !== "unserviceable_location" &&
          a !== "success"
        )
          throw new (o("WAWebBackendErrors").ServerStatusCodeError)(500);
        return { resultCode: a, encryptedLocationName: r };
      }),
      s = o("WAWebDefinePersistedJob")
        .defineWebPersistedJob()
        .finalStep(
          "sendStanza",
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = t.businessJid,
                  a = t.directConnectionEncryptedInfo,
                  i = o("WAWebWidFactory").createWid(n);
                if (
                  o("WAWebBizGatingUtils").isGraphQLForVerifyPostcodeEnabled()
                )
                  return o("WAWebGraphQLVerifyPostcodeJob").verifyPostcode(
                    i,
                    a,
                  );
                var l = o("WAWap").wap(
                    "iq",
                    {
                      id: o("WAWap").generateId(),
                      xmlns: "w:biz:catalog",
                      type: "get",
                      to: o("WAWap").S_WHATSAPP_NET,
                      smax_id: o("WAWap").SMAX_ID(
                        r("WAWapDeprecatedSmaxID").CatalogVerifyPostcode,
                      ),
                    },
                    o("WAWap").wap(
                      "verify_postcode",
                      { biz_jid: o("WAWebCommsWapMd").USER_JID(i) },
                      o("WAWap").wap(
                        "direct_connection_encrypted_info",
                        null,
                        a,
                      ),
                    ),
                  ),
                  s = yield o("WADeprecatedSendIq").deprecatedSendIq(l, e);
                if (s.success) return s.result;
                throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  s.errorCode,
                );
              },
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        )
        .end();
    l.VerifyPostcode = s;
  },
  98,
);
