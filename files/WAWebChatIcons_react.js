__d(
  "WAWebChatIcons.react",
  [
    "cx",
    "fbt",
    "WALogger",
    "WAWebAiSignalOutlineIcon.react",
    "WAWebBizAiAgentStatusUtils",
    "WAWebChatGetters",
    "WAWebChatUnreadCount.react",
    "WAWebClassnames",
    "WAWebFeatureFlagName",
    "WAWebFrontendChatGetters",
    "WAWebMuteGetters",
    "WAWebSettingsGetters",
    "WAWebUISpacing",
    "WAWebVelocityTransitionGroup",
    "WAWebWid",
    "WDSIconIcAlternateEmail.react",
    "WDSIconIcNotificationsOff.react",
    "WDSIconIcPushPin.react",
    "react",
    "stylex",
    "useWAWebChatPreviewState",
    "useWAWebChatValues",
    "useWAWebGetFeatureFlag",
    "useWAWebMuteValues",
    "useWAWebPrevious",
    "useWAWebSettingsValues",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c,
      d,
      m = d || (d = o("react")),
      p = {
        iconContainer: {
          display: "x1rg5ohu",
          verticalAlign: "x16dsc37",
          $$css: !0,
        },
        iconColor: { color: "xhslqc4", $$css: !0 },
        iconMentions: {
          display: "x1rg5ohu",
          width: "xw4jnvo",
          height: "x1qx5ct2",
          color: "x1r8hjv8",
          $$css: !0,
        },
      };
    function _(e) {
      var t,
        n = e.noMargin,
        r = e.noMarginRight,
        a = e.ref;
      return m.jsx(
        "div",
        {
          ref: a,
          className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            ((t = {}),
            (t._ahlp = r),
            (t._am_0 = n),
            (t._ahlk = !0),
            (t._ahlo = !0),
            t),
            "x1rg5ohu xf6vk7d xhslqc4 x16dsc37",
          ),
          "data-testid": void 0,
          "aria-hidden": "true",
        },
        "icon-unread",
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(t) {
      var n,
        a = t.chat,
        i = t.fakePin,
        l = t.hideArchivedIcon,
        s = t.hideMuteIcon,
        d = t.hidePin,
        f = t.smallUnread,
        g = t.unreadCount,
        h = t.unreadMentionIcon,
        y = o("useWAWebChatValues").useChatValues(t.chat.id, [
          (n = o("WAWebChatGetters")).getId,
          n.getArchive,
          n.getPin,
          o("WAWebFrontendChatGetters").getUnopenedByAssignedAgent,
          o("WAWebFrontendChatGetters").getIsAssignedToMe,
          n.getIsNewsletter,
        ]),
        C = y[0],
        b = y[1],
        v = y[2],
        S = y[3],
        R = y[4],
        L = y[5],
        E = a.isFavorite,
        k = o("useWAWebChatPreviewState").useChatPreviewState(a),
        I = k[0],
        T = k[1],
        D = o("useWAWebMuteValues").useMuteValues(t.mute.id, [
          o("WAWebMuteGetters").getIsMuted,
        ]),
        x = D[0],
        $ = o("useWAWebSettingsValues").useSettingsValues([
          o("WAWebSettingsGetters").getShowArchiveV2,
        ]),
        P = $[0],
        N = r("useWAWebPrevious")(C),
        M = r("WAWebWid").equals(N, C),
        w = function () {
          return b && P ? !s : L ? !1 : x;
        },
        A = w()
          ? m.jsx(
              "div",
              {
                className: o(
                  "WAWebClassnames",
                ).classnamesConvertMeToStylexPlease(
                  "_ahlk",
                  "xhslqc4",
                  "x1rg5ohu xf6vk7d xhslqc4 x16dsc37",
                ),
                "aria-label": u._(/*BTDS*/ "Muted chat"),
                children: m.jsx(r("WDSIconIcNotificationsOff.react"), {
                  width: 20,
                  height: 20,
                }),
              },
              "icon-muted",
            )
          : null,
        F = m.jsx(r("WDSIconIcPushPin.react"), { width: 20, height: 20 }),
        O =
          (d !== !0 && v != null && v > 0) || i === !0
            ? m.jsx(
                "div",
                {
                  className: o(
                    "WAWebClassnames",
                  ).classnamesConvertMeToStylexPlease(
                    "_ahlk",
                    "x1rg5ohu xf6vk7d xhslqc4 x16dsc37",
                  ),
                  "aria-label": u._(/*BTDS*/ "Pinned chat"),
                  children: F,
                },
                "icon-pinned",
              )
            : null,
        B = E
          ? m.jsx(
              "span",
              { "aria-label": u._(/*BTDS*/ "Starred chat") },
              "icon-favorite",
            )
          : null,
        W = o("WAWebBizAiAgentStatusUtils").useIsChatAiEnabled(t.chat.id);
      W &&
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[Maiba] WAWebChatIcons: shouldShowAiIndicator=",
              " for chat=",
              "",
            ])),
          W,
          a.id.toLogString(),
        );
      var q =
          f === !0
            ? m.jsx(_, {})
            : m.jsx(
                "div",
                {
                  className:
                    "_ahlk x1rg5ohu xf6vk7d xhslqc4 x16dsc37 xt4ypqs x2b8uid",
                  "aria-hidden": "true",
                  children: m.jsx(o("WAWebChatUnreadCount.react").UnreadCount, {
                    count: g,
                  }),
                },
                "icon-unread",
              ),
        U = W ? null : q,
        V = !T && g !== 0 ? U : null,
        H = r("useWAWebGetFeatureFlag")(
          o("WAWebFeatureFlagName").FeatureFlagName.CHAT_ASSIGNMENT,
        ).enabled,
        G =
          H && R && S && !V && !W
            ? m.jsx(
                "div",
                {
                  className: "_ahlk",
                  children: m.jsx(o("WAWebChatUnreadCount.react").UnreadCount, {
                    count: 0,
                  }),
                },
                "icon-unread",
              )
            : null,
        z = null;
      !T &&
        h &&
        !W &&
        (z = m.createElement(
          "div",
          babelHelpers.extends(
            {},
            (c || (c = r("stylex"))).props(
              p.iconContainer,
              o("WAWebUISpacing").uiMargin.end7,
            ),
            {
              key: "icon-mentions",
              "data-testid": void 0,
              "aria-label": u._(/*BTDS*/ "\u0040 message"),
            },
          ),
          m.jsx(r("WDSIconIcAlternateEmail.react"), {
            width: 20,
            height: 20,
            iconXstyle: p.iconMentions,
          }),
        ));
      var j =
          b && !l
            ? m.jsx(
                "span",
                {
                  className: o(
                    "WAWebClassnames",
                  ).classnamesConvertMeToStylexPlease(
                    "_ahlk",
                    "_ahlm",
                    (c || (c = r("stylex")))(o("WAWebUISpacing").uiMargin.end8),
                  ),
                  children: u._(/*BTDS*/ "Archived"),
                },
                "icon-archived",
              )
            : null,
        K = m.createElement(
          "div",
          babelHelpers.extends(
            {},
            (c || (c = r("stylex"))).props(
              p.iconContainer,
              o("WAWebUISpacing").uiMargin.all2,
            ),
            {
              key: "icon-ai-agent",
              "data-testid": void 0,
              "aria-label": u._(/*BTDS*/ "AI chat"),
            },
          ),
          m.jsx(o("WAWebAiSignalOutlineIcon.react").AiSignalOutlineIcon, {
            width: 18,
            height: 18,
            iconXstyle: p.iconColor,
          }),
        ),
        Q = W ? K : null;
      return m.jsxs(r("WAWebVelocityTransitionGroup"), {
        transitionName: "pop",
        enter: M,
        exit: M,
        children: [A, j, O, B, Q, z, V, G],
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"),
      (l.UnreadIndicator = _),
      (l.Icons = f));
  },
  226,
);
