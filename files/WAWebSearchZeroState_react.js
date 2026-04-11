__d(
  "WAWebSearchZeroState.react",
  [
    "fbt",
    "Keys",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebSearchZeroStateRecentSearchItem.react",
    "WAWebTabOrder",
    "WDSButton.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useImperativeHandle,
      p = c.useRef,
      _ = c.useState,
      f = {
        wrapper: {
          paddingTop: "x1xrf6ya",
          paddingBottom: "xvpt6g3",
          paddingInlineStart: "x1phvje8",
          paddingInlineEnd: "xcldk2z",
          paddingLeft: null,
          paddingRight: null,
          borderBottomStyle: "x1q0q8m5",
          borderBottomWidth: "xso031l",
          borderTopColor: "xx42vgk",
          borderInlineEndColor: "xbogo7e",
          borderBottomColor: "x120ee7l",
          borderInlineStartColor: "x1vb5itz",
          $$css: !0,
        },
        clearButton: {
          fontSize: "x1f6kntn",
          fontWeight: "x1s688f",
          paddingInlineStart: "x1iw51ew",
          paddingInlineEnd: "xde1mab",
          height: "x10w6t97",
          $$css: !0,
        },
      },
      g = { gridTemplateColumns: "repeat(4, minmax(0, 100px))" };
    function h(e) {
      var t = e.onBlur,
        a = e.onChatClick,
        i = e.onClearAll,
        l = e.onKeyDown,
        c = e.onSearchFocus,
        h = e.onSetShowingClearConfirmation,
        y = e.recentChats,
        C = e.ref,
        b = p([]),
        v = p(0),
        S = _(0),
        R = S[0],
        L = S[1],
        E = p(null),
        k = p(null),
        I = p(!1),
        T = d(function (e) {
          ((v.current = e), L(e));
        }, []),
        D = function () {
          var e;
          (T(0), (e = b.current[0]) == null || e.focus());
        };
      if (
        (m(C, function () {
          return {
            focus: D,
            getElement: function () {
              return E.current;
            },
          };
        }),
        y.length === 0)
      )
        return null;
      var x = function (t, n) {
          b.current[n] = t;
        },
        $ = 4,
        P = function (t) {
          var e,
            n = v.current + 1;
          if (n >= y.length) {
            l == null || l(t);
            return;
          }
          (T(n), (e = b.current[n]) == null || e.focus());
        },
        N = function () {
          var e,
            t = v.current - 1;
          if (t < 0) {
            c();
            return;
          }
          (T(t), (e = b.current[t]) == null || e.focus());
        },
        M = function (t) {
          var e,
            n = v.current + $;
          if (n >= y.length) {
            l == null || l(t);
            return;
          }
          (T(n), (e = b.current[n]) == null || e.focus());
        },
        w = function () {
          var e,
            t = v.current - $;
          if (t < 0) {
            c();
            return;
          }
          (T(t), (e = b.current[t]) == null || e.focus());
        },
        A = function () {
          var e = E.current;
          if (e != null) {
            var t = document.querySelectorAll("[data-tab]"),
              n = !1;
            for (var r of t) {
              if (e.contains(r)) {
                n = !0;
                continue;
              }
              if (n && r instanceof HTMLElement && r.tabIndex !== -1) {
                r.focus();
                return;
              }
            }
          }
        },
        F = function (t) {
          switch (t.keyCode) {
            case r("Keys").TAB:
              if (!t.shiftKey)
                k.current != null &&
                t.target instanceof Node &&
                k.current.contains(t.target)
                  ? (t.preventDefault(), t.stopPropagation(), D())
                  : (t.preventDefault(), t.stopPropagation(), A());
              else {
                var e = k.current;
                e != null &&
                  t.target instanceof Node &&
                  !e.contains(t.target) &&
                  (t.preventDefault(), t.stopPropagation(), e.focus());
              }
              break;
            case r("Keys").RIGHT:
              (t.preventDefault(), P(t));
              break;
            case r("Keys").LEFT:
              (t.preventDefault(), N());
              break;
            case r("Keys").DOWN:
              (t.preventDefault(), M(t));
              break;
            case r("Keys").UP:
              (t.preventDefault(), w());
              break;
            default:
              break;
          }
        },
        O = function (t) {
          var e = t.target;
          e instanceof HTMLElement &&
            e.closest('button, a, [role="button"]') == null &&
            (t.preventDefault(), c());
        },
        B = function (n) {
          var e = E.current,
            o = n.relatedTarget;
          r("setTimeout")(function () {
            I.current ||
              (e != null && o instanceof Node && e.contains(o)) ||
              t == null ||
              t();
          }, 0);
        },
        W = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            ((I.current = !0), h == null || h(!0));
            var e = function () {
              ((I.current = !1), h == null || h(!1));
            };
            try {
              var t = yield o("WAWebConfirmPopup.react").waitForConfirmPopup({
                title: s._(/*BTDS*/ "Clear search history?"),
                okText: s._(/*BTDS*/ "Clear"),
                cancelText: r("WAWebFbtCommon")("Cancel"),
                children: u.jsx(r("WDSText.react"), {
                  type: "Body1",
                  colorName: "contentDeemphasized",
                  children: s._(/*BTDS*/ "You won't be able to undo this."),
                }),
                onOK: e,
                onCancel: e,
                onOverlayClick: e,
              });
              t && i();
            } finally {
              e();
              var n = E.current;
              (n == null || !n.contains(document.activeElement)) && c();
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
      return u.jsx("div", {
        ref: E,
        role: "group",
        "aria-label": s._(/*BTDS*/ "Recent searches"),
        onBlur: B,
        onKeyDown: F,
        onMouseDown: O,
        className: "xscbp6u",
        children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
          align: "stretch",
          xstyle: f.wrapper,
          children: [
            u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "all",
              marginBottom: 12,
              children: [
                u.jsx(r("WDSText.react"), {
                  type: "Body1Emphasized",
                  colorName: "contentDefault",
                  children: s._(/*BTDS*/ "Recent searches"),
                }),
                u.jsx(r("WDSButton.react"), {
                  ref: k,
                  onPress: function () {
                    return void W();
                  },
                  tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_SEARCH,
                  xstyle: f.clearButton,
                  variant: "filled",
                  type: "media",
                  label: s._(/*BTDS*/ "Clear all"),
                }),
              ],
            }),
            u.jsx("div", {
              className: "xrvj5dj x1qughib x3pnbk8",
              style: g,
              children: y.map(function (e, t) {
                return u.jsx(
                  r("WAWebSearchZeroStateRecentSearchItem.react"),
                  {
                    ref: function (n) {
                      return x(n, t);
                    },
                    chat: e,
                    onClick: function () {
                      return a(e, t);
                    },
                    onFocus: function () {
                      return T(t);
                    },
                    tabIndex:
                      t === R
                        ? o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_SEARCH
                        : -1,
                  },
                  e.id.toString(),
                );
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
