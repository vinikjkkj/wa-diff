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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.displayType;
      o("WAWebIndividualNewChatMessageCappingLogEvents").logView(
        o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CHAT_THREAD_CAPPED_COMPOSE_BLOCKER,
        JSON.stringify(
          o(
            "WAWebIndividualNewChatMessageCappingLimitUtils",
          ).getCappingData() || {},
        ),
      );
      var a = d,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = function () {
            (o("WAWebIndividualNewChatMessageCappingLogEvents").logClick(
              o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .CHAT_THREAD_CAPPED_COMPOSE_BLOCKER,
              "learn_more",
            ),
              o("WAWebModalManager").ModalManager.open(
                u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                  onOK: o("WAWebModalManager").closeModalManager,
                  cancelText: s._(/*BTDS*/ "Learn More"),
                  onCancel: a,
                  children: s._(
                    /*BTDS*/ "Your message couldn\u2019t send because you\u2019ve reached your monthly limit of new chat messages.",
                  ),
                }),
                { transition: "modal-flow" },
              ));
          }),
          (t[0] = i))
        : (i = t[0]);
      var l = i,
        c;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s._(
            /*BTDS*/ "Your message couldn\u2019t send because you\u2019ve reached your monthly limit of new chat messages. Click to learn more.",
          )),
          (t[1] = c))
        : (c = t[1]);
      var m = c,
        p;
      return (
        t[2] !== n
          ? ((p = u.jsx(r("WAWebFailIcon.react"), {
              displayType: n,
              tooltip: m,
              ariaLabel: m,
              onClick: l,
            })),
            (t[2] = n),
            (t[3] = p))
          : (p = t[3]),
        p
      );
    }
    function d() {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(
          o("WAWebIndividualNewChatMessageCappedModalLoadable.react")
            .IndividualNewChatMessageCappedModalLoadable,
          {},
        ),
      );
    }
    l.default = c;
  },
  226,
);
