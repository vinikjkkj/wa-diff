__d(
  "WAWebHandlePreKeyLow",
  [
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebSignalStoreApi",
    "WAWebUploadPreKeysJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Set(),
      u = new (r("WADeprecatedWapParser"))("lowKeyParser", function (e) {
        return (
          e.assertTag("notification"),
          e.assertAttr("type", "encrypt"),
          e.assertFromServer(),
          {
            stanzaId: e.attrString("id"),
            numRemaining: e.child("count").attrInt("value"),
          }
        );
      });
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = u.parse(t);
          if (r.error)
            throw (
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "handlePreKeyLow: Parsing Error: ",
                    "",
                  ])),
                r.error.toString(),
              ),
              r.error
            );
          var a = r.success,
            i = o("WAWap").wap("ack", {
              to: o("WAWap").S_WHATSAPP_NET,
              id: o("WAWap").CUSTOM_STRING(a.stanzaId),
              class: "notification",
            });
          return s.has(n)
            ? i
            : (s.add(n),
              o("WAWebSignalStoreApi").waSignalStore.setServerHasPreKeys(!1),
              yield o(
                "WAWebEventsWaitForOfflineDeliveryEnd",
              ).waitForOfflineDeliveryEnd(),
              o("WAWebUploadPreKeysJob")
                .uploadPreKeys()
                .then(function () {
                  return i;
                })
                .finally(function () {
                  return void s.delete(n);
                }));
        })),
        d.apply(this, arguments)
      );
    }
    l.default = c;
  },
  98,
);
