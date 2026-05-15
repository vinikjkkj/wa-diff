__d(
  "WAWebUseWWAISuggestions",
  [
    "WALogger",
    "WAWebWWAICacheStore",
    "WAWebWWAILogging",
    "WAWebWWAINUXState",
    "WAWebWWAISendRequest",
    "WAWebWWAISuggestionStateMachine",
    "err",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useCallback,
      d = u.useReducer,
      m = u.useRef;
    function p() {
      var t = o("react-compiler-runtime").c(7),
        n = d(
          o("WAWebWWAISuggestionStateMachine").wwaiReducer,
          o("WAWebWWAISuggestionStateMachine").INITIAL_STATE,
        ),
        a = n[0],
        i = n[1],
        l = m(0),
        s;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = function (n, a) {
            var t = o("WAWebWWAICacheStore").getCachedSuggestions(n, a);
            if (t != null) {
              ((l.current = l.current + 1),
                i({
                  type: "RECEIVE_SUGGESTIONS",
                  suggestions: t,
                  inProgress: !1,
                }));
              return;
            }
            (i({ type: "START_LOADING", tone: a }),
              (l.current = l.current + 1));
            var s = l.current;
            o("WAWebWWAISendRequest")
              .sendWWAIRequest(n, a, [])
              .then(function (e) {
                s === l.current &&
                  (e.suggestions.length === 0
                    ? i({ type: "RECEIVE_EMPTY" })
                    : (o("WAWebWWAICacheStore").cacheSuggestions(
                        n,
                        a,
                        e.suggestions,
                      ),
                      i({
                        type: "RECEIVE_SUGGESTIONS",
                        suggestions: e.suggestions,
                        inProgress: e.inProgress,
                      })));
              })
              .catch(function (t) {
                s === l.current &&
                  (o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[WWAI] Request failed",
                        ])),
                    )
                    .catching(t instanceof Error ? t : r("err")(String(t)))
                    .sendLogs("wwai-request-failed"),
                  i({ type: "RECEIVE_ERROR", errorType: "network" }));
              });
          }),
          (t[0] = s))
        : (s = t[0]);
      var u = s,
        c;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = function (t) {
            var e = o("WAWebWWAINUXState").hasSeenWWAINux();
            (i({ type: "OPEN_TRAY", hasSeenNux: e }), e && u(t, "rephrase"));
          }),
          (t[1] = c))
        : (c = t[1]);
      var p = c,
        f;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = function () {
            ((l.current = l.current + 1), i({ type: "CLOSE_TRAY" }));
          }),
          (t[2] = f))
        : (f = t[2]);
      var g = f,
        h;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = function (t, n) {
            (i({ type: "CHANGE_TONE", tone: n }), u(t, n));
          }),
          (t[3] = h))
        : (h = t[3]);
      var y = h,
        C = _,
        b;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = function (t) {
            (i({ type: "ACCEPT_NUX" }), u(t, "rephrase"));
          }),
          (t[4] = b))
        : (b = t[4]);
      var v = b,
        S;
      return (
        t[5] !== a
          ? ((S = {
              state: a,
              openTray: p,
              closeTray: g,
              changeTone: y,
              selectSuggestion: C,
              acceptNux: v,
            }),
            (t[5] = a),
            (t[6] = S))
          : (S = t[6]),
        S
      );
    }
    function _(e) {
      o("WAWebWWAILogging").logSuggestionAccepted(e.tone);
    }
    l.useWWAISuggestions = p;
  },
  98,
);
