__d(
  "WAWebOpenMediaInAnotherAppAction",
  ["WAAbortError", "WALogger", "WAWebMediaDocumentUtils", "WAWebStateUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (n, r) {
        n == null || n.stopPropagation();
        var t = o("WAWebStateUtils").unproxy(r);
        o("WAWebMediaDocumentUtils")
          .openMediaFileWithToast(t)
          .catch(function (t) {
            o("WAAbortError").isAbortError(t) ||
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Error while opening media file: ",
                    "",
                  ])),
                t,
              );
          });
      };
    l.handleOpenAnotherAppButtonClick = s;
  },
  98,
);
