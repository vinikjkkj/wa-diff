__d(
  "WAWebGroupLifecycleServiceWebLive",
  [
    "JSResourceForInteraction",
    "Promise",
    "WAWebGroupLifecycleService",
    "WebDi.Async",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("JSResourceForInteraction")("WAWebGroupCreateJob").__setRef(
        "WAWebGroupLifecycleServiceWebLive",
      ),
      u = r("JSResourceForInteraction")("WAWebGroupExitJob").__setRef(
        "WAWebGroupLifecycleServiceWebLive",
      ),
      c = o("WAWebGroupLifecycleService").GroupLifecycleService.make(
        function* () {
          var t = yield* o("WebDi.Async").fromPromise(function () {
              return (e || (e = n("Promise"))).all([s.load(), u.load()]);
            }),
            r = t[0].createGroup,
            a = t[1].leaveGroup,
            i = {
              createGroup: function (t, n, a) {
                return o("WebDi.Async").fromPromise(function () {
                  return r(t, n, a);
                });
              },
              leaveGroup: function (t) {
                return o("WebDi.Async").fromPromise(function () {
                  return a(t);
                });
              },
            };
          return i;
        },
      );
    l.GroupLifecycleServiceWebLive = c;
  },
  98,
);
