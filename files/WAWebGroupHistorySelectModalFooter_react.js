__d(
  "WAWebGroupHistorySelectModalFooter.react",
  [
    "fbt",
    "CometPlaceholder.react",
    "WAWebAddGroupParticipantGroupHistoryContext.react",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryRestrictionHelper",
    "WAWebGroupHistorySendMessagesModal.react",
    "WAWebGroupMemberAddingUserJourneyLogger",
    "WAWebModalManager",
    "WDSButton.react",
    "WDSSwitch.react",
    "WDSText.react",
    "WDSTextualLink.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.use,
      m = c.useCallback,
      p = c.useEffect,
      _ = c.useEffectEvent,
      f = 25,
      g = { disclaimer: { paddingTop: "x1p57kb1", $$css: !0 } };
    function h(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.actionLabel,
        a = e.disclaimer,
        i = e.memberCount,
        l = e.onActionPress,
        s = e.ref,
        c = e.selectedContacts,
        m = d(r("WAWebAddGroupParticipantGroupHistoryContext.react")),
        p = m.canShareGroupHistory,
        _ = m.setShouldSendGroupHistory,
        f = m.shouldSendGroupHistory,
        h;
      t[0] !== p || t[1] !== c
        ? ((h =
            p &&
            o("WAWebGroupHistoryRestrictionHelper").hasUnrestrictedParticipants(
              c,
            )),
          (t[0] = p),
          (t[1] = c),
          (t[2] = h))
        : (h = t[2]);
      var C = h,
        b;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = {
            className:
              "x1n2onr6 x78zum5 xdt5ytf x1p57kb1 xyo0t3i xvg22vi xb0esv5 x1ccr1t9 xpx74rz",
          }),
          (t[3] = b))
        : (b = t[3]);
      var v;
      t[4] !== i || t[5] !== _ || t[6] !== f || t[7] !== C
        ? ((v =
            C &&
            u.jsx(r("CometPlaceholder.react"), {
              name: "group-history-message-count",
              fallback: null,
              children: u.jsx(y, { memberCount: i, onChange: _, value: f }),
            })),
          (t[4] = i),
          (t[5] = _),
          (t[6] = f),
          (t[7] = C),
          (t[8] = v))
        : (v = t[8]);
      var S;
      t[9] !== n || t[10] !== l
        ? ((S = u.jsx(r("WDSButton.react"), {
            testid: void 0,
            onPress: l,
            label: n,
            widthMode: "flexible",
          })),
          (t[9] = n),
          (t[10] = l),
          (t[11] = S))
        : (S = t[11]);
      var R;
      t[12] !== a
        ? ((R = u.jsx(r("WDSText.react"), {
            xstyle: g.disclaimer,
            colorName: "contentDeemphasized",
            type: "Body3",
            children: a,
          })),
          (t[12] = a),
          (t[13] = R))
        : (R = t[13]);
      var L;
      return (
        t[14] !== s || t[15] !== v || t[16] !== S || t[17] !== R
          ? ((L = u.jsxs(
              "div",
              babelHelpers.extends({ ref: s }, b, { children: [v, S, R] }),
            )),
            (t[14] = s),
            (t[15] = v),
            (t[16] = S),
            (t[17] = R),
            (t[18] = L))
          : (L = t[18]),
        L
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(39),
        a = e.memberCount,
        i = e.onChange,
        l = e.value,
        c = d(r("WAWebAddGroupParticipantGroupHistoryContext.react")),
        m = c.groupWid,
        g = c.messageCountPromise,
        h = c.selectedMessageCount,
        y = c.setSelectedMessageCount,
        b;
      t[0] !== g || t[1] !== l
        ? ((b = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield g;
              e != null &&
                o(
                  "WAWebGroupMemberAddingUserJourneyLogger",
                ).GroupMemberAddingUserJourneyLogger.footerDisplayed({
                  groupHistoryMessagesCount: e,
                  isGroupHistoryToggledOn: l,
                });
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[0] = g),
          (t[1] = l),
          (t[2] = b))
        : (b = t[2]);
      var v = _(b),
        S;
      t[3] !== v
        ? ((S = function () {
            v();
          }),
          (t[3] = v),
          (t[4] = S))
        : (S = t[4]);
      var R;
      (t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = []), (t[5] = R))
        : (R = t[5]),
        p(S, R));
      var L;
      t[6] !== i
        ? ((L = function (t, n) {
            (i(t),
              t
                ? o(
                    "WAWebGroupMemberAddingUserJourneyLogger",
                  ).GroupMemberAddingUserJourneyLogger.groupHistoryToggleOn({
                    groupHistoryMessagesCount: n,
                  })
                : o(
                    "WAWebGroupMemberAddingUserJourneyLogger",
                  ).GroupMemberAddingUserJourneyLogger.groupHistoryToggleOff({
                    groupHistoryMessagesCount: n,
                  }));
          }),
          (t[6] = i),
          (t[7] = L))
        : (L = t[7]);
      var E = L,
        k;
      t[8] !== m || t[9] !== E || t[10] !== h || t[11] !== y
        ? ((k = function (t) {
            var e = h != null ? h : t;
            (o(
              "WAWebGroupMemberAddingUserJourneyLogger",
            ).GroupMemberAddingUserJourneyLogger.countChangeEntryPointClicked({
              groupHistoryMessagesCount: e,
            }),
              o("WAWebModalManager").ModalManager.openSupportModal(
                u.jsx(r("WAWebGroupHistorySendMessagesModal.react"), {
                  currentMessageCount: t,
                  groupWid: m,
                  selectedMessageCount: e,
                  onDone: function (t) {
                    (y(t),
                      E(!0, t),
                      o("WAWebModalManager").ModalManager.closeSupportModal());
                  },
                  onCancel: C,
                }),
              ));
          }),
          (t[8] = m),
          (t[9] = E),
          (t[10] = h),
          (t[11] = y),
          (t[12] = k))
        : (k = t[12]);
      var I = k;
      if (g == null) return null;
      var T = d(g);
      if (T === 0) return null;
      var D;
      t[13] !== m
        ? ((D = o("WAWebGroupHistoryGating").isOutOfWindowPinSenderEnabled(m)),
          (t[13] = m),
          (t[14] = D))
        : (D = t[14]);
      var x = D,
        $ = h != null ? h : T,
        P = x || T > f,
        N;
      t[15] !== $ || t[16] !== x
        ? ((N = x
            ? s._(/*BTDS*/ "recent messages")
            : s._(
                /*BTDS*/ '_j{"*":"{display_message_count} messages","_1":"1 message"}',
                [s._plural($, "display_message_count")],
              )),
          (t[15] = $),
          (t[16] = x),
          (t[17] = N))
        : (N = t[17]);
      var M = N,
        w;
      t[18] !== I || t[19] !== P || t[20] !== M || t[21] !== T
        ? ((w = P
            ? u.jsx(r("WDSTextualLink.react"), {
                onClick: function () {
                  return I(T);
                },
                testid: void 0,
                textConfig: "Body2",
                children: M,
              })
            : M),
          (t[18] = I),
          (t[19] = P),
          (t[20] = M),
          (t[21] = T),
          (t[22] = w))
        : (w = t[22]);
      var A = w,
        F;
      t[23] !== x || t[24] !== a || t[25] !== A
        ? ((F = x
            ? s._(
                /*BTDS*/ '_j{"*":"{message_history_label} Send {message_count_link} to the selected members.","_1":"{message_history_label} Send {message_count_link} to the selected member."}',
                [
                  s._plural(a),
                  s._param(
                    "message_history_label",
                    u.jsx(r("WDSText.react"), {
                      colorName: "contentDefault",
                      type: "Body2Emphasized",
                      children: s._(/*BTDS*/ "Message history:"),
                    }),
                  ),
                  s._param("message_count_link", A),
                ],
              )
            : s._(
                /*BTDS*/ '_j{"*":"{message_history_label} Send the last {message_count_link} to the selected members.","_1":"{message_history_label} Send the last {message_count_link} to the selected member."}',
                [
                  s._plural(a),
                  s._param(
                    "message_history_label",
                    u.jsx(r("WDSText.react"), {
                      colorName: "contentDefault",
                      type: "Body2Emphasized",
                      children: s._(/*BTDS*/ "Message history:"),
                    }),
                  ),
                  s._param("message_count_link", A),
                ],
              )),
          (t[23] = x),
          (t[24] = a),
          (t[25] = A),
          (t[26] = F))
        : (F = t[26]);
      var O = F,
        B;
      t[27] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = { className: "x78zum5 x1qughib x6s0dn4 xvpt6g3" }), (t[27] = B))
        : (B = t[27]);
      var W;
      t[28] !== O
        ? ((W = u.jsx(r("WDSText.react"), {
            colorName: "contentDefault",
            type: "Body2",
            children: O,
          })),
          (t[28] = O),
          (t[29] = W))
        : (W = t[29]);
      var q;
      t[30] !== $ || t[31] !== E
        ? ((q = function (t) {
            E(t, $);
          }),
          (t[30] = $),
          (t[31] = E),
          (t[32] = q))
        : (q = t[32]);
      var U;
      t[33] !== q || t[34] !== l
        ? ((U = u.jsx(r("WDSSwitch.react"), {
            testid: void 0,
            value: l,
            onChange: q,
          })),
          (t[33] = q),
          (t[34] = l),
          (t[35] = U))
        : (U = t[35]);
      var V;
      return (
        t[36] !== W || t[37] !== U
          ? ((V = u.jsxs(
              "div",
              babelHelpers.extends({}, B, { children: [W, U] }),
            )),
            (t[36] = W),
            (t[37] = U),
            (t[38] = V))
          : (V = t[38]),
        V
      );
    }
    function C() {
      o("WAWebModalManager").ModalManager.closeSupportModal();
    }
    l.default = h;
  },
  226,
);
