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
        i = t.entryPoint,
        l = t.groupMetadata,
        u = t.onBack,
        m = t.reopenAddGroupFlowCallback,
        p = o("WAWebMiscGatingUtils").getGroupSizeLimit(
          o("WAWebGroupMetadataTypeUtils").getGroupTypeForMetadata(l),
        ),
        _ = o("WAWebWidFactory").asGroupWidOrThrow(n.id),
        f = o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled(_)
          ? o("WATimeUtils").unixTime()
          : null,
        g =
          f != null
            ? o(
                "WAWebGetGroupHistoryBundleMessagesCount",
              ).getGroupHistoryBundleMessageCount({
                groupWid: _,
                targetStartMessageTime: f,
              })
            : null;
      if (
        (g != null &&
          g
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
        (l == null ? void 0 : l.participants.length) >= p)
      ) {
        var h = s._(/*BTDS*/ "Can't add more than {max} members", [
          s._param("max", p),
        ]);
        o("WAWebToastManager").ToastManager.open(
          c.jsx(o("WAWebToast.react").Toast, { msg: h, id: d }),
        );
      } else {
        var y = c.jsx(
          r("WAWebAddGroupParticipantGroupHistoryContextProvider.react"),
          {
            chatId: n.id,
            enterFlowTimestamp: f,
            messageCountPromise: g,
            children: c.jsx(r("WAWebAddGroupParticipantFlow.react"), {
              chat: o("WAWebStateUtils").unproxy(n),
              communityName: a,
              entryPoint: i,
              onBack: u,
              reopenAddGroupFlowCallback: m,
            }),
          },
        );
        o("WAWebModalManager").ModalManager.open(y, {
          transition: "modal-flow",
        });
      }
    }
    l.openAddParticipantModalFlow = m;
  },
  226,
);
