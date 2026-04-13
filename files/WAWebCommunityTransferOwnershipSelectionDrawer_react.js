__d(
  "WAWebCommunityTransferOwnershipSelectionDrawer.react",
  [
    "fbt",
    "WAWebChatContactList.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebFbtCommon",
    "WAWebFlatListController",
    "WAWebFlex.react",
    "WAWebL10NAccentFold",
    "WAWebPhoneNumberSearch",
    "WAWebSearchInput",
    "WAWebText.react",
    "WAWebUserPrefsMeUser",
    "react",
    "react-compiler-runtime",
    "useWAWebCommunityAdmins",
    "useWAWebDebouncedSearch",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useMemo,
      p = d.useRef,
      _ = {
        drawer: { backgroundColor: "x1280gxy", $$css: !0 },
        marginVert32: {
          marginTop: "x1ci5j9l",
          marginBottom: "xg6s713",
          $$css: !0,
        },
        marginHoriz12: {
          marginInlineStart: "x1uvdrpn",
          marginInlineEnd: "x14mko6t",
          marginLeft: null,
          marginRight: null,
          $$css: !0,
        },
      };
    function f() {
      var e = o("react-compiler-runtime").c(2),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = [_.marginVert32, _.marginHoriz12]), (e[0] = t))
        : (t = e[0]);
      var n;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = c.jsx(r("WAWebDrawerSection.react"), {
              xstyle: t,
              children: c.jsx(o("WAWebFlex.react").FlexRow, {
                justify: "center",
                align: "center",
                children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
                  textAlign: "center",
                  children: s._(/*BTDS*/ "No admins"),
                }),
              }),
            })),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    function g(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.chat,
        l = a.onTransferOwnershipSelection,
        u = p(),
        d = r("useWAWebDebouncedSearch")(),
        g = d[0],
        h = d[1],
        y = r("WAWebFbtCommon")("Search"),
        C = m(function () {
          return new (r("WAWebFlatListController"))();
        }, []),
        b = c.jsx(r("WAWebDrawerSection.react"), {
          animation: !1,
          theme: "list-section",
          children: c.jsx(o("WAWebSearchInput").DrawerSearchInput, {
            searchInputA11yLabel: y,
            placeholder: y,
            onSearch: h,
            focusOnMount: !1,
          }),
        }),
        v = r("useWAWebCommunityAdmins")(i).map(function (e) {
          return e.contact;
        }),
        S = m(
          function () {
            var e = v.filter(function (e) {
                return !o("WAWebUserPrefsMeUser").isMeAccount(e.id);
              }),
              t = o("WAWebL10NAccentFold").accentFold(g),
              n = o("WAWebPhoneNumberSearch").numberSearch(t);
            return e.filter(function (e) {
              return !t || e.searchMatchExact(t, n);
            });
          },
          [v, g],
        ),
        R = { contacts: S, header: s._(/*BTDS*/ "Community admins") },
        L = c.jsx(r("WAWebChatContactList.react"), {
          ref: u,
          contacts: [],
          flatListController: C,
          onClick: function (t, n) {
            l(n);
          },
          showMe: !1,
          showBot: !1,
          showPersonGroupDivisionHeader: !0,
          separateContacts: R,
          searchText: g,
        }),
        E = S.length > 0 ? L : c.jsx(f, {});
      return c.jsxs(r("WAWebDrawer.react"), {
        ref: n,
        xstyle: _.drawer,
        testid: void 0,
        tsNavigationData: {
          surface: "unknown",
          viewName: "community-transfer-selection",
        },
        children: [
          c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: s._(/*BTDS*/ "Select new owner"),
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: a.onBack,
            onCancel: a.onCancel,
          }),
          b,
          c.jsx(r("WAWebDrawerBody.react"), { children: E }),
        ],
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
