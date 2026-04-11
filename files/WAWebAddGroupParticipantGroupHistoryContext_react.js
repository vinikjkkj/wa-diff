__d(
  "WAWebAddGroupParticipantGroupHistoryContext.react",
  ["WAWebNoop", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).createContext,
      u = s({
        enterFlowTimestamp: null,
        groupWid: null,
        messageCountPromise: null,
        selectedMessageCount: null,
        setSelectedMessageCount: r("WAWebNoop"),
        shouldSendGroupHistory: !1,
        setShouldSendGroupHistory: r("WAWebNoop"),
        canShareGroupHistory: !1,
      }),
      c = u;
    l.default = c;
  },
  98,
);
