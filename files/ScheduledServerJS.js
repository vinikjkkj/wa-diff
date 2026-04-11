__d(
  "ScheduledServerJS",
  ["JSScheduler", "ScheduledApplyEach", "ServerJS"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n, a) {
      (n != null && new (r("ServerJS"))().handle(n),
        (e || (e = o("JSScheduler"))).runWithPriority(
          e.priorities.unstable_Normal,
          function () {
            (a != null && new (r("ServerJS"))().handle(a),
              new (r("ServerJS"))().handleWithCustomApplyEach(
                r("ScheduledApplyEach"),
                t,
              ));
          },
        ));
    }
    l.handle = s;
  },
  98,
);
