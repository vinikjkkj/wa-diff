__d(
  "WAWebPollsMessageComponentView",
  [
    "fbt",
    "WALogger",
    "WAWebBizSuspiciousLabel.react",
    "WAWebCastToPollCreationMsg",
    "WAWebClock",
    "WAWebDrawerManager",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebKeyboardTabUtils",
    "WAWebMessageBubbleActions.react",
    "WAWebMessageBubbleHiddenText.react",
    "WAWebMessageMeta.react",
    "WAWebMessageTextBubble.react",
    "WAWebMsgCasts",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgModelUtils",
    "WAWebMsgType",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNoop",
    "WAWebPollCreationUtils",
    "WAWebPollMessageHeader",
    "WAWebPollOptionsRenderUtils",
    "WAWebPollsDetailsFlow",
    "WAWebPollsExpandedPhotoDrawer",
    "WAWebPollsOptions",
    "WAWebPollsUseResults",
    "WDSIconIcWarning.react",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "react",
    "stylex",
    "useWAWebIsChatAcp2Restricted",
    "useWAWebMsgValues",
    "useWAWebPollEndTime",
    "useWAWebQuizOptionOrderExposure",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = ["msgKey"],
      c = ["msgKey"],
      d,
      m,
      p = m || (m = o("react")),
      _ = m,
      f = _.useCallback,
      g = _.useMemo,
      h = {
        paddingInlineStart14: { paddingInlineStart: "x1onr9mi", $$css: !0 },
      },
      y = 500,
      C = {
        invalidPollWarning: {
          alignItems: "x6s0dn4",
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          $$css: !0,
        },
        invalidPollWarningBorderReceiver: {
          borderTopColor: "xzd3fmn",
          borderInlineEndColor: "x47save",
          borderBottomColor: "x1ie97uy",
          borderInlineStartColor: "xhfwe17",
          $$css: !0,
        },
        invalidPollWarningBorderSender: {
          borderTopColor: "x89hfnh",
          borderInlineEndColor: "xfhc3ru",
          borderBottomColor: "x1vv3rcg",
          borderInlineStartColor: "x1yriv23",
          $$css: !0,
        },
        spanText: { fontSize: "x1pg5gke", lineHeight: "x1d3mw78", $$css: !0 },
        warningIcon: { color: "x1kt8ij1", $$css: !0 },
      };
    function b(e) {
      var t,
        n,
        a = e.msgKey,
        i = babelHelpers.objectWithoutPropertiesLoose(e, u),
        l = i.associatedMessages,
        s = i.optionsToResults,
        c = o("useWAWebMsgValues").useMsgValues(
          a,
          r("WAWebCastToPollCreationMsg"),
          [
            (n = o("WAWebMsgGetters")).getPollInvalidated,
            n.getPollSelectableOptionsCount,
            n.getIsNewsletterMsg,
            n.getPollHideVoterNames,
            n.getPollOptions,
            n.getPollType,
            n.getIsSentByMe,
          ],
        ),
        d = c[0],
        m = c[1],
        _ = c[2],
        f = c[3],
        h = c[4],
        y = c[5],
        C = c[6],
        b = o("useWAWebPollEndTime").useWAWebPollEndTime(a),
        v = b.isPollEnded,
        R = b.pollEndTime,
        L = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(a, _),
        E = r("useWAWebIsChatAcp2Restricted")(L == null ? void 0 : L.id),
        k = v || E,
        I = r("useWAWebUIM")(),
        D = r("useWAWebQuizOptionOrderExposure")(a),
        x = g(
          function () {
            return o("WAWebPollOptionsRenderUtils").getVotedForOptions(s);
          },
          [s],
        ),
        $ =
          !_ ||
          (L != null &&
            o(
              "WAWebNewsletterExtendedGatingUtils",
            ).isNewsletterPollsVotersEnabledForChat(L)),
        P = function (t) {
          o("WAWebPollOptionsRenderUtils").toggleOption({
            optionLocalId: t,
            votedForOptions: x,
            selectableOptionsCount: M,
            msgKey: a,
          });
        },
        N = function () {
          var e = T(a);
          e != null &&
            (o("WAWebDrawerManager").DrawerManager.closeDrawerRight(),
            self.setTimeout(function () {
              o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                p.jsx(
                  r("WAWebPollsDetailsFlow"),
                  { msg: e, associatedMessages: l },
                  a.toString(),
                ),
                {
                  transition: "slide-left",
                  uim: I,
                  focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                  noFocus: !0,
                },
              );
            }, 150));
        },
        M =
          m == null || m === 0
            ? (t = h == null ? void 0 : h.length) != null
              ? t
              : 0
            : m,
        w = p.jsx(
          S,
          babelHelpers.extends({}, i, {
            msgKey: a,
            onOptionToggle: k ? r("WAWebNoop") : P,
            onViewVotesAction: N,
            isPollInvalid: d,
            isPollEnded: v,
            pollEndTime: R,
            pollHideVoterNames: f === !0,
            pollSelectableOptionsCount:
              y !== o("WAWebPollCreationUtils").PollType.QUIZ || !C ? m : null,
            votedForOptions: x,
            showViewVotesButton: $,
            selectableOptionsCount: M,
            testid: "poll-bubble",
            readonly: k,
          }),
        );
      return D == null ? w : p.jsx("div", { ref: D, children: w });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t,
        n = e.msgKey,
        a = babelHelpers.objectWithoutPropertiesLoose(e, c),
        i = o("useWAWebMsgValues").useMsgValues(
          n,
          o("WAWebMsgCasts").castToPollResultSnapshotMsg,
          [o("WAWebMsgGetters").getPollVotesSnapshot],
        ),
        l = i[0];
      return p.jsx(
        S,
        babelHelpers.extends({}, a, {
          msgKey: n,
          onOptionToggle: r("WAWebNoop"),
          onViewVotesAction: r("WAWebNoop"),
          isPollInvalid: !1,
          isPollEnded: !1,
          pollEndTime: null,
          pollHideVoterNames: !1,
          pollSelectableOptionsCount: null,
          votedForOptions: new Set(),
          showViewVotesButton: !1,
          selectableOptionsCount:
            (t = l == null ? void 0 : l.pollVotes.length) != null ? t : 0,
          testid: "poll-snapshot-bubble",
          readonly: !0,
        }),
      );
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      var t,
        n = e.associatedMessages,
        a = e.displayAuthor,
        i = e.displayType,
        l = e.isPollEnded,
        u = e.isPollInvalid,
        c = e.msgKey,
        m = e.onOptionToggle,
        _ = e.onViewVotesAction,
        b = e.optionsToResults,
        v = e.pollEndTime,
        S = e.pollHideVoterNames,
        R = e.pollSelectableOptionsCount,
        L = e.quotedMsg,
        E = e.readonly,
        k = e.selectableOptionsCount,
        D = e.showViewVotesButton,
        x = e.testid,
        $ = e.trusted,
        P = e.votedForOptions,
        N = o("useWAWebMsgValues").useMsgValues(c, [
          (t = o("WAWebMsgGetters")).getPollName,
          t.getT,
          t.getIsSentByMe,
          t.getForwardedNewsletterMessageInfo,
          t.getPollCorrectOptionIndex,
          t.getPollType,
          t.getCtwaContext,
          t.getIsDynamicReplyButtonsMsg,
          o("WAWebFrontendMsgGetters").getSenderObj,
          t.getSender,
          t.getIsPSA,
          t.getNotifyName,
          t.getIsNewsletterMsg,
        ]),
        M = N[0],
        w = N[1],
        A = N[2],
        F = N[3],
        O = N[4],
        B = N[5],
        W = N[6],
        q = N[7],
        U = N[8],
        V = N[9],
        H = N[10],
        G = N[11],
        z = N[12],
        j =
          B === o("WAWebPollCreationUtils").PollType.QUIZ
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ ""),
        K = g(
          function () {
            return b.values().every(function (e) {
              return e.count === 0;
            });
          },
          [b],
        ),
        Q = M.slice(0, y),
        X = g(
          function () {
            return o("WAWebPollsUseResults").getOptionWithCount(b);
          },
          [b],
        ),
        Y = g(
          function () {
            return {
              trusted: $,
              isPollEnded: l,
              isPollInvalid: u,
              onDetailImageClick: _,
              readonly: E,
              associatedMessages: n,
              correctOptionIndex: O,
            };
          },
          [$, l, u, _, E, n, O],
        ),
        J = f(
          function () {
            var e,
              t,
              n = T(c);
            n != null &&
              o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                p.jsx(
                  r("WAWebPollsExpandedPhotoDrawer"),
                  babelHelpers.extends(
                    {
                      msgKey: c,
                      chatName:
                        (e =
                          (t = o("WAWebFrontendMsgGetters").getChat(
                            n.unsafe(),
                          )) == null
                            ? void 0
                            : t.name) != null
                          ? e
                          : "",
                      isSentByMe: A,
                      selectableOptionsCount: k,
                      pollName: Q,
                      pollEndTime: v,
                      pollHideVoterNames: S,
                    },
                    Y,
                  ),
                ),
                { transition: "slide-left" },
              );
          },
          [A, c, Q, Y, v, S, k],
        );
      return p.jsx(r("WAWebMessageTextBubble.react"), {
        msgKey: c,
        displayType: i,
        displayAuthor: a,
        authorRole: "button",
        hideMeta: !0,
        ariaLabel: I({
          authorDisplayName: o("WAWebMsgModelUtils").getMsgDisplayNameFor({
            chat: o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(c, z),
            isPSA: H,
            notifyName: G,
            sender: V,
            senderObj: U,
          }),
          commaSeparatedOptionsAndResults: X,
          isPollEnded: l,
          isSentByMe: A,
          pollEndTime: v,
          pollHideVoterNames: S,
          pollName: Q,
          t: w,
        }),
        useFixedWidth: q,
        testid: x,
        children: p.jsxs(r("WAWebMessageBubbleHiddenText.react"), {
          contact: U,
          msgKey: c,
          children: [
            !W &&
              p.jsx(o("WAWebBizSuspiciousLabel.react").SuspiciousLabel, {
                msgKey: c,
                displayType: i,
              }),
            L,
            p.jsx(r("WAWebPollMessageHeader"), {
              isPollEnded: l,
              pollSelectableOptionsCount: R,
              pollEndTime: v,
              pollHideVoterNames: S,
              name: Q,
              msgKey: c,
              isSentByMe: A,
              trusted: $,
            }),
            p.jsxs(
              "div",
              babelHelpers.extends(
                {},
                (d || (d = r("stylex"))).props(
                  o("WDSPaddings.stylex").wdsPaddings.padding4,
                ),
                {
                  children: [
                    p.jsx(
                      r("WAWebPollsOptions"),
                      babelHelpers.extends(
                        {
                          msgKey: c,
                          options: b,
                          checkedOptionLocalIds: P,
                          onOptionToggle: m,
                          selectableOptionsCount: k,
                          onPhotoThumbClick: J,
                          view: "message",
                        },
                        Y,
                      ),
                    ),
                    u &&
                      p.jsxs(o("WAWebFlex.react").FlexRow, {
                        xstyle: [
                          C.invalidPollWarning,
                          A
                            ? C.invalidPollWarningBorderSender
                            : C.invalidPollWarningBorderReceiver,
                          o("WDSMargins.stylex").wdsMargins.marginBottom4,
                          o("WDSPaddings.stylex").wdsPaddings.paddingVer8,
                          h.paddingInlineStart14,
                          o("WDSPaddings.stylex").wdsPaddings.paddingEnd12,
                        ],
                        children: [
                          p.jsx(r("WDSIconIcWarning.react"), {
                            iconXstyle: C.warningIcon,
                          }),
                          p.jsx(
                            "span",
                            babelHelpers.extends(
                              {},
                              (d || (d = r("stylex"))).props(
                                C.spanText,
                                o("WDSMargins.stylex").wdsMargins.marginStart8,
                              ),
                              {
                                "data-testid": "invalid-poll-bubble-warning",
                                children: s._(/*BTDS*/ ""),
                              },
                            ),
                          ),
                        ],
                      }),
                    F != null &&
                      p.jsx(o("WAWebFlex.react").FlexRow, {
                        xstyle: [
                          o("WDSPaddings.stylex").wdsPaddings.paddingTop8,
                          o("WDSPaddings.stylex").wdsPaddings.paddingBottom12,
                        ],
                        children: p.jsx("span", {
                          className: "x1pg5gke x1d3mw78 xhslqc4",
                          "data-testid": "see-votes-in-channel",
                          children:
                            B === o("WAWebPollCreationUtils").PollType.QUIZ
                              ? s._(/*BTDS*/ "")
                              : s._(/*BTDS*/ ""),
                        }),
                      }),
                    p.jsx(o("WAWebFlex.react").FlexRow, {
                      justify: "end",
                      children: p.jsx(o("WAWebMessageMeta.react").Meta, {
                        msgKey: c,
                        associatedMessages: n,
                      }),
                    }),
                  ],
                },
              ),
            ),
            D &&
              p.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
                theme: A
                  ? o("WAWebMessageBubbleActions.react").BubbleActionsTheme
                      .POLL_SENDER
                  : o("WAWebMessageBubbleActions.react").BubbleActionsTheme
                      .POLL_RECEIVER,
                items: [
                  {
                    label: j,
                    title: j,
                    onClick: _,
                    disabled: K,
                    testid: "poll-view-votes",
                  },
                ],
              }),
          ],
        }),
      });
    }
    S.displayName = S.name + " [from " + i.id + "]";
    var R = 1e3,
      L = 3600,
      E = 24 * L;
    function k(e, t) {
      if (t == null) return "";
      if (e) return s._(/*BTDS*/ "");
      var n = t - o("WAWebClock").Clock.getServerTimeMs(),
        r = Math.max(0, Math.ceil(n / R));
      if (r < L) return s._(/*BTDS*/ "");
      if (r < E) {
        var a = Math.floor(r / L);
        return s._(/*BTDS*/ "", [s._param("hours", a)]);
      }
      var i = Math.floor(r / E);
      return s._(/*BTDS*/ "", [s._plural(i), s._param("days", i)]);
    }
    function I(e) {
      var t = e.authorDisplayName,
        n = e.commaSeparatedOptionsAndResults,
        r = e.isPollEnded,
        a = e.isSentByMe,
        i = e.pollEndTime,
        l = e.pollHideVoterNames,
        u = e.pollName,
        c = e.t,
        d = l ? s._(/*BTDS*/ "") : "",
        m = k(r, i);
      return a
        ? s._(/*BTDS*/ "", [
            s._param("time", o("WAWebClock").Clock.timestampStr(c)),
            s._param("poll-name", u),
            s._param("hidden-voter-names", d),
            s._param("end-time", m),
            s._param("poll-results", n),
          ])
        : s._(/*BTDS*/ "", [
            s._param("poll-author-name-not-you", t),
            s._param("time", o("WAWebClock").Clock.timestampStr(c)),
            s._param("poll-name", u),
            s._param("hidden-voter-names", d),
            s._param("end-time", m),
            s._param("poll-results", n),
          ]);
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T(t) {
      var n,
        r =
          (n = o("WAWebMsgCollection").MsgCollection.get(t)) == null
            ? void 0
            : n.safe();
      return r == null
        ? (o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[polls] poll action skipped, message left the collection",
              ])),
          ),
          null)
        : r.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION
          ? r
          : null;
    }
    ((l.PollCreationMessageComponent = b),
      (l.PollSnapshotMessageComponent = v));
  },
  226,
);
