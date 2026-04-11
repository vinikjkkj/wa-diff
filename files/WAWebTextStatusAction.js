__d(
  "WAWebTextStatusAction",
  [
    "fbt",
    "Promise",
    "WATimeUtils",
    "WAWebActionToast.react",
    "WAWebApiTextStatusSuggestions",
    "WAWebContactCollection",
    "WAWebContactTextStatusBridge",
    "WAWebTextStatusGatingUtils",
    "WAWebTextStatusUtils",
    "WAWebToastManager",
    "WAWebUpdateTextStatusForContact",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()) {
            var n = o("WAWebContactCollection").ContactCollection.get(e),
              r = new AbortController(),
              a;
            try {
              if (
                ((a = o("WAWebContactTextStatusBridge").getTextStatus(e, t)), n)
              ) {
                var i,
                  l = n.promises;
                ((i = l.getTextStatus) == null || i.abortController.abort(),
                  (n.promises.getTextStatus = {
                    promise: a,
                    abortController: r,
                  }));
              }
              var s = yield a;
              if (r.signal.aborted || s.error) return;
              o("WAWebUpdateTextStatusForContact").updateTextStatusForContact(
                e,
                s.text,
                s.emoji,
                s.ephemeralDurationSeconds,
                s.lastUpdateTime,
              );
            } finally {
              var u;
              n != null &&
                ((u = n.promises) == null || (u = u.getTextStatus) == null
                  ? void 0
                  : u.promise) === a &&
                delete n.promises.getTextStatus;
            }
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n, r, o) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, r, a, i, l) {
            if (
              (i === void 0 && (i = o("WAWebActionToast.react").genId()),
              l === void 0 && (l = !1),
              !!o("WAWebTextStatusGatingUtils").sendTextStatusEnabled())
            ) {
              var u = o(
                "WAWebContactCollection",
              ).ContactCollection.getMeContact();
              if (u) {
                var d = !t && !r,
                  m = o("WAWebContactTextStatusBridge").setTextStatus(t, r, a),
                  _ = s._(/*BTDS*/ "Updating About"),
                  f = s._(/*BTDS*/ "Updating About failed"),
                  g = new (o("WAWebActionToast.react").ActionType)(_),
                  h = u.textStatusEmoji,
                  y = u.textStatusEphemeralDuration,
                  C = u.textStatusString,
                  b = m
                    .then(function (c) {
                      if (c.result === "SUCCESS") {
                        o(
                          "WAWebUpdateTextStatusForContact",
                        ).updateTextStatusForContact(
                          u.id,
                          t,
                          r,
                          a,
                          d ? 0 : o("WATimeUtils").unixTime(),
                        );
                        var m = l
                          ? void 0
                          : {
                              actionText: s._(/*BTDS*/ "Undo"),
                              actionHandler: function () {
                                return C != null && y != null
                                  ? p(C, h, y, i, !0)
                                  : (e || (e = n("Promise"))).resolve();
                              },
                            };
                        return new (o("WAWebActionToast.react").ActionType)(
                          _,
                          m,
                        );
                      } else if (c.result === "FAILURE")
                        return new (o("WAWebActionToast.react").ActionType)(f);
                    })
                    .catch(function (e) {
                      throw new (o("WAWebActionToast.react").ActionType)(f, {
                        actionText: s._(/*BTDS*/ "Try again."),
                        actionHandler: function () {
                          return p(t, r, a, i);
                        },
                      });
                    });
                return (
                  o("WAWebToastManager").ToastManager.open(
                    c.jsx(o("WAWebActionToast.react").ActionToast, {
                      id: i,
                      initialAction: g,
                      pendingAction: b,
                    }),
                  ),
                  b
                );
              }
            }
          },
        )),
        _.apply(this, arguments)
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebApiTextStatusSuggestions").getTextStatusSuggestions();
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.slice(0, o("WAWebTextStatusUtils").SUGGESTIONS_MAX_COUNT);
          return o("WAWebApiTextStatusSuggestions").setTextStatusSuggestions(t);
        })),
        y.apply(this, arguments)
      );
    }
    ((l.getTextStatus = d),
      (l.setMyTextStatus = p),
      (l.getSuggestions = f),
      (l.setSuggestions = h));
  },
  226,
);
