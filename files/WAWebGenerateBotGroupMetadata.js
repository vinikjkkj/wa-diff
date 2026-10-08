__d(
  "WAWebGenerateBotGroupMetadata",
  ["WAWebBotGroupGatingUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e == null
        ? t != null
          ? t
          : void 0
        : t == null
          ? e
          : babelHelpers.extends({}, e, t);
    }
    function s(t, n) {
      var r, o, a;
      if (n.length === 0) return t;
      var i = (r = t.messageContextInfo) == null ? void 0 : r.botMetadata,
        l =
          (o =
            i == null || (a = i.botGroupMetadata) == null
              ? void 0
              : a.participantsMetadata) != null
            ? o
            : [],
        s = [],
        u = new Set();
      return (
        l.forEach(function (e) {
          var t = e.botFbid;
          t != null && t !== "" && !u.has(t) && (s.push(e), u.add(t));
        }),
        n.forEach(function (e) {
          e.user !== "" &&
            !u.has(e.user) &&
            (s.push({ botFbid: e.user }), u.add(e.user));
        }),
        s.length === 0
          ? t
          : babelHelpers.extends({}, t, {
              messageContextInfo: babelHelpers.extends(
                {},
                t.messageContextInfo,
                {
                  botMetadata: e(i, {
                    botGroupMetadata: { participantsMetadata: s },
                  }),
                },
              ),
            })
      );
    }
    function u(e) {
      if (
        !(
          e == null ||
          !o("WAWebBotGroupGatingUtils").isGroupBotParticipantEnabled(e)
        )
      )
        return { participantsMetadata: [{ botFbid: e.user }] };
    }
    ((l.mergeBotMetadata = e),
      (l.addGroupAgentBotMetadata = s),
      (l.generateBotGroupMetadata = u));
  },
  98,
);
