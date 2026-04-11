__d(
  "WAWebMsgBarActions",
  [
    "WAWebABPropsSaga",
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
      c = function (t) {},
      d = function (t) {
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
              entityId: t,
            }),
            { transition: "modal-flow" },
          ));
      },
      m = function (t, n) {
        var e = function (n) {
            o("WAWebFindChatAction")
              .findOrCreateLatestChat(n, "msgBarActions")
              .then(function (e) {
                var n = e.chat;
                ((n.quotedMsgAdminGroupJid = t.id),
                  (n.quotedMsgAdminGroupSubject = null),
                  (n.quotedMsgAdminParentGroupJid = null),
                  o("WAWebCmd").Cmd.openChatBottom({ chat: n }));
              });
          },
          a = function (n) {
            (e(n.id), o("WAWebModalManager").ModalManager.close());
          },
          i = t.participants.getAdmins();
        if (i.length === 1) {
          e(i[0].id);
          return;
        }
        var l = i.map(function (e) {
          return e.contact;
        });
        o("WAWebModalManager").ModalManager.open(
          s.jsx(r("WAWebContactsModal.react"), {
            title: n,
            contacts: l,
            onCancel: o("WAWebModalManager").closeModalManager,
            onSelect: a,
          }),
        );
      };
    ((l.handleContactUs = d), (l.handleMsgAdmin = m));
  },
  98,
);
