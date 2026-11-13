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
    function u(e, t, n) {
      n === void 0 && (n = d);
      var a = e.contact,
        i = o("WAWebBlocklistUtils").getSpamFlowFromBlockEntryPoint(t),
        l = function () {
          if (e != null && o("WAWebChatGetters").getIsPSA(e)) {
            var n = e.msgs.last(),
              r = o(
                "WAWebBlocklistUtils",
              ).getBlockPsaRemoveEntryPointFromBlockEntryPoint(t);
            r != null && o("WAWebWamChatPSALogger").logChatPSARemove(n, 1, r);
          }
          (o("WAWebBlockContactAction").blockContact({
            contact: a,
            blockEntryPoint: t,
          }),
            o("WAWebModalManager").ModalManager.close());
        },
        u = function () {
          (o("WAWebSendSpamChatAction").sendReport({
            chat: o("WAWebStateUtils").unproxy(e),
            spamFlow: i,
            skipCtwa1pdNbfSignal: !0,
          }),
            o("WAWebBlockContactAction")
              .blockContact({
                contact: a,
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
        c =
          o("WAWebABProps").getABPropConfigValue("wds_web_dialog") &&
          !o("WAWebChatGetters").getIsPSA(e),
        m;
      c && e.contact.isBusiness
        ? (m = s.jsx(r("WAWebBlockBusinessDialogV2.react"), {
            chat: e,
            blockEntryPoint: t,
            withReport: !0,
          }))
        : c
          ? (m = s.jsx(r("WAWebBlockContactDialogV2.react"), {
              contact: e.contact,
              isReportPreChecked: o(
                "WAWebBlocklistUtils",
              ).isReportPreCheckedForOneToOneChats(t),
              onCancel: o("WAWebModalManager").closeModalManager,
              onBlock: l,
              onReportSpamBlock: u,
            }))
          : o("WAWebChatGetters").getIsPSA(e)
            ? (m = s.jsx(r("WAWebPsaBlockContactPopup.react"), {
                onCancel: o("WAWebModalManager").closeModalManager,
                onBlock: l,
              }))
            : e.contact.isBusiness
              ? (m = s.jsx(r("WAWebBlockBusinessPopup.react"), {
                  chat: e,
                  blockEntryPoint: t,
                  withReport: !0,
                }))
              : (m = s.jsx(r("WAWebBlockContactPopup.react"), {
                  contact: e.contact,
                  isReportPreChecked: o(
                    "WAWebBlocklistUtils",
                  ).isReportPreCheckedForOneToOneChats(t),
                  onCancel: o("WAWebModalManager").closeModalManager,
                  onBlock: l,
                  onReportSpamBlock: u,
                }));
      var p = n(m);
      c
        ? o("WDSDialogBridge").openWDSDialog(p)
        : o("WAWebModalManager").ModalManager.open(p);
    }
    function c(e, t, n) {
      n === void 0 && (n = d);
      var a = function () {
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
        },
        i = s.jsx(r("WAWebUnblockContactDialogV2.react"), {
          contact: e,
          onUnblock: a,
        });
      o("WDSDialogBridge").openWDSDialog(n(i));
    }
    function d(e) {
      return e;
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.handleBlock = u),
      (l.handleUnblock = c));
  },
  98,
);
