__d(
  "WAWebWebTPParentPdfFocusManagement.react",
  [
    "WAWebKeyboardConstants",
    "WAWebKeyboardTabUtils",
    "WAWebPdfViewerEventEmitter",
    "WAWebTPPdfViewerGatingUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useEffect;
    function c(e) {
      var t = e.containerRef,
        n = e.mimetype;
      return (
        u(
          function () {
            var e = function () {
              var e = t.current;
              if (e) {
                var n,
                  r = o("WAWebKeyboardTabUtils").getTabbableElements(
                    e,
                    o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                  );
                (n = r[0]) == null || n.focus();
              }
            };
            o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.on(
              "focus:firstInParent",
              e,
            );
            var n = function () {
              var e = t.current;
              if (e) {
                var n = o("WAWebKeyboardTabUtils").getTabbableElements(
                    e,
                    o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                  ),
                  r = n[n.length - 1];
                r == null || r.focus();
              }
            };
            return (
              o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.on(
                "focus:lastInParent",
                n,
              ),
              function () {
                (o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.off(
                  "focus:firstInParent",
                  e,
                ),
                  o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.off(
                    "focus:lastInParent",
                    n,
                  ));
              }
            );
          },
          [t],
        ),
        u(
          function () {
            if (
              o(
                "WAWebTPPdfViewerGatingUtils",
              ).isWebTPPdfViewerEnabledForMimeType(n)
            ) {
              var e = function (n) {
                if (
                  n.key ===
                  o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.TAB
                ) {
                  var e = t.current;
                  if (e != null) {
                    var r = document,
                      a = r.activeElement;
                    if (!(a == null || !e.contains(a))) {
                      var i = o("WAWebKeyboardTabUtils").getTabbableElements(
                        e,
                        o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                      );
                      if (i.length !== 0) {
                        var l = !n.shiftKey;
                        if (l) {
                          var s = i[i.length - 1];
                          s === a || s.contains(a)
                            ? (n.preventDefault(),
                              n.stopPropagation(),
                              o(
                                "WAWebPdfViewerEventEmitter",
                              ).pdfViewerEventEmitter.trigger(
                                "focus:firstInViewer",
                                [],
                              ))
                            : n.stopPropagation();
                        } else {
                          var u = i[0];
                          u === a || u.contains(a)
                            ? (n.preventDefault(),
                              n.stopPropagation(),
                              o(
                                "WAWebPdfViewerEventEmitter",
                              ).pdfViewerEventEmitter.trigger(
                                "focus:lastInViewer",
                                [],
                              ))
                            : n.stopPropagation();
                        }
                      }
                    }
                  }
                }
              };
              return (
                document.addEventListener("keydown", e, !0),
                function () {
                  document.removeEventListener("keydown", e, !0);
                }
              );
            }
          },
          [n, t],
        ),
        null
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
