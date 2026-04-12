__d(
  "WAWebCodeMutatorComponent.react",
  ["WAWebCopyPasteSelectable.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.children,
        n = t === void 0 ? "" : t,
        r = e.selectable;
      return s.jsx(o("WAWebCopyPasteSelectable.react").SelectableCode, {
        selectable: r,
        appTextTemplate: "```${appText}```",
        children: n,
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
