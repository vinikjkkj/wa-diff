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
      var t = d(
          o("WAWebWWAISuggestionStateMachine").wwaiReducer,
          o("WAWebWWAISuggestionStateMachine").INITIAL_STATE,
        ),
        n = t[0],
        a = t[1],
        i = r("useWAWebUnmountSignal")(),
        l = m(new Map()),
        s = m(""),
        u = m("rephrase"),
        p = c(function () {
          for (var e of l.current.values()) e.cancelled = !0;
          l.current.clear();
        }, []),
        f = c(
          function (t, n) {
            var s = o("WAWebWWAICacheStore").getCachedSuggestions(t, n);
            if (s != null) {
              a({
                type: "RECEIVE_SUGGESTIONS",
                suggestions: s,
                inProgress: !1,
              });
              return;
            }
            var c = t + ":" + n;
            if (l.current.has(c)) {
              a({ type: "START_LOADING", tone: n });
              return;
            }
            a({ type: "START_LOADING", tone: n });
            var d = { cancelled: !1 };
            (l.current.set(c, d),
              o("WAWebWWAISendRequest")
                .sendWWAIRequest(t, n, [])
                .then(function (e) {
                  (_(l, c, d),
                    !d.cancelled &&
                      (e.suggestions.length > 0 &&
                        o("WAWebWWAICacheStore").cacheSuggestions(
                          t,
                          n,
                          e.suggestions,
                        ),
                      !(i.aborted || u.current !== n) &&
                        (e.suggestions.length === 0
                          ? a({ type: "RECEIVE_EMPTY" })
                          : a({
                              type: "RECEIVE_SUGGESTIONS",
                              suggestions: e.suggestions,
                              inProgress: e.inProgress,
                            }))));
                })
                .catch(function (t) {
                  if (
                    (_(l, c, d), !(d.cancelled || i.aborted || u.current !== n))
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
                    var s =
                      t instanceof Error && t.message.includes("timeout")
                        ? "timeout"
                        : "unknown";
                    a({ type: "RECEIVE_ERROR", errorType: s });
                  }
                }));
          },
          [i.aborted],
        ),
        g = c(
          function (e) {
            ((s.current = e), (u.current = "rephrase"));
            var t = o("WAWebWWAINUXState").hasSeenWWAINux();
            (a({ type: "OPEN_TRAY", hasSeenNux: t }), t && f(e, "rephrase"));
          },
          [f],
        ),
        h = c(
          function () {
            (p(), a({ type: "CLOSE_TRAY" }));
          },
          [p],
        ),
        y = c(
          function (e, t) {
            ((u.current = t),
              e !== s.current && (p(), (s.current = e)),
              a({ type: "CHANGE_TONE", tone: t }),
              f(e, t));
          },
          [f, p],
        ),
        C = c(function (e) {
          o("WAWebWWAILogging").logSuggestionAccepted(e.tone);
        }, []),
        b = c(
          function (e) {
            (a({ type: "ACCEPT_NUX" }), f(e, "rephrase"));
          },
          [f],
        );
      return {
        state: n,
        openTray: g,
        closeTray: h,
        changeTone: y,
        selectSuggestion: C,
        acceptNux: b,
      };
    }
    function _(e, t, n) {
      e.current.get(t) === n && e.current.delete(t);
    }
    l.useWWAISuggestions = p;
  },
  98,
);
