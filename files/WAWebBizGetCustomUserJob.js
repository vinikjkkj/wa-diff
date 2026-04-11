__d(
  "WAWebBizGetCustomUserJob",
  [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAWap",
    "WAWapDeprecatedSmaxID",
    "WAWebBackendErrors",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new (r("WADeprecatedWapParser"))("customURLResponse", function (e) {
      (e.assertTag("iq"), e.assertFromServer());
      var t = e.child("user"),
        n = t.attrUserJid("jid");
      return { user: { jid: n } };
    });
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            a = (n = o("WAWap")).wap(
              "iq",
              {
                smax_id: n.SMAX_ID(
                  r("WAWapDeprecatedSmaxID").BtmCustomUrlGetUser,
                ),
                xmlns: "fb:thrift_iq",
                type: "get",
                to: n.S_WHATSAPP_NET,
                id: n.generateId(),
              },
              n.wap("custom_url", null, n.wap("path", null, t)),
            ),
            i = yield o("WADeprecatedSendIq").deprecatedSendIq(a, e);
          if (!i.success)
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              i.errorCode,
              i.errorText,
            );
          return i.result;
        })),
        u.apply(this, arguments)
      );
    }
    l.getUserByCustomURL = s;
  },
  98,
);
