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
          cancelText: s._(/*BTDS*/ "Learn More"),
          onCancel: e,
          children: s._(
            /*BTDS*/ "Your message couldn\u2019t send because you\u2019ve reached your monthly limit of new chat messages.",
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
            /*BTDS*/ "Your message couldn\u2019t send because you\u2019ve reached your monthly limit of new chat messages. Click to learn more.",
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
