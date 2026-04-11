__d(
  "WAWebMultiSelectForward.react",
  [
    "fbt",
    "WAArrayUtils",
    "WAWebChatGroupUtils",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebForwardMessageFlowLoadable",
    "WAWebForwardUtils",
    "WAWebFrontendMsgGetters",
    "WAWebMiscGatingUtils",
    "WAWebModalManager",
    "WAWebMsgActionCapability",
    "WAWebMultiSelectUtils",
    "WAWebTabOrder",
    "WAWebWamEnumMessageContextMenuOptionType",
    "WDSIconIcFastForward.react",
    "WDSMenuBarItem.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = { btnMargin: { marginInlineEnd: "xqf2s3x", $$css: !0 } };
    function d(e) {
      var t = e.noSortOnForward,
        n = e.onBack,
        a = e.onCancel,
        i = e.onForwardModalOpen,
        l = e.selectedMessages,
        d = e.theme,
        m = l.getSelected(),
        p = m.length,
        _ = m.every(function (e) {
          return o("WAWebMsgActionCapability").canForwardMsg(e);
        }),
        f = !p || !_,
        g = o("WAArrayUtils").groupBy(m, function (e) {
          return o("WAWebFrontendMsgGetters").getChat(e);
        }),
        h = g.keys(),
        y = h.some(function (e) {
          return o("WAWebChatGroupUtils").isSuspendedGroup(e);
        }),
        C = y && o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled(),
        b =
          d === "mediaHub"
            ? function (e, t) {
                return o("WAWebModalManager").ModalManager.openSupportModal(
                  e,
                  t,
                );
              }
            : function () {
                return o("WAWebModalManager").ModalManager.open.apply(
                  o("WAWebModalManager").ModalManager,
                  arguments,
                );
              },
        v =
          d === "mediaHub"
            ? function () {
                return o("WAWebModalManager").ModalManager.closeSupportModal();
              }
            : o("WAWebModalManager").closeModalManager,
        S = function () {
          var e = l.getSelected(),
            c = h.some(Boolean);
          !t &&
            c &&
            ((e = []),
            g.forEach(function (t, n) {
              e = e.concat(n.sortMsgs(t));
            }));
          var d = e.length,
            m = function () {
              (o("WAWebForwardUtils").showForwardedToast(d), a());
            },
            p = e.filter(function (e) {
              return o("WAWebMsgActionCapability").canForwardMsg(e);
            });
          if (p.length) {
            var _ = function (t) {
              return s._(
                /*BTDS*/ '_j{"*":"You have selected {chats-number} chats to forward to","_1":"You have selected 1 chat to forward to"}',
                [s._plural(t.length, "chats-number")],
              );
            };
            if (d !== p.length) {
              var f = function () {
                b(
                  u.jsx(
                    o("WAWebForwardMessageFlowLoadable")
                      .ForwardMessageFlowLoadable,
                    {
                      msgs: p,
                      onForward: m,
                      onClose: v,
                      onBack: n,
                      getAnnouncementSummary: _,
                    },
                  ),
                  { transition: "modal-flow" },
                );
              };
              b(
                u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                  title: s._(/*BTDS*/ "Can't forward all messages"),
                  onOK: f,
                  okText: s._(/*BTDS*/ "Forward"),
                  onCancel: v,
                  cancelText: s._(/*BTDS*/ "Cancel"),
                  tsNavigationData: {
                    surface: "unknown",
                    viewName: "forward-error",
                  },
                  children: s._(
                    /*BTDS*/ "Some messages can't be forwarded, do you want to forward rest of the messages?",
                  ),
                }),
              );
            } else
              b(
                u.jsx(
                  o("WAWebForwardMessageFlowLoadable")
                    .ForwardMessageFlowLoadable,
                  {
                    msgs: e,
                    onForward: m,
                    onClose: v,
                    onBack: n,
                    getAnnouncementSummary: _,
                  },
                ),
                { transition: "modal-flow" },
              );
          } else
            b(
              u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                title: s._(/*BTDS*/ "Can't forward"),
                onOK: v,
                okText: r("WAWebFbtCommon")("OK"),
                tsNavigationData: {
                  surface: "unknown",
                  viewName: "forward-error",
                },
                children: s._(
                  /*BTDS*/ '_j{"*":"Wait until the messages finish sending and displays a checkmark before forwarding.","_1":"Wait until the message finishes sending and displays a checkmark before forwarding."}',
                  [s._plural(d)],
                ),
              }),
            );
          (o("WAWebMultiSelectUtils").logMessageActionClickMetric(
            e,
            o("WAWebWamEnumMessageContextMenuOptionType")
              .MESSAGE_CONTEXT_MENU_OPTION_TYPE.FORWARD,
          ),
            i == null || i());
        },
        R;
      return (
        f && d === "mediaHub"
          ? (R = "borderless")
          : !f && d === "mediaHub" && (R = "filled"),
        C
          ? null
          : u.jsx(r("WDSMenuBarItem.react"), {
              disabled: f,
              testid: void 0,
              buttonVariant: R,
              icon: r("WDSIconIcFastForward.react"),
              tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_SELECT_BAR,
              onClick: S,
              title: s._(/*BTDS*/ '_j{"*":"Forward messages","_1":"Forward"}', [
                s._plural(p),
              ]),
              marginInlineXstyle: c.btnMargin,
            })
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
