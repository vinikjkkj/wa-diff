__d(
  "useWAWebGdprDelete",
  [
    "WAWap",
    "WAWebGdprHookUtils",
    "react-compiler-runtime",
    "useWAWebGdprStatus",
    "useWAWebSendIq",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = o("WAWebGdprHookUtils").getGdprIq(
              o("WAWap").generateId(),
              e,
              "delete",
            )),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        o("useWAWebSendIq").useSendIq(
          n,
          o("useWAWebGdprStatus").GdprStatusWapParser,
        )
      );
    }
    l.useGdprDelete = e;
  },
  98,
);
