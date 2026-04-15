__d(
  "WAWebStatusList.react",
  [
    "fbt",
    "WALogger",
    "WAWebClickable.react",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebEmptyState.react",
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebFlatListController",
    "WAWebFlex.react",
    "WAWebKeyboardTabUtils",
    "WAWebMiscGatingUtils",
    "WAWebModalManager",
    "WAWebPrivacyNarrativeE2EMessage.react",
    "WAWebSectionHeader.react",
    "WAWebStatusCell.react",
    "WAWebStatusCollection",
    "WAWebStatusGatingUtils",
    "WAWebStatusGetters",
    "WAWebStatusViewer.react",
    "WAWebStatusVisibilityUtils",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebWamEnumStatusRowSection",
    "react",
    "react-compiler-runtime",
    "useLazyRef",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useMemo,
      p = d.useState,
      _ = {
        SEC_UNREAD: "SEC_UNREAD",
        SEC_READ: "SEC_READ",
        SEC_MUTED: "SEC_MUTED",
        SEC_E2E_MESSAGE: "SEC_E2E_MESSAGE",
        ROW_STATUS: "ROW_STATUS",
      };
    function f(e) {
      return o("WAWebContactGetters").getIsMe(e.contact)
        ? o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.MY_STATUS
        : o("WAWebContactGetters").getCalculatedStatusMute(e.contact)
          ? o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.MUTED_STORIES
          : o("WAWebStatusGetters").getHasUnread(e)
            ? o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION
                .RECENT_STORIES
            : o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION
                .PREVIOUS_STORIES;
    }
    function g(t) {
      var n = o("react-compiler-runtime").c(25),
        a = t.data,
        i = t.onOpenStatus,
        l = t.onToggleMute,
        u = t.sessionIdRef,
        d;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = s._(/*BTDS*/ "Recent")), (n[0] = d))
        : (d = n[0]);
      var m = d,
        p;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = s._(/*BTDS*/ "Viewed")), (n[1] = p))
        : (p = n[1]);
      var g = p,
        y;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((y =
            o("WAWebStatusGatingUtils").isUpdatesTabInNavigationBarEnabled() ||
            o("WAWebStatusGatingUtils").isStatusHideStringEnabled()
              ? s._(/*BTDS*/ "Hidden")
              : s._(/*BTDS*/ "Muted")),
          (n[2] = y))
        : (y = n[2]);
      var C = y,
        b;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = s._(/*BTDS*/ "Hide")), (n[3] = b))
        : (b = n[3]);
      var v = b,
        S;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = s._(/*BTDS*/ "Show")), (n[4] = S))
        : (S = n[4]);
      var R = S;
      switch (a.type) {
        case _.SEC_UNREAD: {
          var L;
          return (
            n[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((L = c.jsx(r("WAWebSectionHeader.react"), {
                  header: m,
                  uppercase: !1,
                  isTransparent: !0,
                })),
                (n[5] = L))
              : (L = n[5]),
            L
          );
        }
        case _.SEC_READ: {
          var E;
          return (
            n[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((E = c.jsx(r("WAWebSectionHeader.react"), {
                  header: g,
                  isTransparent: !0,
                  uppercase: !1,
                  testid: void 0,
                })),
                (n[6] = E))
              : (E = n[6]),
            E
          );
        }
        case _.SEC_MUTED: {
          var k;
          n[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((k = c.jsx(o("WAWebFlex.react").FlexItem, {
                grow: 1,
                children: c.jsx(r("WAWebSectionHeader.react"), {
                  header: C,
                  isTransparent: !0,
                  uppercase: !1,
                  testid: void 0,
                }),
              })),
              (n[7] = k))
            : (k = n[7]);
          var I = a.expanded ? v : R,
            T;
          n[8] !== I
            ? ((T = c.jsx(o("WAWebText.react").WAWebTextSmall, {
                as: "span",
                color: "teal",
                children: I,
              })),
              (n[8] = I),
              (n[9] = T))
            : (T = n[9]);
          var D;
          return (
            n[10] !== l || n[11] !== T
              ? ((D = c.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  xstyle: o("WAWebUISpacing").uiPadding.end10,
                  children: [
                    k,
                    c.jsx(o("WAWebFlex.react").FlexItem, {
                      grow: 0,
                      align: "center",
                      children: c.jsx(o("WAWebClickable.react").Clickable, {
                        onClick: l,
                        children: T,
                      }),
                    }),
                  ],
                })),
                (n[10] = l),
                (n[11] = T),
                (n[12] = D))
              : (D = n[12]),
            D
          );
        }
        case _.ROW_STATUS: {
          var x;
          n[13] !== a.status
            ? ((x = f(a.status)), (n[13] = a.status), (n[14] = x))
            : (x = n[14]);
          var $ = x,
            P;
          n[15] !== a.index ||
          n[16] !== a.status ||
          n[17] !== i ||
          n[18] !== $ ||
          n[19] !== u
            ? ((P = function () {
                i
                  ? i(a.status, void 0, a.index, $)
                  : o("WAWebModalManager").ModalManager.openMedia(
                      c.jsx(r("WAWebStatusViewer.react"), {
                        initialStatus: a.status,
                        initialStatusMsg: void 0,
                        closeStatusViewer: h,
                        sessionId: u == null ? void 0 : u.current,
                        rowIdx: a.index,
                        rowSection: $,
                        continuousPlay: !0,
                      }),
                      {
                        transition: "status-modal",
                        focusType: {
                          type: o("WAWebKeyboardTabUtils").FocusType.CUSTOM,
                        },
                      },
                    );
              }),
              (n[15] = a.index),
              (n[16] = a.status),
              (n[17] = i),
              (n[18] = $),
              (n[19] = u),
              (n[20] = P))
            : (P = n[20]);
          var N;
          return (
            n[21] !== a.status || n[22] !== P
              ? ((N = c.jsx(r("WAWebStatusCell.react"), {
                  isModalView: !1,
                  status: a.status,
                  onClick: P,
                  contact: a.status.contact,
                })),
                (n[21] = a.status),
                (n[22] = P),
                (n[23] = N))
              : (N = n[23]),
            N
          );
        }
        case _.SEC_E2E_MESSAGE: {
          var M;
          return (
            n[24] === Symbol.for("react.memo_cache_sentinel")
              ? ((M = c.jsx(
                  o("WAWebPrivacyNarrativeE2EMessage.react")
                    .E2eMessageStatusList,
                  {},
                )),
                (n[24] = M))
              : (M = n[24]),
            M
          );
        }
        default:
          throw (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "UnknownDataError: invoked from WAWebStatusList",
                ])),
            ),
            new (o("WAWebFlatList.react").UnknownDataError)(a)
          );
      }
    }
    function h() {
      o("WAWebModalManager").ModalManager.closeMedia();
    }
    function y(e) {
      var t = e.onOpenStatus,
        n = r("useLazyRef")(function () {
          return new (r("WAWebFlatListController"))();
        }),
        a = function () {
          return o("WAWebStatusCollection").StatusCollection.getUnexpired({
            containsAnyUnreadStatus: !0,
          });
        },
        i = function () {
          return o("WAWebStatusCollection").StatusCollection.getUnexpired({
            containsAnyUnreadStatus: !1,
          });
        },
        l = function () {
          var e = a().filter(function (e) {
              return o(
                "WAWebStatusVisibilityUtils",
              ).isUserOrTrustedGroupOrNewsletterStatus(e);
            }),
            t = i().filter(function (e) {
              return o(
                "WAWebStatusVisibilityUtils",
              ).isUserOrTrustedGroupOrNewsletterStatus(e);
            }),
            n = [].concat(e, t).filter(function (e) {
              return o("WAWebContactGetters").getCalculatedStatusMute(
                e.contact,
              );
            });
          return { unread: e, read: t, muted: n };
        },
        s = m(l, []),
        u = s.muted,
        d = s.read,
        f = s.unread,
        h = p(function () {
          return f.filter(function (e) {
            return !o("WAWebContactGetters").getCalculatedStatusMute(e.contact);
          });
        }),
        y = h[0],
        C = h[1],
        b = p(function () {
          return d.filter(function (e) {
            return !o("WAWebContactGetters").getCalculatedStatusMute(e.contact);
          });
        }),
        v = b[0],
        S = b[1],
        R = p(u),
        L = R[0],
        E = R[1],
        k = p(!1),
        I = k[0],
        T = k[1],
        D = function () {
          var e = l(),
            t = e.muted,
            n = e.read,
            r = e.unread;
          (C(
            r.filter(function (e) {
              return !o("WAWebContactGetters").getCalculatedStatusMute(
                e.contact,
              );
            }),
          ),
            S(
              n.filter(function (e) {
                return !o("WAWebContactGetters").getCalculatedStatusMute(
                  e.contact,
                );
              }),
            ),
            E(t));
        };
      o("useWAWebListener").useListener(
        o("WAWebStatusCollection").StatusCollection,
        "add remove bulk_add sort change:msgsChanged change:unreadCount",
        D,
      );
      var x = function () {
        var e = l(),
          t = e.muted,
          n = e.read,
          r = e.unread;
        (C(
          r.filter(function (e) {
            return !o("WAWebContactGetters").getCalculatedStatusMute(e.contact);
          }),
        ),
          S(
            n.filter(function (e) {
              return !o("WAWebContactGetters").getCalculatedStatusMute(
                e.contact,
              );
            }),
          ),
          E(t));
      };
      o("useWAWebListener").useListener(
        o("WAWebContactCollection").ContactCollection,
        "change:statusMute change:parentStatusMute",
        x,
      );
      var $ = function () {
          T(!I);
        },
        P = 72,
        N = 72,
        M = m(
          function () {
            var e = [];
            return (
              y.length > 0 &&
                (e.push({
                  type: _.SEC_UNREAD,
                  itemKey: "section-unread",
                  height: P,
                }),
                e.push.apply(
                  e,
                  y.map(function (e, t) {
                    return {
                      type: _.ROW_STATUS,
                      itemKey: e.id.toString(),
                      height: N,
                      status: e,
                      index: t,
                    };
                  }),
                )),
              v.length > 0 &&
                (e.push({
                  type: _.SEC_READ,
                  itemKey: "section-read",
                  height: P,
                }),
                e.push.apply(
                  e,
                  v.map(function (e, t) {
                    return {
                      type: _.ROW_STATUS,
                      itemKey: e.id.toString(),
                      height: N,
                      status: e,
                      index: t,
                    };
                  }),
                )),
              L.length > 0 &&
                (e.push({
                  type: _.SEC_MUTED,
                  itemKey: "section-muted",
                  height: P,
                  expanded: I,
                }),
                I &&
                  e.push.apply(
                    e,
                    L.map(function (e, t) {
                      return {
                        type: _.ROW_STATUS,
                        itemKey: e.id.toString(),
                        height: N,
                        status: e,
                        index: t,
                      };
                    }),
                  )),
              o("WAWebMiscGatingUtils").isPrivacyNarrativeV1Enabled() &&
                e.push({
                  type: _.SEC_E2E_MESSAGE,
                  itemKey: "section-e2e-message",
                }),
              e
            );
          },
          [y, v, L, P, N, I],
        ),
        w;
      return (
        o("WAWebStatusCollection").StatusCollection.hasSynced() && M.length > 0
          ? (w = c.jsx(r("WAWebFlatListContainer.react"), {
              className:
                "x1iyjqo2 xs83m0k xdl72j9 xwxc41k x1odjw0f x122zoth x16jf5lm",
              flatListControllers: [n.current],
              children: c.jsx(o("WAWebFlatList.react").FlatList, {
                className_DONOTUSE: "statusList",
                itemEnterAnimationsEnabled: !0,
                flatListController: n.current,
                direction: "vertical",
                data: M,
                handleKeyboardNavigation: !0,
                tabIndex: -1,
                role: "list",
                focusableItemSelector: "[data-focusid='status-row-item']",
                renderItem: function (r) {
                  return c.jsx(g, {
                    data: r,
                    onOpenStatus: t,
                    onToggleMute: $,
                    sessionIdRef: e.sessionIdRef,
                  });
                },
              }),
            }))
          : (w = c.jsx(o("WAWebEmptyState.react").ListStatus, {})),
        w
      );
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);
