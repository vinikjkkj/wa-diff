__d(
  "WAWebEmployeeCommandExtensionAccessWatch",
  [
    "WATimeUtils",
    "WAWebEmployeeCommandExtensionTransport",
    "WAWebSelfReminderGating",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 5 * o("WATimeUtils").MINUTE_MILLISECONDS,
      s = [2e3, 1e4, 3e4];
    function u() {
      var t = !0,
        n = 0,
        r,
        a = function (i) {
          ((n = Date.now()),
            window.clearTimeout(r),
            o("WAWebEmployeeCommandExtensionTransport")
              .refreshEmployeeCommandExtension()
              .then(function (e) {
                if (t) {
                  o(
                    "WAWebSelfReminderGating",
                  ).updateEmployeeCommandExtensionAccess(e === "on");
                  var n = s[i];
                  o(
                    "WAWebEmployeeCommandExtensionTransport",
                  ).hasEmployeeCommandExtensionTimedOut() &&
                    n != null &&
                    (r = window.setTimeout(function () {
                      return a(i + 1);
                    }, n));
                }
              }));
        },
        i = function () {
          document.visibilityState === "visible" && Date.now() - n >= e && a(0);
        };
      return (
        a(0),
        window.addEventListener("focus", i),
        document.addEventListener("visibilitychange", i),
        function () {
          ((t = !1),
            window.clearTimeout(r),
            window.removeEventListener("focus", i),
            document.removeEventListener("visibilitychange", i));
        }
      );
    }
    l.watchEmployeeCommandExtensionAccess = u;
  },
  98,
);
