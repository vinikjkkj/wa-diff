__d(
  "WAWebLastADVCheckTimeApi",
  ["Promise", "WAWebApiTasksScheduledTime"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      return (
        s == null &&
          (s = o("WAWebApiTasksScheduledTime").getTaskScheduledTime(
            "advDeviceInfoCheck",
          )),
        s
      );
    }
    function c(t) {
      s = (e || (e = n("Promise"))).resolve(t);
    }
    ((l.getLastADVDeviceInfoCheckTime = u),
      (l.setLastADVDeviceInfoCheckTime = c));
  },
  98,
);
