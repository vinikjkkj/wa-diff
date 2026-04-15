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
    "WAWebPollsOptions",
    "WAWebPollsUseResults",
    "WAWebUISpacing",
    "WDSIconIcWarning.react",
    "react",
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(36),
        a,
        i;
      n[0] !== t
        ? ((a = t.msg),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = i,
        s = l.associatedMessages,
        u = l.optionsToResults,
        c;
      if (n[3] === Symbol.for("react.memo_cache_sentinel")) {
        var d;
        ((c = [
          (d = o("WAWebMsgGetters")).getPollInvalidated,
          d.getPollSelectableOptionsCount,
          d.getIsNewsletterMsg,
          d.getPollHideVoterNames,
        ]),
          (n[3] = c));
      } else c = n[3];
      var p = o("useWAWebMsgValues").useMsgValues(
          a.id,
          r("WAWebCastToPollCreationMsg"),
          c,
        ),
        _ = p[0],
        f = p[1],
        g = p[2],
        h = p[3],
        y = o("useWAWebPollEndTime").useWAWebPollEndTime(a),
        C = y.isPollEnded,
        v = y.pollEndTime,
        S = r("useWAWebUIM")(),
        R;
      n[4] !== u
        ? ((R = o("WAWebPollOptionsRenderUtils").getVotedForOptions(u)),
          (n[4] = u),
          (n[5] = R))
        : (R = n[5]);
      var L = R,
        E;
      n[6] !== g || n[7] !== a
        ? ((E =
            !g ||
            o(
              "WAWebNewsletterExtendedGatingUtils",
            ).isNewsletterPollsVotersEnabledForChat(
              o("WAWebFrontendMsgGetters").getChat(a.unsafe()),
            )),
          (n[6] = g),
          (n[7] = a),
          (n[8] = E))
        : (E = n[8]);
      var k = E,
        I,
        T,
        D;
      if (n[9] !== s || n[10] !== a || n[11] !== S || n[12] !== L) {
        I = function (t) {
          o("WAWebPollOptionsRenderUtils").toggleOption({
            optionLocalId: t,
            votedForOptions: L,
            selectableOptionsCount: D,
            msg: a,
          });
        };
        var x;
        (n[16] !== s || n[17] !== a || n[18] !== S
          ? ((x = function () {
              (o("WAWebDrawerManager").DrawerManager.closeDrawerRight(),
                self.setTimeout(function () {
                  o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                    m.jsx(
                      r("WAWebPollsDetailsFlow"),
                      { msg: a, associatedMessages: s },
                      a.id.toString(),
                    ),
                    {
                      transition: "slide-left",
                      uim: S,
                      focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                      noFocus: !0,
                    },
                  );
                }, 150));
            }),
            (n[16] = s),
            (n[17] = a),
            (n[18] = S),
            (n[19] = x))
          : (x = n[19]),
          (T = x),
          (D =
            a.pollSelectableOptionsCount === 0
              ? a.pollOptions.length
              : a.pollSelectableOptionsCount),
          (n[9] = s),
          (n[10] = a),
          (n[11] = S),
          (n[12] = L),
          (n[13] = I),
          (n[14] = T),
          (n[15] = D));
      } else ((I = n[13]), (T = n[14]), (D = n[15]));
      var $ = C ? r("WAWebNoop") : I,
        P = h === !0,
        N;
      n[20] !== a || n[21] !== f
        ? ((N =
            a.pollType !== o("WAWebPollCreationUtils").PollType.QUIZ ||
            !o("WAWebMsgGetters").getIsSentByMe(a)
              ? f
              : null),
          (n[20] = a),
          (n[21] = f),
          (n[22] = N))
        : (N = n[22]);
      var M;
      return (
        n[23] !== C ||
        n[24] !== a ||
        n[25] !== T ||
        n[26] !== v ||
        n[27] !== _ ||
        n[28] !== i ||
        n[29] !== D ||
        n[30] !== k ||
        n[31] !== $ ||
        n[32] !== P ||
        n[33] !== N ||
        n[34] !== L
          ? ((M = m.jsx(
              b,
              babelHelpers.extends({}, i, {
                msg: a,
                onOptionToggle: $,
                onViewVotesAction: T,
                isPollInvalid: _,
                isPollEnded: C,
                pollEndTime: v,
                pollHideVoterNames: P,
                pollSelectableOptionsCount: N,
                votedForOptions: L,
                showViewVotesButton: k,
                selectableOptionsCount: D,
                testid: void 0,
                readonly: C,
              }),
            )),
            (n[23] = C),
            (n[24] = a),
            (n[25] = T),
            (n[26] = v),
            (n[27] = _),
            (n[28] = i),
            (n[29] = D),
            (n[30] = k),
            (n[31] = $),
            (n[32] = P),
            (n[33] = N),
            (n[34] = L),
            (n[35] = M))
          : (M = n[35]),
        M
      );
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(7),
        n,
        a;
      t[0] !== e
        ? ((n = e.msg),
          (a = babelHelpers.objectWithoutPropertiesLoose(e, u)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = a))
        : ((n = t[1]), (a = t[2]));
      var i;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = new Set()), (t[3] = i))
        : (i = t[3]);
      var l;
      return (
        t[4] !== n || t[5] !== a
          ? ((l = m.jsx(
              b,
              babelHelpers.extends({}, a, {
                msg: n,
                onOptionToggle: r("WAWebNoop"),
                onViewVotesAction: r("WAWebNoop"),
                isPollInvalid: !1,
                isPollEnded: !1,
                pollEndTime: null,
                pollHideVoterNames: !1,
                pollSelectableOptionsCount: null,
                votedForOptions: i,
                showViewVotesButton: !1,
                selectableOptionsCount: n.pollVotesSnapshot.pollVotes.length,
                testid: void 0,
                readonly: !0,
              }),
            )),
            (t[4] = n),
            (t[5] = a),
            (t[6] = l))
          : (l = t[6]),
        l
      );
    }
    function b(e) {
      var t = o("react-compiler-runtime").c(92),
        n = e.associatedMessages,
        a = e.displayAuthor,
        i = e.displayType,
        l = e.isPollEnded,
        u = e.isPollInvalid,
        d = e.msg,
        p = e.onOptionToggle,
        _ = e.onViewVotesAction,
        f = e.optionsToResults,
        y = e.pollEndTime,
        C = e.pollHideVoterNames,
        b = e.pollSelectableOptionsCount,
        S = e.quotedMsg,
        R = e.readonly,
        L = e.selectableOptionsCount,
        E = e.showViewVotesButton,
        I = e.testid,
        T = e.trusted,
        D = e.votedForOptions,
        x;
      if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
        var $;
        ((x = [
          ($ = o("WAWebMsgGetters")).getPollName,
          $.getT,
          $.getIsSentByMe,
          $.getForwardedNewsletterMessageInfo,
          $.getPollCorrectOptionIndex,
          $.getPollType,
        ]),
          (t[0] = x));
      } else x = t[0];
      var P = o("useWAWebMsgValues").useMsgValues(d.id, x),
        N = P[0],
        M = P[1],
        w = P[2],
        A = P[3],
        F = P[4],
        O = P[5],
        B;
      t[1] !== d.pollType
        ? ((B =
            d.pollType === o("WAWebPollCreationUtils").PollType.QUIZ
              ? s._(/*BTDS*/ "View responses")
              : s._(/*BTDS*/ "View votes")),
          (t[1] = d.pollType),
          (t[2] = B))
        : (B = t[2]);
      var W = B,
        q;
      t[3] !== f
        ? ((q = f.values().every(v)), (t[3] = f), (t[4] = q))
        : (q = t[4]);
      var U = q,
        V;
      t[5] !== N ? ((V = N.slice(0, g)), (t[5] = N), (t[6] = V)) : (V = t[6]);
      var H = V,
        G;
      t[7] !== f
        ? ((G = o("WAWebPollsUseResults").getOptionWithCount(f)),
          (t[7] = f),
          (t[8] = G))
        : (G = t[8]);
      var z = G,
        j;
      t[9] !== n ||
      t[10] !== F ||
      t[11] !== l ||
      t[12] !== u ||
      t[13] !== _ ||
      t[14] !== R ||
      t[15] !== T
        ? ((j = {
            trusted: T,
            isPollEnded: l,
            isPollInvalid: u,
            onDetailImageClick: _,
            readonly: R,
            associatedMessages: n,
            correctOptionIndex: F,
          }),
          (t[9] = n),
          (t[10] = F),
          (t[11] = l),
          (t[12] = u),
          (t[13] = _),
          (t[14] = R),
          (t[15] = T),
          (t[16] = j))
        : (j = t[16]);
      var K = j,
        Q;
      t[17] !== w ||
      t[18] !== d ||
      t[19] !== H ||
      t[20] !== K ||
      t[21] !== y ||
      t[22] !== C ||
      t[23] !== L
        ? ((Q = function () {
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
                      isSentByMe: w,
                      selectableOptionsCount: L,
                      pollName: H,
                      pollEndTime: y,
                      pollHideVoterNames: C,
                    },
                    K,
                  ),
                ),
                { transition: "slide-left" },
              );
            }
          }),
          (t[17] = w),
          (t[18] = d),
          (t[19] = H),
          (t[20] = K),
          (t[21] = y),
          (t[22] = C),
          (t[23] = L),
          (t[24] = Q))
        : (Q = t[24]);
      var X = Q,
        Y;
      t[25] !== l ||
      t[26] !== w ||
      t[27] !== d ||
      t[28] !== H ||
      t[29] !== z ||
      t[30] !== y ||
      t[31] !== C ||
      t[32] !== M
        ? ((Y = k(H, M, d.displayName(), w, z, l, y, C)),
          (t[25] = l),
          (t[26] = w),
          (t[27] = d),
          (t[28] = H),
          (t[29] = z),
          (t[30] = y),
          (t[31] = C),
          (t[32] = M),
          (t[33] = Y))
        : (Y = t[33]);
      var J = d.isDynamicReplyButtonsMsg,
        Z = d.senderObj,
        ee;
      t[34] !== d
        ? ((ee = d.unsafe()), (t[34] = d), (t[35] = ee))
        : (ee = t[35]);
      var te;
      t[36] !== i || t[37] !== d
        ? ((te =
            !d.ctwaContext &&
            m.jsx(o("WAWebBizSuspiciousLabel.react").SuspiciousLabel, {
              msg: d.unsafe(),
              displayType: i,
            })),
          (t[36] = i),
          (t[37] = d),
          (t[38] = te))
        : (te = t[38]);
      var ne;
      t[39] !== l ||
      t[40] !== w ||
      t[41] !== d ||
      t[42] !== H ||
      t[43] !== y ||
      t[44] !== C ||
      t[45] !== b ||
      t[46] !== T
        ? ((ne = m.jsx(r("WAWebPollMessageHeader"), {
            isPollEnded: l,
            pollSelectableOptionsCount: b,
            pollEndTime: y,
            pollHideVoterNames: C,
            name: H,
            msg: d,
            isSentByMe: w,
            trusted: T,
          })),
          (t[39] = l),
          (t[40] = w),
          (t[41] = d),
          (t[42] = H),
          (t[43] = y),
          (t[44] = C),
          (t[45] = b),
          (t[46] = T),
          (t[47] = ne))
        : (ne = t[47]);
      var re;
      t[48] === Symbol.for("react.memo_cache_sentinel")
        ? ((re = (c || (c = r("stylex"))).props(
            o("WAWebUISpacing").uiPadding.all4,
          )),
          (t[48] = re))
        : (re = t[48]);
      var oe;
      t[49] !== X ||
      t[50] !== d ||
      t[51] !== p ||
      t[52] !== K ||
      t[53] !== f ||
      t[54] !== L ||
      t[55] !== D
        ? ((oe = m.jsx(
            r("WAWebPollsOptions"),
            babelHelpers.extends(
              {
                msg: d,
                options: f,
                checkedOptionLocalIds: D,
                onOptionToggle: p,
                selectableOptionsCount: L,
                onPhotoThumbClick: X,
                view: "message",
              },
              K,
            ),
          )),
          (t[49] = X),
          (t[50] = d),
          (t[51] = p),
          (t[52] = K),
          (t[53] = f),
          (t[54] = L),
          (t[55] = D),
          (t[56] = oe))
        : (oe = t[56]);
      var ae;
      t[57] !== u || t[58] !== w
        ? ((ae =
            u &&
            m.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: [
                h.invalidPollWarning,
                w
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
            })),
          (t[57] = u),
          (t[58] = w),
          (t[59] = ae))
        : (ae = t[59]);
      var ie;
      t[60] !== A || t[61] !== O
        ? ((ie =
            A != null &&
            m.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: [
                o("WAWebUISpacing").uiPadding.top8,
                o("WAWebUISpacing").uiPadding.bottom12,
              ],
              children: m.jsx("span", {
                className: "x1pg5gke x1d3mw78 xhslqc4",
                "data-testid": void 0,
                children:
                  O === o("WAWebPollCreationUtils").PollType.QUIZ
                    ? s._(/*BTDS*/ "View channel to answer.")
                    : s._(/*BTDS*/ "See the latest votes in the channel."),
              }),
            })),
          (t[60] = A),
          (t[61] = O),
          (t[62] = ie))
        : (ie = t[62]);
      var le;
      t[63] !== n || t[64] !== d
        ? ((le = m.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "end",
            children: m.jsx(o("WAWebMessageMeta.react").Meta, {
              msg: d,
              associatedMessages: n,
            }),
          })),
          (t[63] = n),
          (t[64] = d),
          (t[65] = le))
        : (le = t[65]);
      var se;
      t[66] !== oe || t[67] !== ae || t[68] !== ie || t[69] !== le
        ? ((se = m.jsxs(
            "div",
            babelHelpers.extends({}, re, { children: [oe, ae, ie, le] }),
          )),
          (t[66] = oe),
          (t[67] = ae),
          (t[68] = ie),
          (t[69] = le),
          (t[70] = se))
        : (se = t[70]);
      var ue;
      t[71] !== U || t[72] !== w || t[73] !== _ || t[74] !== E || t[75] !== W
        ? ((ue =
            E &&
            m.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
              theme: w
                ? o("WAWebMessageBubbleActions.react").BubbleActionsTheme
                    .POLL_SENDER
                : o("WAWebMessageBubbleActions.react").BubbleActionsTheme
                    .POLL_RECEIVER,
              items: [
                {
                  label: W,
                  title: W,
                  onClick: _,
                  disabled: U,
                  testid: "poll-view-votes",
                },
              ],
            })),
          (t[71] = U),
          (t[72] = w),
          (t[73] = _),
          (t[74] = E),
          (t[75] = W),
          (t[76] = ue))
        : (ue = t[76]);
      var ce;
      t[77] !== d.senderObj ||
      t[78] !== S ||
      t[79] !== ee ||
      t[80] !== te ||
      t[81] !== ne ||
      t[82] !== se ||
      t[83] !== ue
        ? ((ce = m.jsxs(r("WAWebMessageBubbleHiddenText.react"), {
            contact: Z,
            msg: ee,
            children: [te, S, ne, se, ue],
          })),
          (t[77] = d.senderObj),
          (t[78] = S),
          (t[79] = ee),
          (t[80] = te),
          (t[81] = ne),
          (t[82] = se),
          (t[83] = ue),
          (t[84] = ce))
        : (ce = t[84]);
      var de;
      return (
        t[85] !== a ||
        t[86] !== i ||
        t[87] !== d ||
        t[88] !== ce ||
        t[89] !== Y ||
        t[90] !== I
          ? ((de = m.jsx(r("WAWebMessageTextBubble.react"), {
              msg: d,
              displayType: i,
              displayAuthor: a,
              authorRole: "button",
              hideMeta: !0,
              ariaLabel: Y,
              useFixedWidth: J,
              testid: void 0,
              children: ce,
            })),
            (t[85] = a),
            (t[86] = i),
            (t[87] = d),
            (t[88] = ce),
            (t[89] = Y),
            (t[90] = I),
            (t[91] = de))
          : (de = t[91]),
        de
      );
    }
    function v(e) {
      return e.count === 0;
    }
    var S = 1e3,
      R = 3600,
      L = 24 * R;
    function E(e, t) {
      if (t == null) return "";
      if (e) return s._(/*BTDS*/ "Poll ended");
      var n = t - o("WAWebClock").Clock.getServerTimeMs(),
        r = Math.max(0, Math.ceil(n / S));
      if (r < R) return s._(/*BTDS*/ "Ends in less than 1h");
      if (r < L) {
        var a = Math.floor(r / R);
        return s._(/*BTDS*/ "Ends in {hours}h", [s._param("hours", a)]);
      }
      var i = Math.floor(r / L);
      return s._(
        /*BTDS*/ '_j{"*":"Ends in {days} days","_1":"Ends in {days} day"}',
        [s._plural(i), s._param("days", i)],
      );
    }
    function k(e, t, n, r, a, i, l, u) {
      var c = o("WAWebMiscGatingUtils").messageListA11yRedesignEnabled()
          ? ""
          : s._(
              /*BTDS*/ "Interaction with polls will be available in the next update.",
            ),
        d = u ? s._(/*BTDS*/ "Voter names hidden") : "",
        m = E(i, l);
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
    ((k.displayName = k.name + " [from " + i.id + "]"),
      (l.PollCreationMessageComponent = y),
      (l.PollSnapshotMessageComponent = C));
  },
  226,
);
