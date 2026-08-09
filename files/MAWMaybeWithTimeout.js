__d(
  "MAWMaybeWithTimeout",
  ["MAWODSProxy", "WAOdsEnums", "WAPromiseDelays"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      return o("WAPromiseDelays").withTimeout(
        e.then(function (e) {
          return (
            o("MAWODSProxy").odsBumpEntityKey({
              entity: o("WAOdsEnums").Entity.MAW_NON_TIMEOUT,
              key: r != null ? r : "unknown",
            }),
            e
          );
        }),
        t,
        function () {
          return (
            o("MAWODSProxy").odsBumpEntityKey({
              entity: o("WAOdsEnums").Entity.MAW_TIMEOUT,
              key: r != null ? r : "unknown",
            }),
            n()
          );
        },
      );
    }
    l.maybeWithTimeout = e;
  },
  98,
);
