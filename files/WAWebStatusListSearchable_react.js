__d(
  "WAWebStatusListSearchable.react",
  [
    "fbt",
    "WALogger",
    "WAWebChatCollection",
    "WAWebClickable.react",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebFlatListController",
    "WAWebFlex.react",
    "WAWebGroupMetadataCollection",
    "WAWebKeyboardTabUtils",
    "WAWebModalManager",
    "WAWebSectionHeader.react",
    "WAWebStatusCell.react",
    "WAWebStatusCollection",
    "WAWebStatusGetters",
    "WAWebStatusSearchUtils",
    "WAWebStatusViewer.react",
    "WAWebWamEnumStatusRowSection",
    "WDSIconIcExpandLess.react",
    "WDSIconIcExpandMore.react",
    "WDSText.react",
    "react",
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
        sectionHeader: {
          paddingInlineStart: "x1phvje8",
          paddingTop: "x1h678fw",
          paddingBottom: "x12xbjc7",
          height: "xt7dq6l",
          $$css: !0,
        },
        flexRow: { paddingBottom: "xv6tirj", $$css: !0 },
        collapseButton: {
          paddingTop: "x1xrf6ya",
          paddingInlineEnd: "xcldk2z",
          width: "x100vrsf",
          height: "x1vqgdyp",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
      },
      f = {
        SEC_UNREAD: "SEC_UNREAD",
        SEC_READ: "SEC_READ",
        SEC_MUTED: "SEC_MUTED",
        SEC_E2E_MESSAGE: "SEC_E2E_MESSAGE",
        ROW_STATUS: "ROW_STATUS",
      };
    function g(e) {
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
    function h(e) {
      var t = e.expanded,
        n = e.onClick;
      return c.jsx(o("WAWebClickable.react").Clickable, {
        onClick: n,
        children: c.jsx(r("WDSText.react"), {
          type: "Body1",
          colorName: "contentDeemphasized",
          children: t
            ? c.jsx(r("WDSIconIcExpandLess.react"), {})
            : c.jsx(r("WDSIconIcExpandMore.react"), {}),
        }),
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(t) {
      var n = t.data,
        a = t.onToggleMute,
        i = t.onToggleRead,
        l = t.sessionIdRef,
        u = s._(/*BTDS*/ "Recent updates"),
        d = s._(/*BTDS*/ "Viewed updates"),
        m = s._(/*BTDS*/ "Hidden updates");
      switch (n.type) {
        case f.SEC_UNREAD:
          return c.jsx(r("WAWebSectionHeader.react"), {
            header: u,
            uppercase: !1,
            isTransparent: !0,
            xstyle: _.sectionHeader,
          });
        case f.SEC_READ:
          return c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: _.flexRow,
            children: [
              c.jsx(o("WAWebFlex.react").FlexItem, {
                grow: 1,
                children: c.jsx(r("WAWebSectionHeader.react"), {
                  header: d,
                  isTransparent: !0,
                  uppercase: !1,
                  testid: void 0,
                  xstyle: _.sectionHeader,
                }),
              }),
              c.jsx(o("WAWebFlex.react").FlexItem, {
                grow: 0,
                align: "center",
                xstyle: _.collapseButton,
                children: c.jsx(h, { expanded: !!n.expanded, onClick: i }),
              }),
            ],
          });
        case f.SEC_MUTED:
          return c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: _.flexRow,
            children: [
              c.jsx(o("WAWebFlex.react").FlexItem, {
                grow: 1,
                children: c.jsx(r("WAWebSectionHeader.react"), {
                  header: m,
                  isTransparent: !0,
                  uppercase: !1,
                  testid: void 0,
                  xstyle: _.sectionHeader,
                }),
              }),
              c.jsx(o("WAWebFlex.react").FlexItem, {
                grow: 0,
                align: "center",
                xstyle: _.collapseButton,
                children: c.jsx(h, { expanded: !!n.expanded, onClick: a }),
              }),
            ],
          });
        case f.ROW_STATUS: {
          var p = g(n.status);
          return c.jsx(r("WAWebStatusCell.react"), {
            isModalView: !1,
            status: n.status,
            onClick: function () {
              o("WAWebModalManager").ModalManager.openMedia(
                c.jsx(r("WAWebStatusViewer.react"), {
                  initialStatus: n.status,
                  initialStatusMsg: void 0,
                  closeStatusViewer: function () {
                    o("WAWebModalManager").ModalManager.closeMedia();
                  },
                  sessionId: l == null ? void 0 : l.current,
                  rowIdx: n.index,
                  rowSection: p,
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
        default:
          throw (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "UnknownDataError: invoked from WAWebStatusListSearchable",
                ])),
            ),
            new (o("WAWebFlatList.react").UnknownDataError)(n)
          );
      }
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t,
        n = e.searchQuery,
        a = m(function () {
          return new (r("WAWebFlatListController"))();
        }, []),
        i = o("WAWebStatusSearchUtils").getStatusData(),
        l = i.muted,
        s = i.read,
        u = i.unread,
        d = p(function () {
          return u.filter(function (e) {
            return !o("WAWebContactGetters").getCalculatedStatusMute(e.contact);
          });
        }),
        _ = d[0],
        g = d[1],
        h = p(function () {
          return s.filter(function (e) {
            return !o("WAWebContactGetters").getCalculatedStatusMute(e.contact);
          });
        }),
        C = h[0],
        b = h[1],
        v = p(!0),
        S = v[0],
        R = v[1],
        L = p(l),
        E = L[0],
        k = L[1],
        I = p(!1),
        T = I[0],
        D = I[1],
        x = function () {
          var e = o("WAWebStatusSearchUtils").getStatusData(),
            t = e.muted,
            n = e.read,
            r = e.unread;
          (g(
            r.filter(function (e) {
              return !o("WAWebContactGetters").getCalculatedStatusMute(
                e.contact,
              );
            }),
          ),
            b(
              n.filter(function (e) {
                return !o("WAWebContactGetters").getCalculatedStatusMute(
                  e.contact,
                );
              }),
            ),
            k(t));
        };
      (t = o("useWAWebListener")).useListener(
        o("WAWebStatusCollection").StatusCollection,
        "add remove bulk_add sort change:msgsChanged change:unreadCount",
        x,
      );
      var $ = function () {
        var e = o("WAWebStatusSearchUtils").getStatusData(),
          t = e.muted,
          n = e.read,
          r = e.unread;
        (g(
          r.filter(function (e) {
            return !o("WAWebContactGetters").getCalculatedStatusMute(e.contact);
          }),
        ),
          b(
            n.filter(function (e) {
              return !o("WAWebContactGetters").getCalculatedStatusMute(
                e.contact,
              );
            }),
          ),
          k(t));
      };
      (t.useListener(
        o("WAWebContactCollection").ContactCollection,
        "change:statusMute change:parentStatusMute",
        $,
      ),
        t.useListener(
          o("WAWebChatCollection").ChatCollection,
          "change:archive change:isLocked",
          x,
        ),
        t.useListener(
          r("WAWebGroupMetadataCollection"),
          "change:suspended",
          x,
        ));
      var P = function () {
          R(!S);
        },
        N = function () {
          D(!T);
        },
        M = 48,
        w = 72,
        A = m(
          function () {
            var e = [],
              t = n != null && n.trim() !== "",
              r = o("WAWebStatusSearchUtils").filterStatusesBySearchQuery(_, n),
              a = o("WAWebStatusSearchUtils").filterStatusesBySearchQuery(C, n),
              i = o("WAWebStatusSearchUtils").filterStatusesBySearchQuery(E, n);
            return (
              r.length > 0 &&
                (t ||
                  e.push({
                    type: f.SEC_UNREAD,
                    itemKey: "section-unread",
                    height: M,
                  }),
                e.push.apply(
                  e,
                  r.map(function (e, t) {
                    return {
                      type: f.ROW_STATUS,
                      itemKey: e.id.toString(),
                      height: w,
                      status: e,
                      index: t,
                    };
                  }),
                )),
              a.length > 0 &&
                (t ||
                  e.push({
                    type: f.SEC_READ,
                    itemKey: "section-read",
                    height: M,
                    expanded: S,
                  }),
                (t || S) &&
                  e.push.apply(
                    e,
                    a.map(function (e, t) {
                      return {
                        type: f.ROW_STATUS,
                        itemKey: e.id.toString(),
                        height: w,
                        status: e,
                        index: t,
                      };
                    }),
                  )),
              i.length > 0 &&
                (t ||
                  e.push({
                    type: f.SEC_MUTED,
                    itemKey: "section-muted",
                    height: M,
                    expanded: T,
                  }),
                (t || T) &&
                  e.push.apply(
                    e,
                    i.map(function (e, t) {
                      return {
                        type: f.ROW_STATUS,
                        itemKey: e.id.toString(),
                        height: w,
                        status: e,
                        index: t,
                      };
                    }),
                  )),
              e
            );
          },
          [_, C, E, n, M, w, S, T],
        ),
        F = c.jsx(r("WAWebFlatListContainer.react"), {
          className:
            "x1iyjqo2 xs83m0k xdl72j9 x18d9i69 x1odjw0f x122zoth x16jf5lm",
          flatListControllers: [a],
          children: c.jsx(o("WAWebFlatList.react").FlatList, {
            className_DONOTUSE: "statusList",
            flatListController: a,
            direction: "vertical",
            data: A,
            handleKeyboardNavigation: !0,
            tabIndex: -1,
            role: "list",
            focusableItemSelector: "[data-focusid='status-row-item']",
            renderItem: function (n) {
              return c.jsx(y, {
                data: n,
                onToggleRead: P,
                onToggleMute: N,
                sessionIdRef: e.sessionIdRef,
              });
            },
          }),
        });
      return F;
    }
    ((C.displayName = C.name + " [from " + i.id + "]"),
      (l.WAWebStatusListSearchable = C));
  },
  226,
);
