__d(
  "WAWebDeveloperMenuAbPropsDrawer.react",
  [
    "invariant",
    "WAWebABPropCommandPalettePlugin",
    "WAWebABPropSearchModel",
    "WAWebConfirmPopup.react",
    "WAWebDebug",
    "WAWebDrawer.react",
    "WAWebDrawerHeader.react",
    "WAWebDropdownV2.react",
    "WAWebFlex.react",
    "WAWebLexicalWAWebMenu.react",
    "WAWebMenuIcon.react",
    "WAWebMenuItems.react",
    "WAWebModalManager",
    "WAWebRefreshIcon.react",
    "WAWebRichTextField.react",
    "WAWebSearchInput",
    "WAWebSettingsFBT",
    "WAWebUnstyledButton.react",
    "WAWebXIcon.react",
    "asyncToGeneratorRuntime",
    "cr:21223",
    "react",
    "react-compiler-runtime",
    "useWAWebSearchModel",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useRef,
      _ = d.useState;
    function f(e) {
      var t;
      return (t =
        e == null
          ? void 0
          : e.reduce(
              function (e, t) {
                var n = e[0],
                  r = e[1],
                  o = {
                    itemKey: t.id,
                    height:
                      t.data.type === "bool" || t.data.value === "" ? 42 : 58,
                    data: { abProp: t.data, isHeading: !1 },
                  };
                return (t.data.overridden ? n.push(o) : r.push(o), [n, r]);
              },
              [[], []],
            )) != null
        ? t
        : [[], []];
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.name,
        r = e.onChange,
        a = e.type,
        i = e.value,
        l = _(i),
        s = l[0],
        u = l[1],
        d = _(null),
        m = d[0],
        p = d[1],
        f;
      t[0] !== s || t[1] !== r
        ? ((f = function () {
            (r(s), o("WAWebModalManager").ModalManager.close());
          }),
          (t[0] = s),
          (t[1] = r),
          (t[2] = f))
        : (f = t[2]);
      var g = f,
        h;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = { surface: "unknown", viewName: "dev-ab-props" }), (t[3] = h))
        : (h = t[3]);
      var y = 'Edit "' + n + '"',
        C = String(s),
        b;
      t[4] !== a
        ? ((b = function (t) {
            var e = t.text;
            u(e);
            var n = !Number.isNaN(Number(e));
            if (a === "int" && (!n || Number(e) % 1 !== 0)) {
              p("This value must be an int");
              return;
            } else if (a === "float" && !n) {
              p("This value must be a float");
              return;
            }
            p("");
          }),
          (t[4] = a),
          (t[5] = b))
        : (b = t[5]);
      var v;
      t[6] !== m || t[7] !== g || t[8] !== C || t[9] !== b
        ? ((v = c.jsx(o("WAWebRichTextField.react").RichTextField, {
            value: C,
            placeholder: "Enter a new value",
            onEnter: g,
            managed: !0,
            selectOnMount: !0,
            maxVisibleLines: 8,
            error: m,
            onChange: b,
          })),
          (t[6] = m),
          (t[7] = g),
          (t[8] = C),
          (t[9] = b),
          (t[10] = v))
        : (v = t[10]);
      var S;
      return (
        t[11] !== g || t[12] !== y || t[13] !== v
          ? ((S = c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: h,
              title: y,
              onOK: g,
              children: v,
            })),
            (t[11] = g),
            (t[12] = y),
            (t[13] = v),
            (t[14] = S))
          : (S = t[14]),
        S
      );
    }
    function h(t) {
      var a = o("react-compiler-runtime").c(47),
        i,
        l;
      a[0] !== t
        ? ((l = t.ref),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (a[0] = t),
          (a[1] = i),
          (a[2] = l))
        : ((i = a[1]), (l = a[2]));
      var u = i,
        d = u.onBack,
        h = o("useWAWebSearchModel").useSearchModel(b),
        C = h.query,
        v = h.results,
        S = h.searchInstance,
        R = _(f),
        L = R[0],
        E = R[1],
        k = L[0],
        I = L[1],
        T;
      a[3] !== (v == null ? void 0 : v.results)
        ? ((T = function () {
            E(f(v == null ? void 0 : v.results));
          }),
          (a[3] = v == null ? void 0 : v.results),
          (a[4] = T))
        : (T = a[4]);
      var D;
      (a[5] !== v ? ((D = [v]), (a[5] = v), (a[6] = D)) : (D = a[6]), m(T, D));
      var x, $, P, N;
      a[7] !== C || a[8] !== (v == null ? void 0 : v.query) || a[9] !== S
        ? (($ = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                (yield r("WAWebDebug").overrideABProp(e.name, t), yield P());
              },
            );
            return function (n, r) {
              return e.apply(this, arguments);
            };
          })()),
          (x = function (t) {
            var e = t.type;
            (e !== "bool" || s(0, 74916),
              o("WAWebModalManager").ModalManager.open(
                c.jsx(g, {
                  name: t.name,
                  value: String(t.value),
                  type: e,
                  onChange: (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        (yield r("WAWebDebug").overrideABProp(t.name, e),
                          yield P());
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                }),
              ));
          }),
          (P = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e;
              (S.preloadData(),
                yield C(
                  (e = v == null ? void 0 : v.query.searchText) != null
                    ? e
                    : "",
                ));
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (N = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                (yield r("WAWebDebug").resetABProp(e.name), yield P());
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })()),
          (a[7] = C),
          (a[8] = v == null ? void 0 : v.query),
          (a[9] = S),
          (a[10] = x),
          (a[11] = $),
          (a[12] = P),
          (a[13] = N))
        : ((x = a[10]), ($ = a[11]), (P = a[12]), (N = a[13]));
      var M = N,
        w;
      if (a[14] !== I || a[15] !== k) {
        if (((w = []), k.length)) {
          var A, F;
          (a[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((F = {
                itemKey: "#HEADING_OVERRIDDEN",
                height: 56,
                data: { title: "Overridden AB Props", isHeading: !0 },
                static: !0,
              }),
              (a[17] = F))
            : (F = a[17]),
            (A = w).push.apply(A, [F].concat(k)));
        }
        if (I.length) {
          var O, B;
          (a[18] === Symbol.for("react.memo_cache_sentinel")
            ? ((B = {
                itemKey: "#HEADING_ALL",
                height: 56,
                data: { title: "Available AB Props", isHeading: !0 },
                static: !0,
              }),
              (a[18] = B))
            : (B = a[18]),
            (O = w).push.apply(O, [B].concat(I)));
        }
        ((a[14] = I), (a[15] = k), (a[16] = w));
      } else w = a[16];
      var W;
      a[19] !== P
        ? ((W = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (yield r("WAWebDebug").syncABProps(!1), yield P());
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (a[19] = P),
          (a[20] = W))
        : (W = a[20]);
      var q = W,
        U = y,
        V = p(null),
        H;
      a[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = c.jsx(o("WAWebMenuIcon.react").MenuIcon, {})), (a[21] = H))
        : (H = a[21]);
      var G;
      a[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = c.jsx(o("WAWebRefreshIcon.react").RefreshIcon, {})),
          (a[22] = G))
        : (G = a[22]);
      var z;
      a[23] !== q
        ? ((z = c.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: "fetch",
            detailLeft: G,
            secondary: "Fetch all from server",
            onSelect: q,
          })),
          (a[23] = q),
          (a[24] = z))
        : (z = a[24]);
      var j;
      a[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = c.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: "changelog",
            secondary: "Show ABProp Changelog",
            onSelect: U,
          })),
          (a[25] = j))
        : (j = a[25]);
      var K;
      a[26] !== z
        ? ((K = c.jsx(o("WAWebFlex.react").FlexItem, {
            marginStart: 8,
            children: c.jsxs(r("WAWebUnstyledButton.react"), {
              ref: V,
              children: [
                H,
                c.jsxs(o("WAWebDropdownV2.react").DropdownV2Menu, {
                  material: !0,
                  target: V,
                  position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
                  alignment: o("WAWebDropdownV2.react").PopoverAlignment.End,
                  children: [z, j],
                }),
              ],
            }),
          })),
          (a[26] = z),
          (a[27] = K))
        : (K = a[27]);
      var Q = K,
        X;
      a[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = o("WAWebSettingsFBT").developerABPropsTitle()), (a[28] = X))
        : (X = a[28]);
      var Y;
      a[29] !== d
        ? ((Y = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: X,
            onBack: d,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          })),
          (a[29] = d),
          (a[30] = Y))
        : (Y = a[30]);
      var J;
      a[31] !== x ||
      a[32] !== M ||
      a[33] !== $ ||
      a[34] !== (v == null ? void 0 : v.query)
        ? ((J = function (t) {
            var e;
            if (t.data.isHeading)
              return c.jsx(o("WAWebFlex.react").FlexColumn, {
                paddingTop: 16,
                children: c.jsx(o("WAWebMenuItems.react").MenuHeading, {
                  children: t.data.title,
                }),
              });
            var n = t.data.abProp;
            return c.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              children: [
                c.jsx(o("WAWebFlex.react").FlexItem, {
                  isFlexContainer: !0,
                  grow: 1,
                  children: c.jsx(
                    o("WAWebABPropCommandPalettePlugin").ABPropMenuItem,
                    {
                      abProp: n,
                      onToggle: $,
                      onEdit: x,
                      highlightText:
                        (e = v == null ? void 0 : v.query.searchText) != null
                          ? e
                          : "",
                    },
                    n.name,
                  ),
                }),
                n.overridden
                  ? c.jsx(r("WAWebUnstyledButton.react"), {
                      title: "Reset",
                      onClick: function () {
                        return M(n);
                      },
                      children: c.jsx(o("WAWebXIcon.react").XIcon, {}),
                    })
                  : null,
              ],
            });
          }),
          (a[31] = x),
          (a[32] = M),
          (a[33] = $),
          (a[34] = v == null ? void 0 : v.query),
          (a[35] = J))
        : (J = a[35]);
      var Z;
      a[36] !== w || a[37] !== J
        ? ((Z = c.jsx(
            o("WAWebLexicalWAWebMenu.react").LexicalWAWebPerformantMenu,
            { material: !0, colorScheme: "lightest", data: w, renderItem: J },
          )),
          (a[36] = w),
          (a[37] = J),
          (a[38] = Z))
        : (Z = a[38]);
      var ee;
      a[39] !== Q || a[40] !== C || a[41] !== Z
        ? ((ee = c.jsx(o("WAWebSearchInput").DrawerSearchInput, {
            focusOnMount: !0,
            placeholder: "Search AB Props",
            detailRight: Q,
            onSearch: C,
            children: Z,
          })),
          (a[39] = Q),
          (a[40] = C),
          (a[41] = Z),
          (a[42] = ee))
        : (ee = a[42]);
      var te;
      return (
        a[43] !== l || a[44] !== Y || a[45] !== ee
          ? ((te = c.jsxs(r("WAWebDrawer.react"), {
              ref: l,
              theme: "settings",
              testid: void 0,
              children: [Y, ee],
            })),
            (a[43] = l),
            (a[44] = Y),
            (a[45] = ee),
            (a[46] = te))
          : (te = a[46]),
        te
      );
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t =
              n("cr:21223") == null
                ? void 0
                : n("cr:21223").getABPropDebugLog(),
            r = window.open("", "_blank");
          (r.document.write(
            (e = t == null ? void 0 : t.replaceAll("\n", "<br />")) != null
              ? e
              : "[empty]",
          ),
            r.document.close());
        })),
        C.apply(this, arguments)
      );
    }
    function b() {
      return new (o("WAWebABPropSearchModel").ABPropSearch)();
    }
    l.default = h;
  },
  98,
);
