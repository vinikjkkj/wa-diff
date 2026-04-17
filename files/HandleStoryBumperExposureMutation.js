__d(
  "HandleStoryBumperExposureMutation",
  ["CometRelay", "HandleStoryBumperExposureMutation.graphql"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0 ? e : (e = n("HandleStoryBumperExposureMutation.graphql"));
    function u(e, t, n) {
      return o("CometRelay").commitMutation(e, {
        mutation: s,
        variables: { bumperClass: t, wasHidden: n },
      });
    }
    l.default = u;
  },
  98,
);
