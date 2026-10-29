__d(
  "WAWebMessageComposerThemeMatrix.story",
  [
    "Promise",
    "WAWebChatModel",
    "WAWebComposeBoxPopupPanel.react",
    "WAWebContactCollection",
    "WAWebContactModel",
    "WAWebDrawerManagerContext",
    "WAWebMessageComposer.react",
    "WAWebNoop",
    "WAWebNullFunc",
    "WAWebWidFactory",
    "WDSIconIcCalendarMonth.react",
    "WDSIconIcReply.react",
    "WDSIconWdsIcPrivateProcessingAiLockSparkle.react",
    "WDSText.react",
    "WDSThemes",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useMemo,
      _ = d.useRef,
      f = [
        { testid: "message-composer-state-empty", title: "Empty" },
        {
          inputText: "Ready to send",
          testid: "message-composer-state-single-line",
          title: "Single line",
        },
        {
          inputText:
            "Here is a longer composer draft with emoji text, https://example.com, and @Design Review\nSecond line keeps the input expanded.",
          testid: "message-composer-state-multiline",
          title: "Multiline",
        },
        {
          inputText: "Replying with context",
          testid: "message-composer-state-quote-panel",
          title: "Quoted message",
          topPanels: ["quote"],
        },
        {
          inputText: "https://example.com",
          testid: "message-composer-state-link-preview",
          title: "Link preview",
          topPanels: ["link"],
        },
        {
          inputText: "Replying with a linked source",
          testid: "message-composer-state-stacked-panels",
          title: "Stacked panels",
          topPanels: ["quote", "link"],
        },
        {
          inputText: "Shortcut ready",
          slot: "quick_reply",
          testid: "message-composer-state-quick-reply",
          title: "Quick reply slot",
        },
        {
          hasScheduleSend: !0,
          inputText: "Send later",
          testid: "message-composer-state-schedule",
          title: "Schedule send",
        },
        {
          inputText: "Rewrite this response",
          slot: "wwai",
          testid: "message-composer-state-wwai",
          title: "WWAI slot",
        },
      ],
      g = {
        page: {
          minHeight: "xg6iff7",
          backgroundColor: "xhjsbib",
          color: "x14ug900",
          paddingTop: "xl7twdi",
          paddingInlineEnd: "xyo0t3i",
          paddingBottom: "xvg22vi",
          paddingInlineStart: "xb0esv5",
          $$css: !0,
        },
        topPanelIcon: { color: "xhslqc4", flexShrink: "x2lah0s", $$css: !0 },
        icon: { color: "x15rks2t", $$css: !0 },
      };
    function h() {
      var e = new URLSearchParams(window.location.search).get("composer_theme");
      switch (e) {
        case "wds_dark":
        case "wds_smb_light":
        case "wds_smb_dark":
          return e;
        default:
          return "wds_light";
      }
    }
    function y(e) {
      switch (e) {
        case "wds_dark":
          return o("WDSThemes").WDSDarkTheme;
        case "wds_smb_light":
          return o("WDSThemes").WDSSMBLightTheme;
        case "wds_smb_dark":
          return o("WDSThemes").WDSSMBDarkTheme;
        case "wds_light":
          return o("WDSThemes").WDSLightTheme;
      }
    }
    function C() {
      var e = o("WAWebWidFactory").createUserWidOrThrow("22222222222@c.us"),
        t = new (r("WAWebContactModel"))({
          id: e,
          name: "Theme Screenshot Contact",
        });
      return (
        o("WAWebContactCollection").ContactCollection.add(t),
        new (o("WAWebChatModel").Chat)({ id: e })
      );
    }
    function b() {
      if (document.getElementById("expressions-panel-container") == null) {
        var e = document.createElement("div");
        ((e.id = "expressions-panel-container"), document.body.appendChild(e));
      }
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.children,
        a = e.theme,
        i,
        l;
      (t[0] !== a
        ? ((i = function () {
            var e,
              t = document.documentElement,
              n = document.body,
              o = (s || (s = r("stylex")))(y(a)).split(" ").filter(Boolean);
            return (
              (e = t.classList).add.apply(e, o),
              n.classList.toggle(
                "dark",
                a === "wds_dark" || a === "wds_smb_dark",
              ),
              n.classList.toggle(
                "smb-colors",
                a === "wds_smb_light" || a === "wds_smb_dark",
              ),
              function () {
                var e;
                ((e = t.classList).remove.apply(e, o),
                  n.classList.remove("dark", "smb-colors"));
              }
            );
          }),
          (l = [a]),
          (t[0] = a),
          (t[1] = i),
          (t[2] = l))
        : ((i = t[1]), (l = t[2])),
        m(i, l));
      var u;
      t[3] !== a
        ? ((u = (s || (s = r("stylex"))).props(y(a), g.page)),
          (t[3] = a),
          (t[4] = u))
        : (u = t[4]);
      var d;
      return (
        t[5] !== n || t[6] !== u
          ? ((d = c.jsx("div", babelHelpers.extends({}, u, { children: n }))),
            (t[5] = n),
            (t[6] = u),
            (t[7] = d))
          : (d = t[7]),
        d
      );
    }
    function S(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.isTopmostPanel,
        a = e.type,
        i = a === "quote",
        l,
        s;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = {
            className:
              "x9f619 x78zum5 x6s0dn4 x8a3fw1 x1aj3ljl xh8yej3 x1wiwyrm x16ovd2e x12xbjc7 x1iw51ew xde1mab x14ug900",
          }),
          (s = c.jsx("div", {
            className:
              "x1nb5oqr xkh2ocl xyi3aci xwf5gio x1p453bz x1suzm8a xfn3atn x2lah0s",
          })),
          (t[0] = l),
          (t[1] = s))
        : ((l = t[0]), (s = t[1]));
      var u;
      t[2] !== i
        ? ((u = i
            ? c.jsx(r("WDSIconIcReply.react"), { iconXstyle: g.topPanelIcon })
            : c.jsx(r("WDSIconIcCalendarMonth.react"), {
                iconXstyle: g.topPanelIcon,
              })),
          (t[2] = i),
          (t[3] = u))
        : (u = t[3]);
      var d;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = { className: "xeuugli" }), (t[4] = d))
        : (d = t[4]);
      var m = i ? "Previous message" : "Example link preview",
        p;
      t[5] !== m
        ? ((p = c.jsx(r("WDSText.react"), {
            type: "Body2Emphasized",
            colorName: "contentDefault",
            children: m,
          })),
          (t[5] = m),
          (t[6] = p))
        : (p = t[6]);
      var _ = i ? "The deterministic message being answered." : "example.com",
        f;
      t[7] !== _
        ? ((f = c.jsx(r("WDSText.react"), {
            type: "Body3",
            colorName: "contentDeemphasized",
            children: _,
          })),
          (t[7] = _),
          (t[8] = f))
        : (f = t[8]);
      var h;
      t[9] !== p || t[10] !== f
        ? ((h = c.jsxs(
            "div",
            babelHelpers.extends({}, d, { children: [p, f] }),
          )),
          (t[9] = p),
          (t[10] = f),
          (t[11] = h))
        : (h = t[11]);
      var y;
      t[12] !== u || t[13] !== h
        ? ((y = c.jsxs(
            "div",
            babelHelpers.extends({}, l, { children: [s, u, h] }),
          )),
          (t[12] = u),
          (t[13] = h),
          (t[14] = y))
        : (y = t[14]);
      var C;
      return (
        t[15] !== n || t[16] !== y
          ? ((C = c.jsx(r("WAWebComposeBoxPopupPanel.react"), {
              isTopmostPanel: n,
              onOmit: r("WAWebNoop"),
              children: y,
            })),
            (t[15] = n),
            (t[16] = y),
            (t[17] = C))
          : (C = t[17]),
        C
      );
    }
    function R(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.slot,
        a =
          n === "quick_reply"
            ? "message-composer-quick-reply-slot"
            : "message-composer-wwai-slot",
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = {
            className:
              "x78zum5 x6s0dn4 xl56j7k x100vrsf x1vqgdyp x2lah0s xhslqc4",
          }),
          (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] !== n
        ? ((l =
            n === "quick_reply"
              ? c.jsx(r("WDSIconIcReply.react"), { iconXstyle: g.icon })
              : c.jsx(r("WDSIconWdsIcPrivateProcessingAiLockSparkle.react"), {
                  iconXstyle: g.icon,
                })),
          (t[1] = n),
          (t[2] = l))
        : (l = t[2]);
      var s;
      return (
        t[3] !== a || t[4] !== l
          ? ((s = c.jsx(
              "div",
              babelHelpers.extends({ "data-testid": a }, i, { children: l }),
            )),
            (t[3] = a),
            (t[4] = l),
            (t[5] = s))
          : (s = t[5]),
        s
      );
    }
    function L(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.text,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = {
            className: "x9f619 xh8yej3 x16ovd2e x12xbjc7 x1iw51ew xde1mab",
          }),
          (t[0] = r))
        : (r = t[0]);
      var a = n != null ? n : "Type a message",
        i;
      return (
        t[1] !== a
          ? ((i = c.jsx(
              "div",
              babelHelpers.extends(
                {
                  "aria-label": "Type a message",
                  role: "textbox",
                  "data-testid": "message-composer-rich-text-input",
                },
                r,
                { children: a },
              ),
            )),
            (t[1] = a),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    function E(e) {
      var t,
        n = o("react-compiler-runtime").c(28),
        a = e.chat,
        i = e.state,
        l = _(null),
        s = _(null),
        u = _(null),
        d;
      if (n[0] !== i.topPanels) {
        var m;
        ((d = (m = i.topPanels) != null ? m : []),
          (n[0] = i.topPanels),
          (n[1] = d));
      } else d = n[1];
      var p = d,
        f = ((t = i.inputText) != null ? t : "") !== "",
        g = i.testid,
        h,
        y;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = { className: "xeuugli" }),
          (y = { className: "xefnzgg" }),
          (n[2] = h),
          (n[3] = y))
        : ((h = n[2]), (y = n[3]));
      var C;
      n[4] !== i.title
        ? ((C = c.jsx(
            "div",
            babelHelpers.extends({}, y, {
              children: c.jsx(r("WDSText.react"), {
                type: "Body3Emphasized",
                colorName: "contentDeemphasized",
                children: i.title,
              }),
            }),
          )),
          (n[4] = i.title),
          (n[5] = C))
        : (C = n[5]);
      var b;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = { className: "x9f619 xh8yej3 x1r3qdcx" }), (n[6] = b))
        : (b = n[6]);
      var v;
      n[7] !== i.testid || n[8] !== p
        ? ((v =
            p.length > 0 &&
            c.jsx("div", {
              className: "x9f619 x1uvdrpn x14mko6t",
              children: p.map(function (e, t) {
                return c.jsx(
                  S,
                  { isTopmostPanel: t === 0, type: e },
                  i.testid + "-" + e,
                );
              }),
            })),
          (n[7] = i.testid),
          (n[8] = p),
          (n[9] = v))
        : (v = n[9]);
      var E = p.length > 0,
        I;
      n[10] !== i.inputText
        ? ((I = c.jsx(L, { text: i.inputText })),
          (n[10] = i.inputText),
          (n[11] = I))
        : (I = n[11]);
      var T = i.hasScheduleSend === !0 ? r("WAWebNoop") : null,
        D;
      n[12] !== i.slot
        ? ((D = i.slot != null ? c.jsx(R, { slot: i.slot }) : null),
          (n[12] = i.slot),
          (n[13] = D))
        : (D = n[13]);
      var x;
      if (
        n[14] !== a ||
        n[15] !== f ||
        n[16] !== T ||
        n[17] !== D ||
        n[18] !== E ||
        n[19] !== I
      ) {
        var $;
        ((x = c.jsx(r("WAWebMessageComposer.react"), {
          chat: a,
          closePttComposer: ($ = r("WAWebNoop")),
          expressionsPanelPickerRef: l,
          expressionsPanelWrapperRef: s,
          getCurrentComposeContent: o("WAWebNullFunc").returnNull,
          handleInputFocus: $,
          handleMetaUpDebounced: $,
          handlePanelsGif: $,
          handlePanelsSticker: $,
          handlePanelsStickerFromStore: $,
          handleSendText: $,
          handleTab: $,
          hasTextState: f,
          hasTopPanel: E,
          input: I,
          inputHotkeyRef: u,
          isMessageToBot: !1,
          onAlternateSendFlowStart: $,
          onPttSend: $,
          onScheduleSend: T,
          pttComposerActive: !1,
          recordingSession: null,
          replaceInputSelection: $,
          richTextInputRef: null,
          startRecording: k,
          updateTextAfterMediaDrawerClose: $,
          wwaiButton: D,
        })),
          (n[14] = a),
          (n[15] = f),
          (n[16] = T),
          (n[17] = D),
          (n[18] = E),
          (n[19] = I),
          (n[20] = x));
      } else x = n[20];
      var P;
      n[21] !== x || n[22] !== v
        ? ((P = c.jsxs(
            "div",
            babelHelpers.extends({}, b, { children: [v, x] }),
          )),
          (n[21] = x),
          (n[22] = v),
          (n[23] = P))
        : (P = n[23]);
      var N;
      return (
        n[24] !== i.testid || n[25] !== P || n[26] !== C
          ? ((N = c.jsxs(
              "div",
              babelHelpers.extends({ "data-testid": g }, h, {
                children: [C, P],
              }),
            )),
            (n[24] = i.testid),
            (n[25] = P),
            (n[26] = C),
            (n[27] = N))
          : (N = n[27]),
        N
      );
    }
    function k() {
      return (e || (e = n("Promise"))).resolve();
    }
    function I() {
      var e = o("react-compiler-runtime").c(3);
      b();
      var t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = h()), (e[0] = t))
        : (t = e[0]);
      var n = t,
        r;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = C()), (e[1] = r))
        : (r = e[1]);
      var a = r,
        i;
      return (
        e[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = c.jsx(
              o("WAWebDrawerManagerContext").DrawerManagerContextProvider,
              {
                children: c.jsx(v, {
                  theme: n,
                  children: c.jsx("div", {
                    "data-testid": "message-composer-screenshot-matrix",
                    className:
                      "x9f619 xrvj5dj xnby9oq x1f0uite xs2akgl xh8yej3 x10xiq2s xvc5jky x11t971q",
                    children: f.map(function (e) {
                      return c.jsx(E, { chat: a, state: e }, e.testid);
                    }),
                  }),
                }),
              },
            )),
            (e[2] = i))
          : (i = e[2]),
        i
      );
    }
    var T = {
      storyName: "WAWebMessageComposerThemeMatrix",
      component: I,
      description:
        "Deterministic message composer states for consumer and SMB theme screenshot coverage.",
      examples: [
        function () {
          return c.jsx(I, {});
        },
      ],
    };
    l.default = T;
  },
  98,
);
