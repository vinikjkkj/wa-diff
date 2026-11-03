__d(
  "WAWebQueryPrivacyDisallowedListPnJob",
  [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAWap",
    "WAWebJidToWid",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new (r("WADeprecatedWapParser"))(
      "getPrivacyDisallowedListParser",
      function (e) {
        var t = e.child("privacy"),
          n = t.maybeChild("list");
        if (n == null) return { status: "match" };
        var r = n.mapChildren(function (e) {
          return o("WAWebJidToWid").deviceJidToUserWid(e.attrDeviceJid("jid"));
        });
        return { status: "mismatch", users: r, dhash: n.attrString("dhash") };
      },
    );
    async function s(t) {
      var n,
        a = (n = o("WAWap")).wap(
          "iq",
          {
            to: n.S_WHATSAPP_NET,
            type: "get",
            id: n.generateId(),
            xmlns: "privacy",
          },
          n.wap(
            "privacy",
            null,
            n.wap("list", {
              name: n.CUSTOM_STRING(t),
              value: n.CUSTOM_STRING("contact_blacklist"),
            }),
          ),
        ),
        i = await o("WADeprecatedSendIq").deprecatedSendIq(a, e);
      if (i.success) return i.result;
      throw r("err")("invalid response");
    }
    l.queryPrivacyDisallowedListPn = s;
  },
  98,
);
