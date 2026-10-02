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
        l = t.onBack,
        u = t.reopenAddGroupFlowCallback,
        m = o("WAWebMiscGatingUtils").getGroupSizeLimit(
          o("WAWebGroupMetadataTypeUtils").getGroupTypeForMetadata(i),
        ),
        p = o("WAWebWidFactory").asGroupWidOrThrow(n.id),
        _ = o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled(p)
          ? o("WATimeUtils").unixTime()
          : null,
        f =
          _ != null
            ? o(
                "WAWebGetGroupHistoryBundleMessagesCount",
              ).getGroupHistoryBundleMessageCount({
                groupWid: p,
                targetStartMessageTime: _,
              })
            : null;
      if (
        (f != null &&
          f
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
        (i == null ? void 0 : i.participants.length) >= m)
      ) {
        var g = s._(/*BTDS*/ "Can't add more than {max} members", [
          s._param("max", m),
        ]);
        o("WAWebToastManager").ToastManager.open(
          c.jsx(o("WAWebToast.react").Toast, { msg: g, id: d }),
        );
      } else {
        var h = c.jsx(
          r("WAWebAddGroupParticipantGroupHistoryContextProvider.react"),
          {
            chat: n,
            enterFlowTimestamp: _,
            messageCountPromise: f,
            children: c.jsx(r("WAWebAddGroupParticipantFlow.react"), {
              chat: o("WAWebStateUtils").unproxy(n),
              communityName: a,
              onBack: l,
              reopenAddGroupFlowCallback: u,
            }),
          },
        );
        o("WAWebModalManager").ModalManager.open(h, {
          transition: "modal-flow",
        });
      }
    }
    l.openAddParticipantModalFlow = m;
  },
  226,
);
