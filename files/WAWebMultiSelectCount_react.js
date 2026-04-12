__d(
  "WAWebMultiSelectCount.react",
  ["fbt", "WAWebUISpacing", "react", "stylex"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        multiCount: {
          flex: "x98rzlu",
          fontSize: "x7yx35o",
          textOverflow: "xlyipyv",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
        mediaGalleryThemeMultiCount: { color: "x1wmqtwo", $$css: !0 },
      };
    function m(t) {
      var n = t.selectedMsgsCount,
        a = t.theme;
      return c.jsx(
        "span",
        babelHelpers.extends(
          { "aria-live": "polite" },
          (e || (e = r("stylex"))).props([
            d.multiCount,
            o("WAWebUISpacing").uiMargin.end10,
            a === "mediaGallery" && d.mediaGalleryThemeMultiCount,
          ]),
          {
            children: s._(
              /*BTDS*/ '_j{"*":"{count} selected","_1":"1 selected"}',
              [s._plural(n, "count")],
            ),
          },
        ),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
