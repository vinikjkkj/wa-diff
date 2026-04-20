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
    "WAWebUISpacing",
    "WAWebUtilsLogQplEvents",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useMemo,
      _ = d.useState,
      f = "500px",
      g = {
        editMain: { height: "x15om8nw", width: "xvue9z", $$css: !0 },
        loadingSpinner: { height: "x5yr21d", $$css: !0 },
        rowLabel: {
          cursor: "x1ypdohk",
          flexBasis: "x1t1x2f9",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          $$css: !0,
        },
        rowLabelDisabled: { color: "x54l9or", $$css: !0 },
        rowMain: { fontSize: "x1jchvi3", $$css: !0 },
      },
      h = 48,
      y = { surface: "smb-business-profile-edit-categories" };
    function C(e) {
      var t = e.afterSave,
        a = e.initialCategories,
        i = e.onCancel,
        l = e.saveBusinessProfile,
        u = e.searchCategories,
        d = _(a),
        p = d[0],
        f = d[1],
        h = _(!1),
        C = h[0],
        b = h[1],
        v = _(!1),
        R = v[0],
        L = v[1],
        E = _([]),
        k = E[0],
        I = E[1],
        T = _(""),
        D = T[0],
        x = T[1],
        $ = function () {
          o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebToast.react").Toast, {
              msg: s._(
                /*BTDS*/ 'You cannot select categories when you have selected "Not a business"',
              ),
            }),
          );
        },
        P = function (t) {
          for (var e = 0; e < p.length; e++) if (p[e].id === t) return !0;
          return !1;
        },
        N = function (t) {
          return (
            t.not_a_biz !== !0 &&
            !P(t.id) &&
            p.length >= o("WAWebBusinessProfileModel").MAX_BUSINESS_CATEGORIES
          );
        },
        M = function (t) {
          var e = p.find(function (e) {
              return e.id === D;
            }),
            n = p;
          (p.length > 0 &&
            (t.not_a_biz === !0 && !e
              ? ((n = []), $())
              : t.not_a_biz !== !0 &&
                e &&
                ((n = p.filter(function (t) {
                  return t.id !== e.id;
                })),
                $())),
            P(t.id)
              ? f(
                  n.filter(function (e) {
                    return e.id !== t.id;
                  }),
                )
              : f([].concat(n, [t])));
        },
        w = function (t) {
          var e = p.filter(function (e) {
            return e.id === t;
          })[0];
          e && M(e);
        },
        A = function (t) {
          var e = k.filter(function (e) {
            return e.id === t;
          })[0];
          e && M(e);
        },
        F = function (t) {
          (L(!0),
            u(
              t ||
                o("WAWebBusinessCategoriesResultModel")
                  .BUSINESS_CATEGORY_EMPTY_STR_ID,
            )
              .then(function (e) {
                var n = e.categories;
                (t !== "" &&
                  (n = n.filter(function (e) {
                    return !e.not_a_biz;
                  })),
                  L(!1),
                  I(n),
                  x(e.notABizId),
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
                  L(!1),
                  I([]),
                  x(""),
                  o("WAWebUtilsLogQplEvents").qplEndProfileCatsView(3));
              }));
        };
      m(function () {
        F("");
      }, []);
      var O = function (t) {
        !R &&
          !C &&
          (o("WAWebUtilsLogQplEvents").qplStartProfileCatsView("Search"), F(t));
      };
      return c.jsxs(r("WAWebSavePopup.react"), {
        title: s._(/*BTDS*/ "Choose up to three categories"),
        modalConfig: {
          type: o("WAWebModal.react").ModalTheme.BusinessCategories,
        },
        isValid: p.length > 0,
        doSave: n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (o("WAWebUtilsLogQplEvents").qplStartProfileSave("categories"),
            yield l({ categories: p }));
        }),
        afterSave: function () {
          (b(!0), t());
        },
        onCancel: function () {
          (b(!0), i());
        },
        tsNavigationData: y,
        children: [
          c.jsx("div", {
            className: "xhjsbib xvue9z",
            children: c.jsx(o("WAWebChatListSearch.react").ListSearch, {
              onSearch: O,
              placeholder: s._(/*BTDS*/ "Search categories"),
            }),
          }),
          c.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: [g.editMain, o("WAWebUISpacing").uiPadding.all6],
            children: [
              c.jsx("div", {
                className: "x1iyjqo2 x1odjw0f xvue9z",
                children: c.jsx(S, {
                  isLoading: R,
                  results: k,
                  isSelected: P,
                  isDisabled: N,
                  toggleResultById: A,
                }),
              }),
              p &&
                c.jsx(r("WAWebChipSelectorFooter.react"), {
                  categories: p,
                  onRemoveItem: w,
                }),
            ],
          }),
        ],
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(t) {
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
            o("WAWebUISpacing").uiPadding.vert18,
            o("WAWebUISpacing").uiPadding.horiz24,
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
        ? ((_ = (e || (e = r("stylex"))).props(
            g.rowLabel,
            o("WAWebUISpacing").uiPadding.vert13,
            a.disabled && g.rowLabelDisabled,
          )),
          (n[10] = a.disabled),
          (n[11] = _))
        : (_ = n[11]);
      var f;
      n[12] !== a.id ||
      n[13] !== a.localized_display_name ||
      n[14] !== p ||
      n[15] !== _
        ? ((f = c.jsx(
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
          (n[16] = f))
        : (f = n[16]);
      var h;
      return (
        n[17] !== m || n[18] !== f
          ? ((h = c.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: g.rowMain,
              children: [m, f],
            })),
            (n[17] = m),
            (n[18] = f),
            (n[19] = h))
          : (h = n[19]),
        h
      );
    }
    function v(t) {
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
                o("WAWebUISpacing").uiPadding.vert18,
                o("WAWebUISpacing").uiPadding.horiz24,
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
    function S(e) {
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
                xstyle: [g.loadingSpinner, o("WAWebUISpacing").uiPadding.all0],
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
            ? ((_ = c.jsx(v, { label: s._(/*BTDS*/ "No categories found") })),
              (t[2] = _))
            : (_ = t[2]),
          _
        );
      }
      var f;
      if (t[3] !== n || t[4] !== i || t[5] !== l) {
        var y;
        (t[7] !== n || t[8] !== i
          ? ((y = function (t) {
              return babelHelpers.extends({}, t, {
                disabled: n(t),
                id: t.id,
                itemKey: t.id.toString(),
                selected: i(t.id),
              });
            }),
            (t[7] = n),
            (t[8] = i),
            (t[9] = y))
          : (y = t[9]),
          (f = l.map(y)),
          (t[3] = n),
          (t[4] = i),
          (t[5] = l),
          (t[6] = f));
      } else f = t[6];
      var C = f,
        S;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = [m]), (t[10] = S))
        : (S = t[10]);
      var R;
      t[11] !== u
        ? ((R = function (t) {
            return c.jsx(b, { category: t, toggleResultById: u });
          }),
          (t[11] = u),
          (t[12] = R))
        : (R = t[12]);
      var L;
      return (
        t[13] !== C || t[14] !== R
          ? ((L = c.jsx(r("WAWebFlatListContainer.react"), {
              flatListControllers: S,
              children: c.jsx(o("WAWebFlatList.react").FlatList, {
                data: C,
                flatListController: m,
                direction: "vertical",
                renderItem: R,
                defaultItemHeight: h,
              }),
            })),
            (t[13] = C),
            (t[14] = R),
            (t[15] = L))
          : (L = t[15]),
        L
      );
    }
    l.default = C;
  },
  226,
);
