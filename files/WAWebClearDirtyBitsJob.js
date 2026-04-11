__d(
  "WAWebClearDirtyBitsJob",
  [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new (r("WADeprecatedWapParser"))("cleanDirtyReplyParser", function (
        e,
      ) {
        return (e.assertAttr("type", "result"), {});
      });
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (t.length !== 0) {
            var n = t.map(function (e) {
                return o("WAWap").wap("clean", {
                  type: o("WAWap").CUSTOM_STRING(e.type),
                  timestamp: o("WAWap").INT(e.timestamp),
                });
              }),
              r = o("WAWap").wap(
                "iq",
                {
                  to: o("WAWap").S_WHATSAPP_NET,
                  type: "set",
                  xmlns: "urn:xmpp:whatsapp:dirty",
                  id: o("WAWap").generateId(),
                },
                n,
              );
            try {
              (yield o("WADeprecatedSendIq").deprecatedSendIq(r, u),
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "clearDirtyBits: success for type: ",
                      "",
                    ])),
                  t
                    .map(function (e) {
                      return e.type;
                    })
                    .join(","),
                ));
            } catch (e) {
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "clearDirtyBits: failed with error",
                  ])),
              );
            }
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.clearDirtyBits = c;
  },
  98,
);
