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
      var t = e.currentMessageCount,
        n = e.groupWid,
        a = e.onCancel,
        i = e.onDone,
        l = e.selectedMessageCount,
        c = m(l),
        p = c[0],
        f = c[1],
        h = d(
          function () {
            return g(t, n);
          },
          [t, n],
        ),
        y = function (t) {
          var e = parseInt(t, 10);
          (f(e),
            o(
              "WAWebGroupMemberAddingUserJourneyLogger",
            ).GroupMemberAddingUserJourneyLogger.countChanged({
              groupHistoryMessagesCount: e,
            }));
        },
        C = u.jsx("div", {
          className: "x1phvje8 xcldk2z xvpt6g3",
          children: u.jsx(r("WDSButtonGroup.react"), {
            width: "hug",
            primaryButtonProps: {
              label: s._(/*BTDS*/ "Done"),
              onPress: function () {
                return i(p);
              },
            },
            tertiaryButtonProps: {
              label: s._(/*BTDS*/ "Cancel"),
              onPress: a,
              variant: "borderless",
            },
          }),
        });
      return u.jsx(o("WAWebModal.react").Modal, {
        type: o("WAWebModal.react").ModalTheme.Auto,
        actions: C,
        testid: void 0,
        children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
          xstyle: _.modalWrapper,
          align: "stretch",
          children: [
            u.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: _.headerRow,
              align: "center",
              children: [
                u.jsx(r("WDSButton.react"), {
                  Icon: o("WAWebBackRefreshedIcon.react").BackRefreshedIcon,
                  onPress: a,
                  variant: "borderless",
                }),
                u.jsx(r("WDSText.react"), {
                  type: "Body1",
                  colorName: "contentDefault",
                  children: s._(/*BTDS*/ "Send messages"),
                }),
              ],
            }),
            u.jsx(o("WAWebFlex.react").FlexColumn, {
              xstyle: _.contentContainer,
              role: "radiogroup",
              children: h.map(function (e) {
                return u.jsxs(
                  "label",
                  {
                    className: "x78zum5 x6s0dn4 x1wxaq2x x16ovd2e x12xbjc7",
                    "data-testid": void 0,
                    children: [
                      u.jsx(r("WDSBaseRadio.react"), {
                        value: e.value,
                        name: "message-count",
                        checked: p === e.value,
                        onChange: y,
                      }),
                      u.jsx(r("WDSText.react"), {
                        type: "Body1",
                        colorName: "contentDefault",
                        xstyle: _.radioLabel,
                        children: e.label,
                      }),
                    ],
                  },
                  e.value,
                );
              }),
            }),
            o("WAWebGroupHistoryGating").isOutOfWindowPinSenderEnabled(n) &&
              u.jsx("div", {
                className: "xdx6fka xvtqlqk x16ovd2e xscbp6u",
                children: u.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  children: s._(
                    /*BTDS*/ "All available pinned messages will be included.",
                  ),
                }),
              }),
          ],
        }),
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
