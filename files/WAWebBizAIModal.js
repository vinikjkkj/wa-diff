__d(
  "WAWebBizAIModal",
  [
    "WALogger",
    "WAWebBizAIQueryError.react",
    "WAWebBizAIRelayBoundary.react",
    "WAWebErrorBoundary.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebStopEvent",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useState;
    function p(e, t, n) {
      var a = u.jsx(o("WAWebModal.react").Modal, {
        ariaLabel: t,
        autoHeight: !0,
        onOverlayClick: n,
        type: o("WAWebModal.react").ModalTheme.Auto,
        children: u.jsx(r("WAWebBizAIRelayBoundary.react"), { children: e }),
      });
      if (n == null) {
        o("WAWebModalManager").ModalManager.open(a);
        return;
      }
      o("WAWebModalManager").ModalManager.open(
        u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
          "data-testid": "biz-ai-modal-dismissal-keys",
          handlers: { esc: o("WAWebStopEvent").stopPropagation },
          children: a,
        }),
        { blockClose: !0 },
      );
    }
    function _(e, t) {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(f, { ariaLabel: t, content: e }),
        { blockClose: !0 },
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.ariaLabel,
        a = e.content,
        i = m(!1),
        l = i[0],
        s = i[1],
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = function (t) {
            (y(t), s(!0));
          }),
          (t[0] = c))
        : (c = t[0]);
      var d = c,
        p = l ? h : o("WAWebStopEvent").stopPropagation,
        _;
      t[1] !== p ? ((_ = { esc: p }), (t[1] = p), (t[2] = _)) : (_ = t[2]);
      var f = l ? void 0 : r("WAWebNoop"),
        C;
      t[3] !== a
        ? ((C = u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
            fallback: g,
            name: "biz-ai-entrypoint-modal-boundary",
            onError: d,
            children: u.jsx(u.Fragment, { children: a }),
          })),
          (t[3] = a),
          (t[4] = C))
        : (C = t[4]);
      var b;
      t[5] !== n || t[6] !== f || t[7] !== C
        ? ((b = u.jsx(o("WAWebModal.react").Modal, {
            ariaLabel: n,
            autoHeight: !0,
            onOverlayClick: f,
            type: o("WAWebModal.react").ModalTheme.Auto,
            children: C,
          })),
          (t[5] = n),
          (t[6] = f),
          (t[7] = C),
          (t[8] = b))
        : (b = t[8]);
      var v;
      return (
        t[9] !== _ || t[10] !== b
          ? ((v = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              handlers: _,
              children: b,
            })),
            (t[9] = _),
            (t[10] = b),
            (t[11] = v))
          : (v = t[11]),
        v
      );
    }
    function g() {
      return u.jsx(r("WAWebBizAIQueryError.react"), {
        focusOnMount: !0,
        testid: "biz-ai-entrypoint-modal-error",
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      (e.stopPropagation(), o("WAWebModalManager").ModalManager.close());
    }
    function y(t) {
      o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "BizAI entry point modal render failed",
            ])),
        )
        .catching(t)
        .sendLogs("biz-ai-entrypoint-modal-render-failed");
    }
    ((l.openBizAIModal = p), (l.openBizAIEntryPointModal = _));
  },
  98,
);
