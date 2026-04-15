__d(
  "WAWebViewRepliesThreadsModal.react",
  [
    "fbt",
    "WAWebChatPreferenceCollection",
    "WAWebComposeBox.react",
    "WAWebConversationBackground.react",
    "WAWebConversationMsgs.react",
    "WAWebDomScroll",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebFlexBox.react",
    "WAWebIsInThreadsViewContext",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebMultiSelection",
    "WAWebNoop",
    "WAWebThreadsGating",
    "WAWebThreadsViewAutoQuoteContext",
    "WAWebThreadsViewComposeQuotedMsgContext",
    "WAWebThreadsViewFocusMsgContext",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebConversationPanelFiller.react",
    "useWAWebModelValues",
    "useWAWebThreadQuotedMsgIsolation",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useMemo,
      _ = c.useRef,
      f = c.useState,
      g = {
        body: {
          position: "x1n2onr6",
          flex: "x1cqoux5",
          zIndex: "x1vjfegm",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
      };
    function h(e) {
      var t = o("react-compiler-runtime").c(49),
        n = e.chat,
        a = e.threadId,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = ["name"]), (t[0] = i))
        : (i = t[0]);
      var l = o("useWAWebModelValues").useModelValues(n, i),
        c;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = r("WAWebChatPreferenceCollection").getDefault()), (t[1] = c))
        : (c = t[1]);
      var d = c,
        p;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = ["wallpaper", "showDoodle"]), (t[2] = p))
        : (p = t[2]);
      var h = o("useWAWebModelValues").useModelValues(d, p),
        C = f(y),
        b = C[0],
        v;
      if (t[3] !== n.msgs || t[4] !== a.key) {
        var S;
        ((v = (S = n.msgs.get(a.key)) != null ? S : null),
          (t[3] = n.msgs),
          (t[4] = a.key),
          (t[5] = v));
      } else v = t[5];
      var R = v,
        L;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = o("WAWebThreadsGating").isViewRepliesComposerEnabled()),
          (t[6] = L))
        : (L = t[6]);
      var E = L,
        k = _(null),
        I;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = {
            canCompose: E,
            selectable: !1,
            setScrollBottom: function (t) {
              var e;
              return (e = k.current) == null ? void 0 : e.setScrollBottom(t);
            },
            getScrollBottom: function () {
              var e;
              return (e = k.current) == null ? void 0 : e.getScrollBottom();
            },
            onComposeHeightChange: function (t) {
              var e;
              return (e = k.current) == null
                ? void 0
                : e.onComposeHeightChange(t);
            },
          }),
          (t[7] = I))
        : (I = t[7]);
      var T = r("useWAWebConversationPanelFiller.react")(I),
        D = T.filler,
        x = T.handleComposeHeightChange,
        $ = T.msgPanelRef,
        P = r("useWAWebThreadQuotedMsgIsolation")(n),
        N,
        M;
      (t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = function () {
            var e = window.requestAnimationFrame(function () {
              var e;
              (e = k.current) == null || e.setScrollBottom(0);
            });
            return function () {
              return window.cancelAnimationFrame(e);
            };
          }),
          (M = []),
          (t[8] = N),
          (t[9] = M))
        : ((N = t[8]), (M = t[9])),
        m(N, M));
      var w = f(null),
        A = w[0],
        F = w[1],
        O;
      t[10] !== n.msgs
        ? ((O = function (t) {
            var e = n.msgs.findFirst(function (e) {
              return e.id.id === t;
            });
            return e == null ? !1 : (F({ msg: e, highlightMsg: !0 }), !0);
          }),
          (t[10] = n.msgs),
          (t[11] = O))
        : (O = t[11]);
      var B = O,
        W,
        q;
      (t[12] !== A
        ? ((W = function () {
            if (!(A == null || A.msg == null)) {
              var e = A.msg.id.toString(),
                t = window.requestAnimationFrame(function () {
                  var t = document.querySelector(
                      '[data-testid="threads-view-messages"]',
                    ),
                    n =
                      t == null
                        ? void 0
                        : t.querySelector('[data-id="' + CSS.escape(e) + '"]');
                  if (n instanceof HTMLElement) {
                    o("WAWebDomScroll").scrollAt(n);
                    var r = getComputedStyle(n)
                      .getPropertyValue("--WDS-accent-RGB")
                      .trim();
                    r !== "" &&
                      n.animate(
                        [
                          { backgroundColor: "transparent", offset: 0 },
                          {
                            backgroundColor: "rgba(" + r + ", 0.35)",
                            offset: 0.5,
                          },
                          { backgroundColor: "transparent", offset: 1 },
                        ],
                        { duration: 580 },
                      );
                  }
                });
              return function () {
                return window.cancelAnimationFrame(t);
              };
            }
          }),
          (q = [A]),
          (t[12] = A),
          (t[13] = W),
          (t[14] = q))
        : ((W = t[13]), (q = t[14])),
        m(W, q));
      var U, V;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
            title: s._(/*BTDS*/ "Replies"),
            onCancel: o("WAWebModalManager").closeModalManager,
          })),
          (V = { className: "x1phvje8 x1nbhmlj" }),
          (t[15] = U),
          (t[16] = V))
        : ((U = t[15]), (V = t[16]));
      var H;
      t[17] !== l.name
        ? ((H = u.jsx(
            "div",
            babelHelpers.extends({}, V, {
              children: u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                children: l.name,
              }),
            }),
          )),
          (t[17] = l.name),
          (t[18] = H))
        : (H = t[18]);
      var G;
      t[19] !== h.showDoodle || t[20] !== h.wallpaper
        ? ((G = u.jsx(r("WAWebConversationBackground.react"), {
            wallpaper: h.wallpaper,
            showDoodle: h.showDoodle,
          })),
          (t[19] = h.showDoodle),
          (t[20] = h.wallpaper),
          (t[21] = G))
        : (G = t[21]);
      var z;
      if (t[22] !== n || t[23] !== b || t[24] !== A || t[25] !== a) {
        var j;
        ((z = u.jsx(r("WAWebConversationMsgs.react"), {
          ref: k,
          chat: n,
          msgCollection: n.msgs,
          threadId: a,
          selectable: !1,
          focusCtx: A,
          selectedMessages: b,
          onMessageSelect: (j = r("WAWebNoop")),
          onSelectMessages: j,
          onCancelSelectMessages: j,
          notifyChatRendered: j,
          updateOpenedChatInfo: j,
          updateCanShowSpamPanel: j,
          bottomBanners: null,
        })),
          (t[22] = n),
          (t[23] = b),
          (t[24] = A),
          (t[25] = a),
          (t[26] = z));
      } else z = t[26];
      var K;
      t[27] !== $ || t[28] !== G || t[29] !== z
        ? ((K = u.jsxs(o("WAWebFlexBox.react").FlexColumn, {
            ref: $,
            testid: void 0,
            xstyle: g.body,
            children: [G, z],
          })),
          (t[27] = $),
          (t[28] = G),
          (t[29] = z),
          (t[30] = K))
        : (K = t[30]);
      var Q;
      t[31] !== n || t[32] !== x || t[33] !== a
        ? ((Q =
            E &&
            u.jsx(o("WAWebComposeBox.react").ComposeBox, {
              chat: n,
              threadId: a,
              onComposeHeightChange: x,
              onPageUpDown: r("WAWebNoop"),
            })),
          (t[31] = n),
          (t[32] = x),
          (t[33] = a),
          (t[34] = Q))
        : (Q = t[34]);
      var X;
      t[35] !== D || t[36] !== B || t[37] !== K || t[38] !== Q
        ? ((X = u.jsxs(r("WAWebThreadsViewFocusMsgContext").Provider, {
            value: B,
            children: [K, D, Q],
          })),
          (t[35] = D),
          (t[36] = B),
          (t[37] = K),
          (t[38] = Q),
          (t[39] = X))
        : (X = t[39]);
      var Y;
      t[40] !== X || t[41] !== P
        ? ((Y = u.jsx(r("WAWebThreadsViewComposeQuotedMsgContext").Provider, {
            value: P,
            children: X,
          })),
          (t[40] = X),
          (t[41] = P),
          (t[42] = Y))
        : (Y = t[42]);
      var J;
      t[43] !== R || t[44] !== Y
        ? ((J = u.jsx(r("WAWebDrawerBody.react"), {
            overflow: "hidden",
            children: u.jsx(r("WAWebIsInThreadsViewContext").Provider, {
              value: !0,
              children: u.jsx(r("WAWebThreadsViewAutoQuoteContext").Provider, {
                value: R,
                children: Y,
              }),
            }),
          })),
          (t[43] = R),
          (t[44] = Y),
          (t[45] = J))
        : (J = t[45]);
      var Z;
      return (
        t[46] !== H || t[47] !== J
          ? ((Z = u.jsx(o("WAWebModal.react").Modal, {
              type: o("WAWebModal.react").ModalTheme.Box,
              children: u.jsxs(r("WAWebDrawer.react"), { children: [U, H, J] }),
            })),
            (t[46] = H),
            (t[47] = J),
            (t[48] = Z))
          : (Z = t[48]),
        Z
      );
    }
    function y() {
      return new (r("WAWebMultiSelection"))([], C);
    }
    function C(e) {
      return e.id.toString();
    }
    l.default = h;
  },
  226,
);
