__d(
  "WAWebPrinaUtils",
  [
    "WALogger",
    "WAWebABPropsSupportGroup",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebE2EInfoModal.react",
    "WAWebE2EInfoModalV2.react",
    "WAWebFaqUrl",
    "WAWebL10N",
    "WAWebMiscGatingUtils",
    "WAWebModalManager",
    "WAWebPrivacyModeSystemMsg",
    "WAWebStateUtils",
    "WAWebURLUtils",
    "WAWebWamEnumPrivacyHighlightSurfaceEnum",
    "WAWebWid",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = "https://www.whatsapp.com/security/";
    function d() {
      return r("WAWebURLUtils").build(c, {
        lg: r("WAWebL10N").getNormalizedLocale(),
      });
    }
    function m(t) {
      if (r("WAWebWid").isGroup(t))
        return o("WAWebWamEnumPrivacyHighlightSurfaceEnum")
          .PRIVACY_HIGHLIGHT_SURFACE_ENUM.GOLDEN_BOX_GROUP;
      if (r("WAWebWid").isBroadcast(t))
        return o("WAWebWamEnumPrivacyHighlightSurfaceEnum")
          .PRIVACY_HIGHLIGHT_SURFACE_ENUM.GOLDEN_BOX_BROADCAST;
      if (r("WAWebWid").isUser(t))
        return o("WAWebWamEnumPrivacyHighlightSurfaceEnum")
          .PRIVACY_HIGHLIGHT_SURFACE_ENUM.GOLDEN_BOX_CONTACT;
      o("WALogger")
        .WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "getHighlightSurfaceForGoldenBox Invalid ChatId",
            ])),
        )
        .verbose()
        .sendLogs("get-highlight-surface-invalid-chat-id");
    }
    function p(e) {
      if (
        o("WAWebMiscGatingUtils").isPrivacyNarrativeV1Enabled() &&
        _(o("WAWebStateUtils").unproxy(e))
      ) {
        var t = o("WAWebFaqUrl").getE2EFaqUrl();
        o("WAWebModalManager").ModalManager.open(
          u.jsx(o("WAWebE2EInfoModalV2.react").E2eInfoModalV2, {
            highlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum")
              .PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_GROUP,
            url: t,
          }),
        );
        return;
      }
      o("WAWebModalManager").ModalManager.open(
        u.jsx(r("WAWebE2EInfoModal.react"), {
          highlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum")
            .PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_GROUP,
          chatId: e.id,
          e2eSubtype: "info_encrypted",
        }),
      );
    }
    function _(e) {
      return e == null ||
        o("WAWebChatGroupUtils").isSupportGroup(e) ||
        r("WAWebABPropsSupportGroup")(e.id.user)
        ? !1
        : o("WAWebChatGetters").getIsUser(e)
          ? !e.contact.isEnterprise
          : o("WAWebChatGetters").getIsGroup(e);
    }
    function f(e) {
      return e == null ||
        o("WAWebChatGroupUtils").isSupportGroup(e) ||
        r("WAWebABPropsSupportGroup")(e.id.user)
        ? !1
        : o("WAWebChatGetters").getIsUser(e)
          ? e.contact.isEnterprise &&
            o("WAWebPrivacyModeSystemMsg").getReducedPrivacyMode(
              e.contact.privacyMode,
            ) === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.E2EE
            ? !0
            : !e.contact.isEnterprise
          : !!(
              o("WAWebChatGetters").getIsGroup(e) ||
              o("WAWebChatGetters").getIsBroadcast(e)
            );
    }
    ((l.securityUrl = d),
      (l.getHighlightSurfaceForGoldenBox = m),
      (l.showEncryptionInfoPopup = p),
      (l.shouldShowNewE2eInfoModal = _),
      (l.chatContainsGoldenBox = f));
  },
  98,
);
