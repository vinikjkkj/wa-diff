__d(
  "MWChatStateActions",
  [
    "MWChatStateV2.react",
    "MWChatStateV2IsClosed",
    "MWChatStateV2IsMinimized",
    "MWChatStateV2Types",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return [
        {
          state: function (n) {
            var t = n.tabs.get(e);
            return t != null && n.focusedTabId !== e
              ? babelHelpers.extends({}, n, { focusedTabId: e })
              : n;
          },
          type: o("MWChatStateV2Types").MWChatStateActionsType.UpdateState,
        },
      ];
    }
    function s(e) {
      return [
        {
          state: function (n) {
            var t = o("MWChatStateV2.react").getTabIdFromThreadKey(n, e);
            if (t == null) return n;
            var r = n.tabs.get(t);
            return r != null && n.focusedTabId !== t
              ? babelHelpers.extends({}, n, { focusedTabId: t })
              : n;
          },
          type: o("MWChatStateV2Types").MWChatStateActionsType.UpdateState,
        },
      ];
    }
    function u() {
      return [
        {
          state: function (t) {
            var e = t.focusedTabId;
            return e != null
              ? babelHelpers.extends({}, t, { focusedTabId: void 0 })
              : t;
          },
          type: o("MWChatStateV2Types").MWChatStateActionsType.UpdateState,
        },
      ];
    }
    function c(e, t) {
      return [
        {
          tabConfig: { shouldFocus: !1 },
          tabId: t,
          type: o("MWChatStateV2Types").MWChatStateActionsType.UpdateTab,
          updater: function (n) {
            return e <= n.closeWatermark
              ? n
              : {
                  clientForcedMinimizeWatermark:
                    n.clientForcedMinimizeWatermark,
                  closeWatermark: e,
                  minimizeWatermark: n.minimizeWatermark,
                  openFlyoutWatermark: n.openFlyoutWatermark,
                  openWatermark: n.openWatermark,
                  tabId: n.tabId,
                  tabRootEntryPointRef: n.tabRootEntryPointRef,
                  tabType: n.tabType,
                };
          },
        },
      ];
    }
    function d(e, t) {
      return [
        {
          tabConfig: { shouldFocus: !1 },
          threadKey: t,
          type: o("MWChatStateV2Types").MWChatStateActionsType
            .UpdateTabByThreadKey,
          updater: function (n) {
            return e <= n.closeWatermark
              ? n
              : {
                  clientForcedMinimizeWatermark:
                    n.clientForcedMinimizeWatermark,
                  closeWatermark: e,
                  minimizeWatermark: n.minimizeWatermark,
                  openFlyoutWatermark: n.openFlyoutWatermark,
                  openWatermark: n.openWatermark,
                  tabId: n.tabId,
                  tabRootEntryPointRef: n.tabRootEntryPointRef,
                  tabType: n.tabType,
                };
          },
        },
      ];
    }
    function m(e, t, n, r) {
      var a = function (o) {
        return e <= o.openWatermark
          ? o
          : {
              clientForcedMinimizeWatermark: o.clientForcedMinimizeWatermark,
              closeWatermark: o.closeWatermark,
              minimizeWatermark: o.minimizeWatermark,
              openFlyoutWatermark: o.openFlyoutWatermark,
              openWatermark: e,
              tabId: o.tabId,
              tabRootEntryPointRef: r,
              tabType: n,
            };
      };
      return [
        {
          inserter: a,
          tabConfig: t,
          tabType: n,
          type: o("MWChatStateV2Types").MWChatStateActionsType.UpsertTab,
          updater: a,
        },
      ];
    }
    function p(e, t) {
      return [
        {
          tabConfig: { shouldFocus: !0 },
          tabId: t,
          type: o("MWChatStateV2Types").MWChatStateActionsType.UpdateTab,
          updater: function (n) {
            return e <= n.openWatermark
              ? n
              : {
                  clientForcedMinimizeWatermark:
                    n.clientForcedMinimizeWatermark,
                  closeWatermark: n.closeWatermark,
                  minimizeWatermark: n.minimizeWatermark,
                  openFlyoutWatermark: n.openFlyoutWatermark,
                  openWatermark: e,
                  tabId: n.tabId,
                  tabRootEntryPointRef: n.tabRootEntryPointRef,
                  tabType: n.tabType,
                };
          },
        },
      ];
    }
    function _(e, t) {
      return [
        {
          tabConfig: { shouldFocus: !1 },
          tabId: t,
          type: o("MWChatStateV2Types").MWChatStateActionsType.UpdateTab,
          updater: function (n) {
            return e <= n.minimizeWatermark ||
              o("MWChatStateV2IsClosed").isClosed(n)
              ? n
              : {
                  clientForcedMinimizeWatermark:
                    n.clientForcedMinimizeWatermark,
                  closeWatermark: n.closeWatermark,
                  minimizeWatermark: e,
                  openFlyoutWatermark: n.openFlyoutWatermark,
                  openWatermark: n.openWatermark,
                  tabId: n.tabId,
                  tabRootEntryPointRef: n.tabRootEntryPointRef,
                  tabType: n.tabType,
                };
          },
        },
      ];
    }
    function f(e, t) {
      return [
        {
          tabConfig: { shouldFocus: !1 },
          threadKey: t,
          type: o("MWChatStateV2Types").MWChatStateActionsType
            .UpdateTabByThreadKey,
          updater: function (n) {
            return e <= n.minimizeWatermark ||
              o("MWChatStateV2IsClosed").isClosed(n)
              ? n
              : {
                  clientForcedMinimizeWatermark:
                    n.clientForcedMinimizeWatermark,
                  closeWatermark: n.closeWatermark,
                  minimizeWatermark: e,
                  openFlyoutWatermark: n.openFlyoutWatermark,
                  openWatermark: n.openWatermark,
                  tabId: n.tabId,
                  tabRootEntryPointRef: n.tabRootEntryPointRef,
                  tabType: n.tabType,
                };
          },
        },
      ];
    }
    function g(e, t) {
      return [
        {
          tabConfig: { shouldFocus: !1 },
          tabId: t,
          type: o("MWChatStateV2Types").MWChatStateActionsType.UpdateTab,
          updater: function (n) {
            return e <= n.clientForcedMinimizeWatermark
              ? n
              : {
                  clientForcedMinimizeWatermark: e,
                  closeWatermark: n.closeWatermark,
                  minimizeWatermark: n.minimizeWatermark,
                  openFlyoutWatermark: n.openFlyoutWatermark,
                  openWatermark: n.openWatermark,
                  tabId: n.tabId,
                  tabRootEntryPointRef: n.tabRootEntryPointRef,
                  tabType: n.tabType,
                };
          },
        },
      ];
    }
    function h(e, t) {
      return [
        {
          tabConfig: { shouldFocus: !1 },
          threadKey: t,
          type: o("MWChatStateV2Types").MWChatStateActionsType
            .UpdateTabByThreadKey,
          updater: function (n) {
            return e <= n.minimizeWatermark
              ? n
              : {
                  clientForcedMinimizeWatermark:
                    n.clientForcedMinimizeWatermark,
                  closeWatermark: n.closeWatermark,
                  minimizeWatermark: e,
                  openFlyoutWatermark: n.openFlyoutWatermark,
                  openWatermark: n.openWatermark,
                  tabId: n.tabId,
                  tabRootEntryPointRef: n.tabRootEntryPointRef,
                  tabType: n.tabType,
                };
          },
        },
      ];
    }
    function y(e, t) {
      return [
        {
          tabConfig: { shouldClearOldHiddenTab: !1, shouldFocus: !0 },
          tabId: e,
          type: o("MWChatStateV2Types").MWChatStateActionsType.UpdateTab,
          updater: function (n) {
            return babelHelpers.extends({}, n, {
              tabType: {
                threadKeyDescriptor: t,
                type: o("MWChatStateV2Types").MWChatStateTabType.ChatTab,
              },
            });
          },
        },
      ];
    }
    function C(e, t, n, r, a) {
      return (
        a === void 0 && (a = { shouldClearOldHiddenTab: !1 }),
        [
          {
            tabConfig: {
              shouldClearOldHiddenTab: a.shouldClearOldHiddenTab,
              shouldFocus: !1,
            },
            tabId: e,
            type: o("MWChatStateV2Types").MWChatStateActionsType.UpdateTab,
            updater: function (a) {
              var e = a.tabType;
              return e.type ===
                o("MWChatStateV2Types").MWChatStateTabType.ComposeTab
                ? a
                : babelHelpers.extends({}, a, {
                    tabType: {
                      threadKeyDescriptor: {
                        clientThreadKey: n,
                        threadKey: t,
                        threadType:
                          r != null ? r : e.threadKeyDescriptor.threadType,
                      },
                      type: o("MWChatStateV2Types").MWChatStateTabType.ChatTab,
                    },
                  });
            },
          },
        ]
      );
    }
    function b(e, t, n, r) {
      var a = function (r) {
          return o("MWChatStateV2IsClosed").isClosed(r)
            ? {
                clientForcedMinimizeWatermark: r.clientForcedMinimizeWatermark,
                closeWatermark: r.closeWatermark,
                minimizeWatermark: r.minimizeWatermark,
                openFlyoutWatermark: r.openFlyoutWatermark,
                openWatermark: e,
                tabId: r.tabId,
                tabRootEntryPointRef: r.tabRootEntryPointRef,
                tabType: n,
              }
            : o("MWChatStateV2IsMinimized").isMinimized(void 0, r)
              ? {
                  clientForcedMinimizeWatermark:
                    r.clientForcedMinimizeWatermark,
                  closeWatermark: r.closeWatermark,
                  minimizeWatermark: r.minimizeWatermark,
                  openFlyoutWatermark: e,
                  openWatermark: r.openWatermark,
                  tabId: r.tabId,
                  tabRootEntryPointRef: r.tabRootEntryPointRef,
                  tabType: n,
                }
              : r;
        },
        i = function (o) {
          return e <= o.openWatermark
            ? o
            : {
                clientForcedMinimizeWatermark: o.clientForcedMinimizeWatermark,
                closeWatermark: o.closeWatermark,
                minimizeWatermark: o.minimizeWatermark,
                openFlyoutWatermark: o.openFlyoutWatermark,
                openWatermark: e,
                tabId: o.tabId,
                tabRootEntryPointRef: r,
                tabType: n,
              };
        };
      return [
        {
          inserter: i,
          tabConfig: t,
          tabType: n,
          type: o("MWChatStateV2Types").MWChatStateActionsType.UpsertTab,
          updater: a,
        },
      ];
    }
    function v(e, t) {
      return [
        {
          tabConfig: { shouldFocus: !1 },
          threadKey: t,
          type: o("MWChatStateV2Types").MWChatStateActionsType
            .UpdateTabByThreadKey,
          updater: function (n) {
            return e === n.openFlyoutWatermark
              ? {
                  clientForcedMinimizeWatermark:
                    n.clientForcedMinimizeWatermark,
                  closeWatermark: n.closeWatermark,
                  minimizeWatermark: n.minimizeWatermark,
                  openFlyoutWatermark: 0,
                  openWatermark: n.openWatermark,
                  tabId: n.tabId,
                  tabRootEntryPointRef: n.tabRootEntryPointRef,
                  tabType: n.tabType,
                }
              : n;
          },
        },
      ];
    }
    function S(e) {
      return [
        {
          state: function (n) {
            return babelHelpers.extends({}, n, { mediaViewerOpenWatermark: e });
          },
          type: o("MWChatStateV2Types").MWChatStateActionsType.UpdateState,
        },
      ];
    }
    ((l.focusTab = e),
      (l.focusTabByThreadKey = s),
      (l.blurTab = u),
      (l.closeTab = c),
      (l.closeTabByThreadKey = d),
      (l.openTab = m),
      (l.maximizeTab = p),
      (l.minimizeTab = _),
      (l.minimizeTabByThreadKey = f),
      (l.forceMinimizeTab = g),
      (l.notificationBringHeadToTop = h),
      (l.lockInTab = y),
      (l.updateThreadKeyDescriptor = C),
      (l.openTabOrFlyout = b),
      (l.closeFlyout = v),
      (l.updateMediaViewerOpenWatermark = S));
  },
  98,
);
