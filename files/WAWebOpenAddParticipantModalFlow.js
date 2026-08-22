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
    "WAWebGroupMetadataTypeUtils",
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
        _ = o("WAWebStateUtils").unproxy(a),
        f = o("WAWebMiscGatingUtils").getGroupSizeLimit(
          o("WAWebGroupMetadataTypeUtils").getGroupTypeForMetadata(_),
        ),
        g = o("WAWebWidFactory").asGroupWidOrThrow(t.id),
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
      if ((_ == null ? void 0 : _.participants.length) >= f) {
        var C = s._(/*BTDS*/ "Can't add more than {max} members", [
          s._param("max", f),
        ]);
        o("WAWebToastManager").ToastManager.open(
          u.jsx(o("WAWebToast.react").Toast, { msg: C, id: c }),
        );
      } else {
        var b = u.jsx(
          r("WAWebAddGroupParticipantGroupHistoryContextProvider.react"),
          {
            chat: t,
            enterFlowTimestamp: h,
            messageCountPromise: y,
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
        o("WAWebModalManager").ModalManager.open(b, {
          transition: "modal-flow",
        });
      }
    }
    l.openAddParticipantModalFlow = d;
  },
  226,
);
