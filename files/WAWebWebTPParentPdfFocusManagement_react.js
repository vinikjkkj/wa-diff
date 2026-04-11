__d(
  "WAWebWebTPParentPdfFocusManagement.react",
  [
    "WAWebKeyboardConstants",
    "WAWebKeyboardTabUtils",
    "WAWebPdfViewerEventEmitter",
    "WAWebTPPdfViewerGatingUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useEffect;
    function c(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.containerRef,
        r = e.mimetype,
        a,
        i;
      (t[0] !== n
        ? ((a = function () {
            var e = function () {
              var e = n.current;
              if (e) {
                var t,
                  r = o("WAWebKeyboardTabUtils").getTabbableElements(
                    e,
                    o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                  );
                (t = r[0]) == null || t.focus();
              }
            };
            o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.on(
              "focus:firstInParent",
              e,
            );
            var t = function () {
              var e = n.current;
              if (e) {
                var t = o("WAWebKeyboardTabUtils").getTabbableElements(
                    e,
                    o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                  ),
                  r = t[t.length - 1];
                r == null || r.focus();
              }
            };
            return (
              o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.on(
                "focus:lastInParent",
                t,
              ),
              function () {
                (o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.off(
                  "focus:firstInParent",
                  e,
                ),
                  o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.off(
                    "focus:lastInParent",
                    t,
                  ));
              }
            );
          }),
          (i = [n]),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i))
        : ((a = t[1]), (i = t[2])),
        u(a, i));
      var l, s;
      return (
        t[3] !== n || t[4] !== r
          ? ((l = function () {
              if (
                o(
                  "WAWebTPPdfViewerGatingUtils",
                ).isWebTPPdfViewerEnabledForMimeType(r)
              ) {
                var e = function (t) {
                  if (
                    t.key ===
                    o("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.TAB
                  ) {
                    var e = n.current;
                    if (e != null) {
                      var r = document,
                        a = r.activeElement;
                      if (!(a == null || !e.contains(a))) {
                        var i = o("WAWebKeyboardTabUtils").getTabbableElements(
                          e,
                          o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                        );
                        if (i.length !== 0) {
                          var l = !t.shiftKey;
                          if (l) {
                            var s = i[i.length - 1];
                            s === a || s.contains(a)
                              ? (t.preventDefault(),
                                t.stopPropagation(),
                                o(
                                  "WAWebPdfViewerEventEmitter",
                                ).pdfViewerEventEmitter.trigger(
                                  "focus:firstInViewer",
                                  [],
                                ))
                              : t.stopPropagation();
                          } else {
                            var u = i[0];
                            u === a || u.contains(a)
                              ? (t.preventDefault(),
                                t.stopPropagation(),
                                o(
                                  "WAWebPdfViewerEventEmitter",
                                ).pdfViewerEventEmitter.trigger(
                                  "focus:lastInViewer",
                                  [],
                                ))
                              : t.stopPropagation();
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
            }),
            (s = [r, n]),
            (t[3] = n),
            (t[4] = r),
            (t[5] = l),
            (t[6] = s))
          : ((l = t[5]), (s = t[6])),
        u(l, s),
        null
      );
    }
    l.default = c;
  },
  98,
);
