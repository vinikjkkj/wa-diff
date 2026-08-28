__d(
  "MAIBAMessageContext",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useContext,
      m = u.useMemo,
      p = function () {},
      _ = Object.freeze([]),
      f = {
        hasUserSkippedPlan: !1,
        isMultiCampaignPlan: !1,
        isSkipFullAnalysisButtonVisible: !1,
        lastShownProgressUpdate: null,
        onUserSkipPlanMode: p,
        progressUpdates: _,
        setLastShownProgressUpdate: p,
      },
      g = {
        botRequestId: null,
        botResponseId: null,
        externalConversationId: null,
        isFromHistory: !1,
        isStreaming: !1,
        messageIndex: null,
        offlineThreadingId: null,
        plannerContext: f,
        rowIndexFromBottom: null,
        streamingState: null,
      },
      h = c(g);
    function y(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.botRequestId,
        r = e.botResponseId,
        a = e.children,
        i = e.externalConversationId,
        l = e.isFromHistory,
        u = e.isStreaming,
        c = e.messageIndex,
        d = e.offlineThreadingId,
        m = e.plannerContext,
        p = e.rowIndexFromBottom,
        _ = e.streamingState,
        g = l === void 0 ? !1 : l,
        y = u === void 0 ? !1 : u,
        C = m === void 0 ? f : m,
        b = _ === void 0 ? null : _,
        v;
      t[0] !== n ||
      t[1] !== r ||
      t[2] !== i ||
      t[3] !== g ||
      t[4] !== y ||
      t[5] !== c ||
      t[6] !== d ||
      t[7] !== C ||
      t[8] !== p ||
      t[9] !== b
        ? ((v = {
            botRequestId: n,
            botResponseId: r,
            externalConversationId: i,
            isFromHistory: g,
            isStreaming: y,
            messageIndex: c,
            offlineThreadingId: d,
            plannerContext: C,
            rowIndexFromBottom: p,
            streamingState: b,
          }),
          (t[0] = n),
          (t[1] = r),
          (t[2] = i),
          (t[3] = g),
          (t[4] = y),
          (t[5] = c),
          (t[6] = d),
          (t[7] = C),
          (t[8] = p),
          (t[9] = b),
          (t[10] = v))
        : (v = t[10]);
      var S = v,
        R;
      return (
        t[11] !== a || t[12] !== S
          ? ((R = s.jsx(h.Provider, { value: S, children: a })),
            (t[11] = a),
            (t[12] = S),
            (t[13] = R))
          : (R = t[13]),
        R
      );
    }
    function C() {
      return d(h);
    }
    function b() {
      return d(h).isFromHistory;
    }
    ((l.MAIBAMessageContextProvider = y),
      (l.useMAIBAMessageContext = C),
      (l.useIsFromHistory = b));
  },
  98,
);
