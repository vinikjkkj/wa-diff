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
    };
    function l(t, n) {
      return (function (n) {
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "OPEN_TRAY" &&
          "hasAcceptedTos" in n
        ) {
          var r = n.hasAcceptedTos;
          return r
            ? babelHelpers.extends({}, t, { state: "loading" })
            : babelHelpers.extends({}, t, { state: "privacy_tos" });
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "ACCEPT_TOS"
        )
          return babelHelpers.extends({}, t, { state: "loading" });
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "START_LOADING" &&
          "tone" in n
        ) {
          var o = n.tone;
          return babelHelpers.extends({}, t, {
            state: "loading",
            activeTone: o,
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
          var a = n.suggestions,
            i = n.inProgress;
          return babelHelpers.extends({}, t, {
            state: "success",
            suggestions: a,
            inProgress: i,
            error: null,
          });
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "RECEIVE_ERROR" &&
          "errorType" in n
        ) {
          var l = n.errorType;
          return babelHelpers.extends({}, t, {
            state: "error",
            error: l,
            inProgress: !1,
          });
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "RECEIVE_EMPTY"
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
            inProgress: !1,
            suggestions: [],
            error: null,
          });
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "CHANGE_TONE" &&
          "tone" in n
        ) {
          var s = n.tone;
          return babelHelpers.extends({}, t, {
            state: "loading",
            activeTone: s,
            error: null,
            inProgress: !0,
          });
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            n,
        );
      })(n);
    }
    ((i.INITIAL_STATE = e), (i.wwaiReducer = l));
  },
  66,
);
