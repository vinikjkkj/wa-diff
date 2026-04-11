__d(
  "WAWebCommunityPopupNux.react",
  [
    "fbt",
    "WAWebCmd",
    "WAWebCommunityGatingUtils",
    "WAWebCommunityNuxAnimationData",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebLottieAnimationLoadable",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebText_DONOTUSE.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useRef,
      p = {
        badge: { marginTop: "x14beivq", $$css: !0 },
        header: {
          marginTop: "x14beivq",
          marginInlineEnd: "x11t971q",
          marginBottom: "xat24cr",
          marginInlineStart: "xvc5jky",
          maxWidth: "x13qrzjo",
          textAlign: "x2b8uid",
          lineHeight: "x1evy7pa",
          $$css: !0,
        },
        paragraph: {
          marginTop: "xwvj9da",
          marginInlineEnd: "x11t971q",
          marginBottom: "x1p1pd2l",
          marginInlineStart: "xvc5jky",
          textAlign: "x2b8uid",
          $$css: !0,
        },
        disclaimer: {
          marginTop: "xdj266r",
          marginInlineEnd: "x11t971q",
          marginBottom: "x1j8zywd",
          marginInlineStart: "xvc5jky",
          color: "xraqfvc",
          textAlign: "x2b8uid",
          $$css: !0,
        },
        animation: { height: "x1wkxgih", $$css: !0 },
      };
    function _(e) {
      var t = e.onClose,
        n = e.parentChat,
        a = m(),
        i = function () {
          (o("WAWebModalManager").ModalManager.close(), t == null || t());
        },
        l = function () {
          (o("WAWebCmd").Cmd.openCommunityHome(n.id),
            o("WAWebModalManager").ModalManager.close(),
            t == null || t());
        },
        c = s._(/*BTDS*/ "Welcome to a community"),
        _ = u.jsx(o("WAWebLottieAnimationLoadable").LottieAnimation, {
          loop: !1,
          autoplay: !0,
          data: r("WAWebCommunityNuxAnimationData"),
          xstyle: p.animation,
        }),
        f = u.jsxs(u.Fragment, {
          children: [
            s._(
              /*BTDS*/ "As a member, you can see and join groups in this community and stay updated with admin announcements.",
            ),
            " ",
            o("WAWebCommunityGatingUtils").communityCreatePrivacyEnabled()
              ? null
              : u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getCommunityHomeNuxUrl(),
                  children: r("WAWebFbtCommon")("Learn more"),
                }),
          ],
        }),
        g = s._(/*BTDS*/ "Your profile is visible to community admins."),
        h = u.jsxs(u.Fragment, {
          children: [
            s._(
              /*BTDS*/ "Your profile is visible to community admins. Our Privacy Policy includes details about Communities.",
            ),
            " ",
            u.jsx(o("WAWebExternalLink.react").ExternalLink, {
              href: o("WAWebFaqUrl").getCommunityMemberPrivacyUrl(),
              children: r("WAWebFbtCommon")("Learn more"),
            }),
          ],
        });
      return (
        d(function () {
          var e;
          (e = a.current) == null || e.focus();
        }, []),
        u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
          okText: s._(/*BTDS*/ "View community"),
          cancelText: s._(/*BTDS*/ "Close"),
          onOK: l,
          onCancel: i,
          type: o("WAWebModal.react").ModalTheme.Promote,
          ref: a,
          children: [
            u.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "center",
              children: u.jsx(r("WAWebFlexItem.react"), {
                xstyle: p.badge,
                children: _,
              }),
            }),
            u.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "center",
              children: u.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
                level: "2",
                xstyle: p.header,
                size: "24",
                color: "dark",
                weight: "bold",
                children: c,
              }),
            }),
            n.formattedTitle != null
              ? u.jsx(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  justify: "center",
                  children: u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                    children: n.formattedTitle,
                  }),
                })
              : null,
            u.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "center",
              children: u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                xstyle: p.paragraph,
                children: f,
              }),
            }),
            u.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "center",
              children: u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                xstyle: p.disclaimer,
                size: "13",
                children: o(
                  "WAWebCommunityGatingUtils",
                ).communityCreatePrivacyEnabled()
                  ? h
                  : g,
              }),
            }),
          ],
        })
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
