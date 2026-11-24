__d(
  "WAWebBizAiSmartComposerImpressionContext",
  [
    "WALogger",
    "WAWebBizAiSmartComposerLogEvents",
    "getErrorSafe",
    "react",
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
      b = new WeakMap(),
      v = new WeakMap();
    function S(t) {
      var n = t.children,
        a = p(new Set());
      return (
        r("useWAWebOnUnmount")(
          d(function () {
            var t = C.get(a);
            C.delete(a);
            for (var n of t != null ? t : [])
              try {
                n();
              } catch (t) {
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[SmartComposer] session-exit handler failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t))
                  .sendLogs(
                    "biz-ai-smart-composer-session-exit-handler-failed",
                  );
              }
            var i = f.get(a);
            (i != null && (f.delete(a), i.onExit(i.card)), $(a, "exit_chat"));
          }, []),
        ),
        u.jsx(g.Provider, { value: a, children: n })
      );
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R() {
      return m(g);
    }
    function L(e, t) {
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
    function E(e) {
      var t, n;
      return (t = (n = f.get(e)) == null ? void 0 : n.card) != null ? t : null;
    }
    function k(e, t, n) {
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
    function I(e, t) {
      var n;
      ((n = f.get(e)) == null ? void 0 : n.card) === t && f.delete(e);
    }
    function T(e) {
      f.delete(e);
    }
    function D(e, t) {
      if (e !== _) {
        var n = t.status;
        if (!U(n)) {
          b.delete(e);
          return;
        }
        var r = b.get(e);
        if (V(r, t)) {
          var a = H(t, n);
          (b.set(e, a),
            v.delete(e),
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
    function x(e, t) {
      if (e === _) return null;
      var n = b.get(e);
      return n == null
        ? null
        : t === "reply_message"
          ? (b.delete(e), null)
          : G(n, t) && t === "tapped"
            ? z(n)
            : null;
    }
    function $(e, t) {
      var n = v.get(e);
      n != null && (v.delete(e), G(n, t));
    }
    function P(e) {
      if (e === _) return null;
      var t = b.get(e);
      if (t == null || t.actions.has("dismiss")) return null;
      var n = z(t);
      return n == null
        ? null
        : (v.set(e, t),
          function (r) {
            t.actions.has("dismiss") ||
              (t.actions.add("dismiss"), v.get(e) === t && v.delete(e), n(r));
          });
    }
    function N(e) {
      e !== _ && b.delete(e);
    }
    function M(e, t) {
      return e === _ || e.current.has(t) ? !1 : (e.current.add(t), !0);
    }
    function w(e, t) {
      if (e !== _) {
        e.current.delete(t);
        var n = h.get(e);
        n != null && (n.delete(t), n.size === 0 && h.delete(e));
      }
    }
    function A(e, t) {
      if (e !== _)
        for (var n of e.current) n.startsWith(t) && e.current.delete(n);
    }
    function F(e, t, n) {
      return e === _ || !e.current.delete(t) ? !1 : (e.current.add(n), !0);
    }
    function O(e, t, n) {
      if (e === _) return n;
      var r = h.get(e);
      r == null && ((r = new Map()), h.set(e, r));
      var o = r.get(t);
      return o != null ? o : (r.set(t, n), n);
    }
    function B(e, t, n) {
      if (e !== _) {
        var r = y.get(e);
        (r == null && ((r = new Map()), y.set(e, r)), r.set(t, n));
      }
    }
    function W(e, t) {
      var n;
      return e === _ ? null : (n = y.get(e)) == null ? void 0 : n.get(t);
    }
    function q(e, t, n) {
      if (e !== _) {
        var r = y.get(e);
        r == null ||
          (n != null && r.get(t) !== n) ||
          (r.delete(t), r.size === 0 && y.delete(e));
      }
    }
    function U(e) {
      return e === "error" || e === "loading" || e === "success";
    }
    function V(e, t) {
      return e == null
        ? !0
        : e.actions.has("dismiss")
          ? e.status !== t.status || e.stanzaId !== t.stanzaId
          : e.status !== "loading" &&
            (e.stanzaId !== t.stanzaId || t.status === "loading");
    }
    function H(e, t) {
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
    function G(e, t) {
      return e.actions.has("dismiss")
        ? !1
        : (e.actions.add("dismiss"),
          o("WAWebBizAiSmartComposerLogEvents").logSuggestionCardFunnel({
            action: "dismiss",
            cardStatus: e.status,
            cardType: e.cardType,
            dismissReason: t,
            errorCode: e.errorCode,
            funnelId: e.funnelId,
          }),
          !0);
    }
    function z(e) {
      var t = e.cardType,
        n = e.funnelId,
        r = e.status;
      return r !== "success" || t == null
        ? null
        : function (r) {
            e.actions.has("sent") ||
              (e.actions.add("sent"),
              o("WAWebBizAiSmartComposerLogEvents").logSuggestionCardFunnel({
                action: "sent",
                cardStatus: "success",
                cardType: t,
                editDistanceRatio: r,
                funnelId: n,
              }));
          };
    }
    ((l.WAWebBizAiSmartComposerImpressionProvider = S),
      (l.useWAWebBizAiSmartComposerImpressions = R),
      (l.registerSmartComposerSessionExitHandler = L),
      (l.getSmartComposerShownCard = E),
      (l.registerSmartComposerShownCard = k),
      (l.forgetSmartComposerShownCard = I),
      (l.discardSmartComposerShownCardWithoutExit = T),
      (l.recordSmartComposerFunnelCardState = D),
      (l.dismissSmartComposerFunnel = x),
      (l.dismissHandedOffSmartComposerFunnel = $),
      (l.captureSmartComposerFunnel = P),
      (l.resetSmartComposerFunnel = N),
      (l.markSmartComposerImpression = M),
      (l.forgetSmartComposerImpression = w),
      (l.forgetSmartComposerImpressionsWithPrefix = A),
      (l.moveSmartComposerImpression = F),
      (l.rememberSmartComposerSuggestionAttribution = O),
      (l.rememberSmartComposerPendingSuggestion = B),
      (l.getSmartComposerPendingSuggestion = W),
      (l.forgetSmartComposerPendingSuggestion = q));
  },
  98,
);
