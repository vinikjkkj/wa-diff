__d(
  "WAWebMessageStickyDateMarker.react",
  [
    "WAWebChatMessageSearch",
    "WAWebCmd",
    "WAWebCoreActionsODS",
    "WAWebDatePickerContainer.react",
    "WAWebDropdown.react",
    "WAWebMsgCollection",
    "WAWebSearchByDateUtils",
    "WAWebSearchByTypeAndDateGatingUtils",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebVelocityTransitionGroup",
    "WAWebWrapperSystemBubble.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useImperativeHandle,
      _ = c.useRef,
      f = c.useState;
    function g(e) {
      return e == null ? 0 : e.offsetWidth - (e.clientWidth + e.clientLeft * 2);
    }
    var h = {
        position: "x10l6tqk",
        zIndex: "x8k05lb",
        boxSizing: "x9f619",
        display: "x78zum5",
        justifyContent: "xl56j7k",
        width: "xh8yej3",
        paddingTop: "x12mz7nx",
        paddingInlineEnd: "x120eax6",
        pointerEvents: "x47corl",
        $$css: !0,
      },
      y = {
        stickyRefreshed: function (t) {
          return [
            h,
            {
              "--x-paddingInlineEnd": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t + "px"),
            },
          ];
        },
        interactable: { pointerEvents: "x67bb7w", $$css: !0 },
      };
    function C(t) {
      var a = t.chat,
        i = t.ref,
        l = t.scrollContainerRef,
        s,
        c = f(void 0),
        h = c[0],
        C = c[1],
        b = f(void 0),
        v = b[0],
        S = b[1],
        R = f(!0),
        L = R[0],
        E = R[1],
        k = f(0),
        I = k[0],
        T = k[1],
        D = f(null),
        x = D[0],
        $ = D[1],
        P = _(null),
        N = _(!1),
        M = _(!1),
        w = _(!1),
        A = o(
          "WAWebSearchByTypeAndDateGatingUtils",
        ).dateMarkerCalendarEnabled(),
        F = d(function () {
          w.current && !N.current && !M.current && ((w.current = !1), E(!1));
        }, []);
      m(
        function () {
          if (l != null) {
            var e = g(l);
            e !== I && T(e);
          }
        },
        [l, I],
      );
      var O = function (t, n) {
          (C(t), S(n));
        },
        B = function (t) {
          t
            ? ((w.current = !1), E(!0))
            : A && (N.current || M.current)
              ? (w.current = !0)
              : ((w.current = !1), E(!1));
        };
      p(i, function () {
        return { updateDateMarkerText: O, setVisibility: B };
      });
      var W =
          o(
            "WAWebSearchByTypeAndDateGatingUtils",
          ).dateMarkerCalendarEnabled() &&
          a != null &&
          v != null,
        q = function () {
          ((M.current = !1), $(null), F());
        },
        U = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            if (
              (o(
                "WAWebCoreActionsODS",
              ).logCalendarDateSelectedFromStickyDateMarker(),
              a != null)
            ) {
              var t = yield o(
                "WAWebSearchByDateUtils",
              ).getClosestMessageFromDate(a.id.toString(), e);
              if ((q(), t)) {
                var n,
                  r = o("WAWebMsgCollection").MsgCollection.get(t.toString()),
                  i = o("WAWebChatMessageSearch").getSearchContext({
                    chat: a,
                    msgKey: (n = r == null ? void 0 : r.id) != null ? n : t,
                  });
                i
                  ? ((i.highlightMentionMsg = !0),
                    (i.enableAnimation = !1),
                    o("WAWebCmd").Cmd.openChatAt({ chat: a, msgContext: i }))
                  : o("WAWebCmd").Cmd.openChatBottom({ chat: a });
              } else o("WAWebCmd").Cmd.openChatBottom({ chat: a });
            }
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        V = function () {
          !W ||
            v == null ||
            ((M.current = !0),
            o("WAWebCoreActionsODS").logCalendarOpenFromStickyDateMarker(),
            $({
              dirY: o("WAWebDropdown.react").DirY.BOTTOM,
              dirX: o("WAWebDropdown.react").DirX.CENTER,
              type: o("WAWebDropdown.react").MenuType.DatePicker,
              menu: u.jsx(r("WAWebDatePickerContainer.react"), {
                chatId: a == null ? void 0 : a.id,
                defaultActiveStartDate: new Date(v * 1e3),
                onDateSelected: function (t) {
                  U(t);
                },
              }),
              anchor: P.current,
            }));
        },
        H = function () {
          N.current = !0;
        },
        G = function () {
          ((N.current = !1), F());
        };
      if (h != null && L) {
        var z = u.jsx(r("WDSText.react"), {
            type: "Body3Emphasized",
            colorName: "contentDeemphasized",
            dir: "auto",
            children: h,
          }),
          j = x
            ? u.jsx(o("WAWebUimUie.react").UIE, {
                displayName: "StickyDateMarkerDatePicker",
                escapable: !0,
                popable: !0,
                dismissOnWindowResize: !0,
                requestDismiss: q,
                children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: x }),
              })
            : null;
        s = u.jsxs(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props(
              y.stickyRefreshed(I),
              A && y.interactable,
            ),
            {
              children: [
                W
                  ? u.jsx("div", {
                      ref: P,
                      onClick: V,
                      onMouseEnter: H,
                      onMouseLeave: G,
                      role: "button",
                      tabIndex: 0,
                      onKeyDown: function (t) {
                        (t.key === "Enter" || t.key === " ") &&
                          (t.preventDefault(), V());
                      },
                      className: "x1ypdohk",
                      children: u.jsx(r("WAWebWrapperSystemBubble.react"), {
                        theme: "sticky",
                        children: z,
                      }),
                    })
                  : u.jsx(r("WAWebWrapperSystemBubble.react"), {
                      theme: "sticky",
                      children: z,
                    }),
                j,
              ],
            },
          ),
        );
      }
      return u.jsx(r("WAWebVelocityTransitionGroup"), {
        transitionName: "slide-down-date",
        children: s,
      });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = C));
  },
  98,
);
