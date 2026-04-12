__d(
  "WAWebMarkAddonsAsReadUsingAddonInfra",
  [
    "WANullthrows",
    "WAWebMarkAddOnsAsReadJob",
    "WAWebMsgGetters",
    "WAWebSendReadReceiptJob",
    "asyncToGeneratorRuntime",
    "react",
    "useLazyRef",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useCallback;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length !== 0) {
            var t = e.map(function (e) {
              return {
                msgKey: e.id,
                sender: r("WANullthrows")(
                  o("WAWebMsgGetters").getSender(e),
                ).toString(),
              };
            });
            (yield o("WAWebSendReadReceiptJob").sendAddOnReadReceipts(t),
              yield o(
                "WAWebMarkAddOnsAsReadJob",
              ).markAddOnsAsReadUsingAddonInfraJob(e));
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d() {
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
    l.useMarkAddonsAsRead = d;
  },
  98,
);
