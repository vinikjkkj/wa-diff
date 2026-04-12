__d(
  "useWAWebSendIq",
  ["WADeprecatedSendIq", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u(e, t) {
      var n = s(!1),
        r = n[0],
        a = n[1];
      return [
        r,
        function () {
          return (
            a(!0),
            o("WADeprecatedSendIq")
              .deprecatedSendIq(e, t)
              .finally(function () {
                return a(!1);
              })
          );
        },
      ];
    }
    l.useSendIq = u;
  },
  98,
);
