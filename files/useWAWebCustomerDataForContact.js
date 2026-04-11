__d(
  "useWAWebCustomerDataForContact",
  [
    "WAJids",
    "WALogger",
    "WAWebCustomerDataAction",
    "WAWebCustomerDataCollection",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useEffect,
      d = u.useState;
    function m(e) {
      var t = o("react-compiler-runtime").c(7),
        n = d(null),
        r = n[0],
        a = n[1],
        i,
        l;
      (t[0] !== e
        ? ((i = function () {
            var t = !1,
              n = o("WAJids").unsafeCoerceToChatJid(e.toString());
            return (
              o("WAWebCustomerDataAction")
                .retrieveCustomerDataForChatJid(n)
                .then(function (e) {
                  t || a(e);
                })
                .catch(p),
              function () {
                t = !0;
              }
            );
          }),
          (l = [e]),
          (t[0] = e),
          (t[1] = i),
          (t[2] = l))
        : ((i = t[1]), (l = t[2])),
        c(i, l));
      var s;
      (t[3] !== e
        ? ((s = function (n) {
            n.chatJid === e.toString() && a(n);
          }),
          (t[3] = e),
          (t[4] = s))
        : (s = t[4]),
        o("useWAWebListener").useListener(
          o("WAWebCustomerDataCollection").CustomerDataCollection,
          "add",
          s,
        ));
      var u;
      return (
        t[5] !== e
          ? ((u = function (n) {
              n.chatJid === e.toString() && a(n);
            }),
            (t[5] = e),
            (t[6] = u))
          : (u = t[6]),
        o("useWAWebListener").useListener(
          o("WAWebCustomerDataCollection").CustomerDataCollection,
          "change",
          u,
        ),
        r
      );
    }
    function p(t) {
      return o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Failed to retrieve customer data",
            ])),
        )
        .catching(t);
    }
    l.default = m;
  },
  98,
);
