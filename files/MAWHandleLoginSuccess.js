__d(
  "MAWHandleLoginSuccess",
  ["MAWQplProxy", "Promise", "WAPassiveMode", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function () {
        return (
          o("MAWQplProxy").sendQplPointThroughBridge(
            r("qpl")._(1056839232, "112"),
            "wai_login",
          ),
          o("WAPassiveMode").maybeProcessPassiveMode(),
          (e || (e = n("Promise"))).resolve("NO_ACK")
        );
      };
    l.handleLoginSuccess = s;
  },
  98,
);
