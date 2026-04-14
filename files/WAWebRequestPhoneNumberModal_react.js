__d(
  "WAWebRequestPhoneNumberModal.react",
  [
    "fbt",
    "WAWebChatCollection",
    "WAWebConfirmPopup.react",
    "WAWebLogRequestPhoneNumber",
    "WAWebModalManager",
    "WAWebSendRequestPhoneNumberChatAction",
    "WAWebStateUtils",
    "WAWebWamEnumPnhActionType",
    "WAWebWamEnumPnhChatTypeType",
    "WAWebWamEnumPnhMessageChatParty",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect;
    function d(e) {
      var t = e.entryPoint,
        n = o("WAWebChatCollection").ChatCollection.getActive();
      c(
        function () {
          t &&
            o("WAWebLogRequestPhoneNumber").logPnhRequestRevealActionHelper(
              o("WAWebWamEnumPnhChatTypeType").PNH_CHAT_TYPE_TYPE.CTWA,
              o("WAWebWamEnumPnhMessageChatParty").PNH_MESSAGE_CHAT_PARTY.BIZ,
              o("WAWebWamEnumPnhActionType").PNH_ACTION_TYPE
                .REQUEST_DIALOG_APPEAR,
              t,
            );
        },
        [t],
      );
      var r = function () {
          (n &&
            (o("WAWebSendRequestPhoneNumberChatAction").sendRequestPhoneNumber(
              o("WAWebStateUtils").unproxy(n),
            ),
            t != null &&
              o("WAWebLogRequestPhoneNumber").logPnhRequestRevealActionHelper(
                o("WAWebWamEnumPnhChatTypeType").PNH_CHAT_TYPE_TYPE.CTWA,
                o("WAWebWamEnumPnhMessageChatParty").PNH_MESSAGE_CHAT_PARTY.BIZ,
                o("WAWebWamEnumPnhActionType").PNH_ACTION_TYPE.SEND_REQUEST,
                t,
              )),
            o("WAWebModalManager").ModalManager.close());
        },
        a = function () {
          return o("WAWebModalManager").ModalManager.close();
        },
        i = s._(/*BTDS*/ "Request phone number?"),
        l = s._(
          /*BTDS*/ "This person's phone number is not shared in this chat. You can request for their phone number if you'd like to save them to your contacts.",
        ),
        d = s._(/*BTDS*/ "Send request"),
        m = s._(/*BTDS*/ "Cancel");
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "request-phone-number",
        },
        onOK: r,
        okText: d,
        onCancel: a,
        cancelText: m,
        title: i,
        children: l,
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
