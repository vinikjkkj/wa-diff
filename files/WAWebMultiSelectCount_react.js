__d(
  "WAWebMultiSelectCount.react",
  ["fbt", "WAWebUISpacing", "react", "react-compiler-runtime", "stylex"],
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
      var n = o("react-compiler-runtime").c(7),
        a = t.selectedMsgsCount,
        i = t.theme,
        l;
      n[0] !== i
        ? ((l = (e || (e = r("stylex"))).props([
            d.multiCount,
            o("WAWebUISpacing").uiMargin.end10,
            i === "mediaGallery" && d.mediaGalleryThemeMultiCount,
          ])),
          (n[0] = i),
          (n[1] = l))
        : (l = n[1]);
      var u;
      n[2] !== a
        ? ((u = s._(/*BTDS*/ '_j{"*":"{count} selected","_1":"1 selected"}', [
            s._plural(a, "count"),
          ])),
          (n[2] = a),
          (n[3] = u))
        : (u = n[3]);
      var m;
      return (
        n[4] !== l || n[5] !== u
          ? ((m = c.jsx(
              "span",
              babelHelpers.extends({ "aria-live": "polite" }, l, {
                children: u,
              }),
            )),
            (n[4] = l),
            (n[5] = u),
            (n[6] = m))
          : (m = n[6]),
        m
      );
    }
    l.default = m;
  },
  226,
);
