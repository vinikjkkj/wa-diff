__d(
  "WAWebOpenMediaInAnotherAppAction",
  ["WALogger", "WAWebMediaDocumentUtils", "WAWebStateUtils", "cr:7565"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (r, a) {
        (r == null || r.stopPropagation(),
          n("cr:7565") == null ||
            n("cr:7565")
              .openMediaFile(
                o("WAWebStateUtils").unproxy(a),
                o("WAWebMediaDocumentUtils").displayFileOpeningToast,
              )
              .catch(function (t) {
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Error while opening media file: ",
                      "",
                    ])),
                  t,
                );
              }));
      };
    l.handleOpenAnotherAppButtonClick = s;
  },
  98,
);
