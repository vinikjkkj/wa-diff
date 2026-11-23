__d(
  "MawMpsUploadMessagesToEBPostprocessor",
  [
    "EBEnqueueMessagesForUpload",
    "EBMessageProbe",
    "MAWEBLSInWorkerSwitch",
    "MpsErrors",
    "WmiErrorReport",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t = new Map();
      try {
        (await r("EBEnqueueMessagesForUpload")(e),
          e.forEach(function (e) {
            var t = e.message,
              n = o("EBMessageProbe").getEBMessageProbeInstance();
            n.addMarkerToItem(t.messageId, "mps_upload_enqueue_success");
          }));
      } catch (r) {
        var n = o("MpsErrors").MpsErrors.classify(
          r,
          "enqueue_eb_upload",
          "backup_enqueue_failed",
        );
        (o("WmiErrorReport").reportWmiError(n),
          e.forEach(function (e) {
            var r = e.message;
            t.set(r.messageId, n);
            var a = o("EBMessageProbe").getEBMessageProbeInstance();
            a.addMarkerToItem(r.messageId, "mps_upload_enqueue_failed");
          }));
      }
      return t;
    }
    function s(t) {
      r("MAWEBLSInWorkerSwitch").isEnabled() &&
        e(
          t.filter(function (e) {
            return (
              !e.directive.isLocalOnly && !e.directive.isAlreadyUploadedToEB
            );
          }),
        );
    }
    var u = {
      name: "eb-schedule-upload",
      process: function (t) {
        return (s(t), new Map());
      },
    };
    ((l.enqueueForEBUpload = s), (l.MawMpsUploadMessagesToEBPostprocessor = u));
  },
  98,
);
