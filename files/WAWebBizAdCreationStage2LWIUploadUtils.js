__d(
  "WAWebBizAdCreationStage2LWIUploadUtils",
  [
    "fbt",
    "FBLogger",
    "WAWebBizAdCreationLWIMediaUpload",
    "WAWebBizAdCreationLinkWAMediaToStatus",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return r("justknobx")._("8427") ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
    }
    async function u(e, t, n) {
      var o = e.map(async function (e) {
          var o = await Promise.all([
              m(r("WAWebBizAdCreationLWIMediaUpload")([e], t, n), "lwi_upload"),
              m(r("WAWebBizAdCreationLinkWAMediaToStatus")([e]), "status_link"),
            ]),
            a = o[0];
          return a[0];
        }),
        a = await Promise.allSettled(o),
        i = [],
        l = [];
      a.forEach(function (e, t) {
        e.status === "fulfilled"
          ? i.push(e.value)
          : (l.push(t), c(e.reason, t));
      });
      var s = a.map(function (e) {
        return e.status === "fulfilled" ? e.value : null;
      });
      return { failedIndices: l, resultsByIndex: s, successfulResults: i };
    }
    function c(e, t) {
      var n = r("FBLogger")("wa_ctwa_web").addMetadata(
          "WA_WEB",
          "KEY",
          "stage2_item_index=" + t,
        ),
        o = e instanceof d ? e.cause : e;
      (e instanceof d && n.addMetadata("WA_WEB", "OPERATION", e.leg),
        n
          .catching(
            r("getErrorSafe")(
              o instanceof Error ? o : "Non-Error Stage 2 upload rejection",
            ),
          )
          .mustfix("performPartialStage2LWIUpload: upload failed item"));
    }
    var d = function (t, n) {
      ((this.leg = t), (this.cause = n));
    };
    async function m(e, t) {
      try {
        return await e;
      } catch (e) {
        throw new d(t, e);
      }
    }
    ((l.LWI_PARTIAL_UPLOAD_FAILURE_TOAST_MSG = e),
      (l.performPartialStage2LWIUpload = u));
  },
  226,
);
