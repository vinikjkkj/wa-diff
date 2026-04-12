__d(
  "WAWebNumberedListItemMutatorComponent.react",
  [
    "WABidi",
    "WAWebCopyPasteSelectable.react",
    "WAWebFormatComponentUtils",
    "WAWebL10N",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      if (!(e == null || e === "")) return o("WABidi").dir(e);
    }
    function c(e) {
      var t = u(e) === "rtl";
      return t !== r("WAWebL10N").isRTL();
    }
    function d(e) {
      var t = e.children,
        n = t === void 0 ? "" : t,
        r = e.inline,
        a = r === void 0 ? !1 : r,
        i = e.numbering,
        l = e.selectable,
        u = e.text;
      if (a)
        return s.jsxs(o("WAWebCopyPasteSelectable.react").SelectableSpan, {
          selectable: l,
          children: [i, n],
        });
      var d = i + " ";
      return s.jsx(
        "li",
        babelHelpers.extends(
          { dir: "auto", value: i.replace(".", "") },
          {
            0: { className: "x4tra6z" },
            1: { className: "xp4054r x1cy9i3i x4tra6z" },
          }[!!c(u) << 0],
          {
            children: s.jsx(
              o("WAWebCopyPasteSelectable.react").SelectableSpan,
              {
                selectable: l,
                prePlainText: d,
                children: o(
                  "WAWebFormatComponentUtils",
                ).removeFirstLeadingSpace(n),
              },
            ),
          },
        ),
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
