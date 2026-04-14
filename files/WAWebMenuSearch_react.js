__d(
  "WAWebMenuSearch.react",
  [
    "WAWebFlex.react",
    "WAWebMenuController.react",
    "WAWebSearchInput",
    "WAWebSearchUtils",
    "WAWebSimpleSearch",
    "asyncToGeneratorRuntime",
    "compactMap",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u() {
      var e = o("WAWebMenuController.react").useMenu(),
        t = function (t) {
          (t.stopPropagation(), t.preventDefault());
        },
        a = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var n = e.items;
            if (t === "") return e.filterItems(null);
            var a = Array.from(n.values()),
              i = r("compactMap")(a, function (e) {
                return e.current;
              }),
              l = o("WAWebSearchUtils").filterPaginate(
                i,
                function (e) {
                  return o("WAWebSimpleSearch").simpleSearch(t, [
                    e.searchCriteria,
                  ]);
                },
                { pageLength: i.length },
              ).results;
            yield e.filterItems(
              l.map(function (e) {
                return e.id;
              }),
            );
          });
          return function (n) {
            return t.apply(this, arguments);
          };
        })(),
        i = function () {
          e.activeItemId != null && e.selectItem(e.activeItemId);
        };
      return s.jsx(o("WAWebFlex.react").FlexRow, {
        shrink: 0,
        children: s.jsx(o("WAWebSearchInput").SearchInput, {
          focusOnMount: !0,
          colorScheme: "darker",
          onEnter: i,
          onClick: t,
          onFocus: t,
          onBlur: t,
          onSearch: a,
          placeholder: "",
        }),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"),
      (l.MenuSearchInput = u));
  },
  98,
);
