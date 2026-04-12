__d(
  "WAWebPollsMessageComponentView",
  [
    "fbt",
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
    "WAWebMiscGatingUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNoop",
    "WAWebPollCreationUtils",
    "WAWebPollMessageHeader",
    "WAWebPollOptionsRenderUtils",
    "WAWebPollsDetailsFlow",
    "WAWebPollsExpandedPhotoDrawer",
    "WAWebPollsGatingUtils",
    "WAWebPollsOptions",
    "WAWebPollsUseResults",
    "WAWebUISpacing",
    "WDSIconIcWarning.react",
    "react",
    "stylex",
    "useWAWebMsgValues",
    "useWAWebPollEndTime",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["msg"],
      u = ["msg"],
      c,
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useCallback,
      f = p.useMemo,
      g = 500,
      h = {
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
    function y(t) {
      var n,
        a = t.msg,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.associatedMessages,
        s = i.optionsToResults,
        u = o("useWAWebMsgValues").useMsgValues(
          a.id,
          r("WAWebCastToPollCreationMsg"),
          [
            (n = o("WAWebMsgGetters")).getPollInvalidated,
            n.getPollSelectableOptionsCount,
            n.getIsNewsletterMsg,
            n.getPollHideVoterNames,
          ],
        ),
        c = u[0],
        d = u[1],
        p = u[2],
        _ = u[3],
        g = o("useWAWebPollEndTime").useWAWebPollEndTime(a),
        h = g.isPollEnded,
        y = g.pollEndTime,
        C = r("useWAWebUIM")(),
        v = f(
          function () {
            return o("WAWebPollOptionsRenderUtils").getVotedForOptions(s);
          },
          [s],
        ),
        S =
          (!p ||
            o(
              "WAWebNewsletterExtendedGatingUtils",
            ).isNewsletterPollsVotersEnabledForChat(
              o("WAWebFrontendMsgGetters").getChat(a.unsafe()),
            )) &&
          o("WAWebPollsGatingUtils").isPollResultDetailsViewEnabled(),
        R = function (t) {
          o("WAWebPollOptionsRenderUtils").toggleOption({
            optionLocalId: t,
            votedForOptions: v,
            selectableOptionsCount: E,
            msg: a,
          });
        },
        L = function () {
          (o("WAWebDrawerManager").DrawerManager.closeDrawerRight(),
            self.setTimeout(function () {
              o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                m.jsx(
                  r("WAWebPollsDetailsFlow"),
                  { msg: a, associatedMessages: l },
                  a.id.toString(),
                ),
                {
                  transition: "slide-left",
                  uim: C,
                  focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                  noFocus: !0,
                },
              );
            }, 150));
        },
        E =
          a.pollSelectableOptionsCount === 0
            ? a.pollOptions.length
            : a.pollSelectableOptionsCount;
      return m.jsx(
        b,
        babelHelpers.extends({}, i, {
          msg: a,
          onOptionToggle: h ? r("WAWebNoop") : R,
          onViewVotesAction: L,
          isPollInvalid: c,
          isPollEnded: h,
          pollEndTime: y,
          pollHideVoterNames: _ === !0,
          pollSelectableOptionsCount:
            a.pollType !== o("WAWebPollCreationUtils").PollType.QUIZ ||
            !o("WAWebMsgGetters").getIsSentByMe(a)
              ? d
              : null,
          votedForOptions: v,
          showViewVotesButton: S,
          selectableOptionsCount: E,
          testid: void 0,
          readonly: h,
        }),
      );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = e.msg,
        n = babelHelpers.objectWithoutPropertiesLoose(e, u);
      return m.jsx(
        b,
        babelHelpers.extends({}, n, {
          msg: t,
          onOptionToggle: r("WAWebNoop"),
          onViewVotesAction: r("WAWebNoop"),
          isPollInvalid: !1,
          isPollEnded: !1,
          pollEndTime: null,
          pollHideVoterNames: !1,
          pollSelectableOptionsCount: null,
          votedForOptions: new Set(),
          showViewVotesButton: !1,
          selectableOptionsCount: t.pollVotesSnapshot.pollVotes.length,
          testid: void 0,
          readonly: !0,
        }),
      );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t,
        n = e.associatedMessages,
        a = e.displayAuthor,
        i = e.displayType,
        l = e.isPollEnded,
        u = e.isPollInvalid,
        d = e.msg,
        p = e.onOptionToggle,
        y = e.onViewVotesAction,
        C = e.optionsToResults,
        b = e.pollEndTime,
        v = e.pollHideVoterNames,
        S = e.pollSelectableOptionsCount,
        R = e.quotedMsg,
        L = e.readonly,
        k = e.selectableOptionsCount,
        I = e.showViewVotesButton,
        T = e.testid,
        D = e.trusted,
        x = e.votedForOptions,
        $ = o("useWAWebMsgValues").useMsgValues(d.id, [
          (t = o("WAWebMsgGetters")).getPollName,
          t.getT,
          t.getIsSentByMe,
          t.getForwardedNewsletterMessageInfo,
          t.getPollCorrectOptionIndex,
          t.getPollType,
        ]),
        P = $[0],
        N = $[1],
        M = $[2],
        w = $[3],
        A = $[4],
        F = $[5],
        O =
          d.pollType === o("WAWebPollCreationUtils").PollType.QUIZ
            ? s._(/*BTDS*/ "View responses")
            : s._(/*BTDS*/ "View votes"),
        B = f(
          function () {
            return C.values().every(function (e) {
              return e.count === 0;
            });
          },
          [C],
        ),
        W = P.slice(0, g),
        q = f(
          function () {
            return o("WAWebPollsUseResults").getOptionWithCount(C);
          },
          [C],
        ),
        U = f(
          function () {
            return {
              trusted: D,
              isPollEnded: l,
              isPollInvalid: u,
              onDetailImageClick: y,
              readonly: L,
              associatedMessages: n,
              correctOptionIndex: A,
            };
          },
          [D, l, u, y, L, n, A],
        ),
        V = _(
          function () {
            if (d.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION) {
              var e, t;
              o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                m.jsx(
                  r("WAWebPollsExpandedPhotoDrawer"),
                  babelHelpers.extends(
                    {
                      msg: d,
                      chatName:
                        (e =
                          (t = o("WAWebFrontendMsgGetters").getChat(
                            d.unsafe(),
                          )) == null
                            ? void 0
                            : t.name) != null
                          ? e
                          : "",
                      isSentByMe: M,
                      selectableOptionsCount: k,
                      pollName: W,
                      pollEndTime: b,
                      pollHideVoterNames: v,
                    },
                    U,
                  ),
                ),
                { transition: "slide-left" },
              );
            }
          },
          [M, d, W, U, b, v, k],
        );
      return m.jsx(r("WAWebMessageTextBubble.react"), {
        msg: d,
        displayType: i,
        displayAuthor: a,
        authorRole: "button",
        hideMeta: !0,
        ariaLabel: E(W, N, d.displayName(), M, q, l, b, v),
        useFixedWidth: d.isDynamicReplyButtonsMsg,
        testid: void 0,
        children: m.jsxs(r("WAWebMessageBubbleHiddenText.react"), {
          contact: d.senderObj,
          msg: d.unsafe(),
          children: [
            !d.ctwaContext &&
              m.jsx(o("WAWebBizSuspiciousLabel.react").SuspiciousLabel, {
                msg: d.unsafe(),
                displayType: i,
              }),
            R,
            m.jsx(r("WAWebPollMessageHeader"), {
              isPollEnded: l,
              pollSelectableOptionsCount: S,
              pollEndTime: b,
              pollHideVoterNames: v,
              name: W,
              msg: d,
              isSentByMe: M,
              trusted: D,
            }),
            m.jsxs(
              "div",
              babelHelpers.extends(
                {},
                (c || (c = r("stylex"))).props(
                  o("WAWebUISpacing").uiPadding.all4,
                ),
                {
                  children: [
                    m.jsx(
                      r("WAWebPollsOptions"),
                      babelHelpers.extends(
                        {
                          msg: d,
                          options: C,
                          checkedOptionLocalIds: x,
                          onOptionToggle: p,
                          selectableOptionsCount: k,
                          onPhotoThumbClick: V,
                          view: "message",
                        },
                        U,
                      ),
                    ),
                    u &&
                      m.jsxs(o("WAWebFlex.react").FlexRow, {
                        xstyle: [
                          h.invalidPollWarning,
                          M
                            ? h.invalidPollWarningBorderSender
                            : h.invalidPollWarningBorderReceiver,
                          o("WAWebUISpacing").uiMargin.bottom4,
                          o("WAWebUISpacing").uiPadding.vert8,
                          o("WAWebUISpacing").uiPadding.start14,
                          o("WAWebUISpacing").uiPadding.end12,
                        ],
                        children: [
                          m.jsx(r("WDSIconIcWarning.react"), {
                            iconXstyle: h.warningIcon,
                          }),
                          m.jsx(
                            "span",
                            babelHelpers.extends(
                              {},
                              (c || (c = r("stylex"))).props(
                                h.spanText,
                                o("WAWebUISpacing").uiMargin.start8,
                              ),
                              {
                                "data-testid": void 0,
                                children: s._(
                                  /*BTDS*/ "You can only see votes made before you left.",
                                ),
                              },
                            ),
                          ),
                        ],
                      }),
                    w != null &&
                      m.jsx(o("WAWebFlex.react").FlexRow, {
                        xstyle: [
                          o("WAWebUISpacing").uiPadding.top8,
                          o("WAWebUISpacing").uiPadding.bottom12,
                        ],
                        children: m.jsx("span", {
                          className: "x1pg5gke x1d3mw78 xhslqc4",
                          "data-testid": void 0,
                          children:
                            F === o("WAWebPollCreationUtils").PollType.QUIZ
                              ? s._(/*BTDS*/ "View channel to answer.")
                              : s._(
                                  /*BTDS*/ "See the latest votes in the channel.",
                                ),
                        }),
                      }),
                    m.jsx(o("WAWebFlex.react").FlexRow, {
                      justify: "end",
                      children: m.jsx(o("WAWebMessageMeta.react").Meta, {
                        msg: d,
                        associatedMessages: n,
                      }),
                    }),
                  ],
                },
              ),
            ),
            I &&
              m.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
                theme: M
                  ? o("WAWebMessageBubbleActions.react").BubbleActionsTheme
                      .POLL_SENDER
                  : o("WAWebMessageBubbleActions.react").BubbleActionsTheme
                      .POLL_RECEIVER,
                items: [
                  {
                    label: O,
                    title: O,
                    onClick: y,
                    disabled: B,
                    testid: "poll-view-votes",
                  },
                ],
              }),
          ],
        }),
      });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    var v = 1e3,
      S = 3600,
      R = 24 * S;
    function L(e, t) {
      if (t == null) return "";
      if (e) return s._(/*BTDS*/ "Poll ended");
      var n = t - o("WAWebClock").Clock.getServerTimeMs(),
        r = Math.max(0, Math.ceil(n / v));
      if (r < S) return s._(/*BTDS*/ "Ends in less than 1h");
      if (r < R) {
        var a = Math.floor(r / S);
        return s._(/*BTDS*/ "Ends in {hours}h", [s._param("hours", a)]);
      }
      var i = Math.floor(r / R);
      return s._(
        /*BTDS*/ '_j{"*":"Ends in {days} days","_1":"Ends in {days} day"}',
        [s._plural(i), s._param("days", i)],
      );
    }
    function E(e, t, n, r, a, i, l, u) {
      var c = o("WAWebMiscGatingUtils").messageListA11yRedesignEnabled()
          ? ""
          : s._(
              /*BTDS*/ "Interaction with polls will be available in the next update.",
            ),
        d = u ? s._(/*BTDS*/ "Voter names hidden") : "",
        m = L(i, l);
      return r
        ? s._(
            /*BTDS*/ "Poll from you {time} {poll-name} {hidden-voter-names} {end-time} Top vote counts: {poll-results}. {no-kb-navigation}",
            [
              s._param("time", o("WAWebClock").Clock.timestampStr(t)),
              s._param("poll-name", e),
              s._param("hidden-voter-names", d),
              s._param("end-time", m),
              s._param("poll-results", a),
              s._param("no-kb-navigation", c),
            ],
          )
        : s._(
            /*BTDS*/ "Poll from {poll-author-name-not-you} {time} {poll-name} {hidden-voter-names} {end-time} Top vote counts: {poll-results}. {no-kb-navigation}",
            [
              s._param("poll-author-name-not-you", n),
              s._param("time", o("WAWebClock").Clock.timestampStr(t)),
              s._param("poll-name", e),
              s._param("hidden-voter-names", d),
              s._param("end-time", m),
              s._param("poll-results", a),
              s._param("no-kb-navigation", c),
            ],
          );
    }
    ((E.displayName = E.name + " [from " + i.id + "]"),
      (l.PollCreationMessageComponent = y),
      (l.PollSnapshotMessageComponent = C));
  },
  226,
);
