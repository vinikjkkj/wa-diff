__d(
  "WAWebWrapperHandlers",
  [
    "fbt",
    "WAWebAeaAccountState",
    "WAWebAfterReadUtils",
    "WAWebBizCoexStringUtils",
    "WAWebBizPrivacyUtils",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebEphemeralFbtKic",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFrontendMsgGetters",
    "WAWebGroupAgentOneToOneContact",
    "WAWebMarketingMessagesUserControlsPopupLoadable",
    "WAWebModalManager",
    "WAWebOpenChatWithContactAction",
    "WAWebPrivacyModeSystemMsg",
    "WAWebProtobufsWeb.pb",
    "WAWebStateUtils",
    "WAWebWamEnumMmUserControlsEntryPoint",
    "WAWebWebSearchPopup.react",
    "WAWebWrapperOrderEphemeralExemption",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = function () {
          o("WAWebCmd").Cmd.msgInfoDrawer(o("WAWebStateUtils").unproxy(e));
        },
        n = function (n) {
          var t = e.author,
            r = o(
              "WAWebGroupAgentOneToOneContact",
            ).getGroupAgentAwareOneToOneContact(
              t,
              o("WAWebFrontendMsgGetters").getChat(e),
              "handle_open_contact_chat",
            );
          r != null &&
            o("WAWebOpenChatWithContactAction").openChatWithContact({
              chatEntryPoint: n,
              findChatOrigin: "msgHandlerOpenContact",
              targetId: r,
            });
        },
        a = function () {
          o("WAWebModalManager").ModalManager.open(
            u.jsx(r("WAWebWebSearchPopup.react"), { message: e }),
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
              : ((i = s._(/*BTDS*/ "This message won't disappear")),
                (l = s._(
                  /*BTDS*/ "The sender may be using an older version of WhatsApp.",
                ))),
            o("WAWebModalManager").ModalManager.open(
              u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
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
              u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
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
        c = function () {
          var t,
            n,
            r,
            a = o("WAWebFrontendMsgGetters").getChat(e),
            i =
              (a == null || (t = a.contact) == null
                ? void 0
                : t.isOrHasBeenHosted) === !0,
            l =
              a != null &&
              o("WAWebAeaAccountState").isAeaNonE2eeThreadState(
                o("WAWebChatGetters").getAeaThreadState(a),
              );
          if (
            !(
              (!i && !l && !e.id.fromMe) ||
              !(
                e != null &&
                (n = e.id) != null &&
                (n = n.remote) != null &&
                n.isUser()
              )
            )
          ) {
            var s = o("WAWebBizCoexStringUtils").bizEncStateMismatchString();
            (e.aeaAutoUpgrade === !0
              ? (s = o("WAWebBizPrivacyUtils").getBizPrivacyInfoString(
                  o("WAWebProtobufsWeb.pb").WebMessageInfo$BizPrivacyStatus
                    .E2EE,
                ))
              : e.id.fromMe &&
                o("WAWebPrivacyModeSystemMsg").getReducedPrivacyMode(
                  (r = o("WAWebFrontendMsgGetters").getChat(e)) == null ||
                    (r = r.contact) == null
                    ? void 0
                    : r.privacyMode,
                ) === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.BSP &&
                (s = o("WAWebBizPrivacyUtils").getBizPrivacyInfoString(
                  o("WAWebProtobufsWeb.pb").WebMessageInfo$BizPrivacyStatus.BSP,
                )),
              o("WAWebModalManager").ModalManager.open(
                u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                  tsNavigationData: {
                    surface: "unknown",
                    viewName: "biz-enc-state-mismatch",
                  },
                  onOK: o("WAWebModalManager").closeModalManager,
                  children: s,
                }),
                { transition: "modal-flow" },
              ));
          }
        },
        d = function () {
          var e = o(
              "WAWebWrapperOrderEphemeralExemption",
            ).getOrderEphemeralExemptionInfoString(),
            t = o(
              "WAWebWrapperOrderEphemeralExemption",
            ).getLearnMorerderEphemeralExemptionButtonString();
          o("WAWebModalManager").ModalManager.open(
            u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
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
        m = function () {
          o("WAWebModalManager").ModalManager.open(
            u.jsx(
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
        handleOpenEphemeralExemptionInfoPopup: d,
        handleOpenBizEncStateMismatchInfoPopup: c,
        handleOpenMarketingMessagesFeedbackPopup: m,
      };
    }
    l.getHandlers = c;
  },
  226,
);
