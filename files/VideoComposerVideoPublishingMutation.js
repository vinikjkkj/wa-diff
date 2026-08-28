__d(
  "VideoComposerVideoPublishingMutation",
  [
    "RelayAPIConfig",
    "VideoComposerVideoPublishingMutation.graphql",
    "cr:1012418",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 9e4,
      u =
        e !== void 0
          ? e
          : (e = n("VideoComposerVideoPublishingMutation.graphql"));
    function c(e, t, o, a, i) {
      var l = r("RelayAPIConfig").fetchTimeout;
      return (
        (r("RelayAPIConfig").fetchTimeout = s),
        n("cr:1012418").commitMutation(t, {
          uploadables: o,
          mutation: u,
          variables: { input: e },
          onCompleted: function (t) {
            ((r("RelayAPIConfig").fetchTimeout = l), a(t));
          },
          onError: function (t) {
            ((r("RelayAPIConfig").fetchTimeout = l), i(t));
          },
        })
      );
    }
    l.commit = c;
  },
  98,
);
