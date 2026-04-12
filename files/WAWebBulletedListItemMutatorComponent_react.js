__d(
  "WAWebBulletedListItemMutatorComponent.react",
  [
    "fbt",
    "WABidi",
    "WAWebCopyPasteSelectable.react",
    "WAWebFormatComponentUtils",
    "WAWebL10N",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      if (!(e == null || e === "")) return o("WABidi").dir(e);
    }
    function d(e) {
      var t = c(e) === "rtl";
      return t !== r("WAWebL10N").isRTL();
    }
    function m(e) {
      var t = e.children,
        n = t === void 0 ? "" : t,
        r = e.inline,
        a = r === void 0 ? !1 : r,
        i = e.selectable,
        l = e.symbol,
        c = e.text;
      if (a)
        return u.jsxs(o("WAWebCopyPasteSelectable.react").SelectableSpan, {
          selectable: i,
          children: [s._(/*BTDS*/ "\u2022"), n],
        });
      var m = l + " ";
      return u.jsx(
        "li",
        babelHelpers.extends(
          { dir: "auto" },
          {
            0: {
              className:
                "x1g0dm76 x1jieuv1 xo7wnuk x1gznph8 x1rkpvhg xlu7um4 xm78dhd x1r4uxqn",
            },
            1: {
              className:
                "x1jieuv1 xo7wnuk xlu7um4 xm78dhd x1r4uxqn xp4054r x1c1uobl xpdmqnj xh6kr0w xl717p",
            },
          }[!!d(c) << 0],
          {
            children: u.jsx(
              o("WAWebCopyPasteSelectable.react").SelectableSpan,
              {
                selectable: i,
                prePlainText: m,
                children: o(
                  "WAWebFormatComponentUtils",
                ).removeFirstLeadingSpace(n),
              },
            ),
          },
        ),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
