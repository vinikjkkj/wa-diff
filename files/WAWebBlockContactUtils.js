__d(
  "WAWebBlockContactUtils",
  [
    "WAWebABProps",
    "WAWebBlockBusinessDialogV2.react",
    "WAWebBlockBusinessPopup.react",
    "WAWebBlockContactAction",
    "WAWebBlockContactDialogV2.react",
    "WAWebBlockContactPopup.react",
    "WAWebBlocklistUtils",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebPsaBlockContactPopup.react",
    "WAWebSendSpamChatAction",
    "WAWebSmb1pdConversionSignalAction",
    "WAWebStateUtils",
    "WAWebUnblockContactDialogV2.react",
    "WAWebWamChatPSALogger",
    "WDSDialogBridge",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      var n = e.contact,
        a = o("WAWebBlocklistUtils").getSpamFlowFromBlockEntryPoint(t),
        i = function () {
          if (e != null && o("WAWebChatGetters").getIsPSA(e)) {
            var r = e.msgs.last(),
              a = o(
                "WAWebBlocklistUtils",
              ).getBlockPsaRemoveEntryPointFromBlockEntryPoint(t);
            a != null && o("WAWebWamChatPSALogger").logChatPSARemove(r, 1, a);
          }
          (o("WAWebBlockContactAction").blockContact({
            contact: n,
            blockEntryPoint: t,
          }),
            o("WAWebModalManager").ModalManager.close());
        },
        l = function () {
          (o("WAWebSendSpamChatAction").sendReport({
            chat: o("WAWebStateUtils").unproxy(e),
            spamFlow: a,
            skipCtwa1pdNbfSignal: !0,
          }),
            o("WAWebBlockContactAction")
              .blockContact({
                contact: n,
                blockEntryPoint: t,
                skipCtwa1pdNbfSignal: !0,
              })
              .then(function () {
                return o(
                  "WAWebSmb1pdConversionSignalAction",
                ).log1pdBlockAndReportConversionSignal(e);
              })
              .catch(r("WAWebNoop")),
            o("WAWebModalManager").ModalManager.close());
        },
        u =
          o("WAWebABProps").getABPropConfigValue("wds_web_dialog") &&
          !o("WAWebChatGetters").getIsPSA(e),
        c;
      (u && e.contact.isBusiness
        ? (c = s.jsx(r("WAWebBlockBusinessDialogV2.react"), {
            chat: e,
            blockEntryPoint: t,
            withReport: !0,
          }))
        : u
          ? (c = s.jsx(r("WAWebBlockContactDialogV2.react"), {
              contact: e.contact,
              isReportPreChecked: o(
                "WAWebBlocklistUtils",
              ).isReportPreCheckedForOneToOneChats(t),
              onCancel: o("WAWebModalManager").closeModalManager,
              onBlock: i,
              onReportSpamBlock: l,
            }))
          : o("WAWebChatGetters").getIsPSA(e)
            ? (c = s.jsx(r("WAWebPsaBlockContactPopup.react"), {
                onCancel: o("WAWebModalManager").closeModalManager,
                onBlock: i,
              }))
            : e.contact.isBusiness
              ? (c = s.jsx(r("WAWebBlockBusinessPopup.react"), {
                  chat: e,
                  blockEntryPoint: t,
                  withReport: !0,
                }))
              : (c = s.jsx(r("WAWebBlockContactPopup.react"), {
                  contact: e.contact,
                  isReportPreChecked: o(
                    "WAWebBlocklistUtils",
                  ).isReportPreCheckedForOneToOneChats(t),
                  onCancel: o("WAWebModalManager").closeModalManager,
                  onBlock: i,
                  onReportSpamBlock: l,
                })),
        u
          ? o("WDSDialogBridge").openWDSDialog(c)
          : o("WAWebModalManager").ModalManager.open(c));
    }
    function c(e, t) {
      var n = function () {
        var n = o("WAWebChatCollection").ChatCollection.get(e.id);
        if (n != null && o("WAWebChatGetters").getIsPSA(n)) {
          var r = n.msgs.last(),
            a = o(
              "WAWebBlocklistUtils",
            ).getUnblockPsaRemoveEntryPointFromBlockEntryPoint(t);
          a != null && o("WAWebWamChatPSALogger").logChatPSARemove(r, 2, a);
        }
        (o("WAWebBlockContactAction").unblockContact(e, t),
          o("WAWebModalManager").ModalManager.close());
      };
      o("WDSDialogBridge").openWDSDialog(
        s.jsx(r("WAWebUnblockContactDialogV2.react"), {
          contact: e,
          onUnblock: n,
        }),
      );
    }
    ((l.handleBlock = u), (l.handleUnblock = c));
  },
  98,
);
