__d(
  "WAWebTPEditPdfUndoRedoShortcuts",
  ["react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      var t = e.canRedo,
        n = e.canUndo,
        r = e.onRedo,
        o = e.onUndo;
      s(
        function () {
          var e = function (a) {
            if (!(!a.ctrlKey && !a.metaKey)) {
              var e = a.key.toLowerCase();
              e === "z"
                ? (a.preventDefault(),
                  a.stopPropagation(),
                  a.shiftKey ? t && r() : n && o())
                : e === "y" &&
                  (a.preventDefault(), a.stopPropagation(), t && r());
            }
          };
          return (
            document.addEventListener("keydown", e, { capture: !0 }),
            function () {
              document.removeEventListener("keydown", e, { capture: !0 });
            }
          );
        },
        [o, r, n, t],
      );
    }
    l.useWAWebTPEditPdfUndoRedoShortcuts = u;
  },
  98,
);
