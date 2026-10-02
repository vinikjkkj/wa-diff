__d(
  "MAWHandleThreadMetadata",
  ["MAWBridge", "MAWSharedOfflineResumeUINotifier", "Promise", "WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = function (r) {
        return (
          o("WALogger").DEV(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Handle thread metadata: ",
                "}",
              ])),
            JSON.stringify(r),
          ),
          o("MAWBridge")
            .getBridge()
            .fireAndForget("event", "uiUpdate", {
              events: [{ tag: "COPDigestReceived", value: r }],
            }),
          o(
            "MAWSharedOfflineResumeUINotifier",
          ).offlineResumeUINotifier.setThreadMetadata(r),
          (s || (s = n("Promise"))).resolve("NO_ACK")
        );
      };
    l.handleThreadMetadata = u;
  },
  98,
);
