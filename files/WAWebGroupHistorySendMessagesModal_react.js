__d(
  "WAWebGroupHistorySendMessagesModal.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebBackRefreshedIcon.react",
    "WAWebFlex.react",
    "WAWebGroupHistoryGating",
    "WAWebGroupMemberAddingUserJourneyLogger",
    "WAWebModal.react",
    "WDSBaseRadio.react",
    "WDSButton.react",
    "WDSButtonGroup.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useMemo,
      m = c.useState,
      p = [100, 75, 50, 25],
      _ = {
        modalWrapper: { boxSizing: "x9f619", width: "xvue9z", $$css: !0 },
        headerRow: {
          columnGap: "x1aj3ljl",
          paddingTop: "x1xrf6ya",
          paddingBottom: "xscbp6u",
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "x1nzty39",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        contentContainer: {
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        radioLabel: { paddingInlineStart: "xdx6fka", $$css: !0 },
      };
    function f(e) {
      var t = e.count,
        n = e.isAll;
      return n
        ? s._(/*BTDS*/ "Last {count} (all)", [s._param("count", t)])
        : s._(/*BTDS*/ "Last {count}", [s._param("count", t)]);
    }
    function g(e, t) {
      var n = [],
        r = o("WAWebABProps").getABPropConfigValue(
          "group_history_message_count_limit",
        ),
        a = o("WAWebGroupHistoryGating").isOutOfWindowPinSenderEnabled(t);
      e <= r &&
        n.push({
          label: f({ count: e, isAll: e !== Math.max.apply(Math, p) }),
          value: e,
        });
      var i = p.reduce(function (t, n) {
        return (
          n < e && t.push({ label: f({ count: n, isAll: !1 }), value: n }),
          t
        );
      }, n);
      return (
        a &&
          i.length === 0 &&
          e > 0 &&
          i.push({ label: f({ count: e, isAll: !0 }), value: e }),
        i
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(36),
        n = e.currentMessageCount,
        a = e.groupWid,
        i = e.onCancel,
        l = e.onDone,
        c = e.selectedMessageCount,
        d = m(c),
        p = d[0],
        f = d[1],
        h;
      t[0] !== n || t[1] !== a
        ? ((h = g(n, a)), (t[0] = n), (t[1] = a), (t[2] = h))
        : (h = t[2]);
      var y = h,
        C;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = function (t) {
            var e = parseInt(t, 10);
            (f(e),
              o(
                "WAWebGroupMemberAddingUserJourneyLogger",
              ).GroupMemberAddingUserJourneyLogger.countChanged({
                groupHistoryMessagesCount: e,
              }));
          }),
          (t[3] = C))
        : (C = t[3]);
      var b = C,
        v;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = { className: "x1phvje8 xcldk2z xvpt6g3" }), (t[4] = v))
        : (v = t[4]);
      var S;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = s._(/*BTDS*/ "Done")), (t[5] = S))
        : (S = t[5]);
      var R;
      t[6] !== p || t[7] !== l
        ? ((R = {
            label: S,
            onPress: function () {
              return l(p);
            },
          }),
          (t[6] = p),
          (t[7] = l),
          (t[8] = R))
        : (R = t[8]);
      var L;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = s._(/*BTDS*/ "Cancel")), (t[9] = L))
        : (L = t[9]);
      var E;
      t[10] !== i
        ? ((E = { label: L, onPress: i, variant: "borderless" }),
          (t[10] = i),
          (t[11] = E))
        : (E = t[11]);
      var k;
      t[12] !== R || t[13] !== E
        ? ((k = u.jsx(
            "div",
            babelHelpers.extends({}, v, {
              children: u.jsx(r("WDSButtonGroup.react"), {
                width: "hug",
                primaryButtonProps: R,
                tertiaryButtonProps: E,
              }),
            }),
          )),
          (t[12] = R),
          (t[13] = E),
          (t[14] = k))
        : (k = t[14]);
      var I = k,
        T;
      t[15] !== i
        ? ((T = u.jsx(r("WDSButton.react"), {
            Icon: o("WAWebBackRefreshedIcon.react").BackRefreshedIcon,
            onPress: i,
            variant: "borderless",
          })),
          (t[15] = i),
          (t[16] = T))
        : (T = t[16]);
      var D;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = u.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDefault",
            children: s._(/*BTDS*/ "Send messages"),
          })),
          (t[17] = D))
        : (D = t[17]);
      var x;
      t[18] !== T
        ? ((x = u.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: _.headerRow,
            align: "center",
            children: [T, D],
          })),
          (t[18] = T),
          (t[19] = x))
        : (x = t[19]);
      var $;
      if (t[20] !== p || t[21] !== y) {
        var P;
        (t[23] !== p
          ? ((P = function (t) {
              return u.jsxs(
                "label",
                {
                  className: "x78zum5 x6s0dn4 x1wxaq2x x16ovd2e x12xbjc7",
                  "data-testid": void 0,
                  children: [
                    u.jsx(r("WDSBaseRadio.react"), {
                      value: t.value,
                      name: "message-count",
                      checked: p === t.value,
                      onChange: b,
                    }),
                    u.jsx(r("WDSText.react"), {
                      type: "Body1",
                      colorName: "contentDefault",
                      xstyle: _.radioLabel,
                      children: t.label,
                    }),
                  ],
                },
                t.value,
              );
            }),
            (t[23] = p),
            (t[24] = P))
          : (P = t[24]),
          ($ = y.map(P)),
          (t[20] = p),
          (t[21] = y),
          (t[22] = $));
      } else $ = t[22];
      var N;
      t[25] !== $
        ? ((N = u.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: _.contentContainer,
            role: "radiogroup",
            children: $,
          })),
          (t[25] = $),
          (t[26] = N))
        : (N = t[26]);
      var M;
      t[27] !== a
        ? ((M =
            o("WAWebGroupHistoryGating").isOutOfWindowPinSenderEnabled(a) &&
            u.jsx("div", {
              className: "xdx6fka xvtqlqk x16ovd2e xscbp6u",
              children: u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                children: s._(
                  /*BTDS*/ "All available pinned messages will be included.",
                ),
              }),
            })),
          (t[27] = a),
          (t[28] = M))
        : (M = t[28]);
      var w;
      t[29] !== x || t[30] !== N || t[31] !== M
        ? ((w = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: _.modalWrapper,
            align: "stretch",
            children: [x, N, M],
          })),
          (t[29] = x),
          (t[30] = N),
          (t[31] = M),
          (t[32] = w))
        : (w = t[32]);
      var A;
      return (
        t[33] !== I || t[34] !== w
          ? ((A = u.jsx(o("WAWebModal.react").Modal, {
              type: o("WAWebModal.react").ModalTheme.Auto,
              actions: I,
              testid: void 0,
              children: w,
            })),
            (t[33] = I),
            (t[34] = w),
            (t[35] = A))
          : (A = t[35]),
        A
      );
    }
    l.default = h;
  },
  226,
);
