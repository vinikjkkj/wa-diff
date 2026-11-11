__d(
  "WAWebPollsDetailsFlow",
  [
    "$InternalEnum",
    "WAWebFrontendMsgGetters",
    "WAWebGroupAgentProfileDrawerLoadable",
    "WAWebInfoFlowLoadable",
    "WAWebInfoFlowStep",
    "WAWebMsgCollection",
    "WAWebPollsActionsMetricUtils",
    "WAWebPollsDetailsDrawer",
    "WAWebPollsViewAllVotesDrawer",
    "WAWebWamEnumPollActionType",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useWAWebFlow",
    "useWAWebListener",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useState,
      m = n("$InternalEnum").Mirrored([
        "Details",
        "ViewAll",
        "ContactInfo",
        "GroupAgentProfile",
      ]);
    function p(e) {
      var t = o("react-compiler-runtime").c(57),
        n = e.associatedMessages,
        a = e.msg,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight }),
          (t[0] = i))
        : (i = t[0]);
      var l = o("useWAWebFlow").useFlow(m.Details, i),
        u = l[0],
        p = l[1],
        _ = d(null),
        f = _[0],
        g = _[1],
        h = d(null),
        y = h[0],
        C = h[1],
        b = d(null),
        v = b[0],
        S = b[1],
        R,
        L,
        E;
      t[1] !== a
        ? ((L = a.unsafe()),
          (R = L.id),
          (E = o("WAWebFrontendMsgGetters").getChat(L)),
          (t[1] = a),
          (t[2] = R),
          (t[3] = L),
          (t[4] = E))
        : ((R = t[2]), (L = t[3]), (E = t[4]));
      var k = E,
        I;
      t[5] !== p
        ? ((I = function (t) {
            (C(t), p.push(m.ContactInfo));
          }),
          (t[5] = p),
          (t[6] = I))
        : (I = t[6]);
      var T = I,
        D;
      t[7] !== p
        ? ((D = function (t) {
            (S(t), p.push(m.GroupAgentProfile));
          }),
          (t[7] = p),
          (t[8] = D))
        : (D = t[8]);
      var x = D,
        $;
      t[9] !== k || t[10] !== a
        ? (($ = function () {
            o("WAWebPollsActionsMetricUtils").commitPollsActionsMetric(
              babelHelpers.extends(
                {
                  action: o("WAWebWamEnumPollActionType").POLL_ACTION_TYPE
                    .VIEW_RESULTS_MODAL,
                  chat: k,
                },
                o(
                  "WAWebPollsActionsMetricUtils",
                ).getPollMetricFieldsFromCreationMsg(a),
              ),
            );
          }),
          (t[9] = k),
          (t[10] = a),
          (t[11] = $))
        : ($ = t[11]);
      var P = r("useWAWebStableCallback")($),
        N,
        M;
      (t[12] !== P
        ? ((N = function () {
            P();
          }),
          (M = [P]),
          (t[12] = P),
          (t[13] = N),
          (t[14] = M))
        : ((N = t[13]), (M = t[14])),
        c(N, M));
      var w;
      (t[15] !== p
        ? ((w = function () {
            p.end();
          }),
          (t[15] = p),
          (t[16] = w))
        : (w = t[16]),
        o("useWAWebListener").useListener(L, "revoked", w));
      var A;
      if (
        (t[17] !== p || t[18] !== R
          ? ((A = function (t) {
              t.id.equals(R) && p.end();
            }),
            (t[17] = p),
            (t[18] = R),
            (t[19] = A))
          : (A = t[19]),
        o("useWAWebListener").useListener(
          o("WAWebMsgCollection").MsgCollection,
          "remove",
          A,
        ),
        p.step == null)
      )
        return null;
      var F;
      e: switch (p.step) {
        case m.Details: {
          var O, B;
          t[20] !== p
            ? ((O = function () {
                p.pop();
              }),
              (B = function (t) {
                (g(t), p.push(m.ViewAll));
              }),
              (t[20] = p),
              (t[21] = O),
              (t[22] = B))
            : ((O = t[21]), (B = t[22]));
          var W;
          (t[23] !== n ||
          t[24] !== R ||
          t[25] !== T ||
          t[26] !== x ||
          t[27] !== O ||
          t[28] !== B
            ? ((W = s.jsx(o("WAWebPollsDetailsDrawer").DetailsDrawer, {
                msgKey: R,
                associatedMessages: n,
                onClose: O,
                onViewAllVotes: B,
                onOpenContactInfo: T,
                onOpenGroupAgentProfile: x,
              })),
              (t[23] = n),
              (t[24] = R),
              (t[25] = T),
              (t[26] = x),
              (t[27] = O),
              (t[28] = B),
              (t[29] = W))
            : (W = t[29]),
            (F = W));
          break e;
        }
        case m.ViewAll: {
          var q;
          t[30] !== f
            ? ((q = r("nullthrows")(f)), (t[30] = f), (t[31] = q))
            : (q = t[31]);
          var U;
          t[32] !== p
            ? ((U = function () {
                p.pop();
              }),
              (t[32] = p),
              (t[33] = U))
            : (U = t[33]);
          var V;
          (t[34] !== n ||
          t[35] !== R ||
          t[36] !== T ||
          t[37] !== x ||
          t[38] !== q ||
          t[39] !== U
            ? ((V = s.jsx(
                o("WAWebPollsViewAllVotesDrawer").ViewAllVotesDrawer,
                {
                  msgKey: R,
                  associatedMessages: n,
                  optionLocalId: q,
                  onBack: U,
                  onOpenContactInfo: T,
                  onOpenGroupAgentProfile: x,
                },
              )),
              (t[34] = n),
              (t[35] = R),
              (t[36] = T),
              (t[37] = x),
              (t[38] = q),
              (t[39] = U),
              (t[40] = V))
            : (V = t[40]),
            (F = V));
          break e;
        }
        case m.ContactInfo: {
          var H;
          t[41] !== y
            ? ((H = r("nullthrows")(y)), (t[41] = y), (t[42] = H))
            : (H = t[42]);
          var G;
          t[43] !== p
            ? ((G = function () {
                return p.pop();
              }),
              (t[43] = p),
              (t[44] = G))
            : (G = t[44]);
          var z;
          (t[45] !== p.pop || t[46] !== H || t[47] !== G
            ? ((z = s.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
                chat: H,
                initialStep: o("WAWebInfoFlowStep").InfoFlowStep.ContactInfo,
                onBack: p.pop,
                onEnd: G,
              })),
              (t[45] = p.pop),
              (t[46] = H),
              (t[47] = G),
              (t[48] = z))
            : (z = t[48]),
            (F = z));
          break e;
        }
        case m.GroupAgentProfile: {
          var j;
          (t[49] !== v || t[50] !== k || t[51] !== p
            ? ((j =
                v == null
                  ? null
                  : s.jsx(
                      o("WAWebGroupAgentProfileDrawerLoadable")
                        .GroupAgentProfileDrawerLoadable,
                      {
                        contact: v,
                        onBack: function () {
                          return p.pop();
                        },
                        onClose: function () {
                          return p.end();
                        },
                        origin: "pollVoterRow",
                        sourceGroupChat: k,
                      },
                    )),
              (t[49] = v),
              (t[50] = k),
              (t[51] = p),
              (t[52] = j))
            : (j = t[52]),
            (F = j));
        }
      }
      var K;
      return (
        t[53] !== u || t[54] !== F || t[55] !== p
          ? ((K = s.jsx(u, { flow: p, children: F })),
            (t[53] = u),
            (t[54] = F),
            (t[55] = p),
            (t[56] = K))
          : (K = t[56]),
        K
      );
    }
    l.default = p;
  },
  98,
);
