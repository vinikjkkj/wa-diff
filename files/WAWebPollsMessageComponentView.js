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
    "react-compiler-runtime",
    "stylex",
    "useWAWebMsgValues",
    "useWAWebPollEndTime",
    "useWAWebQuizOptionOrderExposure",
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
      g = {
        paddingInlineStart14: { paddingInlineStart: "x1onr9mi", $$css: !0 },
      },
      h = 500,
      y = {
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
    function C(t) {
      var n = o("react-compiler-runtime").c(39),
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
        b = y.pollEndTime,
        S = r("useWAWebUIM")(),
        R = r("useWAWebQuizOptionOrderExposure")(a),
        L;
      n[4] !== u
        ? ((L = o("WAWebPollOptionsRenderUtils").getVotedForOptions(u)),
          (n[4] = u),
          (n[5] = L))
        : (L = n[5]);
      var E = L,
        k;
      n[6] !== g || n[7] !== a
        ? ((k =
            !g ||
            o(
              "WAWebNewsletterExtendedGatingUtils",
            ).isNewsletterPollsVotersEnabledForChat(
              o("WAWebFrontendMsgGetters").getChat(a.unsafe()),
            )),
          (n[6] = g),
          (n[7] = a),
          (n[8] = k))
        : (k = n[8]);
      var I = k,
        T,
        D,
        x;
      if (n[9] !== s || n[10] !== a || n[11] !== S || n[12] !== E) {
        T = function (t) {
          o("WAWebPollOptionsRenderUtils").toggleOption({
            optionLocalId: t,
            votedForOptions: E,
            selectableOptionsCount: x,
            msg: a,
          });
        };
        var $;
        (n[16] !== s || n[17] !== a || n[18] !== S
          ? (($ = function () {
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
            (n[19] = $))
          : ($ = n[19]),
          (D = $),
          (x =
            a.pollSelectableOptionsCount === 0
              ? a.pollOptions.length
              : a.pollSelectableOptionsCount),
          (n[9] = s),
          (n[10] = a),
          (n[11] = S),
          (n[12] = E),
          (n[13] = T),
          (n[14] = D),
          (n[15] = x));
      } else ((T = n[13]), (D = n[14]), (x = n[15]));
      var P = C ? r("WAWebNoop") : T,
        N = h === !0,
        M;
      n[20] !== a || n[21] !== f
        ? ((M =
            a.pollType !== o("WAWebPollCreationUtils").PollType.QUIZ ||
            !o("WAWebMsgGetters").getIsSentByMe(a)
              ? f
              : null),
          (n[20] = a),
          (n[21] = f),
          (n[22] = M))
        : (M = n[22]);
      var w;
      n[23] !== C ||
      n[24] !== a ||
      n[25] !== D ||
      n[26] !== b ||
      n[27] !== _ ||
      n[28] !== i ||
      n[29] !== x ||
      n[30] !== I ||
      n[31] !== P ||
      n[32] !== N ||
      n[33] !== M ||
      n[34] !== E
        ? ((w = m.jsx(
            v,
            babelHelpers.extends({}, i, {
              msg: a,
              onOptionToggle: P,
              onViewVotesAction: D,
              isPollInvalid: _,
              isPollEnded: C,
              pollEndTime: b,
              pollHideVoterNames: N,
              pollSelectableOptionsCount: M,
              votedForOptions: E,
              showViewVotesButton: I,
              selectableOptionsCount: x,
              testid: "poll-bubble",
              readonly: C,
            }),
          )),
          (n[23] = C),
          (n[24] = a),
          (n[25] = D),
          (n[26] = b),
          (n[27] = _),
          (n[28] = i),
          (n[29] = x),
          (n[30] = I),
          (n[31] = P),
          (n[32] = N),
          (n[33] = M),
          (n[34] = E),
          (n[35] = w))
        : (w = n[35]);
      var A = w,
        F;
      return (
        n[36] !== A || n[37] !== R
          ? ((F = R == null ? A : m.jsx("div", { ref: R, children: A })),
            (n[36] = A),
            (n[37] = R),
            (n[38] = F))
          : (F = n[38]),
        F
      );
    }
    function b(e) {
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
              v,
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
                testid: "poll-snapshot-bubble",
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
    function v(e) {
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
        C = e.pollEndTime,
        b = e.pollHideVoterNames,
        v = e.pollSelectableOptionsCount,
        R = e.quotedMsg,
        L = e.readonly,
        E = e.selectableOptionsCount,
        k = e.showViewVotesButton,
        T = e.testid,
        D = e.trusted,
        x = e.votedForOptions,
        $;
      if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
        var P;
        (($ = [
          (P = o("WAWebMsgGetters")).getPollName,
          P.getT,
          P.getIsSentByMe,
          P.getForwardedNewsletterMessageInfo,
          P.getPollCorrectOptionIndex,
          P.getPollType,
        ]),
          (t[0] = $));
      } else $ = t[0];
      var N = o("useWAWebMsgValues").useMsgValues(d.id, $),
        M = N[0],
        w = N[1],
        A = N[2],
        F = N[3],
        O = N[4],
        B = N[5],
        W;
      t[1] !== d.pollType
        ? ((W =
            d.pollType === o("WAWebPollCreationUtils").PollType.QUIZ
              ? s._(/*BTDS*/ "View responses")
              : s._(/*BTDS*/ "View votes")),
          (t[1] = d.pollType),
          (t[2] = W))
        : (W = t[2]);
      var q = W,
        U;
      t[3] !== f
        ? ((U = f.values().every(S)), (t[3] = f), (t[4] = U))
        : (U = t[4]);
      var V = U,
        H;
      t[5] !== M ? ((H = M.slice(0, h)), (t[5] = M), (t[6] = H)) : (H = t[6]);
      var G = H,
        z;
      t[7] !== f
        ? ((z = o("WAWebPollsUseResults").getOptionWithCount(f)),
          (t[7] = f),
          (t[8] = z))
        : (z = t[8]);
      var j = z,
        K;
      t[9] !== n ||
      t[10] !== O ||
      t[11] !== l ||
      t[12] !== u ||
      t[13] !== _ ||
      t[14] !== L ||
      t[15] !== D
        ? ((K = {
            trusted: D,
            isPollEnded: l,
            isPollInvalid: u,
            onDetailImageClick: _,
            readonly: L,
            associatedMessages: n,
            correctOptionIndex: O,
          }),
          (t[9] = n),
          (t[10] = O),
          (t[11] = l),
          (t[12] = u),
          (t[13] = _),
          (t[14] = L),
          (t[15] = D),
          (t[16] = K))
        : (K = t[16]);
      var Q = K,
        X;
      t[17] !== A ||
      t[18] !== d ||
      t[19] !== G ||
      t[20] !== Q ||
      t[21] !== C ||
      t[22] !== b ||
      t[23] !== E
        ? ((X = function () {
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
                      isSentByMe: A,
                      selectableOptionsCount: E,
                      pollName: G,
                      pollEndTime: C,
                      pollHideVoterNames: b,
                    },
                    Q,
                  ),
                ),
                { transition: "slide-left" },
              );
            }
          }),
          (t[17] = A),
          (t[18] = d),
          (t[19] = G),
          (t[20] = Q),
          (t[21] = C),
          (t[22] = b),
          (t[23] = E),
          (t[24] = X))
        : (X = t[24]);
      var Y = X,
        J = d.id,
        Z;
      t[25] !== l ||
      t[26] !== A ||
      t[27] !== d ||
      t[28] !== G ||
      t[29] !== j ||
      t[30] !== C ||
      t[31] !== b ||
      t[32] !== w
        ? ((Z = I({
            authorDisplayName: o("WAWebMsgModelUtils").getMsgDisplayName(
              d.unsafe(),
            ),
            commaSeparatedOptionsAndResults: j,
            isPollEnded: l,
            isSentByMe: A,
            pollEndTime: C,
            pollHideVoterNames: b,
            pollName: G,
            t: w,
          })),
          (t[25] = l),
          (t[26] = A),
          (t[27] = d),
          (t[28] = G),
          (t[29] = j),
          (t[30] = C),
          (t[31] = b),
          (t[32] = w),
          (t[33] = Z))
        : (Z = t[33]);
      var ee = d.isDynamicReplyButtonsMsg,
        te = d.senderObj,
        ne = d.id,
        re;
      t[34] !== i || t[35] !== d.ctwaContext || t[36] !== d.id
        ? ((re =
            !d.ctwaContext &&
            m.jsx(o("WAWebBizSuspiciousLabel.react").SuspiciousLabel, {
              msgKey: d.id,
              displayType: i,
            })),
          (t[34] = i),
          (t[35] = d.ctwaContext),
          (t[36] = d.id),
          (t[37] = re))
        : (re = t[37]);
      var oe;
      t[38] !== l ||
      t[39] !== A ||
      t[40] !== d ||
      t[41] !== G ||
      t[42] !== C ||
      t[43] !== b ||
      t[44] !== v ||
      t[45] !== D
        ? ((oe = m.jsx(r("WAWebPollMessageHeader"), {
            isPollEnded: l,
            pollSelectableOptionsCount: v,
            pollEndTime: C,
            pollHideVoterNames: b,
            name: G,
            msg: d,
            isSentByMe: A,
            trusted: D,
          })),
          (t[38] = l),
          (t[39] = A),
          (t[40] = d),
          (t[41] = G),
          (t[42] = C),
          (t[43] = b),
          (t[44] = v),
          (t[45] = D),
          (t[46] = oe))
        : (oe = t[46]);
      var ae;
      t[47] === Symbol.for("react.memo_cache_sentinel")
        ? ((ae = (c || (c = r("stylex"))).props(
            o("WDSPaddings.stylex").wdsPaddings.padding4,
          )),
          (t[47] = ae))
        : (ae = t[47]);
      var ie;
      t[48] !== Y ||
      t[49] !== d ||
      t[50] !== p ||
      t[51] !== Q ||
      t[52] !== f ||
      t[53] !== E ||
      t[54] !== x
        ? ((ie = m.jsx(
            r("WAWebPollsOptions"),
            babelHelpers.extends(
              {
                msg: d,
                options: f,
                checkedOptionLocalIds: x,
                onOptionToggle: p,
                selectableOptionsCount: E,
                onPhotoThumbClick: Y,
                view: "message",
              },
              Q,
            ),
          )),
          (t[48] = Y),
          (t[49] = d),
          (t[50] = p),
          (t[51] = Q),
          (t[52] = f),
          (t[53] = E),
          (t[54] = x),
          (t[55] = ie))
        : (ie = t[55]);
      var le;
      t[56] !== u || t[57] !== A
        ? ((le =
            u &&
            m.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: [
                y.invalidPollWarning,
                A
                  ? y.invalidPollWarningBorderSender
                  : y.invalidPollWarningBorderReceiver,
                o("WDSMargins.stylex").wdsMargins.marginBottom4,
                o("WDSPaddings.stylex").wdsPaddings.paddingVer8,
                g.paddingInlineStart14,
                o("WDSPaddings.stylex").wdsPaddings.paddingEnd12,
              ],
              children: [
                m.jsx(r("WDSIconIcWarning.react"), {
                  iconXstyle: y.warningIcon,
                }),
                m.jsx(
                  "span",
                  babelHelpers.extends(
                    {},
                    (c || (c = r("stylex"))).props(
                      y.spanText,
                      o("WDSMargins.stylex").wdsMargins.marginStart8,
                    ),
                    {
                      "data-testid": "invalid-poll-bubble-warning",
                      children: s._(
                        /*BTDS*/ "You can only see votes made before you left.",
                      ),
                    },
                  ),
                ),
              ],
            })),
          (t[56] = u),
          (t[57] = A),
          (t[58] = le))
        : (le = t[58]);
      var se;
      t[59] !== F || t[60] !== B
        ? ((se =
            F != null &&
            m.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: [
                o("WDSPaddings.stylex").wdsPaddings.paddingTop8,
                o("WDSPaddings.stylex").wdsPaddings.paddingBottom12,
              ],
              children: m.jsx("span", {
                className: "x1pg5gke x1d3mw78 xhslqc4",
                "data-testid": "see-votes-in-channel",
                children:
                  B === o("WAWebPollCreationUtils").PollType.QUIZ
                    ? s._(/*BTDS*/ "View channel to answer.")
                    : s._(/*BTDS*/ "See the latest votes in the channel."),
              }),
            })),
          (t[59] = F),
          (t[60] = B),
          (t[61] = se))
        : (se = t[61]);
      var ue;
      t[62] !== n || t[63] !== d.id
        ? ((ue = m.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "end",
            children: m.jsx(o("WAWebMessageMeta.react").Meta, {
              msgKey: d.id,
              associatedMessages: n,
            }),
          })),
          (t[62] = n),
          (t[63] = d.id),
          (t[64] = ue))
        : (ue = t[64]);
      var ce;
      t[65] !== ie || t[66] !== le || t[67] !== se || t[68] !== ue
        ? ((ce = m.jsxs(
            "div",
            babelHelpers.extends({}, ae, { children: [ie, le, se, ue] }),
          )),
          (t[65] = ie),
          (t[66] = le),
          (t[67] = se),
          (t[68] = ue),
          (t[69] = ce))
        : (ce = t[69]);
      var de;
      t[70] !== V || t[71] !== A || t[72] !== _ || t[73] !== k || t[74] !== q
        ? ((de =
            k &&
            m.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
              theme: A
                ? o("WAWebMessageBubbleActions.react").BubbleActionsTheme
                    .POLL_SENDER
                : o("WAWebMessageBubbleActions.react").BubbleActionsTheme
                    .POLL_RECEIVER,
              items: [
                {
                  label: q,
                  title: q,
                  onClick: _,
                  disabled: V,
                  testid: "poll-view-votes",
                },
              ],
            })),
          (t[70] = V),
          (t[71] = A),
          (t[72] = _),
          (t[73] = k),
          (t[74] = q),
          (t[75] = de))
        : (de = t[75]);
      var me;
      t[76] !== d.id ||
      t[77] !== d.senderObj ||
      t[78] !== R ||
      t[79] !== re ||
      t[80] !== oe ||
      t[81] !== ce ||
      t[82] !== de
        ? ((me = m.jsxs(r("WAWebMessageBubbleHiddenText.react"), {
            contact: te,
            msgKey: ne,
            children: [re, R, oe, ce, de],
          })),
          (t[76] = d.id),
          (t[77] = d.senderObj),
          (t[78] = R),
          (t[79] = re),
          (t[80] = oe),
          (t[81] = ce),
          (t[82] = de),
          (t[83] = me))
        : (me = t[83]);
      var pe;
      return (
        t[84] !== a ||
        t[85] !== i ||
        t[86] !== d.id ||
        t[87] !== d.isDynamicReplyButtonsMsg ||
        t[88] !== me ||
        t[89] !== Z ||
        t[90] !== T
          ? ((pe = m.jsx(r("WAWebMessageTextBubble.react"), {
              msgKey: J,
              displayType: i,
              displayAuthor: a,
              authorRole: "button",
              hideMeta: !0,
              ariaLabel: Z,
              useFixedWidth: ee,
              testid: T,
              children: me,
            })),
            (t[84] = a),
            (t[85] = i),
            (t[86] = d.id),
            (t[87] = d.isDynamicReplyButtonsMsg),
            (t[88] = me),
            (t[89] = Z),
            (t[90] = T),
            (t[91] = pe))
          : (pe = t[91]),
        pe
      );
    }
    function S(e) {
      return e.count === 0;
    }
    var R = 1e3,
      L = 3600,
      E = 24 * L;
    function k(e, t) {
      if (t == null) return "";
      if (e) return s._(/*BTDS*/ "Poll ended");
      var n = t - o("WAWebClock").Clock.getServerTimeMs(),
        r = Math.max(0, Math.ceil(n / R));
      if (r < L) return s._(/*BTDS*/ "Ends in less than 1h");
      if (r < E) {
        var a = Math.floor(r / L);
        return s._(/*BTDS*/ "Ends in {hours}h", [s._param("hours", a)]);
      }
      var i = Math.floor(r / E);
      return s._(
        /*BTDS*/ '_j{"*":"Ends in {days} days","_1":"Ends in {days} day"}',
        [s._plural(i), s._param("days", i)],
      );
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
        d = l ? s._(/*BTDS*/ "Voter names hidden") : "",
        m = k(r, i);
      return a
        ? s._(
            /*BTDS*/ "Poll from you {time} {poll-name} {hidden-voter-names} {end-time} Top vote counts: {poll-results}.",
            [
              s._param("time", o("WAWebClock").Clock.timestampStr(c)),
              s._param("poll-name", u),
              s._param("hidden-voter-names", d),
              s._param("end-time", m),
              s._param("poll-results", n),
            ],
          )
        : s._(
            /*BTDS*/ "Poll from {poll-author-name-not-you} {time} {poll-name} {hidden-voter-names} {end-time} Top vote counts: {poll-results}.",
            [
              s._param("poll-author-name-not-you", t),
              s._param("time", o("WAWebClock").Clock.timestampStr(c)),
              s._param("poll-name", u),
              s._param("hidden-voter-names", d),
              s._param("end-time", m),
              s._param("poll-results", n),
            ],
          );
    }
    ((I.displayName = I.name + " [from " + i.id + "]"),
      (l.PollCreationMessageComponent = C),
      (l.PollSnapshotMessageComponent = b));
  },
  226,
);
