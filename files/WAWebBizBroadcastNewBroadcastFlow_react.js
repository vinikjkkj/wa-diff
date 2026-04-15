__d(
  "WAWebBizBroadcastNewBroadcastFlow.react",
  [
    "$InternalEnum",
    "WAWebAudienceExpressionTypes",
    "WAWebBizBroadcastCreationQPLLogger",
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
      d = u.useEffect,
      m = u.useState,
      p = n("$InternalEnum").Mirrored([
        "NewBroadcast",
        "UpsertAudience",
        "ImportAudience",
      ]);
    function _(e) {
      var t = o("react-compiler-runtime").c(68),
        n = e.chat,
        a = e.entryPoint,
        i = e.onBack,
        l = e.ref,
        u;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = []), (t[0] = u))
        : (u = t[0]),
        d(f, u));
      var c;
      t[1] !== i
        ? ((c = {
            onEnd: i,
            transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
          }),
          (t[1] = i),
          (t[2] = c))
        : (c = t[2]);
      var _ = o("useWAWebFlow").useFlow(p.NewBroadcast, c),
        g = _[0],
        h = _[1],
        y;
      t[3] !== n
        ? ((y = n != null ? new Set([n]) : new Set()), (t[3] = n), (t[4] = y))
        : (y = t[4]);
      var C = m(y),
        b = C[0],
        v = C[1],
        S = m(null),
        R = S[0],
        L = S[1],
        E;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = []), (t[5] = E))
        : (E = t[5]);
      var k = m(E),
        I = k[0],
        T = k[1],
        D;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = []), (t[6] = D))
        : (D = t[6]);
      var x = m(D),
        $ = x[0],
        P = x[1],
        N;
      t[7] !== h
        ? ((N = function (t) {
            (L(t), h.push(p.UpsertAudience));
          }),
          (t[7] = h),
          (t[8] = N))
        : (N = t[8]);
      var M = N,
        w;
      t[9] !== h
        ? ((w = function () {
            h.pop();
          }),
          (t[9] = h),
          (t[10] = w))
        : (w = t[10]);
      var A = w,
        F;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = function (t) {
            var e = o("WAWebChatCollection").ChatCollection.get(
              o("WAWebWidFactory").createWid(t.broadcastJid),
            );
            e != null &&
              v(function (t) {
                var n = new Set(t);
                return (n.add(e), n);
              });
          }),
          (t[11] = F))
        : (F = t[11]);
      var O = F,
        B;
      t[12] !== A
        ? ((B = function (t, n) {
            (O(t), A());
            var e = o("WAWebChatCollection").ChatCollection.get(
              o("WAWebWidFactory").createWid(t.broadcastJid),
            );
            o("WAWebBizBroadcastsAudienceUtils").showCreateAudienceSuccessToast(
              t,
              n,
              function () {
                v(function (t) {
                  var n = new Set(t);
                  return (e != null && n.delete(e), n);
                });
              },
            );
          }),
          (t[12] = A),
          (t[13] = B))
        : (B = t[13]);
      var W = B,
        q;
      t[14] !== A
        ? ((q = function (t) {
            (O(t), A());
          }),
          (t[14] = A),
          (t[15] = q))
        : (q = t[15]);
      var U = q,
        V;
      t[16] !== W
        ? ((V = function (t) {
            W(t, "import");
          }),
          (t[16] = W),
          (t[17] = V))
        : (V = t[17]);
      var H = V,
        G;
      t[18] !== W
        ? ((G = function (t) {
            W(t, "create");
          }),
          (t[18] = W),
          (t[19] = G))
        : (G = t[19]);
      var z = G,
        j;
      t[20] !== A
        ? ((j = function (t, n, r) {
            (O(t),
              A(),
              o(
                "WAWebBizBroadcastsAudienceUtils",
              ).showUpdateAudienceSuccessToast(
                t.broadcastJid,
                n,
                r,
                function () {
                  return O({
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
          (t[20] = A),
          (t[21] = j))
        : (j = t[21]);
      var K = j,
        Q = r("useWAWebBizBroadcastExitConfirmation")(),
        X = Q.showExitConfirmation,
        Y;
      t[22] !== a || t[23] !== h || t[24] !== X
        ? ((Y = function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.createBroadcastBackClicked(a),
              X().then(function (e) {
                e
                  ? (o(
                      "WAWebBusinessBroadcastUserJourneyLogger",
                    ).BusinessBroadcastUserJourneyLogger.createBroadcastExitConfirmationConfirmed(
                      a,
                    ),
                    o("WAWebBizBroadcastCreationQPLLogger").qplCreateDrop(),
                    h.end())
                  : o(
                      "WAWebBusinessBroadcastUserJourneyLogger",
                    ).BusinessBroadcastUserJourneyLogger.createBroadcastExitConfirmationDismissed(
                      a,
                    );
              }));
          }),
          (t[22] = a),
          (t[23] = h),
          (t[24] = X),
          (t[25] = Y))
        : (Y = t[25]);
      var J = Y,
        Z;
      t[26] !== h
        ? ((Z = function () {
            h.end();
          }),
          (t[26] = h),
          (t[27] = Z))
        : (Z = t[27]);
      var ee = Z,
        te;
      t[28] !== h
        ? ((te = function (t, n) {
            (T(t), P(n), h.push(p.ImportAudience));
          }),
          (t[28] = h),
          (t[29] = te))
        : (te = t[29]);
      var ne = te,
        re;
      t[30] !== a || t[31] !== ne
        ? ((re = function () {
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
                    onUploadSuccess: ne,
                  },
                ),
              ));
          }),
          (t[30] = a),
          (t[31] = ne),
          (t[32] = re))
        : (re = t[32]);
      var oe = re,
        ae;
      t[33] !== a || t[34] !== b
        ? ((ae = function () {
            o("WAWebModalManager").ModalManager.open(
              s.jsx(
                o("WAWebBizBroadcastExistingAudiencesModalLoadable")
                  .WAWebBizBroadcastExistingAudiencesModalLoadable,
                {
                  entryPoint: a,
                  onClose: o("WAWebModalManager").closeModalManager,
                  selectedChats: b,
                  setSelectedChats: v,
                },
              ),
            );
          }),
          (t[33] = a),
          (t[34] = b),
          (t[35] = ae))
        : (ae = t[35]);
      var ie = ae,
        le;
      t[36] !== n
        ? ((le =
            n != null
              ? o(
                  "WAWebBizBroadcastsCreationStrings",
                ).getNewBroadcastDrawerTitle()
              : o(
                  "WAWebBizBroadcastsCreationStrings",
                ).getCreateBroadcastDrawerTitle()),
          (t[36] = n),
          (t[37] = le))
        : (le = t[37]);
      var se = le;
      if (h.step == null) return null;
      var ue;
      t[38] !== a ||
      t[39] !== $ ||
      t[40] !== h.step ||
      t[41] !== A ||
      t[42] !== U ||
      t[43] !== H ||
      t[44] !== z ||
      t[45] !== K ||
      t[46] !== R ||
      t[47] !== I
        ? ((ue =
            h.step === p.UpsertAudience
              ? s.jsx(r("WAWebBizBroadcastsUpsertAudienceScreen.react"), {
                  chat: R,
                  entryPoint: a,
                  isBBCreationFlow: !0,
                  onBack: A,
                  onNewAudienceSuccess: z,
                  onSendBroadcast: U,
                  onUpdateAudienceSuccess: K,
                  suggestedAudienceData: null,
                })
              : h.step === p.ImportAudience
                ? s.jsx(
                    o("WAWebBizBroadcastsImportAudienceScreenLoadable")
                      .WAWebBizBroadcastsImportAudienceScreenLoadable,
                    {
                      entryPoint: a,
                      onClose: A,
                      onCreateAudienceSuccess: H,
                      validContactsData: I,
                      errorList: $,
                      isBBCreationFlow: !0,
                      onSendBroadcast: U,
                    },
                  )
                : null),
          (t[38] = a),
          (t[39] = $),
          (t[40] = h.step),
          (t[41] = A),
          (t[42] = U),
          (t[43] = H),
          (t[44] = z),
          (t[45] = K),
          (t[46] = R),
          (t[47] = I),
          (t[48] = ue))
        : (ue = t[48]);
      var ce = ue,
        de;
      t[49] !== se ||
      t[50] !== a ||
      t[51] !== J ||
      t[52] !== ie ||
      t[53] !== ee ||
      t[54] !== oe ||
      t[55] !== M ||
      t[56] !== l ||
      t[57] !== b
        ? ((de = s.jsx(r("WAWebBizBroadcastNewBroadcastDrawer.react"), {
            ref: l,
            selectedChats: b,
            setSelectedChats: v,
            entryPoint: a,
            onBack: J,
            onOpenUpsertAudience: M,
            onOpenImportAudience: oe,
            onOpenExistingAudiences: ie,
            onSendSuccess: ee,
            title: se,
          })),
          (t[49] = se),
          (t[50] = a),
          (t[51] = J),
          (t[52] = ie),
          (t[53] = ee),
          (t[54] = oe),
          (t[55] = M),
          (t[56] = l),
          (t[57] = b),
          (t[58] = de))
        : (de = t[58]);
      var me;
      t[59] !== g || t[60] !== h || t[61] !== ce
        ? ((me = s.jsx(g, { flow: h, children: ce })),
          (t[59] = g),
          (t[60] = h),
          (t[61] = ce),
          (t[62] = me))
        : (me = t[62]);
      var pe;
      return (
        t[63] !== a || t[64] !== i || t[65] !== de || t[66] !== me
          ? ((pe = s.jsxs(r("WAWebBizBroadcastsEligibilityGate.react"), {
              entryPoint: a,
              onClose: i,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                .BB_CAMPAIGN_DRAFT,
              children: [de, me],
            })),
            (t[63] = a),
            (t[64] = i),
            (t[65] = de),
            (t[66] = me),
            (t[67] = pe))
          : (pe = t[67]),
        pe
      );
    }
    function f() {
      o("WAWebBizBroadcastCreationQPLLogger").qplCreatePoint(
        o("WAWebBizBroadcastCreationQPLLogger").CreateBroadcastQPLPoints
          .FLOW_MOUNTED,
      );
    }
    l.default = _;
  },
  98,
);
