__d(
  "WAWebChatSearchDrawer.react",
  [
    "fbt",
    "Promise",
    "WAAbortError",
    "WAFtsIsSearchQueryEligibleForMessageSearch",
    "WAPromiseRaceAbort",
    "WAShiftTimer",
    "WAWebBackendErrors",
    "WAWebChatGetters",
    "WAWebChatMessageSearch",
    "WAWebChatSearchMessageList.react",
    "WAWebCmd",
    "WAWebContactGetters",
    "WAWebCoreActionsODS",
    "WAWebDatePickerContainer.react",
    "WAWebDesktopUpsellPlatformAwareHooks",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDropdown.react",
    "WAWebEmptyState.react",
    "WAWebFlatList.react",
    "WAWebFlatListController",
    "WAWebFlex.react",
    "WAWebFrontendConstants",
    "WAWebFtsConstants",
    "WAWebFtsMsgsCollection",
    "WAWebHistorySyncComponents.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebMsgCollection",
    "WAWebNonEmptyString",
    "WAWebNoop",
    "WAWebSearchByDateUtils",
    "WAWebSearchUserJourneyLogger",
    "WAWebSingleSelection",
    "WAWebSpinner.react",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebWamEnumSearchUjDismissType",
    "WAWebWamEnumTsSurface",
    "WDSButton.react",
    "WDSFlex.stylex",
    "WDSIconWdsIcCalendarSearch.react",
    "WDSSearchBar.react",
    "asyncToGeneratorRuntime",
    "react",
    "stylex",
    "useLazyRef",
    "useWAWebDebouncedCallback",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebUIM",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useEffect,
      f = p.useMemo,
      g = p.useRef,
      h = p.useState,
      y = {
        flexNone: {
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          flexBasis: "xdl72j9",
          $$css: !0,
        },
        wdsSearchBarContainer: {
          paddingInlineStart: "x1iw51ew",
          paddingInlineEnd: "xde1mab",
          paddingLeft: null,
          paddingRight: null,
          paddingBottom: "x1nbhmlj",
          rowGap: "x8a3fw1",
          columnGap: "x1aj3ljl",
          $$css: !0,
        },
        paddingVert24: {
          paddingTop: "xl7twdi",
          paddingBottom: "xvg22vi",
          $$css: !0,
        },
      };
    function C(e) {
      var t = e.chat,
        n = e.resultsUnavailable,
        a = e.searching,
        i = e.searchText,
        l = (i || "").trim();
      return r("WAFtsIsSearchQueryEligibleForMessageSearch")(l)
        ? a
          ? m.jsx(o("WAWebEmptyState.react").SearchingMessages, {})
          : n
            ? m.jsx(o("WAWebEmptyState.react").SearchMessagesUnavailable, {})
            : m.jsx(o("WAWebEmptyState.react").SearchMessages, {})
        : o("WAWebEmptyState.react").BeforeSearchMessages(
            t.title(),
            o("WAWebChatGetters").getIsGroup(t),
            o("WAWebContactGetters").getIsMe(t.contact),
          );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(t) {
      "use no forget";
      var a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.chat,
        d = i.isInFlow,
        p = i.threadId,
        b = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        v = r("useWAWebUIM")(),
        S = r("useWAWebUnmountSignal")(),
        R = h(""),
        L = R[0],
        E = R[1],
        k = h(!1),
        I = k[0],
        T = k[1],
        D = h(!1),
        x = D[0],
        $ = D[1],
        P = h(null),
        N = P[0],
        M = P[1],
        w = f(function () {
          return new (r("WAWebFlatListController"))();
        }, []),
        A = f(
          function () {
            return new (r("WAWebFtsMsgsCollection"))(l, p);
          },
          [l, p],
        ),
        F = g(null),
        O = g(null),
        B = f(function () {
          return new (r("WAWebSingleSelection"))([], function (e) {
            return e.id.toString();
          });
        }, []),
        W = g(!1),
        q = g({}),
        U = g(null),
        V = g(null),
        H = g(null),
        G = g(null),
        z = r("useLazyRef")(function () {
          return new (o("WAShiftTimer").ShiftTimer)(function () {
            var e = q.current;
            (e.searchText !== void 0 && E(e.searchText),
              e.searching !== void 0 && T(e.searching),
              e.resultsUnavailable !== void 0 && $(e.resultsUnavailable),
              (q.current = {}));
          });
        }),
        j = function (t, n) {
          (n === void 0 && (n = 75),
            Object.assign(q.current, t),
            t.searching === !0 ? z.current.debounce(0) : z.current.debounce(n));
        },
        K = function (t) {
          return t == null ||
            !(
              t.scrollTop + o("WAWebFrontendConstants").SCROLL_FUDGE >
              t.scrollHeight - t.clientHeight
            )
            ? !1
            : !(
                !A.hasMoreMsgs ||
                W.current ||
                I ||
                A.searchPromise ||
                !r("WAFtsIsSearchQueryEligibleForMessageSearch")(
                  (L || "").trim(),
                )
              );
        },
        Q = function () {
          var e = q.current;
          if ("searching" in e) {
            var t;
            return (t = e.searching) != null ? t : !1;
          }
          return I;
        },
        X = function (t) {
          var e;
          t.repeat ||
            (U.current &&
              ((F.current &&
                F.current.selectionEnd !== F.current.value.length) ||
                (t.preventDefault(),
                t.stopPropagation(),
                (e = U.current) == null || e.focusFirst())));
        },
        Y = function () {
          var e;
          (e = F.current) == null || e.focus();
        },
        J = function () {
          v == null || v.requestDismiss();
        },
        Z = function () {
          return (
            Math.round(
              window.innerHeight / o("WAWebFlatList.react").DEFAULT_ITEM_HEIGHT,
            ) + 1
          );
        },
        ee = r("useWAWebDebouncedCallback")(function () {
          var e;
          W.current = !1;
          var t = (L || "").trim();
          if (r("WAFtsIsSearchQueryEligibleForMessageSearch")(t)) {
            ((e = G.current) == null || e.abort(),
              (G.current = new AbortController()));
            var a = G.current.signal,
              i = (c || (c = n("Promise")))
                .resolve()
                .then(function () {
                  Q() || j({ searching: !0 });
                })
                .then(function () {
                  return A.search({ chat: l, count: Z(), searchTerm: t });
                });
            H.current = r("WAPromiseRaceAbort")(i, a)
              .then(function (e) {
                if (S.aborted) throw new (o("WAAbortError").AbortError)();
                e &&
                  !e.canceled &&
                  t === L.trim() &&
                  j({ searching: !1, resultsUnavailable: !1 });
              })
              .catch(o("WAAbortError").catchAbort(r("WAWebNoop")))
              .finally(function () {
                ((H.current = void 0), (G.current = void 0));
              })
              .catch(function (e) {
                W.current ||
                  j({
                    searching: !1,
                    resultsUnavailable:
                      e instanceof o("WAWebBackendErrors").E404,
                  });
              });
          }
        }, o("WAWebFtsConstants").FTS_TYPING_DELAY),
        te = function () {
          var e;
          (ee.cancel(),
            A.resetSearch(),
            A.delete(),
            (e = G.current) == null || e.abort(),
            (W.current = !1),
            E(""),
            T(!1),
            o("WAWebSearchUserJourneyLogger").SearchUserJourneyLogger.dismiss(
              o("WAWebWamEnumSearchUjDismissType").SEARCH_UJ_DISMISS_TYPE.OTHER,
            ));
        },
        ne = function (t) {
          var e = t.trim();
          if (r("WAFtsIsSearchQueryEligibleForMessageSearch")(e))
            (ee(), (W.current = !0), I || j({ searching: !0 }));
          else {
            var n;
            (ee.cancel(),
              A.resetSearch(),
              A.delete(),
              (n = G.current) == null || n.abort(),
              (W.current = !1),
              I && j({ searching: !1, resultsUnavailable: !1 }));
          }
        },
        re = function (t) {
          if (!t) {
            te();
            return;
          }
          if (t !== L) {
            var e = { searchText: t, resultsUnavailable: !1 };
            (ne(t), E(t), j(e));
          }
        },
        oe = function (t) {
          re(t);
        },
        ae = function () {
          o(
            "WAWebSearchUserJourneyLogger",
          ).SearchUserJourneyLogger.searchCtaClicked(
            o("WAWebWamEnumTsSurface").TS_SURFACE.SEARCH,
          );
        },
        ie = function () {
          L ||
            o("WAWebSearchUserJourneyLogger").SearchUserJourneyLogger.dismiss(
              o("WAWebWamEnumSearchUjDismissType").SEARCH_UJ_DISMISS_TYPE.OTHER,
            );
        },
        le = function (t) {
          K(t.currentTarget) && (ee(), (W.current = !0));
        };
      (_(function () {
        return function () {
          var e;
          (ee.cancel(),
            A.delete(!0),
            (e = G.current) == null || e.abort(),
            z.current.cancel());
        };
      }, []),
        o("useWAWebListener").useListener(A, ["bulk_remove"], b));
      var se = o(
          "WAWebDesktopUpsellPlatformAwareHooks",
        ).useWAWebDesktopUpsellPlatformCheck(),
        ue = A.toArray(),
        ce = ue.length
          ? null
          : m.jsx(C, {
              chat: l,
              searchText: L,
              searching: I,
              resultsUnavailable: x,
            });
      if (ce == null) {
        var de = L
          ? o("WAWebNonEmptyString").asMaybeNonEmptyString(L.trim())
          : null;
        ce = m.jsx(r("WAWebChatSearchMessageList.react"), {
          ref: U,
          flatListController: w,
          isSearching: !!de,
          searchText: de,
          ftsResult: ue,
          selection: B,
          onFocusSearch: Y,
          threadId: p,
        });
      }
      var me = { down: X },
        pe =
          I && ue.length
            ? m.jsx(o("WAWebFlex.react").FlexRow, {
                justify: "center",
                xstyle: [y.flexNone, y.paddingVert24],
                children: m.jsx(o("WAWebSpinner.react").Spinner, {
                  stroke: 6,
                  size: 24,
                }),
              })
            : null,
        _e,
        fe = (L || "").trim();
      se !== !0 &&
        r("WAFtsIsSearchQueryEligibleForMessageSearch")(fe) &&
        (_e = m.jsx(
          o("WAWebHistorySyncComponents.react")
            .HistorySyncChatSearchIncompletePlaceholder,
          {},
        ));
      var ge = function () {
          M(null);
        },
        he = g(null),
        ye = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            (o("WAWebCoreActionsODS").logCalendarDateSelectedFromSearchDrawer(),
              (he.current = e));
            var t = yield o("WAWebSearchByDateUtils").getClosestMessageFromDate(
              l.id.toString(),
              e,
            );
            if ((ge(), t)) {
              var n,
                r = o("WAWebMsgCollection").MsgCollection.get(t.toString()),
                a = o("WAWebChatMessageSearch").getSearchContext({
                  chat: l,
                  msgKey: (n = r == null ? void 0 : r.id) != null ? n : t,
                });
              ((a.highlightMentionMsg = !0),
                (a.enableAnimation = !1),
                a &&
                  o("WAWebCmd").Cmd.openChatAt({
                    chat: l,
                    msgContext: a,
                    threadId: p,
                  }));
            } else o("WAWebCmd").Cmd.openChatBottom({ chat: l });
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        Ce = function () {
          var e;
          o("WAWebCoreActionsODS").logCalendarOpenFromSearchDrawer();
          var t = O == null ? void 0 : O.current;
          M({
            dirY: o("WAWebDropdown.react").DirY.TOP,
            dirX: o("WAWebDropdown.react").DirX.CENTER,
            type: o("WAWebDropdown.react").MenuType.DatePicker,
            menu: m.jsx(r("WAWebDatePickerContainer.react"), {
              chatId: l.id,
              onDateSelected: function (t) {
                ye(t);
              },
              defaultActiveStartDate: (e = he.current) != null ? e : new Date(),
            }),
            flipOnRTL: !0,
            anchor: t,
          });
        },
        be = N
          ? m.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "DatePicker",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: ge,
              children: m.jsx(r("WAWebUimUieMenu.react"), { contextMenu: N }),
            })
          : null,
        ve = {};
      return (
        d === !0 ? (ve.onBack = J) : (ve.onCancel = J),
        m.jsxs(
          r("WAWebDrawer.react"),
          {
            ref: a,
            tsNavigationData: { surface: "search", viewName: "chat-search" },
            children: [
              m.jsx(
                o("WAWebDrawerHeader.react").DrawerHeader,
                babelHelpers.extends(
                  {
                    title: s._(/*BTDS*/ "Search messages"),
                    type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
                    rtlFixIfOnDarwin: !0,
                  },
                  ve,
                ),
              ),
              m.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
                handlers: me,
                ref: V,
                className: "x16w0wmm x1c4vz4f x2lah0s xdl72j9",
                children: m.jsxs(
                  "div",
                  babelHelpers.extends(
                    {},
                    (u || (u = r("stylex"))).props(
                      o("WDSFlex.stylex").wdsFlex.flexRow,
                      y.wdsSearchBarContainer,
                    ),
                    {
                      children: [
                        m.jsx(r("WDSButton.react"), {
                          variant: "borderless",
                          Icon: r("WDSIconWdsIcCalendarSearch.react"),
                          testid: void 0,
                          onPress: Ce,
                          ref: O,
                          "aria-label": s._(/*BTDS*/ "Jump to date"),
                        }),
                        m.jsx(
                          "div",
                          babelHelpers.extends(
                            {},
                            u.props(
                              o("WDSFlex.stylex").wdsFlex.flexGrow1,
                              o("WDSFlex.stylex").wdsFlex.flexShrink1,
                            ),
                            {
                              children: m.jsx(r("WDSSearchBar.react"), {
                                ref: F,
                                hintText: s._(/*BTDS*/ "Search"),
                                onBlur: ie,
                                onFocus: ae,
                                onValueChange: oe,
                                value: L,
                                testid: void 0,
                              }),
                            },
                          ),
                        ),
                      ],
                    },
                  ),
                ),
              }),
              be,
              m.jsxs(r("WAWebDrawerBody.react"), {
                flatListControllers: [w],
                className:
                  "x1vjfegm x78zum5 xdt5ytf x1iyjqo2 x1odjw0f x1280gxy",
                onScroll: le,
                id: "pane-side",
                children: [ce, pe, _e],
              }),
            ],
          },
          "search-modal",
        )
      );
    }
    ((b.displayName = b.name + " [from " + i.id + "]"), (l.default = b));
  },
  226,
);
