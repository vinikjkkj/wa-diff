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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u() {
      var e = o("react-compiler-runtime").c(7),
        t = o("WAWebMenuController.react").useMenu(),
        a = m,
        i;
      e[0] !== t
        ? ((i = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var n = t.items;
                if (e === "") return t.filterItems(null);
                var a = Array.from(n.values()),
                  i = r("compactMap")(a, d),
                  l = o("WAWebSearchUtils").filterPaginate(
                    i,
                    function (t) {
                      return o("WAWebSimpleSearch").simpleSearch(e, [
                        t.searchCriteria,
                      ]);
                    },
                    { pageLength: i.length },
                  ).results;
                yield t.filterItems(l.map(c));
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })()),
          (e[0] = t),
          (e[1] = i))
        : (i = e[1]);
      var l = i,
        u;
      e[2] !== t
        ? ((u = function () {
            t.activeItemId != null && t.selectItem(t.activeItemId);
          }),
          (e[2] = t),
          (e[3] = u))
        : (u = e[3]);
      var p = u,
        _;
      return (
        e[4] !== p || e[5] !== l
          ? ((_ = s.jsx(o("WAWebFlex.react").FlexRow, {
              shrink: 0,
              children: s.jsx(o("WAWebSearchInput").SearchInput, {
                focusOnMount: !0,
                colorScheme: "darker",
                onEnter: p,
                onClick: a,
                onFocus: a,
                onBlur: a,
                onSearch: l,
                placeholder: "",
              }),
            })),
            (e[4] = p),
            (e[5] = l),
            (e[6] = _))
          : (_ = e[6]),
        _
      );
    }
    function c(e) {
      return e.id;
    }
    function d(e) {
      return e.current;
    }
    function m(e) {
      (e.stopPropagation(), e.preventDefault());
    }
    l.MenuSearchInput = u;
  },
  98,
);
