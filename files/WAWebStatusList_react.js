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
      var n = t.data,
        a = t.onOpenStatus,
        i = t.onToggleMute,
        l = t.sessionIdRef,
        u = s._(/*BTDS*/ "Recent"),
        d = s._(/*BTDS*/ "Viewed"),
        m =
          o("WAWebStatusGatingUtils").isUpdatesTabInNavigationBarEnabled() ||
          o("WAWebStatusGatingUtils").isStatusHideStringEnabled()
            ? s._(/*BTDS*/ "Hidden")
            : s._(/*BTDS*/ "Muted"),
        p = s._(/*BTDS*/ "Hide"),
        g = s._(/*BTDS*/ "Show");
      switch (n.type) {
        case _.SEC_UNREAD:
          return c.jsx(r("WAWebSectionHeader.react"), {
            header: u,
            uppercase: !1,
            isTransparent: !0,
          });
        case _.SEC_READ:
          return c.jsx(r("WAWebSectionHeader.react"), {
            header: d,
            isTransparent: !0,
            uppercase: !1,
            testid: void 0,
          });
        case _.SEC_MUTED:
          return c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: o("WAWebUISpacing").uiPadding.end10,
            children: [
              c.jsx(o("WAWebFlex.react").FlexItem, {
                grow: 1,
                children: c.jsx(r("WAWebSectionHeader.react"), {
                  header: m,
                  isTransparent: !0,
                  uppercase: !1,
                  testid: void 0,
                }),
              }),
              c.jsx(o("WAWebFlex.react").FlexItem, {
                grow: 0,
                align: "center",
                children: c.jsx(o("WAWebClickable.react").Clickable, {
                  onClick: i,
                  children: c.jsx(o("WAWebText.react").WAWebTextSmall, {
                    as: "span",
                    color: "teal",
                    children: n.expanded ? p : g,
                  }),
                }),
              }),
            ],
          });
        case _.ROW_STATUS: {
          var h = f(n.status);
          return c.jsx(r("WAWebStatusCell.react"), {
            isModalView: !1,
            status: n.status,
            onClick: function () {
              a
                ? a(n.status, void 0, n.index, h)
                : o("WAWebModalManager").ModalManager.openMedia(
                    c.jsx(r("WAWebStatusViewer.react"), {
                      initialStatus: n.status,
                      initialStatusMsg: void 0,
                      closeStatusViewer: function () {
                        o("WAWebModalManager").ModalManager.closeMedia();
                      },
                      sessionId: l == null ? void 0 : l.current,
                      rowIdx: n.index,
                      rowSection: h,
                      continuousPlay: !0,
                    }),
                    {
                      transition: "status-modal",
                      focusType: {
                        type: o("WAWebKeyboardTabUtils").FocusType.CUSTOM,
                      },
                    },
                  );
            },
            contact: n.status.contact,
          });
        }
        case _.SEC_E2E_MESSAGE:
          return c.jsx(
            o("WAWebPrivacyNarrativeE2EMessage.react").E2eMessageStatusList,
            {},
          );
        default:
          throw (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "UnknownDataError: invoked from WAWebStatusList",
                ])),
            ),
            new (o("WAWebFlatList.react").UnknownDataError)(n)
          );
      }
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
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
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
