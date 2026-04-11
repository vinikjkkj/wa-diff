__d(
  "WAWebOpenAddParticipantModalFlow",
  [
    "fbt",
    "WATimeUtils",
    "WAWebActionToast.react",
    "WAWebAddGroupParticipantFlow.react",
    "WAWebAddGroupParticipantGroupHistoryContextProvider.react",
    "WAWebGetGroupHistoryBundleMessagesCount",
    "WAWebGroupHistoryGating",
    "WAWebMiscGatingUtils",
    "WAWebModalManager",
    "WAWebStateUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWidFactory",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = o("WAWebActionToast.react").genId("max_participant_toast");
    function d(e) {
      var t = e.chat,
        n = e.communityName,
        a = e.groupMetadata,
        i = e.handleClearSelectedContacts,
        l = e.onBack,
        d = e.reopenAddGroupFlowCallback,
        m = e.selectedContactsMap,
        p = e.updateSelectedContactsState,
        _ = o("WAWebMiscGatingUtils").getGroupSizeLimit(a.groupType),
        f = o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled()
          ? o("WATimeUtils").unixTime()
          : null,
        g =
          f != null
            ? o(
                "WAWebGetGroupHistoryBundleMessagesCount",
              ).getGroupHistoryBundleMessageCount({
                groupWid: o("WAWebWidFactory").asGroupWidOrThrow(t.id),
                enterFlowTimestamp: f,
              })
            : null;
      if ((a == null ? void 0 : a.participants.length) >= _) {
        var h = s._(/*BTDS*/ "Can't add more than {max} members", [
          s._param("max", _),
        ]);
        o("WAWebToastManager").ToastManager.open(
          u.jsx(o("WAWebToast.react").Toast, { msg: h, id: c }),
        );
      } else {
        var y = u.jsx(
          r("WAWebAddGroupParticipantGroupHistoryContextProvider.react"),
          {
            chat: t,
            enterFlowTimestamp: f,
            messageCountPromise: g,
            children: u.jsx(r("WAWebAddGroupParticipantFlow.react"), {
              chat: o("WAWebStateUtils").unproxy(t),
              communityName: n,
              onBack: l,
              selectedContactsMap: m,
              updateSelectedContactsState: p,
              reopenAddGroupFlowCallback: d,
              handleClearSelectedContacts: i,
            }),
          },
        );
        o("WAWebModalManager").ModalManager.open(y, {
          transition: "modal-flow",
        });
      }
    }
    l.openAddParticipantModalFlow = d;
  },
  226,
);
