__d(
  "WAWebTPPdfSharer",
  ["Promise", "WAWebTPWhatsAppNetBridge", "asyncToGeneratorRuntime", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = Number.MAX_SAFE_INTEGER,
      u = Number.MAX_SAFE_INTEGER,
      c = Number.MAX_SAFE_INTEGER,
      d = (function () {
        function t(e) {
          this.$1 = new (o(
            "WAWebTPWhatsAppNetBridge",
          ).WAWebTPWhatsAppNetBridge)(e);
        }
        var a = t.prototype;
        return (
          (a.publishAppConfig = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return this.$1.publishWhenReady("APP_CONFIG", e);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.listenForCancel = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t = this;
              return new (e || (e = n("Promise")))(function (e, n) {
                t.$1.listenOnce(
                  "PDF_SHARER_CANCEL",
                  function () {
                    return e();
                  },
                  {
                    timeoutMs: s,
                    onTimeout: function (t) {
                      n(t);
                    },
                  },
                );
              });
            });
            function r() {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.listenForError = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t = this;
              return new (e || (e = n("Promise")))(function (e) {
                t.$1.listen("APP_ERROR", function () {
                  return e();
                });
              });
            });
            function r() {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.listenForCheckboxToggle = function (t) {
            return this.$1.listen("PDF_SHARER_CHECKBOX_TOGGLE", t);
          }),
          (a.listenForGetPDf = function () {
            var t = this;
            return new (e || (e = n("Promise")))(function (e, n) {
              t.$1.listenOnce(
                "PDF_SHARER_GET_PDF",
                function () {
                  return e();
                },
                {
                  timeoutMs: u,
                  onTimeout: function (t) {
                    n(t);
                  },
                },
              );
            });
          }),
          (a.sharePdf = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, o, a) {
                var i = this;
                return (
                  this.$1.publishWhenReady(
                    "PDF_SHARER_GET_PDF_DOCUMENT",
                    { fileBuffer: t, fileName: o, sessionId: a },
                    [t],
                  ),
                  new (e || (e = n("Promise")))(function (e, t) {
                    i.$1.listenOnce(
                      "PDF_SHARER_GET_PDF_RESPONSE",
                      function (n) {
                        var o = n.errorMessage,
                          a = n.errorType,
                          i = n.savePreference,
                          l = n.success;
                        if (l) e({ savePreference: i });
                        else {
                          var s = r("err")(o != null ? o : "unknown");
                          ((s.name =
                            a != null ? a : "sharer_connection_failed"),
                            t(s));
                        }
                      },
                      {
                        timeoutMs: c,
                        onTimeout: function (n) {
                          t(n);
                        },
                      },
                    );
                  })
                );
              },
            );
            function o(e, n, r) {
              return t.apply(this, arguments);
            }
            return o;
          })()),
          (a.destroy = function () {
            this.$1.destroy();
          }),
          t
        );
      })();
    l.WAWebTPPdfSharer = d;
  },
  98,
);
