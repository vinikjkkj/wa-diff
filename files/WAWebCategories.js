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
    "justknobx",
    "react",
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
      var t = e.afterSave,
        n = e.initialCategories,
        a = e.onCancel,
        i = e.saveBusinessProfile,
        l = e.searchCategories,
        u = _(n),
        d = u[0],
        p = u[1],
        g = _(!1),
        y = g[0],
        b = g[1],
        v = _(!0),
        S = v[0],
        L = v[1],
        E = _([]),
        k = E[0],
        I = E[1],
        T = _(""),
        D = T[0],
        x = T[1],
        $ = function () {
          o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
          );
        },
        P = function (t) {
          for (var e = 0; e < d.length; e++) if (d[e].id === t) return !0;
          return !1;
        },
        N = function (t) {
          return (
            t.not_a_biz !== !0 &&
            !P(t.id) &&
            d.length >= o("WAWebBusinessProfileModel").MAX_BUSINESS_CATEGORIES
          );
        },
        M = function (t) {
          var e = d.find(function (e) {
              return e.id === D;
            }),
            n = d;
          (d.length > 0 &&
            (t.not_a_biz === !0 && !e
              ? ((n = []), $())
              : t.not_a_biz !== !0 &&
                e &&
                ((n = d.filter(function (t) {
                  return t.id !== e.id;
                })),
                $())),
            P(t.id)
              ? p(
                  n.filter(function (e) {
                    return e.id !== t.id;
                  }),
                )
              : p([].concat(n, [t])));
        },
        w = function (t) {
          var e = d.filter(function (e) {
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
          l(
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
                  msg: r("justknobx")._("8427")
                    ? s._(/*BTDS*/ "")
                    : s._(/*BTDS*/ ""),
                }),
              ),
                L(!1),
                I([]),
                x(""),
                o("WAWebUtilsLogQplEvents").qplEndProfileCatsView(3));
            });
        },
        O = r("useWAWebStableCallback")(function () {
          F("");
        });
      m(
        function () {
          O();
        },
        [O],
      );
      var B = function (t) {
        !S &&
          !y &&
          (o("WAWebUtilsLogQplEvents").qplStartProfileCatsView("Search"),
          L(!0),
          F(t));
      };
      return c.jsxs(r("WAWebSavePopup.react"), {
        title: s._(/*BTDS*/ ""),
        modalConfig: {
          type: o("WAWebModal.react").ModalTheme.BusinessCategories,
        },
        isValid: d.length > 0,
        doSave: async function () {
          (o("WAWebUtilsLogQplEvents").qplStartProfileSave("categories"),
            await i({ categories: d }));
        },
        afterSave: function () {
          (b(!0), t());
        },
        onCancel: function () {
          (b(!0), a());
        },
        tsNavigationData: C,
        children: [
          c.jsx("div", {
            className: "xhjsbib xvue9z",
            children: c.jsx(o("WAWebChatListSearch.react").ListSearch, {
              onSearch: B,
              placeholder: s._(/*BTDS*/ ""),
            }),
          }),
          c.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: [h.editMain, f.padding6],
            children: [
              c.jsx("div", {
                className: "x1iyjqo2 x1odjw0f xvue9z",
                children: c.jsx(R, {
                  isLoading: S,
                  results: k,
                  isSelected: P,
                  isDisabled: N,
                  toggleResultById: A,
                }),
              }),
              d &&
                c.jsx(r("WAWebChipSelectorFooter.react"), {
                  categories: d,
                  onRemoveItem: w,
                }),
            ],
          }),
        ],
      });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(t) {
      var n = t.category,
        a = t.toggleResultById,
        i = function () {
          !n.disabled && a(n.id);
        };
      return c.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        xstyle: h.rowMain,
        children: [
          c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                f.paddingBlock18,
                o("WDSPaddings.stylex").wdsPaddings.paddingHor24,
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
              { "data-testid": "category-list-item-" + n.id },
              {
                0: {
                  className:
                    "x1ypdohk x1t1x2f9 x1iyjqo2 xs83m0k x1d0ri9u x1ug4tga",
                },
                1: {
                  className:
                    "x1ypdohk x1t1x2f9 x1iyjqo2 xs83m0k x1d0ri9u x1ug4tga x54l9or",
                },
              }[!!n.disabled << 0],
              { htmlFor: n.id, children: n.localized_display_name },
            ),
          ),
        ],
      });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(t) {
      var n = t.label;
      return c.jsxs("div", {
        className: "x1jchvi3",
        children: [
          c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                f.paddingBlock18,
                o("WDSPaddings.stylex").wdsPaddings.paddingHor24,
              ),
            ),
          ),
          n,
        ],
      });
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
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
          xstyle: [
            h.loadingSpinner,
            o("WDSPaddings.stylex").wdsPaddings.padding0,
          ],
          children: c.jsx(o("WAWebSpinner.react").Spinner, {
            color: "highlight",
            size: 44,
            stroke: 6,
          }),
        });
      if (!i || i.length === 0) return c.jsx(S, { label: s._(/*BTDS*/ "") });
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
            return c.jsx(v, { category: t, toggleResultById: l });
          },
          defaultItemHeight: y,
        }),
      });
    }
    ((R.displayName = R.name + " [from " + i.id + "]"), (l.default = b));
  },
  226,
);
