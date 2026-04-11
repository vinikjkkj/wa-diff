__d(
  "useWAWebSendIq",
  ["WADeprecatedSendIq", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u(e, t) {
      var n = o("react-compiler-runtime").c(6),
        r = s(!1),
        a = r[0],
        i = r[1],
        l;
      n[0] !== e || n[1] !== t
        ? ((l = function () {
            return (
              i(!0),
              o("WADeprecatedSendIq")
                .deprecatedSendIq(e, t)
                .finally(function () {
                  return i(!1);
                })
            );
          }),
          (n[0] = e),
          (n[1] = t),
          (n[2] = l))
        : (l = n[2]);
      var u;
      return (
        n[3] !== a || n[4] !== l
          ? ((u = [a, l]), (n[3] = a), (n[4] = l), (n[5] = u))
          : (u = n[5]),
        u
      );
    }
    l.useSendIq = u;
  },
  98,
);
