__d(
  "WAWebBizAdCreationStage2LWIUploadUtils",
  [
    "fbt",
    "FBLogger",
    "WAWebBizAdCreationLWIMediaUpload",
    "WAWebBizAdCreationLinkWAMediaToStatus",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return s._(/*BTDS*/ "Some media failed to process and were removed.");
    }
    async function u(e, t, n) {
      var o = e.map(async function (e) {
          var o = await Promise.all([
              r("WAWebBizAdCreationLWIMediaUpload")([e], t, n),
              r("WAWebBizAdCreationLinkWAMediaToStatus")([e]),
            ]),
            a = o[0];
          return a[0];
        }),
        a = await Promise.allSettled(o),
        i = [],
        l = [];
      return (
        a.forEach(function (e, t) {
          e.status === "fulfilled"
            ? i.push(e.value)
            : (l.push(t),
              r("FBLogger")("wa_ctwa_web").mustfix(
                "performPartialStage2LWIUpload: upload failed item " +
                  t +
                  " - " +
                  String(e.reason),
              ));
        }),
        { failedIndices: l, successfulResults: i }
      );
    }
    ((l.LWI_PARTIAL_UPLOAD_FAILURE_TOAST_MSG = e),
      (l.performPartialStage2LWIUpload = u));
  },
  226,
);
