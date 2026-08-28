__d(
  "CometAIUploadServiceUtils",
  [
    "FBLogger",
    "Promise",
    "ResumableUploadServiceComet",
    "ResumableUploadServiceState.enum",
    "err",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, o) {
      var a = u(o);
      return new (e || (e = n("Promise")))(function (e, n) {
        if (a == null) {
          r("FBLogger")("comet_ai").mustfix(
            "Upload service is not initialized",
          );
          var o = r("err")("Upload service is not initialized");
          n(o);
          return;
        }
        (d(a, function (e) {
          (r("FBLogger")("comet_ai").mustfix("Failed to upload file: %s", e),
            n(e));
        }),
          a.addListener(
            r("ResumableUploadServiceState.enum").SUCCESS,
            function (t) {
              e(t);
            },
          ),
          r("promiseDone")(a.resume(t)));
      });
    }
    function u(e) {
      return e == null
        ? null
        : r("ResumableUploadServiceComet").create({
            consumer: e,
            serviceDomain: "facebook.com",
          });
    }
    function c(t, o) {
      var a = u(o);
      return new (e || (e = n("Promise")))(function (e, n) {
        if (a == null) {
          r("FBLogger")("comet_ai").mustfix(
            "Upload service is not initialized",
          );
          var o = r("err")("Upload service is not initialized");
          n(o);
          return;
        }
        (d(a, function (e) {
          (r("FBLogger")("comet_ai").mustfix("Failed to upload file: %s", e),
            n(e));
        }),
          a.addListener(
            r("ResumableUploadServiceState.enum").SUCCESS,
            function (n) {
              return e({ file: t, file_id: n });
            },
          ),
          r("promiseDone")(a.resume(t)));
      });
    }
    function d(e, t) {
      (e.addListener(r("ResumableUploadServiceState.enum").FAIL, t),
        e.addListener(
          r("ResumableUploadServiceState.enum").TRANSPORT_FAILURE,
          t,
        ),
        e.addListener(r("ResumableUploadServiceState.enum").CANCEL, t));
    }
    ((l.uploadFile = s), (l.uploadFileForMultifile = c));
  },
  98,
);
