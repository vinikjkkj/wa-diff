__d(
  "WAWebBizAiSmartComposerImpressionContext",
  [
    "WALogger",
    "WAWebBizAiSmartComposerLogEvents",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "useWAWebOnUnmount",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useContext,
      p = c.useRef,
      _ = { current: new Set() },
      f = new WeakMap(),
      g = u.createContext(_),
      h = new WeakMap(),
      y = new WeakMap(),
      C = new WeakMap(),
      b = new WeakMap();
    function v(t) {
      var n = o("react-compiler-runtime").c(4),
        a = t.children,
        i;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = new Set()), (n[0] = i))
        : (i = n[0]);
      var l = p(i),
        s;
      (n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = function () {
            var t = C.get(l);
            C.delete(l);
            for (var n of t != null ? t : [])
              try {
                n();
              } catch (t) {
                var a = t;
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[SmartComposer] session-exit handler failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(a))
                  .sendLogs(
                    "biz-ai-smart-composer-session-exit-handler-failed",
                  );
              }
            var i = f.get(l);
            i != null && (f.delete(l), i.onExit(i.card));
          }),
          (n[1] = s))
        : (s = n[1]),
        r("useWAWebOnUnmount")(s));
      var c;
      return (
        n[2] !== a
          ? ((c = u.jsx(g.Provider, { value: l, children: a })),
            (n[2] = a),
            (n[3] = c))
          : (c = n[3]),
        c
      );
    }
    function S() {
      return m(g);
    }
    function R(e, t) {
      if (e === _) return function () {};
      var n = C.get(e);
      return (
        n == null && ((n = new Set()), C.set(e, n)),
        n.add(t),
        function () {
          var n = C.get(e);
          (n == null || n.delete(t),
            (n == null ? void 0 : n.size) === 0 && C.delete(e));
        }
      );
    }
    function L(e) {
      var t, n;
      return (t = (n = f.get(e)) == null ? void 0 : n.card) != null ? t : null;
    }
    function E(e, t, n) {
      var r;
      if (e === _) return t;
      var o = (r = f.get(e)) == null ? void 0 : r.card,
        a = t;
      if (
        (o == null ? void 0 : o.stanzaId) != null &&
        o.stanzaId === t.stanzaId
      ) {
        var i,
          l = (i = o.trigger) != null ? i : t.trigger;
        (t.status === "quota_handoff" && (l = null),
          (a = babelHelpers.extends({}, t, { trigger: l })));
      }
      return (f.set(e, { card: a, onExit: n }), a);
    }
    function k(e, t) {
      var n;
      ((n = f.get(e)) == null ? void 0 : n.card) === t && f.delete(e);
    }
    function I(e) {
      f.delete(e);
    }
    function T(e, t) {
      if (e !== _) {
        var n = t.status;
        if (!B(n)) {
          b.delete(e);
          return;
        }
        var r = b.get(e);
        if (W(r, t)) {
          var a = q(t, n);
          (b.set(e, a),
            a.actions.add("appear"),
            o("WAWebBizAiSmartComposerLogEvents").logSuggestionCardFunnel({
              action: "appear",
              cardStatus: a.status,
              cardType: a.cardType,
              errorCode: a.errorCode,
              funnelId: a.funnelId,
            }));
          return;
        }
        if (r != null) {
          var i = r.status !== n;
          ((r.cardType = t.cardType),
            (r.errorCode = t.errorCode),
            (r.stanzaId = t.stanzaId),
            (r.status = n),
            !(!i || r.actions.has("transition")) &&
              (r.actions.add("transition"),
              o("WAWebBizAiSmartComposerLogEvents").logSuggestionCardFunnel({
                action: "transition",
                cardStatus: r.status,
                cardType: r.cardType,
                errorCode: r.errorCode,
                funnelId: r.funnelId,
              })));
        }
      }
    }
    function D(e, t) {
      if (e === _) return null;
      var n = b.get(e);
      if (n == null) return null;
      if (t === "reply_message") return (b.delete(e), null);
      if (n.actions.has("dismiss")) return null;
      (n.actions.add("dismiss"),
        o("WAWebBizAiSmartComposerLogEvents").logSuggestionCardFunnel({
          action: "dismiss",
          cardStatus: n.status,
          cardType: n.cardType,
          dismissReason: t,
          errorCode: n.errorCode,
          funnelId: n.funnelId,
        }));
      var r = n.cardType,
        a = n.funnelId,
        i = n.status;
      return t !== "tapped" || i !== "success" || r == null
        ? null
        : function (e) {
            n.actions.has("sent") ||
              (n.actions.add("sent"),
              o("WAWebBizAiSmartComposerLogEvents").logSuggestionCardFunnel({
                action: "sent",
                cardStatus: "success",
                cardType: r,
                editDistanceRatio: e,
                funnelId: a,
              }));
          };
    }
    function x(e) {
      e !== _ && b.delete(e);
    }
    function $(e, t) {
      return e === _ || e.current.has(t) ? !1 : (e.current.add(t), !0);
    }
    function P(e, t) {
      if (e !== _) {
        e.current.delete(t);
        var n = h.get(e);
        n != null && (n.delete(t), n.size === 0 && h.delete(e));
      }
    }
    function N(e, t) {
      if (e !== _)
        for (var n of e.current) n.startsWith(t) && e.current.delete(n);
    }
    function M(e, t, n) {
      return e === _ || !e.current.delete(t) ? !1 : (e.current.add(n), !0);
    }
    function w(e, t, n) {
      if (e === _) return n;
      var r = h.get(e);
      r == null && ((r = new Map()), h.set(e, r));
      var o = r.get(t);
      return o != null ? o : (r.set(t, n), n);
    }
    function A(e, t, n) {
      if (e !== _) {
        var r = y.get(e);
        (r == null && ((r = new Map()), y.set(e, r)), r.set(t, n));
      }
    }
    function F(e, t) {
      var n;
      return e === _ ? null : (n = y.get(e)) == null ? void 0 : n.get(t);
    }
    function O(e, t, n) {
      if (e !== _) {
        var r = y.get(e);
        r == null ||
          (n != null && r.get(t) !== n) ||
          (r.delete(t), r.size === 0 && y.delete(e));
      }
    }
    function B(e) {
      return e === "error" || e === "loading" || e === "success";
    }
    function W(e, t) {
      return e == null
        ? !0
        : e.actions.has("dismiss")
          ? e.status !== t.status || e.stanzaId !== t.stanzaId
          : e.status !== "loading" &&
            (e.stanzaId !== t.stanzaId || t.status === "loading");
    }
    function q(e, t) {
      return {
        actions: new Set(),
        cardType: e.cardType,
        errorCode: e.errorCode,
        funnelId: Math.floor(
          self.crypto.getRandomValues(new Uint32Array(1))[0] / 2,
        ),
        stanzaId: e.stanzaId,
        status: t,
      };
    }
    ((l.WAWebBizAiSmartComposerImpressionProvider = v),
      (l.useWAWebBizAiSmartComposerImpressions = S),
      (l.registerSmartComposerSessionExitHandler = R),
      (l.getSmartComposerShownCard = L),
      (l.registerSmartComposerShownCard = E),
      (l.forgetSmartComposerShownCard = k),
      (l.discardSmartComposerShownCardWithoutExit = I),
      (l.recordSmartComposerFunnelCardState = T),
      (l.dismissSmartComposerFunnel = D),
      (l.resetSmartComposerFunnel = x),
      (l.markSmartComposerImpression = $),
      (l.forgetSmartComposerImpression = P),
      (l.forgetSmartComposerImpressionsWithPrefix = N),
      (l.moveSmartComposerImpression = M),
      (l.rememberSmartComposerSuggestionAttribution = w),
      (l.rememberSmartComposerPendingSuggestion = A),
      (l.getSmartComposerPendingSuggestion = F),
      (l.forgetSmartComposerPendingSuggestion = O));
  },
  98,
);
