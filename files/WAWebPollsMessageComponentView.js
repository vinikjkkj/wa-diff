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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(42),
        n,
        a;
      t[0] !== e
        ? ((n = e.msgKey),
          (a = babelHelpers.objectWithoutPropertiesLoose(e, u)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = a))
        : ((n = t[1]), (a = t[2]));
      var i = a,
        l = i.associatedMessages,
        s = i.optionsToResults,
        c;
      if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
        var d;
        ((c = [
          (d = o("WAWebMsgGetters")).getPollInvalidated,
          d.getPollSelectableOptionsCount,
          d.getIsNewsletterMsg,
          d.getPollHideVoterNames,
          d.getPollOptions,
          d.getPollType,
          d.getIsSentByMe,
        ]),
          (t[3] = c));
      } else c = t[3];
      var m = o("useWAWebMsgValues").useMsgValues(
          n,
          r("WAWebCastToPollCreationMsg"),
          c,
        ),
        _ = m[0],
        f = m[1],
        g = m[2],
        h = m[3],
        y = m[4],
        C = m[5],
        b = m[6],
        v = o("useWAWebPollEndTime").useWAWebPollEndTime(n),
        R = v.isPollEnded,
        L = v.pollEndTime,
        E;
      t[4] !== g || t[5] !== n
        ? ((E = o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(n, g)),
          (t[4] = g),
          (t[5] = n),
          (t[6] = E))
        : (E = t[6]);
      var k = E,
        I = r("useWAWebIsChatAcp2Restricted")(k),
        T = R || I,
        x = r("useWAWebUIM")(),
        $ = r("useWAWebQuizOptionOrderExposure")(n),
        P;
      t[7] !== s
        ? ((P = o("WAWebPollOptionsRenderUtils").getVotedForOptions(s)),
          (t[7] = s),
          (t[8] = P))
        : (P = t[8]);
      var N = P,
        M;
      t[9] !== k || t[10] !== g
        ? ((M =
            !g ||
            (k != null &&
              o(
                "WAWebNewsletterExtendedGatingUtils",
              ).isNewsletterPollsVotersEnabledForChat(k))),
          (t[9] = k),
          (t[10] = g),
          (t[11] = M))
        : (M = t[11]);
      var w = M,
        A,
        F,
        O;
      if (
        t[12] !== l ||
        t[13] !== n ||
        t[14] !== (y == null ? void 0 : y.length) ||
        t[15] !== f ||
        t[16] !== x ||
        t[17] !== N
      ) {
        var B;
        A = function (t) {
          o("WAWebPollOptionsRenderUtils").toggleOption({
            optionLocalId: t,
            votedForOptions: N,
            selectableOptionsCount: O,
            msgKey: n,
          });
        };
        var W;
        (t[21] !== l || t[22] !== n || t[23] !== x
          ? ((W = function () {
              var e = D(n);
              e != null &&
                (o("WAWebDrawerManager").DrawerManager.closeDrawerRight(),
                self.setTimeout(function () {
                  o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                    p.jsx(
                      r("WAWebPollsDetailsFlow"),
                      { msg: e, associatedMessages: l },
                      n.toString(),
                    ),
                    {
                      transition: "slide-left",
                      uim: x,
                      focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                      noFocus: !0,
                    },
                  );
                }, 150));
            }),
            (t[21] = l),
            (t[22] = n),
            (t[23] = x),
            (t[24] = W))
          : (W = t[24]),
          (F = W),
          (O =
            f == null || f === 0
              ? (B = y == null ? void 0 : y.length) != null
                ? B
                : 0
              : f),
          (t[12] = l),
          (t[13] = n),
          (t[14] = y == null ? void 0 : y.length),
          (t[15] = f),
          (t[16] = x),
          (t[17] = N),
          (t[18] = A),
          (t[19] = F),
          (t[20] = O));
      } else ((A = t[18]), (F = t[19]), (O = t[20]));
      var q = T ? r("WAWebNoop") : A,
        U = h === !0,
        V = C !== o("WAWebPollCreationUtils").PollType.QUIZ || !b ? f : null,
        H;
      t[25] !== T ||
      t[26] !== R ||
      t[27] !== n ||
      t[28] !== F ||
      t[29] !== L ||
      t[30] !== _ ||
      t[31] !== a ||
      t[32] !== O ||
      t[33] !== w ||
      t[34] !== q ||
      t[35] !== U ||
      t[36] !== V ||
      t[37] !== N
        ? ((H = p.jsx(
            S,
            babelHelpers.extends({}, a, {
              msgKey: n,
              onOptionToggle: q,
              onViewVotesAction: F,
              isPollInvalid: _,
              isPollEnded: R,
              pollEndTime: L,
              pollHideVoterNames: U,
              pollSelectableOptionsCount: V,
              votedForOptions: N,
              showViewVotesButton: w,
              selectableOptionsCount: O,
              testid: "poll-bubble",
              readonly: T,
            }),
          )),
          (t[25] = T),
          (t[26] = R),
          (t[27] = n),
          (t[28] = F),
          (t[29] = L),
          (t[30] = _),
          (t[31] = a),
          (t[32] = O),
          (t[33] = w),
          (t[34] = q),
          (t[35] = U),
          (t[36] = V),
          (t[37] = N),
          (t[38] = H))
        : (H = t[38]);
      var G = H,
        z;
      return (
        t[39] !== G || t[40] !== $
          ? ((z = $ == null ? G : p.jsx("div", { ref: $, children: G })),
            (t[39] = G),
            (t[40] = $),
            (t[41] = z))
          : (z = t[41]),
        z
      );
    }
    function v(e) {
      var t,
        n = o("react-compiler-runtime").c(9),
        a,
        i;
      n[0] !== e
        ? ((a = e.msgKey),
          (i = babelHelpers.objectWithoutPropertiesLoose(e, c)),
          (n[0] = e),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [o("WAWebMsgGetters").getPollVotesSnapshot]), (n[3] = l))
        : (l = n[3]);
      var s = o("useWAWebMsgValues").useMsgValues(a, l),
        u = s[0],
        d;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = new Set()), (n[4] = d))
        : (d = n[4]);
      var m = (t = u == null ? void 0 : u.pollVotes.length) != null ? t : 0,
        _;
      return (
        n[5] !== a || n[6] !== i || n[7] !== m
          ? ((_ = p.jsx(
              S,
              babelHelpers.extends({}, i, {
                msgKey: a,
                onOptionToggle: r("WAWebNoop"),
                onViewVotesAction: r("WAWebNoop"),
                isPollInvalid: !1,
                isPollEnded: !1,
                pollEndTime: null,
                pollHideVoterNames: !1,
                pollSelectableOptionsCount: null,
                votedForOptions: d,
                showViewVotesButton: !1,
                selectableOptionsCount: m,
                testid: "poll-snapshot-bubble",
                readonly: !0,
              }),
            )),
            (n[5] = a),
            (n[6] = i),
            (n[7] = m),
            (n[8] = _))
          : (_ = n[8]),
        _
      );
    }
    function S(e) {
      var t = o("react-compiler-runtime").c(97),
        n = e.associatedMessages,
        a = e.displayAuthor,
        i = e.displayType,
        l = e.isPollEnded,
        u = e.isPollInvalid,
        c = e.msgKey,
        m = e.onOptionToggle,
        _ = e.onViewVotesAction,
        f = e.optionsToResults,
        g = e.pollEndTime,
        b = e.pollHideVoterNames,
        v = e.pollSelectableOptionsCount,
        S = e.quotedMsg,
        L = e.readonly,
        E = e.selectableOptionsCount,
        k = e.showViewVotesButton,
        I = e.testid,
        x = e.trusted,
        $ = e.votedForOptions,
        P;
      if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
        var N;
        ((P = [
          (N = o("WAWebMsgGetters")).getPollName,
          N.getT,
          N.getIsSentByMe,
          N.getForwardedNewsletterMessageInfo,
          N.getPollCorrectOptionIndex,
          N.getPollType,
          N.getCtwaContext,
          N.getIsDynamicReplyButtonsMsg,
          o("WAWebFrontendMsgGetters").getSenderObj,
          N.getSender,
          N.getIsPSA,
          N.getNotifyName,
          N.getIsNewsletterMsg,
        ]),
          (t[0] = P));
      } else P = t[0];
      var M = o("useWAWebMsgValues").useMsgValues(c, P),
        w = M[0],
        A = M[1],
        F = M[2],
        O = M[3],
        B = M[4],
        W = M[5],
        q = M[6],
        U = M[7],
        V = M[8],
        H = M[9],
        G = M[10],
        z = M[11],
        j = M[12],
        K;
      t[1] !== W
        ? ((K =
            W === o("WAWebPollCreationUtils").PollType.QUIZ
              ? s._(/*BTDS*/ "View responses")
              : s._(/*BTDS*/ "View votes")),
          (t[1] = W),
          (t[2] = K))
        : (K = t[2]);
      var Q = K,
        X;
      t[3] !== f
        ? ((X = f.values().every(R)), (t[3] = f), (t[4] = X))
        : (X = t[4]);
      var Y = X,
        J;
      t[5] !== w ? ((J = w.slice(0, y)), (t[5] = w), (t[6] = J)) : (J = t[6]);
      var Z = J,
        ee;
      t[7] !== f
        ? ((ee = o("WAWebPollsUseResults").getOptionWithCount(f)),
          (t[7] = f),
          (t[8] = ee))
        : (ee = t[8]);
      var te = ee,
        ne;
      t[9] !== n ||
      t[10] !== B ||
      t[11] !== l ||
      t[12] !== u ||
      t[13] !== _ ||
      t[14] !== L ||
      t[15] !== x
        ? ((ne = {
            trusted: x,
            isPollEnded: l,
            isPollInvalid: u,
            onDetailImageClick: _,
            readonly: L,
            associatedMessages: n,
            correctOptionIndex: B,
          }),
          (t[9] = n),
          (t[10] = B),
          (t[11] = l),
          (t[12] = u),
          (t[13] = _),
          (t[14] = L),
          (t[15] = x),
          (t[16] = ne))
        : (ne = t[16]);
      var re = ne,
        oe;
      t[17] !== F ||
      t[18] !== c ||
      t[19] !== Z ||
      t[20] !== re ||
      t[21] !== g ||
      t[22] !== b ||
      t[23] !== E
        ? ((oe = function () {
            var e,
              t,
              n = D(c);
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
                      isSentByMe: F,
                      selectableOptionsCount: E,
                      pollName: Z,
                      pollEndTime: g,
                      pollHideVoterNames: b,
                    },
                    re,
                  ),
                ),
                { transition: "slide-left" },
              );
          }),
          (t[17] = F),
          (t[18] = c),
          (t[19] = Z),
          (t[20] = re),
          (t[21] = g),
          (t[22] = b),
          (t[23] = E),
          (t[24] = oe))
        : (oe = t[24]);
      var ae = oe,
        ie;
      t[25] !== j ||
      t[26] !== G ||
      t[27] !== l ||
      t[28] !== F ||
      t[29] !== c ||
      t[30] !== Z ||
      t[31] !== z ||
      t[32] !== te ||
      t[33] !== g ||
      t[34] !== b ||
      t[35] !== H ||
      t[36] !== V ||
      t[37] !== A
        ? ((ie = T({
            authorDisplayName: o("WAWebMsgModelUtils").getMsgDisplayNameFor({
              chat: o("WAWebFrontendMsgGetters").getMaybeChatByMsgKey(c, j),
              isPSA: G,
              notifyName: z,
              sender: H,
              senderObj: V,
            }),
            commaSeparatedOptionsAndResults: te,
            isPollEnded: l,
            isSentByMe: F,
            pollEndTime: g,
            pollHideVoterNames: b,
            pollName: Z,
            t: A,
          })),
          (t[25] = j),
          (t[26] = G),
          (t[27] = l),
          (t[28] = F),
          (t[29] = c),
          (t[30] = Z),
          (t[31] = z),
          (t[32] = te),
          (t[33] = g),
          (t[34] = b),
          (t[35] = H),
          (t[36] = V),
          (t[37] = A),
          (t[38] = ie))
        : (ie = t[38]);
      var le;
      t[39] !== q || t[40] !== i || t[41] !== c
        ? ((le =
            !q &&
            p.jsx(o("WAWebBizSuspiciousLabel.react").SuspiciousLabel, {
              msgKey: c,
              displayType: i,
            })),
          (t[39] = q),
          (t[40] = i),
          (t[41] = c),
          (t[42] = le))
        : (le = t[42]);
      var se;
      t[43] !== l ||
      t[44] !== F ||
      t[45] !== c ||
      t[46] !== Z ||
      t[47] !== g ||
      t[48] !== b ||
      t[49] !== v ||
      t[50] !== x
        ? ((se = p.jsx(r("WAWebPollMessageHeader"), {
            isPollEnded: l,
            pollSelectableOptionsCount: v,
            pollEndTime: g,
            pollHideVoterNames: b,
            name: Z,
            msgKey: c,
            isSentByMe: F,
            trusted: x,
          })),
          (t[43] = l),
          (t[44] = F),
          (t[45] = c),
          (t[46] = Z),
          (t[47] = g),
          (t[48] = b),
          (t[49] = v),
          (t[50] = x),
          (t[51] = se))
        : (se = t[51]);
      var ue;
      t[52] === Symbol.for("react.memo_cache_sentinel")
        ? ((ue = (d || (d = r("stylex"))).props(
            o("WDSPaddings.stylex").wdsPaddings.padding4,
          )),
          (t[52] = ue))
        : (ue = t[52]);
      var ce;
      t[53] !== ae ||
      t[54] !== c ||
      t[55] !== m ||
      t[56] !== re ||
      t[57] !== f ||
      t[58] !== E ||
      t[59] !== $
        ? ((ce = p.jsx(
            r("WAWebPollsOptions"),
            babelHelpers.extends(
              {
                msgKey: c,
                options: f,
                checkedOptionLocalIds: $,
                onOptionToggle: m,
                selectableOptionsCount: E,
                onPhotoThumbClick: ae,
                view: "message",
              },
              re,
            ),
          )),
          (t[53] = ae),
          (t[54] = c),
          (t[55] = m),
          (t[56] = re),
          (t[57] = f),
          (t[58] = E),
          (t[59] = $),
          (t[60] = ce))
        : (ce = t[60]);
      var de;
      t[61] !== u || t[62] !== F
        ? ((de =
            u &&
            p.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: [
                C.invalidPollWarning,
                F
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
                      children: s._(
                        /*BTDS*/ "You can only see votes made before you left.",
                      ),
                    },
                  ),
                ),
              ],
            })),
          (t[61] = u),
          (t[62] = F),
          (t[63] = de))
        : (de = t[63]);
      var me;
      t[64] !== O || t[65] !== W
        ? ((me =
            O != null &&
            p.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: [
                o("WDSPaddings.stylex").wdsPaddings.paddingTop8,
                o("WDSPaddings.stylex").wdsPaddings.paddingBottom12,
              ],
              children: p.jsx("span", {
                className: "x1pg5gke x1d3mw78 xhslqc4",
                "data-testid": "see-votes-in-channel",
                children:
                  W === o("WAWebPollCreationUtils").PollType.QUIZ
                    ? s._(/*BTDS*/ "View channel to answer.")
                    : s._(/*BTDS*/ "See the latest votes in the channel."),
              }),
            })),
          (t[64] = O),
          (t[65] = W),
          (t[66] = me))
        : (me = t[66]);
      var pe;
      t[67] !== n || t[68] !== c
        ? ((pe = p.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "end",
            children: p.jsx(o("WAWebMessageMeta.react").Meta, {
              msgKey: c,
              associatedMessages: n,
            }),
          })),
          (t[67] = n),
          (t[68] = c),
          (t[69] = pe))
        : (pe = t[69]);
      var _e;
      t[70] !== ce || t[71] !== de || t[72] !== me || t[73] !== pe
        ? ((_e = p.jsxs(
            "div",
            babelHelpers.extends({}, ue, { children: [ce, de, me, pe] }),
          )),
          (t[70] = ce),
          (t[71] = de),
          (t[72] = me),
          (t[73] = pe),
          (t[74] = _e))
        : (_e = t[74]);
      var fe;
      t[75] !== Y || t[76] !== F || t[77] !== _ || t[78] !== k || t[79] !== Q
        ? ((fe =
            k &&
            p.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
              theme: F
                ? o("WAWebMessageBubbleActions.react").BubbleActionsTheme
                    .POLL_SENDER
                : o("WAWebMessageBubbleActions.react").BubbleActionsTheme
                    .POLL_RECEIVER,
              items: [
                {
                  label: Q,
                  title: Q,
                  onClick: _,
                  disabled: Y,
                  testid: "poll-view-votes",
                },
              ],
            })),
          (t[75] = Y),
          (t[76] = F),
          (t[77] = _),
          (t[78] = k),
          (t[79] = Q),
          (t[80] = fe))
        : (fe = t[80]);
      var ge;
      t[81] !== c ||
      t[82] !== S ||
      t[83] !== V ||
      t[84] !== se ||
      t[85] !== _e ||
      t[86] !== fe ||
      t[87] !== le
        ? ((ge = p.jsxs(r("WAWebMessageBubbleHiddenText.react"), {
            contact: V,
            msgKey: c,
            children: [le, S, se, _e, fe],
          })),
          (t[81] = c),
          (t[82] = S),
          (t[83] = V),
          (t[84] = se),
          (t[85] = _e),
          (t[86] = fe),
          (t[87] = le),
          (t[88] = ge))
        : (ge = t[88]);
      var he;
      return (
        t[89] !== a ||
        t[90] !== i ||
        t[91] !== U ||
        t[92] !== c ||
        t[93] !== ge ||
        t[94] !== ie ||
        t[95] !== I
          ? ((he = p.jsx(r("WAWebMessageTextBubble.react"), {
              msgKey: c,
              displayType: i,
              displayAuthor: a,
              authorRole: "button",
              hideMeta: !0,
              ariaLabel: ie,
              useFixedWidth: U,
              testid: I,
              children: ge,
            })),
            (t[89] = a),
            (t[90] = i),
            (t[91] = U),
            (t[92] = c),
            (t[93] = ge),
            (t[94] = ie),
            (t[95] = I),
            (t[96] = he))
          : (he = t[96]),
        he
      );
    }
    function R(e) {
      return e.count === 0;
    }
    var L = 1e3,
      E = 3600,
      k = 24 * E;
    function I(e, t) {
      if (t == null) return "";
      if (e) return s._(/*BTDS*/ "Poll ended");
      var n = t - o("WAWebClock").Clock.getServerTimeMs(),
        r = Math.max(0, Math.ceil(n / L));
      if (r < E) return s._(/*BTDS*/ "Ends in less than 1h");
      if (r < k) {
        var a = Math.floor(r / E);
        return s._(/*BTDS*/ "Ends in {hours}h", [s._param("hours", a)]);
      }
      var i = Math.floor(r / k);
      return s._(
        /*BTDS*/ '_j{"*":"Ends in {days} days","_1":"Ends in {days} day"}',
        [s._plural(i), s._param("days", i)],
      );
    }
    function T(e) {
      var t = e.authorDisplayName,
        n = e.commaSeparatedOptionsAndResults,
        r = e.isPollEnded,
        a = e.isSentByMe,
        i = e.pollEndTime,
        l = e.pollHideVoterNames,
        u = e.pollName,
        c = e.t,
        d = l ? s._(/*BTDS*/ "Voter names hidden") : "",
        m = I(r, i);
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
    T.displayName = T.name + " [from " + i.id + "]";
    function D(t) {
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
