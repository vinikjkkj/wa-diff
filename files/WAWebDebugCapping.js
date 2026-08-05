__d(
  "WAWebDebugCapping",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebIndividualNewChatMessageCappedModalLoadable.react",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = function () {
        o("WAWebModalManager").ModalManager.open(
          u.jsx(
            o("WAWebIndividualNewChatMessageCappedModalLoadable.react")
              .IndividualNewChatMessageCappedModalLoadable,
            {},
          ),
        );
      };
      o("WAWebModalManager").ModalManager.open(
        u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          onOK: o("WAWebModalManager").closeModalManager,
          cancelText: s._(/*BTDS*/ "Learn more"),
          onCancel: e,
          children: s._(
            /*BTDS*/ "Your message couldn't be sent because you've reached your monthly limit of new chats.",
          ),
        }),
        { transition: "modal-flow" },
      );
    }
    ((c.doc = "Opens the Nack Popup"), (c.paramsToExecute = []));
    function d() {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          onOK: o("WAWebModalManager").closeModalManager,
          children: s._(
            /*BTDS*/ "Your message couldn't be sent because you've reached your monthly limit of new chats. Click to learn more.",
          ),
        }),
        { transition: "modal-flow" },
      );
    }
    ((d.doc = "Opens the Nack on focus message in modal"),
      (d.paramsToExecute = []));
    var m = {
      openNewChatMsgNackModal: c,
      openNewChatMsgNackIconOnFocusMessageInModal: d,
    };
    l.default = m;
  },
  226,
);
