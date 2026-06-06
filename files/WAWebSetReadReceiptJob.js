__d(
  "WAWebSetReadReceiptJob",
  [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAWap",
    "WAWebBackendErrors",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new (r("WADeprecatedWapParser"))("photoResponseParser", function (
      e,
    ) {
      var t = e.child("privacy"),
        n = t.child("category"),
        r = n.attrString("name"),
        o = n.attrString("value");
      return r !== "readreceipts" ? { value: "error" } : { value: o };
    });
    async function s(t) {
      var n,
        r = await o("WADeprecatedSendIq").deprecatedSendIq(
          (n = o("WAWap")).wap(
            "iq",
            {
              to: n.S_WHATSAPP_NET,
              type: "set",
              xmlns: "privacy",
              id: n.generateId(),
            },
            n.wap(
              "privacy",
              null,
              n.wap("category", {
                name: "readreceipts",
                value: t ? "all" : "none",
              }),
            ),
          ),
          e,
        );
      return r.success
        ? r.result
        : Promise.reject(
            new (o("WAWebBackendErrors").ServerStatusCodeError)(
              r.errorCode,
              r.errorText,
            ),
          );
    }
    l.default = s;
  },
  98,
);
