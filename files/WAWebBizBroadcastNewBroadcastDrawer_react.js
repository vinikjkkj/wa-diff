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
    "WAWebBizBroadcastCreationQPLLogger",
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
          (o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.createBroadcastViewed(i),
            o("WAWebBizBroadcastCreationQPLLogger").qplCreatePoint(
              o("WAWebBizBroadcastCreationQPLLogger").CreateBroadcastQPLPoints
                .DRAWER_MOUNTED,
            ));
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
        V = h(!1);
      f(
        function () {
          !U &&
            !V.current &&
            ((V.current = !0),
            o("WAWebBizBroadcastCreationQPLLogger").qplCreatePoint(
              o("WAWebBizBroadcastCreationQPLLogger").CreateBroadcastQPLPoints
                .CHECKOUT_FETCH_END,
            ));
        },
        [U],
      );
      var H = o(
          "WAWebBizBroadcastBusinessInfoContext.react",
        ).useWAWebBizBroadcastBusinessInfoContext(),
        G = H.adAccountId,
        z = q == null ? void 0 : q.costCurrency,
        j = (a = q == null ? void 0 : q.costOffset) != null ? a : 1,
        K = q == null ? void 0 : q.costBeforeTax,
        Q = g(
          function () {
            if (!(z == null || K == null))
              return { amount: String(K / j), currency: z };
          },
          [K, z, j],
        ),
        X = o(
          "useWAWebBizBroadcastBillingInfo",
        ).useWAWebBizBroadcastBillingInfo({
          assetId: G != null ? G : "",
          budget: Q,
        }),
        Y = X.billingInfo,
        J = X.isLoading,
        Z = X.refetch,
        ee = X.requiredAction,
        te = h(!1);
      f(
        function () {
          !J &&
            !te.current &&
            ((te.current = !0),
            o("WAWebBizBroadcastCreationQPLLogger").qplCreatePoint(
              o("WAWebBizBroadcastCreationQPLLogger").CreateBroadcastQPLPoints
                .BILLING_FETCH_END,
            ));
        },
        [J],
      );
      var ne = h(!1);
      f(
        function () {
          V.current &&
            te.current &&
            !U &&
            !J &&
            !ne.current &&
            ((ne.current = !0),
            o("WAWebBizBroadcastCreationQPLLogger").qplCreateEnd(2));
        },
        [U, J],
      );
      var re = g(
          function () {
            return K == null || j === 0 ? null : String(K / j);
          },
          [K, j],
        ),
        oe = g(
          function () {
            return O.flatMap(function (e) {
              var t = o("WAWebContactCollection").ContactCollection.get(e);
              return t != null ? [t] : [];
            });
          },
          [O],
        ),
        ae = g(
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
        ie = g(
          function () {
            return Array.from(R).map(function (e) {
              return o("WAWebWidToJid").widToBroadcastJid(e.id);
            });
          },
          [R],
        ),
        le = y(!1),
        se = le[0],
        ue = le[1],
        ce = h(null),
        de = h(null),
        me = _(
          function (e) {
            var t;
            (D(e),
              (t = de.current) == null || t.setTextContent(e),
              (ce.current = e));
          },
          [D],
        ),
        pe = _(
          function (e) {
            (D(e),
              ce.current != null &&
                e.length === 0 &&
                ((ce.current = null),
                o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.genAIAiTextCleared()));
          },
          [D],
        ),
        _e = _(
          function () {
            o("WAWebModalManager").ModalManager.open(
              m.jsx(r("WAWebBizBroadcastGenAISuggestionsModal.react"), {
                broadcastJids: ie,
                draftMessage: T,
                onAuthFailure: function () {},
                onClose: o("WAWebModalManager").closeModalManager,
                onUseMessage: me,
              }),
            );
          },
          [ie, me, T],
        ),
        fe = _(function () {
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
        ge = _(
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
            _e();
          },
          [_e],
        ),
        he = _(
          function () {
            if (!o("WAWebBizBroadcastGenAIToS").hasAcceptedGenAIToS()) {
              (ue(!0),
                o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.genAINuxModalViewed());
              return;
            }
            if (
              o("WAWebBizBroadcastGenAIGating").countWords(T) <
              o("WAWebBizBroadcastGenAIGating").getGenAIComposerMinWords()
            ) {
              fe();
              return;
            }
            ge();
          },
          [fe, T, ge],
        ),
        ye = _(
          function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.genAINuxAcceptClicked(),
              ue(!1),
              !(
                o("WAWebBizBroadcastGenAIGating").countWords(T) <
                o("WAWebBizBroadcastGenAIGating").getGenAIComposerMinWords()
              ) && ge());
          },
          [T, ge],
        ),
        Ce = _(function () {
          (o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.genAINuxDismissClicked(),
            ue(!1));
        }, []),
        be = _(
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
        ve = g(
          function () {
            return {
              broadcastJids: ie,
              budgetAmount: re,
              checkoutData: q,
              contacts: oe,
              entryPoint: i,
              hasPendingBillingAction:
                (ee == null ? void 0 : ee.wizardName) != null &&
                (q != null
                  ? o(
                      "WAWebBizBroadcastCheckoutUtils",
                    ).calculateCreditsAndPaidRecipients(q, O.length)
                      .numberOfPaidRecipients > 0
                  : O.length > 0),
              isLoadingCheckoutOrBilling: U || J,
              messageContent: ae,
              onSendSuccess: be,
              recipientWids: O,
              selectedChats: R,
            };
          },
          [
            ie,
            re,
            q,
            oe,
            i,
            be,
            J,
            U,
            ae,
            O,
            ee == null ? void 0 : ee.wizardName,
            R,
          ],
        ),
        Se = m.jsxs(m.Fragment, {
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
              onGenAIPress: he,
              onMessageChange: pe,
              richTextInputRef: de,
              setAttachmentData: w,
            }),
            m.jsx(r("WAWebBizBroadcastDetailsSection.react"), {
              entryPoint: i,
              onBillingInfoChanged: Z,
            }),
          ],
        }),
        Re = m.jsxs(m.Fragment, {
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
              billingInfo: Y,
              isLoadingBillingInfo: J,
            }),
          ],
        });
      return m.jsxs(r("WAWebDrawer.react"), {
        ref: l,
        testid: void 0,
        tsNavigationData: { surface: "unknown", viewName: "biz-new-broadcast" },
        children: [
          se &&
            m.jsx(r("WAWebBizBroadcastGenAINUXModal.react"), {
              onAccept: ye,
              onClose: Ce,
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
              primaryContent: Se,
              secondaryContent: Re,
            }),
          }),
          m.jsx(
            o("WAWebBizBroadcastSendContext.react").BroadcastSendContext
              .Provider,
            {
              value: ve,
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
