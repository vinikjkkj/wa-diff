__d(
  "WAWebBizBroadcastsUpsertAudienceSaveButton.react",
  [
    "WAWebAudienceExpressionTypes",
    "WAWebBizBroadcastsAudienceSelectionStrings",
    "WAWebBroadcastListAction",
    "WAWebBroadcastODS",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebFlex.react",
    "WAWebNoop",
    "WDSButton.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useCallback,
      c = {
        button: {
          marginTop: "x98l61r",
          marginInlineEnd: "xviac27",
          marginBottom: "x1ua1l7f",
          marginInlineStart: "xlese2p",
          maxWidth: "x1mvdoyg",
          width: "xh8yej3",
          $$css: !0,
        },
        buttonRow: { rowGap: "x1qvou4u", columnGap: "x1s70e7g", $$css: !0 },
      };
    function d(e) {
      var t = e.audienceExpression,
        a = e.broadcastJid,
        i = e.broadcastListName,
        l = e.contacts,
        d = e.isBBCreationFlow,
        m = d === void 0 ? !1 : d,
        p = e.isDisabled,
        _ = e.loggingContext,
        f = e.onCreateAudienceSuccess,
        g = e.onSendBroadcast,
        h = e.onUpdateAudienceSuccess,
        y = e.originalAudienceName,
        C = e.originalRecipientContactData,
        b = _ == null ? void 0 : _.suggestedAudienceCardId,
        v = (_ == null ? void 0 : _.isImport) === !0,
        S = _ == null ? void 0 : _.entryPoint,
        R = u(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            o("WAWebBroadcastODS").logAudienceSave();
            try {
              if (a != null)
                return (
                  yield o("WAWebBroadcastListAction").editBroadcastListAction(
                    a,
                    l,
                    i,
                    t,
                  ),
                  o("WAWebBroadcastODS").logAudienceSaveSuccess(),
                  o(
                    "WAWebBusinessBroadcastUserJourneyLogger",
                  ).BusinessBroadcastUserJourneyLogger.createAudienceSaveClicked(
                    a,
                    l.length,
                    !0,
                    b,
                    S,
                  ),
                  v
                    ? o(
                        "WAWebBusinessBroadcastUserJourneyLogger",
                      ).BusinessBroadcastUserJourneyLogger.importAudienceSaveResult(
                        l.length,
                        "success",
                        void 0,
                        S,
                      )
                    : o(
                        "WAWebBusinessBroadcastUserJourneyLogger",
                      ).BusinessBroadcastUserJourneyLogger.createAudienceSaveResult(
                        a,
                        l.length,
                        !0,
                        "success",
                        void 0,
                        S,
                      ),
                  {
                    audienceExpression:
                      t != null
                        ? t
                        : o("WAWebAudienceExpressionTypes")
                            .DEFAULT_AUDIENCE_EXPRESSION,
                    broadcastJid: a,
                    lastBroadcastTimestamp: null,
                    name: i,
                    recipientCount: l.length,
                  }
                );
              var e = yield o(
                "WAWebBroadcastListAction",
              ).createBroadcastListAction(l, i, t);
              return (
                o("WAWebBroadcastODS").logAudienceSaveSuccess(),
                o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.createAudienceSaveClicked(
                  e,
                  l.length,
                  !1,
                  b,
                  S,
                ),
                v
                  ? o(
                      "WAWebBusinessBroadcastUserJourneyLogger",
                    ).BusinessBroadcastUserJourneyLogger.importAudienceSaveResult(
                      l.length,
                      "success",
                      void 0,
                      S,
                    )
                  : o(
                      "WAWebBusinessBroadcastUserJourneyLogger",
                    ).BusinessBroadcastUserJourneyLogger.createAudienceSaveResult(
                      e,
                      l.length,
                      !1,
                      "success",
                      void 0,
                      S,
                    ),
                {
                  audienceExpression:
                    t != null
                      ? t
                      : o("WAWebAudienceExpressionTypes")
                          .DEFAULT_AUDIENCE_EXPRESSION,
                  broadcastJid: e,
                  lastBroadcastTimestamp: null,
                  name: i,
                  recipientCount: l.length,
                }
              );
            } catch (e) {
              o("WAWebBroadcastODS").logAudienceSaveError();
              var n = e instanceof Error ? e.message : "unknown";
              throw (
                v
                  ? o(
                      "WAWebBusinessBroadcastUserJourneyLogger",
                    ).BusinessBroadcastUserJourneyLogger.importAudienceSaveResult(
                      l.length,
                      "failure",
                      n,
                      S,
                    )
                  : o(
                      "WAWebBusinessBroadcastUserJourneyLogger",
                    ).BusinessBroadcastUserJourneyLogger.createAudienceSaveResult(
                      a != null ? a : "",
                      l.length,
                      a != null,
                      "failure",
                      n,
                      S,
                    ),
                e
              );
            }
          }),
          [a, l, i, t, b, v, S],
        ),
        L = u(
          function () {
            R()
              .then(function (e) {
                a != null && h != null && y != null && C != null
                  ? h(e, y, C)
                  : f(e);
              })
              .catch(r("WAWebNoop"));
          },
          [R, a, h, y, C, f],
        ),
        E = u(
          function () {
            g != null &&
              (S != null &&
                o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.createBroadcastChooseAudienceClicked(
                  b,
                  S,
                ),
              R().then(g).catch(r("WAWebNoop")));
          },
          [b, S, g, R],
        );
      return s.jsx(o("WAWebFlex.react").FlexColumn, {
        align: "center",
        children: s.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "end",
          justify: "end",
          xstyle: [c.button, c.buttonRow],
          children: [
            s.jsx(r("WDSButton.react"), {
              disabled: p,
              label: o(
                "WAWebBizBroadcastsAudienceSelectionStrings",
              ).getSaveAudienceButtonLabel(),
              onPress: L,
              testid: void 0,
              variant: g != null ? "tonal" : "filled",
            }),
            !m &&
              a == null &&
              g != null &&
              s.jsx(r("WDSButton.react"), {
                disabled: p,
                label: o(
                  "WAWebBizBroadcastsAudienceSelectionStrings",
                ).getSendBroadcastButtonLabel(),
                onPress: E,
                testid: void 0,
                variant: "filled",
              }),
          ],
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
