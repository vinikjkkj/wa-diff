__d(
  "WAWebTPPdfSharer",
  ["WAWebTPWhatsAppNetBridge", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = Number.MAX_SAFE_INTEGER,
      s = Number.MAX_SAFE_INTEGER,
      u = Number.MAX_SAFE_INTEGER,
      c = (function () {
        function t(e) {
          this.$1 = new (o(
            "WAWebTPWhatsAppNetBridge",
          ).WAWebTPWhatsAppNetBridge)(e);
        }
        var n = t.prototype;
        return (
          (n.publishAppConfig = async function (t) {
            return this.$1.publishWhenReady("APP_CONFIG", t);
          }),
          (n.listenForCancel = async function () {
            var t = this;
            return new Promise(function (n, r) {
              t.$1.listenOnce(
                "PDF_SHARER_CANCEL",
                function () {
                  return n();
                },
                {
                  timeoutMs: e,
                  onTimeout: function (t) {
                    r(t);
                  },
                },
              );
            });
          }),
          (n.listenForError = async function () {
            var e = this;
            return new Promise(function (t) {
              e.$1.listen("APP_ERROR", function () {
                return t();
              });
            });
          }),
          (n.listenForCheckboxToggle = function (t) {
            return this.$1.listen("PDF_SHARER_CHECKBOX_TOGGLE", t);
          }),
          (n.listenForGetPDf = function () {
            var e = this;
            return new Promise(function (t, n) {
              e.$1.listenOnce(
                "PDF_SHARER_GET_PDF",
                function () {
                  return t();
                },
                {
                  timeoutMs: s,
                  onTimeout: function (t) {
                    n(t);
                  },
                },
              );
            });
          }),
          (n.sharePdf = async function (t, n, o) {
            var e = this;
            return (
              this.$1.publishWhenReady(
                "PDF_SHARER_GET_PDF_DOCUMENT",
                { fileBuffer: t, fileName: n, sessionId: o },
                [t],
              ),
              new Promise(function (t, n) {
                e.$1.listenOnce(
                  "PDF_SHARER_GET_PDF_RESPONSE",
                  function (e) {
                    var o = e.errorMessage,
                      a = e.errorType,
                      i = e.savePreference,
                      l = e.success,
                      s = e.uid;
                    if (l) t({ savePreference: i, uid: s });
                    else {
                      var u = r("err")(o != null ? o : "unknown");
                      ((u.name = a != null ? a : "sharer_connection_failed"),
                        n(u));
                    }
                  },
                  {
                    timeoutMs: u,
                    onTimeout: function (t) {
                      n(t);
                    },
                  },
                );
              })
            );
          }),
          (n.listenForReturnPdf = function (t) {
            return this.$1.listen("PDF_SHARER_RETURN_PDF", t);
          }),
          (n.destroy = function () {
            this.$1.destroy();
          }),
          t
        );
      })();
    l.WAWebTPPdfSharer = c;
  },
  98,
);
