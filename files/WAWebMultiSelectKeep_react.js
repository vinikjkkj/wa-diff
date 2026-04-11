__d(
  "WAWebMultiSelectKeep.react",
  [
    "fbt",
    "WALogger",
    "WAWebKeepInChatActions",
    "WAWebKeepInChatMsgUtils",
    "WAWebMsgGetters",
    "WAWebMultiSelectBar.react",
    "WAWebMultiSelectUtils",
    "WAWebTabOrder",
    "WAWebWamEnumKicEntryPointType",
    "WAWebWamEnumMessageContextMenuOptionType",
    "WDSIconIcBookmark.react",
    "WDSIconWdsIcBookmarkSlash.react",
    "WDSMenuBarItem.react",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "useWAWebForceUpdate",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = c || (c = o("react"));
    function m(e) {
      if (e == null)
        return o("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE
          .ALL_MEDIA;
      switch (e) {
        case o("WAWebMultiSelectBar.react").MultiSelectBarEntryPoint
          .CONVERSATION_PANEL:
          return o("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE.CHAT;
        case o("WAWebMultiSelectBar.react").MultiSelectBarEntryPoint.MEDIA:
          return o("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE.MEDIA;
        case o("WAWebMultiSelectBar.react").MultiSelectBarEntryPoint.DOCS:
          return o("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE.DOCS;
        case o("WAWebMultiSelectBar.react").MultiSelectBarEntryPoint.LINKS:
        case o("WAWebMultiSelectBar.react").MultiSelectBarEntryPoint.PRODUCTS:
          return o("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE.LINKS;
      }
    }
    var p = { btnMargin: { marginInlineEnd: "xqf2s3x", $$css: !0 } };
    function _(t) {
      "use no forget";
      var a = t.entryPoint,
        i = t.onCancel,
        l = t.onKeep,
        c = t.onUnkeep,
        _ = t.selectedMessages,
        f = t.theme,
        g = _.getSelected(),
        h = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        y = g.length,
        C = g.every(function (e) {
          return o("WAWebMsgGetters").getIsKept(e);
        }),
        b = g.every(function (e) {
          return o("WAWebKeepInChatMsgUtils").canShowKeepOrUnkeepOption(e);
        }),
        v = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t = _.getSelected();
            try {
              (yield o("WAWebKeepInChatActions").runBulkUndoKeepInChatUX(
                t,
                m(a),
                f === "mediaHub",
              ),
                i(),
                c == null || c());
            } catch (t) {
              var n;
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Bulk unkeep operation not complete. Reason: ",
                    "",
                  ])),
                (n = r("getErrorSafe")(t).message) != null ? n : "unknown",
              );
            }
            o("WAWebMultiSelectUtils").logMessageActionClickMetric(
              t,
              o("WAWebWamEnumMessageContextMenuOptionType")
                .MESSAGE_CONTEXT_MENU_OPTION_TYPE.UNKNOWN,
            );
          });
          return function () {
            return t.apply(this, arguments);
          };
        })(),
        S = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = _.getSelected();
            try {
              (yield o("WAWebKeepInChatActions").runBulkKeepInChatUX(
                e,
                m(a),
                f === "mediaHub",
              ),
                i(),
                l == null || l());
            } catch (e) {
              var t;
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Bulk keep operation not complete. Reason: ",
                    "",
                  ])),
                (t = r("getErrorSafe")(e).message) != null ? t : "unknown",
              );
            }
            o("WAWebMultiSelectUtils").logMessageActionClickMetric(
              e,
              o("WAWebWamEnumMessageContextMenuOptionType")
                .MESSAGE_CONTEXT_MENU_OPTION_TYPE.UNKNOWN,
            );
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        R,
        L,
        E;
      return (
        y && C
          ? ((R = r("WDSIconWdsIcBookmarkSlash.react")),
            (L = s._(/*BTDS*/ "Unkeep")),
            (E = v))
          : ((R = r("WDSIconIcBookmark.react")),
            (L = s._(/*BTDS*/ "Keep")),
            (E = S)),
        o("useWAWebListener").useListeners(
          g.map(function (e) {
            return { source: e, eventOrEvents: "change:kicState", callback: h };
          }),
        ),
        d.jsx(r("WDSMenuBarItem.react"), {
          icon: R,
          tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_SELECT_BAR,
          disabled: !y || !b,
          title: L,
          testid: void 0,
          onClick: E,
          marginInlineXstyle: p.btnMargin,
        })
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
