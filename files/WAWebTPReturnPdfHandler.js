__d(
  "WAWebTPReturnPdfHandler",
  [
    "WAKaleidoscopeClassify",
    "WALogger",
    "WAWebCmd",
    "WAWebTPLoggingUtils",
    "asyncToGeneratorRuntime",
    "cr:6711",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.buffer,
            a = t.fileName,
            i = yield o(
              "WAKaleidoscopeClassify",
            ).kaleidoscopeClassifyByMediaType(r, "document", "application/pdf");
          if (
            !i.success ||
            i.value.mimetype !== "application/pdf" ||
            i.value.score >= 90
          ) {
            var l = i.success ? "kaleidoscope_reject" : "kaleidoscope_fail";
            (o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[webtp] Desktop return PDF rejected by kaleidoscope",
                ])),
            ),
              o("WAWebTPLoggingUtils").logPdfReceiverErrorEvent(
                l,
                i.success
                  ? "Score " + i.value.score + " >= 90 or wrong mimetype"
                  : "Kaleidoscope classification failed",
                "",
              ));
            return;
          }
          var s = new File([r], a, { type: "application/pdf" });
          (n("cr:6711") == null || n("cr:6711").bringMainWindowToForeground(),
            o("WAWebCmd").Cmd.trigger("open_file_forward_modal", s));
        })),
        u.apply(this, arguments)
      );
    }
    l.default = s;
  },
  98,
);
