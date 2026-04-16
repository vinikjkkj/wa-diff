__d(
  "CometReauthChallengeListener",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set();
    function l(t) {
      return (
        e.add(t),
        function () {
          e.delete(t);
        }
      );
    }
    function s(t) {
      for (var n of e) n(t);
    }
    ((i.addReauthChallengeListener = l),
      (i.notifyReauthChallengeListeners = s));
  },
  66,
);
