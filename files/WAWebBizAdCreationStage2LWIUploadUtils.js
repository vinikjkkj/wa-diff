__d(
  "WAWebBizAdCreationStage2LWIUploadUtils",
  [
    "fbt",
    "FBLogger",
    "Promise",
    "WAWebBizAdCreationLWIMediaUpload",
    "WAWebBizAdCreationLinkWAMediaToStatus",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e;
    function u() {
      return s._(/*BTDS*/ "Some media failed to process and were removed.");
    }
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, o, a) {
          var i = t.map(
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    var i = yield (e || (e = n("Promise"))).all([
                        r("WAWebBizAdCreationLWIMediaUpload")([t], o, a),
                        r("WAWebBizAdCreationLinkWAMediaToStatus")([t]),
                      ]),
                      l = i[0];
                    return l[0];
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            ),
            l = yield (e || (e = n("Promise"))).allSettled(i),
            s = [],
            u = [];
          l.forEach(function (e, t) {
            e.status === "fulfilled"
              ? s.push(e.value)
              : (u.push(t),
                r("FBLogger")("wa_ctwa_web").mustfix(
                  "performPartialStage2LWIUpload: upload failed item " +
                    t +
                    " - " +
                    String(e.reason),
                ));
          });
          var c = l.map(function (e) {
            return e.status === "fulfilled" ? e.value : null;
          });
          return { failedIndices: u, resultsByIndex: c, successfulResults: s };
        })),
        d.apply(this, arguments)
      );
    }
    ((l.LWI_PARTIAL_UPLOAD_FAILURE_TOAST_MSG = u),
      (l.performPartialStage2LWIUpload = c));
  },
  226,
);
