__d(
  "WAWebAttachMenuBarItem.react",
  [
    "fbt",
    "WAWebAttachMenuPopup.react",
    "WAWebAttachmentMenuLogger",
    "WAWebCmd",
    "WAWebDrawerManagerContext",
    "WAWebDropdown.react",
    "WAWebPlusRoundedIcon.react",
    "WAWebStateUtils",
    "WAWebTabOrder",
    "WAWebUim",
    "WAWebUseBusinessProfile.react",
    "WDSMenuBarItem.react",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useImperativeHandle,
      p = d.useRef,
      _ = d.useState;
    function f(t) {
      var n = o("react-compiler-runtime").c(35),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        u = l.chat,
        d = l.questionReplyQuotedMessage,
        f = l.questionType,
        g = l.threadId,
        h = p(null),
        y = p(null),
        C = _(null),
        b = C[1],
        v;
      (n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = ["isBizBot3p"]), (n[3] = v))
        : (v = n[3]),
        o("WAWebUseBusinessProfile.react").useBusinessProfile(u.id, v));
      var S = o("WAWebDrawerManagerContext").useDrawerManagerContext("mid"),
        R;
      n[4] !== S
        ? ((R = function (t) {
            var e,
              n = (e = S.existsDrawer()) != null ? e : !1;
            n && t.preventDefault();
          }),
          (n[4] = S),
          (n[5] = R))
        : (R = n[5]);
      var L = R,
        E;
      n[6] !== u ||
      n[7] !== L ||
      n[8] !== a.getComposeBoxEditorRef ||
      n[9] !== a.getComposeContents ||
      n[10] !== a.onMenuComplete ||
      n[11] !== d ||
      n[12] !== f ||
      n[13] !== g
        ? ((E = function (t) {
            if ((t && L(t), y.current)) {
              y.current.open();
              return;
            }
            (h.current &&
              b({
                menu: c.jsx(r("WAWebAttachMenuPopup.react"), {
                  chat: o("WAWebStateUtils").unproxy(u),
                  getComposeContents: a.getComposeContents,
                  getComposeBoxEditorRef: a.getComposeBoxEditorRef,
                  onMenuComplete: a.onMenuComplete,
                  questionType: f,
                  questionReplyQuotedMessage: d,
                  threadId: g,
                }),
                dirY: o("WAWebDropdown.react").DirY.TOP,
                dirX: o("WAWebDropdown.react").DirX.CENTER,
                type: o("WAWebDropdown.react").MenuType.AttachMenuPopup,
                flipOnRTL: !0,
                testid: "attach-menu-popup",
                anchor: h.current,
                offsetY: -25,
              }),
              o(
                "WAWebAttachmentMenuLogger",
              ).AttachmentMenuLogger.logAttachmentMenuOpen(u));
          }),
          (n[6] = u),
          (n[7] = L),
          (n[8] = a.getComposeBoxEditorRef),
          (n[9] = a.getComposeContents),
          (n[10] = a.onMenuComplete),
          (n[11] = d),
          (n[12] = f),
          (n[13] = g),
          (n[14] = E))
        : (E = n[14]);
      var k = E,
        I;
      (n[15] !== k
        ? ((I = function () {
            return {
              open: function () {
                k();
              },
            };
          }),
          (n[15] = k),
          (n[16] = I))
        : (I = n[16]),
        m(i, I));
      var T;
      n[17] !== u
        ? ((T = function (t) {
            (t === o("WAWebUim").DismissReason.UIM_INTERACTION &&
              o(
                "WAWebAttachmentMenuLogger",
              ).AttachmentMenuLogger.logAttachmentMenuClose(u),
              b(null));
          }),
          (n[17] = u),
          (n[18] = T))
        : (T = n[18]);
      var D = T;
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "close_context_menu",
        D,
      );
      var x;
      n[19] !== u
        ? ((x = o("WAWebStateUtils").unproxy(u)), (n[19] = u), (n[20] = x))
        : (x = n[20]);
      var $;
      n[21] !== a.getComposeBoxEditorRef ||
      n[22] !== a.getComposeContents ||
      n[23] !== a.onMenuComplete ||
      n[24] !== d ||
      n[25] !== f ||
      n[26] !== x ||
      n[27] !== g
        ? (($ = c.jsx(r("WAWebAttachMenuPopup.react"), {
            chat: x,
            getComposeContents: a.getComposeContents,
            getComposeBoxEditorRef: a.getComposeBoxEditorRef,
            onMenuComplete: a.onMenuComplete,
            questionType: f,
            questionReplyQuotedMessage: d,
            threadId: g,
          })),
          (n[21] = a.getComposeBoxEditorRef),
          (n[22] = a.getComposeContents),
          (n[23] = a.onMenuComplete),
          (n[24] = d),
          (n[25] = f),
          (n[26] = x),
          (n[27] = g),
          (n[28] = $))
        : ($ = n[28]);
      var P = $,
        N;
      n[29] !== u
        ? ((N = function () {
            o(
              "WAWebAttachmentMenuLogger",
            ).AttachmentMenuLogger.logAttachmentMenuOpen(u);
          }),
          (n[29] = u),
          (n[30] = N))
        : (N = n[30]);
      var M;
      n[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = s._(/*BTDS*/ "Attach")), (n[31] = M))
        : (M = n[31]);
      var w;
      return (
        n[32] !== P || n[33] !== N
          ? ((w = c.jsx(r("WDSMenuBarItem.react"), {
              imperativeRef: y,
              ref: h,
              onClick: N,
              icon: o("WAWebPlusRoundedIcon.react").PlusRoundedIcon,
              tabOrder: o("WAWebTabOrder").TAB_ORDER.COMPOSE_BOX_ATTACH_BUTTON,
              title: M,
              testid: void 0,
              wdsMenuToRender: P,
              menuAlign: "middle",
              menuPosition: "above",
            })),
            (n[32] = P),
            (n[33] = N),
            (n[34] = w))
          : (w = n[34]),
        w
      );
    }
    l.default = f;
  },
  226,
);
