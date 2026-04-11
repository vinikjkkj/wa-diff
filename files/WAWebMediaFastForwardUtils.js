__d(
  "WAWebMediaFastForwardUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.id;
      return (
        !t.isPSA() &&
        !t.isCAPISupportAccount() &&
        !t.isBot() &&
        !t.isHosted() &&
        !t.isNewsletter() &&
        !e.isEnterprise
      );
    }
    i.canEnableFastForward = e;
  },
  66,
);
