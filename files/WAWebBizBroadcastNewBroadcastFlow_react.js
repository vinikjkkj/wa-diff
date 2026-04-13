__d(
  "WAWebBizBroadcastNewBroadcastFlow.react",
  [
    "$InternalEnum",
    "WAWebAudienceExpressionTypes",
    "WAWebBizBroadcastExistingAudiencesModalLoadable",
    "WAWebBizBroadcastNewBroadcastDrawer.react",
    "WAWebBizBroadcastsAudienceUtils",
    "WAWebBizBroadcastsCreationStrings",
    "WAWebBizBroadcastsEligibilityGate.react",
    "WAWebBizBroadcastsImportAudienceScreenLoadable",
    "WAWebBizBroadcastsUploadModalLoadable.react",
    "WAWebBizBroadcastsUpsertAudienceScreen.react",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebChatCollection",
    "WAWebModalManager",
    "WAWebWamEnumSurfaceType",
    "WAWebWidFactory",
    "react",
    "react-compiler-runtime",
    "useWAWebBizBroadcastExitConfirmation",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useState,
      m = n("$InternalEnum").Mirrored([
        "NewBroadcast",
        "UpsertAudience",
        "ImportAudience",
      ]);
    function p(e) {
      var t = o("react-compiler-runtime").c(67),
        n = e.chat,
        a = e.entryPoint,
        i = e.onBack,
        l = e.ref,
        u;
      t[0] !== i
        ? ((u = {
            onEnd: i,
            transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
          }),
          (t[0] = i),
          (t[1] = u))
        : (u = t[1]);
      var c = o("useWAWebFlow").useFlow(m.NewBroadcast, u),
        p = c[0],
        _ = c[1],
        f;
      t[2] !== n
        ? ((f = n != null ? new Set([n]) : new Set()), (t[2] = n), (t[3] = f))
        : (f = t[3]);
      var g = d(f),
        h = g[0],
        y = g[1],
        C = d(null),
        b = C[0],
        v = C[1],
        S;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = []), (t[4] = S))
        : (S = t[4]);
      var R = d(S),
        L = R[0],
        E = R[1],
        k;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = []), (t[5] = k))
        : (k = t[5]);
      var I = d(k),
        T = I[0],
        D = I[1],
        x;
      t[6] !== _
        ? ((x = function (t) {
            (v(t), _.push(m.UpsertAudience));
          }),
          (t[6] = _),
          (t[7] = x))
        : (x = t[7]);
      var $ = x,
        P;
      t[8] !== _
        ? ((P = function () {
            _.pop();
          }),
          (t[8] = _),
          (t[9] = P))
        : (P = t[9]);
      var N = P,
        M;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = function (t) {
            var e = o("WAWebChatCollection").ChatCollection.get(
              o("WAWebWidFactory").createWid(t.broadcastJid),
            );
            e != null &&
              y(function (t) {
                var n = new Set(t);
                return (n.add(e), n);
              });
          }),
          (t[10] = M))
        : (M = t[10]);
      var w = M,
        A;
      t[11] !== N
        ? ((A = function (t, n) {
            (w(t), N());
            var e = o("WAWebChatCollection").ChatCollection.get(
              o("WAWebWidFactory").createWid(t.broadcastJid),
            );
            o("WAWebBizBroadcastsAudienceUtils").showCreateAudienceSuccessToast(
              t,
              n,
              function () {
                y(function (t) {
                  var n = new Set(t);
                  return (e != null && n.delete(e), n);
                });
              },
            );
          }),
          (t[11] = N),
          (t[12] = A))
        : (A = t[12]);
      var F = A,
        O;
      t[13] !== N
        ? ((O = function (t) {
            (w(t), N());
          }),
          (t[13] = N),
          (t[14] = O))
        : (O = t[14]);
      var B = O,
        W;
      t[15] !== F
        ? ((W = function (t) {
            F(t, "import");
          }),
          (t[15] = F),
          (t[16] = W))
        : (W = t[16]);
      var q = W,
        U;
      t[17] !== F
        ? ((U = function (t) {
            F(t, "create");
          }),
          (t[17] = F),
          (t[18] = U))
        : (U = t[18]);
      var V = U,
        H;
      t[19] !== N
        ? ((H = function (t, n, r) {
            (w(t),
              N(),
              o(
                "WAWebBizBroadcastsAudienceUtils",
              ).showUpdateAudienceSuccessToast(
                t.broadcastJid,
                n,
                r,
                function () {
                  return w({
                    audienceExpression: o("WAWebAudienceExpressionTypes")
                      .DEFAULT_AUDIENCE_EXPRESSION,
                    broadcastJid: t.broadcastJid,
                    lastBroadcastTimestamp: null,
                    name: n,
                    recipientCount: r.length,
                  });
                },
              ));
          }),
          (t[19] = N),
          (t[20] = H))
        : (H = t[20]);
      var G = H,
        z = r("useWAWebBizBroadcastExitConfirmation")(),
        j = z.showExitConfirmation,
        K;
      t[21] !== a || t[22] !== _ || t[23] !== j
        ? ((K = function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.createBroadcastBackClicked(a),
              j().then(function (e) {
                e
                  ? (o(
                      "WAWebBusinessBroadcastUserJourneyLogger",
                    ).BusinessBroadcastUserJourneyLogger.createBroadcastExitConfirmationConfirmed(
                      a,
                    ),
                    _.end())
                  : o(
                      "WAWebBusinessBroadcastUserJourneyLogger",
                    ).BusinessBroadcastUserJourneyLogger.createBroadcastExitConfirmationDismissed(
                      a,
                    );
              }));
          }),
          (t[21] = a),
          (t[22] = _),
          (t[23] = j),
          (t[24] = K))
        : (K = t[24]);
      var Q = K,
        X;
      t[25] !== _
        ? ((X = function () {
            _.end();
          }),
          (t[25] = _),
          (t[26] = X))
        : (X = t[26]);
      var Y = X,
        J;
      t[27] !== _
        ? ((J = function (t, n) {
            (E(t), D(n), _.push(m.ImportAudience));
          }),
          (t[27] = _),
          (t[28] = J))
        : (J = t[28]);
      var Z = J,
        ee;
      t[29] !== a || t[30] !== Z
        ? ((ee = function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.importAudienceClicked(a),
              o("WAWebModalManager").ModalManager.open(
                s.jsx(
                  o("WAWebBizBroadcastsUploadModalLoadable.react")
                    .WAWebBizBroadcastsUploadModalLoadable,
                  {
                    entryPoint: a,
                    onCancel: function (t, n) {
                      var e = n === void 0 ? !1 : n;
                      (o("WAWebModalManager").ModalManager.close(),
                        e !== !0 &&
                          o(
                            "WAWebBusinessBroadcastUserJourneyLogger",
                          ).BusinessBroadcastUserJourneyLogger.contactImportCancelClicked(
                            a,
                          ));
                    },
                    onUploadSuccess: Z,
                  },
                ),
              ));
          }),
          (t[29] = a),
          (t[30] = Z),
          (t[31] = ee))
        : (ee = t[31]);
      var te = ee,
        ne;
      t[32] !== a || t[33] !== h
        ? ((ne = function () {
            o("WAWebModalManager").ModalManager.open(
              s.jsx(
                o("WAWebBizBroadcastExistingAudiencesModalLoadable")
                  .WAWebBizBroadcastExistingAudiencesModalLoadable,
                {
                  entryPoint: a,
                  onClose: o("WAWebModalManager").closeModalManager,
                  selectedChats: h,
                  setSelectedChats: y,
                },
              ),
            );
          }),
          (t[32] = a),
          (t[33] = h),
          (t[34] = ne))
        : (ne = t[34]);
      var re = ne,
        oe;
      t[35] !== n
        ? ((oe =
            n != null
              ? o(
                  "WAWebBizBroadcastsCreationStrings",
                ).getNewBroadcastDrawerTitle()
              : o(
                  "WAWebBizBroadcastsCreationStrings",
                ).getCreateBroadcastDrawerTitle()),
          (t[35] = n),
          (t[36] = oe))
        : (oe = t[36]);
      var ae = oe;
      if (_.step == null) return null;
      var ie;
      t[37] !== a ||
      t[38] !== T ||
      t[39] !== _.step ||
      t[40] !== N ||
      t[41] !== B ||
      t[42] !== q ||
      t[43] !== V ||
      t[44] !== G ||
      t[45] !== b ||
      t[46] !== L
        ? ((ie =
            _.step === m.UpsertAudience
              ? s.jsx(r("WAWebBizBroadcastsUpsertAudienceScreen.react"), {
                  chat: b,
                  entryPoint: a,
                  isBBCreationFlow: !0,
                  onBack: N,
                  onNewAudienceSuccess: V,
                  onSendBroadcast: B,
                  onUpdateAudienceSuccess: G,
                  suggestedAudienceData: null,
                })
              : _.step === m.ImportAudience
                ? s.jsx(
                    o("WAWebBizBroadcastsImportAudienceScreenLoadable")
                      .WAWebBizBroadcastsImportAudienceScreenLoadable,
                    {
                      entryPoint: a,
                      onClose: N,
                      onCreateAudienceSuccess: q,
                      validContactsData: L,
                      errorList: T,
                    },
                  )
                : null),
          (t[37] = a),
          (t[38] = T),
          (t[39] = _.step),
          (t[40] = N),
          (t[41] = B),
          (t[42] = q),
          (t[43] = V),
          (t[44] = G),
          (t[45] = b),
          (t[46] = L),
          (t[47] = ie))
        : (ie = t[47]);
      var le = ie,
        se;
      t[48] !== ae ||
      t[49] !== a ||
      t[50] !== Q ||
      t[51] !== re ||
      t[52] !== Y ||
      t[53] !== te ||
      t[54] !== $ ||
      t[55] !== l ||
      t[56] !== h
        ? ((se = s.jsx(r("WAWebBizBroadcastNewBroadcastDrawer.react"), {
            ref: l,
            selectedChats: h,
            setSelectedChats: y,
            entryPoint: a,
            onBack: Q,
            onOpenUpsertAudience: $,
            onOpenImportAudience: te,
            onOpenExistingAudiences: re,
            onSendSuccess: Y,
            title: ae,
          })),
          (t[48] = ae),
          (t[49] = a),
          (t[50] = Q),
          (t[51] = re),
          (t[52] = Y),
          (t[53] = te),
          (t[54] = $),
          (t[55] = l),
          (t[56] = h),
          (t[57] = se))
        : (se = t[57]);
      var ue;
      t[58] !== p || t[59] !== _ || t[60] !== le
        ? ((ue = s.jsx(p, { flow: _, children: le })),
          (t[58] = p),
          (t[59] = _),
          (t[60] = le),
          (t[61] = ue))
        : (ue = t[61]);
      var ce;
      return (
        t[62] !== a || t[63] !== i || t[64] !== se || t[65] !== ue
          ? ((ce = s.jsxs(r("WAWebBizBroadcastsEligibilityGate.react"), {
              entryPoint: a,
              onClose: i,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .BB_CAMPAIGN_DRAFT,
              children: [se, ue],
            })),
            (t[62] = a),
            (t[63] = i),
            (t[64] = se),
            (t[65] = ue),
            (t[66] = ce))
          : (ce = t[66]),
        ce
      );
    }
    l.default = p;
  },
  98,
);
