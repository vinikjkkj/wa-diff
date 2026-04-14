__d(
  "WAWebAddGroupParticipantGroupHistoryContextProvider.react",
  [
    "WAWebAddGroupParticipantGroupHistoryContext.react",
    "WAWebGroupHistoryShareMode",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useMemo,
      m = u.useState;
    function p(e) {
      var t,
        n = e.chat,
        a = e.children,
        i = e.enterFlowTimestamp,
        l = e.messageCountPromise,
        u = m(null),
        p = u[0],
        _ = u[1],
        f = m(!1),
        g = f[0],
        h = f[1],
        y = o("useWAWebModelValues").useModelValues(n, ["groupMetadata"]),
        C = y.groupMetadata,
        b = o("useWAWebModelValues").useOptionalModelValues(C, [
          "memberShareGroupHistoryMode",
          "participants",
        ]),
        v = c(
          function (e) {
            _(e);
          },
          [_],
        ),
        S = c(
          function (e) {
            h(e);
          },
          [h],
        ),
        R =
          (b == null || (t = b.participants) == null ? void 0 : t.iAmAdmin()) ||
          (b == null ? void 0 : b.memberShareGroupHistoryMode) ===
            o("WAWebGroupHistoryShareMode").MemberShareGroupHistoryMode
              .ALL_MEMBER_SHARE,
        L = d(
          function () {
            return {
              enterFlowTimestamp: i,
              groupWid: n.id,
              messageCountPromise: l,
              selectedMessageCount: p,
              setSelectedMessageCount: v,
              shouldSendGroupHistory: g,
              setShouldSendGroupHistory: S,
              canShareGroupHistory: R,
            };
          },
          [n.id, i, l, p, v, g, S, R],
        );
      return s.jsx(r("WAWebAddGroupParticipantGroupHistoryContext.react"), {
        value: L,
        children: a,
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
