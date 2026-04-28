__d(
  "WAWebBlockedParticipantCallWarning",
  [
    "fbt",
    "WAWebBlockWarningGatingUtils",
    "WAWebBlockedParticipantWarningAction",
    "WAWebConfirmPopup.react",
    "WAWebFbtIntlList",
    "WAWebFrontendContactGetters",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            !o(
              "WAWebBlockWarningGatingUtils",
            ).isBlockedParticipantCallWarningEnabled()
          )
            return !0;
          var n = o(
            "WAWebBlockedParticipantWarningAction",
          ).getBlockedParticipantsInGroup(e);
          if (n.length === 0) return !0;
          var a = r("WAWebFbtIntlList")(
              n.map(function (e) {
                return o("WAWebFrontendContactGetters").getFormattedShortName(
                  e,
                );
              }),
              r("WAWebFbtIntlList").CONJUNCTIONS.AND,
              r("WAWebFbtIntlList").DELIMITERS.COMMA,
            ),
            i =
              t === "start"
                ? {
                    title: s._(
                      /*BTDS*/ "You're calling a group that includes people you've blocked",
                    ),
                    children: s._(
                      /*BTDS*/ "You've blocked {blocked contact names}. Calling this group means they'll be able to see and hear you on the call.",
                      [s._param("blocked contact names", a)],
                    ),
                    okText: s._(/*BTDS*/ "Start call"),
                    cancelText: s._(/*BTDS*/ "Cancel"),
                    tsNavigationData: {
                      surface: "unknown",
                      viewName: "blocked-participant-start-warning",
                    },
                  }
                : {
                    title: s._(
                      /*BTDS*/ "This call includes people you've blocked",
                    ),
                    children: s._(
                      /*BTDS*/ "You've blocked {blocked contact names}. They may already be on this call or could join later. They'll be able to see and hear you.",
                      [s._param("blocked contact names", a)],
                    ),
                    okText: s._(/*BTDS*/ "Join call"),
                    cancelText: s._(/*BTDS*/ "Decline"),
                    tsNavigationData: {
                      surface: "unknown",
                      viewName: "blocked-participant-join-warning",
                    },
                  };
          return o("WAWebConfirmPopup.react").waitForConfirmPopup(i);
        })),
        u.apply(this, arguments)
      );
    }
    l.maybeShowBlockedParticipantCallWarning = e;
  },
  226,
);
