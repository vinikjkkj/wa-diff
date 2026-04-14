__d(
  "WAWebGroupJoinModalBase.react",
  [
    "fbt",
    "WATimeUtils",
    "WAWebCommunityGroupJourneyEventImpl",
    "WAWebCommunitySquircleIcon.react",
    "WAWebConfirmPopup.react",
    "WAWebContactCollection",
    "WAWebDefaultGroupIcon.react",
    "WAWebDetailImage.react",
    "WAWebEmojiText.react",
    "WAWebExpandableText.react",
    "WAWebFlex.react",
    "WAWebFormatConfiguration",
    "WAWebFrontendContactGetters",
    "WAWebGroupJoinModalUtils",
    "WAWebGroupMetadataCollection",
    "WAWebGroupType",
    "WAWebImgWithFallback.react",
    "WAWebLinkify",
    "WAWebModal.react",
    "WAWebStatusClockIcon.react",
    "WAWebTextLineClamp.react",
    "WAWebText_DONOTUSE.react",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "WAWebWamEnumChatFilterActionTypes",
    "countWhere",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useMemo,
      _ = c.useState,
      f = "x1oqssc6-B",
      g = "xekv6nw-B",
      h = {
        secondaryColor: { color: "xhslqc4", $$css: !0 },
        finePrint: { textAlign: "x2b8uid", $$css: !0 },
        avatarNext: { marginInlineStart: "x1a5kqlc", $$css: !0 },
        avatarCount: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          fontSize: "x1f6kntn",
          backgroundColor: "x15e7hw7",
          borderStartStartRadius: "x1uyd5n",
          borderStartEndRadius: "x5j2bic",
          borderEndEndRadius: "x1h7ydjs",
          borderEndStartRadius: "x95n4da",
          color: "x14ug900",
          zIndex: "x1vjfegm",
          width: "xh8yej3",
          borderTopWidth: "x1ktv7sr",
          borderInlineEndWidth: "x142x0oa",
          borderBottomWidth: "xv7zg05",
          borderInlineStartWidth: "x12dgle5",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "x19bsprb",
          borderInlineEndColor: "x2cy9dh",
          borderBottomColor: "x1eeqclz",
          borderInlineStartColor: "x1mx0rqa",
          $$css: !0,
        },
        avatarCountRefreshed: { backgroundColor: "x1od0jb8", $$css: !0 },
        communitySquircle: { color: "x17k9de1", $$css: !0 },
        backgroundFill: { fill: "x1flh12g", $$css: !0 },
        primaryFill: { fill: "xvt3oi1", $$css: !0 },
      };
    function y(e) {
      var t = e.contacts,
        n = e.participantsCount,
        a = p(
          function () {
            return o("WAWebGroupJoinModalUtils").sortFacePileContacts(t, n);
          },
          [t, n],
        ),
        i = a.hiddenPileCount,
        l = a.sortedContacts,
        c = _(!1),
        d = c[0],
        m = c[1],
        f = r("countWhere")(t, function (e) {
          var t = o("WAWebContactCollection").ContactCollection.get(e.id);
          return (
            t != null && o("WAWebFrontendContactGetters").getIsMyContact(t)
          );
        }),
        g = s._(
          /*BTDS*/ '_j{"*":"{number_of_contacts} contacts","_1":"1 contact"}',
          [s._plural(f, "number_of_contacts")],
        ),
        y = u.jsxs("div", {
          className:
            "xh8yej3 x4wrhlh xbrszos xea3l6g x18isctg x2q3nzr x98l61r x1yc453h x127lhb5 xfbpl4g",
          children: [
            n != null
              ? u.jsx(o("WAWebText_DONOTUSE.react").Text, {
                  as: "div",
                  size: "12",
                  xstyle: [
                    o("WAWebUISpacing").uiPadding.top12,
                    o("WAWebUISpacing").uiPadding.horiz12,
                  ],
                  children: s._(
                    /*BTDS*/ '_j{"*":"{number_of_participants} members \\u00b7 {contacts}","_1":"1 member \\u00b7 {contacts}"}',
                    [
                      s._plural(n, "number_of_participants"),
                      s._param("contacts", g),
                    ],
                  ),
                })
              : null,
            u.jsx("div", {
              className: "x78zum5 xw2csxc",
              children: t.map(function (e) {
                return u.jsxs(
                  "div",
                  {
                    className:
                      "x9fslfs x13fj5qh x1xegmmw x14vqqas xod5an3 x1c4vz4f x2lah0s xdl72j9 x78zum5 xdt5ytf x6s0dn4",
                    children: [
                      u.jsx(o("WAWebDetailImage.react").DetailImage, {
                        id: e.id,
                      }),
                      u.jsx("span", {
                        className:
                          "xav9cv8 x1pg5gke xwn7fz2 x2b8uid x1yn0g08 x14ug900",
                        children: u.jsx(r("WAWebTextLineClamp.react"), {
                          maxLines: 2,
                          children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                            text: o(
                              "WAWebFrontendContactGetters",
                            ).getFormattedName(e.contact),
                          }),
                        }),
                      }),
                    ],
                  },
                  e.id.toString(),
                );
              }),
            }),
          ],
        });
      return d
        ? y
        : u.jsxs("div", {
            className: "x3nfvp2 x1q0g3np x98l61r",
            children: [
              l.map(function (e, n) {
                return u.jsx(
                  "span",
                  babelHelpers.extends(
                    {},
                    {
                      0: { className: "x1n2onr6 xh8yej3 x6ikm8r x10wlt62" },
                      1: {
                        className: "x1n2onr6 xh8yej3 x6ikm8r x10wlt62 x1a5kqlc",
                      },
                    }[(t.length > 1) << 0],
                    {
                      children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
                        id: e.id,
                        onClick: function () {
                          return m(!0);
                        },
                        size: 40,
                        theme: "invite_modal",
                      }),
                    },
                  ),
                  n + "-" + e.id.toString(),
                );
              }),
              i > 0
                ? u.jsx(r("WAWebUnstyledButton.react"), {
                    onClick: function () {
                      return m(!0);
                    },
                    xstyle: [
                      h.avatarNext,
                      h.avatarCount,
                      o("WAWebUISpacing").uiPadding.horiz6,
                      h.avatarCountRefreshed,
                    ],
                    children: s._(/*BTDS*/ "+{number}", [
                      s._param("number", i),
                    ]),
                  })
                : null,
            ],
          });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = e.groupId,
        n = e.groupType,
        a = e.src;
      if (t && n === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) {
        var i,
          l =
            (i = r("WAWebGroupMetadataCollection").get(t)) == null
              ? void 0
              : i.parentGroup;
        if (l != null)
          return u.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: l,
            shape: o("WAWebDetailImage.react").DetailImageShape.Squircle,
            size: 104,
          });
      }
      if (t && a === void 0)
        return u.jsx(o("WAWebDetailImage.react").DetailImage, {
          hiddenSubgroupIcon: "subgroup-join-modal",
          id: t,
          size: 104,
        });
      var s = n === o("WAWebGroupType").GroupType.COMMUNITY;
      return u.jsx(o("WAWebImgWithFallback.react").ImgWithFallback, {
        fallbackSVG: s
          ? u.jsx(o("WAWebCommunitySquircleIcon.react").CommunitySquircleIcon, {
              iconXstyle: h.communitySquircle,
              innerStyles: {
                primary: h.primaryFill,
                background: h.backgroundFill,
              },
            })
          : u.jsx(o("WAWebDefaultGroupIcon.react").DefaultGroupIcon, {
              innerStyles: {
                primary: h.primaryFill,
                background: h.backgroundFill,
              },
            }),
        imgProps: { src: a || "" },
        shape: s
          ? o("WAWebDetailImage.react").DetailImageShape.Squircle
          : o("WAWebDetailImage.react").DetailImageShape.Circle,
        size: 104,
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = e.contacts,
        n = e.description,
        r = e.finePrint,
        a = e.groupType,
        i = e.image,
        l = e.inviteCodeExpiration,
        c = e.participantsCount,
        p = e.source,
        f = e.subtitle,
        g = e.textInput,
        b = e.title,
        v = _(!1),
        S = v[0],
        R = v[1],
        L =
          t && t.length >= 1
            ? u.jsx(y, { contacts: t, participantsCount: c })
            : null,
        E = d(function (e) {
          e && R(e.isExpanded);
        }, []),
        k =
          n != null
            ? u.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  {
                    0: {
                      className:
                        "x1nmyh1g x6ikm8r x1odjw0f x1f6kntn x14ug900 x1yc453h x1yn0g08",
                    },
                    1: {
                      className:
                        "x1nmyh1g x6ikm8r x1f6kntn x14ug900 x1yn0g08 x4wrhlh xf7dkkf xv54qhq x1xrf6ya xscbp6u x1w2wdq1 x1rife3k x1yc453h xxkn2d0 x7v9bd0",
                    },
                  }[!!S << 0],
                  {
                    children: u.jsx(
                      o("WAWebExpandableText.react").ExpandableText,
                      {
                        ref: E,
                        text: n.toString(),
                        textLimit: 100,
                        children: function (t) {
                          var e = t.textLimit;
                          return u.jsx(o("WAWebEmojiText.react").EmojiText, {
                            formatters: o(
                              "WAWebFormatConfiguration",
                            ).TrustedGroupDesc({
                              links: o("WAWebLinkify").findLinks(n.toString()),
                              bulletPointsEnabled: !0,
                              expandedFormattingEnabled: !1,
                            }),
                            inferLinesDirection: !0,
                            multiline: !0,
                            text: n,
                            textLimit: e,
                          });
                        },
                      },
                    ),
                  },
                ),
              )
            : null,
        I =
          l != null
            ? Math.ceil(
                Math.abs(
                  (o("WATimeUtils").unixTime() -
                    o("WATimeUtils").castToUnixTime(Number(l))) /
                    o("WATimeUtils").DAY_SECONDS,
                ),
              )
            : null,
        T =
          I != null
            ? u.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "center",
                xstyle: [o("WAWebUISpacing").uiMargin.top5, h.finePrint],
                children: [
                  u.jsx(o("WAWebStatusClockIcon.react").StatusClockIcon, {
                    iconXstyle: h.secondaryColor,
                    width: 13,
                    xstyle: o("WAWebUISpacing").uiPadding.end4,
                  }),
                  u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                    color: "secondary",
                    size: "13",
                    children: s._(
                      /*BTDS*/ '_j{"*":"Expires in {number-of-days-till-expiry} days","_1":"Expires in 1 day"}',
                      [s._plural(I, "number-of-days-till-expiry")],
                    ),
                  }),
                ],
              })
            : null,
        D = u.jsx(C, { groupId: i.groupId, groupType: a, src: i.src }),
        x = u.jsxs(o("WAWebFlex.react").FlexColumn, {
          align: "center",
          xstyle: o("WAWebUISpacing").uiMargin.top16,
          children: [
            u.jsx(o("WAWebEmojiText.react").EmojiText, {
              className: "xlm9qay x14ug900 x1r0g7yl x2b8uid",
              testid: void 0,
              text: b,
            }),
            u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
              color: "secondary",
              size: "14",
              weight: "light",
              xstyle: o("WAWebUISpacing").uiMargin.top5,
              children: f,
            }),
          ],
        }),
        $ =
          (r == null ? void 0 : r.text) != null
            ? u.jsx(o("WAWebFlex.react").FlexRow, {
                xstyle: [o("WAWebUISpacing").uiMargin.top20, h.finePrint],
                children: u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                  color: r.isError ? "danger" : "secondary",
                  size: "13",
                  testid: void 0,
                  children: r.text,
                }),
              })
            : null;
      return (
        m(function () {
          var e = o(
            "WAWebCommunityGroupJourneyEventImpl",
          ).CommunityGroupJourneyEvent.inviteModalSourceToSurface(p);
          e &&
            new (o(
              "WAWebCommunityGroupJourneyEventImpl",
            ).CommunityGroupJourneyEvent)({
              action: o("WAWebWamEnumChatFilterActionTypes")
                .CHAT_FILTER_ACTION_TYPES.GROUP_DISCOVERY,
              surface: e,
            }).commit();
        }, []),
        u.jsxs(o("WAWebFlex.react").FlexColumn, {
          align: "center",
          children: [D, x, L, k, g, T, $],
        })
      );
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t = e.actionDisabled,
        n = t === void 0 ? !1 : t,
        r = e.actionText,
        a = e.cancelText,
        i = e.contacts,
        l = e.description,
        s = e.finePrint,
        c = e.groupType,
        d = e.image,
        m = e.inviteCodeExpiration,
        p = e.isSentByMe,
        _ = p === void 0 ? !1 : p,
        f = e.loading,
        g = f === void 0 ? !1 : f,
        h = e.onAction,
        y = e.onCancel,
        C = e.participantsCount,
        v = e.source,
        S = e.subtitle,
        R = e.textInput,
        L = e.title;
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "group-join" },
        buttonAlign: "center",
        cancelText: a,
        okButtonType: _ ? "solid-warning" : void 0,
        okDisabled: g || n,
        okSpinner: g,
        okText: g === !0 ? "" : r,
        onCancel: y,
        onOK: h,
        type: o("WAWebModal.react").ModalTheme.InviteNew,
        children: u.jsx(b, {
          contacts: i,
          description: l,
          finePrint: s,
          groupType: c,
          image: d,
          inviteCodeExpiration: m,
          participantsCount: C,
          source: v,
          subtitle: S,
          textInput: R,
          title: L,
        }),
      });
    }
    ((v.displayName = v.name + " [from " + i.id + "]"), (l.default = v));
  },
  226,
);
