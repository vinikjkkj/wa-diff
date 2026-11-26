__d(
  "WANotifyDeviceChange",
  ["WAGlobals", "WALogger", "WASmaxDevicesNotifyRPC", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var n = t.users;
      if (n.size === 0) return Promise.resolve();
      var r = o("WAGlobals").getConfig().maxUsersForNotifyDeviceChange(),
        a = Array.from(n);
      return (
        n.size > r &&
          (o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "The maximum number of users that can be notified is ",
                "",
              ])),
            r,
          ),
          (a = a.slice(0, r))),
        u(a)
      );
    }
    async function u(e) {
      var t = await o("WASmaxDevicesNotifyRPC").sendNotifyRPC({
        userArgs: e.map(function (e) {
          return { userJid: e };
        }),
      });
      if (t.name !== "NotifyResponseSuccess") {
        t.name;
        var n = t.value.errorDeviceIqErrors;
        throw n.name === "RetryableIQError"
          ? r("err")("Failed with a retryable error")
          : r("err")("Failed with an unexpected error code " + n.value.code);
      }
    }
    l.notifyDeviceChange = s;
  },
  98,
);
