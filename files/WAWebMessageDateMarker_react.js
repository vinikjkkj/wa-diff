__d(
  "WAWebMessageDateMarker.react",
  [
    "WALogger",
    "WAWeb-moment",
    "WAWebChatMessageSearch",
    "WAWebClock",
    "WAWebCmd",
    "WAWebCoreActionsODS",
    "WAWebDatePickerContainer.react",
    "WAWebDropdown.react",
    "WAWebMsgCollection",
    "WAWebSearchByDateUtils",
    "WAWebSearchByTypeAndDateGatingUtils",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebWrapperSystemBubble.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = ["ref"],
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useImperativeHandle,
      _ = m.useMemo,
      f = m.useRef,
      g = m.useState;
    function h(t) {
      var a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, u),
        l = i.chat,
        c = i.isFocusable,
        m = i.isGroupHistoryMessage,
        h = i.timestamp,
        y = g(null),
        C = y[0],
        b = y[1];
      function v() {
        try {
          return o("WAWebClock").Clock.relativeDateStr(h);
        } catch (t) {
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Clock.relativeDateStr(",
                  ")",
                ])),
              h,
            ),
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Clock.relativeDateStr failed: ",
                    "",
                  ])),
                t,
              )
              .sendLogs("relative-date-str-error", { sampling: 0.001 }),
            ""
          );
        }
      }
      var S = g(v()),
        R = S[0],
        L = S[1],
        E = f(null),
        k = f(null),
        I = g(!1),
        T = I[0],
        D = I[1],
        x = _(
          function () {
            return (
              h >= r("WAWeb-moment")().startOf("day").subtract(7, "day").unix()
            );
          },
          [h],
        );
      function $() {
        L(v());
      }
      o("useWAWebListener").useListener(
        x ? o("WAWebCmd").Cmd : null,
        "midnight",
        $,
      );
      var P = function () {
          return h;
        },
        N = function () {
          T && D(!1);
        },
        M = function () {
          T || D(!0);
        },
        w = function () {
          return E.current;
        };
      p(a, function () {
        return { getTimestamp: P, show: N, hide: M, getElement: w };
      });
      var A =
          o(
            "WAWebSearchByTypeAndDateGatingUtils",
          ).dateMarkerCalendarEnabled() && l != null,
        F = function () {
          b(null);
        },
        O = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            if (
              (o("WAWebCoreActionsODS").logCalendarDateSelectedFromDateMarker(),
              l != null)
            ) {
              var t = yield o(
                "WAWebSearchByDateUtils",
              ).getClosestMessageFromDate(l.id.toString(), e);
              if ((F(), t)) {
                var n,
                  r = o("WAWebMsgCollection").MsgCollection.get(t.toString()),
                  a = o("WAWebChatMessageSearch").getSearchContext({
                    chat: l,
                    msgKey: (n = r == null ? void 0 : r.id) != null ? n : t,
                  });
                a
                  ? ((a.highlightMentionMsg = !0),
                    (a.enableAnimation = !1),
                    o("WAWebCmd").Cmd.openChatAt({ chat: l, msgContext: a }))
                  : o("WAWebCmd").Cmd.openChatBottom({ chat: l });
              } else o("WAWebCmd").Cmd.openChatBottom({ chat: l });
            }
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        B = function () {
          A &&
            (o("WAWebCoreActionsODS").logCalendarOpenFromDateMarker(),
            b({
              dirY: o("WAWebDropdown.react").DirY.BOTTOM,
              dirX: o("WAWebDropdown.react").DirX.CENTER,
              type: o("WAWebDropdown.react").MenuType.DatePicker,
              menu: d.jsx(r("WAWebDatePickerContainer.react"), {
                chatId: l == null ? void 0 : l.id,
                defaultActiveStartDate: new Date(h * 1e3),
                onDateSelected: function (t) {
                  O(t);
                },
              }),
              anchor: k.current,
            }));
        };
      if (T) return null;
      var W = C
          ? d.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "DateMarkerDatePicker",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: F,
              children: d.jsx(r("WAWebUimUieMenu.react"), { contextMenu: C }),
            })
          : null,
        q = d.jsx(r("WDSText.react"), {
          type: "Body3Emphasized",
          colorName: "contentDeemphasized",
          dir: "auto",
          children: R.toString(),
        });
      return d.jsxs(d.Fragment, {
        children: [
          d.jsx(r("WAWebWrapperSystemBubble.react"), {
            ref: E,
            hidden: T,
            isFocusable: c,
            groupHistoryBackground: m === !0,
            children: A
              ? d.jsx("div", {
                  ref: k,
                  onClick: B,
                  role: "button",
                  tabIndex: 0,
                  onKeyDown: function (t) {
                    (t.key === "Enter" || t.key === " ") &&
                      (t.preventDefault(), B());
                  },
                  className:
                    "x1ypdohk x4qlk2n x93d46o x14ba6vc xrw3huk x1tiyuxx x1nbhmlj x1iw51ew xde1mab x1fmog5m xu25z0z x140muxe xo1y3bh",
                  children: q,
                })
              : q,
          }),
          W,
        ],
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  98,
);
