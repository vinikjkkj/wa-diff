__d(
  "WAWebGroupAdminEventsNavigation",
  [
    "WALogger",
    "WAWebEventsCreateEventModalFlowLoadable",
    "WAWebFrontendChatGetters",
    "WAWebGroupAdminEventGroupPicker.react",
    "WAWebGroupAdminNavigationAction",
    "WAWebLimitSharingGatingUtils",
    "WAWebModalManager",
    "WAWebPrepareMessageSendingAction",
    "WAWebSharableEventGatingUtils",
    "WDSDialogBridge",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react"));
    function d() {
      return (
        !o("WAWebSharableEventGatingUtils").isSharableEventCreationEnabled(
          o("WAWebSharableEventGatingUtils").SharableEventCreationEntryPoint
            .GroupChatAttachmentTray,
        ) || o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabled()
      );
    }
    function m(t) {
      o("WDSDialogBridge").openWDSDialog(
        c.jsx(r("WAWebGroupAdminEventGroupPicker.react"), {
          chats: t
            .filter(function (e) {
              return (
                e.canSend &&
                !o("WAWebLimitSharingGatingUtils").isChatAcp2Restricted(e)
              );
            })
            .sort(function (e, t) {
              return o("WAWebFrontendChatGetters")
                .getFormattedTitle(e)
                .localeCompare(
                  o("WAWebFrontendChatGetters").getFormattedTitle(t),
                );
            }),
          onDismiss: o("WDSDialogBridge").closeWDSDialog,
          onPick: function (n) {
            (o("WDSDialogBridge").closeWDSDialog(),
              p(n).catch(function (t) {
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "openCreateAdminGroupEvent: opening the create event flow failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t))
                  .sendLogs("group-admin-create-event-open-failed");
              }));
          },
        }),
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebGroupAdminNavigationAction",
          ).openChatFromGroupAdminConsole(e);
          t &&
            (o("WAWebModalManager").ModalManager.open(
              c.jsx(
                o("WAWebEventsCreateEventModalFlowLoadable")
                  .EventsCreateEventModalFlowLoadable,
                { preselectedChat: e },
              ),
              { blockClose: !0 },
            ),
            o("WAWebPrepareMessageSendingAction")
              .prepareChatForMessageSending(e)
              .catch(function (e) {
                o("WALogger")
                  .WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "openCreateAdminGroupEvent: preparing the chat for sending failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e));
              }));
        })),
        _.apply(this, arguments)
      );
    }
    ((l.canCreateAdminGroupEvents = d), (l.openCreateAdminGroupEvent = m));
  },
  98,
);
