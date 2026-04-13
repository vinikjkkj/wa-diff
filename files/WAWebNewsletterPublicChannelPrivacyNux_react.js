__d(
  "WAWebNewsletterPublicChannelPrivacyNux.react",
  [
    "fbt",
    "WAWebBusinessWebsiteIcon.react",
    "WAWebCommonNewsletterEnums",
    "WAWebCopyPasteSelectable.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebNewsletterFaqUrl",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterPrivacyRow.react",
    "WAWebPhoneNumberPrivacyNux.react",
    "WAWebSecurityShieldIcon.react",
    "WAWebUserPrefsMeUser",
    "WDSIconIcVisibility.react",
    "WDSIconIcVisibilityOff.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { tealColor: { color: "x1v5yvga", $$css: !0 } };
    function d(e) {
      var t,
        n = e.chat,
        a = e.userRole,
        i =
          a === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner,
        l = s._(/*BTDS*/ "About this channel"),
        d = u.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
          className: "x1ypdohk",
          id: "data-sharing-learn-more-link",
          onClick: p,
          selectable: !0,
          children: s._(/*BTDS*/ "Guidelines"),
        }),
        f = u.jsxs(u.Fragment, {
          children: [
            u.jsx(r("WAWebNewsletterPrivacyRow.react"), {
              icon: u.jsx(
                o("WAWebBusinessWebsiteIcon.react").BusinessWebsiteIcon,
                { iconXstyle: c.tealColor, height: 20 },
              ),
              text: s._(
                /*BTDS*/ "Channels are public, so anyone can find them and see 30 days of history before following.",
              ),
              title: i
                ? s._(/*BTDS*/ "Anyone can discover your channel")
                : s._(/*BTDS*/ "Anyone can discover this channel"),
            }),
            u.jsx(m, { isOwner: i }),
            u.jsx(r("WAWebNewsletterPrivacyRow.react"), {
              icon: u.jsx(
                o("WAWebSecurityShieldIcon.react").SecurityShieldIcon,
                { iconXstyle: c.tealColor, height: 20 },
              ),
              text: i
                ? s._(
                    /*BTDS*/ "Your channel needs to follow our {guidelines_link} and is reviewed against them.",
                    [s._param("guidelines_link", d)],
                  )
                : s._(
                    /*BTDS*/ "This channel needs to follow our {guidelines_link} and is reviewed against them.",
                    [s._param("guidelines_link", d)],
                  ),
              title: i
                ? s._(/*BTDS*/ "You're responsible for your channel")
                : s._(/*BTDS*/ "You're responsible for this channel"),
            }),
          ],
        });
      return u.jsx(r("WAWebPhoneNumberPrivacyNux.react"), {
        cancelText: r("WAWebFbtCommon")("Learn more"),
        customContent: f,
        displayName:
          (t = n == null ? void 0 : n.name) != null
            ? t
            : o("WAWebUserPrefsMeUser").getMaybeMeDisplayName(),
        okText: r("WAWebFbtCommon")("OK"),
        onCancel: _,
        onOK: o("WAWebModalManager").closeModalManager,
        pictureWid: n == null ? void 0 : n.id,
        testid: void 0,
        title: l,
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.isOwner;
      if (!o("WAWebNewsletterGatingUtils").isNewsletterCreationEnabled()) {
        var a;
        return (
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = u.jsx(r("WAWebNewsletterPrivacyRow.react"), {
                icon: u.jsx(r("WDSIconIcVisibilityOff.react"), {
                  iconXstyle: c.tealColor,
                  height: 20,
                }),
                text: s._(
                  /*BTDS*/ "Your phone number, profile picture and name aren't shown to followers.",
                ),
                title: s._(/*BTDS*/ "People see your channel, not you"),
              })),
              (t[0] = a))
            : (a = t[0]),
          a
        );
      }
      var i = r(
          n ? "WDSIconIcVisibilityOff.react" : "WDSIconIcVisibility.react",
        ),
        l;
      t[1] !== i
        ? ((l = u.jsx(i, { iconXstyle: c.tealColor, height: 20 })),
          (t[1] = i),
          (t[2] = l))
        : (l = t[2]);
      var d, m;
      t[3] !== n
        ? ((d = n
            ? s._(
                /*BTDS*/ "Followers can't see your phone number, profile picture or name, but other admins can.",
              )
            : s._(
                /*BTDS*/ "Admins for this channel can see your phone number, profile picture and name, but followers can't.",
              )),
          (m = n
            ? s._(/*BTDS*/ "People see your channel, not you")
            : s._(/*BTDS*/ "You're visible to other admins")),
          (t[3] = n),
          (t[4] = d),
          (t[5] = m))
        : ((d = t[4]), (m = t[5]));
      var p;
      return (
        t[6] !== l || t[7] !== d || t[8] !== m
          ? ((p = u.jsx(r("WAWebNewsletterPrivacyRow.react"), {
              icon: l,
              text: d,
              title: m,
            })),
            (t[6] = l),
            (t[7] = d),
            (t[8] = m),
            (t[9] = p))
          : (p = t[9]),
        p
      );
    }
    function p() {
      o("WAWebExternalLink.react").openExternalLink(
        o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
      );
    }
    function _() {
      o("WAWebExternalLink.react").openExternalLink(
        o("WAWebNewsletterFaqUrl").getNewsletterPrivacyFaqUrl(),
      );
    }
    l.default = d;
  },
  226,
);
