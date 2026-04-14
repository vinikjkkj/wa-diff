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
      var t = 12;
      return d.jsx(
        o("WAWebPaymentSendIcon.react").PaymentSendIcon,
        babelHelpers.extends({}, e, { height: t, width: t }),
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(t) {
      var n = t.ref,
        a = t.currentFilter,
        i = t.filters,
        l = t.filterSession,
        u = t.onSelect,
        c = babelHelpers.objectWithoutPropertiesLoose(t, e),
        m = a == null ? void 0 : a.kind,
        y = a == null ? void 0 : a.label,
        b = o("WAWebListsGatingUtils").isListsEnabled(),
        v = f(b ? o("WAWebListUtils").getListsUnreadChatCountMap() : new Map()),
        S = v[0],
        R = v[1],
        L = o("WAWebMobilePlatforms").isSMB()
          ? o("WAWebNux").NUX.SMB_LISTS_INTRO
          : o("WAWebNux").NUX.ADD_TO_LISTS,
        E = r("useWAWebNux")(L),
        k = E[0],
        I = E[1],
        T = _(null),
        D = r("useMergeRefs")(T, n),
        x = f(void 0),
        $ = x[0],
        P = x[1],
        N = function () {
          return R(o("WAWebListUtils").getListsUnreadChatCountMap());
        };
      (o("useWAWebListener").useListener(
        o("WAWebChatCollection").ChatCollection,
        "change:showUnreadInTitle change:archive add remove reset change:unreadCount change:isFavorite",
        N,
      ),
        o("useWAWebListener").useListener(
          b ? o("WAWebLabelCollection").LabelCollection : null,
          "change:count",
          N,
        ));
      var M = p(
          function () {
            return Array.from(S.values()).some(function (e) {
              return e > 0;
            });
          },
          [S],
        ),
        w = i.map(function (e, t) {
          var n = e.getLabel(),
            a = function () {
              u(e.filter, e.listId, e.listType, t);
            },
            i = o("WAWebListUtils").getUnreadChatsCountForFilter(e, S),
            l = m === e.filter && (e.listId == null || y === e.listId),
            s = o("WAWebCountRenderingUtils").renderCount(
              i,
              100,
              "unread_message",
            ),
            c = o("WAWebListUtils").shouldShowListIcon(e.listType, e.color),
            p = d.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: c ? h : void 0,
                iconXstyle: c ? g.iconColor : void 0,
                title: n,
                onPress: a,
                hasNumber: M,
                number: s != null ? s : void 0,
                isToggleable: !0,
                toggled: l,
                testid: void 0,
                truncateText: !0,
              },
              e.id,
            );
          return c
            ? d.jsx(
                "span",
                {
                  className: "xjp7ctv",
                  style: { "--list-icon-color": e.color },
                  children: p,
                },
                e.id,
              )
            : p;
        });
      i.length > 0 &&
        w.push(
          d.jsx(r("WDSMenuItem.react"), { type: "separator" }, "separator"),
        );
      var A = function () {
          o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
            d.jsx(r("WAWebCreateOrEditListDrawer.react"), {
              onBack: o("WAWebDrawerManager").closeDrawerLeft,
              onClose: o("WAWebDrawerManager").closeDrawerLeft,
              entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT
                .ADD_LIST_FILTER,
            }),
          );
        },
        F = function () {
          if (o("WAWebListUtils").isListFlowMaxListsCountReached()) {
            o("WAWebListsUtil").showMaxListsModal(b);
            return;
          }
          if (k) {
            var e = o("WAWebMobilePlatforms").isSMB()
              ? o("WAWebSMBListsIntroPopupLoadable").SMBListsIntroPopupLoadable
              : o("WAWebListsIntroPopupLoadable").ListsIntroPopupLoadable;
            o("WAWebModalManager").ModalManager.open(
              d.jsx(e, {
                onContinue: function () {
                  (I(), A());
                },
              }),
            );
          } else A();
        };
      if (
        (w.push(
          d.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcAdd.react"),
              title: s._(/*BTDS*/ "New list"),
              onPress: F,
              testid: void 0,
              truncateText: !0,
            },
            "create-new-list-item",
          ),
        ),
        o("WAWebListsGatingUtils").isListsM2Enabled())
      ) {
        var O = function () {
          o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
            d.jsx(o("WAWebLabelFlowLoadable").LabelFlowLoadable, {
              isInitialStep: !0,
            }),
          );
        };
        w.push(
          d.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: o("WAWebListPeopleIcon.react").ListPeopleIcon,
              title: s._(/*BTDS*/ "Manage lists"),
              onPress: O,
              testid: void 0,
              truncateText: !0,
            },
            "manage-lists-item",
          ),
        );
      }
      var B = r("useWDSMenu")({
          targetRef: T,
          menu: d.jsx(r("WDSMenu.react"), { maxHeight: $, children: w }),
        }),
        W = B.closeMenu,
        q = B.isMenuOpen,
        U = B.menuPortal,
        V = B.openMenu,
        H = function () {
          if (q) W();
          else {
            if (T.current != null) {
              var e = T.current.getBoundingClientRect(),
                t = window.innerHeight - e.bottom - 16;
              P(Math.max(100, t));
            }
            (V(),
              l != null &&
                o("WAWebFilterLogging").logLabelDropdownShownEvent(
                  l.newSessionId(),
                ));
          }
        };
      return d.jsxs(d.Fragment, {
        children: [
          d.jsx(
            C,
            {
              ref: D,
              tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
              opened: q,
              onClick: H,
              id: c.id,
              role: c.role,
              "aria-selected": c["aria-selected"],
              "aria-controls": c["aria-controls"],
              tabIndex: c.tabIndex,
              onFocus: c.onFocus,
            },
            "filters-dropdown",
          ),
          U,
        ],
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t,
        n = e.ref,
        o = e.onClick,
        a = e.opened,
        i = e.tabOrder,
        l = babelHelpers.objectWithoutPropertiesLoose(e, u),
        c = s._(/*BTDS*/ "More lists");
      return d.jsx("div", {
        tabIndex: l.tabIndex,
        "data-tab": i,
        children: d.jsx(r("WDSChip.react"), {
          ref: n,
          id: l.id,
          label: c,
          onPress: function (t) {
            o == null || o(t);
          },
          onFocus: (t = l.onFocus) != null ? t : void 0,
          role: l.role,
          "aria-pressed": a,
          "aria-selected": l["aria-selected"],
          "aria-controls": l["aria-controls"],
          Icon: r("WDSIconIcArrowDropDown.react"),
          iconOnly: !0,
          testid: void 0,
        }),
      });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);
