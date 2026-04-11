__d(
  "WAWebBlockContactUtils",
  [
    "fbt",
    "WALogger",
    "WAWebApiContact",
    "WAWebBlockBusinessPopup.react",
    "WAWebBlockContactAction",
    "WAWebBlockContactPopup.react",
    "WAWebBlocklistMigration",
    "WAWebBlocklistUtils",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebLidMigrationUtils",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebPsaBlockContactPopup.react",
    "WAWebSendSpamChatAction",
    "WAWebStateUtils",
    "WAWebUsernameWorkerCompatibleGatingUtils",
    "WAWebWamChatPSALogger",
    "WAWebWidDevTools",
    "WAWebWidFactory",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react"));
    function m(t, n) {
      if (
        !o("WAWebBlocklistMigration").isBlocklistMigrated() ||
        !o("WAWebLidMigrationUtils").shouldHaveAccountLid(t.id)
      )
        return t;
      !t.id.isLid() &&
        o("WAWebUsernameWorkerCompatibleGatingUtils").onlyShowLidContacts() &&
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[blocklist] non-lid contact display in a contact picker",
              ])),
          )
          .sendLogs("pn-contact-in-contact-picker");
      var r = t.getCurrentLidContact();
      if (r == null) {
        var a = o("WAWebApiContact").getCurrentLid(
            o("WAWebWidFactory").asUserWidOrThrow(t.id),
          ),
          i = a == null ? null : o("WAWebWidDevTools").isWidClientAssigned(a);
        return (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[blocklist] no lid contact entryPoint=",
                  " id=",
                  " lid=",
                  " fake=",
                  "",
                ])),
              n,
              t.id.toLogString(),
              a == null ? void 0 : a.toLogString(),
              i,
            )
            .sendLogs("blocklist-contact-no-lid"),
          t
        );
      }
      return r;
    }
    function p(e, t) {
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
        s = d.jsx(r("WAWebBlockContactPopup.react"), {
          contact: e.contact,
          isReportPreChecked: o(
            "WAWebBlocklistUtils",
          ).isReportPreCheckedForOneToOneChats(t),
          onCancel: o("WAWebModalManager").closeModalManager,
          onBlock: i,
          onReportSpamBlock: l,
        });
      (o("WAWebChatGetters").getIsPSA(e)
        ? (s = d.jsx(r("WAWebPsaBlockContactPopup.react"), {
            onCancel: o("WAWebModalManager").closeModalManager,
            onBlock: i,
          }))
        : e.contact.isBusiness &&
          (s = d.jsx(r("WAWebBlockBusinessPopup.react"), {
            chat: e,
            blockEntryPoint: t,
            withReport: !0,
          })),
        o("WAWebModalManager").ModalManager.open(s));
    }
    function _(e, t) {
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
        a = d.jsx(o("WAWebName.react").Name, { contact: e });
      o("WAWebModalManager").ModalManager.open(
        d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          okText: r("WAWebFbtCommon")("Unblock"),
          onOK: n,
          onCancel: o("WAWebModalManager").closeModalManager,
          title: s._(/*BTDS*/ "Unblock {contact_name}?", [
            s._param("contact_name", a),
          ]),
        }),
      );
    }
    ((l.getContactToBlockOnlyUseIfNoAssociatedChat = m),
      (l.handleBlock = p),
      (l.handleUnblock = _));
  },
  226,
);
