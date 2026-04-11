__d(
  "WAWebContactSystemMsg",
  [
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebBizGatingUtils",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebFMXGatingUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        a = new (r("WAWebMsgKey"))({
          fromMe: o("WAWebUserPrefsMeUser").isMeAccount(t),
          remote: e,
          id: r("WAWebMsgKey").newId_DEPRECATED(),
        });
      return {
        id: a,
        t: o("WATimeUtils").unixTime(),
        type: "e2e_notification",
        kind: o("WAWebMsgType").MsgKind.E2eNotification,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        subtype: "identity",
        from: e,
        to: n,
        body: t.toString(),
      };
    }
    function s(e, t) {
      return (
        t === void 0 && (t = "encrypt"),
        f(e, {
          type: "e2e_notification",
          kind: o("WAWebMsgType").MsgKind.E2eNotification,
          subtype: t,
          templateParams: [],
        })
      );
    }
    function u(e) {
      return f(e, {
        type: "e2e_notification",
        kind: o("WAWebMsgType").MsgKind.E2eNotification,
        subtype: "encrypt_now",
        templateParams: [],
      });
    }
    function c(e, t, n) {
      return (
        n === void 0 && (n = []),
        f(e, {
          type: "notification_template",
          kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
          subtype: t,
          templateParams: n,
        })
      );
    }
    function d(e, t, n, a) {
      var i = n ? o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE() : e;
      if (i == null)
        throw r("err")(
          "Cannot set null initiator for DDM system message: " +
            e.toString() +
            " / " +
            String(n),
        );
      return f(
        e,
        babelHelpers.extends(
          {
            type: "notification_template",
            kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
            subtype: "disappearing_mode",
            templateParams: [],
            ephemeralDuration: t,
            ephemeralSettingUser: i,
          },
          a != null ? { afterReadDuration: a } : {},
        ),
      );
    }
    function m(e, t, n) {
      return f(e, {
        type: "notification_template",
        kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
        subtype: "disappearing_mode_update",
        templateParams: [],
        ephemeralDuration: t,
        ephemeralSettingUser: n,
      });
    }
    function p(e) {
      var t = e.chatId,
        n = e.displayName,
        r = e.newUsername,
        a = e.oldUsername,
        i = e.viewMode,
        l = e.wid;
      return f(
        t,
        babelHelpers.extends(
          {
            type: "notification_template",
            kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
            subtype: "change_username",
            templateParams: [
              a != null ? a : "",
              r != null ? r : "",
              l,
              n != null ? n : "",
            ],
          },
          i != null ? { viewMode: i } : {},
        ),
      );
    }
    function _(e) {
      return f(e, {
        type: "notification_template",
        kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
        subtype: "disappearing_mode_unsupported",
        templateParams: [],
      });
    }
    function f(e, t) {
      var n = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(),
        a = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        i = new (r("WAWebMsgKey"))({
          fromMe: o("WAWebUserPrefsMeUser").isMeAccount(e),
          remote: e,
          id: r("WAWebMsgKey").newId_DEPRECATED(),
        });
      return babelHelpers.extends(
        {
          id: i,
          t: o("WATimeUtils").unixTime(),
          from: e,
          to: e.isLid() && n != null ? n : a,
        },
        t,
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t.isSignupDeeplink === !0)
            return f(e, {
              type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE,
              kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
              subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype
                .ContactInfoCard,
              templateParams: [e],
            });
          if (
            (t.isEnterprise && !o("WAWebBizGatingUtils").getFmxAgmEnabled()) ||
            (t.isEnterprise &&
              !t.isFMXCtWA &&
              o("WAWebBizGatingUtils").getFmxAgmEnabled()) ||
            !e.isUser() ||
            t.isWASupportStartingChat ||
            (t.iAmStartingChat && !t.isFMXCtWA) ||
            (t.isFromCTWA &&
              !t.isFMXCtWA &&
              o("WAWebFMXGatingUtils").fmxCTWAKillSwitchEnabled()) ||
            e.isBot()
          )
            return null;
          var n = yield o("WAWebApiContact").isAddressBookContact(e.toJid());
          return n
            ? null
            : f(e, {
                type: "notification_template",
                kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
                subtype: "contact_info_card",
                templateParams: [e],
              });
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return f(e, {
        type: "notification_template",
        kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
        subtype: "limit_sharing_system_message",
        limitSharing: t,
        templateParams: [],
      });
    }
    function C(e) {
      return f(e, {
        type: "notification_template",
        kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
        subtype: "mm_signal_sharing_system_message",
        templateParams: [],
      });
    }
    ((l.genSecurityCodeNotificationMsg = e),
      (l.genEncryptNotificationMsg = s),
      (l.genEncryptNotificationMsgAfterBotRemoved = u),
      (l.genNonE2ENotificationMsg = c),
      (l.genDefaultDisappearingModeSystemMsg = d),
      (l.genDisappearingModeUpdateSystemMsg = m),
      (l.genUsernameChangeSystemMsg = p),
      (l.genDisappearingModeUnsupportedSystemMsg = _),
      (l.genNotificationMsg = f),
      (l.genContactInfoCardMsg = g),
      (l.genLimitSharingUpdateSystemMsg = y),
      (l.genMmSignalSharingSystemMsg = C));
  },
  98,
);
