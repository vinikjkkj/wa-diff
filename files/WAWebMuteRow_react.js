__d(
  "WAWebMuteRow.react",
  [
    "fbt",
    "WAWebChatGetters",
    "WAWebChatInfoDrawerRow.react",
    "WAWebClock",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebDrawerBlock.react",
    "WAWebModalManager",
    "WAWebMuteGetters",
    "WAWebSettingsGetters",
    "WAWebStateUtils",
    "WAWebText.react",
    "WAWebUnmuteNotificationsRefreshedIcon.react",
    "WAWebWamEnumChannelEventSurface",
    "WAWebWamEnumMuteEntryPoint",
    "WDSSwitch.react",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebMuteValues",
    "useWAWebSettingsValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(39),
        n = e.chat,
        a = e.containerXstyle,
        i = e.mute,
        l = e.showIcon,
        c = l === void 0 ? !0 : l,
        d;
      if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
        var m;
        ((d = [
          (m = o("WAWebChatGetters")).getId,
          m.getIsGroup,
          m.getMuteExpiration,
          m.getArchive,
          m.getIsNewsletter,
        ]),
          (t[0] = d));
      } else d = t[0];
      var p = o("useWAWebChatValues").useChatValues(n.id, d),
        _ = p[0],
        f = p[1],
        g = p[2],
        h = p[3],
        y = p[4],
        C;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = [o("WAWebMuteGetters").getIsMuted]), (t[1] = C))
        : (C = t[1]);
      var b = o("useWAWebMuteValues").useMuteValues(i.id, C),
        v = b[0],
        S;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = [o("WAWebSettingsGetters").getShowArchiveV2]), (t[2] = S))
        : (S = t[2]);
      var R = o("useWAWebSettingsValues").useSettingsValues(S),
        L = R[0],
        E;
      t[3] !== n || t[4] !== _ || t[5] !== y
        ? ((E = function (t) {
            y
              ? o("WAWebCmd").Cmd.newsletterMuteToggle(_, t, {
                  eventSurface: o("WAWebWamEnumChannelEventSurface")
                    .CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE,
                })
              : o("WAWebCmd").Cmd.muteChatFromEntryPoint(
                  o("WAWebStateUtils").unproxy(n),
                  t,
                  o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT.CONTACT_INFO,
                );
          }),
          (t[3] = n),
          (t[4] = _),
          (t[5] = y),
          (t[6] = E))
        : (E = t[6]);
      var k = E,
        I;
      t[7] !== k
        ? ((I = function () {
            (k(!1), o("WAWebModalManager").ModalManager.close());
          }),
          (t[7] = k),
          (t[8] = I))
        : (I = t[8]);
      var T = I,
        D;
      t[9] !== f || t[10] !== y || t[11] !== T
        ? ((D = function () {
            if (y) return T();
            var e = f
              ? s._(/*BTDS*/ "Unmute this group?")
              : s._(/*BTDS*/ "Unmute this chat?");
            o("WAWebModalManager").ModalManager.open(
              u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
                onOK: T,
                okText: s._(/*BTDS*/ "Unmute"),
                onCancel: o("WAWebModalManager").closeModalManager,
                cancelText: s._(/*BTDS*/ "Cancel"),
                tsNavigationData: {
                  surface: "unknown",
                  viewName: "unmute-chat",
                },
                children: e,
              }),
            );
          }),
          (t[9] = f),
          (t[10] = y),
          (t[11] = T),
          (t[12] = D))
        : (D = t[12]);
      var x = D;
      if (h && L) {
        var $;
        return (
          t[13] === Symbol.for("react.memo_cache_sentinel")
            ? (($ = u.jsx(r("WAWebDrawerBlock.react"), {
                children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
                  children: s._(/*BTDS*/ "Archived chats are muted"),
                }),
              })),
              (t[13] = $))
            : ($ = t[13]),
          $
        );
      }
      var P;
      t[14] !== k || t[15] !== x || t[16] !== v
        ? ((P = v
            ? x
            : function () {
                k(!0);
              }),
          (t[14] = k),
          (t[15] = x),
          (t[16] = v),
          (t[17] = P))
        : (P = t[17]);
      var N = P,
        M;
      t[18] !== y
        ? ((M = y ? s._(/*BTDS*/ "Muted") : s._(/*BTDS*/ "Muted")),
          (t[18] = y),
          (t[19] = M))
        : (M = t[19]);
      var w = M,
        A;
      t[20] !== v || t[21] !== w
        ? ((A = v ? w : s._(/*BTDS*/ "Mute notifications")),
          (t[20] = v),
          (t[21] = w),
          (t[22] = A))
        : (A = t[22]);
      var F = A,
        O;
      if (v && g && !y) {
        var B;
        t[23] !== g
          ? ((B = o("WAWebClock").Clock.untilStr(g)), (t[23] = g), (t[24] = B))
          : (B = t[24]);
        var W = B,
          q;
        (t[25] !== W
          ? ((q = u.jsx(o("WAWebText.react").WAWebTextMuted, { children: W })),
            (t[25] = W),
            (t[26] = q))
          : (q = t[26]),
          (O = q));
      }
      var U;
      t[27] !== v
        ? ((U = u.jsx(r("WDSSwitch.react"), {
            tabIndex: -1,
            "aria-label": "",
            value: v,
          })),
          (t[27] = v),
          (t[28] = U))
        : (U = t[28]);
      var V = U,
        H;
      t[29] !== F
        ? ((H = u.jsx(
            o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed,
            { title: F },
          )),
          (t[29] = F),
          (t[30] = H))
        : (H = t[30]);
      var G = H,
        z;
      t[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = u.jsx(
            o("WAWebUnmuteNotificationsRefreshedIcon.react")
              .UnmuteNotificationsRefreshedIcon,
            {},
          )),
          (t[31] = z))
        : (z = t[31]);
      var j = z,
        K = c ? j : null,
        Q;
      return (
        t[32] !== a ||
        t[33] !== O ||
        t[34] !== V ||
        t[35] !== N ||
        t[36] !== K ||
        t[37] !== G
          ? ((Q = u.jsx(
              o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
              {
                icon: K,
                testid: void 0,
                side: V,
                onClick: N,
                title: G,
                secondaryTitle: O,
                containerXstyle: a,
              },
            )),
            (t[32] = a),
            (t[33] = O),
            (t[34] = V),
            (t[35] = N),
            (t[36] = K),
            (t[37] = G),
            (t[38] = Q))
          : (Q = t[38]),
        Q
      );
    }
    l.default = c;
  },
  226,
);
