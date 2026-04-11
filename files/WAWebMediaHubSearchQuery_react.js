__d(
  "WAWebMediaHubSearchQuery.react",
  [
    "fbt",
    "WAFtsIsSearchQueryEligibleForMessageSearch",
    "WAWebText.react",
    "WAWebUISpacing",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.search,
        n = e.searchType,
        a = e.tab;
      if (t === "" || !r("WAFtsIsSearchQueryEligibleForMessageSearch")(t))
        return null;
      var i = a === "media",
        l = a === "docs" || a === "links",
        s = n === "sender";
      return u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
        color: "wdsContentDeemphasized",
        weight: "semibold",
        xstyle: [
          i &&
            (s
              ? o("WAWebUISpacing").uiPadding.top16
              : o("WAWebUISpacing").uiPadding.top10),
          i && o("WAWebUISpacing").uiPadding.bottom4,
          l && o("WAWebUISpacing").uiPadding.top12,
          o("WAWebUISpacing").uiMargin.horiz16,
        ],
        children: d(n),
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      return e === "caption"
        ? s._(/*BTDS*/ "Caption")
        : e === "sender"
          ? s._(/*BTDS*/ "Contact or group names")
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    l.default = c;
  },
  226,
);
