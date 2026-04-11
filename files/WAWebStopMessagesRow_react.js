__d(
  "WAWebStopMessagesRow.react",
  [
    "fbt",
    "WAWebChatInfoDrawerRow.react",
    "WAWebMarketingMessagesFeedbackResumeConfirmationLoadable",
    "WAWebMarketingMessagesFeedbackStopConfirmationLoadable",
    "WAWebMarketingMessagesUserFeedbackGatingUtils",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebSettingsNotificationsIcon.react",
    "WAWebText.react",
    "WAWebUnmuteNotificationsRefreshedIcon.react",
    "WAWebWamEnumMmUserControlsEntryPoint",
    "WDSSwitch.react",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { secondaryColor: { color: "xhslqc4", $$css: !0 } };
    function d(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.chat,
        a = e.contact,
        i = e.isRefresh,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [
            "id",
            "isContactOptedOut",
            "isEverOptedOutOfMarketingMessages",
          ]),
          (t[0] = l))
        : (l = t[0]);
      var d = o("useWAWebModelValues").useModelValues(a, l),
        m = d.isContactOptedOut;
      if (
        (!d.getIsMarketingMessageThread() &&
          !d.isEverOptedOutOfMarketingMessages) ||
        !o(
          "WAWebMarketingMessagesUserFeedbackGatingUtils",
        ).isMMOptOutEnabled() ||
        o(
          "WAWebMarketingMessagesUserFeedbackGatingUtils",
        ).isMMUserControlsExceptionNumberPrefixMatch(d.id)
      )
        return null;
      var p;
      t[1] !== n
        ? ((p = function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebMarketingMessagesFeedbackStopConfirmationLoadable")
                  .WAWebMarketingMessagesFeedbackStopConfirmationLoadable,
                {
                  chat: n,
                  logEntryPoint: o("WAWebWamEnumMmUserControlsEntryPoint")
                    .MM_USER_CONTROLS_ENTRY_POINT.BUSINESS_PROFILE,
                },
              ),
              { transition: "default" },
            );
          }),
          (t[1] = n),
          (t[2] = p))
        : (p = t[2]);
      var _ = p,
        f;
      t[3] !== n
        ? ((f = function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebMarketingMessagesFeedbackResumeConfirmationLoadable")
                  .WAWebMarketingMessagesFeedbackResumeConfirmationLoadable,
                {
                  chat: n,
                  logEntryPoint: o("WAWebWamEnumMmUserControlsEntryPoint")
                    .MM_USER_CONTROLS_ENTRY_POINT.BUSINESS_PROFILE,
                },
              ),
              { transition: "default" },
            );
          }),
          (t[3] = n),
          (t[4] = f))
        : (f = t[4]);
      var g = f,
        h = m ? g : _,
        y;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = u.jsx(o("WAWebText.react").WAWebTextTitle, {
            children: s._(/*BTDS*/ "Offers and announcements"),
          })),
          (t[5] = y))
        : (y = t[5]);
      var C = y,
        b;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = u.jsx(o("WAWebText.react").WAWebTextMuted, {
            children: s._(
              /*BTDS*/ "Get offers and announcements from this business.",
            ),
          })),
          (t[6] = b))
        : (b = t[6]);
      var v = b,
        S;
      t[7] !== i
        ? ((S =
            i === !0
              ? u.jsx(
                  o("WAWebUnmuteNotificationsRefreshedIcon.react")
                    .UnmuteNotificationsRefreshedIcon,
                  {},
                )
              : u.jsx(
                  o("WAWebSettingsNotificationsIcon.react")
                    .SettingsNotificationsIcon,
                  { iconXstyle: c.secondaryColor, height: 20 },
                )),
          (t[7] = i),
          (t[8] = S))
        : (S = t[8]);
      var R = S,
        L = !m,
        E;
      t[9] !== L
        ? ((E = u.jsx(r("WDSSwitch.react"), {
            onChange: r("WAWebNoop"),
            tabIndex: -1,
            testid: void 0,
            value: L,
          })),
          (t[9] = L),
          (t[10] = E))
        : (E = t[10]);
      var k = E,
        I;
      return (
        t[11] !== R || t[12] !== i || t[13] !== h || t[14] !== k
          ? ((I =
              i === !0
                ? u.jsx(
                    o("WAWebChatInfoDrawerRow.react")
                      .ChatInfoDrawerRowRefreshed,
                    {
                      icon: R,
                      onClick: h,
                      secondaryTitle: v,
                      side: k,
                      testid: void 0,
                      title: C,
                    },
                  )
                : u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRow, {
                    icon: R,
                    onClick: h,
                    secondaryTitle: v,
                    side: k,
                    spaced: !1,
                    testid: void 0,
                    title: C,
                  })),
            (t[11] = R),
            (t[12] = i),
            (t[13] = h),
            (t[14] = k),
            (t[15] = I))
          : (I = t[15]),
        I
      );
    }
    l.default = d;
  },
  226,
);
