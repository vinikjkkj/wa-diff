__d(
  "WAWebTPEditPdfUndoRedoShortcuts",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.canRedo,
        r = e.canUndo,
        a = e.onRedo,
        i = e.onUndo,
        l,
        u;
      (t[0] !== n || t[1] !== r || t[2] !== a || t[3] !== i
        ? ((l = function () {
            var e = function (t) {
              if (!(!t.ctrlKey && !t.metaKey)) {
                var e = t.key.toLowerCase();
                e === "z"
                  ? (t.preventDefault(),
                    t.stopPropagation(),
                    t.shiftKey ? n && a() : r && i())
                  : e === "y" &&
                    (t.preventDefault(), t.stopPropagation(), n && a());
              }
            };
            return (
              document.addEventListener("keydown", e, { capture: !0 }),
              function () {
                document.removeEventListener("keydown", e, { capture: !0 });
              }
            );
          }),
          (u = [i, a, r, n]),
          (t[0] = n),
          (t[1] = r),
          (t[2] = a),
          (t[3] = i),
          (t[4] = l),
          (t[5] = u))
        : ((l = t[4]), (u = t[5])),
        s(l, u));
    }
    l.useWAWebTPEditPdfUndoRedoShortcuts = u;
  },
  98,
);
