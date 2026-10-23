__d(
  "WAWebWrapperHandlers",
  [
    "fbt",
    "WAWebAfterReadUtils",
    "WAWebBizCoexStringUtils",
    "WAWebBizPrivacyUtils",
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
    "WDSMargins.stylex",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(t, n) {
      n === void 0 && (n = !1);
      var a = function () {
          o("WAWebCmd").Cmd.msgInfoDrawer(o("WAWebStateUtils").unproxy(t));
        },
        i = function (n) {
          var e = t.author,
            r = o(
              "WAWebGroupAgentOneToOneContact",
            ).getGroupAgentAwareOneToOneContact(
              e,
              o("WAWebFrontendMsgGetters").getChat(t),
              "handle_open_contact_chat",
            );
          r != null &&
            o("WAWebOpenChatWithContactAction").openChatWithContact({
              chatEntryPoint: n,
              findChatOrigin: "msgHandlerOpenContact",
              targetId: r,
            });
        },
        l = function () {
          o("WAWebModalManager").ModalManager.open(
            c.jsx(r("WAWebWebSearchPopup.react"), { message: t }),
            { transition: "modal-flow" },
          );
        },
        u = function () {
          var e,
            n,
            r = (e = t.afterReadDuration) != null ? e : 0,
            a = (n = t.ephemeralDuration) != null ? n : 0,
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
              c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
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
        d = function () {
          var e = t.bizPrivacyStatus;
          e != null &&
            o("WAWebModalManager").ModalManager.open(
              c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                tsNavigationData: {
                  surface: "unknown",
                  viewName: "biz-privacy-info",
                },
                onOK: o("WAWebModalManager").closeModalManager,
                children: o("WAWebBizPrivacyUtils").getBizPrivacyInfoString(e),
              }),
              { transition: "modal-flow" },
            );
        },
        p = function () {
          var e = m(t, n);
          e != null &&
            o("WAWebModalManager").ModalManager.open(
              c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                tsNavigationData: {
                  surface: "unknown",
                  viewName: "biz-enc-state-mismatch",
                },
                onOK: o("WAWebModalManager").closeModalManager,
                children: e,
              }),
              { transition: "modal-flow" },
            );
        },
        _ = function () {
          var a = m(t, n);
          o("WAWebModalManager").ModalManager.open(
            c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: {
                surface: "unknown",
                viewName: "order-ephemeral-exemption",
              },
              cancelText: o(
                "WAWebWrapperOrderEphemeralExemption",
              ).getLearnMorerderEphemeralExemptionButtonString(),
              onCancel: function () {
                o("WAWebExternalLink.react").openExternalLink(
                  o("WAWebFaqUrl").getEphemeralFaqUrl(),
                );
              },
              onOK: o("WAWebModalManager").closeModalManager,
              children: [
                a != null ? c.jsx("p", { children: a }) : null,
                c.jsx(
                  "p",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(
                      a != null &&
                        o("WDSMargins.stylex").wdsMargins.marginTop12,
                    ),
                    {
                      children: o(
                        "WAWebWrapperOrderEphemeralExemption",
                      ).getOrderEphemeralExemptionInfoString(),
                    },
                  ),
                ),
              ],
            }),
            { transition: "modal-flow" },
          );
        },
        f = function () {
          var e = o(
              "WAWebWrapperOrderEphemeralExemption",
            ).getOrderEphemeralExemptionInfoString(),
            t = o(
              "WAWebWrapperOrderEphemeralExemption",
            ).getLearnMorerderEphemeralExemptionButtonString();
          o("WAWebModalManager").ModalManager.open(
            c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
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
        g = function () {
          o("WAWebModalManager").ModalManager.open(
            c.jsx(
              o("WAWebMarketingMessagesUserControlsPopupLoadable")
                .WAWebMarketingMessagesUserControlsPopupLoadable,
              {
                logEntryPoint: o("WAWebWamEnumMmUserControlsEntryPoint")
                  .MM_USER_CONTROLS_ENTRY_POINT.MESSAGE_BUBBLE,
                msg: t,
              },
            ),
            { transition: "modal-flow" },
          );
        };
      return {
        handleMsgInfoClick: a,
        handleOpenContactChat: i,
        handleOpenWebSearchFlow: l,
        handleOpenEphemeralInfoPopup: u,
        handleOpenBizPrivacyInfoPopup: d,
        handleOpenEphemeralExemptionInfoPopup: f,
        handleOpenBizEncStateMismatchInfoPopup: p,
        handleOpenEncryptionAndEphemeralExemptionInfoPopup: _,
        handleOpenMarketingMessagesFeedbackPopup: g,
      };
    }
    function m(e, t) {
      var n,
        r,
        a,
        i = o("WAWebFrontendMsgGetters").getChat(e),
        l =
          (i == null || (n = i.contact) == null
            ? void 0
            : n.isOrHasBeenHosted) === !0;
      return (!l && !t && !e.id.fromMe) ||
        !(
          e != null &&
          (r = e.id) != null &&
          (r = r.remote) != null &&
          r.isUser()
        )
        ? null
        : e.aeaAutoUpgrade === !0
          ? o("WAWebBizPrivacyUtils").getBizPrivacyInfoString(
              o("WAWebProtobufsWeb.pb").WebMessageInfo$BizPrivacyStatus.E2EE,
            )
          : e.id.fromMe &&
              o("WAWebPrivacyModeSystemMsg").getReducedPrivacyMode(
                i == null || (a = i.contact) == null ? void 0 : a.privacyMode,
              ) === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.BSP
            ? o("WAWebBizPrivacyUtils").getBizPrivacyInfoString(
                o("WAWebProtobufsWeb.pb").WebMessageInfo$BizPrivacyStatus.BSP,
              )
            : o("WAWebBizCoexStringUtils").bizEncStateMismatchString();
    }
    l.getHandlers = d;
  },
  226,
);
