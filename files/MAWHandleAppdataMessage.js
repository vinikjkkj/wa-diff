__d(
  "MAWHandleAppdataMessage",
  [
    "MWFBLogger",
    "Promise",
    "WABuildMpsPayload",
    "WADecryptPkmsgOrMsg",
    "WAHandleAppdataMessageProtocol",
    "WAMPSFlushable",
    "WAResolvable",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = o("MWFBLogger").MWLogger().tags(["backend", "appdata"]),
      m = function (a, i) {
        var t = a.parsedAppdata,
          l = a.sendDeliveryReceipt,
          m = a.sendRetryReceipt,
          p = a.serverTs,
          _ = new (o("WAResolvable").Resolvable)();
        return (
          p == null &&
            d.MUSTFIX(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Appdata message has no server timestamp.",
                ])),
            ),
          o("WADecryptPkmsgOrMsg").decryptPkmsgOrMsg({
            cb: f,
            ciphertext: t.ciphertext,
            ctx: i,
            encType: t.encType,
            from: t.from,
          })
        );
        function f(e) {
          return (c || (c = n("Promise")))
            .resolve()
            .then(function () {
              return e.success
                ? (c || (c = n("Promise"))).resolve(
                    babelHelpers.extends({ type: "Decrypted" }, t, e.value),
                  )
                : (c || (c = n("Promise"))).resolve(
                    babelHelpers.extends(
                      { error: e.error, type: "Undecrypted" },
                      t,
                    ),
                  );
            })
            .then(function (e) {
              if (e.type === "Undecrypted")
                return (r("promiseDone")(m()), "NO_ACK");
              var n = o("WAHandleAppdataMessageProtocol").decodeAppdata(
                e.plaintext,
              );
              return n.success
                ? (_.resolve(),
                  o("WAMPSFlushable").mpsFlushable.enqueue(
                    o("WABuildMpsPayload").buildMpsAppdataPayload(
                      t,
                      p,
                      n.value,
                    ),
                    function (e) {
                      if (e != null) {
                        d.catching(e).MUSTFIX(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
                              "Failed to save appdata",
                            ])),
                        );
                        return;
                      }
                    },
                    "handle_appdata",
                  ),
                  r("promiseDone")(l()),
                  "NO_ACK")
                : (d.MUSTFIX(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Appdata contains unexpected message transport. ",
                        "",
                      ])),
                    n.error,
                  ),
                  "NO_ACK");
            });
        }
      };
    l.handleAppdataMessage = m;
  },
  98,
);
