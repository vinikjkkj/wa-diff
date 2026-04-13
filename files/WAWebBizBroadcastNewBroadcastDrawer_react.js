__d(
  "WAWebBizBroadcastNewBroadcastDrawer.react",
  [
    "fbt",
    "WALogger",
    "WAWebBizBroadcastAudienceSection.react",
    "WAWebBizBroadcastBillingSummarySection.react",
    "WAWebBizBroadcastBusinessInfoContext.react",
    "WAWebBizBroadcastCTAButtonUtils",
    "WAWebBizBroadcastCheckoutUtils",
    "WAWebBizBroadcastDetailsSection.react",
    "WAWebBizBroadcastDrawerFooter.react",
    "WAWebBizBroadcastGenAIGating",
    "WAWebBizBroadcastGenAINUXModal.react",
    "WAWebBizBroadcastGenAIPacing",
    "WAWebBizBroadcastGenAISuggestionsModal.react",
    "WAWebBizBroadcastGenAIToS",
    "WAWebBizBroadcastMessageSection.react",
    "WAWebBizBroadcastPreviewSection.react",
    "WAWebBizBroadcastSendContext.react",
    "WAWebBizGatingUtils",
    "WAWebBizTwoColumnLayout.react",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebContactCollection",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebModalManager",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWidToJid",
    "react",
    "react-compiler-runtime",
    "useWAWebBizBroadcastBillingInfo",
    "useWAWebBizBroadcastCheckout",
    "useWAWebBizBroadcastDraftMessage",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useCallback,
      f = p.useEffect,
      g = p.useMemo,
      h = p.useRef,
      y = p.useState,
      C = { body: { backgroundColor: "x1h3rtpe", $$css: !0 } };
    function b(t) {
      var n,
        a,
        i = t.entryPoint,
        l = t.innerRef,
        d = t.onBack,
        p = t.onOpenExistingAudiences,
        b = t.onOpenImportAudience,
        v = t.onOpenUpsertAudience,
        S = t.onSendSuccess,
        R = t.selectedChats,
        L = t.setSelectedChats,
        E = t.title;
      f(
        function () {
          o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.createBroadcastViewed(i);
        },
        [i],
      );
      var k = r("useWAWebBizBroadcastDraftMessage")(R),
        I = k.clearDraftMessage,
        T = k.message,
        D = k.onMessageChange,
        x = y(null),
        $ = x[0],
        P = x[1],
        N = y(null),
        M = N[0],
        w = N[1],
        A = _(function (t) {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[BizBroadcast:Drawer] handleButtonDataChange: ",
                "",
              ])),
            JSON.stringify(t),
          ),
            P(t));
        }, []),
        F = (n = M == null ? void 0 : M.file) != null ? n : null,
        O = g(
          function () {
            return Array.from(R).flatMap(function (e) {
              var t,
                n = (t = e.broadcastMetadata) == null ? void 0 : t.recipients;
              return n
                ? n.toArray().map(function (e) {
                    return e.id;
                  })
                : [];
            });
          },
          [R],
        ),
        B = o("WAWebBizGatingUtils").isBizBroadcastMultiAudienceSendEnabled(),
        W = r("useWAWebBizBroadcastCheckout")(O, {
          enabled: !0,
          skipDedupe: B,
        }),
        q = W.checkoutData,
        U = W.isLoading,
        V = o(
          "WAWebBizBroadcastBusinessInfoContext.react",
        ).useWAWebBizBroadcastBusinessInfoContext(),
        H = V.adAccountId,
        G = q == null ? void 0 : q.costCurrency,
        z = (a = q == null ? void 0 : q.costOffset) != null ? a : 1,
        j = q == null ? void 0 : q.costBeforeTax,
        K = g(
          function () {
            if (!(G == null || j == null))
              return { amount: String(j / z), currency: G };
          },
          [j, G, z],
        ),
        Q = o(
          "useWAWebBizBroadcastBillingInfo",
        ).useWAWebBizBroadcastBillingInfo({
          assetId: H != null ? H : "",
          budget: K,
        }),
        X = Q.billingInfo,
        Y = Q.isLoading,
        J = Q.refetch,
        Z = Q.requiredAction,
        ee = g(
          function () {
            return j == null || z === 0 ? null : String(j / z);
          },
          [j, z],
        ),
        te = g(
          function () {
            return O.flatMap(function (e) {
              var t = o("WAWebContactCollection").ContactCollection.get(e);
              return t != null ? [t] : [];
            });
          },
          [O],
        ),
        ne = g(
          function () {
            var e =
              $ != null
                ? o("WAWebBizBroadcastCTAButtonUtils").convertButtonDataToJson(
                    $,
                  )
                : null;
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    '[WAWebBizBroadcastNewBroadcastDrawer] messageContent updated: body="',
                    '...", hasMedia=',
                    ", hasCTAButton=",
                    "",
                  ])),
                T.substring(0, 50),
                String(F != null),
                String(e != null),
              ),
              {
                body: T,
                ctaButtonJson: e != null ? e : void 0,
                mediaMimeType: F == null ? void 0 : F.type,
                selectedMediaFile: F,
              }
            );
          },
          [T, F, $],
        ),
        re = g(
          function () {
            return Array.from(R).map(function (e) {
              return o("WAWebWidToJid").widToBroadcastJid(e.id);
            });
          },
          [R],
        ),
        oe = y(!1),
        ae = oe[0],
        ie = oe[1],
        le = h(null),
        se = h(null),
        ue = _(
          function (e) {
            var t;
            (D(e),
              (t = se.current) == null || t.setTextContent(e),
              (le.current = e));
          },
          [D],
        ),
        ce = _(
          function (e) {
            (D(e),
              le.current != null &&
                e.length === 0 &&
                ((le.current = null),
                o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.genAIAiTextCleared()));
          },
          [D],
        ),
        de = _(
          function () {
            o("WAWebModalManager").ModalManager.open(
              m.jsx(r("WAWebBizBroadcastGenAISuggestionsModal.react"), {
                broadcastJids: re,
                draftMessage: T,
                onAuthFailure: function () {},
                onClose: o("WAWebModalManager").closeModalManager,
                onUseMessage: ue,
              }),
            );
          },
          [re, ue, T],
        ),
        me = _(function () {
          var e = o("WAWebBizBroadcastGenAIGating").getGenAIComposerMinWords();
          o("WAWebToastManager").ToastManager.open(
            m.jsx(o("WAWebToast.react").Toast, {
              msg: s._(
                /*BTDS*/ '_j{"*":"Add a message with at least {minWords} words to get AI suggestions.","_1":"Add a message with at least 1 word to get AI suggestions."}',
                [s._plural(e, "minWords")],
              ),
              id: o("WAWebToast.react").genId(),
            }),
          );
        }, []),
        pe = _(
          function () {
            if (o("WAWebBizBroadcastGenAIPacing").hasReachedDailyLimit()) {
              (o(
                "WAWebBusinessBroadcastUserJourneyLogger",
              ).BusinessBroadcastUserJourneyLogger.genAIDailyLimitHit(
                o("WAWebBizBroadcastGenAIPacing").getRequestCount(),
              ),
                o("WAWebToastManager").ToastManager.open(
                  m.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(
                      /*BTDS*/ "You've reached today's AI generation limit. Try again tomorrow.",
                    ),
                    id: o("WAWebToast.react").genId(),
                  }),
                ));
              return;
            }
            de();
          },
          [de],
        ),
        _e = _(
          function () {
            if (!o("WAWebBizBroadcastGenAIToS").hasAcceptedGenAIToS()) {
              (ie(!0),
                o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.genAINuxModalViewed());
              return;
            }
            if (
              o("WAWebBizBroadcastGenAIGating").countWords(T) <
              o("WAWebBizBroadcastGenAIGating").getGenAIComposerMinWords()
            ) {
              me();
              return;
            }
            pe();
          },
          [me, T, pe],
        ),
        fe = _(
          function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.genAINuxAcceptClicked(),
              ie(!1),
              !(
                o("WAWebBizBroadcastGenAIGating").countWords(T) <
                o("WAWebBizBroadcastGenAIGating").getGenAIComposerMinWords()
              ) && pe());
          },
          [T, pe],
        ),
        ge = _(function () {
          (o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.genAINuxDismissClicked(),
            ie(!1));
        }, []),
        he = _(
          function () {
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAWebBizBroadcastNewBroadcastDrawer] handleSendSuccess: Campaign created successfully, closing drawer",
                ])),
            ),
              I(),
              S());
          },
          [S, I],
        ),
        ye = g(
          function () {
            return {
              broadcastJids: re,
              budgetAmount: ee,
              checkoutData: q,
              contacts: te,
              entryPoint: i,
              hasPendingBillingAction:
                (Z == null ? void 0 : Z.wizardName) != null &&
                (q != null
                  ? o(
                      "WAWebBizBroadcastCheckoutUtils",
                    ).calculateCreditsAndPaidRecipients(q, O.length)
                      .numberOfPaidRecipients > 0
                  : O.length > 0),
              isLoadingCheckoutOrBilling: U || Y,
              messageContent: ne,
              onSendSuccess: he,
              recipientWids: O,
              selectedChats: R,
            };
          },
          [
            re,
            ee,
            q,
            te,
            i,
            he,
            Y,
            U,
            ne,
            O,
            Z == null ? void 0 : Z.wizardName,
            R,
          ],
        ),
        Ce = m.jsxs(m.Fragment, {
          children: [
            m.jsx(r("WAWebBizBroadcastAudienceSection.react"), {
              selectedChats: R,
              setSelectedChats: L,
              entryPoint: i,
              onOpenUpsertAudience: v,
              onExistingAudiences: p,
              onImportAudience: b,
            }),
            m.jsx(r("WAWebBizBroadcastMessageSection.react"), {
              attachmentData: M,
              buttonData: $,
              entryPoint: i,
              message: T,
              onButtonDataChange: A,
              onGenAIPress: _e,
              onMessageChange: ce,
              richTextInputRef: se,
              setAttachmentData: w,
            }),
            m.jsx(r("WAWebBizBroadcastDetailsSection.react"), {
              entryPoint: i,
              onBillingInfoChanged: J,
            }),
          ],
        }),
        be = m.jsxs(m.Fragment, {
          children: [
            m.jsx(r("WAWebBizBroadcastPreviewSection.react"), {
              attachmentData: M,
              buttonData: $,
              message: T,
            }),
            m.jsx(r("WAWebBizBroadcastBillingSummarySection.react"), {
              entryPoint: i,
              recipientCount: O.length,
              checkoutData: q,
              isLoadingCheckout: U,
              billingInfo: X,
              isLoadingBillingInfo: Y,
            }),
          ],
        });
      return m.jsxs(r("WAWebDrawer.react"), {
        ref: l,
        testid: void 0,
        tsNavigationData: { surface: "unknown", viewName: "biz-new-broadcast" },
        children: [
          ae &&
            m.jsx(r("WAWebBizBroadcastGenAINUXModal.react"), {
              onAccept: fe,
              onClose: ge,
            }),
          m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: E,
            onBack: d,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            focusBackOrCancel: !0,
          }),
          m.jsx(r("WAWebDrawerBody.react"), {
            isRefresh: !0,
            xstyle: C.body,
            children: m.jsx(r("WAWebBizTwoColumnLayout.react"), {
              primaryContent: Ce,
              secondaryContent: be,
            }),
          }),
          m.jsx(
            o("WAWebBizBroadcastSendContext.react").BroadcastSendContext
              .Provider,
            {
              value: ye,
              children: m.jsx(r("WAWebBizBroadcastDrawerFooter.react"), {}),
            },
          ),
        ],
      });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.entryPoint,
        r = e.onBack,
        a = e.onOpenExistingAudiences,
        i = e.onOpenImportAudience,
        l = e.onOpenUpsertAudience,
        s = e.onSendSuccess,
        u = e.ref,
        c = e.selectedChats,
        d = e.setSelectedChats,
        p = e.title,
        _;
      return (
        t[0] !== n ||
        t[1] !== r ||
        t[2] !== a ||
        t[3] !== i ||
        t[4] !== l ||
        t[5] !== s ||
        t[6] !== u ||
        t[7] !== c ||
        t[8] !== d ||
        t[9] !== p
          ? ((_ = m.jsx(
              o("WAWebBizBroadcastBusinessInfoContext.react")
                .WAWebBizBroadcastBusinessInfoProvider,
              {
                children: m.jsx(b, {
                  entryPoint: n,
                  innerRef: u,
                  onBack: r,
                  onOpenExistingAudiences: a,
                  onOpenImportAudience: i,
                  onOpenUpsertAudience: l,
                  onSendSuccess: s,
                  selectedChats: c,
                  setSelectedChats: d,
                  title: p,
                }),
              },
            )),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a),
            (t[3] = i),
            (t[4] = l),
            (t[5] = s),
            (t[6] = u),
            (t[7] = c),
            (t[8] = d),
            (t[9] = p),
            (t[10] = _))
          : (_ = t[10]),
        _
      );
    }
    l.default = v;
  },
  226,
);
