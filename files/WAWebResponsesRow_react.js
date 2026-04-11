__d(
  "WAWebResponsesRow.react",
  [
    "fbt",
    "WAWebBox.react",
    "WAWebCallMenuIcon.react",
    "WAWebClock",
    "WAWebContactCollection",
    "WAWebDefaultContactRefreshedIcon.react",
    "WAWebDetailImage.react",
    "WAWebDropdown.react",
    "WAWebEmojiText.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFrontendMsgGetters",
    "WAWebImg.react",
    "WAWebInitialsFromNameUtils",
    "WAWebInitialsProfilePicture.react",
    "WAWebL10N",
    "WAWebModalManager",
    "WAWebMsgDataFromModel",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterQuestionResponseDataUtils",
    "WAWebQuestions.flow",
    "WAWebQuestionsInputModalLoadable",
    "WAWebResponseBody.react",
    "WAWebResponseContextMenu",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebUnstyledButton.react",
    "react",
    "react-compiler-runtime",
    "useHoverState",
    "useWAWebIsKeyboardUser",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = {
        row: {
          position: "x1n2onr6",
          width: "xh8yej3",
          minWidth: "xeuugli",
          maxWidth: "x193iq5w",
          flex: "x12lumcd",
          boxSizing: "x9f619",
          $$css: !0,
        },
        rowContainer: { width: "xh8yej3", minWidth: "xeuugli", $$css: !0 },
        replyCTA: {
          fontSize: "x1f6kntn",
          letterSpacing: "x1iayye1",
          $$css: !0,
        },
        userName: { fontWeight: "x1s688f", fontSize: "x1f6kntn", $$css: !0 },
        contactIcon: {
          width: "xh8yej3",
          height: "x5yr21d",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          backgroundColor: "x1od0jb8",
          outline: "x4u6w88",
          outlineOffset: "x1g40iwv",
          $$css: !0,
        },
        avatarContainer: {
          flexShrink: "x2lah0s",
          width: "x14atkfc",
          $$css: !0,
        },
        contentContainer: {
          flex: "x1cqoux5",
          minWidth: "xeuugli",
          width: "xh8yej3",
          $$css: !0,
        },
        contextMenuContainer: {
          marginInlineStart: "x13fj5qh",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        contextMenuButton: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          paddingTop: "x1yrsyyn",
          paddingInlineEnd: "x1icxu4v",
          paddingBottom: "x10b6aqq",
          paddingInlineStart: "x25sj25",
          minWidth: "x1264ykn",
          minHeight: "xe0p6wg",
          borderStartStartRadius: "xrxyp3c",
          borderStartEndRadius: "xv0oops",
          borderEndEndRadius: "x1isl5vh",
          borderEndStartRadius: "xn8zj9a",
          cursor: "x1ypdohk",
          $$css: !0,
        },
        responseContentContainer: {
          minWidth: "xeuugli",
          flex: "x12lumcd",
          $$css: !0,
        },
        responseBodyRow: { width: "xh8yej3", $$css: !0 },
      };
    function m(e) {
      var t,
        n = e.isReplyDisabled,
        a = e.question,
        i = e.response,
        l = r("useHoverState")(),
        m = l.onMouseEnter,
        _ = l.onMouseLeave,
        f = c(!1),
        g = f[0],
        h = f[1],
        y = c(null),
        C = y[0],
        b = y[1],
        v = r("useWAWebIsKeyboardUser")(),
        S = v.isKeyboardUser,
        R = function (t) {
          (b(t.currentTarget), h(!0));
        },
        L = o("WAWebFrontendMsgGetters").getChat(a),
        E;
      if (g && C) {
        var k = {
          menu: u.jsx(r("WAWebResponseContextMenu"), {
            response: i,
            question: a,
          }),
          anchor: C,
          autoFocus: S,
          dirX: r("WAWebL10N").isRTL()
            ? o("WAWebDropdown.react").DirX.RIGHT
            : o("WAWebDropdown.react").DirX.LEFT,
          dirY: o("WAWebDropdown.react").DirY.BOTTOM,
          offsetY: 5,
          type: o("WAWebDropdown.react").MenuType.Dropdown,
          testid: "response-context-menu",
        };
        E = u.jsx(o("WAWebUimUie.react").UIE, {
          displayName: "ResponseContextMenu",
          escapable: !0,
          popable: !0,
          dismissOnWindowResize: !0,
          requestDismiss: function () {
            return h(!1);
          },
          children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: k }),
        });
      }
      var I = function () {
          var e = a.serverId;
          e != null &&
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebQuestionsInputModalLoadable")
                  .QuestionsInputModalLoadable,
                {
                  chat: L,
                  questionType: o("WAWebQuestions.flow").QuestionType.Reply,
                  questionReplyQuotedMessage: {
                    quotedQuestion: o(
                      "WAWebMsgDataFromModel",
                    ).msgDataFromMsgModel(a),
                    quotedResponse: o(
                      "WAWebNewsletterQuestionResponseDataUtils",
                    ).getQuestionResponseMsgDataFromQuestionResponseModel(i),
                    questionServerId: e,
                  },
                  onSend: function () {
                    i.set("replied", !0);
                  },
                },
              ),
            );
        },
        T =
          i.senderId &&
          ((t = o("WAWebContactCollection").ContactCollection.get(
            i.senderId,
          )) == null
            ? void 0
            : t.name),
        D = T != null ? T : "~" + i.senderNotifyName,
        x = i.replied ? s._(/*BTDS*/ "Reply again") : s._(/*BTDS*/ "Reply");
      return u.jsx(r("WAWebBox.react"), {
        xstyle: [
          o("WAWebUISpacing").uiPadding.horiz16,
          o("WAWebUISpacing").uiPadding.vert12,
          d.row,
        ],
        onMouseEnter: m,
        onMouseLeave: _,
        testid: void 0,
        children: u.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "start",
          xstyle: d.rowContainer,
          children: [
            u.jsx(o("WAWebFlex.react").FlexItem, {
              xstyle: [
                o("WAWebUISpacing").uiPadding.end16,
                o("WAWebUISpacing").uiPadding.start8,
                o("WAWebUISpacing").uiPadding.top4,
                d.avatarContainer,
              ],
              children: u.jsx(p, {
                senderId: i.senderId,
                senderName: i.senderNotifyName,
                senderPictureDirectPath: i.senderPictureDirectPath,
              }),
            }),
            u.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: [o("WAWebUISpacing").uiPadding.end10, d.contentContainer],
              children: [
                u.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  xstyle: o("WAWebUISpacing").uiPadding.bottom4,
                  children: [
                    u.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, {
                      xstyle: d.userName,
                      children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                        ariaLabel: D,
                        text: D,
                      }),
                    }),
                    u.jsx(o("WAWebText.react").WAWebTextSmall, {
                      xstyle: o("WAWebUISpacing").uiMargin.horiz4,
                      children: "\u2022",
                    }),
                    u.jsx(o("WAWebText.react").WAWebTextMuted, {
                      children: u.jsx(o("WAWebText.react").WAWebTextSmall, {
                        children: o("WAWebClock").Clock.relativeShortStr(
                          Math.floor(Date.now() / 1e3) - i.t,
                        ),
                      }),
                    }),
                  ],
                }),
                u.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "start",
                  xstyle: d.responseBodyRow,
                  children: [
                    u.jsx(r("WAWebFlexItem.react"), {
                      grow: 1,
                      xstyle: d.responseContentContainer,
                      children: u.jsx(r("WAWebResponseBody.react"), {
                        response: i,
                      }),
                    }),
                    u.jsx(r("WAWebFlexItem.react"), {
                      xstyle: d.contextMenuContainer,
                      children: u.jsxs(r("WAWebUnstyledButton.react"), {
                        "aria-label": r("WAWebFbtCommon")("Context menu"),
                        onClick: R,
                        xstyle: d.contextMenuButton,
                        children: [
                          u.jsx(o("WAWebCallMenuIcon.react").CallMenuIcon, {}),
                          E,
                        ],
                      }),
                    }),
                  ],
                }),
                u.jsx(o("WAWebText.react").WAWebClickableText, {
                  color: n ? "disabled" : "actionEmphasized",
                  xstyle: [d.replyCTA, o("WAWebUISpacing").uiPadding.top8],
                  disabled: n,
                  onClick: I,
                  children: x,
                }),
              ],
            }),
          ],
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.senderId,
        a = e.senderName,
        i = e.senderPictureDirectPath;
      if (n) {
        var l;
        return (
          t[0] !== n
            ? ((l = u.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: n,
                size: o("WAWebDetailImage.react").DetailImageSize.ExtraSmall,
              })),
              (t[0] = n),
              (t[1] = l))
            : (l = t[1]),
          l
        );
      }
      var s;
      if (t[2] !== a) {
        s = u.jsx(
          o("WAWebDefaultContactRefreshedIcon.react")
            .DefaultContactRefreshedIcon,
          { iconXstyle: d.contactIcon, "aria-hidden": !0 },
        );
        var c = o("WAWebInitialsFromNameUtils").getInitialsFromNames({
          name: null,
          shortName: null,
          pushname: a,
        });
        ((c.firstInitial != null || c.secondInitial != null) &&
          (s = u.jsx(
            o("WAWebInitialsProfilePicture.react").InitialsProfilePicture,
            {
              initialsData: c,
              theme: o("WAWebInitialsProfilePicture.react").ThemeType
                .GroupChatProfilePicture,
              backgroundColorId: 1,
            },
          )),
          (t[2] = a),
          (t[3] = s));
      } else s = t[3];
      var m;
      t[4] !== i
        ? ((m = o("WAWebNewsletterModelUtils").formatProfilePictureURL(i)),
          (t[4] = i),
          (t[5] = m))
        : (m = t[5]);
      var p = m,
        _;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = { width: "40px", height: "40px" }), (t[6] = _))
        : (_ = t[6]);
      var f;
      t[7] !== s || t[8] !== p
        ? ((f =
            p == null
              ? s
              : u.jsx(r("WAWebImg.react"), {
                  src: p,
                  hasPrivacyChecks: !0,
                  crossOrigin: !1,
                  className:
                    "x1n2onr6 x1lliihq xh8yej3 x5yr21d x6ikm8r x10wlt62 x1c9tyrk xeusxvb x1pahc9y x1ertn4p xl1xv1r x115dhu7 x17vty23",
                  draggable: !1,
                  renderError: function () {
                    return s;
                  },
                })),
          (t[7] = s),
          (t[8] = p),
          (t[9] = f))
        : (f = t[9]);
      var g;
      return (
        t[10] !== f
          ? ((g = u.jsx("div", { style: _, children: f })),
            (t[10] = f),
            (t[11] = g))
          : (g = t[11]),
        g
      );
    }
    l.default = m;
  },
  226,
);
