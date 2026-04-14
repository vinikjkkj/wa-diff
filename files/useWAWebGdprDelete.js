__d(
  "useWAWebGdprDelete",
  ["WAWap", "WAWebGdprHookUtils", "useWAWebGdprStatus", "useWAWebSendIq"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("useWAWebSendIq").useSendIq(
        o("WAWebGdprHookUtils").getGdprIq(o("WAWap").generateId(), e, "delete"),
        o("useWAWebGdprStatus").GdprStatusWapParser,
      );
    }
    l.useGdprDelete = e;
  },
  98,
);
