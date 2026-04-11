__d(
  "WAWebBizBroadcastGenAICustomizeModal.react",
  [
    "fbt",
    "WAWebBizBroadcastGenAIChips.react",
    "WAWebBizBroadcastGenAIError",
    "WAWebBizBroadcastGenAIGating",
    "WAWebBizBroadcastGenAIPacing",
    "WAWebBizBroadcastGenAIQPLLogger",
    "WAWebBizBroadcastGenAIRecommendationJob",
    "WAWebBizBroadcastGenAIRecommendationModel",
    "WAWebBizBroadcastGenAIRefinementCarousel.react",
    "WAWebFlex.react",
    "WAWebL10N",
    "WDSButton.react",
    "WDSIconIcArrowBack.react",
    "WDSIconIcCheck.react",
    "WDSText.react",
    "WDSTextField.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useRef,
      _ = c.useState;
    function f(e) {
      var t = e.followUps,
        a = e.onAuthFailure,
        i = e.onBack,
        l = e.onUseMessage,
        c = e.selectedSuggestion,
        f = r("WAWebL10N").isRTL(),
        h =
          t.length > 0
            ? t
            : o("WAWebBizBroadcastGenAIRecommendationModel")
                .DEFAULT_REFINEMENT_CHIPS,
        y = _(function () {
          return o(
            "WAWebBizBroadcastGenAIRecommendationModel",
          ).createRefinementHistory(c.message);
        }),
        C = y[0],
        b = y[1],
        v = _(""),
        S = v[0],
        R = v[1],
        L = _(!1),
        E = L[0],
        k = L[1],
        I = _(null),
        T = I[0],
        D = I[1];
      m(
        function () {
          (o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIAnnotate({
            string: { tone: c.tone },
          }),
            o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIPoint(
              o("WAWebBizBroadcastGenAIQPLLogger").GenAIQPLPoints
                .CUSTOMIZE_OPEN,
            ));
        },
        [c.tone],
      );
      var x = p(!1),
        $ = p(C);
      m(
        function () {
          $.current = C;
        },
        [C],
      );
      var P = d(function (e) {
          b(function (t) {
            return o(
              "WAWebBizBroadcastGenAIRecommendationModel",
            ).navigateToIndex(t, e);
          });
        }, []),
        N = d(function (e) {
          (R(e), (x.current = !0));
        }, []),
        M = d(function (e) {
          (R(e), (x.current = !1));
        }, []),
        w = d(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = S.trim();
            if (!(e.length === 0 || E)) {
              var t = x.current ? "chip" : "custom";
              (o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIAnnotate({
                string: { prompt_text: e, prompt_type: t },
              }),
                o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIPoint(
                  o("WAWebBizBroadcastGenAIQPLLogger").GenAIQPLPoints
                    .REFINEMENT_START,
                ),
                k(!0),
                D(null));
              var n = Date.now();
              try {
                var r,
                  i = o(
                    "WAWebBizBroadcastGenAIRecommendationModel",
                  ).getCurrentEntry($.current).message,
                  l = yield o(
                    "WAWebBizBroadcastGenAIRecommendationJob",
                  ).fetchBroadcastGenAIRecommendation({
                    model: o("WAWebBizBroadcastGenAIGating").getGenAIModel(),
                    userMessageDraft: i,
                    userPrompt: e,
                  });
                if (l.type === "auth-failure") {
                  (o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIAnnotate({
                    string: { error_type: "auth_failure" },
                  }),
                    o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIPoint(
                      o("WAWebBizBroadcastGenAIQPLLogger").GenAIQPLPoints
                        .REFINEMENT_ERROR,
                    ),
                    a());
                  return;
                }
                if (l.type === "graphql-error") {
                  (o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIAnnotate({
                    string: { error_type: "graphql_error" },
                  }),
                    o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIPoint(
                      o("WAWebBizBroadcastGenAIQPLLogger").GenAIQPLPoints
                        .REFINEMENT_ERROR,
                    ),
                    D(
                      o("WAWebBizBroadcastGenAIError").getErrorMessage(
                        o("WAWebBizBroadcastGenAIError").GenAIErrorType
                          .GENERATION_FAILED,
                      ),
                    ));
                  return;
                }
                if (l.type === "error") {
                  var s = l.errorCode;
                  (o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIAnnotate({
                    string: { error_type: s != null ? s : "unknown" },
                  }),
                    o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIPoint(
                      o("WAWebBizBroadcastGenAIQPLLogger").GenAIQPLPoints
                        .REFINEMENT_ERROR,
                    ),
                    D(
                      s === "IndividualPacingLimitReached"
                        ? o("WAWebBizBroadcastGenAIError").getErrorMessage(
                            o("WAWebBizBroadcastGenAIError").GenAIErrorType
                              .RATE_LIMIT,
                          )
                        : o("WAWebBizBroadcastGenAIError").getErrorMessage(
                            o("WAWebBizBroadcastGenAIError").GenAIErrorType
                              .GENERATION_FAILED,
                          ),
                    ));
                  return;
                }
                if (l.toneMessagePairs.length === 0) {
                  (o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIAnnotate({
                    string: { error_type: "empty_response" },
                  }),
                    o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIPoint(
                      o("WAWebBizBroadcastGenAIQPLLogger").GenAIQPLPoints
                        .REFINEMENT_ERROR,
                    ),
                    D(
                      o("WAWebBizBroadcastGenAIError").getErrorMessage(
                        o("WAWebBizBroadcastGenAIError").GenAIErrorType
                          .EMPTY_RESPONSE,
                      ),
                    ));
                  return;
                }
                o("WAWebBizBroadcastGenAIPacing").incrementRequestCount();
                var u = Date.now() - n;
                (o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIAnnotate({
                  int: { response_time_ms: u },
                }),
                  o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIPoint(
                    o("WAWebBizBroadcastGenAIQPLLogger").GenAIQPLPoints
                      .REFINEMENT_SUCCESS,
                  ));
                var c = (r = l.toneMessagePairs[0].message) != null ? r : "";
                (b(function (t) {
                  return o(
                    "WAWebBizBroadcastGenAIRecommendationModel",
                  ).appendRefinement(t, c, e);
                }),
                  R(""),
                  (x.current = !1));
              } catch (e) {
                (o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIAnnotate({
                  string: { error_type: "exception" },
                }),
                  o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIPoint(
                    o("WAWebBizBroadcastGenAIQPLLogger").GenAIQPLPoints
                      .REFINEMENT_ERROR,
                  ),
                  D(
                    o("WAWebBizBroadcastGenAIError").getErrorMessage(
                      o("WAWebBizBroadcastGenAIError").GenAIErrorType
                        .GENERATION_FAILED,
                    ),
                  ));
              } finally {
                k(!1);
              }
            }
          }),
          [S, E, a],
        ),
        A = d(
          function () {
            var e = $.current;
            (o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIAnnotate({
              int: { refinement_count: e.entries.length - 1 },
            }),
              o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIPoint(
                o("WAWebBizBroadcastGenAIQPLLogger").GenAIQPLPoints
                  .CUSTOMIZE_BACK,
              ),
              i());
          },
          [i],
        ),
        F = d(
          function () {
            var e = $.current,
              t = o(
                "WAWebBizBroadcastGenAIRecommendationModel",
              ).getCurrentEntry(e).message;
            (o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIAnnotate({
              int: {
                card_index: e.currentIndex,
                refinement_count: e.entries.length - 1,
              },
            }),
              o("WAWebBizBroadcastGenAIQPLLogger").qplGenAIPoint(
                o("WAWebBizBroadcastGenAIQPLLogger").GenAIQPLPoints
                  .CUSTOMIZE_USE_MESSAGE,
              ),
              l(t));
          },
          [l],
        );
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        align: "stretch",
        xstyle: g.container,
        children: [
          u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "start",
            xstyle: g.header,
            children: [
              u.jsx(r("WDSButton.react"), {
                Icon: r("WDSIconIcArrowBack.react"),
                "aria-label": s._(/*BTDS*/ "Back to suggestions"),
                onPress: A,
                size: "medium",
                variant: "borderless",
              }),
              u.jsxs(o("WAWebFlex.react").FlexColumn, {
                xstyle: g.headerText,
                children: [
                  u.jsx(r("WDSText.react"), {
                    type: "Body1",
                    colorName: "contentDefault",
                    children: s._(/*BTDS*/ "Customize message"),
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
          u.jsx(r("WAWebBizBroadcastGenAIRefinementCarousel.react"), {
            history: C,
            isRTL: f,
            onNavigate: P,
          }),
          u.jsx("div", {
            className: "xdx6fka xvtqlqk x1p57kb1",
            children: u.jsx(r("WAWebBizBroadcastGenAIChips.react"), {
              chips: h,
              disabled: E,
              onChipTap: N,
            }),
          }),
          u.jsxs("div", {
            className:
              "xuk3077 x9f619 x1s70e7g x78zum5 xdx6fka xvtqlqk x1p57kb1",
            children: [
              u.jsx("div", {
                className: "x1r8uery x1iyjqo2 xs83m0k xeuugli",
                children: u.jsx(r("WDSTextField.react"), {
                  label: s._(/*BTDS*/ "Describe your changes"),
                  onValueChange: M,
                  value: S,
                }),
              }),
              u.jsx(r("WDSButton.react"), {
                Icon: r("WDSIconIcCheck.react"),
                "aria-label": s._(/*BTDS*/ "Submit refinement"),
                disabled: E || S.trim().length === 0,
                onPress: function () {
                  w();
                },
                size: "medium",
                variant: "filled",
              }),
            ],
          }),
          T != null &&
            u.jsx("div", {
              className: "x30a034 x1pg5gke x1iw51ew xde1mab x16ovd2e",
              children: T,
            }),
          u.jsx("div", {
            className: "x9f619 xr1yuqi x1p57kb1 xvpt6g3 xdx6fka xvtqlqk",
            children: u.jsx(r("WDSButton.react"), {
              disabled: E,
              label: s._(/*BTDS*/ "Use message"),
              onPress: F,
              variant: "filled",
              xstyle: g.fullWidthButton,
            }),
          }),
        ],
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    var g = {
      container: { height: "x5yr21d", $$css: !0 },
      fullWidthButton: { width: "xh8yej3", $$css: !0 },
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
    };
    l.default = f;
  },
  226,
);
