__d(
  "WAWebBizAiSmartComposerSuggestionStateMachine",
  ["WAWebBizAiSmartComposerErrorMapping"],
  function (t, n, r, o, a, i, l) {
    var e = { status: "hidden" };
    function s(e, t) {
      return (function (t) {
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "fetch_start" &&
          "stanzaId" in t &&
          "trigger" in t
        ) {
          var n = t.stanzaId,
            r = t.trigger;
          return e.status === "quota_handoff"
            ? e
            : { status: "loading", stanzaId: n, trigger: r };
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "newer_message" &&
          "stanzaId" in t &&
          "trigger" in t
        ) {
          var o = t.stanzaId,
            a = t.trigger;
          return e.status === "quota_handoff"
            ? e
            : { status: "loading", stanzaId: o, trigger: a };
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "fetch_success" &&
          "stanzaId" in t &&
          "suggestion" in t &&
          "trigger" in t &&
          "isFromCache" in t
        ) {
          var i = t.stanzaId,
            l = t.suggestion,
            s = t.trigger,
            u = t.isFromCache;
          if (e.status === "loading" && e.stanzaId === i) return c(i, l, s, u);
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "fetch_error" &&
          "stanzaId" in t &&
          "code" in t &&
          "trigger" in t
        ) {
          var m = t.stanzaId,
            p = t.code,
            _ = t.trigger;
          if (e.status === "loading" && e.stanzaId === m)
            return d({ code: p, stanzaId: m, trigger: _ });
        }
        return ((typeof t == "object" && t !== null) ||
          typeof t == "function") &&
          t.type === "dismiss"
          ? { status: "hidden" }
          : ((typeof t == "object" && t !== null) || typeof t == "function") &&
              t.type === "reset"
            ? { status: "hidden" }
            : e;
      })(t);
    }
    function u(e) {
      var t,
        n,
        r = e.text;
      return r != null && r !== ""
        ? r
        : (t = (n = e.product) == null ? void 0 : n.text) != null
          ? t
          : "";
    }
    function c(e, t, n, r) {
      return u(t) === ""
        ? { status: "hidden" }
        : {
            status: "success",
            stanzaId: e,
            suggestion: t,
            trigger: n,
            isFromCache: r,
          };
    }
    function d(e) {
      var t = e.code,
        n = e.stanzaId,
        r = e.trigger;
      return (function (e) {
        if (e === "quota_handoff") return { status: "quota_handoff" };
        if (e === "retryable_error")
          return { status: "error", stanzaId: n, code: t, trigger: r };
        if (e === "silent_fallback") return { status: "hidden" };
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(
        o("WAWebBizAiSmartComposerErrorMapping").mapSuggestedReplyErrorToState(
          t,
        ),
      );
    }
    ((l.INITIAL_STATE = e),
      (l.suggestionReducer = s),
      (l.getSuggestionInsertText = u));
  },
  98,
);
