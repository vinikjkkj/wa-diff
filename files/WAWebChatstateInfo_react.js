__d(
  "WAWebChatstateInfo.react",
  [
    "fbt",
    "WAReplaceRepeatingWhitespace",
    "WAWebChatCommunityUtils",
    "WAWebChatGetters",
    "WAWebChatGroupSafetyCheckedMessagePreview.react",
    "WAWebChatGroupSuspendedMessagePreview.react",
    "WAWebChatGroupUtils",
    "WAWebChatLastMsg.react",
    "WAWebCommunitySuspendedMessagePreview.react",
    "WAWebElevatedPushNamesFlag",
    "WAWebEmojiText.react",
    "WAWebErrorBoundary.react",
    "WAWebFlex.react",
    "WAWebFormatConfiguration",
    "WAWebFrontendChatGetters",
    "WAWebGroupSafetyCheckUtils",
    "WAWebMiscGatingUtils",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebNewsletterCreatedMessagePreview.react",
    "WAWebNewsletterSuspendedMessagePreview.react",
    "WDSIconIcDescription.react",
    "WDSIconIcGif.react",
    "WDSIconIcHeadphones.react",
    "WDSIconIcImage.react",
    "WDSIconIcVideocamFilled.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebChatPreviewState",
    "useWAWebChatValues",
    "useWAWebEventTargetValue",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useState,
      p = {
        chatstateTyping: {
          display: "x1lliihq",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          fontWeight: "xk50ysn",
          color: "x1v5yvga",
          textOverflow: "xlyipyv",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
        loadingIndicator: {
          fontStyle: "x1k4tb9n",
          color: "xhslqc4",
          $$css: !0,
        },
        draftLabel: { flexShrink: "x2lah0s", whiteSpace: "xuxw1ft", $$css: !0 },
      };
    function _(e) {
      "use no forget";
      var t,
        a = e.chat,
        i = e.fromCommunity,
        l = i === void 0 ? !1 : i,
        c = o("useWAWebChatValues").useChatValues(e.chat.id, [
          o("WAWebFrontendChatGetters").getDerivedLastAddOnPreview,
          o("WAWebChatGetters").getIsGroup,
          o("WAWebFrontendChatGetters").getGroupMetadata,
          o("WAWebChatGetters").getIsNewsletter,
          o("WAWebFrontendChatGetters").getNewsletterMetadata,
          o("WAWebChatGetters").getPreviewT,
          o("WAWebFrontendChatGetters").getIsCAG,
        ]),
        _ = c[0],
        g = c[1],
        h = c[2],
        y = c[3],
        C = c[4],
        b = c[5],
        v = o("useWAWebChatPreviewState").useChatPreviewState(a),
        S = v[0],
        R = v[1],
        L = m(),
        E = L[0],
        k = L[1],
        I = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
      (d(
        function () {
          var e = !0;
          function t() {
            return r.apply(this, arguments);
          }
          function r() {
            return (
              (r = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                if ((k(null), (_ == null ? void 0 : _.parentMsgKey) != null)) {
                  var t,
                    n = _.parentMsgKey,
                    r = o("WAWebMsgCollection").MsgCollection.get(n);
                  if (!r) {
                    var a,
                      i = yield o(
                        "WAWebMsgCollection",
                      ).MsgCollection.getMessagesById([n]);
                    r = (a = i.messages[0]) != null ? a : null;
                  }
                  if (!e || ((t = r) == null ? void 0 : t.isGroupStatus) === !0)
                    return;
                  k(r);
                }
              })),
              r.apply(this, arguments)
            );
          }
          return (
            t(),
            function () {
              e = !1;
            }
          );
        },
        [_ == null ? void 0 : _.parentMsgKey],
      ),
        o("useWAWebListener").useListener(S, "change:msgKey", function () {
          I();
        }),
        o("useWAWebModelValues").useModelValues(e.chat.presence.chatstate, [
          "id",
          "type",
        ]));
      var T = o("useWAWebModelValues").useModelValues(
          e.chat.presence,
          ["hasData", "withholdDisplayStage"],
          { isStrong: !1 },
        ),
        D = r("useWAWebEventTargetValue")(C, ["change:suspended"], function () {
          return y && (C == null ? void 0 : C.suspended) === !0;
        }),
        x = r("useWAWebEventTargetValue")(
          C,
          ["change:geosuspended"],
          function () {
            return y && (C == null ? void 0 : C.geosuspended) === !0;
          },
        ),
        $ = r("useWAWebEventTargetValue")(h, ["change:suspended"], function () {
          return (
            o("WAWebChatGroupUtils").isSuspendedGroup(a) &&
            !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(a)
          );
        }),
        P = r("useWAWebEventTargetValue")(h, ["change:suspended"], function () {
          return (
            o("WAWebChatCommunityUtils").isSuspendedCommunity(a) ||
            o("WAWebChatGroupUtils").isSuspendedCommunityAnnouncementGroup(a)
          );
        }),
        N = r("useWAWebEventTargetValue")(
          h,
          ["change:groupSafetyCheck", "change:trusted"],
          function () {
            return o("WAWebGroupSafetyCheckUtils").shouldShowGroupSafetyCheckUI(
              a,
            );
          },
        ),
        M = f(a);
      if (D)
        return u.jsx(r("WAWebNewsletterSuspendedMessagePreview.react"), {
          isGeosuspended: x,
        });
      if (P) return u.jsx(r("WAWebCommunitySuspendedMessagePreview.react"), {});
      if ($ && o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled())
        return u.jsx(r("WAWebChatGroupSuspendedMessagePreview.react"), {});
      if (N)
        return u.jsx(r("WAWebChatGroupSafetyCheckedMessagePreview.react"), {});
      var w = o("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(a);
      if (!l && T.isActive()) {
        var A = T.getFormattedString({ elevatedPushNamesEnabled: w }) || {},
          F = A.ariaLabel,
          O = A.text;
        if (O)
          return u.jsx(o("WAWebEmojiText.react").EmojiText, {
            xstyle: p.chatstateTyping,
            direction: "inherit",
            ellipsify: !0,
            titlify: !0,
            text: O,
            ariaLabel: F,
          });
      }
      if ((S == null ? void 0 : S.subtype) === "newsletter_admin_context_card")
        return u.jsx(r("WAWebNewsletterCreatedMessagePreview.react"), {
          chat: a,
        });
      if (R)
        return u.jsx(o("WAWebEmojiText.react").EmojiText, {
          xstyle: p.loadingIndicator,
          direction: "inherit",
          titlify: !0,
          ellipsify: !0,
          text: s._(/*BTDS*/ "Loading\u2026"),
        });
      if (S == null) return M || null;
      if (M) return M;
      var B =
          E && _ != null
            ? u.jsx(r("WAWebChatLastMsg.react"), {
                msg: E.safe(),
                msgType: "AddOnParentMsg",
                lastAddOnPreview: _,
                elevatedPushNamesEnabled: w,
                fromCommunity: l,
              })
            : null,
        W =
          S.type === o("WAWebMsgType").MSG_TYPE.REVOKED
            ? (t = S.revokeTimestamp) != null
              ? t
              : 0
            : S.t,
        q =
          (_ == null ? void 0 : _.timestamp) &&
          (_ == null ? void 0 : _.timestamp) / 1e3;
      return q != null && q > W && B != null
        ? u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
            name: "chat-last-addon-msg",
            children: B,
          })
        : u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
            name: "chat-last-msg",
            children: u.jsx(r("WAWebChatLastMsg.react"), {
              msg: S.safe(),
              msgType: "LastMessage",
              elevatedPushNamesEnabled: w,
              fromCommunity: l,
            }),
          });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = o("useWAWebChatValues").useChatValues(e.id, [
          o("WAWebChatGetters").getDraftMessage,
          o("WAWebFrontendChatGetters").getHasDraftMessage,
          o("WAWebFrontendChatGetters").getActive,
          o("WAWebChatGetters").getHasUnread,
          o("WAWebFrontendChatGetters").getAttachMediaContents,
        ]),
        n = t[0],
        a = t[1],
        i = t[2],
        l = t[3],
        c = t[4];
      if (!(a !== !0 || i || l)) {
        if (c) {
          var d = c.getPreviewableMedias()[0],
            m = d != null ? g(d) : null;
          return u.jsxs(o("WAWebFlex.react").FlexRow, {
            children: [
              u.jsxs(r("WDSText.react"), {
                type: "Body2Emphasized",
                colorName: "accent",
                xstyle: p.draftLabel,
                children: [s._(/*BTDS*/ "Draft"), ":\xA0"],
              }),
              m,
            ],
          });
        }
        var _ = n == null ? void 0 : n.text;
        return _ != null
          ? u.jsxs(o("WAWebFlex.react").FlexRow, {
              children: [
                u.jsxs(r("WDSText.react"), {
                  type: "Body2Emphasized",
                  colorName: "accent",
                  xstyle: p.draftLabel,
                  children: [s._(/*BTDS*/ "Draft"), ":\xA0"],
                }),
                u.jsx(
                  o("WAWebEmojiText.react").EmojiText,
                  {
                    text: r("WAReplaceRepeatingWhitespace")(_, !0),
                    formatters: o("WAWebFormatConfiguration").LastMessage({
                      isDraftMessage: !0,
                      mentions: {},
                      groupMentions: {},
                    }),
                    ellipsify: !0,
                    inlineblock: !0,
                  },
                  "draft",
                ),
              ],
            })
          : null;
      }
    }
    function g(e) {
      var t = e.type,
        n = e.isGif;
      return n
        ? u.jsx(r("WDSIconIcGif.react"), { height: 18, width: 18 })
        : t === o("WAWebMsgType").MSG_TYPE.IMAGE
          ? u.jsxs(u.Fragment, {
              children: [
                u.jsx(r("WDSIconIcImage.react"), { height: 18, width: 18 }),
                "\xA0",
                s._(/*BTDS*/ "Photo"),
              ],
            })
          : t === o("WAWebMsgType").MSG_TYPE.VIDEO
            ? u.jsxs(u.Fragment, {
                children: [
                  u.jsx(r("WDSIconIcVideocamFilled.react"), {
                    height: 18,
                    width: 18,
                  }),
                  "\xA0",
                  s._(/*BTDS*/ "Video"),
                ],
              })
            : t === o("WAWebMsgType").MSG_TYPE.AUDIO
              ? u.jsxs(u.Fragment, {
                  children: [
                    u.jsx(r("WDSIconIcHeadphones.react"), {
                      height: 18,
                      width: 18,
                    }),
                    "\xA0",
                    s._(/*BTDS*/ "Audio"),
                  ],
                })
              : t === o("WAWebMsgType").MSG_TYPE.DOCUMENT
                ? u.jsxs(u.Fragment, {
                    children: [
                      u.jsx(r("WDSIconIcDescription.react"), {
                        height: 18,
                        width: 18,
                      }),
                      "\xA0",
                      s._(/*BTDS*/ "Document"),
                    ],
                  })
                : s._(/*BTDS*/ "Attachment");
    }
    l.default = _;
  },
  226,
);
