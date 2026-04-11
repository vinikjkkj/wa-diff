__d(
  "WAWebCommunityAnnouncementsSection.react",
  [
    "fbt",
    "WANullthrows",
    "WAWebABProps",
    "WAWebChatEphemerality",
    "WAWebChatInfoDrawerRow.react",
    "WAWebChatInfoDrawerSection.react",
    "WAWebChatInfoMediaSection.react",
    "WAWebChatInfoPhoneNumberVisibilityIndicator.react",
    "WAWebDrawerSectionRefreshed.react",
    "WAWebEphemeralSettingRow.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebGroupInfoEventsSection.react",
    "WAWebGroupInfoIntegritySection.react",
    "WAWebGroupInfoSeparator.react",
    "WAWebKeepInChatIcon.react",
    "WAWebLimitSharingSettingRow.react",
    "WAWebLimitSharingUIUtils",
    "WAWebMuteRow.react",
    "WAWebPencilIcon.react",
    "WAWebPrinaUtils",
    "WAWebReactionsUtils",
    "WAWebSecurityDrawerSection.react",
    "WAWebStarRefreshedIcon.react",
    "WAWebStateUtils",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebWamEnumPrivacyHighlightSurfaceEnum",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        chatWallpaperIcon: { color: "xhslqc4", $$css: !0 },
        secondaryColor: { color: "xhslqc4", $$css: !0 },
      };
    function d(e) {
      var t = e.callbacks,
        n = e.chat,
        a = u.jsx(r("WAWebChatInfoMediaSection.react"), {
          chat: o("WAWebStateUtils").unproxy(n),
          onMediaGallery: t.onMediaGalleryClick,
        }),
        i = u.jsx(r("WAWebGroupInfoEventsSection.react"), {
          chat: o("WAWebStateUtils").unproxy(n),
          onAllEvents: function () {
            return t.onAllEventsClick(n);
          },
          onEventInfo: function (r) {
            t.onEventInfoClick(r, n);
          },
        }),
        l =
          n && o("WAWebChatEphemerality").shouldShowEphemeralSetting(n)
            ? u.jsx(o("WAWebEphemeralSettingRow.react").EphemeralSettingRow, {
                chat: n,
                groupMetadata: r("WANullthrows")(n.groupMetadata),
                onClick: t.onEphemeralClick,
                testid: void 0,
              })
            : null,
        d = o("WAWebLimitSharingUIUtils").isLimitSharingSettingVisible(n)
          ? u.jsx(r("WAWebLimitSharingSettingRow.react"), {
              chat: n,
              onClick: function () {
                return t.onLimitSharingClick(n);
              },
            })
          : null,
        p = u.jsx(m, { handleOnClick: t.onStarredMessagesClick }),
        _ =
          n.hasKeptMsgs() || o("WAWebChatEphemerality").isEphemeralSettingOn(n)
            ? u.jsx(
                o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
                {
                  titleTestId: "section-kept-messages",
                  xstyle: [
                    o("WAWebUISpacing").uiMargin.bottom10,
                    o("WAWebUISpacing").uiPadding.horiz0,
                  ],
                  children: u.jsx(
                    o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRow,
                    {
                      icon: u.jsx(
                        o("WAWebKeepInChatIcon.react").KeepInChatIcon,
                        { iconXstyle: c.secondaryColor, height: 20 },
                      ),
                      onClick: t.onKeptMessagesClick,
                      secondaryTitle: r("WANullthrows")(n.groupMetadata)
                        .restrict
                        ? u.jsx(o("WAWebText.react").WAWebTextMuted, {
                            children: s._(
                              /*BTDS*/ "Only admins can keep or unkeep messages in this group.",
                            ),
                          })
                        : null,
                      side: "chevron",
                      spaced: !0,
                      testid: void 0,
                      title: u.jsx(o("WAWebText.react").WAWebTextTitle, {
                        children: s._(/*BTDS*/ "Kept messages"),
                      }),
                    },
                  ),
                },
              )
            : null,
        f = u.jsx(r("WAWebSecurityDrawerSection.react"), {
          header: { type: "encryption" },
          highlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum")
            .PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_GROUP,
          onClick: function () {
            return o("WAWebPrinaUtils").showEncryptionInfoPopup(n);
          },
          spaced: !0,
          text: s._(
            /*BTDS*/ "Messages are end-to-end encrypted. Click to learn more.",
          ),
        }),
        g = n.mute.canMute()
          ? u.jsx(r("WAWebMuteRow.react"), { chat: n, mute: n.mute })
          : null,
        h = o("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper")
          ? u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRow, {
              icon: u.jsx(o("WAWebPencilIcon.react").PencilIcon, {
                xstyle: c.chatWallpaperIcon,
              }),
              onClick: t.onWallpaperClick,
              side: "chevron",
              spaced: !0,
              title: u.jsx(o("WAWebText.react").WAWebTextTitle, {
                children: s._(/*BTDS*/ "Chat wallpaper"),
              }),
            })
          : null,
        y = o("WAWebReactionsUtils").isReactionsEnabledInCAG(n)
          ? u.jsx(
              o("WAWebChatInfoPhoneNumberVisibilityIndicator.react")
                .PhoneNumberVisibilityIndicatorCag,
              { chat: n },
            )
          : null,
        C = u.jsx(r("WAWebGroupInfoIntegritySection.react"), {
          chat: n,
          showDeleteOrExit: !1,
        }),
        b = s._(
          /*BTDS*/ "If you don't want to receive announcements, you must exit the community. {=m2}",
          [
            s._implicitParam(
              "=m2",
              u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                href: o("WAWebFaqUrl").getExitCommunityUrl(),
                children: s._(/*BTDS*/ "Learn more"),
              }),
            ),
          ],
        ),
        v = u.jsx(r("WAWebDrawerSectionRefreshed.react"), {
          theme: "transparent",
          xstyle: !1,
          children: u.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
            children: b,
          }),
        });
      return u.jsxs(u.Fragment, {
        children: [
          a,
          i,
          p,
          _,
          u.jsxs(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
            xstyle: [
              o("WAWebUISpacing").uiPadding.horiz0,
              o("WAWebUISpacing").uiMargin.bottom10,
            ],
            children: [g, h, l, d, f, y],
          }),
          u.jsx(r("WAWebGroupInfoSeparator.react"), {}),
          C,
          u.jsx(r("WAWebGroupInfoSeparator.react"), {}),
          v,
        ],
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.handleOnClick,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = s._(/*BTDS*/ "Starred messages")), (t[0] = r))
        : (r = t[0]);
      var a = r,
        i;
      t[1] !== n
        ? ((i = { testid: "block-starred-messages", onClick: n, title: a }),
          (t[1] = n),
          (t[2] = i))
        : (i = t[2]);
      var l = i,
        c;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = u.jsx(o("WAWebStarRefreshedIcon.react").StarRefreshedIcon, {})),
          (t[3] = c))
        : (c = t[3]);
      var d;
      return (
        t[4] !== l
          ? ((d = u.jsx(
              o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
              {
                titleTestId: "section-starred-messages",
                xstyle: o("WAWebUISpacing").uiPadding.horiz0,
                children: u.jsx(
                  o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
                  babelHelpers.extends({}, l, { icon: c }),
                ),
              },
            )),
            (t[4] = l),
            (t[5] = d))
          : (d = t[5]),
        d
      );
    }
    l.default = d;
  },
  226,
);
