__d(
  "WAWebMmSignalSharingUIUtils",
  [
    "fbt",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebMmSignalSharingDisclosureModalLoadable.react",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMmSignalSharingLoggingEvents",
    "WAWebMmSignalSharingModelUtils",
    "WAWebMmSignalSharingShowDisclosureModal",
    "WAWebModalManager",
    "WAWebQbmMessageClickLogEvent",
    "WAWebQbmMessageLevelActionEvent",
    "WAWebWamEnumDisclosureEventType",
    "WAWebWamEnumMessageActionEntryPoint",
    "WAWebWamEnumMessageLevelAction",
    "WAWebWamEnumQbmMessageClickButtonClickedType",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c() {
      return o(
        "WAWebMmSignalSharingGatingUtils",
      ).isMmSignalSharingDisclosureEnabled()
        ? o("WAWebFaqUrl").getFullUrl(
            o(
              "WAWebMmSignalSharingGatingUtils",
            ).getMmDisclosureLearnMoreArticleId(),
          )
        : "";
    }
    function d(e) {
      var t = s._(/*BTDS*/ "This chat has offers and announcements"),
        n = s._(/*BTDS*/ "Learn more"),
        r = function () {
          _({
            action: "learnMore",
            chat: e,
            onLearnMore: function () {
              return o(
                "WAWebMmSignalSharingLoggingEvents",
              ).logMmSignalSharingDisclosureLearnMoreEvent({
                eventType: o("WAWebWamEnumDisclosureEventType")
                  .DISCLOSURE_EVENT_TYPE.DISCLOSURE_INFO_CLICK,
                chat: e,
              });
            },
          });
        };
      return { text: t, ctaText: n, handleClick: r };
    }
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r;
          if (
            o(
              "WAWebMmSignalSharingGatingUtils",
            ).isMmSignalSharingDisclosureEnabled() &&
            e.target instanceof HTMLElement &&
            ((r = e.target) == null ? void 0 : r.tagName) === "A"
          ) {
            e.preventDefault();
            var a = yield o(
                "WAWebMmSignalSharingShowDisclosureModal",
              ).showDisclosureModalForMm(
                t,
                n.unsafe(),
                o("WAWebWamEnumDisclosureEventType").DISCLOSURE_EVENT_TYPE
                  .BODY_URL_CLICK,
              ),
              i =
                e.target instanceof HTMLAnchorElement && e.target
                  ? e.target
                  : null,
              l = o(
                "WAWebMmSignalSharingModelUtils",
              ).getBodyLinkForMmSignalSharing({
                chat: t,
                msg: n.unsafe(),
                isMmSignalSharingDisclosureTosAccepted: !0,
                defaultUrl: i == null ? void 0 : i.href,
              }),
              s = l.index,
              u = l.link;
            if (u == null) return;
            a && s != null
              ? _({
                  eventType: o("WAWebWamEnumDisclosureEventType")
                    .DISCLOSURE_EVENT_TYPE.BODY_URL_CLICK,
                  chat: t,
                  onOk: function () {
                    var e = o(
                        "WAWebMmSignalSharingModelUtils",
                      ).getBodyLinkForMmSignalSharing({
                        chat: t,
                        msg: n.unsafe(),
                        isMmSignalSharingDisclosureTosAccepted: !0,
                        defaultUrl: i == null ? void 0 : i.href,
                      }),
                      r = e.index,
                      a = e.link;
                    a != null &&
                      (o("WAWebExternalLink.react").openExternalLink(a),
                      o(
                        "WAWebMmSignalSharingLoggingEvents",
                      ).logMmSignalSharingLinkClickEvent({
                        eventType: o("WAWebWamEnumDisclosureEventType")
                          .DISCLOSURE_EVENT_TYPE.BODY_URL_CLICK,
                        linkTypeIndex: r,
                        msg: n,
                        chat: t,
                        hasShownDisclosure: !0,
                      }),
                      o("WAWebQbmMessageClickLogEvent").logQbmMessageClick({
                        msg: n.unsafe(),
                        chat: t,
                        buttonClickedType: o(
                          "WAWebWamEnumQbmMessageClickButtonClickedType",
                        ).QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.BODY_URL,
                      }),
                      o(
                        "WAWebQbmMessageLevelActionEvent",
                      ).logQbmMessageLevelAction({
                        msg: n,
                        chat: t,
                        messageLevelAction: o("WAWebWamEnumMessageLevelAction")
                          .MESSAGE_LEVEL_ACTION.LINK_CLICK,
                        messageActionEntryPoint: o(
                          "WAWebWamEnumMessageActionEntryPoint",
                        ).MESSAGE_ACTION_ENTRY_POINT.CHATLIST,
                      }));
                  },
                  onCancel: function (r) {
                    return o(
                      "WAWebMmSignalSharingLoggingEvents",
                    ).logMmSignalSharingDisclosureCancelEvent({
                      eventType: o("WAWebWamEnumDisclosureEventType")
                        .DISCLOSURE_EVENT_TYPE.BODY_URL_CLICK,
                      chat: t,
                      msg: n.unsafe(),
                      isExplicitCancel: r,
                    });
                  },
                  onDismissed: function () {
                    var e = o(
                        "WAWebMmSignalSharingModelUtils",
                      ).getBodyLinkForMmSignalSharing({
                        chat: t,
                        msg: n.unsafe(),
                        isMmSignalSharingDisclosureTosAccepted: !0,
                        defaultUrl: i == null ? void 0 : i.href,
                      }),
                      r = e.link;
                    r != null &&
                      (o("WAWebExternalLink.react").openExternalLink(r),
                      o(
                        "WAWebMmSignalSharingLoggingEvents",
                      ).logMmSignalSharingLinkClickEvent({
                        eventType: o("WAWebWamEnumDisclosureEventType")
                          .DISCLOSURE_EVENT_TYPE.BODY_URL_CLICK,
                        linkTypeIndex: s,
                        msg: n,
                        chat: t,
                        hasShownDisclosure: !0,
                      }),
                      o("WAWebQbmMessageClickLogEvent").logQbmMessageClick({
                        msg: n.unsafe(),
                        chat: t,
                        buttonClickedType: o(
                          "WAWebWamEnumQbmMessageClickButtonClickedType",
                        ).QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.BODY_URL,
                      }),
                      o(
                        "WAWebQbmMessageLevelActionEvent",
                      ).logQbmMessageLevelAction({
                        msg: n,
                        chat: t,
                        messageLevelAction: o("WAWebWamEnumMessageLevelAction")
                          .MESSAGE_LEVEL_ACTION.LINK_CLICK,
                        messageActionEntryPoint: o(
                          "WAWebWamEnumMessageActionEntryPoint",
                        ).MESSAGE_ACTION_ENTRY_POINT.CHATLIST,
                      }));
                  },
                })
              : (i == null ? void 0 : i.href) != null &&
                (o("WAWebExternalLink.react").openExternalLink(u),
                o(
                  "WAWebMmSignalSharingLoggingEvents",
                ).logMmSignalSharingLinkClickEvent({
                  eventType: o("WAWebWamEnumDisclosureEventType")
                    .DISCLOSURE_EVENT_TYPE.BODY_URL_CLICK,
                  linkTypeIndex: s,
                  msg: n,
                  chat: t,
                }),
                o("WAWebQbmMessageClickLogEvent").logQbmMessageClick({
                  msg: n.unsafe(),
                  chat: t,
                  buttonClickedType: o(
                    "WAWebWamEnumQbmMessageClickButtonClickedType",
                  ).QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE.BODY_URL,
                }),
                o("WAWebQbmMessageLevelActionEvent").logQbmMessageLevelAction({
                  msg: n,
                  chat: t,
                  messageLevelAction: o("WAWebWamEnumMessageLevelAction")
                    .MESSAGE_LEVEL_ACTION.LINK_CLICK,
                  messageActionEntryPoint: o(
                    "WAWebWamEnumMessageActionEntryPoint",
                  ).MESSAGE_ACTION_ENTRY_POINT.CHATLIST,
                }));
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      var t = e.action,
        n = e.chat,
        r = e.eventType,
        a = e.onCancel,
        i = e.onDismissed,
        l = e.onLearnMore,
        s = e.onOk;
      o(
        "WAWebMmSignalSharingGatingUtils",
      ).isMmSignalSharingDisclosureEnabled() &&
        o("WAWebModalManager").ModalManager.open(
          u.jsx(
            o("WAWebMmSignalSharingDisclosureModalLoadable.react")
              .MmSignalSharingDisclosureModal,
            {
              action: t,
              eventType: r,
              chat: n,
              onOk: s,
              onCancel: a,
              onDismissed: i,
              onLearnMore: l,
            },
          ),
        );
    }
    ((l.getMmSignalSharingLearnMoreHCAURL = c),
      (l.getMmSignalSharingMessageNotification = d),
      (l.manageMmSignalSharingBodyClick = m),
      (l.openMmSignalSharingDisclosureModal = _));
  },
  226,
);
