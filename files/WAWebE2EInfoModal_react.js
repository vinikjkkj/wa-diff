__d(
  "WAWebE2EInfoModal.react",
  [
    "fbt",
    "invariant",
    "WALogger",
    "WAWebABPropsSupportGroup",
    "WAWebChatGroupUtils",
    "WAWebClickableLink.react",
    "WAWebCmd",
    "WAWebConfirmPopup.react",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebDailyAggregatedStats",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFormatE2ENotificationForDeviceChange",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebLimitSharingGatingUtils",
    "WAWebManageE2ESessionsJob",
    "WAWebMiscGatingUtils",
    "WAWebModalManager",
    "WAWebPrinaUtils",
    "WAWebPrivacyGatingUtils",
    "WAWebPrivacyHighlightDailyUtils",
    "WAWebSendMsgDatabaseJob",
    "WAWebSessionScope",
    "WAWebStateUtils",
    "WAWebSupportChatStrings",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWidFormat",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c,
      d,
      m = d || (d = o("react")),
      p = d.useEffect,
      _ = ["encrypt", "info_encrypted"];
    function f(t) {
      var n,
        a,
        i = t.accountLid,
        l = t.chat,
        d = t.chatId,
        f = t.e2eSubtype,
        y = t.highlightSurface,
        C = t.jid,
        b = t.msg;
      p(function () {
        var e = o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
          t = C ? [o("WAWebWidFactory").createWid(C.toString()), e] : [e];
        (o("WAWebSendMsgDatabaseJob")
          .getFanOutListJob(t)
          .then(function (e) {
            o("WAWebManageE2ESessionsJob").ensureE2ESessions(
              e,
              !1,
              o("WAWebSessionScope").SessionScope.DEFAULT,
            );
          }),
          _.includes(f) &&
            o("WAWebMiscGatingUtils").isPrivacyNarrativeV1Enabled() &&
            y != null &&
            o("WAWebPrivacyHighlightDailyUtils").incrementPrinaDailyCount(
              y,
              o("WAWebDailyAggregatedStats").PrinaDailyActionType.DIALOG_APPEAR,
            ));
      }, []);
      var v = function () {
          if (C) {
            var e = C.equals(o("WAWebUserPrefsMeUser").getMeUser()),
              t = e ? d : C;
            (o("WAWebModalManager").ModalManager.close(),
              o("WAWebCmd").Cmd.verificationDrawer({ wid: t, lid: i }));
          }
        },
        S,
        R = null,
        L = null,
        E = null,
        k = null,
        I = null,
        T = null;
      switch (
        ((E = function () {
          return o("WAWebModalManager").ModalManager.close();
        }),
        (k = r("WAWebFbtCommon")("OK")),
        f)
      ) {
        case "info_encrypted":
          ((I = o("WAWebPrivacyGatingUtils").isDataPrivacyPhase2NonE2eeEnabled()
            ? g(f, o("WAWebFaqUrl").getE2EFaqUrl(), y)
            : h(f, o("WAWebFaqUrl").getE2EFaqUrl(), y)),
            r("WAWebWid").isGroup(d)
              ? o("WAWebChatGroupUtils").isSupportGroup(l)
                ? ((S = o(
                    "WAWebSupportChatStrings",
                  ).SupportChatSecurityModalText()),
                  (I = h(
                    f,
                    o("WAWebFaqUrl").getSupportChatSafetyFaqUrl(),
                    y,
                    o("WAWebSupportChatStrings").SupportChatLearnMoreLinkText(),
                  )))
                : (S = s._(
                    /*BTDS*/ "Messages you send to this group are secured with end-to-end encryption, which means WhatsApp and third parties can't read them.",
                  ))
              : r("WAWebWid").isBroadcast(d) &&
                (S = s._(
                  /*BTDS*/ "Messages you send to this broadcast list are secured with end-to-end encryption, which means WhatsApp and third parties can't read them.",
                )));
          break;
        case "identity": {
          var D = C && o("WAWebContactCollection").ContactCollection.get(C);
          if (D != null && o("WAWebContactGetters").getIsMe(D))
            if (
              (o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[formatE2ENotification] self identity notif received",
                    ])),
                )
                .sendLogs("SelfIdentityNotificationError"),
              r("WAWebWid").isGroup(d))
            )
              S = s._(
                /*BTDS*/ 'Your security code with all participants changed because there was a registration on a new device of yours. To verify a contact\'s security code, open their Contact Info page and click "Encryption".',
              );
            else if (r("WAWebWid").isBroadcast(d))
              S = s._(
                /*BTDS*/ 'Your security code with all recipients changed because there was a registration on a new device of yours. To verify a contact\'s security code, open their Contact Info page and click "Encryption".',
              );
            else {
              var x = o("WAWebContactCollection").ContactCollection.get(d),
                $ = x
                  ? o("WAWebFrontendContactGetters").getFormattedName(x)
                  : o("WAWebWidFormat").widToFormattedUser(d);
              S = s._(
                /*BTDS*/ "Your security code with {name} changed because there was a registration on a new device of yours.",
                [s._param("name", $)],
              );
            }
          else {
            var P = D
              ? o("WAWebFrontendContactGetters").getFormattedName(D)
              : o("WAWebWidFormat").widToFormattedUser(t.jid);
            S = s._(
              /*BTDS*/ "Your security code with {name} changed because they registered WhatsApp on their phone again.",
              [s._param("name", P)],
            );
          }
          ((R = E),
            (L = k),
            (E = v),
            (k = s._(/*BTDS*/ "Verify")),
            (I = h(f, o("WAWebFaqUrl").getMDCodeChangeFaqUrl(), y)));
          break;
        }
        case "chat_psa": {
          ((I = o("WAWebPrivacyGatingUtils").isDataPrivacyPhase2NonE2eeEnabled()
            ? g(f, o("WAWebFaqUrl").getWAChatFaqUrl(), y)
            : h(f, o("WAWebFaqUrl").getWAChatFaqUrl(), y)),
            (T = s._(
              /*BTDS*/ "WhatsApp uses this secure, official chat to share tips and let you know about new features.",
            )),
            (S = s._(
              /*BTDS*/ "We'll never ask you for your personal information.",
            )));
          break;
        }
        case "device": {
          b != null || u(0, 56550);
          var N = o("WAWebStateUtils").unproxy(b);
          ((S = o(
            "WAWebFormatE2ENotificationForDeviceChange",
          ).formatE2ENotificationForDeviceChange(N, !0)),
            (R = E),
            (L = k));
          var M = N.body
            ? o("WAWebContactCollection").ContactCollection.get(N.body)
            : null;
          (M != null &&
          o("WAWebContactGetters").getIsMe(M) &&
          (d.isGroup() || d.isBroadcast())
            ? ((E = void 0), (k = void 0))
            : ((E = v), (k = s._(/*BTDS*/ "Verify"))),
            (I = h(f, o("WAWebFaqUrl").getMDCodeChangeFaqUrl(), y)));
          break;
        }
        case "encrypt":
        case "encrypt_now":
        default: {
          var w = o("WAWebContactCollection").ContactCollection.get(d);
          if (
            ((I = o(
              "WAWebPrivacyGatingUtils",
            ).isDataPrivacyPhase2NonE2eeEnabled()
              ? g(f, o("WAWebPrinaUtils").securityUrl(), y)
              : h(f, o("WAWebPrinaUtils").securityUrl(), y)),
            r("WAWebWid").isGroup(d))
          )
            o("WAWebChatGroupUtils").isSupportGroup(
              o("WAWebFrontendMsgGetters").getChat(b),
            )
              ? ((S = o(
                  "WAWebSupportChatStrings",
                ).SupportChatSecurityModalText()),
                (I = h(
                  f,
                  o("WAWebFaqUrl").getSupportChatSafetyFaqUrl(),
                  y,
                  o("WAWebSupportChatStrings").SupportChatLearnMoreLinkText(),
                )))
              : (S = s._(
                  /*BTDS*/ "WhatsApp secures your conversations with end-to-end encryption. This means your messages and status updates stay between you and the people you choose. Not even WhatsApp can read or listen to them.",
                ));
          else if (r("WAWebABPropsSupportGroup")(d.user))
            ((S = o("WAWebSupportChatStrings").SupportChatSecurityModalText()),
              (I = h(
                f,
                o("WAWebFaqUrl").getSupportChatSafetyFaqUrl(),
                y,
                o("WAWebSupportChatStrings").SupportChatLearnMoreLinkText(),
              )));
          else if (r("WAWebWid").isBroadcast(d))
            S = s._(
              /*BTDS*/ "WhatsApp secures your conversations with end-to-end encryption. This means your messages and status updates stay between you and the people you choose. Not even WhatsApp can read or listen to them.",
            );
          else if (w != null && o("WAWebContactGetters").getIsMe(w))
            S = s._(
              /*BTDS*/ "End-to-end encryption keeps personal messages that you send to yourself private. Not even WhatsApp can read or listen to them.",
            );
          else {
            ((T = s._(
              /*BTDS*/ "WhatsApp secures your conversations with end-to-end encryption.",
            )),
              o(
                "WAWebLimitSharingGatingUtils",
              ).isRenderUpdatedDisclosureGatingEnabled()
                ? (S = s._(
                    /*BTDS*/ "Your messages and calls stay between you and the people and businesses you choose. No one outside of the chat, not even WhatsApp, can read, listen to, or share them.",
                  ))
                : (S = s._(
                    /*BTDS*/ "Your messages stay between you and the people and businesses you choose. Not even WhatsApp can read or listen to them.",
                  )));
            break;
          }
        }
      }
      var A = m.jsxs(m.Fragment, {
          children: [
            S,
            "\xA0",
            I != null && I.type === "inline" && I.link,
            "\xA0",
          ],
        }),
        F = R != null || L != null,
        O = I != null && I.type === "button";
      return (
        F &&
          O &&
          o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[WAWebE2EInfoModal] cancel + learn more btn conflict",
              ])),
          ),
        (R = (n = (a = I) == null ? void 0 : a.onClick) != null ? n : R),
        (L = O ? s._(/*BTDS*/ "Learn more") : L),
        m.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          tsNavigationData: { surface: "unknown", viewName: "e2e-info" },
          testid: void 0,
          title: T,
          onOK: E,
          okText: k,
          onCancel: R,
          cancelText: L,
          children: A,
        })
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e, t, n) {
      var r = y(e, t, n);
      return { type: "button", onClick: r };
    }
    function h(e, t, n, o) {
      var a = y(e, t, n),
        i = m.jsx(r("WAWebClickableLink.react"), {
          onClick: a,
          children: o != null ? o : s._(/*BTDS*/ "Learn more"),
        });
      return { type: "inline", link: i };
    }
    function y(e, t, n) {
      return function () {
        (_.includes(e) &&
          o("WAWebMiscGatingUtils").isPrivacyNarrativeV1Enabled() &&
          n != null &&
          o("WAWebPrivacyHighlightDailyUtils").incrementPrinaDailyCount(
            n,
            o("WAWebDailyAggregatedStats").PrinaDailyActionType.DIALOG_SELECT,
          ),
          o("WAWebExternalLink.react").openExternalLink(t));
      };
    }
    l.default = f;
  },
  226,
);
