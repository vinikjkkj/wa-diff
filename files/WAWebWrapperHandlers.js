__d(
  "WAWebWrapperHandlers",
  [
    "WAWebAfterReadUtils",
    "WAWebBizCoexStringUtils",
    "WAWebBizPrivacyUtils",
    "WAWebChatGroupUtils",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebConfirmPopup.react",
    "WAWebEphemeralFbtKic",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFindChatAction",
    "WAWebFrontendMsgGetters",
    "WAWebMarketingMessagesUserControlsPopupLoadable",
    "WAWebModalManager",
    "WAWebStateUtils",
    "WAWebWamEnumMmUserControlsEntryPoint",
    "WAWebWebSearchPopup.react",
    "WAWebWrapperOrderEphemeralExemption",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = function () {
          o("WAWebCmd").Cmd.msgInfoDrawer(o("WAWebStateUtils").unproxy(e));
        },
        n = function (n) {
          var t = e.author,
            r = o("WAWebChatGroupUtils").getOneToOneContactFromGroupContact(
              t,
              "handle_open_contact_chat",
            );
          r != null &&
            o("WAWebFindChatAction")
              .findOrCreateLatestChat(r, "msgHandlerOpenContact")
              .then(function (e) {
                var t = e.chat;
                o("WAWebCmd")
                  .Cmd.openChatFromUnread({ chat: t, chatEntryPoint: n })
                  .then(function (e) {
                    e && o("WAWebComposeBoxActions").ComposeBoxActions.focus(t);
                  });
              });
        },
        a = function () {
          o("WAWebModalManager").ModalManager.open(
            s.jsx(r("WAWebWebSearchPopup.react"), { message: e }),
            { transition: "modal-flow" },
          );
        },
        i = function () {
          var t,
            n,
            r = (t = e.afterReadDuration) != null ? t : 0,
            a = (n = e.ephemeralDuration) != null ? n : 0,
            i,
            l;
          (o("WAWebAfterReadUtils").isAfterReadEnabled() && r > 0
            ? ((i = o(
                "WAWebEphemeralFbtKic",
              ).getDisappearingMessageOutOfSyncDifferentTitle()),
              (l = o(
                "WAWebEphemeralFbtKic",
              ).getDisappearingMessageOutOfSyncDifferentBody(r)))
            : a > 0
              ? ((i = o(
                  "WAWebEphemeralFbtKic",
                ).getDisappearingMessageOutOfSyncDifferentTitle()),
                (l = o(
                  "WAWebEphemeralFbtKic",
                ).getDisappearingMessageOutOfSyncDifferentBody(a)))
              : ((i = o(
                  "WAWebEphemeralFbtKic",
                ).getDisappearingMessageOutOfSyncWontDisappearTitle()),
                (l = o(
                  "WAWebEphemeralFbtKic",
                ).getDisappearingMessageOutOfSyncWontDisappearBody())),
            o("WAWebModalManager").ModalManager.open(
              s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                tsNavigationData: {
                  surface: "unknown",
                  viewName: "ephemeral-msg-info",
                },
                title: i,
                onOK: o("WAWebModalManager").closeModalManager,
                children: l,
              }),
              { transition: "modal-flow" },
            ));
        },
        l = function () {
          var t = e.bizPrivacyStatus;
          t != null &&
            o("WAWebModalManager").ModalManager.open(
              s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                tsNavigationData: {
                  surface: "unknown",
                  viewName: "biz-privacy-info",
                },
                onOK: o("WAWebModalManager").closeModalManager,
                children: o("WAWebBizPrivacyUtils").getBizPrivacyInfoString(t),
              }),
              { transition: "modal-flow" },
            );
        },
        u = function () {
          var t,
            n,
            r =
              ((t = o("WAWebFrontendMsgGetters").getChat(e)) == null ||
              (t = t.contact) == null
                ? void 0
                : t.isOrHasBeenHosted) === !0;
          !r ||
            !(
              e != null &&
              (n = e.id) != null &&
              (n = n.remote) != null &&
              n.isUser()
            ) ||
            o("WAWebModalManager").ModalManager.open(
              s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                tsNavigationData: {
                  surface: "unknown",
                  viewName: "biz-enc-state-mismatch",
                },
                onOK: o("WAWebModalManager").closeModalManager,
                children: o(
                  "WAWebBizCoexStringUtils",
                ).bizEncStateMismatchString(),
              }),
              { transition: "modal-flow" },
            );
        },
        c = function () {
          var e = o(
              "WAWebWrapperOrderEphemeralExemption",
            ).getOrderEphemeralExemptionInfoString(),
            t = o(
              "WAWebWrapperOrderEphemeralExemption",
            ).getLearnMorerderEphemeralExemptionButtonString();
          o("WAWebModalManager").ModalManager.open(
            s.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: {
                surface: "unknown",
                viewName: "order-ephemeral-exemption",
              },
              cancelText: t,
              onCancel: function () {
                o("WAWebExternalLink.react").openExternalLink(
                  o("WAWebFaqUrl").getEphemeralFaqUrl(),
                );
              },
              onOK: o("WAWebModalManager").closeModalManager,
              children: e,
            }),
            { transition: "modal-flow" },
          );
        },
        d = function () {
          o("WAWebModalManager").ModalManager.open(
            s.jsx(
              o("WAWebMarketingMessagesUserControlsPopupLoadable")
                .WAWebMarketingMessagesUserControlsPopupLoadable,
              {
                logEntryPoint: o("WAWebWamEnumMmUserControlsEntryPoint")
                  .MM_USER_CONTROLS_ENTRY_POINT.MESSAGE_BUBBLE,
                msg: e,
              },
            ),
            { transition: "modal-flow" },
          );
        };
      return {
        handleMsgInfoClick: t,
        handleOpenContactChat: n,
        handleOpenWebSearchFlow: a,
        handleOpenEphemeralInfoPopup: i,
        handleOpenBizPrivacyInfoPopup: l,
        handleOpenEphemeralExemptionInfoPopup: c,
        handleOpenBizEncStateMismatchInfoPopup: u,
        handleOpenMarketingMessagesFeedbackPopup: d,
      };
    }
    l.getHandlers = u;
  },
  98,
);
