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
      c = u || (u = o("react")),
      d = 6e4,
      m = new Map();
    function p(e) {
      var t = m.get(e);
      return t == null ? !1 : Date.now() - t < d ? !0 : (m.delete(e), !1);
    }
    function _(e, t, n) {
      var r = e == null ? void 0 : e.promises.getTextStatus;
      if (r != null) return { fetchPromise: r, isOwnFetch: !1 };
      var a = o("WAWebContactTextStatusBridge").getTextStatus(t, n);
      return (
        e != null &&
          ((e.promises.getTextStatus = a),
          a.finally(function () {
            e.promises.getTextStatus === a && delete e.promises.getTextStatus;
          })),
        { fetchPromise: a, isOwnFetch: !0 }
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()) {
            var n = e.toString();
            if (!p(n)) {
              var r = o("WAWebContactCollection").ContactCollection.get(e),
                a = _(r, e, t),
                i = a.fetchPromise,
                l = a.isOwnFetch,
                s = yield i;
              if (l) {
                if (s.error) {
                  m.set(n, Date.now());
                  return;
                }
                (m.delete(n),
                  o(
                    "WAWebUpdateTextStatusForContact",
                  ).updateTextStatusForContact(
                    e,
                    s.text,
                    s.emoji,
                    s.ephemeralDurationSeconds,
                    s.lastUpdateTime,
                  ));
              }
            }
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n, r, o) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                  p = s._(/*BTDS*/ "Updating About"),
                  _ = s._(/*BTDS*/ "Updating About failed"),
                  f = new (o("WAWebActionToast.react").ActionType)(p),
                  g = u.textStatusEmoji,
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
                                  ? h(C, g, y, i, !0)
                                  : (e || (e = n("Promise"))).resolve();
                              },
                            };
                        return new (o("WAWebActionToast.react").ActionType)(
                          p,
                          m,
                        );
                      } else if (c.result === "FAILURE")
                        return new (o("WAWebActionToast.react").ActionType)(_);
                    })
                    .catch(function (e) {
                      throw new (o("WAWebActionToast.react").ActionType)(_, {
                        actionText: s._(/*BTDS*/ "Try again."),
                        actionHandler: function () {
                          return h(t, r, a, i);
                        },
                      });
                    });
                return (
                  o("WAWebToastManager").ToastManager.open(
                    c.jsx(o("WAWebActionToast.react").ActionToast, {
                      id: i,
                      initialAction: f,
                      pendingAction: b,
                    }),
                  ),
                  b
                );
              }
            }
          },
        )),
        y.apply(this, arguments)
      );
    }
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebApiTextStatusSuggestions").getTextStatusSuggestions();
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.slice(0, o("WAWebTextStatusUtils").SUGGESTIONS_MAX_COUNT);
          return o("WAWebApiTextStatusSuggestions").setTextStatusSuggestions(t);
        })),
        S.apply(this, arguments)
      );
    }
    ((l.getTextStatus = f),
      (l.setMyTextStatus = h),
      (l.getSuggestions = C),
      (l.setSuggestions = v));
  },
  226,
);
