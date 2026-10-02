__d(
  "MAWCreateGroup",
  ["MAWCreateGroupStep", "MAWJobManager"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("MAWJobManager")
      .getPersistedJobsApi()
      .definePersistedJob()
      .finalStep("createGroup", function (e) {
        var t = e.extras,
          n = e.key,
          r = e.s2sInstanceKey,
          a = e.subject,
          i = e.users;
        return o("MAWCreateGroupStep").createGroupStep(n, a, i, t, r);
      })
      .end();
    l.createGroup = e;
  },
  98,
);
