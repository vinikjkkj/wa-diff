__d(
  "WAWebBizBroadcastSendNowButton.react",
  [
    "WAWebBizBroadcastCheckoutUtils",
    "WAWebBizBroadcastSendContext.react",
    "WAWebBizBroadcastsCreationStrings",
    "WAWebBizBroadcastsRecipientUtils",
    "WAWebBroadcastConsts",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebClock",
    "WAWebFlex.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWidToJid",
    "WDSButton.react",
    "WDSTooltip.react",
    "react",
    "react-compiler-runtime",
    "useWAWebBizBroadcastCreateCampaign",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useMemo,
      d = u.useState;
    function m() {
      var e = o("react-compiler-runtime").c(35),
        t = o(
          "WAWebBizBroadcastSendContext.react",
        ).useWAWebBizBroadcastSendContext(),
        n = t.broadcastJids,
        a = t.budgetAmount,
        i = t.checkoutData,
        l = t.contacts,
        u = t.entryPoint,
        c = t.hasPendingBillingAction,
        m = t.isLoadingCheckoutOrBilling,
        f = t.messageContent,
        g = t.onSendSuccess,
        h = t.selectedChats,
        y = r("useWAWebBizBroadcastCreateCampaign")(),
        C = y.createCampaign,
        b = y.hasRequiredBusinessInfo,
        v = y.isCreatingCampaign,
        S = y.isLoadingBusinessInfo,
        R = d(_),
        L = R[0],
        E;
      e[0] !== h
        ? ((E = Array.from(h).map(p)), (e[0] = h), (e[1] = E))
        : (E = e[1]);
      var k = E,
        I;
      e[2] !== k ||
      e[3] !== n ||
      e[4] !== a ||
      e[5] !== L ||
      e[6] !== i ||
      e[7] !== l ||
      e[8] !== C ||
      e[9] !== u ||
      e[10] !== f ||
      e[11] !== g
        ? ((I = function () {
            if (n.length !== 0) {
              o(
                "WAWebBusinessBroadcastUserJourneyLogger",
              ).BusinessBroadcastUserJourneyLogger.createBroadcastSendClicked(
                n,
                l.length,
                u,
              );
              var e = o(
                  "WAWebBizBroadcastCheckoutUtils",
                ).calculateCreditsAndPaidRecipients(i, l.length),
                t = e.numberOfCreditsUsed;
              C({
                audiences: k,
                budgetAmount: a,
                campaignName: L,
                contacts: l,
                existingBroadcastJid: n[0],
                freeReservedMsgs: t > 0 ? t : null,
                messageContent: f,
                onError: function (t) {
                  (o(
                    "WAWebBusinessBroadcastUserJourneyLogger",
                  ).BusinessBroadcastUserJourneyLogger.sendBroadcastResult(
                    l.length,
                    "failure",
                    t,
                  ),
                    o("WAWebToastManager").ToastManager.open(
                      s.jsx(o("WAWebToast.react").Toast, { msg: t }),
                    ));
                },
                onSuccess: function () {
                  (o(
                    "WAWebBusinessBroadcastUserJourneyLogger",
                  ).BusinessBroadcastUserJourneyLogger.sendBroadcastResult(
                    l.length,
                    "success",
                  ),
                    g());
                },
              });
            }
          }),
          (e[2] = k),
          (e[3] = n),
          (e[4] = a),
          (e[5] = L),
          (e[6] = i),
          (e[7] = l),
          (e[8] = C),
          (e[9] = u),
          (e[10] = f),
          (e[11] = g),
          (e[12] = I))
        : (I = e[12]);
      var T = I,
        D;
      e[13] !== f.body || e[14] !== f.selectedMediaFile
        ? ((D =
            (f.body == null || f.body.trim() === "") &&
            f.selectedMediaFile == null),
          (e[13] = f.body),
          (e[14] = f.selectedMediaFile),
          (e[15] = D))
        : (D = e[15]);
      var x = D,
        $ =
          n.length === 0 ||
          S ||
          !b ||
          v ||
          l.length < o("WAWebBroadcastConsts").MIN_BROADCAST_RECIPIENTS ||
          l.length >
            o("WAWebBizBroadcastsRecipientUtils").getRecipientLimit() ||
          c === !0 ||
          x,
        P = n.length === 0,
        N = c === !0,
        M;
      e[16] !== l.length ||
      e[17] !== b ||
      e[18] !== v ||
      e[19] !== S ||
      e[20] !== x ||
      e[21] !== P ||
      e[22] !== N
        ? ((M = o(
            "WAWebBizBroadcastsCreationStrings",
          ).getSendNowButtonDisabledReason({
            broadcastJidIsNull: P,
            contactsCount: l.length,
            hasPendingBillingAction: N,
            hasRequiredBusinessInfo: b,
            isCreatingCampaign: v,
            isLoadingBusinessInfo: S,
            isMessageEmpty: x,
          })),
          (e[16] = l.length),
          (e[17] = b),
          (e[18] = v),
          (e[19] = S),
          (e[20] = x),
          (e[21] = P),
          (e[22] = N),
          (e[23] = M))
        : (M = e[23]);
      var w = M,
        A = v || m,
        F;
      e[24] !== v
        ? ((F = o("WAWebBizBroadcastsCreationStrings").getSendNowButtonLabel(
            v,
          )),
          (e[24] = v),
          (e[25] = F))
        : (F = e[25]);
      var O;
      e[26] !== T || e[27] !== $ || e[28] !== A || e[29] !== F
        ? ((O = s.jsx(r("WDSButton.react"), {
            variant: "filled",
            size: "medium",
            type: "default",
            disabled: $,
            loading: A,
            onPress: T,
            label: F,
            testid: void 0,
          })),
          (e[26] = T),
          (e[27] = $),
          (e[28] = A),
          (e[29] = F),
          (e[30] = O))
        : (O = e[30]);
      var B = O,
        W = !$,
        q = w != null ? w : "",
        U;
      return (
        e[31] !== B || e[32] !== q || e[33] !== W
          ? ((U = s.jsx(o("WAWebFlex.react").FlexRow, {
              children: s.jsx(r("WDSTooltip.react"), {
                disabled: W,
                label: q,
                children: B,
              }),
            })),
            (e[31] = B),
            (e[32] = q),
            (e[33] = W),
            (e[34] = U))
          : (U = e[34]),
        U
      );
    }
    function p(e) {
      var t,
        n = (t = e.broadcastMetadata) == null ? void 0 : t.recipients,
        r = {
          broadcastJid: o("WAWebWidToJid").widToBroadcastJid(e.id),
          recipientsCount: n ? n.toArray().length : 0,
        };
      return r;
    }
    function _() {
      return o("WAWebClock")
        .Clock.broadcastCampaignCreatedStr(Date.now() / 1e3)
        .toString();
    }
    l.default = m;
  },
  98,
);
