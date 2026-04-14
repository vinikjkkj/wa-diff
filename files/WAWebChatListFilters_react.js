__d(
  "WAWebChatListFilters.react",
  [
    "fbt",
    "WALogger",
    "WAWebABProps",
    "WAWebChatAssignmentUtils",
    "WAWebChatCollection",
    "WAWebChatListFilterListsDropdown.react",
    "WAWebChatListFiltersDynamic.react",
    "WAWebChatListFiltersLabelsPill.react",
    "WAWebChatListFiltersNewListButton.react",
    "WAWebChatSearchFilters",
    "WAWebCmd",
    "WAWebFilterLogging",
    "WAWebInboxFiltersGatingUtils",
    "WAWebKeyboardHotKeys.react",
    "WAWebL10N",
    "WAWebL10NIsUsingSupportedBritishEnglishLocale",
    "WAWebLabelCollection",
    "WAWebListFilterButton.react",
    "WAWebListIcon.react",
    "WAWebListUtils",
    "WAWebListsGatingUtils",
    "WAWebMobilePlatforms",
    "WAWebNewsletterCollection",
    "WAWebNewsletterGatingUtils",
    "WAWebSchemaLabel",
    "WAWebTabOrder",
    "isStringNullOrEmpty",
    "justknobx",
    "react",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebWindowSize",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h = ["ref"],
      y = ["ref"],
      C,
      b = C || (C = o("react")),
      v = C,
      S = v.useImperativeHandle,
      R = v.useRef,
      L = {
        id: "all-filter",
        getLabel: function () {
          return s._(/*BTDS*/ "All");
        },
        testid: "all-filter",
      },
      E = {
        id: "unread-filter",
        filter: o("WAWebChatSearchFilters").SearchFilters.UNREAD,
        getLabel: function () {
          return s._(/*BTDS*/ "Unread");
        },
        listType: o("WAWebSchemaLabel").ListType.UNREAD,
        testid: "unread-filter",
        count: 0,
      },
      k = {
        id: "group-filter",
        filter: o("WAWebChatSearchFilters").SearchFilters.GROUP,
        getLabel: function () {
          return s._(/*BTDS*/ "Groups");
        },
        listType: o("WAWebSchemaLabel").ListType.GROUPS,
        testid: "group-filter",
        count: 0,
      },
      I = {
        id: "favorites-filter",
        filter: o("WAWebChatSearchFilters").SearchFilters.FAVORITES,
        getLabel: function () {
          return o(
            "WAWebL10NIsUsingSupportedBritishEnglishLocale",
          ).isUsingSupportedBritishEnglishLocale()
            ? s._(/*BTDS*/ "Favourites")
            : s._(/*BTDS*/ "Favorites");
        },
        listType: o("WAWebSchemaLabel").ListType.FAVORITES,
        testid: "favorites-filter",
        count: 0,
      },
      T = {
        id: "assigned-to-you-filter",
        filter: o("WAWebChatSearchFilters").SearchFilters.ASSIGNED_TO_YOU,
        getLabel: function () {
          return s._(/*BTDS*/ "Assigned to you");
        },
        testid: "assigned-to-you-filter",
      },
      D = {
        id: "channels-filter",
        filter: o("WAWebChatSearchFilters").SearchFilters.CHANNELS,
        getLabel: function () {
          return s._(/*BTDS*/ "Channels");
        },
        testid: "channels-filter",
        count: 0,
      },
      x = function (t) {
        return t === o("WAWebSchemaLabel").ListType.UNREAD
          ? E.getLabel
          : t === o("WAWebSchemaLabel").ListType.GROUPS
            ? k.getLabel
            : t === o("WAWebSchemaLabel").ListType.FAVORITES
              ? I.getLabel
              : null;
      },
      $ = function (t) {
        return t == null
          ? o("WAWebChatSearchFilters").SearchFilters.LABELS
          : t === o("WAWebSchemaLabel").ListType.NONE ||
              t === o("WAWebSchemaLabel").ListType.SERVER_ASSIGNED
            ? null
            : t === o("WAWebSchemaLabel").ListType.UNREAD
              ? o("WAWebChatSearchFilters").SearchFilters.UNREAD
              : t === o("WAWebSchemaLabel").ListType.GROUPS
                ? o("WAWebChatSearchFilters").SearchFilters.GROUP
                : t === o("WAWebSchemaLabel").ListType.FAVORITES
                  ? o("WAWebChatSearchFilters").SearchFilters.FAVORITES
                  : t === o("WAWebSchemaLabel").ListType.COMMUNITY
                    ? o("WAWebChatSearchFilters").SearchFilters.COMMUNITY
                    : t === o("WAWebSchemaLabel").ListType.PREDEFINED ||
                        t === o("WAWebSchemaLabel").ListType.CUSTOM
                      ? o("WAWebChatSearchFilters").SearchFilters.LABELS
                      : (function () {
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              t,
                          );
                        })();
      },
      P = function (t, n, r) {
        var e = [L, E];
        if (
          (t && e.push(I),
          e.push(k),
          n && e.push(T),
          r && o("WAWebLabelCollection").LabelCollection.length !== 0)
        ) {
          var a,
            i = o("WAWebLabelCollection").LabelCollection.toArray();
          o("WAWebListUtils").sortLabels(i);
          var l = i.reduce(function (t, n) {
            var r;
            if (!n.name) return t;
            var a = $(n.type);
            if (
              (o("WAWebListUtils").isBuiltInList(n.type) &&
                (e = e.filter(function (e) {
                  return e.filter !== a;
                })),
              n.isActive === !1)
            )
              return t;
            var i = {
              id: "label_item_" + n.id,
              getLabel:
                (r = x(n.type)) != null
                  ? r
                  : function () {
                      return n.name;
                    },
              testid: "label_item_" + n.id,
              listId: n.id,
              listType: n.type,
              color:
                n.colorIndex != null
                  ? o("WAWebListUtils").colorIndexToHex(n.colorIndex)
                  : n.color,
            };
            return (a != null && (i.filter = a), t.push(i), t);
          }, []);
          (a = e).push.apply(a, l);
        }
        if (o("WAWebNewsletterGatingUtils").isChannelsInChatListEnabled()) {
          var s = e.findIndex(function (e) {
            return (
              e.filter === o("WAWebChatSearchFilters").SearchFilters.UNREAD
            );
          });
          s !== -1 ? e.splice(s + 1, 0, D) : e.push(D);
        }
        return e;
      },
      N = function (t, n, r, a) {
        if (a < t) return r.slice(0, t);
        var e = [L],
          i = r.find(function (e) {
            return (
              e.listId === String(n.label) ||
              (o("WAWebListUtils").isBuiltInList(e.listType) &&
                n.kind === e.filter)
            );
          });
        return (i != null && e.push(i), e);
      };
    function M(e) {
      return e >= 1600 ? 4 : e >= 1e3 && e < 1600 ? 3 : 2;
    }
    var w = {
      filterPillsContainer: {
        paddingTop: "x1nn3v0j",
        paddingBottom: "x1ykpatu",
        paddingInlineStart: "x106a9eq",
        paddingInlineEnd: "x2vl965",
        backgroundColor: "x1280gxy",
        display: "x78zum5",
        flexDirection: "x1q0g3np",
        flexWrap: "x1a02dak",
        flexShrink: "x2lah0s",
        rowGap: "x3pnbk8",
        columnGap: "xfex06f",
        minWidth: "xeuugli",
        minHeight: "x2lwn1j",
        $$css: !0,
      },
    };
    function A(t) {
      "use no forget";
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, h),
        i = a.filter,
        l = a.filterSession,
        s = a.onFilterChange,
        y = i.kind,
        C = i.label,
        v = y === o("WAWebChatSearchFilters").SearchFilters.LABELS,
        L = r("useWAWebWindowSize")(),
        E = L.width,
        k = M(E),
        I = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        T = R([]),
        D = R(null),
        x = R(null),
        A = o("WAWebListsGatingUtils").isListsEnabled(),
        F = P(
          o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled(),
          o("WAWebChatAssignmentUtils").canAssignChats(),
          A,
        ),
        O = function (t, n) {
          if (((T.current[n] = t), !(n >= F.length))) {
            var e = F[n].filter;
            e === y && (D.current = t);
          }
        },
        B = function (t) {
          t && (t.focus(), (x.current = t));
        };
      (o("useWAWebListener").useListener(
        C != null ? o("WAWebLabelCollection").LabelCollection : null,
        "remove",
        function (t) {
          t.id === C &&
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[ChatListFilters] label removed -> reset to ALL",
                ])),
            ),
            s({ kind: null }));
        },
      ),
        o("useWAWebListener").useListener(
          C != null ? o("WAWebLabelCollection").LabelCollection : null,
          "change:count",
          function (e, t) {
            e.id === C &&
              t === 0 &&
              (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[ChatListFilters] label count=0 -> reset to ALL",
                  ])),
              ),
              s({ kind: null }));
          },
        ),
        o("useWAWebListener").useListener(
          y != null ? o("WAWebLabelCollection").LabelCollection : null,
          "change:isActive",
          function (e) {
            if (e.isActive === !1) {
              var t = C != null && e.id === C,
                n = y != null && $(e.type) === y;
              (t || n) &&
                (o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[ChatListFilters] label deactivated -> reset to ALL",
                    ])),
                ),
                s({ kind: null }));
            }
          },
        ),
        o("useWAWebListener").useListener(
          A ? o("WAWebLabelCollection").LabelCollection : null,
          "change:count change:sort change:name change:color change:isActive remove add reorder",
          function () {
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[ChatListFilters] LabelCollection change -> forceUpdate",
                ])),
            ),
              I());
          },
        ),
        o("useWAWebListener").useListener(
          A ? o("WAWebChatCollection").ChatCollection : null,
          "change:showUnreadInTitle change:unreadCount change:isFavorite",
          function () {
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[ChatListFilters] ChatCollection change -> forceUpdate",
                ])),
            ),
              I());
          },
        ),
        o("useWAWebListener").useListener(
          A && o("WAWebNewsletterGatingUtils").isChannelsInChatListEnabled()
            ? r("WAWebNewsletterCollection")
            : null,
          "change:unreadCount add remove",
          function () {
            (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[ChatListFilters] NewsletterCollection change -> forceUpdate",
                ])),
            ),
              I());
          },
        ));
      var W = function (t, n) {
        var e,
          r = { kind: t != null ? t : null, label: n != null ? n : null };
        if (i.kind === r.kind && i.label === r.label) {
          var a;
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[ChatListFilters] skip unchanged filter=",
                " label=",
                "",
              ])),
            (a = r.kind) != null ? a : "none",
            !!r.label,
          );
          return;
        }
        ((l == null ? void 0 : l.sessionId) != null &&
          o("WAWebFilterLogging").logSelectFilterEvent(l.newSessionId(), r),
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "[ChatListFilters] setFilter=",
                " label=",
                "",
              ])),
            (e = r.kind) != null ? e : "none",
            !!r.label,
          ),
          s(r));
      };
      (o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "set_active_filter",
        W,
      ),
        S(n, function () {
          return {
            focus: function () {
              B(D.current);
            },
          };
        }));
      var q = function (t, n, a) {
          var e,
            i = t === y,
            u = n === C,
            c = n == null,
            d = i && c && !u,
            m = d
              ? { kind: null }
              : {
                  kind: t != null ? t : null,
                  label:
                    o("WAWebListUtils").isBuiltInList(a) ||
                    r("isStringNullOrEmpty")(n)
                      ? null
                      : n,
                };
          ((l == null ? void 0 : l.sessionId) != null &&
            o("WAWebFilterLogging").logSelectFilterEvent(l.newSessionId(), m),
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[ChatListFilters] select filter=",
                  " label=",
                  "",
                ])),
              (e = m.kind) != null ? e : "none",
              !!m.label,
            ),
            s(m));
        },
        U = function (t) {
          var e = T.current.indexOf(x.current),
            n;
          r("WAWebL10N").isRTL()
            ? (n = e + (t === "next" ? -1 : 1))
            : (n = e + (t === "next" ? 1 : -1));
          var o = T.current[n];
          o && B(o);
        },
        V = {
          left: function () {
            return U("previous");
          },
          right: function () {
            return U("next");
          },
        },
        H = function (t) {
          var e = t.target;
          e instanceof HTMLElement && (x.current = e);
        },
        G = o("WAWebListUtils").getListsUnreadChatCountMap(),
        z,
        j,
        K,
        Q,
        X;
      if (A) {
        var Y = F.findIndex(function (e) {
            return (
              (y === e.filter &&
                (o("WAWebListUtils").isBuiltInList(e.listType) ||
                  C === e.listId ||
                  (C == null && e.listId == null))) ||
              (y == null && e.filter == null)
            );
          }),
          J = N(k, i, F, Y),
          Z = Y >= k,
          ee = Z
            ? F
            : F.filter(function (e) {
                return !J.some(function (t) {
                  return (
                    t.id === e.id || (t.listId != null && t.listId === e.listId)
                  );
                });
              }),
          te =
            F.length > k ||
            o("WAWebLabelCollection").LabelCollection.getCustomLists().length >
              0;
        (Y >= k && (Y = 1),
          (K = J.map(function (e, t) {
            var n = Y === t,
              a = r("isStringNullOrEmpty")(e.listId)
                ? {}
                : { listId: e.listId };
            return b.createElement(
              r("WAWebListFilterButton.react"),
              babelHelpers.extends(
                {
                  ref: function (n) {
                    return O(n, t);
                  },
                  id: e.id,
                  role: "tab",
                  "aria-selected": n,
                  "aria-controls": "chat-list",
                  listType: e.listType,
                },
                a,
                {
                  testIdSuffix: e.testid,
                  key: e.getLabel().toString(),
                  tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
                  tabIndex: n ? 0 : -1,
                  label: e.getLabel(),
                  selected: n,
                  restrictSize: !0,
                  startIcon: o("WAWebListUtils").shouldShowListIcon(
                    e.listType,
                    e.color,
                  )
                    ? b.jsx(r("WAWebListIcon.react"), {
                        color: e.color,
                        size: 10,
                      })
                    : void 0,
                  count: o("WAWebListUtils").getUnreadChatsCountForFilter(e, G),
                  onClick: function () {
                    return q(e.filter, e.listId, e.listType);
                  },
                  onFocus: H,
                },
              ),
            );
          })));
        var ne = J.length;
        te
          ? (Q = b.jsx(r("WAWebChatListFilterListsDropdown.react"), {
              ref: function (t) {
                return O(t, ne);
              },
              id: "additional-filters",
              role: "tab",
              "aria-selected": !1,
              "aria-controls": "chat-list",
              filters: ee,
              currentFilter: i,
              tabIndex: -1,
              filterSession: l,
              onSelect: q,
              onFocus: H,
            }))
          : (X = b.jsx(r("WAWebChatListFiltersNewListButton.react"), {
              ref: function (t) {
                return O(t, ne);
              },
              id: "new-filter",
              role: "tab",
              "aria-selected": !1,
              "aria-controls": "chat-list",
              tabIndex: -1,
              onFocus: H,
            }));
      } else
        ((z = F.map(function (e, t) {
          var n = e.filter,
            a = e.getLabel,
            i = e.id,
            l = e.listId,
            s = e.listType,
            u = e.testid,
            c = y === n || (y == null && n == null);
          return b.jsx(
            r("WAWebListFilterButton.react"),
            {
              ref: function (n) {
                return O(n, t);
              },
              testIdSuffix: u,
              id: i,
              count:
                o("WAWebMobilePlatforms").isSMB() && A
                  ? o("WAWebListUtils").getUnreadChatsCountForFilter(
                      {
                        filter: n,
                        getLabel: a,
                        testid: u,
                        listId: l,
                        listType: s,
                        id: i,
                      },
                      G,
                    )
                  : void 0,
              role: "tab",
              "aria-selected": c,
              "aria-controls": "chat-list",
              listType: s,
              tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
              tabIndex: c ? 0 : -1,
              label: a(),
              selected: c,
              onClick: function () {
                return q(n, l, s);
              },
              onFocus: function (t) {
                var e = t.target;
                e instanceof HTMLElement && (x.current = e);
              },
            },
            a().toString(),
          );
        })),
          (j = o("WAWebInboxFiltersGatingUtils").inboxCustomFiltersEnabled()
            ? b.jsx(
                r("WAWebChatListFiltersLabelsPill.react"),
                {
                  ref: function (t) {
                    return O(t, z.length);
                  },
                  id: "labels-filter",
                  role: "tab",
                  "aria-selected": v,
                  "aria-controls": "chat-list",
                  filterSession: l,
                  isSelected: v,
                  onClick: function (t) {
                    return q(
                      o("WAWebChatSearchFilters").SearchFilters.LABELS,
                      t,
                    );
                  },
                  selectedLabelId: C,
                  tabIndex: v ? 0 : -1,
                  onFocus: H,
                  unreadChatsCountMap: G,
                },
                o("WAWebChatSearchFilters").SearchFilters.LABELS,
              )
            : null));
      return b.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
        role: "tablist",
        "aria-label": "chat-list-filters",
        handlers: V,
        xstyle: w.filterPillsContainer,
        children: [z, j, K, Q, X],
      });
    }
    A.displayName = A.name + " [from " + i.id + "]";
    function F(e) {
      var t = e.ref,
        n = babelHelpers.objectWithoutPropertiesLoose(e, y);
      return (!o("WAWebMobilePlatforms").isSMB() ||
        o("WAWebListsGatingUtils").isListsEnabled()) &&
        r("justknobx")._("2386") &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_lists_full_width_filters",
        )
        ? b.jsx(
            r("WAWebChatListFiltersDynamic.react"),
            babelHelpers.extends({ ref: t }, n),
          )
        : b.jsx(A, babelHelpers.extends({ ref: t }, n));
    }
    F.displayName = F.name + " [from " + i.id + "]";
    var O = F;
    l.ChatListFilters = O;
  },
  226,
);
