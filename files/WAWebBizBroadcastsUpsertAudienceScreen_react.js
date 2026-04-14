__d(
  "WAWebBizBroadcastsUpsertAudienceScreen.react",
  [
    "WAJids",
    "WAWebBizBroadcastsRecipientUtils",
    "WAWebBizBroadcastsSelectedRecipientsSection.react",
    "WAWebBizBroadcastsUpsertAudienceHeader.react",
    "WAWebBizBroadcastsUpsertAudienceList.react",
    "WAWebBizBroadcastsUpsertAudienceSaveButton.react",
    "WAWebBizTwoColumnLayout.react",
    "WAWebBroadcastAudienceNameFieldCard.react",
    "WAWebBroadcastConsts",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebFrontendContactGetters",
    "WAWebWidToJid",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect,
      m = u.useMemo,
      p = u.useState,
      _ = {
        container: { marginInlineStart: "x1sbwfh8", $$css: !0 },
        drawerBody: { backgroundColor: "x1h3rtpe", $$css: !0 },
      };
    function f(e) {
      var t,
        n,
        a = e.chat,
        i = e.entryPoint,
        l = e.isBBCreationFlow,
        u = l === void 0 ? !1 : l,
        f = e.onBack,
        g = e.onNewAudienceSuccess,
        h = e.onSendBroadcast,
        y = e.onUpdateAudienceSuccess,
        C = e.suggestedAudienceData,
        b =
          (a != null && ((t = a.contact.name) == null ? void 0 : t.trim())) ||
          "",
        v =
          a != null
            ? (n = a.broadcastMetadata) == null || (n = n.recipients) == null
              ? void 0
              : n.map(function (e) {
                  return e.id.user;
                })
            : C == null
              ? void 0
              : C.initialRecipientIds,
        S = a != null ? o("WAWebWidToJid").widToBroadcastJid(a.id) : null;
      d(
        function () {
          o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.createAudienceViewed(i);
        },
        [i],
      );
      var R = p(b),
        L = R[0],
        E = R[1],
        k = p(new Set(v)),
        I = k[0],
        T = k[1],
        D = c(function (e) {
          var t = [];
          for (var n of e)
            if (n !== "") {
              var r = o("WAWebBizBroadcastsRecipientUtils").getContactByUserId(
                n,
              );
              r != null &&
                t.push({
                  lid: o("WAJids").toLidUserJid(n),
                  phone: o(
                    "WAWebFrontendContactGetters",
                  ).getFormattedPhoneAndType(r).displayName,
                });
            }
          return t;
        }, []),
        x = D(v != null ? v : []),
        $ = D(Array.from(I)),
        P = I.size < o("WAWebBroadcastConsts").MIN_BROADCAST_RECIPIENTS,
        N = m(
          function () {
            return {
              entryPoint: i,
              suggestedAudienceCardId:
                C == null ? void 0 : C.suggestedAudienceCardId,
            };
          },
          [i, C == null ? void 0 : C.suggestedAudienceCardId],
        );
      return s.jsxs(r("WAWebDrawer.react"), {
        testid: void 0,
        xstyle: _.container,
        children: [
          s.jsx(r("WAWebBizBroadcastsUpsertAudienceHeader.react"), {
            entryPoint: i,
            isEdit: a != null,
            onBack: f,
          }),
          s.jsx(r("WAWebDrawerBody.react"), {
            xstyle: _.drawerBody,
            children: s.jsx(r("WAWebBizTwoColumnLayout.react"), {
              flipResizeOrder: !0,
              primaryContent: s.jsx(
                r("WAWebBizBroadcastsUpsertAudienceList.react"),
                {
                  entryPoint: i,
                  selectedRecipientIds: I,
                  setSelectedRecipientIds: T,
                },
              ),
              secondaryContent: s.jsxs(s.Fragment, {
                children: [
                  s.jsx(r("WAWebBroadcastAudienceNameFieldCard.react"), {
                    onValueChange: E,
                    value: L,
                    testid: void 0,
                  }),
                  I.size > 0 &&
                    s.jsx(
                      r("WAWebBizBroadcastsSelectedRecipientsSection.react"),
                      { selectedRecipientIds: I, setSelectedRecipientIds: T },
                    ),
                ],
              }),
            }),
          }),
          s.jsx(r("WAWebBizBroadcastsUpsertAudienceSaveButton.react"), {
            broadcastJid: S,
            contacts: $,
            broadcastListName: L,
            isBBCreationFlow: u,
            isDisabled: P,
            onCreateAudienceSuccess: g,
            onSendBroadcast: h,
            onUpdateAudienceSuccess: y,
            originalAudienceName: b,
            originalRecipientContactData: x,
            loggingContext: N,
          }),
        ],
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
