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
      var t = e.afterSave,
        a = e.initialCategories,
        i = e.onCancel,
        l = e.saveBusinessProfile,
        u = e.searchCategories,
        d = _(a),
        p = d[0],
        g = d[1],
        y = _(!1),
        b = y[0],
        v = y[1],
        S = _(!1),
        L = S[0],
        E = S[1],
        k = _([]),
        I = k[0],
        T = k[1],
        D = _(""),
        x = D[0],
        $ = D[1],
        P = function () {
          o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebToast.react").Toast, {
              msg: s._(
                /*BTDS*/ 'You cannot select categories when you have selected "Not a business"',
              ),
            }),
          );
        },
        N = function (t) {
          for (var e = 0; e < p.length; e++) if (p[e].id === t) return !0;
          return !1;
        },
        M = function (t) {
          return (
            t.not_a_biz !== !0 &&
            !N(t.id) &&
            p.length >= o("WAWebBusinessProfileModel").MAX_BUSINESS_CATEGORIES
          );
        },
        w = function (t) {
          var e = p.find(function (e) {
              return e.id === x;
            }),
            n = p;
          (p.length > 0 &&
            (t.not_a_biz === !0 && !e
              ? ((n = []), P())
              : t.not_a_biz !== !0 &&
                e &&
                ((n = p.filter(function (t) {
                  return t.id !== e.id;
                })),
                P())),
            N(t.id)
              ? g(
                  n.filter(function (e) {
                    return e.id !== t.id;
                  }),
                )
              : g([].concat(n, [t])));
        },
        A = function (t) {
          var e = p.filter(function (e) {
            return e.id === t;
          })[0];
          e && w(e);
        },
        F = function (t) {
          var e = I.filter(function (e) {
            return e.id === t;
          })[0];
          e && w(e);
        },
        O = function (t) {
          (E(!0),
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
                  E(!1),
                  T(n),
                  $(e.notABizId),
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
                  E(!1),
                  T([]),
                  $(""),
                  o("WAWebUtilsLogQplEvents").qplEndProfileCatsView(3));
              }));
        };
      m(function () {
        O("");
      }, []);
      var B = function (t) {
        !L &&
          !b &&
          (o("WAWebUtilsLogQplEvents").qplStartProfileCatsView("Search"), O(t));
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
          (v(!0), t());
        },
        onCancel: function () {
          (v(!0), i());
        },
        tsNavigationData: C,
        children: [
          c.jsx("div", {
            className: "xhjsbib xvue9z",
            children: c.jsx(o("WAWebChatListSearch.react").ListSearch, {
              onSearch: B,
              placeholder: s._(/*BTDS*/ "Search categories"),
            }),
          }),
          c.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: [h.editMain, f.padding6],
            children: [
              c.jsx("div", {
                className: "x1iyjqo2 x1odjw0f xvue9z",
                children: c.jsx(R, {
                  isLoading: L,
                  results: I,
                  isSelected: N,
                  isDisabled: M,
                  toggleResultById: F,
                }),
              }),
              p &&
                c.jsx(r("WAWebChipSelectorFooter.react"), {
                  categories: p,
                  onRemoveItem: A,
                }),
            ],
          }),
        ],
      });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(t) {
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
    function S(t) {
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
    function R(e) {
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
            ? ((_ = c.jsx(S, { label: s._(/*BTDS*/ "No categories found") })),
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
      var R;
      t[11] !== u
        ? ((R = function (t) {
            return c.jsx(v, { category: t, toggleResultById: u });
          }),
          (t[11] = u),
          (t[12] = R))
        : (R = t[12]);
      var L;
      return (
        t[13] !== C || t[14] !== R
          ? ((L = c.jsx(r("WAWebFlatListContainer.react"), {
              flatListControllers: b,
              children: c.jsx(o("WAWebFlatList.react").FlatList, {
                data: C,
                flatListController: m,
                direction: "vertical",
                renderItem: R,
                defaultItemHeight: y,
              }),
            })),
            (t[13] = C),
            (t[14] = R),
            (t[15] = L))
          : (L = t[15]),
        L
      );
    }
    l.default = b;
  },
  226,
);
