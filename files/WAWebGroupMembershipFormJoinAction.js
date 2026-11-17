__d(
  "WAWebGroupMembershipFormJoinAction",
  [
    "JSResourceForInteraction",
    "WAWebBackendRuntime",
    "WAWebGroupInviteService",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("JSResourceForInteraction")(
      "WAWebGroupMembershipFormJoinJob",
    ).__setRef("WAWebGroupMembershipFormJoinAction");
    function s(t) {
      return o("WAWebBackendRuntime").isWebDiBackendEnabled()
        ? o("WAWebBackendRuntime")
            .runtime(o("WAWebGroupInviteService").GroupInviteService)
            .submitGroupMembershipFormJoin(t)
        : e.load().then(function (e) {
            var n = e.submitGroupMembershipFormJoinJob;
            return n(t);
          });
    }
    l.submitGroupMembershipFormJoinAction = s;
  },
  98,
);
