__d(
  "WAWebEmptyState.react",
  [
    "fbt",
    "$InternalEnum",
    "CometHeroHoldTrigger.react",
    "WAWebABProps",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebAddToFavoritesModalLoadable",
    "WAWebArchivedFilledIcon.react",
    "WAWebArchivedFlowLoadable",
    "WAWebButton.react",
    "WAWebChatCollection",
    "WAWebChatSearchFilters",
    "WAWebDrawerManager",
    "WAWebDrawerManagerGlobalContext",
    "WAWebEmojiText.react",
    "WAWebEmptyBlockedIcon.react",
    "WAWebFavoriteCollection",
    "WAWebFbtCommon",
    "WAWebFilterLogging",
    "WAWebInboxFiltersGatingUtils",
    "WAWebL10NIsUsingSupportedBritishEnglishLocale",
    "WAWebLabelCollection",
    "WAWebLabelFilledIcon.react",
    "WAWebListsGatingUtils",
    "WAWebModalManager",
    "WAWebNewGroupFlowLoadable",
    "WAWebNoop",
    "WAWebRefreshIcon.react",
    "WAWebSpinner.react",
    "WAWebTabOrder",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "WAWebWdsIllFavoritesIcon.react",
    "WAWebWdsIllMakeGroupIcon.react",
    "WAWebWdsPictoSuccessTickIcon.react",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "stylex",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useEffect;
    function m() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "empty_unread_filter_cta_variant",
        ) !== 0
      );
    }
    function p() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "empty_unread_filter_cta_variant",
        ) === 1
      );
    }
    var _ = n("$InternalEnum")({
        Compact: "compact",
        LabelFilter: "label-filter",
        FavoritesFilter: "favorites-filter",
        GroupsFilter: "groups-filter",
        UnreadFilter: "unread-filter",
      }),
      f = {
        unreadIconInner: { fill: "x1enx47i", $$css: !0 },
        empty: {
          boxSizing: "x9f619",
          display: "x78zum5",
          flexGrow: "x1iyjqo2",
          flexDirection: "xdt5ytf",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          height: "x5yr21d",
          paddingTop: "x13crsa5",
          paddingInlineEnd: "xx281p9",
          paddingBottom: "x1rxj1xn",
          paddingInlineStart: "x67w97k",
          color: "xhslqc4",
          textAlign: "x2b8uid",
          $$css: !0,
        },
        emptyTop: {
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          flexBasis: "xdl72j9",
          justifyContent: "x1nhvcw1",
          height: "xt7dq6l",
          paddingTop: "x15uerrv",
          paddingInlineEnd: "xx281p9",
          paddingBottom: "x1j3kn9t",
          paddingInlineStart: "x67w97k",
          $$css: !0,
        },
        compact: {
          paddingTop: "x889kno",
          paddingInlineEnd: "x1xnnf8n",
          paddingBottom: "x1a8lsjc",
          paddingInlineStart: "x106a9eq",
          $$css: !0,
        },
        title: { marginBottom: "x1c436fg", $$css: !0 },
        text: {
          fontSize: "x1f6kntn",
          lineHeight: "x1fc57z9",
          color: "xhslqc4",
          $$css: !0,
        },
        action: {
          display: "x1rg5ohu",
          fontSize: "x1f6kntn",
          lineHeight: "x1fc57z9",
          color: "xo1mcw5",
          $$css: !0,
        },
        noFilteredChats: { overflowWrap: "xj0a0fe", $$css: !0 },
        iconRetry: { color: "x1p9h2j9", $$css: !0 },
        labelFilterTitle: {
          marginTop: "x98l61r",
          fontSize: "xngnso2",
          $$css: !0,
        },
        labelFilterText: {
          marginTop: "x1xmf6yo",
          marginBottom: "x1hq5gj4",
          $$css: !0,
        },
        labelIcon: { opacity: "xmdcrrr", $$css: !0 },
        filterCtaTitle: {
          fontSize: "xngnso2",
          fontWeight: "x117nqv4",
          lineHeight: "x1evy7pa",
          color: "x14ug900",
          $$css: !0,
        },
        filterCtaText: { color: "x14ug900", $$css: !0 },
        emptyStarredWithNavbar: { backgroundColor: "x1280gxy", $$css: !0 },
      };
    function g(t) {
      var n = o("react-compiler-runtime").c(18),
        a = t.children,
        i = t.icon,
        l = t.onClick,
        s = t.testid,
        u = t.text,
        d = t.theme,
        m = t.title,
        p = t.xstyle,
        g;
      n[0] !== s || n[1] !== d || n[2] !== m
        ? ((g =
            m != null && m !== ""
              ? c.jsx(
                  "div",
                  babelHelpers.extends(
                    { "data-testid": void 0 },
                    (e || (e = r("stylex"))).props(
                      f.title,
                      d === _.LabelFilter && f.labelFilterTitle,
                      (d === _.FavoritesFilter ||
                        d === _.GroupsFilter ||
                        d === _.UnreadFilter) && [
                        f.filterCtaTitle,
                        o("WAWebUISpacing").uiMargin.top24,
                        o("WAWebUISpacing").uiMargin.bottom0,
                      ],
                    ),
                    { children: m },
                  ),
                )
              : null),
          (n[0] = s),
          (n[1] = d),
          (n[2] = m),
          (n[3] = g))
        : (g = n[3]);
      var h = g,
        y;
      n[4] !== s || n[5] !== u || n[6] !== d
        ? ((y =
            u != null && u !== ""
              ? c.jsx(
                  "div",
                  babelHelpers.extends(
                    { "data-testid": void 0 },
                    (e || (e = r("stylex"))).props(
                      f.text,
                      d === _.LabelFilter && f.labelFilterText,
                      (d === _.FavoritesFilter ||
                        d === _.GroupsFilter ||
                        d === _.UnreadFilter) && [
                        f.filterCtaText,
                        o("WAWebUISpacing").uiMargin.top8,
                      ],
                    ),
                    {
                      children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                        text: u,
                      }),
                    },
                  ),
                )
              : null),
          (n[4] = s),
          (n[5] = u),
          (n[6] = d),
          (n[7] = y))
        : (y = n[7]);
      var C = y,
        b;
      n[8] !== d || n[9] !== p
        ? ((b = (e || (e = r("stylex")))(
            f.empty,
            p,
            d === _.Compact && f.compact,
            (d === _.FavoritesFilter ||
              d === _.GroupsFilter ||
              d === _.UnreadFilter) &&
              f.emptyTop,
          )),
          (n[8] = d),
          (n[9] = p),
          (n[10] = b))
        : (b = n[10]);
      var v = b,
        S;
      return (
        n[11] !== a ||
        n[12] !== v ||
        n[13] !== i ||
        n[14] !== l ||
        n[15] !== C ||
        n[16] !== h
          ? ((S = c.jsxs("div", {
              className: v,
              onClick: l,
              children: [i, h, C, a],
            })),
            (n[11] = a),
            (n[12] = v),
            (n[13] = i),
            (n[14] = l),
            (n[15] = C),
            (n[16] = h),
            (n[17] = S))
          : (S = n[17]),
        S
      );
    }
    function h() {
      var e = o("react-compiler-runtime").c(2),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = c.jsx("div", {
            className:
              "x78zum5 x1c4vz4f x2lah0s xdl72j9 x6s0dn4 xl56j7k xl0us3e xa0zjtf xzbmw64 xg6s713 x1p9h2j9 x1amiio9 x1c9tyrk xeusxvb x1pahc9y x1ertn4p",
            children: c.jsx(
              o("WAWebEmptyBlockedIcon.react").EmptyBlockedIcon,
              {},
            ),
          })),
          (e[0] = t))
        : (t = e[0]);
      var n = t,
        r;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = c.jsx(g, {
              icon: n,
              title: s._(/*BTDS*/ "No blocked contacts yet"),
              text: s._(
                /*BTDS*/ "Blocked contacts will no longer be able to call you or send you messages",
              ),
              testid: void 0,
            })),
            (e[1] = r))
          : (r = e[1]),
        r
      );
    }
    function y() {
      var e = o("react-compiler-runtime").c(2),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = c.jsx("div", {
            className:
              "x78zum5 x1c4vz4f x2lah0s xdl72j9 x6s0dn4 xl56j7k xl0us3e xa0zjtf xzbmw64 xg6s713 x1p9h2j9 x1amiio9 x1c9tyrk xeusxvb x1pahc9y x1ertn4p",
            children: c.jsx(
              o("WAWebArchivedFilledIcon.react").ArchivedFilledIcon,
              {},
            ),
          })),
          (e[0] = t))
        : (t = e[0]);
      var n = t,
        r;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = c.jsx(g, {
              icon: n,
              title: s._(/*BTDS*/ "No archived chats"),
              testid: void 0,
            })),
            (e[1] = r))
          : (r = e[1]),
        r
      );
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.hasFilter,
        a = e.onClearFilter,
        i = n === void 0 ? !1 : n,
        l = a === void 0 ? r("WAWebNoop") : a,
        u;
      t[0] !== i
        ? ((u = i ? b() : void 0), (t[0] = i), (t[1] = u))
        : (u = t[1]);
      var d;
      t[2] !== i
        ? ((d = i ? void 0 : b()), (t[2] = i), (t[3] = d))
        : (d = t[3]);
      var m;
      t[4] !== i || t[5] !== l
        ? ((m =
            i &&
            c.jsx(r("WAWebUnstyledButton.react"), {
              dataTab: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
              testid: void 0,
              onClick: l,
              xstyle: f.action,
              children: s._(/*BTDS*/ "Clear filter"),
            })),
          (t[4] = i),
          (t[5] = l),
          (t[6] = m))
        : (m = t[6]);
      var p;
      return (
        t[7] !== u || t[8] !== d || t[9] !== m
          ? ((p = c.jsx(g, {
              xstyle: f.emptyTop,
              title: u,
              text: d,
              testid: void 0,
              children: m,
            })),
            (t[7] = u),
            (t[8] = d),
            (t[9] = m),
            (t[10] = p))
          : (p = t[10]),
        p
      );
    }
    function b() {
      return s._(/*BTDS*/ "No chats, contacts or messages found");
    }
    function v() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = c.jsx(g, { xstyle: f.emptyTop, text: S(), testid: void 0 })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function S() {
      return s._(/*BTDS*/ "Looking for chats, contacts or messages\u2026");
    }
    function R() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = c.jsx(g, {
              xstyle: f.emptyTop,
              text: s._(/*BTDS*/ "Looking for messages\u2026"),
              testid: void 0,
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function L() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = c.jsx(g, {
              xstyle: f.emptyTop,
              text: s._(/*BTDS*/ "No contacts found"),
              testid: void 0,
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function E() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = c.jsx(g, {
              xstyle: f.emptyTop,
              text: s._(/*BTDS*/ "No results"),
              testid: void 0,
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function k(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.keyword,
        r;
      t[0] !== n
        ? ((r = s._(/*BTDS*/ "No results found for '{keyword}'", [
            s._param("keyword", n),
          ])),
          (t[0] = n),
          (t[1] = r))
        : (r = t[1]);
      var a;
      return (
        t[2] !== r
          ? ((a = c.jsx(g, { xstyle: f.emptyTop, text: r, testid: void 0 })),
            (t[2] = r),
            (t[3] = a))
          : (a = t[3]),
        a
      );
    }
    function I() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = c.jsx(g, {
              xstyle: f.emptyTop,
              text: s._(/*BTDS*/ "Looking outside your contacts..."),
              testid: void 0,
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function T(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.xstyle,
        r;
      t[0] !== n ? ((r = [f.emptyTop, n]), (t[0] = n), (t[1] = r)) : (r = t[1]);
      var a;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = c.jsx("div", {
            className: "xdqhqc9",
            children: c.jsx(o("WAWebSpinner.react").Spinner, {
              size: 24,
              stroke: 6,
              color: "highlight",
            }),
          })),
          (t[2] = a))
        : (a = t[2]);
      var i;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = c.jsx(o("WAWebEmojiText.react").EmojiText, {
            element: "div",
            xstyle: f.text,
            text: s._(/*BTDS*/ "Looking outside your contacts..."),
          })),
          (t[3] = i))
        : (i = t[3]);
      var l;
      return (
        t[4] !== r
          ? ((l = c.jsxs(g, { xstyle: r, testid: void 0, children: [a, i] })),
            (t[4] = r),
            (t[5] = l))
          : (l = t[5]),
        l
      );
    }
    function D(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.error,
        a = e.onClick,
        i;
      t[0] !== n.retryStr || t[1] !== a
        ? ((i =
            n.retryStr != null
              ? c.jsx(r("WAWebUnstyledButton.react"), {
                  dataTab: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
                  testid: void 0,
                  onClick: a,
                  xstyle: f.action,
                  children: n.retryStr,
                })
              : null),
          (t[0] = n.retryStr),
          (t[1] = a),
          (t[2] = i))
        : (i = t[2]);
      var l = i,
        s;
      return (
        t[3] !== n.text || t[4] !== l
          ? ((s = c.jsx(g, {
              xstyle: f.emptyTop,
              title: n.text,
              testid: void 0,
              children: l,
            })),
            (t[3] = n.text),
            (t[4] = l),
            (t[5] = s))
          : (s = t[5]),
        s
      );
    }
    function x() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = c.jsx(g, {
              xstyle: f.emptyTop,
              text: s._(/*BTDS*/ "No groups found"),
              testid: void 0,
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function $() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = c.jsx(g, {
              xstyle: f.emptyTop,
              text: s._(/*BTDS*/ "No messages found"),
              testid: void 0,
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function P() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = c.jsx(g, {
              xstyle: f.emptyTop,
              text: s._(
                /*BTDS*/ "Search results not yet available. Try again later.",
              ),
              testid: void 0,
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function N() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = c.jsx(g, { text: M(), testid: void 0 })), (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function M() {
      return s._(/*BTDS*/ "No chats");
    }
    function w(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.catalogLoadError,
        r = e.hasCatalog,
        a = n === void 0 ? !1 : n,
        i = r === void 0 ? !0 : r,
        l;
      if (i) {
        var u;
        if (
          (t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((u = s._(/*BTDS*/ "No products")), (t[0] = u))
            : (u = t[0]),
          (l = u),
          a)
        ) {
          var d;
          (t[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((d = s._(/*BTDS*/ "Catalog load error")), (t[1] = d))
            : (d = t[1]),
            (l = d));
        }
      } else {
        var m;
        (t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = s._(/*BTDS*/ "You need to create a catalog first")),
            (t[2] = m))
          : (m = t[2]),
          (l = m));
      }
      var p;
      return (
        t[3] !== l
          ? ((p = c.jsx(g, { text: l, testid: void 0 })),
            (t[3] = l),
            (t[4] = p))
          : (p = t[4]),
        p
      );
    }
    var A = function (t, n, r) {
      var e = r
          ? s._(/*BTDS*/ "Search for messages with yourself.")
          : s._(/*BTDS*/ "Search for messages with {chatName}.", [
              s._param("chatName", t),
            ]),
        o = n
          ? s._(/*BTDS*/ "Search for messages within {chatName}.", [
              s._param("chatName", t),
            ])
          : e;
      return c.jsx(g, { xstyle: f.emptyTop, text: o, testid: void 0 });
    };
    function F() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = c.jsx(g, {})), (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function O() {
      o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
        o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
          ? { descriptorType: "archived" }
          : c.jsx(o("WAWebArchivedFlowLoadable").ArchivedFlowLoadable, {
              onEnd: o("WAWebDrawerManager").closeDrawerLeft,
            }),
      );
    }
    function B() {
      var e = o("react-compiler-runtime").c(1),
        t;
      if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
        var n = o("WAWebChatCollection").ChatCollection.countWhere(W);
        ((t = c.jsx(g, {
          title: q(),
          testid: void 0,
          children: c.jsx("div", {
            "data-testid": void 0,
            role: "button",
            onClick: O,
            xstyle: f.action,
            children: s._(
              /*BTDS*/ '_j{"*":"See {count} archived chats","_1":"See 1 archived chat"}',
              [s._plural(n, "count")],
            ),
          }),
        })),
          (e[0] = t));
      } else t = e[0];
      return t;
    }
    function W(e) {
      return e.archive;
    }
    function q() {
      return s._(/*BTDS*/ "All chats are archived");
    }
    function U() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = c.jsx(g, {
              text: s._(/*BTDS*/ "No starred messages"),
              testid: void 0,
              xstyle: f.emptyStarredWithNavbar,
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function V() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = c.jsx(g, {
              text: s._(
                /*BTDS*/ "Select messages to keep them from disappearing for everyone in the chat.",
              ),
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function H() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = c.jsx(g, {
              text: s._(
                /*BTDS*/ "Messages sent for review by members will appear here.",
              ),
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function G() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = c.jsx(g, { text: s._(/*BTDS*/ "No media"), testid: void 0 })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function z() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = c.jsx(g, { text: s._(/*BTDS*/ "No links"), testid: void 0 })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function j() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = c.jsx(g, { text: s._(/*BTDS*/ "No docs"), testid: void 0 })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function K() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = c.jsx(g, {
              text: s._(/*BTDS*/ "Search for images"),
              testid: void 0,
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function Q() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = c.jsx(g, {
              text: s._(/*BTDS*/ "Searching for images..."),
              testid: void 0,
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function X() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = c.jsx(g, {
              text: s._(/*BTDS*/ "No images found"),
              testid: void 0,
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function Y(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.description,
        a = n === void 0 ? "Loading" : n,
        i;
      t[0] !== a
        ? ((i = c.jsx(r("CometHeroHoldTrigger.react"), {
            description: a,
            hold: !0,
          })),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = c.jsx(o("WAWebSpinner.react").Spinner, {
            size: 50,
            stroke: 4,
          })),
          (t[2] = l))
        : (l = t[2]);
      var s;
      return (
        t[3] !== i
          ? ((s = c.jsxs(g, { children: [i, l] })), (t[3] = i), (t[4] = s))
          : (s = t[4]),
        s
      );
    }
    function J(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.description,
        a = e.text,
        i = n === void 0 ? "LoadingWithText" : n,
        l;
      t[0] !== i
        ? ((l = c.jsx(r("CometHeroHoldTrigger.react"), {
            description: i,
            hold: !0,
          })),
          (t[0] = i),
          (t[1] = l))
        : (l = t[1]);
      var s;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = c.jsx("div", {
            className: "xdqhqc9",
            children: c.jsx(o("WAWebSpinner.react").Spinner, {
              size: 50,
              stroke: 4,
            }),
          })),
          (t[2] = s))
        : (s = t[2]);
      var u;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = "x1f6kntn x1fc57z9 xhslqc4"), (t[3] = u))
        : (u = t[3]);
      var d;
      t[4] !== a
        ? ((d = c.jsx(o("WAWebEmojiText.react").EmojiText, {
            element: "div",
            className: u,
            text: a,
          })),
          (t[4] = a),
          (t[5] = d))
        : (d = t[5]);
      var m;
      return (
        t[6] !== l || t[7] !== d
          ? ((m = c.jsxs(g, { children: [l, s, d] })),
            (t[6] = l),
            (t[7] = d),
            (t[8] = m))
          : (m = t[8]),
        m
      );
    }
    function Z(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.labelId,
        r = o("WAWebLabelCollection").LabelCollection.get(n);
      if (!r) return null;
      var a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = "x1f6kntn x1fc57z9 xhslqc4"), (t[0] = a))
        : (a = t[0]);
      var i;
      t[1] !== n ? ((i = ee(n)), (t[1] = n), (t[2] = i)) : (i = t[2]);
      var l;
      return (
        t[3] !== i
          ? ((l = c.jsx(g, {
              children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                element: "div",
                className: a,
                text: i,
              }),
            })),
            (t[3] = i),
            (t[4] = l))
          : (l = t[4]),
        l
      );
    }
    function ee(e) {
      var t = o("WAWebLabelCollection").LabelCollection.get(e);
      return t
        ? s._(/*BTDS*/ "No result found for '{labelName}'", [
            s._param("labelName", t.name),
          ])
        : null;
    }
    function te(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.onClick,
        a = e.xstyle;
      r("vulture")("jP2pkcrlDEbICV81qKYOXZ2bpug=");
      var i, l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = c.jsx(o("WAWebRefreshIcon.react").RefreshIcon, {
            xstyle: f.iconRetry,
          })),
          (l = c.jsx("div", { children: s._(/*BTDS*/ "Retry") })),
          (t[0] = i),
          (t[1] = l))
        : ((i = t[0]), (l = t[1]));
      var u;
      return (
        t[2] !== n || t[3] !== a
          ? ((u = c.jsxs(g, { xstyle: a, onClick: n, children: [i, l] })),
            (t[2] = n),
            (t[3] = a),
            (t[4] = u))
          : (u = t[4]),
        u
      );
    }
    function ne() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = c.jsx(g, { text: "No quick replies", testid: void 0 })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function re(e, t) {
      var n, a, i, l, u, d;
      switch (e) {
        case o("WAWebChatSearchFilters").SearchFilters.UNREAD:
          m()
            ? ((u = c.jsx(
                o("WAWebWdsPictoSuccessTickIcon.react").WdsPictoSuccessTickIcon,
                {
                  width: 88,
                  height: 88,
                  innerStyles: { inner: f.unreadIconInner },
                },
              )),
              (n = s._(/*BTDS*/ "No unread chats")),
              (i = s._(/*BTDS*/ "You're all caught up.")),
              p()
                ? (a = s._(/*BTDS*/ "Find a chat"))
                : (a = s._(/*BTDS*/ "View all chats")))
            : o("WAWebInboxFiltersGatingUtils").inboxFiltersEnabled()
              ? ((n = s._(/*BTDS*/ "No unread chats")),
                (a = s._(/*BTDS*/ "View all chats")))
              : ((n = s._(/*BTDS*/ "No unread chats")),
                (a = s._(/*BTDS*/ "Clear filter")));
          break;
        case o("WAWebChatSearchFilters").SearchFilters.FAVORITES:
          o("WAWebFavoriteCollection").FavoriteCollection.length === 0 &&
          o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()
            ? ((n = o(
                "WAWebL10NIsUsingSupportedBritishEnglishLocale",
              ).isUsingSupportedBritishEnglishLocale()
                ? s._(/*BTDS*/ "Add to Favourites")
                : s._(/*BTDS*/ "Add to Favorites")),
              (i = s._(
                /*BTDS*/ "Make it easy to find the people and groups that matter most across WhatsApp.",
              )),
              (a = o(
                "WAWebL10NIsUsingSupportedBritishEnglishLocale",
              ).isUsingSupportedBritishEnglishLocale()
                ? s._(/*BTDS*/ "Add to Favourites")
                : s._(/*BTDS*/ "Add to Favorites")))
            : ((n = o(
                "WAWebL10NIsUsingSupportedBritishEnglishLocale",
              ).isUsingSupportedBritishEnglishLocale()
                ? s._(/*BTDS*/ "No favourite chats")
                : s._(/*BTDS*/ "No favorite chats")),
              (a = s._(/*BTDS*/ "View all chats")));
          break;
        case o("WAWebChatSearchFilters").SearchFilters.CONTACT:
          ((n = s._(/*BTDS*/ "No chats with contacts")),
            (a = s._(/*BTDS*/ "View all chats")));
          break;
        case o("WAWebChatSearchFilters").SearchFilters.GROUP:
          o("WAWebABProps").getABPropConfigValue(
            "wa_web_create_group_in_filter",
          )
            ? ((u = c.jsx(
                o("WAWebWdsIllMakeGroupIcon.react").WdsIllMakeGroupIcon,
                { width: 197, height: 80 },
              )),
              (n = s._(/*BTDS*/ "Create a group")),
              (i = s._(
                /*BTDS*/ "Connect with friends and family anywhere, anytime.",
              )),
              (a = s._(/*BTDS*/ "Create a group")))
            : ((n = s._(/*BTDS*/ "No group chats")),
              (a = s._(/*BTDS*/ "View all chats")));
          break;
        case o("WAWebChatSearchFilters").SearchFilters.ASSIGNED_TO_YOU:
          ((n = s._(/*BTDS*/ "No chats assigned to you")),
            (a = s._(/*BTDS*/ "Clear filter")));
          break;
        case o("WAWebChatSearchFilters").SearchFilters.LABELS:
          if (o("WAWebListsGatingUtils").isListsEnabled()) {
            var g = r("isStringNullOrEmpty")(t)
              ? null
              : o("WAWebLabelCollection").LabelCollection.get(t);
            (g == null
              ? (n = s._(/*BTDS*/ "No chats"))
              : (n = s._(/*BTDS*/ "No {list-name} chats", [
                  s._param("list-name", g.name),
                ])),
              (a = s._(/*BTDS*/ "View all chats")));
          } else
            ((u = c.jsx(o("WAWebLabelFilledIcon.react").LabelFilledIcon, {
              height: 48,
              width: 48,
              iconXstyle: f.labelIcon,
            })),
              (l = _.LabelFilter),
              (n = s._(/*BTDS*/ "No chats with this label")),
              (i = s._(/*BTDS*/ "Right-click on a chat to label it")),
              (a = s._(/*BTDS*/ "View all chats")));
          break;
        case o("WAWebChatSearchFilters").SearchFilters.COMMUNITY:
          ((u = c.jsx(o("WAWebWdsIllMakeGroupIcon.react").WdsIllMakeGroupIcon, {
            width: 197,
            height: 80,
          })),
            (n = s._(/*BTDS*/ "No community chats")),
            (i = s._(/*BTDS*/ "Join or create a community to see it here.")),
            (a = s._(/*BTDS*/ "View all chats")));
          break;
        default:
          break;
      }
      return n == null || a == null
        ? null
        : {
            title: n,
            actionButton: d,
            actionLabel: a,
            paragraph: i,
            theme: l,
            icon: u,
          };
    }
    function oe(e) {
      var t = o("react-compiler-runtime").c(54),
        n = e.filter,
        a = e.filterSession,
        i = e.onClearFilter,
        l = e.onShowSearch,
        s,
        u;
      (t[0] !== n || t[1] !== a.sessionId
        ? ((s = function () {
            o("WAWebFilterLogging").logEmptyStateViewedFilterEvent(
              a.sessionId,
              n,
            );
          }),
          (u = [n, a.sessionId]),
          (t[0] = n),
          (t[1] = a.sessionId),
          (t[2] = s),
          (t[3] = u))
        : ((s = t[2]), (u = t[3])),
        d(s, u));
      var h;
      t[4] !== n.kind || t[5] !== n.label
        ? ((h = n.kind != null ? re(n.kind, n.label) : null),
          (t[4] = n.kind),
          (t[5] = n.label),
          (t[6] = h))
        : (h = t[6]);
      var y = h;
      if (y == null) return null;
      var C = y.actionButton,
        b = y.actionLabel,
        v = y.icon,
        S = y.paragraph,
        R = y.theme,
        L = y.title;
      if (
        n.kind === o("WAWebChatSearchFilters").SearchFilters.FAVORITES &&
        o("WAWebFavoriteCollection").FavoriteCollection.length === 0 &&
        o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()
      ) {
        var E = se,
          k;
        t[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = c.jsx(
              o("WAWebWdsIllFavoritesIcon.react").WdsIllFavoritesIcon,
              { width: 180 },
            )),
            (t[7] = k))
          : (k = t[7]);
        var I;
        t[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = [f.action, o("WAWebUISpacing").uiMargin.vert8]), (t[8] = I))
          : (I = t[8]);
        var T;
        t[9] !== b
          ? ((T = c.jsx(r("WAWebUnstyledButton.react"), {
              dataTab: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
              testid: void 0,
              onClick: E,
              xstyle: I,
              children: b,
            })),
            (t[9] = b),
            (t[10] = T))
          : (T = t[10]);
        var D;
        return (
          t[11] !== S || t[12] !== T || t[13] !== L
            ? ((D = c.jsx(g, {
                title: L,
                text: S,
                theme: _.FavoritesFilter,
                icon: k,
                testid: void 0,
                children: T,
              })),
              (t[11] = S),
              (t[12] = T),
              (t[13] = L),
              (t[14] = D))
            : (D = t[14]),
          D
        );
      }
      if (n.kind === o("WAWebChatSearchFilters").SearchFilters.UNREAD && m()) {
        var x;
        t[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = p()), (t[15] = x))
          : (x = t[15]);
        var $ = x,
          P;
        t[16] !== i || t[17] !== l
          ? ((P = function () {
              (i(), $ && l != null && l());
            }),
            (t[16] = i),
            (t[17] = l),
            (t[18] = P))
          : (P = t[18]);
        var N = P,
          M;
        t[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = [f.action, o("WAWebUISpacing").uiMargin.vert8]), (t[19] = M))
          : (M = t[19]);
        var w;
        t[20] !== b || t[21] !== N
          ? ((w = c.jsx(r("WAWebUnstyledButton.react"), {
              dataTab: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
              testid: void 0,
              onClick: N,
              xstyle: M,
              children: b,
            })),
            (t[20] = b),
            (t[21] = N),
            (t[22] = w))
          : (w = t[22]);
        var A;
        return (
          t[23] !== v || t[24] !== S || t[25] !== w || t[26] !== L
            ? ((A = c.jsx(g, {
                title: L,
                text: S,
                theme: _.UnreadFilter,
                icon: v,
                testid: void 0,
                children: w,
              })),
              (t[23] = v),
              (t[24] = S),
              (t[25] = w),
              (t[26] = L),
              (t[27] = A))
            : (A = t[27]),
          A
        );
      }
      if (
        n.kind === o("WAWebChatSearchFilters").SearchFilters.GROUP &&
        o("WAWebABProps").getABPropConfigValue("wa_web_create_group_in_filter")
      ) {
        var F = ae,
          O;
        t[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((O = [f.action, o("WAWebUISpacing").uiMargin.vert8]), (t[28] = O))
          : (O = t[28]);
        var B;
        t[29] !== b
          ? ((B = c.jsx(r("WAWebUnstyledButton.react"), {
              dataTab: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
              testid: void 0,
              onClick: F,
              xstyle: O,
              children: b,
            })),
            (t[29] = b),
            (t[30] = B))
          : (B = t[30]);
        var W;
        return (
          t[31] !== v || t[32] !== S || t[33] !== B || t[34] !== L
            ? ((W = c.jsx(g, {
                title: L,
                text: S,
                theme: _.GroupsFilter,
                icon: v,
                testid: void 0,
                children: B,
              })),
              (t[31] = v),
              (t[32] = S),
              (t[33] = B),
              (t[34] = L),
              (t[35] = W))
            : (W = t[35]),
          W
        );
      }
      if (n.kind === o("WAWebChatSearchFilters").SearchFilters.COMMUNITY) {
        var q;
        t[36] === Symbol.for("react.memo_cache_sentinel")
          ? ((q = [f.action, o("WAWebUISpacing").uiMargin.vert8]), (t[36] = q))
          : (q = t[36]);
        var U;
        t[37] !== b || t[38] !== i
          ? ((U = c.jsx(r("WAWebUnstyledButton.react"), {
              dataTab: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
              testid: void 0,
              onClick: i,
              xstyle: q,
              children: b,
            })),
            (t[37] = b),
            (t[38] = i),
            (t[39] = U))
          : (U = t[39]);
        var V;
        return (
          t[40] !== v || t[41] !== S || t[42] !== U || t[43] !== L
            ? ((V = c.jsx(g, {
                title: L,
                text: S,
                theme: _.GroupsFilter,
                icon: v,
                testid: void 0,
                children: U,
              })),
              (t[40] = v),
              (t[41] = S),
              (t[42] = U),
              (t[43] = L),
              (t[44] = V))
            : (V = t[44]),
          V
        );
      }
      if (!C) {
        var H;
        (t[45] !== b || t[46] !== i
          ? ((H = c.jsx(r("WAWebUnstyledButton.react"), {
              dataTab: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
              testid: void 0,
              onClick: i,
              xstyle: f.action,
              children: b,
            })),
            (t[45] = b),
            (t[46] = i),
            (t[47] = H))
          : (H = t[47]),
          (C = H));
      }
      var G;
      return (
        t[48] !== C || t[49] !== v || t[50] !== S || t[51] !== R || t[52] !== L
          ? ((G = c.jsx(g, {
              title: L,
              text: S,
              theme: R,
              icon: v,
              xstyle: f.noFilteredChats,
              testid: void 0,
              children: C,
            })),
            (t[48] = C),
            (t[49] = v),
            (t[50] = S),
            (t[51] = R),
            (t[52] = L),
            (t[53] = G))
          : (G = t[53]),
        G
      );
    }
    function ae() {
      var e;
      (e = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
        "left",
      )) == null ||
        e.openDrawer(
          o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
            ? { descriptorType: "new_group", isSubFlow: !1 }
            : c.jsx(o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable, {
                onEnd: o("WAWebDrawerManager").closeDrawerLeft,
                onCreateGroup: ie,
              }),
        );
    }
    function ie(e) {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (yield e, o("WAWebDrawerManager").DrawerManager.closeDrawerLeft());
        })),
        le.apply(this, arguments)
      );
    }
    function se() {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(
          o("WAWebAddToFavoritesModalLoadable").AddToFavoritesModalLoadable,
          { onClose: o("WAWebModalManager").closeModalManager },
        ),
        { transition: "modal-flow" },
      );
    }
    function ue(t) {
      var n = t.buttonText,
        a = t.center,
        i = t.onClick,
        l = t.testid,
        s = t.text,
        u = t.xstyle,
        d = c.jsx(g, {
          testid: void 0,
          text: s,
          xstyle: u,
          children: c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(o("WAWebUISpacing").uiMargin.top4),
              {
                children: c.jsx(o("WAWebButton.react").WAWebButtonSimplified, {
                  onClick: i,
                  testid: void 0,
                  shadowOnHover: !1,
                  children: n != null ? n : r("WAWebFbtCommon")("Try again"),
                }),
              },
            ),
          ),
        });
      return a ? d : c.jsx("div", { children: d });
    }
    ue.displayName = ue.name + " [from " + i.id + "]";
    function ce(e) {
      var t = e.center,
        n = e.testid,
        o = e.xstyle,
        a = c.jsx(g, {
          xstyle: o,
          text: r("WAWebFbtCommon")("No results found"),
          testid: void 0,
        });
      return t ? a : c.jsx("div", { children: a });
    }
    ce.displayName = ce.name + " [from " + i.id + "]";
    function de(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.testid,
        r = e.xstyle,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = s._(/*BTDS*/ "Enter a phone number to start a chat")),
          (t[0] = a))
        : (a = t[0]);
      var i = n != null ? n : "no-search-results",
        l;
      return (
        t[1] !== i || t[2] !== r
          ? ((l = c.jsx(g, { xstyle: r, text: a, testid: void 0 })),
            (t[1] = i),
            (t[2] = r),
            (t[3] = l))
          : (l = t[3]),
        l
      );
    }
    ((l.EmptyStateTheme = _),
      (l.Empty = g),
      (l.Blocked = h),
      (l.Archived = y),
      (l.Search = C),
      (l.searchFbt = b),
      (l.Searching = v),
      (l.searchingFbt = S),
      (l.SearchingMessages = R),
      (l.SearchContacts = L),
      (l.SearchWithoutKeyword = E),
      (l.SearchWithKeyword = k),
      (l.SearchingNonContact = I),
      (l.SearchingNonContactWithSpinner = T),
      (l.SearchingNonContactError = D),
      (l.SearchGroups = x),
      (l.SearchMessages = $),
      (l.SearchMessagesUnavailable = P),
      (l.ListChats = N),
      (l.listChatsFbt = M),
      (l.ListProducts = w),
      (l.BeforeSearchMessages = A),
      (l.ListStatus = F),
      (l.AllArchived = B),
      (l.allArchivedFbt = q),
      (l.StarredMsgs = U),
      (l.KeptMsgs = V),
      (l.SentForAdminReview = H),
      (l.MediaMsgs = G),
      (l.LinkMsgs = z),
      (l.DocMsgs = j),
      (l.BeforeImageSearch = K),
      (l.SearchingImages = Q),
      (l.ImageSearchEmpty = X),
      (l.Loading = Y),
      (l.LoadingWithText = J),
      (l.NoResultForLabel = Z),
      (l.noResultForLabelFbt = ee),
      (l.LazyLoadRetry = te),
      (l.NoQuickReplies = ne),
      (l.getNoFilteredChatsStrings = re),
      (l.NoFilteredChats = oe),
      (l.EmptyErrorStateWithButton = ue),
      (l.NoSearchResults = ce),
      (l.EnterPhoneNumberToStartChat = de));
  },
  226,
);
