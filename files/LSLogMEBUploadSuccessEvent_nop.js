__d(
  "LSLogMEBUploadSuccessEvent.nop",
  ["Promise", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("requireDeferred")(
        "EncryptedBackupUploadFailureFalcoEvent",
      ).__setRef("LSLogMEBUploadSuccessEvent.nop"),
      u = r("requireDeferred")(
        "EncryptedBackupUploadSuccessFalcoEvent",
      ).__setRef("LSLogMEBUploadSuccessEvent.nop"),
      c = function (r, o, a, i, l) {
        if (a != null) {
          var t = l ? u.load() : s.load();
          t.then(function (e) {
            return e.log(function () {
              return { message_id: a, trace_id: i };
            });
          });
        }
        return (e || (e = n("Promise"))).resolve();
      };
    ((c.__nop_name__ = "LSLogMEBUploadSuccessEvent"), (l.default = c));
  },
  98,
);
