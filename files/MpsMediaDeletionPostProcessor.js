__d(
  "MpsMediaDeletionPostProcessor",
  ["MpsErrors", "MpsTypes", "WmiMediaService"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.directive,
        n = e.message,
        r =
          t.actionType === o("MpsTypes").ActionType.DeleteTopLevel
            ? o("WmiMediaService")
                .mediaService()
                .handleMessageDeletion(n.threadId, t.targetMessageId)
            : t.actionType === o("MpsTypes").ActionType.DeleteThread
              ? o("WmiMediaService")
                  .mediaService()
                  .handleThreadDeletion(n.threadId)
              : null;
      return r == null
        ? void 0
        : r.catch(function (e) {
            return o("MpsErrors").MpsErrors.classify(
              e,
              "media_deletion",
              "write_failed",
            );
          });
    }
    var s = {
      name: "MpsMediaDeletionPostProcessor",
      process: async function (n) {
        var t = new Map(),
          r = n
            .map(function (n) {
              var r;
              return (r = e(n)) == null
                ? void 0
                : r.then(function (e) {
                    e != null && t.set(n.message.messageId, e);
                  });
            })
            .filter(Boolean);
        return (r.length > 0 && (await Promise.all(r)), t);
      },
    };
    l.MpsMediaDeletionPostProcessor = s;
  },
  98,
);
