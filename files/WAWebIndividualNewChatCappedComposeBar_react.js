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
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = { container: { width: "xh8yej3", $$css: !0 } };
    function d() {
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
      var e = function () {
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
        },
        t = s._(
          /*BTDS*/ "You've reached the monthly limit on new chats you can start. {=m2}",
          [
            s._implicitParam(
              "=m2",
              u.jsx(o("WAWebText.react").WAWebClickableText, {
                onClick: e,
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
        );
      return u.jsx(o("WAWebFlex.react").FlexRow, {
        testid: void 0,
        justify: "center",
        align: "center",
        xstyle: c.container,
        children: u.jsx(r("WDSText.react"), {
          type: "Body2",
          colorName: "contentDeemphasized",
          children: t,
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.IndividualNewChatMessageCappedComposeBar = d));
  },
  226,
);
