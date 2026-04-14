__d(
  "WAWebBizBroadcastGenAISuggestionsModal.react",
  [
    "fbt",
    "WAWebBaseShimmerComponents.react",
    "WAWebBizBroadcastGenAICustomizeModal.react",
    "WAWebBizBroadcastGenAIError",
    "WAWebBizBroadcastGenAIGating",
    "WAWebBizBroadcastGenAIPacing",
    "WAWebBizBroadcastGenAIRecommendationJob",
    "WAWebBizBroadcastGenAIRecommendationModel",
    "WAWebBizBroadcastGenAISuggestionCard.react",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebConfirmPopup.react",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WDSButton.react",
    "WDSIconIcClose.react",
    "WDSIconIcRefresh.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useRef,
      _ = c.useState,
      f = [0, 1, 2, 3];
    function g(e) {
      var t = e.broadcastJids,
        a = e.draftMessage,
        i = e.onAuthFailure,
        l = e.onClose,
        c = e.onUseMessage,
        f = _({ type: "loading" }),
        g = f[0],
        b = f[1],
        v = _(-1),
        S = v[0],
        R = v[1],
        L = p(-1),
        E = p(0),
        k = p(0),
        I = p(!1),
        T = d(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (b({ type: "loading" }),
              R(-1),
              (L.current = -1),
              (E.current = Date.now()));
            try {
              var e = yield o(
                "WAWebBizBroadcastGenAIRecommendationJob",
              ).fetchBroadcastGenAIRecommendation({
                broadcastJids: t != null ? t : void 0,
                model: o("WAWebBizBroadcastGenAIGating").getGenAIModel(),
                userMessageDraft: a,
              });
              switch (e.type) {
                case "auth-failure": {
                  (i(), l());
                  return;
                }
                case "graphql-error": {
                  var n = o("WAWebBizBroadcastGenAIError").GenAIErrorType
                    .GENERATION_FAILED;
                  (b({ errorType: n, type: "error" }),
                    o(
                      "WAWebBusinessBroadcastUserJourneyLogger",
                    ).BusinessBroadcastUserJourneyLogger.genAIErrorShown(n));
                  return;
                }
                case "error": {
                  var r = e.errorCode,
                    s =
                      r === "INVALID_INPUT"
                        ? o("WAWebBizBroadcastGenAIError").GenAIErrorType
                            .INVALID_INPUT
                        : r === "INSUFFICIENT_CONTEXT"
                          ? o("WAWebBizBroadcastGenAIError").GenAIErrorType
                              .INSUFFICIENT_CONTEXT
                          : r === "IndividualPacingLimitReached"
                            ? o("WAWebBizBroadcastGenAIError").GenAIErrorType
                                .RATE_LIMIT
                            : o("WAWebBizBroadcastGenAIError").GenAIErrorType
                                .GENERATION_FAILED;
                  (b({ errorType: s, type: "error" }),
                    o(
                      "WAWebBusinessBroadcastUserJourneyLogger",
                    ).BusinessBroadcastUserJourneyLogger.genAIErrorShown(s));
                  return;
                }
                case "success": {
                  if (e.toneMessagePairs.length === 0) {
                    var u = o("WAWebBizBroadcastGenAIError").GenAIErrorType
                      .EMPTY_RESPONSE;
                    (b({ errorType: u, type: "error" }),
                      o(
                        "WAWebBusinessBroadcastUserJourneyLogger",
                      ).BusinessBroadcastUserJourneyLogger.genAIErrorShown(u));
                    return;
                  }
                  o("WAWebBizBroadcastGenAIPacing").incrementRequestCount();
                  var c = o(
                    "WAWebBizBroadcastGenAIRecommendationModel",
                  ).parseRecommendationResponse(e, null);
                  (b({ result: c, type: "success" }),
                    o(
                      "WAWebBusinessBroadcastUserJourneyLogger",
                    ).BusinessBroadcastUserJourneyLogger.genAISuggestionsShown(
                      c.toneMessagePairs.length,
                      Date.now() - E.current,
                    ));
                  break;
                }
                default:
                  break;
              }
            } catch (e) {
              var d = o("WAWebBizBroadcastGenAIError").GenAIErrorType
                .GENERATION_FAILED;
              (b({ errorType: d, type: "error" }),
                o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.genAIErrorShown(d));
            }
          }),
          [t, a, i, l],
        );
      m(
        function () {
          ((k.current = Date.now()), T());
        },
        [T],
      );
      var D = d(function (e, t) {
          (R(e),
            (L.current = e),
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.genAICardTapped(t, e));
        }, []),
        x = d(
          function () {
            (o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.genAIModalClosed(
              I.current ? "used_message" : "dismissed",
              Date.now() - k.current,
            ),
              l());
          },
          [l],
        ),
        $ = d(
          function () {
            if (g.type === "success") {
              var e = L.current,
                t = g.result.toneMessagePairs[e];
              if (t != null && t.message != null) {
                var n, r;
                ((I.current = !0),
                  o(
                    "WAWebBusinessBroadcastUserJourneyLogger",
                  ).BusinessBroadcastUserJourneyLogger.genAISuggestionUsed(
                    (n = t.tone) != null ? n : "",
                    e,
                  ),
                  o(
                    "WAWebBusinessBroadcastUserJourneyLogger",
                  ).BusinessBroadcastUserJourneyLogger.genAIAiTextUsed(
                    (r = t.tone) != null ? r : "",
                  ),
                  c(t.message),
                  x());
              }
            }
          },
          [x, c, g],
        ),
        P = d(
          function () {
            (g.type === "success" &&
              o(
                "WAWebBusinessBroadcastUserJourneyLogger",
              ).BusinessBroadcastUserJourneyLogger.genAIRefreshTapped(
                g.result.toneMessagePairs.length,
              ),
              T());
          },
          [T, g],
        ),
        N = d(
          function () {
            (g.type === "error" &&
              o(
                "WAWebBusinessBroadcastUserJourneyLogger",
              ).BusinessBroadcastUserJourneyLogger.genAIErrorRetryTapped(
                g.errorType,
              ),
              T());
          },
          [T, g],
        ),
        M = d(
          function () {
            if (g.type === "success") {
              var e = g.result.toneMessagePairs[L.current];
              if (e != null) {
                var t;
                b({
                  followUps: (t = g.result.followUps) != null ? t : [],
                  result: g.result,
                  selected: e,
                  type: "customizing",
                });
              }
            }
          },
          [g],
        ),
        w = d(
          function () {
            g.type === "customizing" &&
              (b({ result: g.result, type: "success" }),
              R(-1),
              (L.current = -1));
          },
          [g],
        ),
        A = d(
          function (e) {
            ((I.current = !0), c(e), x());
          },
          [x, c],
        ),
        F = g.type === "loading",
        O = S === -1 || F;
      return g.type === "customizing"
        ? u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
            type: o("WAWebModal.react").ModalTheme.Auto,
            onOverlayClick: x,
            children: u.jsx(o("WAWebFlex.react").FlexColumn, {
              align: "stretch",
              xstyle: C.root,
              children: u.jsx(r("WAWebBizBroadcastGenAICustomizeModal.react"), {
                followUps: g.followUps,
                onAuthFailure: i,
                onBack: w,
                onUseMessage: A,
                selectedSuggestion: g.selected,
              }),
            }),
          })
        : u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
            type: o("WAWebModal.react").ModalTheme.Auto,
            onOverlayClick: x,
            children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "stretch",
              xstyle: C.root,
              children: [
                u.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "start",
                  xstyle: C.header,
                  children: [
                    u.jsx(r("WDSButton.react"), {
                      Icon: r("WDSIconIcClose.react"),
                      onPress: x,
                      size: "medium",
                      variant: "borderless",
                    }),
                    u.jsxs(o("WAWebFlex.react").FlexColumn, {
                      xstyle: C.headerText,
                      children: [
                        u.jsx(r("WDSText.react"), {
                          type: "Body1",
                          colorName: "contentDefault",
                          children: s._(/*BTDS*/ "Suggested messages"),
                        }),
                        u.jsx(r("WDSText.react"), {
                          type: "Body3",
                          colorName: "contentDeemphasized",
                          children: s._(
                            /*BTDS*/ "Check that the AI-generated text is accurate.",
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsxs(o("WAWebFlex.react").FlexColumn, {
                  align: "stretch",
                  justify: g.type === "loading" ? "center" : void 0,
                  xstyle: [C.body, F && C.bodyLoading],
                  children: [
                    g.type === "loading" && u.jsx(h, {}),
                    g.type === "error" &&
                      u.jsx(y, { errorType: g.errorType, onRetry: N }),
                    g.type === "success" &&
                      u.jsx("div", {
                        className: "x78zum5 xdt5ytf x8a3fw1",
                        role: "listbox",
                        children: g.result.toneMessagePairs.map(
                          function (e, t) {
                            var n, o, a;
                            return u.jsx(
                              r("WAWebBizBroadcastGenAISuggestionCard.react"),
                              {
                                isSelected: t === S,
                                message: (o = e.message) != null ? o : "",
                                onSelect: function () {
                                  var n;
                                  return D(t, (n = e.tone) != null ? n : "");
                                },
                                tone: (a = e.tone) != null ? a : "",
                              },
                              ((n = e.tone) != null ? n : "tone") + "-" + t,
                            );
                          },
                        ),
                      }),
                  ],
                }),
                u.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  xstyle: C.footer,
                  children: [
                    u.jsx(r("WDSButton.react"), {
                      Icon: r("WDSIconIcRefresh.react"),
                      disabled: F,
                      onPress: P,
                      size: "medium",
                      variant: "borderless",
                    }),
                    u.jsxs(o("WAWebFlex.react").FlexRow, {
                      xstyle: C.footerButtons,
                      children: [
                        u.jsx(r("WDSButton.react"), {
                          disabled: O,
                          label: s._(/*BTDS*/ "Customize"),
                          onPress: M,
                          variant: "outline",
                        }),
                        u.jsx(r("WDSButton.react"), {
                          disabled: O,
                          label: s._(/*BTDS*/ "Use message"),
                          onPress: $,
                          variant: "filled",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h() {
      return u.jsx(o("WAWebFlex.react").FlexColumn, {
        align: "stretch",
        xstyle: C.cardList,
        children: f.map(function (e) {
          return u.jsxs(
            o("WAWebFlex.react").FlexColumn,
            {
              align: "start",
              xstyle: C.shimmerCard,
              children: [
                u.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
                  height: 14,
                  width: 160,
                }),
                u.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
                  height: 72,
                  width: "100%",
                }),
              ],
            },
            e,
          );
        }),
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.errorType,
        n = e.onRetry,
        a = o("WAWebBizBroadcastGenAIError").getErrorMessage(t);
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        align: "center",
        xstyle: C.errorContainer,
        children: [
          u.jsx("span", { className: "xhslqc4 x1f6kntn x2b8uid", children: a }),
          u.jsx(r("WDSButton.react"), {
            label: s._(/*BTDS*/ "Try again"),
            onPress: n,
            variant: "outline",
          }),
        ],
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    var C = {
      body: {
        maxHeight: "x14eurpq",
        minHeight: "x13hwc6b",
        overflowY: "x1odjw0f",
        paddingTop: "x1p57kb1",
        paddingBottom: "xvpt6g3",
        paddingInlineStart: "xdx6fka",
        paddingInlineEnd: "xvtqlqk",
        paddingLeft: null,
        paddingRight: null,
        $$css: !0,
      },
      bodyLoading: { height: "x1en3kgc", $$css: !0 },
      cardList: {
        display: "x78zum5",
        flexDirection: "xdt5ytf",
        rowGap: "x8a3fw1",
        $$css: !0,
      },
      errorContainer: {
        paddingTop: "x1sk1jro",
        paddingBottom: "x1ci70gm",
        rowGap: "x1f0uite",
        $$css: !0,
      },
      footer: {
        borderTopColor: "xx42vgk",
        borderTopStyle: "x13fuv20",
        borderTopWidth: "x178xt8z",
        columnGap: "x1s70e7g",
        justifyContent: "x1qughib",
        paddingTop: "x1xrf6ya",
        paddingBottom: "xscbp6u",
        paddingInlineStart: "xdx6fka",
        paddingInlineEnd: "xvtqlqk",
        paddingLeft: null,
        paddingRight: null,
        $$css: !0,
      },
      footerButtons: { columnGap: "x1s70e7g", $$css: !0 },
      header: {
        columnGap: "x1s70e7g",
        paddingTop: "x1p57kb1",
        paddingBottom: "xvpt6g3",
        paddingInlineStart: "xdx6fka",
        paddingInlineEnd: "xvtqlqk",
        paddingLeft: null,
        paddingRight: null,
        $$css: !0,
      },
      headerText: { rowGap: "x1b73lln", $$css: !0 },
      root: { boxSizing: "x9f619", width: "xr6pica", $$css: !0 },
      shimmerCard: { rowGap: "x1qvou4u", width: "xh8yej3", $$css: !0 },
    };
    l.default = g;
  },
  226,
);
