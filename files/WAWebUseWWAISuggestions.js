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
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useCallback,
      d = u.useReducer,
      m = u.useRef;
    function p() {
      var t = o("react-compiler-runtime").c(16),
        n = d(
          o("WAWebWWAISuggestionStateMachine").wwaiReducer,
          o("WAWebWWAISuggestionStateMachine").INITIAL_STATE,
        ),
        a = n[0],
        i = n[1],
        l = r("useWAWebUnmountSignal")(),
        s;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = new Map()), (t[0] = s))
        : (s = t[0]);
      var u = m(s),
        c = m(""),
        p = m("rephrase"),
        g;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = function () {
            for (var e of u.current.values()) e.cancelled = !0;
            u.current.clear();
          }),
          (t[1] = g))
        : (g = t[1]);
      var h = g,
        y;
      t[2] !== l.aborted
        ? ((y = function (n, a) {
            var t = o("WAWebWWAICacheStore").getCachedSuggestions(n, a);
            if (t != null) {
              i({
                type: "RECEIVE_SUGGESTIONS",
                suggestions: t,
                inProgress: !1,
              });
              return;
            }
            var s = n + ":" + a;
            if (u.current.has(s)) {
              i({ type: "START_LOADING", tone: a });
              return;
            }
            i({ type: "START_LOADING", tone: a });
            var c = { cancelled: !1 };
            (u.current.set(s, c),
              o("WAWebWWAISendRequest")
                .sendWWAIRequest(n, a, [])
                .then(function (e) {
                  (f(u, s, c),
                    !c.cancelled &&
                      (e.suggestions.length > 0 &&
                        o("WAWebWWAICacheStore").cacheSuggestions(
                          n,
                          a,
                          e.suggestions,
                        ),
                      !(l.aborted || p.current !== a) &&
                        (e.suggestions.length === 0
                          ? i({ type: "RECEIVE_EMPTY" })
                          : i({
                              type: "RECEIVE_SUGGESTIONS",
                              suggestions: e.suggestions,
                              inProgress: e.inProgress,
                            }))));
                })
                .catch(function (t) {
                  if (
                    (f(u, s, c), !(c.cancelled || l.aborted || p.current !== a))
                  ) {
                    o("WALogger")
                      .ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[WWAI] Request failed",
                          ])),
                      )
                      .catching(t instanceof Error ? t : r("err")(String(t)))
                      .sendLogs("wwai-request-failed");
                    var n =
                      t instanceof Error && t.message.includes("timeout")
                        ? "timeout"
                        : "unknown";
                    i({ type: "RECEIVE_ERROR", errorType: n });
                  }
                }));
          }),
          (t[2] = l.aborted),
          (t[3] = y))
        : (y = t[3]);
      var C = y,
        b;
      t[4] !== C
        ? ((b = function (t) {
            ((c.current = t), (p.current = "rephrase"));
            var e = o("WAWebWWAINUXState").hasSeenWWAINux();
            (i({ type: "OPEN_TRAY", hasSeenNux: e }), e && C(t, "rephrase"));
          }),
          (t[4] = C),
          (t[5] = b))
        : (b = t[5]);
      var v = b,
        S;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = function () {
            (h(), i({ type: "CLOSE_TRAY" }));
          }),
          (t[6] = S))
        : (S = t[6]);
      var R = S,
        L;
      t[7] !== C
        ? ((L = function (t, n) {
            ((p.current = n),
              t !== c.current && (h(), (c.current = t)),
              i({ type: "CHANGE_TONE", tone: n }),
              C(t, n));
          }),
          (t[7] = C),
          (t[8] = L))
        : (L = t[8]);
      var E = L,
        k = _,
        I;
      t[9] !== C
        ? ((I = function (t) {
            (i({ type: "ACCEPT_NUX" }), C(t, "rephrase"));
          }),
          (t[9] = C),
          (t[10] = I))
        : (I = t[10]);
      var T = I,
        D;
      return (
        t[11] !== T || t[12] !== E || t[13] !== v || t[14] !== a
          ? ((D = {
              state: a,
              openTray: v,
              closeTray: R,
              changeTone: E,
              selectSuggestion: k,
              acceptNux: T,
            }),
            (t[11] = T),
            (t[12] = E),
            (t[13] = v),
            (t[14] = a),
            (t[15] = D))
          : (D = t[15]),
        D
      );
    }
    function _(e) {
      o("WAWebWWAILogging").logSuggestionAccepted(e.tone);
    }
    function f(e, t, n) {
      e.current.get(t) === n && e.current.delete(t);
    }
    l.useWWAISuggestions = p;
  },
  98,
);
