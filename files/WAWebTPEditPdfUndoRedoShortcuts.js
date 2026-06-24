__d(
  "WAWebTPEditPdfUndoRedoShortcuts",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e, t, n, r) {
      var a = o("react-compiler-runtime").c(6),
        i,
        l;
      (a[0] !== r || a[1] !== n || a[2] !== t || a[3] !== e
        ? ((i = function () {
            var o = function (a) {
              if (!(!a.ctrlKey && !a.metaKey)) {
                var o = a.key.toLowerCase();
                o === "z"
                  ? (a.preventDefault(),
                    a.stopPropagation(),
                    a.shiftKey ? r && t() : n && e())
                  : o === "y" &&
                    (a.preventDefault(), a.stopPropagation(), r && t());
              }
            };
            return (
              document.addEventListener("keydown", o, { capture: !0 }),
              function () {
                document.removeEventListener("keydown", o, { capture: !0 });
              }
            );
          }),
          (l = [e, t, n, r]),
          (a[0] = r),
          (a[1] = n),
          (a[2] = t),
          (a[3] = e),
          (a[4] = i),
          (a[5] = l))
        : ((i = a[4]), (l = a[5])),
        s(i, l));
    }
    l.useWAWebTPEditPdfUndoRedoShortcuts = u;
  },
  98,
);
