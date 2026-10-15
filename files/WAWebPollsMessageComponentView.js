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
      var t = o("react-compiler-runtime").c(92),
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
          o("WAWebFrontendMsgGetters").getSafeMsg,
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
        G;
      t[1] !== W
        ? ((G =
            W === o("WAWebPollCreationUtils").PollType.QUIZ
              ? s._(/*BTDS*/ "View responses")
              : s._(/*BTDS*/ "View votes")),
          (t[1] = W),
          (t[2] = G))
        : (G = t[2]);
      var z = G,
        j;
      t[3] !== f
        ? ((j = f.values().every(R)), (t[3] = f), (t[4] = j))
        : (j = t[4]);
      var K = j,
        Q;
      t[5] !== w ? ((Q = w.slice(0, y)), (t[5] = w), (t[6] = Q)) : (Q = t[6]);
      var X = Q,
        Y;
      t[7] !== f
        ? ((Y = o("WAWebPollsUseResults").getOptionWithCount(f)),
          (t[7] = f),
          (t[8] = Y))
        : (Y = t[8]);
      var J = Y,
        Z;
      t[9] !== n ||
      t[10] !== B ||
      t[11] !== l ||
      t[12] !== u ||
      t[13] !== _ ||
      t[14] !== L ||
      t[15] !== x
        ? ((Z = {
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
          (t[16] = Z))
        : (Z = t[16]);
      var ee = Z,
        te;
      t[17] !== F ||
      t[18] !== c ||
      t[19] !== X ||
      t[20] !== ee ||
      t[21] !== g ||
      t[22] !== b ||
      t[23] !== E
        ? ((te = function () {
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
                      pollName: X,
                      pollEndTime: g,
                      pollHideVoterNames: b,
                    },
                    ee,
                  ),
                ),
                { transition: "slide-left" },
              );
          }),
          (t[17] = F),
          (t[18] = c),
          (t[19] = X),
          (t[20] = ee),
          (t[21] = g),
          (t[22] = b),
          (t[23] = E),
          (t[24] = te))
        : (te = t[24]);
      var ne = te,
        re;
      t[25] !== l ||
      t[26] !== F ||
      t[27] !== X ||
      t[28] !== J ||
      t[29] !== g ||
      t[30] !== b ||
      t[31] !== H ||
      t[32] !== A
        ? ((re = T({
            authorDisplayName: o("WAWebMsgModelUtils").getMsgDisplayName(
              H.unsafe(),
            ),
            commaSeparatedOptionsAndResults: J,
            isPollEnded: l,
            isSentByMe: F,
            pollEndTime: g,
            pollHideVoterNames: b,
            pollName: X,
            t: A,
          })),
          (t[25] = l),
          (t[26] = F),
          (t[27] = X),
          (t[28] = J),
          (t[29] = g),
          (t[30] = b),
          (t[31] = H),
          (t[32] = A),
          (t[33] = re))
        : (re = t[33]);
      var oe;
      t[34] !== q || t[35] !== i || t[36] !== c
        ? ((oe =
            !q &&
            p.jsx(o("WAWebBizSuspiciousLabel.react").SuspiciousLabel, {
              msgKey: c,
              displayType: i,
            })),
          (t[34] = q),
          (t[35] = i),
          (t[36] = c),
          (t[37] = oe))
        : (oe = t[37]);
      var ae;
      t[38] !== l ||
      t[39] !== F ||
      t[40] !== c ||
      t[41] !== X ||
      t[42] !== g ||
      t[43] !== b ||
      t[44] !== v ||
      t[45] !== x
        ? ((ae = p.jsx(r("WAWebPollMessageHeader"), {
            isPollEnded: l,
            pollSelectableOptionsCount: v,
            pollEndTime: g,
            pollHideVoterNames: b,
            name: X,
            msgKey: c,
            isSentByMe: F,
            trusted: x,
          })),
          (t[38] = l),
          (t[39] = F),
          (t[40] = c),
          (t[41] = X),
          (t[42] = g),
          (t[43] = b),
          (t[44] = v),
          (t[45] = x),
          (t[46] = ae))
        : (ae = t[46]);
      var ie;
      t[47] === Symbol.for("react.memo_cache_sentinel")
        ? ((ie = (d || (d = r("stylex"))).props(
            o("WDSPaddings.stylex").wdsPaddings.padding4,
          )),
          (t[47] = ie))
        : (ie = t[47]);
      var le;
      t[48] !== ne ||
      t[49] !== c ||
      t[50] !== m ||
      t[51] !== ee ||
      t[52] !== f ||
      t[53] !== E ||
      t[54] !== $
        ? ((le = p.jsx(
            r("WAWebPollsOptions"),
            babelHelpers.extends(
              {
                msgKey: c,
                options: f,
                checkedOptionLocalIds: $,
                onOptionToggle: m,
                selectableOptionsCount: E,
                onPhotoThumbClick: ne,
                view: "message",
              },
              ee,
            ),
          )),
          (t[48] = ne),
          (t[49] = c),
          (t[50] = m),
          (t[51] = ee),
          (t[52] = f),
          (t[53] = E),
          (t[54] = $),
          (t[55] = le))
        : (le = t[55]);
      var se;
      t[56] !== u || t[57] !== F
        ? ((se =
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
          (t[56] = u),
          (t[57] = F),
          (t[58] = se))
        : (se = t[58]);
      var ue;
      t[59] !== O || t[60] !== W
        ? ((ue =
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
          (t[59] = O),
          (t[60] = W),
          (t[61] = ue))
        : (ue = t[61]);
      var ce;
      t[62] !== n || t[63] !== c
        ? ((ce = p.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "end",
            children: p.jsx(o("WAWebMessageMeta.react").Meta, {
              msgKey: c,
              associatedMessages: n,
            }),
          })),
          (t[62] = n),
          (t[63] = c),
          (t[64] = ce))
        : (ce = t[64]);
      var de;
      t[65] !== le || t[66] !== se || t[67] !== ue || t[68] !== ce
        ? ((de = p.jsxs(
            "div",
            babelHelpers.extends({}, ie, { children: [le, se, ue, ce] }),
          )),
          (t[65] = le),
          (t[66] = se),
          (t[67] = ue),
          (t[68] = ce),
          (t[69] = de))
        : (de = t[69]);
      var me;
      t[70] !== K || t[71] !== F || t[72] !== _ || t[73] !== k || t[74] !== z
        ? ((me =
            k &&
            p.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
              theme: F
                ? o("WAWebMessageBubbleActions.react").BubbleActionsTheme
                    .POLL_SENDER
                : o("WAWebMessageBubbleActions.react").BubbleActionsTheme
                    .POLL_RECEIVER,
              items: [
                {
                  label: z,
                  title: z,
                  onClick: _,
                  disabled: K,
                  testid: "poll-view-votes",
                },
              ],
            })),
          (t[70] = K),
          (t[71] = F),
          (t[72] = _),
          (t[73] = k),
          (t[74] = z),
          (t[75] = me))
        : (me = t[75]);
      var pe;
      t[76] !== c ||
      t[77] !== S ||
      t[78] !== V ||
      t[79] !== ae ||
      t[80] !== de ||
      t[81] !== me ||
      t[82] !== oe
        ? ((pe = p.jsxs(r("WAWebMessageBubbleHiddenText.react"), {
            contact: V,
            msgKey: c,
            children: [oe, S, ae, de, me],
          })),
          (t[76] = c),
          (t[77] = S),
          (t[78] = V),
          (t[79] = ae),
          (t[80] = de),
          (t[81] = me),
          (t[82] = oe),
          (t[83] = pe))
        : (pe = t[83]);
      var _e;
      return (
        t[84] !== a ||
        t[85] !== i ||
        t[86] !== U ||
        t[87] !== c ||
        t[88] !== pe ||
        t[89] !== re ||
        t[90] !== I
          ? ((_e = p.jsx(r("WAWebMessageTextBubble.react"), {
              msgKey: c,
              displayType: i,
              displayAuthor: a,
              authorRole: "button",
              hideMeta: !0,
              ariaLabel: re,
              useFixedWidth: U,
              testid: I,
              children: pe,
            })),
            (t[84] = a),
            (t[85] = i),
            (t[86] = U),
            (t[87] = c),
            (t[88] = pe),
            (t[89] = re),
            (t[90] = I),
            (t[91] = _e))
          : (_e = t[91]),
        _e
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
