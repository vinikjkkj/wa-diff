__d(
  "WAWebOpenAddParticipantModalFlow",
  [
    "fbt",
    "WALogger",
    "WATimeUtils",
    "WAWebActionToast.react",
    "WAWebAddGroupParticipantFlow.react",
    "WAWebAddGroupParticipantGroupHistoryContextProvider.react",
    "WAWebGetGroupHistoryBundleMessagesCount",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistorySenderUserJourneyLogger",
    "WAWebGroupMetadataTypeUtils",
    "WAWebMiscGatingUtils",
    "WAWebModalManager",
    "WAWebStateUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumTsSurface",
    "WAWebWidFactory",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = o("WAWebActionToast.react").genId("max_participant_toast");
    function m(t) {
      var n = t.chat,
        a = t.communityName,
        i = t.groupMetadata,
        l = t.handleClearSelectedContacts,
        u = t.onBack,
        m = t.reopenAddGroupFlowCallback,
        p = t.selectedContactsMap,
        _ = t.updateSelectedContactsState,
        f = o("WAWebMiscGatingUtils").getGroupSizeLimit(
          o("WAWebGroupMetadataTypeUtils").getGroupTypeForMetadata(i),
        ),
        g = o("WAWebWidFactory").asGroupWidOrThrow(n.id),
        h = o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled(g)
          ? o("WATimeUtils").unixTime()
          : null,
        y =
          h != null
            ? o(
                "WAWebGetGroupHistoryBundleMessagesCount",
              ).getGroupHistoryBundleMessageCount({
                groupWid: g,
                targetStartMessageTime: h,
              })
            : null;
      if (
        (y != null &&
          y
            .then(function (e) {
              return o(
                "WAWebGroupHistorySenderUserJourneyLogger",
              ).GroupHistorySenderUserJourneyLogger.selectableMessagesLoaded({
                groupHistoryMessagesCount: e,
                uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                  .GROUP_MEMBER_ADD_EXISTING_GROUP,
              });
            })
            .catch(function (t) {
              return o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history] add-member selectable message count failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs(
                  "group-history-add-member-selectable-messages-load-failed",
                );
            }),
        (i == null ? void 0 : i.participants.length) >= f)
      ) {
        var C = s._(/*BTDS*/ "Can't add more than {max} members", [
          s._param("max", f),
        ]);
        o("WAWebToastManager").ToastManager.open(
          c.jsx(o("WAWebToast.react").Toast, { msg: C, id: d }),
        );
      } else {
        var b = c.jsx(
          r("WAWebAddGroupParticipantGroupHistoryContextProvider.react"),
          {
            chat: n,
            enterFlowTimestamp: h,
            messageCountPromise: y,
            children: c.jsx(r("WAWebAddGroupParticipantFlow.react"), {
              chat: o("WAWebStateUtils").unproxy(n),
              communityName: a,
              onBack: u,
              selectedContactsMap: p,
              updateSelectedContactsState: _,
              reopenAddGroupFlowCallback: m,
              handleClearSelectedContacts: l,
            }),
          },
        );
        o("WAWebModalManager").ModalManager.open(b, {
          transition: "modal-flow",
        });
      }
    }
    l.openAddParticipantModalFlow = m;
  },
  226,
);
