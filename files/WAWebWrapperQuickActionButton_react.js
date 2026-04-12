__d(
  "WAWebWrapperQuickActionButton.react",
  [
    "fbt",
    "WAWebBizCoexGatingUtils",
    "WAWebForwardRefreshedIcon.react",
    "WAWebInfoAltIcon.react",
    "WAWebMarketingMessagesUserFeedbackGatingUtils",
    "WAWebRound.react",
    "WAWebSTWGatingUtils",
    "WAWebSearchIcon.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { svgColorRefreshed: { color: "xhslqc4", $$css: !0 } };
    function d(e) {
      var t = e.onOpenBizEncStateMissmatchInfoPopup,
        n = e.onOpenBizPrivacyInfoPopup,
        r = e.onOpenEphemeralExemptionInfoPopup,
        a = e.onOpenEphemeralInfoPopup,
        i = e.onOpenForwardFlow,
        l = e.onOpenMarketingMessagesFeedback,
        d = e.onOpenWebSearchFlow,
        m = e.showHostedBizEncStateMismatchInfoAction,
        p = e.showQuickBizPrivacyInfoAction,
        _ = e.showQuickEphemeralExemptionInfoAction,
        f = e.showQuickEphemeralInfoAction,
        g = e.showQuickForwardAction,
        h = e.showQuickMarketingMessagesFeedbackAction,
        y = e.showQuickSearchAction,
        C = null,
        b = c.svgColorRefreshed;
      if (f)
        C = u.jsx(o("WAWebRound.react").Round, {
          onClick: a,
          label: s._(/*BTDS*/ "Ephemeral Info"),
          theme: o("WAWebRound.react").RoundTheme.QuickActionRefreshed,
          children: u.jsx(o("WAWebInfoAltIcon.react").InfoAltIcon, {
            xstyle: b,
          }),
        });
      else if (p)
        C = u.jsx(o("WAWebRound.react").Round, {
          onClick: n,
          label: s._(/*BTDS*/ "Privacy info"),
          theme: o("WAWebRound.react").RoundTheme.QuickActionRefreshed,
          children: u.jsx(o("WAWebInfoAltIcon.react").InfoAltIcon, {
            xstyle: b,
          }),
        });
      else if (
        h &&
        o(
          "WAWebMarketingMessagesUserFeedbackGatingUtils",
        ).isMMMessageLevelFeedbackEnabled()
      )
        C = u.jsx(o("WAWebRound.react").Round, {
          label: s._(/*BTDS*/ "Message Feedback"),
          title: s._(/*BTDS*/ "Feedback"),
          theme: o("WAWebRound.react").RoundTheme.QuickActionRefreshed,
          onClick: l,
          children: u.jsx(o("WAWebInfoAltIcon.react").InfoAltIcon, {
            xstyle: b,
          }),
        });
      else if (g) {
        var v = u.jsx(
          o("WAWebForwardRefreshedIcon.react").ForwardRefreshedIcon,
          { directional: !0, xstyle: c.svgColorRefreshed, height: 20 },
        );
        C = u.jsx(o("WAWebRound.react").Round, {
          label: s._(/*BTDS*/ "Forward media"),
          theme: o("WAWebRound.react").RoundTheme.QuickActionRefreshed,
          onClick: function () {
            return i(!1);
          },
          children: v,
        });
      } else
        y && !o("WAWebSTWGatingUtils").isSearchTheWebEnabled()
          ? (C = u.jsx(o("WAWebRound.react").Round, {
              label: s._(/*BTDS*/ "Message Feedback"),
              title: s._(/*BTDS*/ "Feedback"),
              theme: o("WAWebRound.react").RoundTheme.QuickActionRefreshed,
              onClick: d,
              children: u.jsx(o("WAWebSearchIcon.react").SearchIcon, {
                xstyle: b,
              }),
            }))
          : _
            ? (C = u.jsx(o("WAWebRound.react").Round, {
                label: s._(/*BTDS*/ "Ephemeral info"),
                theme: o("WAWebRound.react").RoundTheme.QuickActionRefreshed,
                onClick: r,
                children: u.jsx(o("WAWebInfoAltIcon.react").InfoAltIcon, {
                  xstyle: b,
                }),
              }))
            : o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
              m &&
              (C = u.jsx(o("WAWebRound.react").Round, {
                theme: o("WAWebRound.react").RoundTheme.QuickActionRefreshed,
                onClick: t,
                children: u.jsx(o("WAWebInfoAltIcon.react").InfoAltIcon, {
                  xstyle: b,
                }),
              }));
      return C;
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
