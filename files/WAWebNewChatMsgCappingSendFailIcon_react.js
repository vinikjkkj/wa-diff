__d(
  "WAWebNewChatMsgCappingSendFailIcon.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFailIcon.react",
    "WAWebIndividualNewChatMessageCappedModalLoadable.react",
    "WAWebIndividualNewChatMessageCappingLimitUtils",
    "WAWebIndividualNewChatMessageCappingLogEvents",
    "WAWebModalManager",
    "WAWebWamEnumSurfaceType",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.displayType;
      o("WAWebIndividualNewChatMessageCappingLogEvents").logView(
        o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CHAT_THREAD_CAPPED_COMPOSE_BLOCKER,
        JSON.stringify(
          o(
            "WAWebIndividualNewChatMessageCappingLimitUtils",
          ).getCappingData() || {},
        ),
      );
      var n = function () {
          o("WAWebModalManager").ModalManager.open(
            u.jsx(
              o("WAWebIndividualNewChatMessageCappedModalLoadable.react")
                .IndividualNewChatMessageCappedModalLoadable,
              {},
            ),
          );
        },
        a = function () {
          (o("WAWebIndividualNewChatMessageCappingLogEvents").logClick(
            o("WAWebWamEnumSurfaceType").SURFACE_TYPE
              .CHAT_THREAD_CAPPED_COMPOSE_BLOCKER,
            "learn_more",
          ),
            o("WAWebModalManager").ModalManager.open(
              u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                onOK: o("WAWebModalManager").closeModalManager,
                cancelText: s._(/*BTDS*/ "Learn More"),
                onCancel: n,
                children: s._(
                  /*BTDS*/ "Your message couldn\u2019t send because you\u2019ve reached your monthly limit of new chat messages.",
                ),
              }),
              { transition: "modal-flow" },
            ));
        },
        i = s._(
          /*BTDS*/ "Your message couldn\u2019t send because you\u2019ve reached your monthly limit of new chat messages. Click to learn more.",
        );
      return u.jsx(r("WAWebFailIcon.react"), {
        displayType: t,
        tooltip: i,
        ariaLabel: i,
        onClick: a,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
