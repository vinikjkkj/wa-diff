__d(
  "WAWebMessageNotificationHelpers.react",
  [
    "WAWebBotGroupGatingUtils",
    "WAWebChangeNumberNotificationBanner.react",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebE2EInfoModal.react",
    "WAWebE2EInfoModalV2.react",
    "WAWebFindChatAction",
    "WAWebFrontendMsgGetters",
    "WAWebLockSmallIcon.react",
    "WAWebModalManager",
    "WAWebMsgType",
    "WAWebPrinaUtils",
    "WAWebPrivacyGatingUtils",
    "WAWebWamEnumEphemeralSettingEntryPointType",
    "WDSIconWdsIcDisappearingMessages.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t, n, a, i) {
      if (e !== "e2e_identity_unavailable") {
        if (
          e === "encrypt" &&
          o("WAWebPrinaUtils").shouldShowNewE2eInfoModal(
            o("WAWebFrontendMsgGetters").getChat(a.unsafe()),
          )
        ) {
          var l = o("WAWebPrinaUtils").securityUrl();
          o("WAWebModalManager").ModalManager.open(
            s.jsx(o("WAWebE2EInfoModalV2.react").E2eInfoModalV2, {
              highlightSurface:
                o("WAWebPrinaUtils").getHighlightSurfaceForGoldenBox(n),
              url: l,
              chat: o("WAWebFrontendMsgGetters").getChat(a.unsafe()),
            }),
          );
          return;
        }
        if (
          e === "group_transition_to_tee_bot_group" &&
          o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()
        ) {
          var u = o("WAWebPrinaUtils").securityUrl();
          o("WAWebModalManager").ModalManager.open(
            s.jsx(o("WAWebE2EInfoModalV2.react").E2eInfoModalV2, {
              highlightSurface:
                o("WAWebPrinaUtils").getHighlightSurfaceForGoldenBox(n),
              url: u,
              chat: o("WAWebFrontendMsgGetters").getChat(a.unsafe()),
            }),
          );
          return;
        }
        var c =
          e === "encrypt"
            ? o("WAWebPrinaUtils").getHighlightSurfaceForGoldenBox(n)
            : void 0;
        o("WAWebModalManager").ModalManager.open(
          s.jsx(r("WAWebE2EInfoModal.react"), {
            highlightSurface: c,
            e2eSubtype: e,
            jid: t,
            chatId: n,
            msg: a,
            accountLid: i,
          }),
        );
      }
    }
    function c(e, t) {
      o(
        "WAWebChangeNumberNotificationBanner.react",
      ).onChangeNumberNotificationClick(e, t);
    }
    function d(e) {
      o("WAWebCmd").Cmd.ephemeralDrawer(
        e,
        !1,
        o("WAWebWamEnumEphemeralSettingEntryPointType")
          .EPHEMERAL_SETTING_ENTRY_POINT_TYPE.SYSTEM_MESSAGE,
      );
    }
    function m() {
      return s.jsx("div", {
        className: "x1rg5ohu x2fvf9 xg49k01",
        children: s.jsx(r("WDSIconWdsIcDisappearingMessages.react"), {
          height: 16,
          width: 16,
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = o("react-compiler-runtime").c(1),
        n = e.msg;
      if (n.subtype === "encrypt" || n.subtype === "encrypt_now") {
        var r;
        return (
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = s.jsx("div", {
                className: "x1rg5ohu x1gslohp x2fvf9 x16dsc37 xhslqc4",
                children: s.jsx(
                  o("WAWebLockSmallIcon.react").LockSmallIcon,
                  {},
                ),
              })),
              (t[0] = r))
            : (r = t[0]),
          r
        );
      }
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(1),
        n = e.msg;
      if (n.subtype === "group_transition_to_tee_bot_group") {
        var r;
        return (
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = s.jsx("div", {
                className: "x1rg5ohu x1gslohp x2fvf9 x16dsc37 xhslqc4",
                children: s.jsx(
                  o("WAWebLockSmallIcon.react").LockSmallIcon,
                  {},
                ),
              })),
              (t[0] = r))
            : (r = t[0]),
          r
        );
      }
    }
    var f = new Set(
      [
        "blue_msg_bsp_fb_unverified",
        "blue_msg_bsp_fb_verified",
        "blue_msg_bsp_premise_unverified",
        "blue_msg_bsp_premise_verified",
        "blue_msg_self_fb_unverified",
        "blue_msg_self_fb_verified",
      ].concat(
        o("WAWebPrivacyGatingUtils").isDataPrivacyPhase2NonE2eeEnabled()
          ? []
          : [
              "biz_privacy_mode_init_fb",
              "biz_privacy_mode_init_bsp",
              "biz_privacy_mode_to_fb",
              "biz_privacy_mode_to_bsp",
              "biz_me_account_type_is_hosted",
              "biz_account_type_is_hosted",
              "biz_account_type_changed_to_hosted",
              "bot_init",
              "bot_invoke_disclaimer",
              "biz_bot_1p_disclosure",
              "group_transition_to_bot_group",
            ],
      ),
    );
    function g(e, t) {
      return e === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE && f.has(t);
    }
    function h(e) {
      var t = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield o("WAWebFindChatAction").findOrCreateLatestChat(
              e,
              "changeLidNotification",
            ),
            n = t.chat,
            r = yield o("WAWebCmd").Cmd.openChatFromUnread({ chat: n });
          r && o("WAWebComposeBoxActions").ComposeBoxActions.focus(n);
        });
        return function () {
          return t.apply(this, arguments);
        };
      })();
      t();
    }
    ((l.handleSecurityClick = u),
      (l.handleChangeNumberClick = c),
      (l.handleEphemeralClick = d),
      (l.renderDisappearingIcon = m),
      (l.E2ENotificationIcon = p),
      (l.TeeBotE2ENotificationIcon = _),
      (l.showInfoIcon = g),
      (l.handleChangeLidClick = h));
  },
  98,
);
