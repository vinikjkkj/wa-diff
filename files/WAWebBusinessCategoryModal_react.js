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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useState;
    function _(e) {
      var t = o("react-compiler-runtime").c(20),
        n = e.isCategoryDisabled,
        a = e.isCategorySelected,
        i = e.onRemoveCategory,
        l = e.onToggleCategory,
        s = e.searchText,
        c = e.selectedCategories,
        d = p(!1),
        _ = d[0],
        g = d[1],
        h;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = []), (t[0] = h))
        : (h = t[0]);
      var y = p(h),
        C = y[0],
        b = y[1],
        v;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = function (t) {
            (g(!0),
              o("WAWebBusinessCategoriesResultCollection")
                .BusinessCategoriesResultCollection.find(
                  t ||
                    o("WAWebBusinessCategoriesResultModel")
                      .BUSINESS_CATEGORY_EMPTY_STR_ID,
                )
                .then(function (e) {
                  var n = e.categories;
                  (t !== "" && (n = n.filter(f)), b(n));
                })
                .catch(function () {
                  b([]);
                })
                .finally(function () {
                  g(!1);
                }));
          }),
          (t[1] = v))
        : (v = t[1]);
      var S = v,
        R,
        L;
      (t[2] !== s
        ? ((R = function () {
            S(s);
          }),
          (L = [s, S]),
          (t[2] = s),
          (t[3] = R),
          (t[4] = L))
        : ((R = t[3]), (L = t[4])),
        m(R, L));
      var E;
      t[5] !== l || t[6] !== C
        ? ((E = function (t) {
            var e = C.find(function (e) {
              return e.id === t;
            });
            e && l(e);
          }),
          (t[5] = l),
          (t[6] = C),
          (t[7] = E))
        : (E = t[7]);
      var k = E,
        I;
      t[8] !== i || t[9] !== c
        ? ((I = u.jsx(r("WAWebBusinessCategoryList.react"), {
            selectedCategories: c,
            onRemoveItem: i,
          })),
          (t[8] = i),
          (t[9] = c),
          (t[10] = I))
        : (I = t[10]);
      var T;
      t[11] !== k || t[12] !== n || t[13] !== a || t[14] !== _ || t[15] !== C
        ? ((T = u.jsx(r("WAWebCategorySelectionList.react"), {
            isLoading: _,
            results: C,
            isSelected: a,
            isDisabled: n,
            toggleResultById: k,
          })),
          (t[11] = k),
          (t[12] = n),
          (t[13] = a),
          (t[14] = _),
          (t[15] = C),
          (t[16] = T))
        : (T = t[16]);
      var D;
      return (
        t[17] !== I || t[18] !== T
          ? ((D = u.jsxs(u.Fragment, { children: [I, T] })),
            (t[17] = I),
            (t[18] = T),
            (t[19] = D))
          : (D = t[19]),
        D
      );
    }
    function f(e) {
      return !e.not_a_biz;
    }
    function g(e) {
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
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
