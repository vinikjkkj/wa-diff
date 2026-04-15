__d(
  "WAWebNewSubgroupSuggestionFlow.react",
  [
    "$InternalEnum",
    "WAWebChatCollection",
    "WAWebCreateSubgroupSuggestionAction",
    "WAWebNewGroupPermissionsDrawer.react",
    "WAWebNewSubgroupSuggestionDrawer.react",
    "WAWebNoop",
    "react",
    "react-compiler-runtime",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s.useState,
      d = n("$InternalEnum").Mirrored([
        "SUBGROUP_SUGGESTION_DRAWER",
        "GROUP_PERMISSIONS_DRAWER",
      ]),
      m = d.SUBGROUP_SUGGESTION_DRAWER;
    function p(t) {
      var n = o("react-compiler-runtime").c(41),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        s = l.parentGroup,
        p;
      n[3] !== a.onEnd
        ? ((p = {
            transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
            onEnd: a.onEnd,
          }),
          (n[3] = a.onEnd),
          (n[4] = p))
        : (p = n[4]);
      var _ = o("useWAWebFlow").useFlow(m, p),
        f = _[0],
        g = _[1],
        h = c(!0),
        y = h[0],
        C = h[1],
        b = c(!0),
        v = b[0],
        S = b[1],
        R = c(!0),
        L = R[0],
        E = R[1],
        k = c(!1),
        I = k[0],
        T = k[1],
        D = c(!0),
        x = D[0],
        $ = D[1],
        P = c(),
        N = P[0],
        M = P[1],
        w = c(),
        A = w[0],
        F = w[1],
        O = c(!1),
        B = O[0],
        W = O[1],
        q;
      n[5] !== g
        ? ((q = function () {
            g.pop();
          }),
          (n[5] = g),
          (n[6] = q))
        : (q = n[6]);
      var U = q,
        V;
      n[7] !== v ||
      n[8] !== U ||
      n[9] !== L ||
      n[10] !== x ||
      n[11] !== I ||
      n[12] !== s ||
      n[13] !== a.onEnd ||
      n[14] !== y
        ? ((V = function (t, n) {
            W(!0);
            var e = o("WAWebChatCollection").ChatCollection.assertGet(s);
            o("WAWebCreateSubgroupSuggestionAction")
              .createNewGroupSubgroupSuggestionAction(
                e,
                {
                  subject: t,
                  description: n === "" ? void 0 : n,
                  restrict: y,
                  announce: v,
                  membershipApprovalMode: I,
                  memberAddMode: L,
                  memberShareGroupHistoryMode: x,
                },
                U,
                a.onEnd,
              )
              .then(function () {
                U();
              })
              .finally(function () {
                W(!1);
              });
          }),
          (n[7] = v),
          (n[8] = U),
          (n[9] = L),
          (n[10] = x),
          (n[11] = I),
          (n[12] = s),
          (n[13] = a.onEnd),
          (n[14] = y),
          (n[15] = V))
        : (V = n[15]);
      var H = V,
        G;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = function (t) {
            (t.text != null && M(t.text),
              t.description != null && F(t.description));
          }),
          (n[16] = G))
        : (G = n[16]);
      var z = G;
      if (g.step == null) return null;
      var j;
      e: switch (g.step) {
        case d.SUBGROUP_SUGGESTION_DRAWER: {
          var K;
          n[17] !== g
            ? ((K = function () {
                return g.push(d.GROUP_PERMISSIONS_DRAWER);
              }),
              (n[17] = g),
              (n[18] = K))
            : (K = n[18]);
          var Q;
          (n[19] !== A ||
          n[20] !== N ||
          n[21] !== H ||
          n[22] !== B ||
          n[23] !== s ||
          n[24] !== a.onBack ||
          n[25] !== K
            ? ((Q = u.jsx(r("WAWebNewSubgroupSuggestionDrawer.react"), {
                parentGroup: s,
                onBack: a.onBack,
                onGroupPermissions: K,
                handleLiftGroupInfo: z,
                subject: N,
                description: A,
                onSubmit: H,
                loading: B,
              })),
              (n[19] = A),
              (n[20] = N),
              (n[21] = H),
              (n[22] = B),
              (n[23] = s),
              (n[24] = a.onBack),
              (n[25] = K),
              (n[26] = Q))
            : (Q = n[26]),
            (j = Q));
          break e;
        }
        case d.GROUP_PERMISSIONS_DRAWER: {
          var X;
          n[27] !== g
            ? ((X = function () {
                return g.pop();
              }),
              (n[27] = g),
              (n[28] = X))
            : (X = n[28]);
          var Y;
          (n[29] !== v ||
          n[30] !== L ||
          n[31] !== x ||
          n[32] !== I ||
          n[33] !== y ||
          n[34] !== X
            ? ((Y = u.jsx(r("WAWebNewGroupPermissionsDrawer.react"), {
                onBack: X,
                restrict: y,
                setRestrict: C,
                announce: v,
                setAnnounce: S,
                membershipApprovalMode: I,
                setMembershipApprovalMode: T,
                memberAddMode: L,
                setMemberAddMode: E,
                memberLinkMode: !1,
                setMemberLinkMode: r("WAWebNoop"),
                memberShareGroupHistoryMode: x,
                setMemberShareGroupHistoryMode: $,
              })),
              (n[29] = v),
              (n[30] = L),
              (n[31] = x),
              (n[32] = I),
              (n[33] = y),
              (n[34] = X),
              (n[35] = Y))
            : (Y = n[35]),
            (j = Y));
        }
      }
      var J;
      return (
        n[36] !== f || n[37] !== j || n[38] !== g || n[39] !== i
          ? ((J = u.jsx(f, { ref: i, flow: g, children: j })),
            (n[36] = f),
            (n[37] = j),
            (n[38] = g),
            (n[39] = i),
            (n[40] = J))
          : (J = n[40]),
        J
      );
    }
    var _ = p;
    ((l.NewSubgroupSuggestionFlowStep = d), (l.NewSubgroupSuggestionFlow = _));
  },
  98,
);
