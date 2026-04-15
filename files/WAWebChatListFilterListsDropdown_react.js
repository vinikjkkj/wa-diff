__d(
  "WAWebChatListFilterListsDropdown.react",
  [
    "fbt",
    "WAWebChatCollection",
    "WAWebCountRenderingUtils",
    "WAWebCreateOrEditListDrawer.react",
    "WAWebDrawerManager",
    "WAWebFilterLogging",
    "WAWebLabelCollection",
    "WAWebLabelFlowLoadable",
    "WAWebListPeopleIcon.react",
    "WAWebListUtils",
    "WAWebListsGatingUtils",
    "WAWebListsIntroPopupLoadable",
    "WAWebListsUtil",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebNux",
    "WAWebPaymentSendIcon.react",
    "WAWebSMBListsIntroPopupLoadable",
    "WAWebTabOrder",
    "WAWebWamEnumUpdateEntryPoint",
    "WDSChip.react",
    "WDSIconIcAdd.react",
    "WDSIconIcArrowDropDown.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
    "useMergeRefs",
    "useWAWebListener",
    "useWAWebNux",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref", "currentFilter", "filters", "filterSession", "onSelect"],
      u = ["ref", "onClick", "opened", "tabOrder"],
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useMemo,
      _ = m.useRef,
      f = m.useState,
      g = { iconColor: { color: "x1tk34jx", $$css: !0 } };
    function h(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = d.jsx(
              o("WAWebPaymentSendIcon.react").PaymentSendIcon,
              babelHelpers.extends({}, e, { height: 12, width: 12 }),
            )),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        n
      );
    }
    function y(t) {
      var n,
        a,
        i = o("react-compiler-runtime").c(54),
        l,
        u,
        c,
        m,
        p,
        y;
      i[0] !== t
        ? ((p = t.ref),
          (l = t.currentFilter),
          (c = t.filters),
          (u = t.filterSession),
          (m = t.onSelect),
          (y = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (i[0] = t),
          (i[1] = l),
          (i[2] = u),
          (i[3] = c),
          (i[4] = m),
          (i[5] = p),
          (i[6] = y))
        : ((l = i[1]),
          (u = i[2]),
          (c = i[3]),
          (m = i[4]),
          (p = i[5]),
          (y = i[6]));
      var R = (n = l) == null ? void 0 : n.kind,
        L = (a = l) == null ? void 0 : a.label,
        E;
      i[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = o("WAWebListsGatingUtils").isListsEnabled()), (i[7] = E))
        : (E = i[7]);
      var k = E,
        I;
      i[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = k
            ? o("WAWebListUtils").getListsUnreadChatCountMap()
            : new Map()),
          (i[8] = I))
        : (I = i[8]);
      var T = f(I),
        D = T[0],
        x = T[1],
        $ = o("WAWebMobilePlatforms").isSMB()
          ? o("WAWebNux").NUX.SMB_LISTS_INTRO
          : o("WAWebNux").NUX.ADD_TO_LISTS,
        P = r("useWAWebNux")($),
        N = P[0],
        M = P[1],
        w = _(null),
        A = r("useMergeRefs")(w, p),
        F = f(void 0),
        O = F[0],
        B = F[1],
        W;
      i[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = function () {
            return x(o("WAWebListUtils").getListsUnreadChatCountMap());
          }),
          (i[9] = W))
        : (W = i[9]);
      var q = W;
      (o("useWAWebListener").useListener(
        o("WAWebChatCollection").ChatCollection,
        "change:showUnreadInTitle change:archive add remove reset change:unreadCount change:isFavorite",
        q,
      ),
        o("useWAWebListener").useListener(
          k ? o("WAWebLabelCollection").LabelCollection : null,
          "change:count",
          q,
        ));
      var U = Array.from(D.values()).some(v),
        V;
      if (
        i[10] !== U ||
        i[11] !== c ||
        i[12] !== m ||
        i[13] !== R ||
        i[14] !== L ||
        i[15] !== N ||
        i[16] !== D ||
        i[17] !== M
      ) {
        var H;
        if (
          (i[19] !== U ||
          i[20] !== m ||
          i[21] !== R ||
          i[22] !== L ||
          i[23] !== D
            ? ((H = function (t, n) {
                var e = t.getLabel(),
                  a = function () {
                    m(t.filter, t.listId, t.listType, n);
                  },
                  i = o("WAWebListUtils").getUnreadChatsCountForFilter(t, D),
                  l = R === t.filter && (t.listId == null || L === t.listId),
                  s = o("WAWebCountRenderingUtils").renderCount(
                    i,
                    100,
                    "unread_message",
                  ),
                  u = o("WAWebListUtils").shouldShowListIcon(
                    t.listType,
                    t.color,
                  ),
                  c = d.jsx(
                    r("WDSMenuItem.react"),
                    {
                      Icon: u ? h : void 0,
                      iconXstyle: u ? g.iconColor : void 0,
                      title: e,
                      onPress: a,
                      hasNumber: U,
                      number: s != null ? s : void 0,
                      isToggleable: !0,
                      toggled: l,
                      testid: void 0,
                      truncateText: !0,
                    },
                    t.id,
                  );
                return u
                  ? d.jsx(
                      "span",
                      {
                        className: "xjp7ctv",
                        style: { "--list-icon-color": t.color },
                        children: c,
                      },
                      t.id,
                    )
                  : c;
              }),
              (i[19] = U),
              (i[20] = m),
              (i[21] = R),
              (i[22] = L),
              (i[23] = D),
              (i[24] = H))
            : (H = i[24]),
          (V = c.map(H)),
          c.length > 0)
        ) {
          var G;
          (i[25] === Symbol.for("react.memo_cache_sentinel")
            ? ((G = d.jsx(
                r("WDSMenuItem.react"),
                { type: "separator" },
                "separator",
              )),
              (i[25] = G))
            : (G = i[25]),
            V.push(G));
        }
        var z = b,
          j;
        i[26] !== N || i[27] !== M
          ? ((j = function () {
              if (o("WAWebListUtils").isListFlowMaxListsCountReached()) {
                o("WAWebListsUtil").showMaxListsModal(k);
                return;
              }
              if (N) {
                var e = o("WAWebMobilePlatforms").isSMB()
                  ? o("WAWebSMBListsIntroPopupLoadable")
                      .SMBListsIntroPopupLoadable
                  : o("WAWebListsIntroPopupLoadable").ListsIntroPopupLoadable;
                o("WAWebModalManager").ModalManager.open(
                  d.jsx(e, {
                    onContinue: function () {
                      (M(), z());
                    },
                  }),
                );
              } else z();
            }),
            (i[26] = N),
            (i[27] = M),
            (i[28] = j))
          : (j = i[28]);
        var K = j,
          Q;
        i[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((Q = s._(/*BTDS*/ "New list")), (i[29] = Q))
          : (Q = i[29]);
        var X;
        if (
          (i[30] !== K
            ? ((X = d.jsx(
                r("WDSMenuItem.react"),
                {
                  Icon: r("WDSIconIcAdd.react"),
                  title: Q,
                  onPress: K,
                  testid: void 0,
                  truncateText: !0,
                },
                "create-new-list-item",
              )),
              (i[30] = K),
              (i[31] = X))
            : (X = i[31]),
          V.push(X),
          o("WAWebListsGatingUtils").isListsM2Enabled())
        ) {
          var Y = C,
            J;
          (i[32] === Symbol.for("react.memo_cache_sentinel")
            ? ((J = d.jsx(
                r("WDSMenuItem.react"),
                {
                  Icon: o("WAWebListPeopleIcon.react").ListPeopleIcon,
                  title: s._(/*BTDS*/ "Manage lists"),
                  onPress: Y,
                  testid: void 0,
                  truncateText: !0,
                },
                "manage-lists-item",
              )),
              (i[32] = J))
            : (J = i[32]),
            V.push(J));
        }
        ((i[10] = U),
          (i[11] = c),
          (i[12] = m),
          (i[13] = R),
          (i[14] = L),
          (i[15] = N),
          (i[16] = D),
          (i[17] = M),
          (i[18] = V));
      } else V = i[18];
      var Z;
      i[33] !== O || i[34] !== V
        ? ((Z = {
            targetRef: w,
            menu: d.jsx(r("WDSMenu.react"), { maxHeight: O, children: V }),
          }),
          (i[33] = O),
          (i[34] = V),
          (i[35] = Z))
        : (Z = i[35]);
      var ee = r("useWDSMenu")(Z),
        te = ee.closeMenu,
        ne = ee.isMenuOpen,
        re = ee.menuPortal,
        oe = ee.openMenu,
        ae;
      i[36] !== te || i[37] !== u || i[38] !== ne || i[39] !== oe
        ? ((ae = function () {
            if (ne) te();
            else {
              if (w.current != null) {
                var e = w.current.getBoundingClientRect(),
                  t = window.innerHeight - e.bottom - 16;
                B(Math.max(100, t));
              }
              (oe(),
                u != null &&
                  o("WAWebFilterLogging").logLabelDropdownShownEvent(
                    u.newSessionId(),
                  ));
            }
          }),
          (i[36] = te),
          (i[37] = u),
          (i[38] = ne),
          (i[39] = oe),
          (i[40] = ae))
        : (ae = i[40]);
      var ie = ae,
        le = y["aria-selected"],
        se = y["aria-controls"],
        ue;
      i[41] !== ie ||
      i[42] !== ne ||
      i[43] !== A ||
      i[44] !== y.id ||
      i[45] !== y.onFocus ||
      i[46] !== y.role ||
      i[47] !== y.tabIndex ||
      i[48] !== le ||
      i[49] !== se
        ? ((ue = d.jsx(
            S,
            {
              ref: A,
              tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
              opened: ne,
              onClick: ie,
              id: y.id,
              role: y.role,
              "aria-selected": le,
              "aria-controls": se,
              tabIndex: y.tabIndex,
              onFocus: y.onFocus,
            },
            "filters-dropdown",
          )),
          (i[41] = ie),
          (i[42] = ne),
          (i[43] = A),
          (i[44] = y.id),
          (i[45] = y.onFocus),
          (i[46] = y.role),
          (i[47] = y.tabIndex),
          (i[48] = le),
          (i[49] = se),
          (i[50] = ue))
        : (ue = i[50]);
      var ce;
      return (
        i[51] !== re || i[52] !== ue
          ? ((ce = d.jsxs(d.Fragment, { children: [ue, re] })),
            (i[51] = re),
            (i[52] = ue),
            (i[53] = ce))
          : (ce = i[53]),
        ce
      );
    }
    function C() {
      o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
        d.jsx(o("WAWebLabelFlowLoadable").LabelFlowLoadable, {
          isInitialStep: !0,
        }),
      );
    }
    function b() {
      o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
        d.jsx(r("WAWebCreateOrEditListDrawer.react"), {
          onBack: o("WAWebDrawerManager").closeDrawerLeft,
          onClose: o("WAWebDrawerManager").closeDrawerLeft,
          entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
            .ADD_LIST_FILTER,
        }),
      );
    }
    function v(e) {
      return e > 0;
    }
    function S(e) {
      var t,
        n = o("react-compiler-runtime").c(22),
        a,
        i,
        l,
        c,
        m;
      n[0] !== e
        ? ((l = e.ref),
          (a = e.onClick),
          (i = e.opened),
          (m = e.tabOrder),
          (c = babelHelpers.objectWithoutPropertiesLoose(e, u)),
          (n[0] = e),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = c),
          (n[5] = m))
        : ((a = n[1]), (i = n[2]), (l = n[3]), (c = n[4]), (m = n[5]));
      var p;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = s._(/*BTDS*/ "More lists")), (n[6] = p))
        : (p = n[6]);
      var _ = p,
        f;
      n[7] !== a
        ? ((f = function (t) {
            a == null || a(t);
          }),
          (n[7] = a),
          (n[8] = f))
        : (f = n[8]);
      var g = (t = c.onFocus) != null ? t : void 0,
        h = c["aria-selected"],
        y = c["aria-controls"],
        C;
      n[9] !== i ||
      n[10] !== l ||
      n[11] !== c.id ||
      n[12] !== c.role ||
      n[13] !== f ||
      n[14] !== g ||
      n[15] !== h ||
      n[16] !== y
        ? ((C = d.jsx(r("WDSChip.react"), {
            ref: l,
            id: c.id,
            label: _,
            onPress: f,
            onFocus: g,
            role: c.role,
            "aria-pressed": i,
            "aria-selected": h,
            "aria-controls": y,
            Icon: r("WDSIconIcArrowDropDown.react"),
            iconOnly: !0,
            testid: void 0,
          })),
          (n[9] = i),
          (n[10] = l),
          (n[11] = c.id),
          (n[12] = c.role),
          (n[13] = f),
          (n[14] = g),
          (n[15] = h),
          (n[16] = y),
          (n[17] = C))
        : (C = n[17]);
      var b;
      return (
        n[18] !== c.tabIndex || n[19] !== C || n[20] !== m
          ? ((b = d.jsx("div", {
              tabIndex: c.tabIndex,
              "data-tab": m,
              children: C,
            })),
            (n[18] = c.tabIndex),
            (n[19] = C),
            (n[20] = m),
            (n[21] = b))
          : (b = n[21]),
        b
      );
    }
    l.default = y;
  },
  226,
);
