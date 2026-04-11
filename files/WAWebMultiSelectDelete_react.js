__d(
  "WAWebMultiSelectDelete.react",
  [
    "fbt",
    "WAWebBizCtwaAGMUtils",
    "WAWebDeleteRefreshedIcon.react",
    "WAWebDeleteRevokeMsgFlow.react",
    "WAWebFrontendMsgGetters",
    "WAWebIconButton.react",
    "WAWebL10nFilesize",
    "WAWebModalManager",
    "WAWebMsgActionCapability",
    "WAWebMsgGetters",
    "WAWebMultiSelectUtils",
    "WAWebRevokeMetricUtils",
    "WAWebStateUtils",
    "WAWebTabOrder",
    "WAWebText.react",
    "WAWebWamEnumMessageContextMenuOptionType",
    "WDSButton.react",
    "WDSIconIcDelete.react",
    "WDSMenuBarItem.react",
    "react",
    "sumBy",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        btnMargin: { marginInlineEnd: "xqf2s3x", $$css: !0 },
        mediaHubIcon: {
          color: "xqnyt8g",
          width: "x1849jeq",
          ":disabled_color": "x9g49ws",
          $$css: !0,
        },
        capitalised: { textTransform: "xn80e1m", $$css: !0 },
        deleteHover: { ":hover_backgroundColor": "x1dulx1b", $$css: !0 },
        paddingEnd12: { paddingInlineEnd: "xde1mab", $$css: !0 },
      };
    function d(e) {
      "use no forget";
      var t,
        n = e.dataTab,
        a = n === void 0 ? o("WAWebTabOrder").TAB_ORDER.CHAT_SELECT_BAR : n,
        i = e.onCancel,
        l = e.onDeleteModalOpen,
        d = e.selectedMessages,
        m = e.theme,
        p = e.toastPosition,
        _ = (t = d == null ? void 0 : d.getSelected()) != null ? t : [],
        f = r("sumBy")(_, function (e) {
          var t;
          return (t = e.mediaData) == null ? void 0 : t.size;
        }),
        g = _.every(function (e) {
          var t, n;
          return (
            (!o("WAWebMsgGetters").getIsNewsletterMsg(e) ||
              o("WAWebMsgActionCapability").canRevokeNewsletterMsg(e)) &&
            !o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage(
              (t = e.ctwaContext) == null ? void 0 : t.sourceApp,
              e.type,
              (n = e.ctwaContext) == null
                ? void 0
                : n.automatedGreetingMessageShown,
              e.subtype,
            )
          );
        }),
        h = _.length,
        y = function () {
          var e = _.map(function (e) {
              return o("WAWebFrontendMsgGetters").getChat(e);
            }),
            t = e.some(Boolean);
          (t &&
            (o("WAWebModalManager").ModalManager.openSupportModal(
              u.jsx(r("WAWebDeleteRevokeMsgFlow.react"), {
                chats: e,
                msgList: _.map(o("WAWebStateUtils").unproxy),
                toastPosition: p,
                onEnd: i,
                theme: m,
              }),
            ),
            o("WAWebRevokeMetricUtils").UiRevokeActionHelper.trashCanSelected(),
            l == null || l()),
            o("WAWebMultiSelectUtils").logMessageActionClickMetric(
              _,
              o("WAWebWamEnumMessageContextMenuOptionType")
                .MESSAGE_CONTEXT_MENU_OPTION_TYPE.DELETE,
            ));
        },
        C = !h || !g,
        b = u.jsx(r("WDSMenuBarItem.react"), {
          icon: r("WDSIconIcDelete.react"),
          testid: void 0,
          tabOrder: a,
          disabled: C,
          title: s._(/*BTDS*/ '_j{"*":"Delete"}', [s._plural(h)]),
          onClick: y,
          marginInlineXstyle: c.btnMargin,
        }),
        v = u.jsx(r("WDSButton.react"), {
          "aria-label": s._(/*BTDS*/ '_j{"*":"Delete"}', [s._plural(h)]),
          disabled: C,
          Icon: o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon,
          onPress: y,
          tabOrder: a,
          testid: void 0,
          variant: "borderless",
          xstyle: c.mediaHubIcon,
        });
      return m === "mediaHub"
        ? u.jsx(r("WAWebIconButton.react"), {
            onClick: C ? null : y,
            icon: v,
            xstyle: !C && c.deleteHover,
            children: u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
              weight: "semibold",
              xstyle: [c.capitalised, c.paddingEnd12],
              color: C
                ? "wdsContentDisabled"
                : "wdsSecondaryNegativeEmphasized",
              children:
                f > 0 ? o("WAWebL10nFilesize").getL10nFilesize(f) : null,
            }),
          })
        : b;
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
