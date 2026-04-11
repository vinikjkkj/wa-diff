__d(
  "WAWebChatListFiltersLabelsPill.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebCTWAConstants",
    "WAWebChatCollection",
    "WAWebChatListFilterLabelsDropdownMenu.react",
    "WAWebChevronCustomIcons",
    "WAWebDOIntroPopup.react",
    "WAWebFilterLogging",
    "WAWebLabelCollection",
    "WAWebLabels.react",
    "WAWebListFilterButton.react",
    "WAWebListsGatingUtils",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebNux",
    "WAWebScreenWidthThresholds",
    "WAWebTabOrder",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebUserPrefsGeneral",
    "WAWebWamEnumSurfaceType",
    "WDSChip.react",
    "react",
    "useMergeRefs",
    "useWAWebListener",
    "useWAWebNux",
    "useWAWebWindowSize",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = [
        "ref",
        "filterSession",
        "isSelected",
        "onClick",
        "selectedLabelId",
        "unreadChatsCountMap",
      ],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useMemo,
      p = d.useRef,
      _ = d.useState,
      f = function () {
        return (
          o(
            "WAWebLabelCollection",
          ).LabelCollection.getChatLabelsWithUnarchivedAssociations().length ===
          0
        );
      };
    function g(t) {
      var n = t.ref,
        a = t.filterSession,
        i = t.isSelected,
        l = t.onClick,
        u = t.selectedLabelId,
        d = t.unreadChatsCountMap,
        g = babelHelpers.objectWithoutPropertiesLoose(t, e),
        h = _(!1),
        y = h[0],
        C = h[1],
        b = _(f),
        v = b[0],
        S = b[1],
        R = r("useWAWebNux")(o("WAWebNux").NUX.DO_AUTOMATIC_LABEL),
        L = R[0],
        E = R[1],
        k = p(null),
        I = r("useMergeRefs")(k, n),
        T = m(
          function () {
            return u == null
              ? null
              : o("WAWebLabelCollection").LabelCollection.get(u);
          },
          [u],
        ),
        D = r("useWAWebWindowSize")(),
        x = D.width < o("WAWebScreenWidthThresholds").NARROW_SCREEN_THRESHOLD,
        $ = function (t) {
          var e;
          l(t);
          var n =
            (e = o("WAWebLabelCollection").LabelCollection.get(t)) == null
              ? void 0
              : e.predefinedId;
          (n === o("WAWebCTWAConstants").NEW_ORDER_PREDEFINED_ID ||
            n === o("WAWebCTWAConstants").LEAD_PREDEFINED_ID) &&
            L &&
            o("WAWebUserPrefsGeneral").getDetectedOutcomeOnboardingStatus() &&
            o("WAWebModalManager").ModalManager.open(
              c.jsx(r("WAWebDOIntroPopup.react"), {
                onContinue: function () {
                  (E(), o("WAWebModalManager").ModalManager.close());
                },
                surfaceType: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST,
              }),
            );
        };
      if (
        (o("useWAWebListener").useListener(
          o("WAWebLabelCollection").LabelCollection,
          "change:count remove",
          function () {
            S(f);
          },
        ),
        o("useWAWebListener").useListener(
          o("WAWebChatCollection").ChatCollection,
          "change:archive change:isLocked",
          function () {
            S(f);
          },
        ),
        v)
      )
        return null;
      var P = y
          ? c.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "InboxFilterContextMenu",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: function () {
                return C(!1);
              },
              requestRecentFocusOnUnmount: !1,
              children: c.jsx(r("WAWebUimUieMenu.react"), {
                contextMenu: {
                  menu: c.jsx(
                    r("WAWebChatListFilterLabelsDropdownMenu.react"),
                    {
                      hideHeader: !0,
                      updateSearchFilter: $,
                      unreadChatsCountMap: d,
                    },
                  ),
                  anchor: k.current,
                },
              }),
            })
          : null,
        N = function () {
          C(function (e) {
            return (
              !e &&
                a != null &&
                o("WAWebFilterLogging").logLabelDropdownShownEvent(
                  a.newSessionId(),
                ),
              !e
            );
          });
        },
        M = o("WAWebListsGatingUtils").isListsEnabled(),
        w =
          T == null
            ? null
            : c.jsx(o("WAWebLabels.react").Labels, {
                theme: "label-pill",
                labels: [T.id],
                showName: !0,
                isListsFeatureEnabled: M,
              }),
        A = "";
      if (
        (T == null &&
          !x &&
          (A = M ? s._(/*BTDS*/ "Lists") : s._(/*BTDS*/ "Labels")),
        o("WAWebABProps").getABPropConfigValue("wds_web_chip"))
      ) {
        var F;
        return c.jsxs("div", {
          "data-testid": void 0,
          children: [
            c.jsx(r("WDSChip.react"), {
              tabOrder:
                Number(g.tabIndex) >= 0
                  ? o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER
                  : void 0,
              ref: I,
              id: g.id,
              label: A,
              isSelected: i,
              onPress: N,
              onFocus: (F = g.onFocus) != null ? F : r("WAWebNoop"),
              role: g.role,
              "aria-selected": g["aria-selected"],
              "aria-controls": g["aria-controls"],
              showEndDropdownIcon: !0,
              smbLabelsContent: w,
            }),
            P,
          ],
        });
      }
      return c.jsxs("span", {
        children: [
          c.jsx(
            r("WAWebListFilterButton.react"),
            babelHelpers.extends(
              {
                ref: I,
                tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
                label: A,
                selected: i,
                onClick: N,
              },
              w && { startIcon: w },
              {
                endIcon: c.jsx(
                  o("WAWebChevronCustomIcons").ChevronDownCustomIcon,
                  { height: 22 },
                ),
                restrictSize: !0,
                id: g.id,
                role: g.role,
                "aria-selected": g["aria-selected"],
                "aria-controls": g["aria-controls"],
                tabIndex: g.tabIndex,
                onFocus: g.onFocus,
              },
            ),
          ),
          P,
        ],
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
