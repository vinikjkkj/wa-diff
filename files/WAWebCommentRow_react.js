__d(
  "WAWebCommentRow.react",
  [
    "fbt",
    "WANullthrows",
    "WAWebBox.react",
    "WAWebChatCollection",
    "WAWebChatGroupUtils",
    "WAWebCiphertext.react",
    "WAWebCommentAuthor.react",
    "WAWebCommentBody.react",
    "WAWebCommentSendFailIcon.react",
    "WAWebCommentTimestamp.react",
    "WAWebCommentToCommentMsgData",
    "WAWebContactCollection",
    "WAWebCopyToClipboard",
    "WAWebDebugGatingUtils",
    "WAWebDeleteRefreshedIcon.react",
    "WAWebDeleteRevokeMsgFlow.react",
    "WAWebDevOnlyBadge.react",
    "WAWebDownContextIcon.react",
    "WAWebDropdownItem.react",
    "WAWebDropdownItemSeparator.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFormatRevokedMsg",
    "WAWebGroupChatProfilePicture.react",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgKeyUtils",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebProcessBaseMsgInfo",
    "WAWebReactionCellDetailThumb.react",
    "WAWebRecalledIcon.react",
    "WAWebReportMsgPopup.react",
    "WAWebSpamConstants",
    "WAWebUISpacing",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebUnstyledButton.react",
    "WAWebWidFactory",
    "WDSIconIcThumbDown.react",
    "react",
    "useHoverState",
    "useWAWebEventTargetValue",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useRef,
      m = c.useState,
      p = {
        icon: {
          display: "x1rg5ohu",
          color: "x181wc8j",
          minWidth: "xnei2rj",
          marginInlineStart: "xe9ewy2",
          $$css: !0,
        },
        secondaryColor: { color: "xhslqc4", $$css: !0 },
        placeholder: { fontStyle: "x1k4tb9n", color: "xhslqc4", $$css: !0 },
        row: { position: "x1n2onr6", overflowWrap: "x1mzt3pk", $$css: !0 },
        context: {
          position: "x10l6tqk",
          insetInlineEnd: "xdg88n9",
          left: null,
          right: null,
          $$css: !0,
        },
        thumbnail: {
          position: "x10l6tqk",
          insetInlineEnd: "x1g9hn12",
          left: null,
          right: null,
          $$css: !0,
        },
      };
    function _(e) {
      var t = e.comment,
        n = e.isAlbumMsg,
        a = r("useHoverState")(),
        i = a.isHovered,
        l = a.onMouseEnter,
        c = a.onMouseLeave,
        _ = o("useWAWebModelValues").useModelValues(t, [
          "id",
          "author",
          "parentMsgKey",
          "body",
          "t",
          "id",
          "ack",
          "read",
          "subtype",
          "revokeSender",
          "links",
          "linksIndexParsed",
          "phoneNumbers",
          "phoneNumbersIndexParsed",
          "protocolMessageKey",
          "isFailed",
          "type",
          "messageSecret",
        ]),
        f = o("WAWebMsgCollection").MsgCollection.get(_.parentMsgKey),
        g = m(!1),
        h = g[0],
        y = g[1],
        C = d(null),
        b = r("WANullthrows")(
          o("WAWebChatCollection").ChatCollection.get(_.parentMsgKey.remote),
        ),
        v = _.author;
      if (_.protocolMessageKey != null) {
        var S = o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
          _.protocolMessageKey,
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
        );
        S.author != null &&
          (v = o("WAWebWidFactory").asUserWidOrThrow(S.author));
      }
      var R = r("WANullthrows")(
          o("WAWebContactCollection").ContactCollection.get(v),
        ),
        L;
      if (h) {
        var E = function () {
            var e = o("WAWebCommentToCommentMsgData").commentToCommentMsgData(
                _,
              ),
              t = new (o("WAWebMsgModel").Msg)(
                babelHelpers.extends(
                  {},
                  o("WAWebProcessBaseMsgInfo").msgDataToBaseMsgInfo(e),
                  { type: o("WAWebMsgType").MSG_TYPE.CHAT, body: _.body },
                ),
              );
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebReportMsgPopup.react"), {
                msg: t,
                spamFlow: o("WAWebSpamConstants").SpamFlow.CommentActions,
              }),
            );
          },
          k = function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebDeleteRevokeMsgFlow.react"), {
                chat: b,
                commentList: [
                  o("WAWebCommentToCommentMsgData").commentToCommentMsgData(_),
                ],
                msgList: [],
              }),
            );
          },
          I = [
            u.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                action: k,
                icon: u.jsx(
                  o("WAWebDeleteRefreshedIcon.react").DeleteRefreshedIcon,
                  {},
                ),
                testid: void 0,
                theme: o("WAWebDropdownItem.react").DropdownItemThemeType
                  .Negative,
                children: s._(/*BTDS*/ "Delete"),
              },
              "delete",
            ),
          ];
        (_.id.fromMe ||
          I.push(
            u.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                action: E,
                icon: u.jsx(r("WDSIconIcThumbDown.react"), {}),
                testid: void 0,
                children: s._(/*BTDS*/ "Report"),
              },
              "mi-report",
            ),
          ),
          o("WAWebDebugGatingUtils").msgDebugMenuItemsEnabled() &&
            (I.push(u.jsx(r("WAWebDropdownItemSeparator.react"), {})),
            I.push(
              u.jsx(
                o("WAWebDropdownItem.react").DropdownItem,
                {
                  action: function () {
                    o("WAWebCopyToClipboard").copyTextToClipboard(
                      _.id.toString(),
                    );
                  },
                  addSpacing: !0,
                  testid: void 0,
                  children: u.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, {
                    label: "Copy Msg ID",
                  }),
                },
                "copy-id",
              ),
            )));
        var T = { menu: I, anchor: C.current };
        L = u.jsx(o("WAWebUimUie.react").UIE, {
          dismissOnWindowResize: !0,
          displayName: "CommentContextMenu",
          escapable: !0,
          popable: !0,
          requestDismiss: function () {
            return y(!1);
          },
          children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: T }),
        });
      }
      var D = r("useWAWebEventTargetValue")(
          o("WAWebContactCollection").ContactCollection,
          ["add", "remove", "change:name"],
          function () {
            return o("WAWebFormatRevokedMsg").formatRevokedComment(_);
          },
        ),
        x = u.jsxs(o("WAWebFlex.react").FlexRow, {
          children: [
            u.jsx(r("WAWebFlexItem.react"), {
              xstyle: [p.icon, o("WAWebUISpacing").uiMargin.end5],
              children: u.jsx(o("WAWebRecalledIcon.react").RecalledIcon, {}),
            }),
            u.jsx(r("WAWebFlexItem.react"), {
              xstyle: [
                p.placeholder,
                o("WAWebUISpacing").uiMargin.top2,
                o("WAWebUISpacing").uiMargin.bottom2,
              ],
              children: D,
            }),
          ],
        }),
        $ = function () {
          return _.subtype === "admin" || _.subtype === "sender"
            ? x
            : _.body != null
              ? u.jsx(r("WAWebCommentBody.react"), { comment: _ })
              : u.jsx(r("WAWebCiphertext.react"), {
                  subtype: _.subtype != null ? _.subtype : "",
                });
        };
      return u.jsxs(r("WAWebBox.react"), {
        flex: !0,
        onMouseEnter: l,
        onMouseLeave: c,
        testid: void 0,
        xstyle: [o("WAWebUISpacing").uiMargin.bottom12, p.row],
        children: [
          u.jsx(r("WAWebFlexItem.react"), {
            xstyle: [
              o("WAWebUISpacing").uiMargin.end12,
              o("WAWebUISpacing").uiMargin.top2,
            ],
            children: u.jsx(r("WAWebGroupChatProfilePicture.react"), {
              chatWid: b.id,
              disableClick: !0,
              usePicInBubbleLayout: !0,
              userContact: R,
            }),
          }),
          u.jsx(o("WAWebFlex.react").FlexRow, {
            children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
              className: "x1h4wwuj",
              grow: 1,
              children: [
                u.jsxs(o("WAWebFlex.react").FlexRow, {
                  children: [
                    u.jsx(r("WAWebFlexItem.react"), {
                      xstyle: o("WAWebUISpacing").uiMargin.end8,
                      children: u.jsx(r("WAWebCommentAuthor.react"), {
                        chat: b,
                        contact: R,
                      }),
                    }),
                    u.jsx(r("WAWebFlexItem.react"), {
                      children: u.jsx(r("WAWebCommentTimestamp.react"), {
                        t: _.t,
                      }),
                    }),
                  ],
                }),
                $(),
              ],
            }),
          }),
          u.jsx(r("WAWebCommentSendFailIcon.react"), { comment: _ }),
          u.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: p.thumbnail,
            children:
              f &&
              n &&
              u.jsx(
                o("WAWebReactionCellDetailThumb.react").ReactionCellDetailThumb,
                {
                  msg: f,
                  onCloseDetailsPane: o("WAWebModalManager").closeModalManager,
                  reactionText: "",
                  showReactionText: !1,
                },
              ),
          }),
          o("WAWebChatGroupUtils").isDeactivatedCommunityAnnouncementGroup(b)
            ? null
            : u.jsx(r("WAWebFlexItem.react"), {
                xstyle: [
                  o("WAWebUISpacing").uiMargin.start12,
                  o("WAWebUISpacing").uiMargin.end3,
                  o("WAWebUISpacing").uiMargin.top2,
                  p.context,
                ],
                children:
                  i || L != null
                    ? u.jsxs(r("WAWebUnstyledButton.react"), {
                        "aria-label": r("WAWebFbtCommon")("Context menu"),
                        onClick: function () {
                          return y(!0);
                        },
                        ref: C,
                        children: [
                          u.jsx(
                            o("WAWebDownContextIcon.react").DownContextIcon,
                            { iconXstyle: p.secondaryColor },
                          ),
                          L,
                        ],
                      })
                    : null,
              }),
        ],
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
