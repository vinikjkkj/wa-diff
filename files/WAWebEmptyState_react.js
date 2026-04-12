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
      var n = t.children,
        a = t.icon,
        i = t.onClick,
        l = t.testid,
        s = t.text,
        u = t.theme,
        d = t.title,
        m = t.xstyle,
        p =
          d != null && d !== ""
            ? c.jsx(
                "div",
                babelHelpers.extends(
                  { "data-testid": void 0 },
                  (e || (e = r("stylex"))).props(
                    f.title,
                    u === _.LabelFilter && f.labelFilterTitle,
                    (u === _.FavoritesFilter ||
                      u === _.GroupsFilter ||
                      u === _.UnreadFilter) && [
                      f.filterCtaTitle,
                      o("WAWebUISpacing").uiMargin.top24,
                      o("WAWebUISpacing").uiMargin.bottom0,
                    ],
                  ),
                  { children: d },
                ),
              )
            : null,
        g =
          s != null && s !== ""
            ? c.jsx(
                "div",
                babelHelpers.extends(
                  { "data-testid": void 0 },
                  (e || (e = r("stylex"))).props(
                    f.text,
                    u === _.LabelFilter && f.labelFilterText,
                    (u === _.FavoritesFilter ||
                      u === _.GroupsFilter ||
                      u === _.UnreadFilter) && [
                      f.filterCtaText,
                      o("WAWebUISpacing").uiMargin.top8,
                    ],
                  ),
                  {
                    children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                      text: s,
                    }),
                  },
                ),
              )
            : null,
        h = (e || (e = r("stylex")))(
          f.empty,
          m,
          u === _.Compact && f.compact,
          (u === _.FavoritesFilter ||
            u === _.GroupsFilter ||
            u === _.UnreadFilter) &&
            f.emptyTop,
        );
      return c.jsxs("div", {
        className: h,
        onClick: i,
        children: [a, p, g, n],
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h() {
      var e = c.jsx("div", {
        className:
          "x78zum5 x1c4vz4f x2lah0s xdl72j9 x6s0dn4 xl56j7k xl0us3e xa0zjtf xzbmw64 xg6s713 x1p9h2j9 x1amiio9 x1c9tyrk xeusxvb x1pahc9y x1ertn4p",
        children: c.jsx(o("WAWebEmptyBlockedIcon.react").EmptyBlockedIcon, {}),
      });
      return c.jsx(g, {
        icon: e,
        title: s._(/*BTDS*/ "No blocked contacts yet"),
        text: s._(
          /*BTDS*/ "Blocked contacts will no longer be able to call you or send you messages",
        ),
        testid: void 0,
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      var e = c.jsx("div", {
        className:
          "x78zum5 x1c4vz4f x2lah0s xdl72j9 x6s0dn4 xl56j7k xl0us3e xa0zjtf xzbmw64 xg6s713 x1p9h2j9 x1amiio9 x1c9tyrk xeusxvb x1pahc9y x1ertn4p",
        children: c.jsx(
          o("WAWebArchivedFilledIcon.react").ArchivedFilledIcon,
          {},
        ),
      });
      return c.jsx(g, {
        icon: e,
        title: s._(/*BTDS*/ "No archived chats"),
        testid: void 0,
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = e.hasFilter,
        n = t === void 0 ? !1 : t,
        a = e.onClearFilter,
        i = a === void 0 ? r("WAWebNoop") : a;
      return c.jsx(g, {
        xstyle: f.emptyTop,
        title: n ? b() : void 0,
        text: n ? void 0 : b(),
        testid: void 0,
        children:
          n &&
          c.jsx(r("WAWebUnstyledButton.react"), {
            dataTab: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
            testid: void 0,
            onClick: i,
            xstyle: f.action,
            children: s._(/*BTDS*/ "Clear filter"),
          }),
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b() {
      return s._(/*BTDS*/ "No chats, contacts or messages found");
    }
    function v() {
      return c.jsx(g, { xstyle: f.emptyTop, text: S(), testid: void 0 });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S() {
      return s._(/*BTDS*/ "Looking for chats, contacts or messages\u2026");
    }
    function R() {
      return c.jsx(g, {
        xstyle: f.emptyTop,
        text: s._(/*BTDS*/ "Looking for messages\u2026"),
        testid: void 0,
      });
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L() {
      return c.jsx(g, {
        xstyle: f.emptyTop,
        text: s._(/*BTDS*/ "No contacts found"),
        testid: void 0,
      });
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E() {
      return c.jsx(g, {
        xstyle: f.emptyTop,
        text: s._(/*BTDS*/ "No results"),
        testid: void 0,
      });
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e) {
      var t = e.keyword;
      return c.jsx(g, {
        xstyle: f.emptyTop,
        text: s._(/*BTDS*/ "No results found for '{keyword}'", [
          s._param("keyword", t),
        ]),
        testid: void 0,
      });
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I() {
      return c.jsx(g, {
        xstyle: f.emptyTop,
        text: s._(/*BTDS*/ "Looking outside your contacts..."),
        testid: void 0,
      });
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T(e) {
      var t = e.xstyle;
      return c.jsxs(g, {
        xstyle: [f.emptyTop, t],
        testid: void 0,
        children: [
          c.jsx("div", {
            className: "xdqhqc9",
            children: c.jsx(o("WAWebSpinner.react").Spinner, {
              size: 24,
              stroke: 6,
              color: "highlight",
            }),
          }),
          c.jsx(o("WAWebEmojiText.react").EmojiText, {
            element: "div",
            xstyle: f.text,
            text: s._(/*BTDS*/ "Looking outside your contacts..."),
          }),
        ],
      });
    }
    T.displayName = T.name + " [from " + i.id + "]";
    function D(e) {
      var t = e.error,
        n = e.onClick,
        a =
          t.retryStr != null
            ? c.jsx(r("WAWebUnstyledButton.react"), {
                dataTab: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
                testid: void 0,
                onClick: n,
                xstyle: f.action,
                children: t.retryStr,
              })
            : null;
      return c.jsx(g, {
        xstyle: f.emptyTop,
        title: t.text,
        testid: void 0,
        children: a,
      });
    }
    D.displayName = D.name + " [from " + i.id + "]";
    function x() {
      return c.jsx(g, {
        xstyle: f.emptyTop,
        text: s._(/*BTDS*/ "No groups found"),
        testid: void 0,
      });
    }
    x.displayName = x.name + " [from " + i.id + "]";
    function $() {
      return c.jsx(g, {
        xstyle: f.emptyTop,
        text: s._(/*BTDS*/ "No messages found"),
        testid: void 0,
      });
    }
    $.displayName = $.name + " [from " + i.id + "]";
    function P() {
      return c.jsx(g, {
        xstyle: f.emptyTop,
        text: s._(
          /*BTDS*/ "Search results not yet available. Try again later.",
        ),
        testid: void 0,
      });
    }
    P.displayName = P.name + " [from " + i.id + "]";
    function N() {
      return c.jsx(g, { text: M(), testid: void 0 });
    }
    N.displayName = N.name + " [from " + i.id + "]";
    function M() {
      return s._(/*BTDS*/ "No chats");
    }
    function w(e) {
      var t = e.catalogLoadError,
        n = t === void 0 ? !1 : t,
        r = e.hasCatalog,
        o = r === void 0 ? !0 : r,
        a;
      return (
        o
          ? ((a = s._(/*BTDS*/ "No products")),
            n && (a = s._(/*BTDS*/ "Catalog load error")))
          : (a = s._(/*BTDS*/ "You need to create a catalog first")),
        c.jsx(g, { text: a, testid: void 0 })
      );
    }
    w.displayName = w.name + " [from " + i.id + "]";
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
      return c.jsx(g, {});
    }
    F.displayName = F.name + " [from " + i.id + "]";
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
      var e = o("WAWebChatCollection").ChatCollection.countWhere(function (e) {
        return e.archive;
      });
      return c.jsx(g, {
        title: W(),
        testid: void 0,
        children: c.jsx("div", {
          "data-testid": void 0,
          role: "button",
          onClick: O,
          xstyle: f.action,
          children: s._(
            /*BTDS*/ '_j{"*":"See {count} archived chats","_1":"See 1 archived chat"}',
            [s._plural(e, "count")],
          ),
        }),
      });
    }
    B.displayName = B.name + " [from " + i.id + "]";
    function W() {
      return s._(/*BTDS*/ "All chats are archived");
    }
    function q() {
      return c.jsx(g, {
        text: s._(/*BTDS*/ "No starred messages"),
        testid: void 0,
        xstyle: f.emptyStarredWithNavbar,
      });
    }
    q.displayName = q.name + " [from " + i.id + "]";
    function U() {
      return c.jsx(g, {
        text: s._(
          /*BTDS*/ "Select messages to keep them from disappearing for everyone in the chat.",
        ),
      });
    }
    U.displayName = U.name + " [from " + i.id + "]";
    function V() {
      return c.jsx(g, {
        text: s._(
          /*BTDS*/ "Messages sent for review by members will appear here.",
        ),
      });
    }
    V.displayName = V.name + " [from " + i.id + "]";
    function H() {
      return c.jsx(g, { text: s._(/*BTDS*/ "No media"), testid: void 0 });
    }
    H.displayName = H.name + " [from " + i.id + "]";
    function G() {
      return c.jsx(g, { text: s._(/*BTDS*/ "No links"), testid: void 0 });
    }
    G.displayName = G.name + " [from " + i.id + "]";
    function z() {
      return c.jsx(g, { text: s._(/*BTDS*/ "No docs"), testid: void 0 });
    }
    z.displayName = z.name + " [from " + i.id + "]";
    function j() {
      return c.jsx(g, {
        text: s._(/*BTDS*/ "Search for images"),
        testid: void 0,
      });
    }
    j.displayName = j.name + " [from " + i.id + "]";
    function K() {
      return c.jsx(g, {
        text: s._(/*BTDS*/ "Searching for images..."),
        testid: void 0,
      });
    }
    K.displayName = K.name + " [from " + i.id + "]";
    function Q() {
      return c.jsx(g, {
        text: s._(/*BTDS*/ "No images found"),
        testid: void 0,
      });
    }
    Q.displayName = Q.name + " [from " + i.id + "]";
    function X(e) {
      var t = e.description,
        n = t === void 0 ? "Loading" : t;
      return c.jsxs(g, {
        children: [
          c.jsx(r("CometHeroHoldTrigger.react"), { description: n, hold: !0 }),
          c.jsx(o("WAWebSpinner.react").Spinner, { size: 50, stroke: 4 }),
        ],
      });
    }
    X.displayName = X.name + " [from " + i.id + "]";
    function Y(e) {
      var t = e.description,
        n = t === void 0 ? "LoadingWithText" : t,
        a = e.text;
      return c.jsxs(g, {
        children: [
          c.jsx(r("CometHeroHoldTrigger.react"), { description: n, hold: !0 }),
          c.jsx("div", {
            className: "xdqhqc9",
            children: c.jsx(o("WAWebSpinner.react").Spinner, {
              size: 50,
              stroke: 4,
            }),
          }),
          c.jsx(o("WAWebEmojiText.react").EmojiText, {
            element: "div",
            className: "x1f6kntn x1fc57z9 xhslqc4",
            text: a,
          }),
        ],
      });
    }
    Y.displayName = Y.name + " [from " + i.id + "]";
    function J(e) {
      var t = e.labelId,
        n = o("WAWebLabelCollection").LabelCollection.get(t);
      return n
        ? c.jsx(g, {
            children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
              element: "div",
              className: "x1f6kntn x1fc57z9 xhslqc4",
              text: Z(t),
            }),
          })
        : null;
    }
    J.displayName = J.name + " [from " + i.id + "]";
    function Z(e) {
      var t = o("WAWebLabelCollection").LabelCollection.get(e);
      return t
        ? s._(/*BTDS*/ "No result found for '{labelName}'", [
            s._param("labelName", t.name),
          ])
        : null;
    }
    function ee(e) {
      var t = e.onClick,
        n = e.xstyle;
      return (
        r("vulture")("jP2pkcrlDEbICV81qKYOXZ2bpug="),
        c.jsxs(g, {
          xstyle: n,
          onClick: t,
          children: [
            c.jsx(o("WAWebRefreshIcon.react").RefreshIcon, {
              xstyle: f.iconRetry,
            }),
            c.jsx("div", { children: s._(/*BTDS*/ "Retry") }),
          ],
        })
      );
    }
    ee.displayName = ee.name + " [from " + i.id + "]";
    function te() {
      return c.jsx(g, { text: "No quick replies", testid: void 0 });
    }
    te.displayName = te.name + " [from " + i.id + "]";
    function ne(e, t) {
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
    function re(e) {
      var t = e.filter,
        a = e.filterSession,
        i = e.onClearFilter,
        l = e.onShowSearch;
      d(
        function () {
          o("WAWebFilterLogging").logEmptyStateViewedFilterEvent(
            a.sessionId,
            t,
          );
        },
        [t, a.sessionId],
      );
      var s = t.kind != null ? ne(t.kind, t.label) : null;
      if (s == null) return null;
      var u = s.actionButton,
        h = s.actionLabel,
        y = s.icon,
        C = s.paragraph,
        b = s.theme,
        v = s.title;
      if (
        t.kind === o("WAWebChatSearchFilters").SearchFilters.FAVORITES &&
        o("WAWebFavoriteCollection").FavoriteCollection.length === 0 &&
        o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()
      ) {
        var S = function () {
          o("WAWebModalManager").ModalManager.open(
            c.jsx(
              o("WAWebAddToFavoritesModalLoadable").AddToFavoritesModalLoadable,
              { onClose: o("WAWebModalManager").closeModalManager },
            ),
            { transition: "modal-flow" },
          );
        };
        return c.jsx(g, {
          title: v,
          text: C,
          theme: _.FavoritesFilter,
          icon: c.jsx(o("WAWebWdsIllFavoritesIcon.react").WdsIllFavoritesIcon, {
            width: 180,
          }),
          testid: void 0,
          children: c.jsx(r("WAWebUnstyledButton.react"), {
            dataTab: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
            testid: void 0,
            onClick: S,
            xstyle: [f.action, o("WAWebUISpacing").uiMargin.vert8],
            children: h,
          }),
        });
      }
      if (t.kind === o("WAWebChatSearchFilters").SearchFilters.UNREAD && m()) {
        var R = p(),
          L = function () {
            (i(), R && l != null && l());
          };
        return c.jsx(g, {
          title: v,
          text: C,
          theme: _.UnreadFilter,
          icon: y,
          testid: void 0,
          children: c.jsx(r("WAWebUnstyledButton.react"), {
            dataTab: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
            testid: void 0,
            onClick: L,
            xstyle: [f.action, o("WAWebUISpacing").uiMargin.vert8],
            children: h,
          }),
        });
      }
      if (
        t.kind === o("WAWebChatSearchFilters").SearchFilters.GROUP &&
        o("WAWebABProps").getABPropConfigValue("wa_web_create_group_in_filter")
      ) {
        var E = function () {
          var e;
          (e = o("WAWebDrawerManagerGlobalContext").getGlobalDrawerManager(
            "left",
          )) == null ||
            e.openDrawer(
              o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
                ? { descriptorType: "new_group", isSubFlow: !1 }
                : c.jsx(o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable, {
                    onEnd: o("WAWebDrawerManager").closeDrawerLeft,
                    onCreateGroup: (function () {
                      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (e) {
                          (yield e,
                            o(
                              "WAWebDrawerManager",
                            ).DrawerManager.closeDrawerLeft());
                        },
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })(),
                  }),
            );
        };
        return c.jsx(g, {
          title: v,
          text: C,
          theme: _.GroupsFilter,
          icon: y,
          testid: void 0,
          children: c.jsx(r("WAWebUnstyledButton.react"), {
            dataTab: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
            testid: void 0,
            onClick: E,
            xstyle: [f.action, o("WAWebUISpacing").uiMargin.vert8],
            children: h,
          }),
        });
      }
      return t.kind === o("WAWebChatSearchFilters").SearchFilters.COMMUNITY
        ? c.jsx(g, {
            title: v,
            text: C,
            theme: _.GroupsFilter,
            icon: y,
            testid: void 0,
            children: c.jsx(r("WAWebUnstyledButton.react"), {
              dataTab: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
              testid: void 0,
              onClick: i,
              xstyle: [f.action, o("WAWebUISpacing").uiMargin.vert8],
              children: h,
            }),
          })
        : (u ||
            (u = c.jsx(r("WAWebUnstyledButton.react"), {
              dataTab: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
              testid: void 0,
              onClick: i,
              xstyle: f.action,
              children: h,
            })),
          c.jsx(g, {
            title: v,
            text: C,
            theme: b,
            icon: y,
            xstyle: f.noFilteredChats,
            testid: void 0,
            children: u,
          }));
    }
    re.displayName = re.name + " [from " + i.id + "]";
    function oe(t) {
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
    oe.displayName = oe.name + " [from " + i.id + "]";
    function ae(e) {
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
    ae.displayName = ae.name + " [from " + i.id + "]";
    function ie(e) {
      var t = e.testid,
        n = e.xstyle;
      return c.jsx(g, {
        xstyle: n,
        text: s._(/*BTDS*/ "Enter a phone number to start a chat"),
        testid: void 0,
      });
    }
    ((ie.displayName = ie.name + " [from " + i.id + "]"),
      (l.EmptyStateTheme = _),
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
      (l.allArchivedFbt = W),
      (l.StarredMsgs = q),
      (l.KeptMsgs = U),
      (l.SentForAdminReview = V),
      (l.MediaMsgs = H),
      (l.LinkMsgs = G),
      (l.DocMsgs = z),
      (l.BeforeImageSearch = j),
      (l.SearchingImages = K),
      (l.ImageSearchEmpty = Q),
      (l.Loading = X),
      (l.LoadingWithText = Y),
      (l.NoResultForLabel = J),
      (l.noResultForLabelFbt = Z),
      (l.LazyLoadRetry = ee),
      (l.NoQuickReplies = te),
      (l.getNoFilteredChatsStrings = ne),
      (l.NoFilteredChats = re),
      (l.EmptyErrorStateWithButton = oe),
      (l.NoSearchResults = ae),
      (l.EnterPhoneNumberToStartChat = ie));
  },
  226,
);
