__d(
  "WAWebMuteAllMentionsRow.react",
  [
    "fbt",
    "WAWebChatInfoDrawerRow.react",
    "WAWebContactNotificationSettingUserJourneyWamLogging",
    "WAWebFbtCommon",
    "WAWebMuteGetters",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumTsSurface",
    "WDSSwitch.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMuteValues",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n = o("react-compiler-runtime").c(15),
        a = e.chat,
        i = e.containerXstyle,
        l = e.mute,
        c;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = [
            o("WAWebMuteGetters").getIsMuted,
            o("WAWebMuteGetters").getIsMentionAllMuted,
          ]),
          (n[0] = c))
        : (c = n[0]);
      var d = o("useWAWebMuteValues").useMuteValues(l.id, c),
        m = d[0],
        p = d[1],
        _;
      n[1] !== p || n[2] !== l
        ? ((_ = function () {
            var e;
            if (p) e = l.unmuteMentionAll();
            else if (l.expiration != null) e = l.muteMentionAll(l.expiration);
            else return;
            return e;
          }),
          (n[1] = p),
          (n[2] = l),
          (n[3] = _))
        : (_ = n[3]);
      var f = _,
        g;
      if (
        n[4] !==
          ((t = a.groupMetadata) == null ? void 0 : t.participants.length) ||
        n[5] !== p ||
        n[6] !== f
      ) {
        var h;
        ((g = function () {
          var e,
            t,
            n,
            i = !p,
            l =
              (e =
                (t = a.groupMetadata) == null
                  ? void 0
                  : t.participants.length) != null
                ? e
                : 0;
          o(
            "WAWebContactNotificationSettingUserJourneyWamLogging",
          ).ContactNotificationSettingUserJourneyLogger.logMuteAllMentionsToggle(
            i,
            o("WAWebWamEnumTsSurface").TS_SURFACE
              .CONTACT_NOTIFICATION_SETTING_PAGE,
            l,
          );
          var c = o("WAWebToast.react").genId();
          (n = f()) == null ||
            n.then(function () {
              o("WAWebToastManager").ToastManager.open(
                u.jsx(o("WAWebToast.react").Toast, {
                  id: c,
                  msg: i
                    ? s._(/*BTDS*/ "\u0040all mentions muted")
                    : s._(/*BTDS*/ "\u0040all mentions unmuted"),
                  action: {
                    actionText: r("WAWebFbtCommon")("Undo"),
                    onAction: function () {
                      (f(), o("WAWebToastManager").ToastManager.close(c));
                    },
                  },
                }),
              );
            });
        }),
          (n[4] =
            (h = a.groupMetadata) == null ? void 0 : h.participants.length),
          (n[5] = p),
          (n[6] = f),
          (n[7] = g));
      } else g = n[7];
      var y = r("useWAWebStableCallback")(g);
      if (!m || !a.id.isGroup()) return null;
      var C;
      n[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = u.jsx(
            o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed,
            { title: s._(/*BTDS*/ "Mute \u0040all mentions") },
          )),
          (n[8] = C))
        : (C = n[8]);
      var b = C,
        v = p != null ? p : !1,
        S;
      n[9] !== v
        ? ((S = u.jsx(r("WDSSwitch.react"), { tabIndex: -1, value: v })),
          (n[9] = v),
          (n[10] = S))
        : (S = n[10]);
      var R = S,
        L;
      return (
        n[11] !== i || n[12] !== y || n[13] !== R
          ? ((L = u.jsx(
              o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
              {
                testid: void 0,
                side: R,
                onClick: y,
                title: b,
                containerXstyle: i,
              },
            )),
            (n[11] = i),
            (n[12] = y),
            (n[13] = R),
            (n[14] = L))
          : (L = n[14]),
        L
      );
    }
    l.default = c;
  },
  226,
);
