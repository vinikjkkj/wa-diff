__d(
  "WAWebHandleDigestKey",
  [
    "Promise",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebDigestKeyJob",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new (r("WADeprecatedWapParser"))("digestKeyParser", function (e) {
        return (
          e.assertTag("notification"),
          e.assertAttr("type", "encrypt"),
          e.assertFromServer(),
          e.child("digest").assertTag("digest"),
          { stanzaId: e.attrString("id") }
        );
      });
    function c(t) {
      var r = u.parse(t);
      if (r.error)
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Parsing Error: ",
                "",
              ])),
            r.error.toString(),
          ),
          (s || (s = n("Promise"))).reject(r.error)
        );
      var a = r.success,
        i = o("WAWap").wap("ack", {
          to: o("WAWap").S_WHATSAPP_NET,
          id: o("WAWap").CUSTOM_STRING(a.stanzaId),
          class: "notification",
        });
      return o("WAWebDigestKeyJob")
        .digestKey()
        .then(function () {
          return i;
        });
    }
    l.default = c;
  },
  98,
);
