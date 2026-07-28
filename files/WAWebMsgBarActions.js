__d(
  "WAWebMsgBarActions",
  [
    "WAWebABPropsSaga",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebContactFormWrapper.react",
    "WAWebContactsModal.react",
    "WAWebFindChatAction",
    "WAWebModalManager",
    "WAWebSupportAiSessionWamEvent",
    "WAWebSuspendedGroupUtils",
    "WAWebWamEnumSupportAiEventType",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = function () {},
      c = function (t) {};
    function d(e) {
      (o("WAWebModalManager").ModalManager.close(),
        o("WAWebABPropsSaga").getIsSagaV1Enabled() &&
          new (o("WAWebSupportAiSessionWamEvent").SupportAiSessionWamEvent)({
            supportAiEventType: o("WAWebWamEnumSupportAiEventType")
              .SUPPORT_AI_EVENT_TYPE.CONTACT_US_CLICKED,
          }).commit(),
        o("WAWebModalManager").ModalManager.open(
          s.jsx(r("WAWebContactFormWrapper.react"), {
            onCancel: u,
            onSend: c,
            supportTag: o("WAWebSuspendedGroupUtils")
              .SUSPENDED_GROUP_SUPPORT_TAG,
            entityId: e,
          }),
          { transition: "modal-flow" },
        ));
    }
    function m(e, t) {
      var n = function (n) {
          o("WAWebFindChatAction")
            .findOrCreateLatestChat(n, "msgBarActions")
            .then(function (t) {
              var n = t.chat;
              ((n.quotedMsgAdminGroupJid = e.id),
                (n.quotedMsgAdminGroupSubject = null),
                (n.quotedMsgAdminParentGroupJid = null),
                o("WAWebCmd").Cmd.openChatBottom({
                  chat: n,
                  chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                    .MessageAdmin,
                }));
            });
        },
        a = function (t) {
          (n(t.id), o("WAWebModalManager").ModalManager.close());
        },
        i = e.participants.getAdmins();
      if (i.length === 1) {
        n(i[0].id);
        return;
      }
      var l = i.map(function (e) {
        return e.contact;
      });
      o("WAWebModalManager").ModalManager.open(
        s.jsx(r("WAWebContactsModal.react"), {
          title: t,
          contacts: l,
          onCancel: o("WAWebModalManager").closeModalManager,
          onSelect: a,
        }),
      );
    }
    ((l.handleContactUs = d), (l.handleMsgAdmin = m));
  },
  98,
);
