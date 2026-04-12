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
      var e = o(
          "WAWebBizBroadcastSendContext.react",
        ).useWAWebBizBroadcastSendContext(),
        t = e.broadcastJids,
        n = e.budgetAmount,
        a = e.checkoutData,
        i = e.contacts,
        l = e.entryPoint,
        u = e.hasPendingBillingAction,
        m = e.isLoadingCheckoutOrBilling,
        p = e.messageContent,
        _ = e.onSendSuccess,
        f = e.selectedChats,
        g = r("useWAWebBizBroadcastCreateCampaign")(),
        h = g.createCampaign,
        y = g.hasRequiredBusinessInfo,
        C = g.isCreatingCampaign,
        b = g.isLoadingBusinessInfo,
        v = d(function () {
          return o("WAWebClock")
            .Clock.broadcastCampaignCreatedStr(Date.now() / 1e3)
            .toString();
        }),
        S = v[0],
        R = c(
          function () {
            return Array.from(f).map(function (e) {
              var t,
                n = (t = e.broadcastMetadata) == null ? void 0 : t.recipients,
                r = {
                  broadcastJid: o("WAWebWidToJid").widToBroadcastJid(e.id),
                  recipientsCount: n ? n.toArray().length : 0,
                };
              return r;
            });
          },
          [f],
        ),
        L = function () {
          if (t.length !== 0) {
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.createBroadcastSendClicked(
              t,
              i.length,
              l,
            );
            var e = o(
                "WAWebBizBroadcastCheckoutUtils",
              ).calculateCreditsAndPaidRecipients(a, i.length),
              r = e.numberOfCreditsUsed;
            h({
              audiences: R,
              budgetAmount: n,
              campaignName: S,
              contacts: i,
              existingBroadcastJid: t[0],
              freeReservedMsgs: r > 0 ? r : null,
              messageContent: p,
              onError: function (t) {
                (o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.sendBroadcastResult(
                  i.length,
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
                  i.length,
                  "success",
                ),
                  _());
              },
            });
          }
        },
        E =
          (p.body == null || p.body.trim() === "") &&
          p.selectedMediaFile == null,
        k =
          t.length === 0 ||
          b ||
          !y ||
          C ||
          i.length < o("WAWebBroadcastConsts").MIN_BROADCAST_RECIPIENTS ||
          i.length >
            o("WAWebBizBroadcastsRecipientUtils").getRecipientLimit() ||
          u === !0 ||
          E,
        I = o(
          "WAWebBizBroadcastsCreationStrings",
        ).getSendNowButtonDisabledReason({
          broadcastJidIsNull: t.length === 0,
          contactsCount: i.length,
          hasPendingBillingAction: u === !0,
          hasRequiredBusinessInfo: y,
          isCreatingCampaign: C,
          isLoadingBusinessInfo: b,
          isMessageEmpty: E,
        }),
        T = s.jsx(r("WDSButton.react"), {
          variant: "filled",
          size: "medium",
          type: "default",
          disabled: k,
          loading: C || m,
          onPress: L,
          label: o("WAWebBizBroadcastsCreationStrings").getSendNowButtonLabel(
            C,
          ),
          testid: void 0,
        });
      return s.jsx(o("WAWebFlex.react").FlexRow, {
        children: s.jsx(r("WDSTooltip.react"), {
          disabled: !k,
          label: I != null ? I : "",
          children: T,
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
