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
      var t = e.chat,
        n = e.entryPoint,
        a = e.onBack,
        i = e.ref,
        l = o("useWAWebFlow").useFlow(m.NewBroadcast, {
          onEnd: a,
          transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
        }),
        u = l[0],
        p = l[1],
        _ = d(t != null ? new Set([t]) : new Set()),
        f = _[0],
        g = _[1],
        h = d(null),
        y = h[0],
        C = h[1],
        b = d([]),
        v = b[0],
        S = b[1],
        R = d([]),
        L = R[0],
        E = R[1],
        k = c(
          function (e) {
            (C(e), p.push(m.UpsertAudience));
          },
          [p],
        ),
        I = c(
          function () {
            p.pop();
          },
          [p],
        ),
        T = c(function (e) {
          var t = o("WAWebChatCollection").ChatCollection.get(
            o("WAWebWidFactory").createWid(e.broadcastJid),
          );
          t != null &&
            g(function (e) {
              var n = new Set(e);
              return (n.add(t), n);
            });
        }, []),
        D = c(
          function (e, t) {
            (T(e), I());
            var n = o("WAWebChatCollection").ChatCollection.get(
              o("WAWebWidFactory").createWid(e.broadcastJid),
            );
            o("WAWebBizBroadcastsAudienceUtils").showCreateAudienceSuccessToast(
              e,
              t,
              function () {
                g(function (e) {
                  var t = new Set(e);
                  return (n != null && t.delete(n), t);
                });
              },
            );
          },
          [T, I],
        ),
        x = c(
          function (e) {
            (T(e), I());
          },
          [T, I],
        ),
        $ = c(
          function (e) {
            D(e, "import");
          },
          [D],
        ),
        P = c(
          function (e) {
            D(e, "create");
          },
          [D],
        ),
        N = c(
          function (e, t, n) {
            (T(e),
              I(),
              o(
                "WAWebBizBroadcastsAudienceUtils",
              ).showUpdateAudienceSuccessToast(
                e.broadcastJid,
                t,
                n,
                function () {
                  return T({
                    audienceExpression: o("WAWebAudienceExpressionTypes")
                      .DEFAULT_AUDIENCE_EXPRESSION,
                    broadcastJid: e.broadcastJid,
                    lastBroadcastTimestamp: null,
                    name: t,
                    recipientCount: n.length,
                  });
                },
              ));
          },
          [T, I],
        ),
        M = r("useWAWebBizBroadcastExitConfirmation")(),
        w = M.showExitConfirmation,
        A = c(
          function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.createBroadcastBackClicked(n),
              w().then(function (e) {
                e
                  ? (o(
                      "WAWebBusinessBroadcastUserJourneyLogger",
                    ).BusinessBroadcastUserJourneyLogger.createBroadcastExitConfirmationConfirmed(
                      n,
                    ),
                    p.end())
                  : o(
                      "WAWebBusinessBroadcastUserJourneyLogger",
                    ).BusinessBroadcastUserJourneyLogger.createBroadcastExitConfirmationDismissed(
                      n,
                    );
              }));
          },
          [n, p, w],
        ),
        F = c(
          function () {
            p.end();
          },
          [p],
        ),
        O = c(
          function (e, t) {
            (S(e), E(t), p.push(m.ImportAudience));
          },
          [p],
        ),
        B = c(
          function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.importAudienceClicked(n),
              o("WAWebModalManager").ModalManager.open(
                s.jsx(
                  o("WAWebBizBroadcastsUploadModalLoadable.react")
                    .WAWebBizBroadcastsUploadModalLoadable,
                  {
                    entryPoint: n,
                    onCancel: function (t, r) {
                      (r === void 0 && (r = !1),
                        o("WAWebModalManager").ModalManager.close(),
                        r !== !0 &&
                          o(
                            "WAWebBusinessBroadcastUserJourneyLogger",
                          ).BusinessBroadcastUserJourneyLogger.contactImportCancelClicked(
                            n,
                          ));
                    },
                    onUploadSuccess: O,
                  },
                ),
              ));
          },
          [n, O],
        ),
        W = c(
          function () {
            o("WAWebModalManager").ModalManager.open(
              s.jsx(
                o("WAWebBizBroadcastExistingAudiencesModalLoadable")
                  .WAWebBizBroadcastExistingAudiencesModalLoadable,
                {
                  entryPoint: n,
                  onClose: o("WAWebModalManager").closeModalManager,
                  selectedChats: f,
                  setSelectedChats: g,
                },
              ),
            );
          },
          [n, f],
        ),
        q =
          t != null
            ? o(
                "WAWebBizBroadcastsCreationStrings",
              ).getNewBroadcastDrawerTitle()
            : o(
                "WAWebBizBroadcastsCreationStrings",
              ).getCreateBroadcastDrawerTitle();
      if (p.step == null) return null;
      var U =
        p.step === m.UpsertAudience
          ? s.jsx(r("WAWebBizBroadcastsUpsertAudienceScreen.react"), {
              chat: y,
              entryPoint: n,
              isBBCreationFlow: !0,
              onBack: I,
              onNewAudienceSuccess: P,
              onSendBroadcast: x,
              onUpdateAudienceSuccess: N,
              suggestedAudienceData: null,
            })
          : p.step === m.ImportAudience
            ? s.jsx(
                o("WAWebBizBroadcastsImportAudienceScreenLoadable")
                  .WAWebBizBroadcastsImportAudienceScreenLoadable,
                {
                  entryPoint: n,
                  onClose: I,
                  onCreateAudienceSuccess: $,
                  validContactsData: v,
                  errorList: L,
                  isBBCreationFlow: !0,
                  onSendBroadcast: x,
                },
              )
            : null;
      return s.jsxs(r("WAWebBizBroadcastsEligibilityGate.react"), {
        entryPoint: n,
        onClose: a,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        children: [
          s.jsx(r("WAWebBizBroadcastNewBroadcastDrawer.react"), {
            ref: i,
            selectedChats: f,
            setSelectedChats: g,
            entryPoint: n,
            onBack: A,
            onOpenUpsertAudience: k,
            onOpenImportAudience: B,
            onOpenExistingAudiences: W,
            onSendSuccess: F,
            title: q,
          }),
          s.jsx(u, { flow: p, children: U }),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
