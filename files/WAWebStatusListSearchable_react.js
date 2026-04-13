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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(5),
        n = e.expanded,
        a = e.onClick,
        i;
      t[0] !== n
        ? ((i = c.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDeemphasized",
            children: n
              ? c.jsx(r("WDSIconIcExpandLess.react"), {})
              : c.jsx(r("WDSIconIcExpandMore.react"), {}),
          })),
          (t[0] = n),
          (t[1] = i))
        : (i = t[1]);
      var l;
      return (
        t[2] !== a || t[3] !== i
          ? ((l = c.jsx(o("WAWebClickable.react").Clickable, {
              onClick: a,
              children: i,
            })),
            (t[2] = a),
            (t[3] = i),
            (t[4] = l))
          : (l = t[4]),
        l
      );
    }
    function y(t) {
      var n = o("react-compiler-runtime").c(22),
        a = t.data,
        i = t.onToggleMute,
        l = t.onToggleRead,
        u = t.sessionIdRef,
        d;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = s._(/*BTDS*/ "Recent updates")), (n[0] = d))
        : (d = n[0]);
      var m = d,
        p;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = s._(/*BTDS*/ "Viewed updates")), (n[1] = p))
        : (p = n[1]);
      var y = p,
        b;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = s._(/*BTDS*/ "Hidden updates")), (n[2] = b))
        : (b = n[2]);
      var v = b;
      switch (a.type) {
        case f.SEC_UNREAD: {
          var S;
          return (
            n[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((S = c.jsx(r("WAWebSectionHeader.react"), {
                  header: m,
                  uppercase: !1,
                  isTransparent: !0,
                  xstyle: _.sectionHeader,
                })),
                (n[3] = S))
              : (S = n[3]),
            S
          );
        }
        case f.SEC_READ: {
          var R;
          n[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((R = c.jsx(o("WAWebFlex.react").FlexItem, {
                grow: 1,
                children: c.jsx(r("WAWebSectionHeader.react"), {
                  header: y,
                  isTransparent: !0,
                  uppercase: !1,
                  testid: void 0,
                  xstyle: _.sectionHeader,
                }),
              })),
              (n[4] = R))
            : (R = n[4]);
          var L = !!a.expanded,
            E;
          return (
            n[5] !== l || n[6] !== L
              ? ((E = c.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  xstyle: _.flexRow,
                  children: [
                    R,
                    c.jsx(o("WAWebFlex.react").FlexItem, {
                      grow: 0,
                      align: "center",
                      xstyle: _.collapseButton,
                      children: c.jsx(h, { expanded: L, onClick: l }),
                    }),
                  ],
                })),
                (n[5] = l),
                (n[6] = L),
                (n[7] = E))
              : (E = n[7]),
            E
          );
        }
        case f.SEC_MUTED: {
          var k;
          n[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((k = c.jsx(o("WAWebFlex.react").FlexItem, {
                grow: 1,
                children: c.jsx(r("WAWebSectionHeader.react"), {
                  header: v,
                  isTransparent: !0,
                  uppercase: !1,
                  testid: void 0,
                  xstyle: _.sectionHeader,
                }),
              })),
              (n[8] = k))
            : (k = n[8]);
          var I = !!a.expanded,
            T;
          return (
            n[9] !== i || n[10] !== I
              ? ((T = c.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  xstyle: _.flexRow,
                  children: [
                    k,
                    c.jsx(o("WAWebFlex.react").FlexItem, {
                      grow: 0,
                      align: "center",
                      xstyle: _.collapseButton,
                      children: c.jsx(h, { expanded: I, onClick: i }),
                    }),
                  ],
                })),
                (n[9] = i),
                (n[10] = I),
                (n[11] = T))
              : (T = n[11]),
            T
          );
        }
        case f.ROW_STATUS: {
          var D;
          n[12] !== a.status
            ? ((D = g(a.status)), (n[12] = a.status), (n[13] = D))
            : (D = n[13]);
          var x = D,
            $;
          n[14] !== a.index || n[15] !== a.status || n[16] !== x || n[17] !== u
            ? (($ = function () {
                o("WAWebModalManager").ModalManager.openMedia(
                  c.jsx(r("WAWebStatusViewer.react"), {
                    initialStatus: a.status,
                    initialStatusMsg: void 0,
                    closeStatusViewer: C,
                    sessionId: u == null ? void 0 : u.current,
                    rowIdx: a.index,
                    rowSection: x,
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
              (n[14] = a.index),
              (n[15] = a.status),
              (n[16] = x),
              (n[17] = u),
              (n[18] = $))
            : ($ = n[18]);
          var P;
          return (
            n[19] !== a.status || n[20] !== $
              ? ((P = c.jsx(r("WAWebStatusCell.react"), {
                  isModalView: !1,
                  status: a.status,
                  onClick: $,
                  contact: a.status.contact,
                })),
                (n[19] = a.status),
                (n[20] = $),
                (n[21] = P))
              : (P = n[21]),
            P
          );
        }
        default:
          throw (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "UnknownDataError: invoked from WAWebStatusListSearchable",
                ])),
            ),
            new (o("WAWebFlatList.react").UnknownDataError)(a)
          );
      }
    }
    function C() {
      o("WAWebModalManager").ModalManager.closeMedia();
    }
    function b(e) {
      var t = o("react-compiler-runtime").c(31),
        n = e.searchQuery,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = new (r("WAWebFlatListController"))()), (t[0] = a))
        : (a = t[0]);
      var i = a,
        l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = o("WAWebStatusSearchUtils").getStatusData()), (t[1] = l))
        : (l = t[1]);
      var s = l,
        u = s.muted,
        d = s.read,
        m = s.unread,
        _;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = function () {
            return m.filter(D);
          }),
          (t[2] = _))
        : (_ = t[2]);
      var g = p(_),
        h = g[0],
        C = g[1],
        b;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = function () {
            return d.filter(T);
          }),
          (t[3] = b))
        : (b = t[3]);
      var x = p(b),
        $ = x[0],
        P = x[1],
        N = p(!0),
        M = N[0],
        w = N[1],
        A = p(u),
        F = A[0],
        O = A[1],
        B = p(!1),
        W = B[0],
        q = B[1],
        U;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = function () {
            var e = o("WAWebStatusSearchUtils").getStatusData(),
              t = e.muted,
              n = e.read,
              r = e.unread;
            (C(r.filter(I)), P(n.filter(k)), O(t));
          }),
          (t[4] = U))
        : (U = t[4]);
      var V = U;
      o("useWAWebListener").useListener(
        o("WAWebStatusCollection").StatusCollection,
        "add remove bulk_add sort change:msgsChanged change:unreadCount",
        V,
      );
      var H;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = function () {
            var e = o("WAWebStatusSearchUtils").getStatusData(),
              t = e.muted,
              n = e.read,
              r = e.unread;
            (C(r.filter(E)), P(n.filter(L)), O(t));
          }),
          (t[5] = H))
        : (H = t[5]);
      var G = H;
      (o("useWAWebListener").useListener(
        o("WAWebContactCollection").ContactCollection,
        "change:statusMute change:parentStatusMute",
        G,
      ),
        o("useWAWebListener").useListener(
          o("WAWebChatCollection").ChatCollection,
          "change:archive change:isLocked",
          V,
        ),
        o("useWAWebListener").useListener(
          r("WAWebGroupMetadataCollection"),
          "change:suspended",
          V,
        ));
      var z;
      t[6] !== M
        ? ((z = function () {
            w(!M);
          }),
          (t[6] = M),
          (t[7] = z))
        : (z = t[7]);
      var j = z,
        K;
      t[8] !== W
        ? ((K = function () {
            q(!W);
          }),
          (t[8] = W),
          (t[9] = K))
        : (K = t[9]);
      var Q = K,
        X = 48,
        Y = 72,
        J;
      if (
        t[10] !== W ||
        t[11] !== M ||
        t[12] !== F ||
        t[13] !== $ ||
        t[14] !== n ||
        t[15] !== h
      ) {
        J = [];
        var Z = n != null && n.trim() !== "",
          ee = o("WAWebStatusSearchUtils").filterStatusesBySearchQuery(h, n),
          te = o("WAWebStatusSearchUtils").filterStatusesBySearchQuery($, n),
          ne = o("WAWebStatusSearchUtils").filterStatusesBySearchQuery(F, n);
        if (ee.length > 0) {
          var re;
          if (!Z) {
            var oe;
            (t[17] === Symbol.for("react.memo_cache_sentinel")
              ? ((oe = {
                  type: f.SEC_UNREAD,
                  itemKey: "section-unread",
                  height: 48,
                }),
                (t[17] = oe))
              : (oe = t[17]),
              J.push(oe));
          }
          (re = J).push.apply(re, ee.map(R));
        }
        if (te.length > 0) {
          if (!Z) {
            var ae;
            (t[18] !== M
              ? ((ae = {
                  type: f.SEC_READ,
                  itemKey: "section-read",
                  height: 48,
                  expanded: M,
                }),
                (t[18] = M),
                (t[19] = ae))
              : (ae = t[19]),
              J.push(ae));
          }
          if (Z || M) {
            var ie;
            (ie = J).push.apply(ie, te.map(S));
          }
        }
        if (ne.length > 0) {
          if (!Z) {
            var le;
            (t[20] !== W
              ? ((le = {
                  type: f.SEC_MUTED,
                  itemKey: "section-muted",
                  height: 48,
                  expanded: W,
                }),
                (t[20] = W),
                (t[21] = le))
              : (le = t[21]),
              J.push(le));
          }
          if (Z || W) {
            var se;
            (se = J).push.apply(se, ne.map(v));
          }
        }
        ((t[10] = W),
          (t[11] = M),
          (t[12] = F),
          (t[13] = $),
          (t[14] = n),
          (t[15] = h),
          (t[16] = J));
      } else J = t[16];
      var ue = J,
        ce,
        de;
      t[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((ce =
            "x1iyjqo2 xs83m0k xdl72j9 x18d9i69 x1odjw0f x122zoth x16jf5lm"),
          (de = [i]),
          (t[22] = ce),
          (t[23] = de))
        : ((ce = t[22]), (de = t[23]));
      var me;
      t[24] !== e.sessionIdRef || t[25] !== Q || t[26] !== j
        ? ((me = function (n) {
            return c.jsx(y, {
              data: n,
              onToggleRead: j,
              onToggleMute: Q,
              sessionIdRef: e.sessionIdRef,
            });
          }),
          (t[24] = e.sessionIdRef),
          (t[25] = Q),
          (t[26] = j),
          (t[27] = me))
        : (me = t[27]);
      var pe;
      t[28] !== ue || t[29] !== me
        ? ((pe = c.jsx(r("WAWebFlatListContainer.react"), {
            className: ce,
            flatListControllers: de,
            children: c.jsx(o("WAWebFlatList.react").FlatList, {
              className_DONOTUSE: "statusList",
              flatListController: i,
              direction: "vertical",
              data: ue,
              handleKeyboardNavigation: !0,
              tabIndex: -1,
              role: "list",
              focusableItemSelector: "[data-focusid='status-row-item']",
              renderItem: me,
            }),
          })),
          (t[28] = ue),
          (t[29] = me),
          (t[30] = pe))
        : (pe = t[30]);
      var _e = pe;
      return _e;
    }
    function v(e, t) {
      return {
        type: f.ROW_STATUS,
        itemKey: e.id.toString(),
        height: 72,
        status: e,
        index: t,
      };
    }
    function S(e, t) {
      return {
        type: f.ROW_STATUS,
        itemKey: e.id.toString(),
        height: 72,
        status: e,
        index: t,
      };
    }
    function R(e, t) {
      return {
        type: f.ROW_STATUS,
        itemKey: e.id.toString(),
        height: 72,
        status: e,
        index: t,
      };
    }
    function L(e) {
      return !o("WAWebContactGetters").getCalculatedStatusMute(e.contact);
    }
    function E(e) {
      return !o("WAWebContactGetters").getCalculatedStatusMute(e.contact);
    }
    function k(e) {
      return !o("WAWebContactGetters").getCalculatedStatusMute(e.contact);
    }
    function I(e) {
      return !o("WAWebContactGetters").getCalculatedStatusMute(e.contact);
    }
    function T(e) {
      return !o("WAWebContactGetters").getCalculatedStatusMute(e.contact);
    }
    function D(e) {
      return !o("WAWebContactGetters").getCalculatedStatusMute(e.contact);
    }
    l.WAWebStatusListSearchable = b;
  },
  226,
);
