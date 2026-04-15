__d(
  "WAWebUpdateMmSignalSharingExpirationWindowWorker",
  ["WAWebMmSignalSharingGatingUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return function (t, n) {
        t.isForwarded ||
          !o(
            "WAWebMmSignalSharingGatingUtils",
          ).isMmSignalSharingDisclosureEnabled() ||
          n == null ||
          e.fireAndForget(
            "mainthread_callbacks",
            "updateMmSignalSharingExpirationWindow",
            { msg: t, contextInfo: n },
          );
      };
    }
    l.createUpdateMmSignalSharingExpirationWindowWorker = e;
  },
  98,
);
