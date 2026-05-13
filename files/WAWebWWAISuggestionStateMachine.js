__d(
  "WAWebWWAISuggestionStateMachine",
  [],
  function (t, n, r, o, a, i) {
    var e = {
        state: "idle",
        suggestions: [],
        activeTone: "rephrase",
        error: null,
        inProgress: !1,
      },
      l = new Set(["loading", "success", "error", "empty"]);
    function s(t, n) {
      var r = l.has(t.state);
      return (function (n) {
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "OPEN_TRAY" &&
          "hasAcceptedTos" in n
        ) {
          var o = n.hasAcceptedTos;
          if (t.state === "idle" || t.state === "word_limit_not_met")
            return o
              ? babelHelpers.extends({}, t, { state: "loading" })
              : babelHelpers.extends({}, t, { state: "privacy_tos" });
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "ACCEPT_TOS" &&
          t.state === "privacy_tos"
        )
          return babelHelpers.extends({}, t, { state: "loading" });
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "START_LOADING" &&
          "tone" in n
        ) {
          var a = n.tone;
          if (r)
            return babelHelpers.extends({}, t, {
              state: "loading",
              activeTone: a,
              suggestions: [],
              error: null,
              inProgress: !0,
            });
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "RECEIVE_SUGGESTIONS" &&
          "suggestions" in n &&
          "inProgress" in n
        ) {
          var i = n.suggestions,
            l = n.inProgress;
          if (t.state === "loading" || t.state === "success")
            return babelHelpers.extends({}, t, {
              state: "success",
              suggestions: i,
              inProgress: l,
              error: null,
            });
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "RECEIVE_ERROR" &&
          "errorType" in n
        ) {
          var s = n.errorType;
          if (t.state === "loading")
            return babelHelpers.extends({}, t, {
              state: "error",
              error: s,
              inProgress: !1,
            });
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "RECEIVE_EMPTY" &&
          t.state === "loading"
        )
          return babelHelpers.extends({}, t, {
            state: "empty",
            suggestions: [],
            inProgress: !1,
          });
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "CLOSE_TRAY"
        )
          return e;
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "TEXT_CHANGED_BELOW_THRESHOLD"
        )
          return babelHelpers.extends({}, t, {
            state: "word_limit_not_met",
            suggestions: [],
            error: null,
            inProgress: !1,
          });
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "CHANGE_TONE" &&
          "tone" in n
        ) {
          var u = n.tone;
          if (r)
            return babelHelpers.extends({}, t, {
              state: "loading",
              activeTone: u,
              suggestions: [],
              error: null,
              inProgress: !0,
            });
        }
        return t;
      })(n);
    }
    ((i.INITIAL_STATE = e), (i.wwaiReducer = s));
  },
  66,
);
