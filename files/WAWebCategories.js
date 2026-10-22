__d(
  "WAWebCategories",
  [
    "fbt",
    "WAWebBusinessCategoriesResultModel",
    "WAWebBusinessProfileModel",
    "WAWebChatListSearch.react",
    "WAWebCheckBox.react",
    "WAWebChipSelectorFooter.react",
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebFlatListController",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebSavePopup.react",
    "WAWebSpinner.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUtilsLogQplEvents",
    "WDSPaddings.stylex",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useMemo,
      _ = d.useState,
      f = {
        padding6: {
          paddingTop: "x1yrsyyn",
          paddingInlineEnd: "x1icxu4v",
          paddingBottom: "x10b6aqq",
          paddingInlineStart: "x25sj25",
          $$css: !0,
        },
        paddingBlock18: {
          paddingTop: "x109j2v6",
          paddingBottom: "x1hhzuzn",
          $$css: !0,
        },
      },
      g = "500px",
      h = {
        editMain: { height: "x15om8nw", width: "xvue9z", $$css: !0 },
        loadingSpinner: { height: "x5yr21d", $$css: !0 },
        rowMain: { fontSize: "x1jchvi3", $$css: !0 },
      },
      y = 48,
      C = { surface: "smb-business-profile-edit-categories" };
    function b(e) {
      var t = o("react-compiler-runtime").c(61),
        a = e.afterSave,
        i = e.initialCategories,
        l = e.onCancel,
        u = e.saveBusinessProfile,
        d = e.searchCategories,
        p = _(i),
        g = p[0],
        y = p[1],
        b = _(!1),
        R = b[0],
        L = b[1],
        k = _(!0),
        I = k[0],
        T = k[1],
        D;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = []), (t[0] = D))
        : (D = t[0]);
      var x = _(D),
        $ = x[0],
        P = x[1],
        N = _(""),
        M = N[0],
        w = N[1],
        A = S,
        F;
      t[1] !== g
        ? ((F = function (t) {
            for (var e = 0; e < g.length; e++) if (g[e].id === t) return !0;
            return !1;
          }),
          (t[1] = g),
          (t[2] = F))
        : (F = t[2]);
      var O = F,
        B;
      t[3] !== O || t[4] !== g.length
        ? ((B = function (t) {
            return (
              t.not_a_biz !== !0 &&
              !O(t.id) &&
              g.length >= o("WAWebBusinessProfileModel").MAX_BUSINESS_CATEGORIES
            );
          }),
          (t[3] = O),
          (t[4] = g.length),
          (t[5] = B))
        : (B = t[5]);
      var W = B,
        q;
      t[6] !== O || t[7] !== M || t[8] !== g
        ? ((q = function (t) {
            var e = g.find(function (e) {
                return e.id === M;
              }),
              n = g;
            (g.length > 0 &&
              (t.not_a_biz === !0 && !e
                ? ((n = []), A())
                : t.not_a_biz !== !0 &&
                  e &&
                  ((n = g.filter(function (t) {
                    return t.id !== e.id;
                  })),
                  A())),
              O(t.id)
                ? y(
                    n.filter(function (e) {
                      return e.id !== t.id;
                    }),
                  )
                : y([].concat(n, [t])));
          }),
          (t[6] = O),
          (t[7] = M),
          (t[8] = g),
          (t[9] = q))
        : (q = t[9]);
      var U = q,
        V;
      t[10] !== g || t[11] !== U
        ? ((V = function (t) {
            var e = g.filter(function (e) {
              return e.id === t;
            })[0];
            e && U(e);
          }),
          (t[10] = g),
          (t[11] = U),
          (t[12] = V))
        : (V = t[12]);
      var H = V,
        G;
      t[13] !== $ || t[14] !== U
        ? ((G = function (t) {
            var e = $.filter(function (e) {
              return e.id === t;
            })[0];
            e && U(e);
          }),
          (t[13] = $),
          (t[14] = U),
          (t[15] = G))
        : (G = t[15]);
      var z = G,
        j;
      t[16] !== d
        ? ((j = function (t) {
            d(
              t ||
                o("WAWebBusinessCategoriesResultModel")
                  .BUSINESS_CATEGORY_EMPTY_STR_ID,
            )
              .then(function (e) {
                var n = e.categories;
                (t !== "" && (n = n.filter(v)),
                  T(!1),
                  P(n),
                  w(e.notABizId),
                  o("WAWebUtilsLogQplEvents").qplAnnotateProfileCatsView(
                    n.length,
                  ),
                  o("WAWebUtilsLogQplEvents").qplEndProfileCatsView(2));
              })
              .catch(function () {
                (o("WAWebToastManager").ToastManager.open(
                  c.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(/*BTDS*/ "Something went wrong."),
                  }),
                ),
                  T(!1),
                  P([]),
                  w(""),
                  o("WAWebUtilsLogQplEvents").qplEndProfileCatsView(3));
              });
          }),
          (t[16] = d),
          (t[17] = j))
        : (j = t[17]);
      var K = j,
        Q;
      t[18] !== K
        ? ((Q = function () {
            K("");
          }),
          (t[18] = K),
          (t[19] = Q))
        : (Q = t[19]);
      var X = r("useWAWebStableCallback")(Q),
        Y,
        J;
      (t[20] !== X
        ? ((J = function () {
            X();
          }),
          (Y = [X]),
          (t[20] = X),
          (t[21] = Y),
          (t[22] = J))
        : ((Y = t[21]), (J = t[22])),
        m(J, Y));
      var Z;
      t[23] !== K || t[24] !== I || t[25] !== R
        ? ((Z = function (t) {
            !I &&
              !R &&
              (o("WAWebUtilsLogQplEvents").qplStartProfileCatsView("Search"),
              T(!0),
              K(t));
          }),
          (t[23] = K),
          (t[24] = I),
          (t[25] = R),
          (t[26] = Z))
        : (Z = t[26]);
      var ee = Z,
        te,
        ne;
      t[27] === Symbol.for("react.memo_cache_sentinel")
        ? ((te = s._(/*BTDS*/ "Choose up to 3 categories")),
          (ne = { type: o("WAWebModal.react").ModalTheme.BusinessCategories }),
          (t[27] = te),
          (t[28] = ne))
        : ((te = t[27]), (ne = t[28]));
      var re = g.length > 0,
        oe;
      t[29] !== u || t[30] !== g
        ? ((oe = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (o("WAWebUtilsLogQplEvents").qplStartProfileSave("categories"),
                yield u({ categories: g }));
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[29] = u),
          (t[30] = g),
          (t[31] = oe))
        : (oe = t[31]);
      var ae;
      t[32] !== a
        ? ((ae = function () {
            (L(!0), a());
          }),
          (t[32] = a),
          (t[33] = ae))
        : (ae = t[33]);
      var ie;
      t[34] !== l
        ? ((ie = function () {
            (L(!0), l());
          }),
          (t[34] = l),
          (t[35] = ie))
        : (ie = t[35]);
      var le;
      t[36] === Symbol.for("react.memo_cache_sentinel")
        ? ((le = { className: "xhjsbib xvue9z" }), (t[36] = le))
        : (le = t[36]);
      var se;
      t[37] === Symbol.for("react.memo_cache_sentinel")
        ? ((se = s._(/*BTDS*/ "Search categories")), (t[37] = se))
        : (se = t[37]);
      var ue;
      t[38] !== ee
        ? ((ue = c.jsx(
            "div",
            babelHelpers.extends({}, le, {
              children: c.jsx(o("WAWebChatListSearch.react").ListSearch, {
                onSearch: ee,
                placeholder: se,
              }),
            }),
          )),
          (t[38] = ee),
          (t[39] = ue))
        : (ue = t[39]);
      var ce, de;
      t[40] === Symbol.for("react.memo_cache_sentinel")
        ? ((ce = [h.editMain, f.padding6]),
          (de = { className: "x1iyjqo2 x1odjw0f xvue9z" }),
          (t[40] = ce),
          (t[41] = de))
        : ((ce = t[40]), (de = t[41]));
      var me;
      t[42] !== W || t[43] !== I || t[44] !== O || t[45] !== $ || t[46] !== z
        ? ((me = c.jsx(
            "div",
            babelHelpers.extends({}, de, {
              children: c.jsx(E, {
                isLoading: I,
                results: $,
                isSelected: O,
                isDisabled: W,
                toggleResultById: z,
              }),
            }),
          )),
          (t[42] = W),
          (t[43] = I),
          (t[44] = O),
          (t[45] = $),
          (t[46] = z),
          (t[47] = me))
        : (me = t[47]);
      var pe;
      t[48] !== H || t[49] !== g
        ? ((pe =
            g &&
            c.jsx(r("WAWebChipSelectorFooter.react"), {
              categories: g,
              onRemoveItem: H,
            })),
          (t[48] = H),
          (t[49] = g),
          (t[50] = pe))
        : (pe = t[50]);
      var _e;
      t[51] !== me || t[52] !== pe
        ? ((_e = c.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: ce,
            children: [me, pe],
          })),
          (t[51] = me),
          (t[52] = pe),
          (t[53] = _e))
        : (_e = t[53]);
      var fe;
      return (
        t[54] !== re ||
        t[55] !== oe ||
        t[56] !== ae ||
        t[57] !== ie ||
        t[58] !== ue ||
        t[59] !== _e
          ? ((fe = c.jsxs(r("WAWebSavePopup.react"), {
              title: te,
              modalConfig: ne,
              isValid: re,
              doSave: oe,
              afterSave: ae,
              onCancel: ie,
              tsNavigationData: C,
              children: [ue, _e],
            })),
            (t[54] = re),
            (t[55] = oe),
            (t[56] = ae),
            (t[57] = ie),
            (t[58] = ue),
            (t[59] = _e),
            (t[60] = fe))
          : (fe = t[60]),
        fe
      );
    }
    function v(e) {
      return !e.not_a_biz;
    }
    function S() {
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, {
          msg: s._(
            /*BTDS*/ 'You cannot select categories when you have selected "Not a business"',
          ),
        }),
      );
    }
    function R(t) {
      var n = o("react-compiler-runtime").c(20),
        a = t.category,
        i = t.toggleResultById,
        l;
      n[0] !== a.disabled || n[1] !== a.id || n[2] !== i
        ? ((l = function () {
            !a.disabled && i(a.id);
          }),
          (n[0] = a.disabled),
          (n[1] = a.id),
          (n[2] = i),
          (n[3] = l))
        : (l = n[3]);
      var s = l,
        u;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = (e || (e = r("stylex"))).props(
            f.paddingBlock18,
            o("WDSPaddings.stylex").wdsPaddings.paddingHor24,
          )),
          (n[4] = u))
        : (u = n[4]);
      var d = "" + a.id,
        m;
      n[5] !== a.disabled || n[6] !== a.selected || n[7] !== s || n[8] !== d
        ? ((m = c.jsx(
            "div",
            babelHelpers.extends({}, u, {
              children: c.jsx(o("WAWebCheckBox.react").CheckBox, {
                id: d,
                onChange: s,
                checked: a.selected,
                disabled: a.disabled,
              }),
            }),
          )),
          (n[5] = a.disabled),
          (n[6] = a.selected),
          (n[7] = s),
          (n[8] = d),
          (n[9] = m))
        : (m = n[9]);
      var p = "category-list-item-" + a.id,
        _;
      n[10] !== a.disabled
        ? ((_ = {
            0: {
              className: "x1ypdohk x1t1x2f9 x1iyjqo2 xs83m0k x1d0ri9u x1ug4tga",
            },
            1: {
              className:
                "x1ypdohk x1t1x2f9 x1iyjqo2 xs83m0k x1d0ri9u x1ug4tga x54l9or",
            },
          }[!!a.disabled << 0]),
          (n[10] = a.disabled),
          (n[11] = _))
        : (_ = n[11]);
      var g;
      n[12] !== a.id ||
      n[13] !== a.localized_display_name ||
      n[14] !== p ||
      n[15] !== _
        ? ((g = c.jsx(
            "label",
            babelHelpers.extends({ "data-testid": p }, _, {
              htmlFor: a.id,
              children: a.localized_display_name,
            }),
          )),
          (n[12] = a.id),
          (n[13] = a.localized_display_name),
          (n[14] = p),
          (n[15] = _),
          (n[16] = g))
        : (g = n[16]);
      var y;
      return (
        n[17] !== m || n[18] !== g
          ? ((y = c.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: h.rowMain,
              children: [m, g],
            })),
            (n[17] = m),
            (n[18] = g),
            (n[19] = y))
          : (y = n[19]),
        y
      );
    }
    function L(t) {
      var n = o("react-compiler-runtime").c(4),
        a = t.label,
        i,
        l;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = { className: "x1jchvi3" }),
          (l = c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                f.paddingBlock18,
                o("WDSPaddings.stylex").wdsPaddings.paddingHor24,
              ),
            ),
          )),
          (n[0] = i),
          (n[1] = l))
        : ((i = n[0]), (l = n[1]));
      var s;
      return (
        n[2] !== a
          ? ((s = c.jsxs(
              "div",
              babelHelpers.extends({}, i, { children: [l, a] }),
            )),
            (n[2] = a),
            (n[3] = s))
          : (s = n[3]),
        s
      );
    }
    function E(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.isDisabled,
        a = e.isLoading,
        i = e.isSelected,
        l = e.results,
        u = e.toggleResultById,
        d;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = new (r("WAWebFlatListController"))()), (t[0] = d))
        : (d = t[0]);
      var m = d;
      if (a) {
        var p;
        return (
          t[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((p = c.jsx(o("WAWebFlex.react").FlexRow, {
                align: "center",
                justify: "center",
                xstyle: [
                  h.loadingSpinner,
                  o("WDSPaddings.stylex").wdsPaddings.padding0,
                ],
                children: c.jsx(o("WAWebSpinner.react").Spinner, {
                  color: "highlight",
                  size: 44,
                  stroke: 6,
                }),
              })),
              (t[1] = p))
            : (p = t[1]),
          p
        );
      }
      if (!l || l.length === 0) {
        var _;
        return (
          t[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((_ = c.jsx(L, { label: s._(/*BTDS*/ "No categories found") })),
              (t[2] = _))
            : (_ = t[2]),
          _
        );
      }
      var f;
      if (t[3] !== n || t[4] !== i || t[5] !== l) {
        var g;
        (t[7] !== n || t[8] !== i
          ? ((g = function (t) {
              return babelHelpers.extends({}, t, {
                disabled: n(t),
                id: t.id,
                itemKey: t.id.toString(),
                selected: i(t.id),
              });
            }),
            (t[7] = n),
            (t[8] = i),
            (t[9] = g))
          : (g = t[9]),
          (f = l.map(g)),
          (t[3] = n),
          (t[4] = i),
          (t[5] = l),
          (t[6] = f));
      } else f = t[6];
      var C = f,
        b;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = [m]), (t[10] = b))
        : (b = t[10]);
      var v;
      t[11] !== u
        ? ((v = function (t) {
            return c.jsx(R, { category: t, toggleResultById: u });
          }),
          (t[11] = u),
          (t[12] = v))
        : (v = t[12]);
      var S;
      return (
        t[13] !== C || t[14] !== v
          ? ((S = c.jsx(r("WAWebFlatListContainer.react"), {
              flatListControllers: b,
              children: c.jsx(o("WAWebFlatList.react").FlatList, {
                data: C,
                flatListController: m,
                direction: "vertical",
                renderItem: v,
                defaultItemHeight: y,
              }),
            })),
            (t[13] = C),
            (t[14] = v),
            (t[15] = S))
          : (S = t[15]),
        S
      );
    }
    l.default = b;
  },
  226,
);
