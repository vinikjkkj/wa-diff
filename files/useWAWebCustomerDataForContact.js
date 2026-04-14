__d(
  "useWAWebCustomerDataForContact",
  [
    "WAJids",
    "WALogger",
    "WAWebCustomerDataAction",
    "WAWebCustomerDataCollection",
    "react",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useEffect,
      d = u.useState;
    function m(t) {
      var n = d(null),
        r = n[0],
        a = n[1];
      return (
        c(
          function () {
            var n = !1,
              r = o("WAJids").unsafeCoerceToChatJid(t.toString());
            return (
              o("WAWebCustomerDataAction")
                .retrieveCustomerDataForChatJid(r)
                .then(function (e) {
                  n || a(e);
                })
                .catch(function (t) {
                  return o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "Failed to retrieve customer data",
                        ])),
                    )
                    .catching(t);
                }),
              function () {
                n = !0;
              }
            );
          },
          [t],
        ),
        o("useWAWebListener").useListener(
          o("WAWebCustomerDataCollection").CustomerDataCollection,
          "add",
          function (e) {
            e.chatJid === t.toString() && a(e);
          },
        ),
        o("useWAWebListener").useListener(
          o("WAWebCustomerDataCollection").CustomerDataCollection,
          "change",
          function (e) {
            e.chatJid === t.toString() && a(e);
          },
        ),
        r
      );
    }
    l.default = m;
  },
  98,
);
