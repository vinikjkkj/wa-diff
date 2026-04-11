__d(
  "WAWebChatListFiltersDynamic.react",
  [
    "fbt",
    "WALogger",
    "WAWebChatCollection",
    "WAWebChatListFilterListsDropdown.react",
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
    "WAWebNewsletterCollection",
    "WAWebNewsletterGatingUtils",
    "WAWebNoop",
    "WAWebSchemaLabel",
    "WAWebTabOrder",
    "isStringNullOrEmpty",
    "react",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebMaxVisibleFilters",
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
      y,
      C = y || (y = o("react")),
      b = y,
      v = b.useImperativeHandle,
      S = b.useRef,
      R = {
        id: "all-filter",
        getLabel: function () {
          return s._(/*BTDS*/ "All");
        },
        testid: "all-filter",
      },
      L = {
        id: "unread-filter",
        filter: o("WAWebChatSearchFilters").SearchFilters.UNREAD,
        getLabel: function () {
          return s._(/*BTDS*/ "Unread");
        },
        listType: o("WAWebSchemaLabel").ListType.UNREAD,
        testid: "unread-filter",
        count: 0,
      },
      E = {
        id: "group-filter",
        filter: o("WAWebChatSearchFilters").SearchFilters.GROUP,
        getLabel: function () {
          return s._(/*BTDS*/ "Groups");
        },
        listType: o("WAWebSchemaLabel").ListType.GROUPS,
        testid: "group-filter",
        count: 0,
      },
      k = {
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
      I = {
        id: "channels-filter",
        filter: o("WAWebChatSearchFilters").SearchFilters.CHANNELS,
        getLabel: function () {
          return s._(/*BTDS*/ "Channels");
        },
        testid: "channels-filter",
        count: 0,
      },
      T = function (t) {
        return t === o("WAWebSchemaLabel").ListType.UNREAD
          ? L.getLabel
          : t === o("WAWebSchemaLabel").ListType.GROUPS
            ? E.getLabel
            : t === o("WAWebSchemaLabel").ListType.FAVORITES
              ? k.getLabel
              : null;
      },
      D = function (t) {
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
      x = function (t) {
        var e = [R, L];
        if (
          (t && e.push(k),
          e.push(E),
          o("WAWebLabelCollection").LabelCollection.length !== 0)
        ) {
          var n,
            r = o("WAWebLabelCollection").LabelCollection.toArray();
          o("WAWebListUtils").sortLabels(r);
          var a = r.reduce(function (t, n) {
            var r;
            if (!n.name) return t;
            var a = D(n.type);
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
                (r = T(n.type)) != null
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
          (n = e).push.apply(n, a);
        }
        if (o("WAWebNewsletterGatingUtils").isChannelsInChatListEnabled()) {
          var i = e.findIndex(function (e) {
            return (
              e.filter === o("WAWebChatSearchFilters").SearchFilters.UNREAD
            );
          });
          i !== -1 ? e.splice(i + 1, 0, I) : e.push(I);
        }
        return e;
      },
      $ = function (t, n, r, a) {
        if (a < t) return r.slice(0, t);
        var e = [R],
          i = r.find(function (e) {
            return (
              e.listId === String(n.label) ||
              (o("WAWebListUtils").isBuiltInList(e.listType) &&
                n.kind === e.filter)
            );
          });
        return (i != null && e.push(i), e);
      },
      P = function (t, n, a) {
        return t.map(function (e, t) {
          return C.jsx(
            r("WAWebListFilterButton.react"),
            {
              ref: function (r) {
                n.current[t] = r;
              },
              id: "measurement-" + e.id,
              label: e.getLabel(),
              selected: !1,
              restrictSize: !0,
              startIcon: o("WAWebListUtils").shouldShowListIcon(
                e.listType,
                e.color,
              )
                ? C.jsx(r("WAWebListIcon.react"), { color: e.color, size: 10 })
                : void 0,
              count: o("WAWebListUtils").getUnreadChatsCountForFilter(e, a),
              onClick: r("WAWebNoop"),
              tabIndex: -1,
            },
            "measurement-" + e.id,
          );
        });
      },
      N = {
        filterPillsContainer: {
          paddingTop: "x1iorvi4",
          paddingBottom: "x10b6aqq",
          paddingInlineStart: "x106a9eq",
          paddingInlineEnd: "x2vl965",
          backgroundColor: "x1280gxy",
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          flexWrap: "xozqiw3",
          flexShrink: "x2lah0s",
          columnGap: "xfex06f",
          minWidth: "xeuugli",
          minHeight: "x2lwn1j",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
      };
    function M(t) {
      "use no forget";
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, h),
        i = a.filter,
        l = a.filterSession,
        s = a.onFilterChange,
        y = i.kind,
        b = i.label,
        R = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        L = S(null),
        E = S([]),
        k = S(null),
        I = S(null),
        T = x(o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled()),
        M = r("useWAWebMaxVisibleFilters")(L, T),
        w = M.maxVisibleCount,
        A = M.measurementContainerRef,
        F = M.pillRefs,
        O = w,
        B = function (t, n) {
          if (((E.current[n] = t), !(n >= T.length))) {
            var e = T[n].filter;
            e === y && (k.current = t);
          }
        },
        W = function (t) {
          t && (t.focus(), (I.current = t));
        };
      (o("useWAWebListener").useListener(
        b != null ? o("WAWebLabelCollection").LabelCollection : null,
        "remove",
        function (t) {
          t.id === b &&
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
          b != null ? o("WAWebLabelCollection").LabelCollection : null,
          "change:count",
          function (e, t) {
            e.id === b &&
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
              var t = b != null && e.id === b,
                n = y != null && D(e.type) === y;
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
          o("WAWebLabelCollection").LabelCollection,
          "change:count change:sort change:name change:color change:isActive remove add reorder",
          function () {
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[ChatListFilters] forceUpdate: LabelCollection",
                ])),
            ),
              R());
          },
        ),
        o("useWAWebListener").useListener(
          o("WAWebChatCollection").ChatCollection,
          "change:showUnreadInTitle change:unreadCount change:isFavorite",
          function () {
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[ChatListFilters] forceUpdate: ChatCollection",
                ])),
            ),
              R());
          },
        ),
        o("useWAWebListener").useListener(
          o("WAWebNewsletterGatingUtils").isChannelsInChatListEnabled()
            ? r("WAWebNewsletterCollection")
            : null,
          "change:unreadCount add remove",
          function () {
            (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[ChatListFilters] forceUpdate: NewsletterCollection",
                ])),
            ),
              R());
          },
        ));
      var q = function (t, n) {
        var e = { kind: t != null ? t : null, label: n != null ? n : null };
        if (i.kind === e.kind && i.label === e.label) {
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[ChatListFilters] onFilterChange skip: unchanged",
              ])),
          );
          return;
        }
        ((l == null ? void 0 : l.sessionId) != null &&
          o("WAWebFilterLogging").logSelectFilterEvent(l.newSessionId(), e),
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "[ChatListFilters] onFilterChange: handleSetActiveFilter",
              ])),
          ),
          s(e));
      };
      (o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "set_active_filter",
        q,
      ),
        v(n, function () {
          return {
            focus: function () {
              W(k.current);
            },
          };
        }));
      var U = function (t, n, a) {
          var e = t === y,
            i = n === b,
            u = n == null,
            c = e && u && !i,
            d = c
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
            o("WAWebFilterLogging").logSelectFilterEvent(l.newSessionId(), d),
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[ChatListFilters] onFilterChange: handleFilterClick",
                ])),
            ),
            s(d));
        },
        V = function (t) {
          var e = E.current.indexOf(I.current),
            n;
          r("WAWebL10N").isRTL()
            ? (n = e + (t === "next" ? -1 : 1))
            : (n = e + (t === "next" ? 1 : -1));
          var o = E.current[n];
          o && W(o);
        },
        H = {
          left: function () {
            return V("previous");
          },
          right: function () {
            return V("next");
          },
        },
        G = function (t) {
          var e = t.target;
          e instanceof HTMLElement && (I.current = e);
        },
        z = o("WAWebListUtils").getListsUnreadChatCountMap(),
        j = T.findIndex(function (e) {
          return (
            (y === e.filter &&
              (o("WAWebListUtils").isBuiltInList(e.listType) ||
                b === e.listId ||
                (b == null && e.listId == null))) ||
            (y == null && e.filter == null)
          );
        }),
        K = $(O, i, T, j),
        Q = j >= O,
        X = Q
          ? T
          : T.filter(function (e) {
              return !K.some(function (t) {
                return (
                  t.id === e.id || (t.listId != null && t.listId === e.listId)
                );
              });
            }),
        Y =
          T.length > O ||
          o("WAWebLabelCollection").LabelCollection.getCustomLists().length > 0;
      j >= O && (j = 1);
      var J = K.map(function (e, t) {
          var n = j === t,
            a = r("isStringNullOrEmpty")(e.listId) ? {} : { listId: e.listId };
          return C.createElement(
            r("WAWebListFilterButton.react"),
            babelHelpers.extends(
              {
                ref: function (n) {
                  return B(n, t);
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
                key: e.id,
                tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
                tabIndex: n ? 0 : -1,
                label: e.getLabel(),
                selected: n,
                restrictSize: !0,
                startIcon: o("WAWebListUtils").shouldShowListIcon(
                  e.listType,
                  e.color,
                )
                  ? C.jsx(r("WAWebListIcon.react"), {
                      color: e.color,
                      size: 10,
                    })
                  : void 0,
                count: o("WAWebListUtils").getUnreadChatsCountForFilter(e, z),
                onClick: function () {
                  return U(e.filter, e.listId, e.listType);
                },
                onFocus: G,
              },
            ),
          );
        }),
        Z = K.length,
        ee,
        te;
      return (
        Y
          ? (ee = C.jsx(r("WAWebChatListFilterListsDropdown.react"), {
              ref: function (t) {
                return B(t, Z);
              },
              id: "additional-filters",
              role: "tab",
              "aria-selected": !1,
              "aria-controls": "chat-list",
              filters: X,
              currentFilter: i,
              tabIndex: -1,
              filterSession: l,
              onSelect: U,
              onFocus: G,
            }))
          : (te = C.jsx(r("WAWebChatListFiltersNewListButton.react"), {
              ref: function (t) {
                return B(t, Z);
              },
              id: "new-filter",
              role: "tab",
              "aria-selected": !1,
              "aria-controls": "chat-list",
              tabIndex: -1,
              onFocus: G,
            })),
        C.jsxs(C.Fragment, {
          children: [
            C.jsx("div", {
              ref: A,
              className:
                "x10l6tqk xlshs6z xqtp20y x6ikm8r x10wlt62 x78zum5 x1q0g3np xfex06f x47corl",
              "aria-hidden": "true",
              children: P(T, F, z),
            }),
            C.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
              ref: L,
              role: "tablist",
              "aria-label": "chat-list-filters",
              handlers: H,
              xstyle: N.filterPillsContainer,
              children: [J, ee, te],
            }),
          ],
        })
      );
    }
    ((M.displayName = M.name + " [from " + i.id + "]"), (l.default = M));
  },
  226,
);
