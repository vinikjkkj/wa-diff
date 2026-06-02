__d(
  "WAWebMarkAddonsAsReadUsingAddonInfra",
  [
    "WANullthrows",
    "WAWebMarkAddOnsAsReadJob",
    "WAWebMsgGetters",
    "WAWebSendReadReceiptJob",
    "react",
    "react-compiler-runtime",
    "useLazyRef",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useCallback;
    async function u(e) {
      if (e.length !== 0) {
        var t = e.map(function (e) {
          return {
            msgKey: e.id,
            sender: r("WANullthrows")(
              o("WAWebMsgGetters").getSender(e),
            ).toString(),
          };
        });
        (await o("WAWebSendReadReceiptJob").sendAddOnReadReceipts(t),
          await o(
            "WAWebMarkAddOnsAsReadJob",
          ).markAddOnsAsReadUsingAddonInfraJob(e));
      }
    }
    function c() {
      var e = o("react-compiler-runtime").c(5),
        t = r("useLazyRef")(d),
        n;
      e[0] !== t
        ? ((n = function () {
            !document.hasFocus() ||
              t.current.length === 0 ||
              (u(t.current), (t.current = []));
          }),
          (e[0] = t),
          (e[1] = n))
        : (n = e[1]);
      var a = n,
        i;
      e[2] !== a || e[3] !== t
        ? ((i = function (n) {
            var e;
            ((e = t.current).push.apply(e, n), a());
          }),
          (e[2] = a),
          (e[3] = t),
          (e[4] = i))
        : (i = e[4]);
      var l = i;
      return (o("useWAWebListener").useListener(window, "focus", a), l);
    }
    function d() {
      return [];
    }
    l.useMarkAddonsAsRead = c;
  },
  98,
);
