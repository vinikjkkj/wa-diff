__d(
  "WhatsAppBusinessAccountManagerEverstoreUploader",
  [
    "ApiClient",
    "ResumableUploadService",
    "ResumableUploadServiceState.enum",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "whatsapp_business_api",
      s = (function () {
        function t() {
          this.uploadService = new (r("ResumableUploadService"))(
            e,
            r("ApiClient").getAccessToken(),
            r("uuidv4")(),
            null,
            null,
            null,
            null,
            null,
            !0,
          );
        }
        var n = t.prototype;
        return (
          (n.addSuccessHandler = function (t) {
            return this.uploadService.addListener(
              r("ResumableUploadServiceState.enum").SUCCESS,
              function (e) {
                return t(e);
              },
            );
          }),
          (n.addErrorHandler = function (t) {
            return (
              this.uploadService.addListener(
                r("ResumableUploadServiceState.enum").TRANSPORT_FAILURE,
                t,
              ),
              this.uploadService.addListener(
                r("ResumableUploadServiceState.enum").FAIL,
                t,
              )
            );
          }),
          (n.upload = async function (t) {
            await this.uploadService.resume(t);
          }),
          (n.cancel = function () {
            this.uploadService.cancel();
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
