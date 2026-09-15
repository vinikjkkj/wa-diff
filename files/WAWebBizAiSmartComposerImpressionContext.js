__d(
  "WAWebBizAiSmartComposerImpressionContext",
  [
    "WAWebBizAiSmartComposerLogEvents",
    "react",
    "react-compiler-runtime",
    "useWAWebOnUnmount",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useContext,
      m = u.useRef,
      p = { current: new Set() },
      _ = new WeakMap(),
      f = s.createContext(p),
      g = new WeakMap(),
      h = new WeakMap(),
      y = new WeakMap();
    function C(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.children,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = new Set()), (t[0] = a))
        : (a = t[0]);
      var i = m(a),
        l;
      (t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = function () {
            var e = _.get(i);
            e != null && (_.delete(i), e.onExit(e.card));
          }),
          (t[1] = l))
        : (l = t[1]),
        r("useWAWebOnUnmount")(l));
      var u;
      return (
        t[2] !== n
          ? ((u = s.jsx(f.Provider, { value: i, children: n })),
            (t[2] = n),
            (t[3] = u))
          : (u = t[3]),
        u
      );
    }
    function b() {
      return d(f);
    }
    function v(e) {
      var t, n;
      return (t = (n = _.get(e)) == null ? void 0 : n.card) != null ? t : null;
    }
    function S(e, t, n) {
      var r;
      if (e === p) return t;
      var o = (r = _.get(e)) == null ? void 0 : r.card,
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
      return (_.set(e, { card: a, onExit: n }), a);
    }
    function R(e, t) {
      var n;
      ((n = _.get(e)) == null ? void 0 : n.card) === t && _.delete(e);
    }
    function L(e) {
      _.delete(e);
    }
    function E(e, t) {
      if (e !== p) {
        var n = t.status;
        if (!A(n)) {
          y.delete(e);
          return;
        }
        var r = y.get(e);
        if (F(r, t)) {
          var a = O(t, n);
          (y.set(e, a),
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
    function k(e, t) {
      if (e === p) return null;
      var n = y.get(e);
      if (n == null) return null;
      if (t === "reply_message") return (y.delete(e), null);
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
    function I(e) {
      e !== p && y.delete(e);
    }
    function T(e, t) {
      return e === p || e.current.has(t) ? !1 : (e.current.add(t), !0);
    }
    function D(e, t) {
      if (e !== p) {
        e.current.delete(t);
        var n = g.get(e);
        n != null && (n.delete(t), n.size === 0 && g.delete(e));
      }
    }
    function x(e, t) {
      if (e !== p)
        for (var n of e.current) n.startsWith(t) && e.current.delete(n);
    }
    function $(e, t, n) {
      return e === p || !e.current.delete(t) ? !1 : (e.current.add(n), !0);
    }
    function P(e, t, n) {
      if (e === p) return n;
      var r = g.get(e);
      r == null && ((r = new Map()), g.set(e, r));
      var o = r.get(t);
      return o != null ? o : (r.set(t, n), n);
    }
    function N(e, t, n) {
      if (e !== p) {
        var r = h.get(e);
        (r == null && ((r = new Map()), h.set(e, r)), r.set(t, n));
      }
    }
    function M(e, t) {
      var n;
      return e === p ? null : (n = h.get(e)) == null ? void 0 : n.get(t);
    }
    function w(e, t, n) {
      if (e !== p) {
        var r = h.get(e);
        r == null ||
          (n != null && r.get(t) !== n) ||
          (r.delete(t), r.size === 0 && h.delete(e));
      }
    }
    function A(e) {
      return e === "error" || e === "loading" || e === "success";
    }
    function F(e, t) {
      return e == null
        ? !0
        : e.actions.has("dismiss")
          ? e.status !== t.status || e.stanzaId !== t.stanzaId
          : e.status !== "loading" &&
            (e.stanzaId !== t.stanzaId || t.status === "loading");
    }
    function O(e, t) {
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
    ((l.WAWebBizAiSmartComposerImpressionProvider = C),
      (l.useWAWebBizAiSmartComposerImpressions = b),
      (l.getSmartComposerShownCard = v),
      (l.registerSmartComposerShownCard = S),
      (l.forgetSmartComposerShownCard = R),
      (l.discardSmartComposerShownCardWithoutExit = L),
      (l.recordSmartComposerFunnelCardState = E),
      (l.dismissSmartComposerFunnel = k),
      (l.resetSmartComposerFunnel = I),
      (l.markSmartComposerImpression = T),
      (l.forgetSmartComposerImpression = D),
      (l.forgetSmartComposerImpressionsWithPrefix = x),
      (l.moveSmartComposerImpression = $),
      (l.rememberSmartComposerSuggestionAttribution = P),
      (l.rememberSmartComposerPendingSuggestion = N),
      (l.getSmartComposerPendingSuggestion = M),
      (l.forgetSmartComposerPendingSuggestion = w));
  },
  98,
);
