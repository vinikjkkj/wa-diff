__d(
  "WAWebABPropCommandPalettePlugin",
  [
    "WAWebABPropSearchModel",
    "WAWebCellV2.react",
    "WAWebCommandPaletteController",
    "WAWebCopiableText.react",
    "WAWebDebug",
    "WAWebExperimentIcon.react",
    "WAWebFlex.react",
    "WAWebHighlightedText.react",
    "WAWebLexicalMenuPaginationFooter",
    "WAWebLexicalWAWebMenu.react",
    "WAWebMenuItems.react",
    "WAWebNoop",
    "WAWebPencilIcon.react",
    "WAWebRefreshIcon.react",
    "WAWebText.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebABPropConfigValue",
    "useWAWebLexicalSearchModelQuery",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.abProp,
        a = e.highlightText,
        i = e.onEdit,
        l = e.onSelect,
        u = e.onToggle,
        c = o("useWAWebABPropConfigValue").useABPropConfigValue(n.name),
        d;
      t[0] !== n.name || t[1] !== a
        ? ((d = a
            ? s.jsx(o("WAWebHighlightedText.react").HighlightedStreaks, {
                highlightText: a,
                sourceText: n.name,
              })
            : n.name),
          (t[0] = n.name),
          (t[1] = a),
          (t[2] = d))
        : (d = t[2]);
      var m;
      t[3] !== n.name || t[4] !== d
        ? ((m = s.jsx(r("WAWebCopiableText.react"), {
            text: n.name,
            showOnHover: !0,
            children: d,
          })),
          (t[3] = n.name),
          (t[4] = d),
          (t[5] = m))
        : (m = t[5]);
      var p = m,
        _;
      return (
        t[6] !== n ||
        t[7] !== c ||
        t[8] !== i ||
        t[9] !== l ||
        t[10] !== u ||
        t[11] !== p
          ? ((_ =
              n.type === "bool"
                ? s.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
                    optionId: n.name,
                    initialState: !!c,
                    primary: p,
                    onSelect: function (t) {
                      (l == null || l(n), u == null || u(n, t));
                    },
                  })
                : s.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                    optionId: n.name,
                    primary: p,
                    secondary: String(c),
                    onSelect: function () {
                      (l == null || l(n), i == null || i(n));
                    },
                    detailRight: s.jsx(
                      o("WAWebPencilIcon.react").PencilIcon,
                      {},
                    ),
                  })),
            (t[6] = n),
            (t[7] = c),
            (t[8] = i),
            (t[9] = l),
            (t[10] = u),
            (t[11] = p),
            (t[12] = _))
          : (_ = t[12]),
        _
      );
    }
    function c(e) {
      var t = o("react-compiler-runtime").c(27),
        a = e.abProp,
        i = o("WAWebCommandPaletteController").useCommandPalette(),
        l;
      t[0] !== a.name || t[1] !== i
        ? ((l = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                (yield r("WAWebDebug").overrideABProp(a.name, e),
                  i.popPlugin());
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })()),
          (t[0] = a.name),
          (t[1] = i),
          (t[2] = l))
        : (l = t[2]);
      var u = l,
        c;
      t[3] !== a.name || t[4] !== i
        ? ((c = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (yield r("WAWebDebug").resetABProp(a.name), i.popPlugin());
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[3] = a.name),
          (t[4] = i),
          (t[5] = c))
        : (c = t[5]);
      var d = c,
        m;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = [0, 16, 16, 16]), (t[6] = m))
        : (m = t[6]);
      var p;
      t[7] !== a.name
        ? ((p = s.jsx(o("WAWebText.react").WAWebTextTitle, {
            children: a.name,
          })),
          (t[7] = a.name),
          (t[8] = p))
        : (p = t[8]);
      var _;
      t[9] !== a.value || t[10] !== p
        ? ((_ = s.jsx(r("WAWebCellV2.react"), {
            primary: p,
            secondary: a.value,
            interactive: !1,
            colorScheme: "lighter",
            size: "medium",
          })),
          (t[9] = a.value),
          (t[10] = p),
          (t[11] = _))
        : (_ = t[11]);
      var f = i.input || "Type your new value into the command palette",
        g;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s.jsx(o("WAWebPencilIcon.react").PencilIcon, {})), (t[12] = g))
        : (g = t[12]);
      var h;
      t[13] !== i.input || t[14] !== u
        ? ((h = function () {
            return u(i.input);
          }),
          (t[13] = i.input),
          (t[14] = u),
          (t[15] = h))
        : (h = t[15]);
      var y;
      t[16] !== f || t[17] !== h
        ? ((y = s.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: "edit",
            primary: "New Value",
            secondary: f,
            detailLeft: g,
            onSelect: h,
          })),
          (t[16] = f),
          (t[17] = h),
          (t[18] = y))
        : (y = t[18]);
      var C;
      t[19] !== a.originalValue || t[20] !== a.overridden || t[21] !== d
        ? ((C =
            a.overridden === !0 &&
            s.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
              optionId: "reset",
              primary: "Reset",
              secondary: s.jsxs("span", {
                children: ["Set the value back to ", a.originalValue],
              }),
              detailLeft: s.jsx(o("WAWebRefreshIcon.react").RefreshIcon, {}),
              onSelect: d,
            })),
          (t[19] = a.originalValue),
          (t[20] = a.overridden),
          (t[21] = d),
          (t[22] = C))
        : (C = t[22]);
      var b;
      return (
        t[23] !== C || t[24] !== _ || t[25] !== y
          ? ((b = s.jsx(o("WAWebLexicalWAWebMenu.react").LexicalWAWebMenu, {
              children: s.jsxs(o("WAWebFlex.react").FlexColumn, {
                padding: m,
                children: [_, y, C],
              }),
            })),
            (t[23] = C),
            (t[24] = _),
            (t[25] = y),
            (t[26] = b))
          : (b = t[26]),
        b
      );
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.colorScheme,
        a = e.onEdit,
        i = e.onSelect,
        l = e.onToggle,
        c = o("useWAWebLexicalSearchModelQuery").useLexicalSearchModelQuery(m),
        d = c.next,
        p = c.previous,
        _ = c.results;
      if (_ == null || _.results.length === 0) return null;
      var f;
      if (
        t[0] !== a ||
        t[1] !== i ||
        t[2] !== l ||
        t[3] !== _.query ||
        t[4] !== _.results
      ) {
        var g;
        (t[6] !== a || t[7] !== i || t[8] !== l || t[9] !== _.query
          ? ((g = function (t) {
              return s.jsx(
                u,
                {
                  abProp: t.data,
                  onSelect: i,
                  onToggle: l,
                  onEdit: a,
                  highlightText: _.query.searchText,
                },
                t.id,
              );
            }),
            (t[6] = a),
            (t[7] = i),
            (t[8] = l),
            (t[9] = _.query),
            (t[10] = g))
          : (g = t[10]),
          (f = _.results.map(g)),
          (t[0] = a),
          (t[1] = i),
          (t[2] = l),
          (t[3] = _.query),
          (t[4] = _.results),
          (t[5] = f));
      } else f = t[5];
      var h;
      t[11] !== d || t[12] !== p || t[13] !== _.pagination
        ? ((h =
            _.pagination != null &&
            s.jsx(r("WAWebLexicalMenuPaginationFooter"), {
              page: _.pagination.page,
              totalPages: _.pagination.totalPages,
              onDown: _.pagination.next ? d : null,
              onUp: _.pagination.previous ? p : null,
            })),
          (t[11] = d),
          (t[12] = p),
          (t[13] = _.pagination),
          (t[14] = h))
        : (h = t[14]);
      var y;
      return (
        t[15] !== n || t[16] !== f || t[17] !== h
          ? ((y = s.jsxs(o("WAWebLexicalWAWebMenu.react").LexicalWAWebMenu, {
              colorScheme: n,
              children: [f, h],
            })),
            (t[15] = n),
            (t[16] = f),
            (t[17] = h),
            (t[18] = y))
          : (y = t[18]),
        y
      );
    }
    function m() {
      return new (o("WAWebABPropSearchModel").ABPropSearch)({
        maxPageLength: 8,
      });
    }
    function p() {
      var e = o("react-compiler-runtime").c(2),
        t = o("WAWebCommandPaletteController").useCommandPalette(),
        n;
      if (e[0] !== t) {
        var r = function (n) {
            t.pushPlugin({
              id: "ABPropEditAction",
              placeholder: "Enter new value",
              shortName: n.name,
              forceMenuSelection: !0,
              Component: function () {
                return s.jsx(c, { abProp: n });
              },
            });
          },
          a = _;
        ((n = s.jsx(d, { onEdit: r, onToggle: a })), (e[0] = t), (e[1] = n));
      } else n = e[1];
      return n;
    }
    function _(e, t) {
      r("WAWebDebug").overrideABProp(e.name, t).catch(r("WAWebNoop"));
    }
    var f = {
      plugin: {
        id: "ABPropCommandPaletteAction",
        placeholder: "Search AB Props",
        shortName: s.jsx(o("WAWebExperimentIcon.react").ExperimentIcon, {
          width: 16,
          height: 16,
        }),
        Component: p,
        restoreInputOnBack: !0,
      },
      trigger: "/ab",
      doc: {
        isDevOnly: !0,
        name: "AB Props",
        description: "Filter through and edit development AB Props",
      },
    };
    ((l.ABPropMenuItem = u), (l.ABPropPlugin = f));
  },
  98,
);
