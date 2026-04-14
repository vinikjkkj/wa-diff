__d(
  "WAWebEmojiPanelSearchResultsAnnouncement.react",
  [
    "fbt",
    "WAWebAccessibility.react",
    "WAWebPanelsDisplayLocation",
    "react",
    "sumBy",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useMemo;
    function d(e) {
      var t = e.data,
        n = e.displayLocation,
        a = c(
          function () {
            return r("sumBy")(t, function (e) {
              return e.emojis.length;
            });
          },
          [t],
        ),
        i;
      return (
        n === o("WAWebPanelsDisplayLocation").DisplayLocation.Reactions
          ? (i =
              a === 0
                ? s._(/*BTDS*/ "No reactions found")
                : s._(
                    /*BTDS*/ '_j{"*":"{number_of_reactions} reactions found","_1":"1 reaction found"}',
                    [s._plural(a, "number_of_reactions")],
                  ))
          : (i =
              a === 0
                ? s._(/*BTDS*/ "No emoji found")
                : s._(
                    /*BTDS*/ '_j{"*":"{number_of_results} results found","_1":"1 result found"}',
                    [s._plural(a, "number_of_results")],
                  )),
        u.jsx(o("WAWebAccessibility.react").InvisibleAnnouncement, { text: i })
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
