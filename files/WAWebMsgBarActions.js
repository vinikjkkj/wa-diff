__d(
  "WAWebMsgBarActions",
  [
    "WAWebABPropsSaga",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebContactFormWrapper.react",
    "WAWebContactsModalLoadable",
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
        r = function (t) {
          (n(t.id), o("WAWebModalManager").ModalManager.close());
        },
        a = e.participants.getAdmins();
      if (a.length === 1) {
        n(a[0].id);
        return;
      }
      var i = a.map(function (e) {
        return e.contact;
      });
      o("WAWebModalManager").ModalManager.open(
        s.jsx(o("WAWebContactsModalLoadable").WAWebContactsModalLoadable, {
          title: t,
          contacts: i,
          onCancel: o("WAWebModalManager").closeModalManager,
          onSelect: r,
        }),
      );
    }
    ((l.handleContactUs = d), (l.handleMsgAdmin = m));
  },
  98,
);
