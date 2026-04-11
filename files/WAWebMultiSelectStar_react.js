__d(
  "WAWebMultiSelectStar.react",
  [
    "fbt",
    "WAArrayUtils",
    "WAWebCmd",
    "WAWebFrontendMsgGetters",
    "WAWebMsgActionCapability",
    "WAWebMultiSelectUtils",
    "WAWebStarRefreshedIcon.react",
    "WAWebTabOrder",
    "WAWebUnstarRefreshedIcon.react",
    "WAWebWamEnumMessageContextMenuOptionType",
    "WDSMenuBarItem.react",
    "react",
    "useWAWebForceUpdate",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = { btnMargin: { marginInlineEnd: "xqf2s3x", $$css: !0 } };
    function d(e) {
      "use no forget";
      var t = e.onCancel,
        n = e.onStar,
        a = e.selectedMessages,
        i = e.theme,
        l = e.toastPosition,
        d = a.getSelected(),
        m = d.length,
        p = d.every(function (e) {
          return e.star;
        }),
        _ = d.every(function (e) {
          return o("WAWebMsgActionCapability").canStarMsg(e);
        }),
        f = o("WAArrayUtils").groupBy(d, function (e) {
          return o("WAWebFrontendMsgGetters").getChat(e);
        }),
        g = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
      o("useWAWebListener").useListeners(
        d.map(function (e) {
          return { source: e, eventOrEvents: "change:star", callback: g };
        }),
      );
      var h = function () {
          (f.forEach(function (e, t) {
            o("WAWebCmd").Cmd.sendUnstarMsgs(t, e, null, l);
          }),
            t(),
            o("WAWebMultiSelectUtils").logMessageActionClickMetric(
              d,
              o("WAWebWamEnumMessageContextMenuOptionType")
                .MESSAGE_CONTEXT_MENU_OPTION_TYPE.STAR_OR_UNSTAR,
            ),
            n == null || n());
        },
        y = function () {
          (f.forEach(function (e, t) {
            o("WAWebCmd").Cmd.sendStarMsgs(t, e, null, l);
          }),
            t(),
            o("WAWebMultiSelectUtils").logMessageActionClickMetric(
              d,
              o("WAWebWamEnumMessageContextMenuOptionType")
                .MESSAGE_CONTEXT_MENU_OPTION_TYPE.STAR_OR_UNSTAR,
            ),
            n == null || n());
        },
        C,
        b,
        v;
      m && p
        ? ((C = h),
          (b = o("WAWebUnstarRefreshedIcon.react").UnstarRefreshedIcon),
          (v = s._(/*BTDS*/ '_j{"*":"Unstar messages","_1":"Unstar message"}', [
            s._plural(m),
          ])))
        : ((C = y),
          (b = o("WAWebStarRefreshedIcon.react").StarRefreshedIcon),
          (v = s._(/*BTDS*/ '_j{"*":"Star"}', [s._plural(m)])));
      var S = !m || !_,
        R = u.jsx(r("WDSMenuBarItem.react"), {
          icon: b,
          tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_SELECT_BAR,
          disabled: S,
          title: v,
          onClick: C,
          marginInlineXstyle: c.btnMargin,
        });
      return i === "mediaHub"
        ? u.jsx(r("WDSMenuBarItem.react"), {
            icon: b,
            tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_SELECT_BAR,
            disabled: S,
            title: v,
            onClick: C,
            marginInlineXstyle: c.btnMargin,
          })
        : R;
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
