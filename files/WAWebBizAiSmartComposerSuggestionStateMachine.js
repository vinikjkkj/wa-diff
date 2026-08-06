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
          "stanzaId" in t
        ) {
          var n = t.stanzaId;
          return e.status === "quota_handoff"
            ? e
            : { status: "loading", stanzaId: n };
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "newer_message" &&
          "stanzaId" in t
        ) {
          var r = t.stanzaId;
          return e.status === "quota_handoff"
            ? e
            : { status: "loading", stanzaId: r };
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "fetch_success" &&
          "stanzaId" in t &&
          "suggestion" in t
        ) {
          var o = t.stanzaId,
            a = t.suggestion;
          if (e.status === "loading" && e.stanzaId === o) return c(o, a);
        }
        if (
          ((typeof t == "object" && t !== null) || typeof t == "function") &&
          t.type === "fetch_error" &&
          "stanzaId" in t &&
          "code" in t
        ) {
          var i = t.stanzaId,
            l = t.code;
          if (e.status === "loading" && e.stanzaId === i) return d(l);
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
    function c(e, t) {
      return u(t) === ""
        ? { status: "hidden" }
        : { status: "success", stanzaId: e, suggestion: t };
    }
    function d(e) {
      return (function (t) {
        if (t === "quota_handoff") return { status: "quota_handoff" };
        if (t === "retryable_error") return { status: "error", code: e };
        if (t === "silent_fallback") return { status: "hidden" };
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      })(
        o("WAWebBizAiSmartComposerErrorMapping").mapSuggestedReplyErrorToState(
          e,
        ),
      );
    }
    ((l.INITIAL_STATE = e),
      (l.suggestionReducer = s),
      (l.getSuggestionInsertText = u));
  },
  98,
);
