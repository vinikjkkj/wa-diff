__d(
  "WAWebIndividualNewChatCappedComposeBar.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebIndividualNewChatMessageCappedModalLoadable.react",
    "WAWebIndividualNewChatMessageCappingLimitUtils",
    "WAWebIndividualNewChatMessageCappingLogEvents",
    "WAWebModalManager",
    "WAWebText.react",
    "WAWebWamEnumSurfaceType",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = { container: { width: "xh8yej3", $$css: !0 } };
    function d() {
      var e = o("react-compiler-runtime").c(2);
      o("WAWebIndividualNewChatMessageCappingLogEvents").logView(
        o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CHAT_THREAD_CAPPED_COMPOSE_BLOCKER,
        JSON.stringify(
          o(
            "WAWebIndividualNewChatMessageCappingLimitUtils",
          ).getCappingData() || {},
        ),
        o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD,
      );
      var t = m,
        n;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = s._(
            /*BTDS*/ "You've reached the monthly limit on new chats you can start. {=m2}",
            [
              s._implicitParam(
                "=m2",
                u.jsx(o("WAWebText.react").WAWebClickableText, {
                  onClick: t,
                  color: "primary",
                  children: s._(/*BTDS*/ "{=m1}", [
                    s._implicitParam(
                      "=m1",
                      u.jsx(r("WDSText.react"), {
                        type: "Body2Emphasized",
                        colorName: "contentActionEmphasized",
                        children: s._(/*BTDS*/ "See details"),
                      }),
                    ),
                  ]),
                }),
              ),
            ],
          )),
          (e[0] = n))
        : (n = e[0]);
      var a = n,
        i;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = u.jsx(o("WAWebFlex.react").FlexRow, {
              testid: void 0,
              justify: "center",
              align: "center",
              xstyle: c.container,
              children: u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                children: a,
              }),
            })),
            (e[1] = i))
          : (i = e[1]),
        i
      );
    }
    function m() {
      (o("WAWebIndividualNewChatMessageCappingLogEvents").logClick(
        o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT,
        "learn_more",
        JSON.stringify(
          o(
            "WAWebIndividualNewChatMessageCappingLimitUtils",
          ).getCappingData() || {},
        ),
      ),
        o("WAWebModalManager").ModalManager.open(
          u.jsx(
            o("WAWebIndividualNewChatMessageCappedModalLoadable.react")
              .IndividualNewChatMessageCappedModalLoadable,
            {},
          ),
        ));
    }
    l.IndividualNewChatMessageCappedComposeBar = d;
  },
  226,
);
