__d(
  "WAWebSetReadReceiptJob",
  [
    "Promise",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAWap",
    "WAWebBackendErrors",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new (r("WADeprecatedWapParser"))("photoResponseParser", function (e) {
        var t = e.child("privacy"),
          n = t.child("category"),
          r = n.attrString("name"),
          o = n.attrString("value");
        return r !== "readreceipts" ? { value: "error" } : { value: o };
      });
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r,
            a = yield o("WADeprecatedSendIq").deprecatedSendIq(
              (r = o("WAWap")).wap(
                "iq",
                {
                  to: r.S_WHATSAPP_NET,
                  type: "set",
                  xmlns: "privacy",
                  id: r.generateId(),
                },
                r.wap(
                  "privacy",
                  null,
                  r.wap("category", {
                    name: "readreceipts",
                    value: t ? "all" : "none",
                  }),
                ),
              ),
              s,
            );
          return a.success
            ? a.result
            : (e || (e = n("Promise"))).reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  a.errorCode,
                  a.errorText,
                ),
              );
        })),
        c.apply(this, arguments)
      );
    }
    l.default = u;
  },
  98,
);
