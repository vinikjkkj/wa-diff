__d(
  "WAWebDebugCapping",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebIndividualNewChatMessageCappedModalLoadable.react",
    "WAWebModalManager",
    "react",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c() {
      r("vulture")("kfQQchqgc6sqB_2fS5DzHI-UK3E=");
      var e = function () {
        (r("vulture")("o8yE1u2Kc2eZfuq6uvsARNP4Lt4="),
          o("WAWebModalManager").ModalManager.open(
            u.jsx(
              o("WAWebIndividualNewChatMessageCappedModalLoadable.react")
                .IndividualNewChatMessageCappedModalLoadable,
              {},
            ),
          ));
      };
      o("WAWebModalManager").ModalManager.open(
        u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          onOK: o("WAWebModalManager").closeModalManager,
          cancelText: s._(/*BTDS*/ ""),
          onCancel: e,
          children: s._(/*BTDS*/ ""),
        }),
        { transition: "modal-flow" },
      );
    }
    ((c.doc = "Opens the Nack Popup"), (c.paramsToExecute = []));
    function d() {
      (r("vulture")("uC85st9OtYtzUYR7ExeG8FighOM="),
        o("WAWebModalManager").ModalManager.open(
          u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
            onOK: o("WAWebModalManager").closeModalManager,
            children: s._(/*BTDS*/ ""),
          }),
          { transition: "modal-flow" },
        ));
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
