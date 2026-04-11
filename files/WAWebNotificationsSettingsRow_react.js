__d(
  "WAWebNotificationsSettingsRow.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebChatGetters",
    "WAWebChatInfoDrawerRow.react",
    "WAWebClock",
    "WAWebMuteGetters",
    "WAWebMuteNotificationsRefreshedIcon.react",
    "WAWebNotifyForUtils",
    "WAWebText.react",
    "WAWebUnmuteNotificationsRefreshedIcon.react",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebMuteValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect;
    function d(e) {
      var t = o("react-compiler-runtime").c(21),
        n = e.chat,
        r = e.onClick,
        a = e.testid,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [o("WAWebMuteGetters").getIsMuted]), (t[0] = i))
        : (i = t[0]);
      var l = o("useWAWebMuteValues").useMuteValues(n.id, i),
        d = l[0],
        m;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = [
            o("WAWebChatGetters").getMuteExpiration,
            o("WAWebChatGetters").getIsNewsletter,
            o("WAWebChatGetters").getIsGroup,
          ]),
          (t[1] = m))
        : (m = t[1]);
      var p = o("useWAWebChatValues").useChatValues(n.id, m),
        _ = p[0],
        f = p[1],
        g = p[2],
        h;
      t[2] !== d
        ? ((h = d
            ? u.jsx(
                o("WAWebMuteNotificationsRefreshedIcon.react")
                  .MuteNotificationsRefreshedIcon,
                {},
              )
            : u.jsx(
                o("WAWebUnmuteNotificationsRefreshedIcon.react")
                  .UnmuteNotificationsRefreshedIcon,
                {},
              )),
          (t[2] = d),
          (t[3] = h))
        : (h = t[3]);
      var y = h,
        C = null;
      if (d && _ && !f) {
        var b;
        t[4] !== _
          ? ((b = o("WAWebClock").Clock.mutedUntilStr(_)),
            (t[4] = _),
            (t[5] = b))
          : (b = t[5]);
        var v = b,
          S;
        (t[6] !== v
          ? ((S = u.jsx(o("WAWebText.react").WAWebTextMuted, { children: v })),
            (t[6] = v),
            (t[7] = S))
          : (S = t[7]),
          (C = S));
      }
      var R, L;
      (t[8] !== n
        ? ((R = function () {
            o("WAWebNotifyForUtils").maybeAutoDefaultToHighlightsForLargeGroup(
              n,
            );
          }),
          (L = [n]),
          (t[8] = n),
          (t[9] = R),
          (t[10] = L))
        : ((R = t[9]), (L = t[10])),
        c(R, L));
      var E = null;
      if (
        C == null &&
        g &&
        o("WAWebABProps").getABPropConfigValue("wa_web_notify_for")
      ) {
        var k;
        if (t[11] !== n.id) {
          var I,
            T,
            D = o("WAWebNotifyForUtils").getNotifyForSetting(
              (I = n == null || (T = n.id) == null ? void 0 : T.toString()) !=
                null
                ? I
                : "",
            );
          ((k = o("WAWebNotifyForUtils").getNotifyForLabel(D)),
            (t[11] = n.id),
            (t[12] = k));
        } else k = t[12];
        var x = k,
          $;
        (t[13] !== x
          ? (($ = u.jsx(o("WAWebText.react").WAWebTextMuted, { children: x })),
            (t[13] = x),
            (t[14] = $))
          : ($ = t[14]),
          (E = $));
      }
      var P;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = u.jsx(
            o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed,
            { title: s._(/*BTDS*/ "Notification settings") },
          )),
          (t[15] = P))
        : (P = t[15]);
      var N = C != null ? C : E,
        M;
      return (
        t[16] !== y || t[17] !== r || t[18] !== N || t[19] !== a
          ? ((M = u.jsx(
              o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
              {
                icon: y,
                onClick: r,
                title: P,
                secondaryTitle: N,
                testid: void 0,
              },
            )),
            (t[16] = y),
            (t[17] = r),
            (t[18] = N),
            (t[19] = a),
            (t[20] = M))
          : (M = t[20]),
        M
      );
    }
    l.default = d;
  },
  226,
);
