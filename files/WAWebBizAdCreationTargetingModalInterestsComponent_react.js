__d(
  "WAWebBizAdCreationTargetingModalInterestsComponent.react",
  [
    "fbt",
    "WAWebBackIcon.react",
    "WAWebBizAdCreationInterestRow.react",
    "WAWebBizAdCreationTargetingModalInterestsUtils",
    "WAWebBizAdCreationTargetingModalPage.react",
    "WAWebDivider.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebSearchInput",
    "WDSButton.react",
    "WDSSpinner.react",
    "WDSText.react",
    "react",
    "useWAWebBizAdCreationBrowseInterests",
    "useWAWebBizAdCreationSearchInterests",
    "useWAWebBizAdCreationSuggestedInterests",
    "useWAWebTimeout",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useState,
      p = {
        emptyState: {
          alignItems: "x6s0dn4",
          flex: "x98rzlu",
          justifyContent: "xl56j7k",
          paddingTop: "xl7twdi",
          paddingBottom: "xvg22vi",
          $$css: !0,
        },
        footerRow: { paddingTop: "x1p57kb1", $$css: !0 },
      },
      _ = [];
    function f(e) {
      var t,
        n,
        a,
        i,
        l,
        c = e.adAccountID,
        f = e.environment,
        g = e.initialFlexibleSpec,
        h = e.onBack,
        y = e.onNext,
        C = m(""),
        b = C[0],
        v = C[1],
        S = m(0),
        R = S[0],
        L = S[1],
        E = m(null),
        k = E[0],
        I = E[1],
        T = m(function () {
          return o(
            "WAWebBizAdCreationTargetingModalInterestsUtils",
          ).convertFlexibleSpecToInterests(g);
        }),
        D = T[0],
        x = T[1],
        $ = r("useWAWebBizAdCreationBrowseInterests")(c, f),
        P = $.interestTree,
        N = $.isLoading,
        M = r("useWAWebBizAdCreationSearchInterests")(c, f),
        w = M.clearSearchResults,
        A = M.fetchSearchResults,
        F = M.isSearching,
        O = M.searchResults,
        B = r("useWAWebBizAdCreationSuggestedInterests")(c, f, D),
        W = B.isLoadingSuggestions,
        q = B.suggestedInterests,
        U = o("useWAWebTimeout").useManualTimeout(function () {
          A(b);
        }),
        V = U[0],
        H = U[1],
        G = d(
          function (e) {
            (v(e), H(), e.trim().length > 0 ? V(300) : w());
          },
          [H, V, w],
        ),
        z = d(
          function (e) {
            (I(e), v(""), w());
          },
          [w],
        ),
        j = d(function () {
          I(null);
        }, []),
        K = d(function (e) {
          x(function (t) {
            var n = t.some(function (t) {
              var n, r;
              return (
                ((n = t.node) == null ? void 0 : n.id) ===
                ((r = e.node) == null ? void 0 : r.id)
              );
            });
            return n
              ? t.filter(function (t) {
                  var n, r;
                  return (
                    ((n = t.node) == null ? void 0 : n.id) !==
                    ((r = e.node) == null ? void 0 : r.id)
                  );
                })
              : [].concat(t, [e]);
          });
        }, []),
        Q = d(
          function (e) {
            return D.some(function (t) {
              var n, r;
              return (
                ((n = t.node) == null ? void 0 : n.id) ===
                ((r = e.node) == null ? void 0 : r.id)
              );
            });
          },
          [D],
        ),
        X = b.trim().length > 0,
        Y = k != null,
        J = D.length > 0,
        Z =
          (t =
            P == null || (n = P.children) == null || (n = n[0]) == null
              ? void 0
              : n.children) != null
            ? t
            : _,
        ee = !X && !Y && J,
        te = d(
          function () {
            if (X) {
              (v(""),
                L(function (e) {
                  return e + 1;
                }),
                w());
              return;
            }
            var e = o(
              "WAWebBizAdCreationTargetingModalInterestsUtils",
            ).convertInterestsToFlexibleSpec(D);
            y == null || y(e);
          },
          [D, y, X, w],
        ),
        ne = X ? F : !Y && !ee && N,
        re =
          X &&
          O.length === 0 &&
          u.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: p.emptyState,
            children: u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              children: s._(/*BTDS*/ "Search for interests to target your ad"),
            }),
          }),
        oe =
          X &&
          O.length > 0 &&
          O.map(function (e, t) {
            return u.jsx(
              r("WAWebBizAdCreationInterestRow.react"),
              { interestNode: e, onInterestToggle: K, isSelected: Q(e) },
              t,
            );
          }),
        ae =
          Y &&
          ((a = k == null ? void 0 : k.children) != null ? a : _).map(
            function (e, t) {
              return u.jsx(
                r("WAWebBizAdCreationInterestRow.react"),
                {
                  interestNode: e,
                  onCategoryClick: z,
                  onInterestToggle: K,
                  isSelected: Q(e),
                },
                t,
              );
            },
          ),
        ie =
          !X &&
          !Y &&
          !ee &&
          Z.map(function (e, t) {
            return u.jsx(
              r("WAWebBizAdCreationInterestRow.react"),
              { interestNode: e, onCategoryClick: z },
              t,
            );
          }),
        le =
          ee &&
          u.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "stretch",
            children: [
              u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                children: s._(/*BTDS*/ "Selected interests"),
              }),
              D.map(function (e, t) {
                return u.jsx(
                  r("WAWebBizAdCreationInterestRow.react"),
                  { interestNode: e, onInterestToggle: K, isSelected: !0 },
                  t,
                );
              }),
            ],
          }),
        se =
          ee &&
          (W || q.length > 0) &&
          u.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "stretch",
            children: [
              u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                children: s._(/*BTDS*/ "Suggested for you"),
              }),
              W
                ? u.jsx(o("WAWebFlex.react").FlexColumn, {
                    xstyle: p.emptyState,
                    children: u.jsx(r("WDSSpinner.react"), { size: 24 }),
                  })
                : q.map(function (e, t) {
                    return u.jsx(
                      r("WAWebBizAdCreationInterestRow.react"),
                      {
                        interestNode: e,
                        onInterestToggle: K,
                        isSelected: Q(e),
                      },
                      t,
                    );
                  }),
            ],
          }),
        ue = function () {
          return u.jsxs(u.Fragment, { children: [re, oe, ae, ie, le, se] });
        },
        ce =
          Y && (i = k == null || (l = k.node) == null ? void 0 : l.name) != null
            ? i
            : s._(/*BTDS*/ "Add interests"),
        de = Y ? j : h;
      return u.jsxs(r("WAWebBizAdCreationTargetingModalPage.react"), {
        headerContent: u.jsxs(u.Fragment, {
          children: [
            u.jsx(r("WDSButton.react"), {
              Icon: o("WAWebBackIcon.react").BackIcon,
              variant: "borderless",
              size: "medium",
              onPress: de,
            }),
            u.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDefault",
              children: ce,
            }),
          ],
        }),
        children: [
          !Y &&
            u.jsxs(u.Fragment, {
              children: [
                u.jsx(
                  o("WAWebSearchInput").SearchInput,
                  {
                    onSearch: G,
                    placeholder: s._(/*BTDS*/ "Search for interests"),
                    padding: 0,
                  },
                  R,
                ),
                u.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  children: s._(
                    /*BTDS*/ "We suggest adding a broad range of interests to cover the largest audience.",
                  ),
                }),
              ],
            }),
          u.jsxs(
            "div",
            babelHelpers.extends(
              {},
              {
                0: { className: "x98rzlu x1ua1l7f x6ikm8r" },
                1: { className: "x98rzlu x1ua1l7f x6ikm8r x98l61r" },
              }[!Y << 0],
              {
                children: [
                  ne &&
                    u.jsx(o("WAWebFlex.react").FlexColumn, {
                      xstyle: p.emptyState,
                      children: u.jsx(r("WDSSpinner.react"), { size: 40 }),
                    }),
                  !ne && ue(),
                ],
              },
            ),
          ),
          u.jsx(r("WAWebDivider.react"), { direction: "horizontal" }),
          u.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: p.footerRow,
            justify: "end",
            children: u.jsx(r("WDSButton.react"), {
              label: r("WAWebFbtCommon")("Next"),
              variant: "filled",
              size: "medium",
              onPress: te,
            }),
          }),
        ],
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
