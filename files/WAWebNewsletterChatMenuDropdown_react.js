__d(
  "WAWebNewsletterChatMenuDropdown.react",
  [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebInfoFlowLoadable",
    "WAWebInfoFlowStep",
    "WAWebModalManager",
    "WAWebNewsletterMembershipUtil",
    "WAWebReportNewsletterPopup.react",
    "WAWebSpamConstants",
    "WAWebStateUtils",
    "WAWebUnfollowNewsletterConfirmationModal.react",
    "WAWebWamEnumChannelEventSurface",
    "WAWebWamEnumTsSurface",
    "WDSIconIcCheckBox.react",
    "WDSIconIcClose.react",
    "WDSIconIcInfo.react",
    "WDSIconIcLogout.react",
    "WDSIconIcSettings.react",
    "WDSIconIcThumbDown.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useCallback;
    function d(e) {
      var t,
        n,
        a,
        i = o("react-compiler-runtime").c(37),
        l = e.chat,
        c = e.onSelectMessages,
        d = l.newsletterMetadata,
        m;
      i[0] !== l
        ? ((m = function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebReportNewsletterPopup.react"), {
                chat: l,
                spamFlow: o("WAWebSpamConstants").SpamFlow.OverflowMenuReport,
              }),
            );
          }),
          (i[0] = l),
          (i[1] = m))
        : (m = i[1]);
      var p = m,
        _;
      i[2] !== l
        ? ((_ = function () {
            o("WAWebCmd").Cmd.chatInfoDrawer(l);
          }),
          (i[2] = l),
          (i[3] = _))
        : (_ = i[3]);
      var f = _,
        g;
      i[4] !== l
        ? ((g = function () {
            o("WAWebCmd").Cmd.closeChat(l);
          }),
          (i[4] = l),
          (i[5] = g))
        : (g = i[5]);
      var h = g,
        y;
      i[6] !== l
        ? ((y = function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebUnfollowNewsletterConfirmationModal.react")
                  .UnfollowNewsletterConfirmationModal,
                {
                  chat: o("WAWebStateUtils").unproxy(l),
                  loggingOptions: {
                    eventSurface: o("WAWebWamEnumChannelEventSurface")
                      .CHANNEL_EVENT_SURFACE.CHANNEL_THREAD,
                    discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                      .CHANNEL_THREAD,
                  },
                },
              ),
            );
          }),
          (i[6] = l),
          (i[7] = y))
        : (y = i[7]);
      var C = y,
        b;
      i[8] !== l
        ? ((b = function () {
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
                ? {
                    descriptorType: "info_flow",
                    chat: l,
                    initialStep:
                      o("WAWebInfoFlowStep").InfoFlowStep.NewsletterSettings,
                  }
                : u.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
                    chat: l,
                    initialStep:
                      o("WAWebInfoFlowStep").InfoFlowStep.NewsletterSettings,
                  }),
            );
          }),
          (i[8] = l),
          (i[9] = b))
        : (b = i[9]);
      var v = b,
        S;
      i[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = s._(/*BTDS*/ "Channel settings")), (i[10] = S))
        : (S = i[10]);
      var R = S,
        L = null;
      if (
        o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(
          l == null ? void 0 : l.newsletterMetadata,
        ) &&
        !((t = l.newsletterMetadata) != null && t.isSuspendedOrTerminated)
      ) {
        var E;
        (i[11] !== v
          ? ((E = u.jsx(
              r("WDSMenuItem.react"),
              {
                onPress: v,
                testid: void 0,
                Icon: r("WDSIconIcSettings.react"),
                title: R,
              },
              "newsletter-overflow-menu-newsletter-settings",
            )),
            (i[11] = v),
            (i[12] = E))
          : (E = i[12]),
          (L = E));
      }
      var k;
      i[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = s._(/*BTDS*/ "Select updates")), (i[13] = k))
        : (k = i[13]);
      var I = k,
        T = null;
      if (!((n = l.newsletterMetadata) != null && n.isSuspendedOrTerminated)) {
        var D;
        (i[14] !== c
          ? ((D = u.jsx(
              r("WDSMenuItem.react"),
              {
                testid: void 0,
                onPress: c,
                Icon: r("WDSIconIcCheckBox.react"),
                title: I,
              },
              "newsletter-overflow-menu-select-messages",
            )),
            (i[14] = c),
            (i[15] = D))
          : (D = i[15]),
          (T = D));
      }
      var x;
      i[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = s._(/*BTDS*/ "Report")), (i[16] = x))
        : (x = i[16]);
      var $ = x,
        P = null;
      if (!((a = l.newsletterMetadata) != null && a.isSuspendedOrTerminated)) {
        var N;
        (i[17] !== p
          ? ((N = u.jsx(
              r("WDSMenuItem.react"),
              {
                onPress: p,
                testid: void 0,
                Icon: r("WDSIconIcThumbDown.react"),
                title: $,
                destructive: !0,
              },
              "newsletter-overflow-menu-report",
            )),
            (i[17] = p),
            (i[18] = N))
          : (N = i[18]),
          (P = N));
      }
      var M;
      i[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = s._(/*BTDS*/ "Channel info")), (i[19] = M))
        : (M = i[19]);
      var w = M,
        A;
      i[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = s._(/*BTDS*/ "Close channel")), (i[20] = A))
        : (A = i[20]);
      var F = A,
        O;
      i[21] !== f
        ? ((O = u.jsx(
            r("WDSMenuItem.react"),
            {
              onPress: f,
              testid: void 0,
              Icon: r("WDSIconIcInfo.react"),
              title: w,
            },
            "newsletter-overflow-menu-newsletter-info",
          )),
          (i[21] = f),
          (i[22] = O))
        : (O = i[22]);
      var B;
      i[23] !== h
        ? ((B = u.jsx(
            r("WDSMenuItem.react"),
            {
              onPress: h,
              testid: void 0,
              Icon: r("WDSIconIcClose.react"),
              title: F,
            },
            "newsletter-overflow-menu-close-channel",
          )),
          (i[23] = h),
          (i[24] = B))
        : (B = i[24]);
      var W;
      i[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = u.jsx(
            r("WDSMenuItem.react"),
            { type: "separator" },
            "newsletter-overflow-menu-separator",
          )),
          (i[25] = W))
        : (W = i[25]);
      var q;
      if (
        i[26] !== C ||
        i[27] !== d ||
        i[28] !== P ||
        i[29] !== T ||
        i[30] !== L ||
        i[31] !== O ||
        i[32] !== B
      ) {
        var U = [O, L, T, B, W, P],
          V;
        i[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((V = s._(/*BTDS*/ "Unfollow")), (i[34] = V))
          : (V = i[34]);
        var H = V;
        if (o("WAWebNewsletterMembershipUtil").iAmSubscriber(d)) {
          var G;
          (i[35] !== C
            ? ((G = u.jsx(
                r("WDSMenuItem.react"),
                {
                  onPress: C,
                  testid: void 0,
                  Icon: r("WDSIconIcLogout.react"),
                  title: H,
                  destructive: !0,
                },
                "newsletter-overflow-menu-unfollow",
              )),
              (i[35] = C),
              (i[36] = G))
            : (G = i[36]),
            U.push(G));
        }
        ((q = u.jsx(r("WDSMenu.react"), { testid: void 0, children: U })),
          (i[26] = C),
          (i[27] = d),
          (i[28] = P),
          (i[29] = T),
          (i[30] = L),
          (i[31] = O),
          (i[32] = B),
          (i[33] = q));
      } else q = i[33];
      return q;
    }
    l.default = d;
  },
  226,
);
