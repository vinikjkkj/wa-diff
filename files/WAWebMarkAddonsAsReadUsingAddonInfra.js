__d(
  "WAWebMarkAddonsAsReadUsingAddonInfra",
  [
    "WAWebMarkAddOnsAsReadJob",
    "WAWebMsgGetters",
    "WAWebSendReadReceiptJob",
    "nullthrows",
    "react",
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
            sender: r("nullthrows")(
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
      var e = r("useLazyRef")(function () {
          return [];
        }),
        t = s(
          function () {
            !document.hasFocus() ||
              e.current.length === 0 ||
              (u(e.current), (e.current = []));
          },
          [e],
        ),
        n = s(
          function (n) {
            var r;
            ((r = e.current).push.apply(r, n), t());
          },
          [t, e],
        );
      return (o("useWAWebListener").useListener(window, "focus", t), n);
    }
    l.useMarkAddonsAsRead = c;
  },
  98,
);
