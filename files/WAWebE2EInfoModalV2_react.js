__d(
  "WAWebE2EInfoModalV2.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebContactGetters",
    "WAWebDailyAggregatedStats",
    "WAWebExternalLink.react",
    "WAWebFbtCommon",
    "WAWebLimitSharingGatingUtils",
    "WAWebLottieAnimationLoadable",
    "WAWebModalManager",
    "WAWebPrivacyCheckupAnimationData",
    "WAWebPrivacyGatingUtils",
    "WAWebPrivacyHighlightDailyUtils",
    "WAWebPrivacyNarrativeE2ESummary.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect,
      d = {
        containerE2eInfoModal: {
          marginTop: "x1anpbxc",
          marginInlineEnd: "x1wcu8vx",
          marginBottom: "xyorhqc",
          marginInlineStart: "x1ult018",
          $$css: !0,
        },
        textAlignCenter: { textAlign: "x2b8uid", $$css: !0 },
        animation: { height: "x1wkxgih", $$css: !0 },
      };
    function m(e) {
      var t = e.children,
        n = e.highlightSurface,
        a = e.url;
      c(function () {
        n != null &&
          o("WAWebPrivacyHighlightDailyUtils").incrementPrinaDailyCount(
            n,
            o("WAWebDailyAggregatedStats").PrinaDailyActionType.DIALOG_APPEAR,
          );
      }, []);
      var i = function () {
          (o("WAWebExternalLink.react").openExternalLink(a),
            n != null &&
              o("WAWebPrivacyHighlightDailyUtils").incrementPrinaDailyCount(
                n,
                o("WAWebDailyAggregatedStats").PrinaDailyActionType
                  .DIALOG_SELECT,
              ),
            o("WAWebModalManager").ModalManager.close());
        },
        l = function () {
          return o("WAWebModalManager").ModalManager.close();
        },
        d = r("WAWebFbtCommon")("OK"),
        m = s._(/*BTDS*/ "Learn more");
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "e2e-info-v2" },
        testid: void 0,
        onOK: o("WAWebPrivacyGatingUtils").isDataPrivacyPhase2NonE2eeEnabled()
          ? l
          : i,
        okText: o("WAWebPrivacyGatingUtils").isDataPrivacyPhase2NonE2eeEnabled()
          ? d
          : m,
        onCancel: o(
          "WAWebPrivacyGatingUtils",
        ).isDataPrivacyPhase2NonE2eeEnabled()
          ? i
          : l,
        cancelText: o(
          "WAWebPrivacyGatingUtils",
        ).isDataPrivacyPhase2NonE2eeEnabled()
          ? m
          : d,
        children: t,
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.highlightSurface,
        n = e.url,
        r = s._(/*BTDS*/ "Your status and chats are private"),
        a = s._(
          /*BTDS*/ "End-to-end encryption keeps your status updates and personal messages between you and the people you choose. Not even WhatsApp can see them. This includes your:",
        );
      return u.jsx(m, {
        url: n,
        highlightSurface: t,
        children: u.jsx(o("WAWebPrivacyNarrativeE2ESummary.react").E2eSummary, {
          xstyle: d.containerE2eInfoModal,
          icon: u.jsx(f, {}),
          title: r,
          subTitle: a,
          textAlignment: d.textAlignCenter,
        }),
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.chat,
        n = e.highlightSurface,
        r = e.url,
        a = t != null && o("WAWebContactGetters").getIsMe(t.contact),
        i;
      a
        ? (i = s._(/*BTDS*/ "Your chat is private"))
        : (i = s._(/*BTDS*/ "Your chats and calls are private"));
      var l;
      return (
        o(
          "WAWebLimitSharingGatingUtils",
        ).isRenderUpdatedDisclosureGatingEnabled()
          ? (l = a
              ? s._(
                  /*BTDS*/ "End-to-end encryption keeps the personal messages that you send to yourself private. No one else, not even WhatsApp, can read, listen to, or share them. This includes your:",
                )
              : s._(
                  /*BTDS*/ "End-to-end encryption keeps your personal messages and calls between you and the people you choose. No one outside of the chat, not even WhatsApp, can read, listen to, or share them. This includes your:",
                ))
          : (l = a
              ? s._(
                  /*BTDS*/ "End-to-end encryption keeps personal messages that you send to yourself private. Not even WhatsApp can read or listen to them. This includes your:",
                )
              : s._(
                  /*BTDS*/ "End-to-end encryption keeps your personal messages and calls between you and the people you choose. Not even WhatsApp can read or listen to them. This includes your:",
                )),
        u.jsx(m, {
          url: r,
          highlightSurface: n,
          children: u.jsx(
            o("WAWebPrivacyNarrativeE2ESummary.react").E2eSummary,
            {
              icon: u.jsx(f, {}),
              xstyle: d.containerE2eInfoModal,
              title: i,
              subTitle: l,
              textAlignment: d.textAlignCenter,
              isMessageYourselfChat: a,
            },
          ),
        })
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      return u.jsx(o("WAWebLottieAnimationLoadable").LottieAnimation, {
        loop: !1,
        autoplay: !0,
        data: r("WAWebPrivacyCheckupAnimationData"),
        xstyle: d.animation,
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"),
      (l.E2eInfoModalStatus = p),
      (l.E2eInfoModalV2 = _));
  },
  226,
);
