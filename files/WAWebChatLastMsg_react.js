__d(
  "WAWebChatLastMsg.react",
  [
    "cx",
    "fbt",
    "WALogger",
    "WAReplaceRepeatingWhitespace",
    "WAWebABProps",
    "WAWebBroadcastNotification.react",
    "WAWebChatMsgAck.react",
    "WAWebChatMsgSymbol.react",
    "WAWebClassnames",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebEmojiText.react",
    "WAWebFormatConfiguration",
    "WAWebFormatMsgText",
    "WAWebFrontendMsgGetters",
    "WAWebGalaxyFlowResponseLastMsg.react",
    "WAWebGroupType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebL10N",
    "WAWebMessageGroupNotification.react",
    "WAWebMessageNewsletterNotification.react",
    "WAWebMsgGetters",
    "WAWebMsgModelPropUtils",
    "WAWebMsgReply",
    "WAWebMsgType",
    "WAWebName.react",
    "WAWebProtobufsE2E.pb",
    "WAWebReactionEmoji.react",
    "WAWebServerPropConstants",
    "WAWebStateUtils",
    "WAWebViewMode.flow",
    "WAWebWamEnumWebcRmrReasonCode",
    "WAWebWidFactory",
    "WDSIconIcHelp.react",
    "WDSIconWdsIcStatus.react",
    "react",
    "useWAWebAssociatedMessages",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c,
      d = c || (c = o("react")),
      m = {
        center: { alignSelf: "xamitd3", $$css: !0 },
        marginEnd2: { marginInlineEnd: "x16q7b9a", $$css: !0 },
        statusIcon: { verticalAlign: "x16dsc37", $$css: !0 },
      };
    function p(t) {
      "use no forget";
      var n,
        a,
        i,
        l = o("useWAWebMsgValues").useMsgValues(t.msg.id, [
          (a = o("WAWebMsgGetters")).getAck,
          (i = o("WAWebFrontendMsgGetters")).getAsBroadcastNotification,
          i.getAsGroupNotification,
          i.getAsProduct,
          i.getAsRevoked,
          i.getDir,
          a.getIsGroupMsg,
          a.getIsMetaBotInvokeResponse,
          a.getIsNotification,
          a.getIsSentByMe,
          a.getItemCount,
          a.getLatestEditMsgKey,
          i.getRtl,
          a.getSender,
          a.getSize,
          a.getType,
          i.getMediaData,
          a.getMessage,
          a.getIsVcardOverMmsDocument,
          a.getSmbClientCampaignId,
          a.getIsQuestion,
          a.getNewsletterAdminProfile,
        ]),
        s = l[0],
        c = l[1],
        p = l[2],
        _ = l[3],
        f = l[4],
        g = l[5],
        h = l[6],
        y = l[7],
        C = l[8],
        b = l[9],
        v = l[10],
        S = l[11],
        R = l[12],
        L = l[13],
        E = l[14],
        k = l[15],
        I = l[16],
        T = l[17],
        D = l[18],
        x = l[19],
        $ = l[20],
        P = l[21],
        N = t.msg,
        M = t.searchQuery,
        w = M === void 0 ? [] : M,
        A = t.msgType,
        F = t.lastAddOnPreview,
        O = t.elevatedPushNamesEnabled,
        B = O === void 0 ? !1 : O,
        W = t.fromCommunity,
        q = W === void 0 ? !1 : W,
        U = (n = P == null ? void 0 : P.name) != null ? n : t.author,
        V =
          (F == null ? void 0 : F.type) ===
            o("WAWebMsgType").MSG_TYPE.COMMENT ||
          (F == null ? void 0 : F.type) ===
            o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE,
        H = A === "AddOnParentMsg" && !V,
        G = '"',
        z = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
      (k === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
        D &&
        (!I || !I.mediaBlob) &&
        o("WAWebMsgModelPropUtils").isTrusted(N.unsafe()) &&
        E <=
          o("WAWebServerPropConstants").MMS_VCARD_AUTODOWNLOAD_SIZE_KB * 1024 &&
        N.downloadMedia({
          downloadEvenIfExpensive: !0,
          rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
            .MSG_RENDER,
          isUserInitiated: !1,
        }),
        o("useWAWebListener").useListener(
          x != null ? N : null,
          "change:body change:caption",
          z,
        ),
        o("useWAWebListener").useListener(
          k === o("WAWebMsgType").MSG_TYPE.DOCUMENT && I && D ? I : null,
          "change:parsedVcards",
          z,
        ),
        o("useWAWebListener").useListener(
          k === o("WAWebMsgType").MSG_TYPE.REVOKED
            ? o("WAWebContactCollection").ContactCollection
            : null,
          ["add", "remove", "change:name"],
          z,
        ));
      var j = o("useWAWebAssociatedMessages").useHiddenAssociatedMessages(
          N.unsafe(),
          o("WAWebViewMode.flow").ViewModeSurface.CHAT_LIST,
        ),
        K = [],
        Q = b && !f && !q && N.type !== o("WAWebMsgType").MSG_TYPE.CALL_LOG;
      (Q &&
        A !== "AddOnParentMsg" &&
        K.push(
          d.jsx(
            r("WAWebChatMsgAck.react"),
            { msg: N.unsafe(), associatedMessages: j },
            "symbol",
          ),
        ),
        N.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE &&
          N.nativeFlowName ===
            r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW &&
          K.push(
            d.jsx(
              r("WAWebGalaxyFlowResponseLastMsg.react"),
              { msg: N.unsafe() },
              "galaxy-flow-response",
            ),
          ));
      var X =
          A !== "Search" &&
          (h || y || P != null) &&
          !C &&
          !q &&
          N.type !== o("WAWebMsgType").MSG_TYPE.CALL_LOG,
        Y = U != null && U !== "" && A === "Search";
      if (h && q) {
        var J,
          Z,
          ee = o("WAWebFrontendMsgGetters").getChat(N.unsafe()),
          te =
            ((J = ee.groupMetadata) == null ? void 0 : J.groupType) ===
            o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
              ? u._(/*BTDS*/ "Announcements")
              : ee.title();
        (K.push(
          d.jsx("span", {
            className: "_alcj",
            children: d.jsx(
              o("WAWebEmojiText.react").EmojiText,
              { text: te, direction: "auto", ellipsify: !0 },
              "group-name",
            ),
          }),
        ),
          K.push(
            d.jsx(
              "span",
              {
                className: o(
                  "WAWebClassnames",
                ).classnamesConvertMeToStylexPlease(
                  ((Z = {}), (Z._alck = r("WAWebL10N").isRTL()), Z),
                ),
                children: "\xA0\u25B6\xA0",
              },
              "group-divider",
            ),
          ));
      }
      if (
        (N.type === o("WAWebMsgType").MSG_TYPE.NEWSLETTER_NOTIFICATION &&
          K.push(
            d.jsx(
              r("WAWebMessageNewsletterNotification.react"),
              { msg: N },
              "newsletter-notification",
            ),
          ),
        A === "AddOnParentMsg" && F != null)
      ) {
        var ne = o("WAWebContactCollection").ContactCollection.gadd(
          o("WAWebWidFactory").createUserWidOrThrow(F.sender),
        );
        if (o("WAWebContactGetters").getIsMe(ne))
          switch (F.type) {
            case "poll_vote":
              K.push(
                d.jsxs(
                  "span",
                  { children: [u._(/*BTDS*/ "You voted in:"), " "] },
                  "poll_vote_preview_string",
                ),
              );
              break;
            case "reaction":
              K.push(
                d.jsx(
                  "span",
                  {
                    children: u._(/*BTDS*/ "You reacted {emoji} to:", [
                      u._param(
                        "emoji",
                        d.jsx(o("WAWebReactionEmoji.react").ReactionEmoji, {
                          reaction: F.reactionText,
                        }),
                      ),
                    ]),
                  },
                  "reaction_preview_string",
                ),
              );
              break;
            case "comment":
              K.push(
                d.jsx(
                  "span",
                  { children: u._(/*BTDS*/ "You replied to an announcement") },
                  "comment_preview_string",
                ),
              );
              break;
            case o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE: {
              var re = F.eventResponse;
              re ===
              o("WAWebProtobufsE2E.pb")
                .Message$EventResponseMessage$EventResponseType.GOING
                ? K.push(
                    d.jsx(
                      "span",
                      {
                        children: u._(/*BTDS*/ "You: {=m1} going to", [
                          u._implicitParam(
                            "=m1",
                            d.jsx(
                              r("WAWebChatMsgSymbol.react"),
                              { msg: N.unsafe(), children: u._(/*BTDS*/ "") },
                              "msg-symbol",
                            ),
                          ),
                        ]),
                      },
                      "event_response_going",
                    ),
                  )
                : re ===
                    o("WAWebProtobufsE2E.pb")
                      .Message$EventResponseMessage$EventResponseType.NOT_GOING
                  ? K.push(
                      d.jsx(
                        "span",
                        {
                          children: u._(/*BTDS*/ "You: {=m1} not going to", [
                            u._implicitParam(
                              "=m1",
                              d.jsx(
                                r("WAWebChatMsgSymbol.react"),
                                { msg: N.unsafe(), children: u._(/*BTDS*/ "") },
                                "msg-symbol",
                              ),
                            ),
                          ]),
                        },
                        "event_response_cant_go",
                      ),
                    )
                  : re ===
                      o("WAWebProtobufsE2E.pb")
                        .Message$EventResponseMessage$EventResponseType.MAYBE &&
                    K.push(
                      d.jsx(
                        "span",
                        {
                          children: u._(/*BTDS*/ "You: {=m1} maybe going to", [
                            u._implicitParam(
                              "=m1",
                              d.jsx(
                                r("WAWebChatMsgSymbol.react"),
                                { msg: N.unsafe(), children: u._(/*BTDS*/ "") },
                                "msg-symbol",
                              ),
                            ),
                          ]),
                        },
                        "event_response_maybe",
                      ),
                    );
            }
          }
        else if (h)
          switch (F.type) {
            case "poll_vote":
              F.pollHideVoterNames === !0
                ? K.push(
                    d.jsxs(
                      "span",
                      { children: [u._(/*BTDS*/ "Someone voted in:"), " "] },
                      "poll_vote_preview_string",
                    ),
                  )
                : K.push(
                    d.jsxs(
                      "span",
                      {
                        children: [
                          u._(/*BTDS*/ "{user-name} voted in:", [
                            u._param(
                              "user-name",
                              d.jsx(
                                o("WAWebName.react").Name,
                                {
                                  contact: ne,
                                  useShortName: !0,
                                  showNotifyName: B,
                                  elevatedPushNamesEnabled: B,
                                },
                                "author",
                              ),
                            ),
                          ]),
                          " ",
                        ],
                      },
                      "poll_vote_preview_string",
                    ),
                  );
              break;
            case "reaction":
              K.push(
                d.jsx(
                  "span",
                  {
                    children: u._(/*BTDS*/ "{user-name} reacted {emoji} to:", [
                      u._param(
                        "user-name",
                        d.jsx(
                          o("WAWebName.react").Name,
                          {
                            contact: ne,
                            useShortName: !0,
                            showNotifyName: B,
                            elevatedPushNamesEnabled: B,
                          },
                          "author",
                        ),
                      ),
                      u._param(
                        "emoji",
                        d.jsx(o("WAWebReactionEmoji.react").ReactionEmoji, {
                          reaction: F.reactionText,
                        }),
                      ),
                    ]),
                  },
                  "reaction_preview_string",
                ),
              );
              break;
            case "comment":
              K.push(
                d.jsx(
                  "span",
                  {
                    children: u._(
                      /*BTDS*/ "{user-name} replied to an announcement",
                      [
                        u._param(
                          "user-name",
                          d.jsx(
                            o("WAWebName.react").Name,
                            {
                              contact: ne,
                              showNotifyName: B,
                              elevatedPushNamesEnabled: B,
                            },
                            "author",
                          ),
                        ),
                      ],
                    ),
                  },
                  "comment_preview_string",
                ),
              );
              break;
            case "event_response": {
              var oe = F.eventResponse;
              oe ===
              o("WAWebProtobufsE2E.pb")
                .Message$EventResponseMessage$EventResponseType.GOING
                ? K.push(
                    d.jsx(
                      "span",
                      {
                        children: u._(/*BTDS*/ "{user-name}: {=m2} going to", [
                          u._param(
                            "user-name",
                            d.jsx(
                              o("WAWebName.react").Name,
                              {
                                contact: ne,
                                showNotifyName: B,
                                elevatedPushNamesEnabled: B,
                              },
                              "author",
                            ),
                          ),
                          u._implicitParam(
                            "=m2",
                            d.jsx(
                              r("WAWebChatMsgSymbol.react"),
                              { msg: N.unsafe(), children: u._(/*BTDS*/ "") },
                              "msg-symbol",
                            ),
                          ),
                        ]),
                      },
                      "event_response_going",
                    ),
                  )
                : oe ===
                    o("WAWebProtobufsE2E.pb")
                      .Message$EventResponseMessage$EventResponseType.NOT_GOING
                  ? K.push(
                      d.jsx(
                        "span",
                        {
                          children: u._(
                            /*BTDS*/ "{user-name}: {=m2} not going to",
                            [
                              u._param(
                                "user-name",
                                d.jsx(
                                  o("WAWebName.react").Name,
                                  {
                                    contact: ne,
                                    showNotifyName: B,
                                    elevatedPushNamesEnabled: B,
                                  },
                                  "author",
                                ),
                              ),
                              u._implicitParam(
                                "=m2",
                                d.jsx(
                                  r("WAWebChatMsgSymbol.react"),
                                  {
                                    msg: N.unsafe(),
                                    children: u._(/*BTDS*/ ""),
                                  },
                                  "msg-symbol",
                                ),
                              ),
                            ],
                          ),
                        },
                        "event_response_cant_go",
                      ),
                    )
                  : oe ===
                      o("WAWebProtobufsE2E.pb")
                        .Message$EventResponseMessage$EventResponseType.MAYBE &&
                    K.push(
                      d.jsx(
                        "span",
                        {
                          children: u._(
                            /*BTDS*/ "{user-name}: {=m2} maybe going to",
                            [
                              u._param(
                                "user-name",
                                d.jsx(
                                  o("WAWebName.react").Name,
                                  {
                                    contact: ne,
                                    showNotifyName: B,
                                    elevatedPushNamesEnabled: B,
                                  },
                                  "author",
                                ),
                              ),
                              u._implicitParam(
                                "=m2",
                                d.jsx(
                                  r("WAWebChatMsgSymbol.react"),
                                  {
                                    msg: N.unsafe(),
                                    children: u._(/*BTDS*/ ""),
                                  },
                                  "msg-symbol",
                                ),
                              ),
                            ],
                          ),
                        },
                        "event_response_maybe",
                      ),
                    );
            }
          }
        else
          switch (F.type) {
            case "poll_vote":
              K.push(
                d.jsxs(
                  "span",
                  { children: [u._(/*BTDS*/ "Voted in:"), " "] },
                  "poll_vote_preview_string",
                ),
              );
              break;
            case "reaction":
              K.push(
                d.jsx(
                  "span",
                  {
                    children: u._(/*BTDS*/ "Reacted {emoji} to:", [
                      u._param(
                        "emoji",
                        d.jsx(o("WAWebReactionEmoji.react").ReactionEmoji, {
                          reaction: F.reactionText,
                        }),
                      ),
                    ]),
                  },
                  "reaction_preview_string",
                ),
              );
              break;
            case "event_response": {
              var ae = F.eventResponse;
              ae ===
              o("WAWebProtobufsE2E.pb")
                .Message$EventResponseMessage$EventResponseType.GOING
                ? K.push(
                    d.jsxs(
                      "span",
                      {
                        children: [
                          d.jsx(
                            r("WAWebChatMsgSymbol.react"),
                            { msg: N.unsafe() },
                            "msg-symbol",
                          ),
                          u._(/*BTDS*/ "Going to"),
                        ],
                      },
                      "event_response_going",
                    ),
                  )
                : ae ===
                    o("WAWebProtobufsE2E.pb")
                      .Message$EventResponseMessage$EventResponseType.NOT_GOING
                  ? K.push(
                      d.jsxs(
                        "span",
                        {
                          children: [
                            d.jsx(
                              r("WAWebChatMsgSymbol.react"),
                              { msg: N.unsafe() },
                              "msg-symbol",
                            ),
                            u._(/*BTDS*/ "Not going to"),
                          ],
                        },
                        "event_response_cant_go",
                      ),
                    )
                  : ae ===
                      o("WAWebProtobufsE2E.pb")
                        .Message$EventResponseMessage$EventResponseType.MAYBE &&
                    K.push(
                      d.jsxs(
                        "span",
                        {
                          children: [
                            d.jsx(
                              r("WAWebChatMsgSymbol.react"),
                              { msg: N.unsafe() },
                              "msg-symbol",
                            ),
                            u._(/*BTDS*/ "Maybe going to"),
                          ],
                        },
                        "event_response_maybe",
                      ),
                    );
            }
          }
        K.push(
          d.jsx("span", { children: "\xA0" }, "add_on_space_after_preview"),
        );
      }
      var ie = L ? o("WAWebContactCollection").ContactCollection.get(L) : null;
      if (
        ((X || Y) &&
          A !== "AddOnParentMsg" &&
          (X
            ? P
              ? K.push(
                  d.jsx(
                    o("WAWebEmojiText.react").EmojiText,
                    { text: U, direction: "auto" },
                    "author-text",
                  ),
                )
              : ie
                ? K.push(
                    d.jsx(
                      o("WAWebName.react").Name,
                      {
                        contact: ie,
                        useShortName: !0,
                        showNotifyName: B,
                        elevatedPushNamesEnabled: B,
                      },
                      "author-name",
                    ),
                  )
                : o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[chat-last-msg] sender null msgId=",
                          " getSender=",
                          "",
                        ])),
                      t.msg.id,
                      L == null ? void 0 : L.toLogString(),
                    )
                    .tags("messaging")
                    .sendLogs("chat-last-message-missing-sender")
            : Y &&
              K.push(
                d.jsx(
                  o("WAWebEmojiText.react").EmojiText,
                  { text: U, direction: "auto" },
                  "author-text",
                ),
              ),
          ((X && (ie || P)) || Y) &&
            K.push(d.jsx("span", { children: ":\xA0" }, "divider"))),
        H && K.push(G),
        o("WAWebMsgReply").isStatusReplyMsg(N.unsafe()) &&
          K.push(
            d.jsx(
              r("WDSIconWdsIcStatus.react"),
              {
                height: 16,
                width: 16,
                displayInline: !0,
                xstyle: [m.center, m.marginEnd2, m.statusIcon],
              },
              "status-reply",
            ),
          ),
        $ &&
          K.push(
            d.jsx(
              r("WAWebChatMsgSymbol.react"),
              {
                msg: N.unsafe(),
                overrideIcon: d.jsx(r("WDSIconIcHelp.react"), {
                  width: 18,
                  height: 20,
                }),
              },
              "question-symbol",
            ),
          ),
        o("WAWebMsgModelPropUtils").hasSymbol(N.unsafe()) &&
          !V &&
          K.push(
            d.jsx(
              r("WAWebChatMsgSymbol.react"),
              { msg: N.unsafe() },
              "msg-symbol",
            ),
          ),
        k === "order" &&
          v != null &&
          K.push(
            d.jsxs(
              "div",
              {
                children: [
                  u._(/*BTDS*/ '_j{"*":"{count} items","_1":"1 item"}', [
                    u._plural(v || 0, "count"),
                  ]),
                  T
                    ? d.jsx("span", { children: ":\xA0" }, "item-divider")
                    : null,
                ],
              },
              "item-count",
            ),
          ),
        p != null)
      )
        K.push(
          d.jsx(
            r("WAWebMessageGroupNotification.react"),
            { msg: p, clickable: !1, isLastMsg: !0 },
            "status-group-notification",
          ),
        );
      else if (c != null)
        K.push(
          d.jsx(
            r("WAWebBroadcastNotification.react"),
            { msg: c, clickable: !1 },
            "broadcast_notification",
          ),
        );
      else if ((F == null ? void 0 : F.type) !== "comment") {
        var le,
          se = f,
          ue = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            ((le = {}), (le._ah6u = _ != null), (le._ah6t = se != null), le),
          ),
          ce = A === "AddOnParentMsg" ? "LastMessage" : A,
          de = o("WAWebABProps").getABPropConfigValue(
            "enable_clear_formatted_preview",
          ),
          me = r("WAWebFormatMsgText")({
            msg: o("WAWebStateUtils").unproxy(N.unsafe()),
            associatedMessages: j,
            options: {
              unformat: de,
              formatAsLastMsg: F == null,
              formatAsSearchResult: A === "Search",
              searchQuery: w,
            },
          }).toString();
        H &&
          (me =
            R !== r("WAWebL10N").isRTL() &&
            !o("WAWebMsgModelPropUtils").hasSymbol(N.unsafe())
              ? "" + G + me
              : "" + me + G);
        var pe = {
          className: ue,
          direction: g,
          text: r("WAReplaceRepeatingWhitespace")(me, !0),
          dirMismatch: R !== r("WAWebL10N").isRTL(),
          formatters: o("WAWebFormatConfiguration")[ce]({
            mentions: N.mentionMap(),
            groupMentions: N.groupMentionMap(),
            terms: w,
          }),
          inlineblock: !0,
          ellipsify: !0,
        };
        K.push(
          d.createElement(
            o("WAWebEmojiText.react").EmojiText,
            babelHelpers.extends({}, pe, { key: "status-text" }),
          ),
        );
      }
      var _e = r("WAWebL10N").embedDir(
        r("WAWebFormatMsgText")({
          msg: o("WAWebStateUtils").unproxy(N.unsafe()),
          associatedMessages: j,
          options: { unformat: !0, formatAsSearchResult: A === "Search" },
        }).toString() || "",
        R,
      );
      return d.jsx("span", {
        className: "x78zum5 x1cy8zhl",
        title: _e,
        "data-testid": void 0,
        children: K,
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
