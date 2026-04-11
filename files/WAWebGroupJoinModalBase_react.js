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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(25),
        n = e.contacts,
        a = e.participantsCount,
        i;
      t[0] !== n || t[1] !== a
        ? ((i = o("WAWebGroupJoinModalUtils").sortFacePileContacts(n, a)),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i))
        : (i = t[2]);
      var l = i,
        c = l.hiddenPileCount,
        d = l.sortedContacts,
        m = _(!1),
        p = m[0],
        f = m[1],
        g;
      t[3] !== n
        ? ((g = r("countWhere")(n, b)), (t[3] = n), (t[4] = g))
        : (g = t[4]);
      var y = g,
        v;
      t[5] !== y
        ? ((v = s._(
            /*BTDS*/ '_j{"*":"{number_of_contacts} contacts","_1":"1 contact"}',
            [s._plural(y, "number_of_contacts")],
          )),
          (t[5] = y),
          (t[6] = v))
        : (v = t[6]);
      var S = v,
        R;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = {
            className:
              "xh8yej3 x4wrhlh xbrszos xea3l6g x18isctg x2q3nzr x98l61r x1yc453h x127lhb5 xfbpl4g",
          }),
          (t[7] = R))
        : (R = t[7]);
      var L;
      t[8] !== S || t[9] !== a
        ? ((L =
            a != null
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
                      s._plural(a, "number_of_participants"),
                      s._param("contacts", S),
                    ],
                  ),
                })
              : null),
          (t[8] = S),
          (t[9] = a),
          (t[10] = L))
        : (L = t[10]);
      var E;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = { className: "x78zum5 xw2csxc" }), (t[11] = E))
        : (E = t[11]);
      var k;
      t[12] !== n ? ((k = n.map(C)), (t[12] = n), (t[13] = k)) : (k = t[13]);
      var I;
      t[14] !== k
        ? ((I = u.jsx("div", babelHelpers.extends({}, E, { children: k }))),
          (t[14] = k),
          (t[15] = I))
        : (I = t[15]);
      var T;
      t[16] !== L || t[17] !== I
        ? ((T = u.jsxs(
            "div",
            babelHelpers.extends({}, R, { children: [L, I] }),
          )),
          (t[16] = L),
          (t[17] = I),
          (t[18] = T))
        : (T = t[18]);
      var D = T,
        x;
      return (
        t[19] !== n.length ||
        t[20] !== D ||
        t[21] !== c ||
        t[22] !== p ||
        t[23] !== d
          ? ((x = p
              ? D
              : u.jsxs("div", {
                  className: "x3nfvp2 x1q0g3np x98l61r",
                  children: [
                    d.map(function (e, t) {
                      return u.jsx(
                        "span",
                        babelHelpers.extends(
                          {},
                          {
                            0: {
                              className: "x1n2onr6 xh8yej3 x6ikm8r x10wlt62",
                            },
                            1: {
                              className:
                                "x1n2onr6 xh8yej3 x6ikm8r x10wlt62 x1a5kqlc",
                            },
                          }[(n.length > 1) << 0],
                          {
                            children: u.jsx(
                              o("WAWebDetailImage.react").DetailImage,
                              {
                                id: e.id,
                                onClick: function () {
                                  return f(!0);
                                },
                                size: 40,
                                theme: "invite_modal",
                              },
                            ),
                          },
                        ),
                        t + "-" + e.id.toString(),
                      );
                    }),
                    c > 0
                      ? u.jsx(r("WAWebUnstyledButton.react"), {
                          onClick: function () {
                            return f(!0);
                          },
                          xstyle: [
                            h.avatarNext,
                            h.avatarCount,
                            o("WAWebUISpacing").uiPadding.horiz6,
                            h.avatarCountRefreshed,
                          ],
                          children: s._(/*BTDS*/ "+{number}", [
                            s._param("number", c),
                          ]),
                        })
                      : null,
                  ],
                })),
            (t[19] = n.length),
            (t[20] = D),
            (t[21] = c),
            (t[22] = p),
            (t[23] = d),
            (t[24] = x))
          : (x = t[24]),
        x
      );
    }
    function C(e) {
      return u.jsxs(
        "div",
        {
          className:
            "x9fslfs x13fj5qh x1xegmmw x14vqqas xod5an3 x1c4vz4f x2lah0s xdl72j9 x78zum5 xdt5ytf x6s0dn4",
          children: [
            u.jsx(o("WAWebDetailImage.react").DetailImage, { id: e.id }),
            u.jsx("span", {
              className: "xav9cv8 x1pg5gke xwn7fz2 x2b8uid x1yn0g08 x14ug900",
              children: u.jsx(r("WAWebTextLineClamp.react"), {
                maxLines: 2,
                children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: o("WAWebFrontendContactGetters").getFormattedName(
                    e.contact,
                  ),
                }),
              }),
            }),
          ],
        },
        e.id.toString(),
      );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = o("WAWebContactCollection").ContactCollection.get(e.id);
      return t != null && o("WAWebFrontendContactGetters").getIsMyContact(t);
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.groupId,
        a = e.groupType,
        i = e.src;
      if (n && a === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) {
        var l,
          s =
            (l = r("WAWebGroupMetadataCollection").get(n)) == null
              ? void 0
              : l.parentGroup;
        if (s != null) {
          var c;
          return (
            t[0] !== s
              ? ((c = u.jsx(o("WAWebDetailImage.react").DetailImage, {
                  id: s,
                  shape: o("WAWebDetailImage.react").DetailImageShape.Squircle,
                  size: 104,
                })),
                (t[0] = s),
                (t[1] = c))
              : (c = t[1]),
            c
          );
        }
      }
      if (n && i === void 0) {
        var d;
        return (
          t[2] !== n
            ? ((d = u.jsx(o("WAWebDetailImage.react").DetailImage, {
                hiddenSubgroupIcon: "subgroup-join-modal",
                id: n,
                size: 104,
              })),
              (t[2] = n),
              (t[3] = d))
            : (d = t[3]),
          d
        );
      }
      var m = a === o("WAWebGroupType").GroupType.COMMUNITY,
        p;
      t[4] !== m
        ? ((p = m
            ? u.jsx(
                o("WAWebCommunitySquircleIcon.react").CommunitySquircleIcon,
                {
                  iconXstyle: h.communitySquircle,
                  innerStyles: {
                    primary: h.primaryFill,
                    background: h.backgroundFill,
                  },
                },
              )
            : u.jsx(o("WAWebDefaultGroupIcon.react").DefaultGroupIcon, {
                innerStyles: {
                  primary: h.primaryFill,
                  background: h.backgroundFill,
                },
              })),
          (t[4] = m),
          (t[5] = p))
        : (p = t[5]);
      var _ = i || "",
        f;
      t[6] !== _ ? ((f = { src: _ }), (t[6] = _), (t[7] = f)) : (f = t[7]);
      var g = m
          ? o("WAWebDetailImage.react").DetailImageShape.Squircle
          : o("WAWebDetailImage.react").DetailImageShape.Circle,
        y;
      return (
        t[8] !== p || t[9] !== f || t[10] !== g
          ? ((y = u.jsx(o("WAWebImgWithFallback.react").ImgWithFallback, {
              fallbackSVG: p,
              imgProps: f,
              shape: g,
              size: 104,
            })),
            (t[8] = p),
            (t[9] = f),
            (t[10] = g),
            (t[11] = y))
          : (y = t[11]),
        y
      );
    }
    function S(e) {
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
        C = e.title,
        b = _(!1),
        S = b[0],
        R = b[1],
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
        D = u.jsx(v, { groupId: i.groupId, groupType: a, src: i.src }),
        x = u.jsxs(o("WAWebFlex.react").FlexColumn, {
          align: "center",
          xstyle: o("WAWebUISpacing").uiMargin.top16,
          children: [
            u.jsx(o("WAWebEmojiText.react").EmojiText, {
              className: "xlm9qay x14ug900 x1r0g7yl x2b8uid",
              testid: void 0,
              text: C,
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
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      var t = o("react-compiler-runtime").c(22),
        n = e.actionDisabled,
        r = e.actionText,
        a = e.cancelText,
        i = e.contacts,
        l = e.description,
        s = e.finePrint,
        c = e.groupType,
        d = e.image,
        m = e.inviteCodeExpiration,
        p = e.isSentByMe,
        _ = e.loading,
        f = e.onAction,
        g = e.onCancel,
        h = e.participantsCount,
        y = e.source,
        C = e.subtitle,
        b = e.textInput,
        v = e.title,
        R = n === void 0 ? !1 : n,
        L = p === void 0 ? !1 : p,
        E = _ === void 0 ? !1 : _,
        k;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = { surface: "unknown", viewName: "group-join" }), (t[0] = k))
        : (k = t[0]);
      var I = L ? "solid-warning" : void 0,
        T = E || R,
        D = E === !0 ? "" : r,
        x;
      t[1] !== i ||
      t[2] !== l ||
      t[3] !== s ||
      t[4] !== c ||
      t[5] !== d ||
      t[6] !== m ||
      t[7] !== h ||
      t[8] !== y ||
      t[9] !== C ||
      t[10] !== b ||
      t[11] !== v
        ? ((x = u.jsx(S, {
            contacts: i,
            description: l,
            finePrint: s,
            groupType: c,
            image: d,
            inviteCodeExpiration: m,
            participantsCount: h,
            source: y,
            subtitle: C,
            textInput: b,
            title: v,
          })),
          (t[1] = i),
          (t[2] = l),
          (t[3] = s),
          (t[4] = c),
          (t[5] = d),
          (t[6] = m),
          (t[7] = h),
          (t[8] = y),
          (t[9] = C),
          (t[10] = b),
          (t[11] = v),
          (t[12] = x))
        : (x = t[12]);
      var $;
      return (
        t[13] !== a ||
        t[14] !== E ||
        t[15] !== f ||
        t[16] !== g ||
        t[17] !== I ||
        t[18] !== T ||
        t[19] !== D ||
        t[20] !== x
          ? (($ = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: k,
              buttonAlign: "center",
              cancelText: a,
              okButtonType: I,
              okDisabled: T,
              okSpinner: E,
              okText: D,
              onCancel: g,
              onOK: f,
              type: o("WAWebModal.react").ModalTheme.InviteNew,
              children: x,
            })),
            (t[13] = a),
            (t[14] = E),
            (t[15] = f),
            (t[16] = g),
            (t[17] = I),
            (t[18] = T),
            (t[19] = D),
            (t[20] = x),
            (t[21] = $))
          : ($ = t[21]),
        $
      );
    }
    l.default = R;
  },
  226,
);
