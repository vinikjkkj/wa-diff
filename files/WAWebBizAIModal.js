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
      var t = e.ariaLabel,
        n = e.content,
        a = m(!1),
        i = a[0],
        l = a[1],
        s = d(function (e) {
          (h(e), l(!0));
        }, []);
      return u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        handlers: { esc: i ? g : o("WAWebStopEvent").stopPropagation },
        children: u.jsx(o("WAWebModal.react").Modal, {
          ariaLabel: t,
          autoHeight: !0,
          onOverlayClick: i ? void 0 : r("WAWebNoop"),
          type: o("WAWebModal.react").ModalTheme.Auto,
          children: u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
            fallback: function () {
              return u.jsx(r("WAWebBizAIQueryError.react"), {
                focusOnMount: !0,
                testid: "biz-ai-entrypoint-modal-error",
              });
            },
            name: "biz-ai-entrypoint-modal-boundary",
            onError: s,
            children: u.jsx(u.Fragment, { children: n }),
          }),
        }),
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      (e.stopPropagation(), o("WAWebModalManager").ModalManager.close());
    }
    function h(t) {
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
