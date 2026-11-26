__d(
  "WAWebOpenAddParticipantModalFlow",
  [
    "fbt",
    "WALogger",
    "WATimeUtils",
    "WAWebActionToast.react",
    "WAWebAddGroupParticipantFlowLoadable.react",
    "WAWebAddGroupParticipantGroupHistoryContextProvider.react",
    "WAWebGetGroupHistoryBundleMessagesCount",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistorySenderUserJourneyLogger",
    "WAWebGroupMetadataTypeUtils",
    "WAWebMiscGatingUtils",
    "WAWebModalManager",
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
        i = t.entryPoint,
        l = t.groupMetadata,
        u = t.onBack,
        m = t.onClosed,
        p = t.reopenAddGroupFlowCallback,
        _ = o("WAWebMiscGatingUtils").getGroupSizeLimit(
          o("WAWebGroupMetadataTypeUtils").getGroupTypeForMetadata(l),
        ),
        f = o("WAWebWidFactory").asGroupWidOrThrow(n.id),
        g = o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled(f)
          ? o("WATimeUtils").unixTime()
          : null,
        h =
          g != null
            ? o(
                "WAWebGetGroupHistoryBundleMessagesCount",
              ).getGroupHistoryBundleMessageCount({
                groupWid: f,
                targetStartMessageTime: g,
              })
            : null;
      if (
        (h != null &&
          h
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
        (l == null ? void 0 : l.participants.length) >= _)
      ) {
        var y = s._(/*BTDS*/ "", [s._param("max", _)]);
        o("WAWebToastManager").ToastManager.open(
          c.jsx(o("WAWebToast.react").Toast, { msg: y, id: d }),
        );
      } else {
        var C = c.jsx(
          r("WAWebAddGroupParticipantGroupHistoryContextProvider.react"),
          {
            chatId: n.id,
            enterFlowTimestamp: g,
            messageCountPromise: h,
            children: c.jsx(r("WAWebAddGroupParticipantFlowLoadable.react"), {
              chatId: n.id,
              communityName: a,
              entryPoint: i,
              onBack: u,
              onClosed: m,
              reopenAddGroupFlowCallback: p,
            }),
          },
        );
        o("WAWebModalManager").ModalManager.open(C, {
          transition: "modal-flow",
        });
      }
    }
    l.openAddParticipantModalFlow = m;
  },
  226,
);
