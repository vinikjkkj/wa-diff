__d(
  "WAWebBizAdCreationStage2LWIUploadUtils",
  [
    "fbt",
    "FBLogger",
    "Promise",
    "WAWebBizAdCreationLWIMediaUpload",
    "WAWebBizAdCreationLinkWAMediaToStatus",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e;
    function u() {
      return r("justknobx")._("8427")
        ? s._(/*BTDS*/ "Some media couldn't be uploaded and were removed")
        : s._(/*BTDS*/ "Some media failed to process and were removed.");
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
                        _(
                          r("WAWebBizAdCreationLWIMediaUpload")([t], o, a),
                          "lwi_upload",
                        ),
                        _(
                          r("WAWebBizAdCreationLinkWAMediaToStatus")([t]),
                          "status_link",
                        ),
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
              : (u.push(t), m(e.reason, t));
          });
          var c = l.map(function (e) {
            return e.status === "fulfilled" ? e.value : null;
          });
          return { failedIndices: u, resultsByIndex: c, successfulResults: s };
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      var n = r("FBLogger")("wa_ctwa_web").addMetadata(
          "WA_WEB",
          "KEY",
          "stage2_item_index=" + t,
        ),
        o = e instanceof p ? e.cause : e;
      (e instanceof p && n.addMetadata("WA_WEB", "OPERATION", e.leg),
        n
          .catching(
            r("getErrorSafe")(
              o instanceof Error ? o : "Non-Error Stage 2 upload rejection",
            ),
          )
          .mustfix("performPartialStage2LWIUpload: upload failed item"));
    }
    var p = function (t, n) {
      ((this.leg = t), (this.cause = n));
    };
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            return yield e;
          } catch (e) {
            throw new p(t, e);
          }
        })),
        f.apply(this, arguments)
      );
    }
    ((l.LWI_PARTIAL_UPLOAD_FAILURE_TOAST_MSG = u),
      (l.performPartialStage2LWIUpload = c));
  },
  226,
);
