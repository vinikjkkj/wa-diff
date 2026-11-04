__d(
  "WAWebStartChatContextGate",
  [
    "WALogger",
    "WAWebOpenStartChatContextModal",
    "WAWebStartChatContextEligibility",
    "WAWebStartChatContextGatingUtils",
    "WAWebStartChatContextLogging",
    "WAWebStartChatContextSignal",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.entryPoint,
            n = e.onBeforeDialog,
            r = e.signal,
            a = e.wid;
          try {
            if (
              !o("WAWebStartChatContextGatingUtils").isStartChatContextEnabled()
            )
              return "open_chat";
            var i = yield o(
              "WAWebStartChatContextEligibility",
            ).getStartChatContextIneligibleReason(a);
            if (i != null) return (d(i, t, r), "open_chat");
            if ((r == null ? void 0 : r.aborted) === !0) return "cancel";
            o("WAWebOpenStartChatContextModal").preloadStartChatContextModal();
            var l = yield o(
                "WAWebStartChatContextSignal",
              ).fetchStartChatContextSignal(a),
              s = l.joinDateMs,
              u = l.signal;
            return u === "not_suspicious"
              ? (d("not_suspicious", t, r), "open_chat")
              : u !== "suspicious"
                ? "open_chat"
                : yield m({
                    entryPoint: t,
                    joinDateMs: s,
                    onBeforeDialog: n,
                    signal: r,
                    wid: a,
                  });
          } catch (e) {
            return (c(e, r), "open_chat");
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c(t, n) {
      (n == null ? void 0 : n.aborted) !== !0 &&
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[start-chat-context] check failed, opening the chat",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("start-chat-context-gate-failed");
    }
    function d(e, t, n) {
      (n == null ? void 0 : n.aborted) !== !0 &&
        o("WAWebStartChatContextLogging").logStartChatContextDidNotShow(e, t);
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.entryPoint,
            n = e.joinDateMs,
            r = e.onBeforeDialog,
            a = e.signal,
            i = e.wid;
          if ((a == null ? void 0 : a.aborted) === !0) return "cancel";
          if (
            !o("WAWebStartChatContextGatingUtils").isStartChatContextUiEnabled()
          )
            return "open_chat";
          var l = yield o(
            "WAWebOpenStartChatContextModal",
          ).openStartChatContextModal({
            entryPoint: t,
            joinDateMs: n,
            onBeforeOpen: r,
            signal: a,
            wid: i,
          });
          return l === "continue"
            ? "open_chat"
            : l === "cancel" || l === "dismiss"
              ? "cancel"
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      l,
                  );
                })();
        })),
        p.apply(this, arguments)
      );
    }
    l.getStartChatContextDecision = s;
  },
  98,
);
