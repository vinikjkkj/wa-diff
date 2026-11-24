__d(
  "WAWebGroupLifecycleServiceWebLive",
  [
    "WAWebGroupCreateJob",
    "WAWebGroupExitJob",
    "WAWebGroupLifecycleService",
    "WebDi.Async",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGroupLifecycleService").GroupLifecycleService.make(
      function* () {
        var e = {
          createGroup: function (t, n, r) {
            return o("WebDi.Async").fromPromise(function () {
              return o("WAWebGroupCreateJob").createGroup(t, n, r);
            });
          },
          leaveGroup: function (t) {
            return o("WebDi.Async").fromPromise(function () {
              return o("WAWebGroupExitJob").leaveGroup(t);
            });
          },
        };
        return e;
      },
    );
    l.GroupLifecycleServiceWebLive = e;
  },
  98,
);
