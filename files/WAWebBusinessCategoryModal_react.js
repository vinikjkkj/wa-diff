__d(
  "WAWebBusinessCategoryModal.react",
  [
    "fbt",
    "WAWebBusinessCategoriesResultCollection",
    "WAWebBusinessCategoriesResultModel",
    "WAWebBusinessCategoryList.react",
    "WAWebBusinessProfileLabels",
    "WAWebBusinessProfileModal.react",
    "WAWebBusinessProfileModel",
    "WAWebBusinessProfileSMBUserJourneyLogger",
    "WAWebCategorySelectionList.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUtilsLogQplEvents",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useState;
    function _(e) {
      var t = e.isCategoryDisabled,
        n = e.isCategorySelected,
        a = e.onRemoveCategory,
        i = e.onToggleCategory,
        l = e.searchText,
        s = e.selectedCategories,
        c = p(!1),
        _ = c[0],
        f = c[1],
        g = p([]),
        h = g[0],
        y = g[1],
        C = d(function (e) {
          (f(!0),
            o("WAWebBusinessCategoriesResultCollection")
              .BusinessCategoriesResultCollection.find(
                e ||
                  o("WAWebBusinessCategoriesResultModel")
                    .BUSINESS_CATEGORY_EMPTY_STR_ID,
              )
              .then(function (t) {
                var n = t.categories;
                (e !== "" &&
                  (n = n.filter(function (e) {
                    return !e.not_a_biz;
                  })),
                  y(n));
              })
              .catch(function () {
                y([]);
              })
              .finally(function () {
                f(!1);
              }));
        }, []);
      m(
        function () {
          C(l);
        },
        [l, C],
      );
      var b = function (t) {
        var e = h.find(function (e) {
          return e.id === t;
        });
        e && i(e);
      };
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx(r("WAWebBusinessCategoryList.react"), {
            selectedCategories: s,
            onRemoveItem: a,
          }),
          u.jsx(r("WAWebCategorySelectionList.react"), {
            isLoading: _,
            results: h,
            isSelected: n,
            isDisabled: t,
            toggleResultById: b,
          }),
        ],
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.initialCategories,
        a = e.onCancel,
        i = e.onSaveSuccess,
        l = e.saveBusinessProfile,
        c = p(t),
        d = c[0],
        m = c[1],
        f = p(""),
        g = f[0],
        h = f[1],
        y = function (t) {
          h(t);
        },
        C = function () {
          o("WAWebToastManager").ToastManager.open(
            u.jsx(o("WAWebToast.react").Toast, {
              msg: s._(
                /*BTDS*/ 'You cannot select categories when you have selected "Not a business"',
              ),
            }),
          );
        },
        b = function (t) {
          m(
            d.filter(function (e) {
              return e.id !== t;
            }),
          );
        },
        v = function (t) {
          var e = d.find(function (e) {
              return e.not_a_biz === !0;
            }),
            n = d;
          (d.length > 0 &&
            (t.not_a_biz === !0 && !e
              ? ((n = []), C())
              : t.not_a_biz !== !0 &&
                e &&
                ((n = d.filter(function (e) {
                  return e.not_a_biz !== !0;
                })),
                C())),
            S(t.id)
              ? m(
                  n.filter(function (e) {
                    return e.id !== t.id;
                  }),
                )
              : m([].concat(n, [t])));
        },
        S = function (t) {
          return d.some(function (e) {
            return e.id === t;
          });
        },
        R = function (t) {
          return (
            !S(t) &&
            d.length >= o("WAWebBusinessProfileModel").MAX_BUSINESS_CATEGORIES
          );
        },
        L = function () {
          return d.length !== t.length
            ? !0
            : !d.every(function (e) {
                return t.some(function (t) {
                  return t.id === e.id;
                });
              });
        },
        E = function (t) {
          (t === void 0 && (t = !1), !t && a && a());
        },
        k = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType
              .MODIFY;
            (t.length === 0
              ? (e = o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType
                  .ADD)
              : d.length === 0 &&
                (e = o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType
                  .REMOVE),
              o(
                "WAWebBusinessProfileSMBUserJourneyLogger",
              ).BusinessProfileUserJourneyLogger.saveCategory(e),
              o("WAWebUtilsLogQplEvents").qplStartProfileSave("categories"));
            try {
              (yield l({ categories: d }),
                o("WAWebUtilsLogQplEvents").qplEndProfileSave(2),
                i == null || i());
            } catch (e) {
              throw (o("WAWebUtilsLogQplEvents").qplEndProfileSave(3), e);
            }
            return null;
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
      return u.jsx(r("WAWebBusinessProfileModal.react"), {
        title: o("WAWebBusinessProfileLabels").getBusinessCategoriesLabel(),
        description: o(
          "WAWebBusinessProfileLabels",
        ).getBusinessCategoriesDescription(),
        searchLabel: o("WAWebBusinessProfileLabels").getSearchCategoriesLabel(),
        onSearchChange: y,
        isValid: d.length > 0 && L(),
        onCancel: function () {
          return E(!1);
        },
        afterSave: function () {
          return E(!0);
        },
        doSave: k,
        children: u.jsx(_, {
          searchText: g,
          selectedCategories: d,
          onRemoveCategory: b,
          onToggleCategory: v,
          isCategorySelected: S,
          isCategoryDisabled: R,
        }),
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
