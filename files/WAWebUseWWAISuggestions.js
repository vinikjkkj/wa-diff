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
      var t = o("react-compiler-runtime").c(9),
        n = d(
          o("WAWebWWAISuggestionStateMachine").wwaiReducer,
          o("WAWebWWAISuggestionStateMachine").INITIAL_STATE,
        ),
        a = n[0],
        i = n[1],
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = new Map()), (t[0] = l))
        : (l = t[0]);
      var s = m(l),
        u = m(""),
        c = m("rephrase"),
        p;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = function () {
            for (var e of s.current.values()) e.cancelled = !0;
            s.current.clear();
          }),
          (t[1] = p))
        : (p = t[1]);
      var g = p,
        h;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = function (n, a) {
            var t = o("WAWebWWAICacheStore").getCachedSuggestions(n, a);
            if (t != null) {
              i({
                type: "RECEIVE_SUGGESTIONS",
                suggestions: t,
                inProgress: !1,
              });
              return;
            }
            var l = n + ":" + a;
            if (s.current.has(l)) {
              i({ type: "START_LOADING", tone: a });
              return;
            }
            i({ type: "START_LOADING", tone: a });
            var u = { cancelled: !1 };
            (s.current.set(l, u),
              o("WAWebWWAISendRequest")
                .sendWWAIRequest(n, a, [])
                .then(function (e) {
                  (f(s, l, u),
                    !u.cancelled &&
                      (e.suggestions.length > 0 &&
                        o("WAWebWWAICacheStore").cacheSuggestions(
                          n,
                          a,
                          e.suggestions,
                        ),
                      c.current === a &&
                        (e.suggestions.length === 0
                          ? i({ type: "RECEIVE_EMPTY" })
                          : i({
                              type: "RECEIVE_SUGGESTIONS",
                              suggestions: e.suggestions,
                              inProgress: e.inProgress,
                            }))));
                })
                .catch(function (t) {
                  if ((f(s, l, u), !(u.cancelled || c.current !== a))) {
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
          (t[2] = h))
        : (h = t[2]);
      var y = h,
        C;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = function (t) {
            ((u.current = t), (c.current = "rephrase"));
            var e = o("WAWebWWAINUXState").hasSeenWWAINux();
            (i({ type: "OPEN_TRAY", hasSeenNux: e }), e && y(t, "rephrase"));
          }),
          (t[3] = C))
        : (C = t[3]);
      var b = C,
        v;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = function () {
            (g(), i({ type: "CLOSE_TRAY" }));
          }),
          (t[4] = v))
        : (v = t[4]);
      var S = v,
        R;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = function (t, n) {
            ((c.current = n),
              t !== u.current && (g(), (u.current = t)),
              i({ type: "CHANGE_TONE", tone: n }),
              y(t, n));
          }),
          (t[5] = R))
        : (R = t[5]);
      var L = R,
        E = _,
        k;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = function (t) {
            (i({ type: "ACCEPT_NUX" }), y(t, "rephrase"));
          }),
          (t[6] = k))
        : (k = t[6]);
      var I = k,
        T;
      return (
        t[7] !== a
          ? ((T = {
              state: a,
              openTray: b,
              closeTray: S,
              changeTone: L,
              selectSuggestion: E,
              acceptNux: I,
            }),
            (t[7] = a),
            (t[8] = T))
          : (T = t[8]),
        T
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
