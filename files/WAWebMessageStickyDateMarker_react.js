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
    "react-compiler-runtime",
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
      var a = o("react-compiler-runtime").c(38),
        i = t.chat,
        l = t.ref,
        s = t.scrollContainerRef,
        c,
        d = f(void 0),
        h = d[0],
        C = d[1],
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
        A;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = o(
            "WAWebSearchByTypeAndDateGatingUtils",
          ).dateMarkerCalendarEnabled()),
          (a[0] = A))
        : (A = a[0]);
      var F = A,
        O;
      a[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = function () {
            w.current && !N.current && !M.current && ((w.current = !1), E(!1));
          }),
          (a[1] = O))
        : (O = a[1]);
      var B = O,
        W,
        q;
      (a[2] !== s || a[3] !== I
        ? ((W = function () {
            if (s != null) {
              var e = g(s);
              e !== I && T(e);
            }
          }),
          (q = [s, I]),
          (a[2] = s),
          (a[3] = I),
          (a[4] = W),
          (a[5] = q))
        : ((W = a[4]), (q = a[5])),
        m(W, q));
      var U;
      a[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = function (t, n) {
            (C(t), S(n));
          }),
          (a[6] = U))
        : (U = a[6]);
      var V = U,
        H;
      a[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = function (t) {
            t
              ? ((w.current = !1), E(!0))
              : F && (N.current || M.current)
                ? (w.current = !0)
                : ((w.current = !1), E(!1));
          }),
          (a[7] = H))
        : (H = a[7]);
      var G = H,
        z;
      (a[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = function () {
            return { updateDateMarkerText: V, setVisibility: G };
          }),
          (a[8] = z))
        : (z = a[8]),
        p(l, z));
      var j;
      a[9] !== i || a[10] !== v
        ? ((j =
            o(
              "WAWebSearchByTypeAndDateGatingUtils",
            ).dateMarkerCalendarEnabled() &&
            i != null &&
            v != null),
          (a[9] = i),
          (a[10] = v),
          (a[11] = j))
        : (j = a[11]);
      var K = j,
        Q;
      a[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((Q = function () {
            ((M.current = !1), $(null), B());
          }),
          (a[12] = Q))
        : (Q = a[12]);
      var X = Q,
        Y;
      a[13] !== i
        ? ((Y = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (
                  (o(
                    "WAWebCoreActionsODS",
                  ).logCalendarDateSelectedFromStickyDateMarker(),
                  i != null)
                ) {
                  var t = yield o(
                    "WAWebSearchByDateUtils",
                  ).getClosestMessageFromDate(i.id.toString(), e);
                  if ((X(), t)) {
                    var n,
                      r = o("WAWebMsgCollection").MsgCollection.get(
                        t.toString(),
                      ),
                      a = o("WAWebChatMessageSearch").getSearchContext({
                        chat: i,
                        msgKey: (n = r == null ? void 0 : r.id) != null ? n : t,
                      });
                    a
                      ? ((a.highlightMentionMsg = !0),
                        (a.enableAnimation = !1),
                        o("WAWebCmd").Cmd.openChatAt({
                          chat: i,
                          msgContext: a,
                        }))
                      : o("WAWebCmd").Cmd.openChatBottom({ chat: i });
                  } else o("WAWebCmd").Cmd.openChatBottom({ chat: i });
                }
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })()),
          (a[13] = i),
          (a[14] = Y))
        : (Y = a[14]);
      var J = Y,
        Z;
      a[15] !== (i == null ? void 0 : i.id) ||
      a[16] !== J ||
      a[17] !== K ||
      a[18] !== v
        ? ((Z = function () {
            !K ||
              v == null ||
              ((M.current = !0),
              o("WAWebCoreActionsODS").logCalendarOpenFromStickyDateMarker(),
              $({
                dirY: o("WAWebDropdown.react").DirY.BOTTOM,
                dirX: o("WAWebDropdown.react").DirX.CENTER,
                type: o("WAWebDropdown.react").MenuType.DatePicker,
                menu: u.jsx(r("WAWebDatePickerContainer.react"), {
                  chatId: i == null ? void 0 : i.id,
                  defaultActiveStartDate: new Date(v * 1e3),
                  onDateSelected: function (t) {
                    J(t);
                  },
                }),
                anchor: P.current,
              }));
          }),
          (a[15] = i == null ? void 0 : i.id),
          (a[16] = J),
          (a[17] = K),
          (a[18] = v),
          (a[19] = Z))
        : (Z = a[19]);
      var ee = Z,
        te;
      a[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((te = function () {
            N.current = !0;
          }),
          (a[20] = te))
        : (te = a[20]);
      var ne = te,
        re;
      a[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((re = function () {
            ((N.current = !1), B());
          }),
          (a[21] = re))
        : (re = a[21]);
      var oe = re;
      if (h != null && L) {
        var ae;
        a[22] !== h
          ? ((ae = u.jsx(r("WDSText.react"), {
              type: "Body3Emphasized",
              colorName: "contentDeemphasized",
              dir: "auto",
              children: h,
            })),
            (a[22] = h),
            (a[23] = ae))
          : (ae = a[23]);
        var ie = ae,
          le;
        a[24] !== x
          ? ((le = x
              ? u.jsx(o("WAWebUimUie.react").UIE, {
                  displayName: "StickyDateMarkerDatePicker",
                  escapable: !0,
                  popable: !0,
                  dismissOnWindowResize: !0,
                  requestDismiss: X,
                  children: u.jsx(r("WAWebUimUieMenu.react"), {
                    contextMenu: x,
                  }),
                })
              : null),
            (a[24] = x),
            (a[25] = le))
          : (le = a[25]);
        var se = le,
          ue;
        a[26] !== I
          ? ((ue = (e || (e = r("stylex"))).props(
              y.stickyRefreshed(I),
              F && y.interactable,
            )),
            (a[26] = I),
            (a[27] = ue))
          : (ue = a[27]);
        var ce;
        a[28] !== ee || a[29] !== K || a[30] !== ie
          ? ((ce = K
              ? u.jsx("div", {
                  ref: P,
                  onClick: ee,
                  onMouseEnter: ne,
                  onMouseLeave: oe,
                  role: "button",
                  tabIndex: 0,
                  onKeyDown: function (t) {
                    (t.key === "Enter" || t.key === " ") &&
                      (t.preventDefault(), ee());
                  },
                  className: "x1ypdohk",
                  children: u.jsx(r("WAWebWrapperSystemBubble.react"), {
                    theme: "sticky",
                    children: ie,
                  }),
                })
              : u.jsx(r("WAWebWrapperSystemBubble.react"), {
                  theme: "sticky",
                  children: ie,
                })),
            (a[28] = ee),
            (a[29] = K),
            (a[30] = ie),
            (a[31] = ce))
          : (ce = a[31]);
        var de;
        (a[32] !== se || a[33] !== ue || a[34] !== ce
          ? ((de = u.jsxs(
              "div",
              babelHelpers.extends({}, ue, { children: [ce, se] }),
            )),
            (a[32] = se),
            (a[33] = ue),
            (a[34] = ce),
            (a[35] = de))
          : (de = a[35]),
          (c = de));
      }
      var me;
      return (
        a[36] !== c
          ? ((me = u.jsx(r("WAWebVelocityTransitionGroup"), {
              transitionName: "slide-down-date",
              children: c,
            })),
            (a[36] = c),
            (a[37] = me))
          : (me = a[37]),
        me
      );
    }
    l.default = C;
  },
  98,
);
