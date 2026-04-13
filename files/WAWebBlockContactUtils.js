__d(
  "WAWebBlockContactUtils",
  [
    "fbt",
    "WAWebBlockBusinessPopup.react",
    "WAWebBlockContactAction",
    "WAWebBlockContactPopup.react",
    "WAWebBlocklistUtils",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebPsaBlockContactPopup.react",
    "WAWebSendSpamChatAction",
    "WAWebStateUtils",
    "WAWebWamChatPSALogger",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e, t) {
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
          }),
            o("WAWebBlockContactAction").blockContact({
              contact: n,
              blockEntryPoint: t,
            }),
            o("WAWebModalManager").ModalManager.close());
        },
        s = u.jsx(r("WAWebBlockContactPopup.react"), {
          contact: e.contact,
          isReportPreChecked: o(
            "WAWebBlocklistUtils",
          ).isReportPreCheckedForOneToOneChats(t),
          onCancel: o("WAWebModalManager").closeModalManager,
          onBlock: i,
          onReportSpamBlock: l,
        });
      (o("WAWebChatGetters").getIsPSA(e)
        ? (s = u.jsx(r("WAWebPsaBlockContactPopup.react"), {
            onCancel: o("WAWebModalManager").closeModalManager,
            onBlock: i,
          }))
        : e.contact.isBusiness &&
          (s = u.jsx(r("WAWebBlockBusinessPopup.react"), {
            chat: e,
            blockEntryPoint: t,
            withReport: !0,
          })),
        o("WAWebModalManager").ModalManager.open(s));
    }
    function d(e, t) {
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
        },
        a = u.jsx(o("WAWebName.react").Name, { contact: e });
      o("WAWebModalManager").ModalManager.open(
        u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          okText: r("WAWebFbtCommon")("Unblock"),
          onOK: n,
          onCancel: o("WAWebModalManager").closeModalManager,
          title: s._(/*BTDS*/ "Unblock {contact_name}?", [
            s._param("contact_name", a),
          ]),
        }),
      );
    }
    ((l.handleBlock = c), (l.handleUnblock = d));
  },
  226,
);
