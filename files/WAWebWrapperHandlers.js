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
    "WDSMargins.stylex",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = function () {
          o("WAWebCmd").Cmd.msgInfoDrawer(o("WAWebStateUtils").unproxy(t));
        },
        a = function (n) {
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
        i = function () {
          o("WAWebModalManager").ModalManager.open(
            c.jsx(r("WAWebWebSearchPopup.react"), { message: t }),
            { transition: "modal-flow" },
          );
        },
        l = function () {
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
        u = function () {
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
        d = function () {
          var e = m(t);
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
        p = function () {
          var n = m(t);
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
                n != null ? c.jsx("p", { children: n }) : null,
                c.jsx(
                  "p",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(
                      n != null &&
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
        _ = function () {
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
        f = function () {
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
        handleMsgInfoClick: n,
        handleOpenContactChat: a,
        handleOpenWebSearchFlow: i,
        handleOpenEphemeralInfoPopup: l,
        handleOpenBizPrivacyInfoPopup: u,
        handleOpenEphemeralExemptionInfoPopup: _,
        handleOpenBizEncStateMismatchInfoPopup: d,
        handleOpenEncryptionAndEphemeralExemptionInfoPopup: p,
        handleOpenMarketingMessagesFeedbackPopup: f,
      };
    }
    function m(e) {
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
      return (!i && !l && !e.id.fromMe) ||
        !(
          e != null &&
          (n = e.id) != null &&
          (n = n.remote) != null &&
          n.isUser()
        )
        ? null
        : e.aeaAutoUpgrade === !0
          ? o("WAWebBizPrivacyUtils").getBizPrivacyInfoString(
              o("WAWebProtobufsWeb.pb").WebMessageInfo$BizPrivacyStatus.E2EE,
            )
          : e.id.fromMe &&
              o("WAWebPrivacyModeSystemMsg").getReducedPrivacyMode(
                a == null || (r = a.contact) == null ? void 0 : r.privacyMode,
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
