__d(
  "MAWDefinePersistedJob",
  ["MAWJobManager", "Promise", "WAJobBuilder"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        definePersistedJob: function () {
          return o("WAJobBuilder").definePersistedJob();
        },
      };
    function u(t) {
      var r = o("MAWJobManager").getJobManager();
      Object.keys(t).forEach(function (o) {
        var a = t[o];
        r.addPersistedJobImplementation(o, function () {
          return (e || (e = n("Promise"))).resolve(a);
        });
      });
    }
    ((l.persistedJobsApi = s), (l.setMsgrJobImplementations = u));
  },
  98,
);
