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
      var n = t.category,
        a = t.toggleResultById,
        i = function () {
          !n.disabled && a(n.id);
        };
      return c.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        xstyle: g.rowMain,
        children: [
          c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                o("WAWebUISpacing").uiPadding.vert18,
                o("WAWebUISpacing").uiPadding.horiz24,
              ),
              {
                children: c.jsx(o("WAWebCheckBox.react").CheckBox, {
                  id: "" + n.id,
                  onChange: i,
                  checked: n.selected,
                  disabled: n.disabled,
                }),
              },
            ),
          ),
          c.jsx(
            "label",
            babelHelpers.extends(
              { "data-testid": void 0 },
              e.props(
                g.rowLabel,
                o("WAWebUISpacing").uiPadding.vert13,
                n.disabled && g.rowLabelDisabled,
              ),
              { htmlFor: n.id, children: n.localized_display_name },
            ),
          ),
        ],
      });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(t) {
      var n = t.label;
      return c.jsxs("div", {
        className: "x1jchvi3",
        children: [
          c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                o("WAWebUISpacing").uiPadding.vert18,
                o("WAWebUISpacing").uiPadding.horiz24,
              ),
            ),
          ),
          n,
        ],
      });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      var t = e.isDisabled,
        n = e.isLoading,
        a = e.isSelected,
        i = e.results,
        l = e.toggleResultById,
        u = p(function () {
          return new (r("WAWebFlatListController"))();
        }, []);
      if (n)
        return c.jsx(o("WAWebFlex.react").FlexRow, {
          align: "center",
          justify: "center",
          xstyle: [g.loadingSpinner, o("WAWebUISpacing").uiPadding.all0],
          children: c.jsx(o("WAWebSpinner.react").Spinner, {
            color: "highlight",
            size: 44,
            stroke: 6,
          }),
        });
      if (!i || i.length === 0)
        return c.jsx(v, { label: s._(/*BTDS*/ "No categories found") });
      var d = i.map(function (e) {
        return babelHelpers.extends({}, e, {
          disabled: t(e),
          id: e.id,
          itemKey: e.id.toString(),
          selected: a(e.id),
        });
      });
      return c.jsx(r("WAWebFlatListContainer.react"), {
        flatListControllers: [u],
        children: c.jsx(o("WAWebFlatList.react").FlatList, {
          data: d,
          flatListController: u,
          direction: "vertical",
          renderItem: function (t) {
            return c.jsx(b, { category: t, toggleResultById: l });
          },
          defaultItemHeight: h,
        }),
      });
    }
    ((S.displayName = S.name + " [from " + i.id + "]"), (l.default = C));
  },
  226,
);
