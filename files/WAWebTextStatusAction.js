__d(
  "WAWebTextStatusAction",
  [
    "fbt",
    "Promise",
    "WATimeUtils",
    "WAWebActionToast.react",
    "WAWebApiTextStatusSuggestions",
    "WAWebBackendErrors",
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
    function _(e) {
      var t = e.contactModel,
        n = e.id,
        r = e.lastUpdateTime,
        a = t == null ? void 0 : t.promises.getTextStatus;
      if (a != null) return { fetchPromise: a, isOwnFetch: !1 };
      var i = o("WAWebContactTextStatusBridge").getTextStatus(n, r);
      return (
        t != null &&
          ((t.promises.getTextStatus = i),
          i.finally(function () {
            t.promises.getTextStatus === i && delete t.promises.getTextStatus;
          })),
        { fetchPromise: i, isOwnFetch: !0 }
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
                a = _({ contactModel: r, id: e, lastUpdateTime: t }),
                i = a.fetchPromise,
                l = a.isOwnFetch,
                s = yield i;
              if (l) {
                if (s.error) {
                  (m.set(n, Date.now()),
                    s.error instanceof
                      o("WAWebBackendErrors").ServerStatusCodeError &&
                      s.error.statusCode === 401 &&
                      o(
                        "WAWebUpdateTextStatusForContact",
                      ).updateTextStatusForContact({
                        contactId: e,
                        textString: null,
                        emoji: null,
                        ephemeralDuration: null,
                        newUpdateTime: o("WAWebTextStatusUtils")
                          .TEXT_STATUS_NOT_AUTHORIZED,
                        source: "fetch",
                      }));
                  return;
                }
                (m.delete(n),
                  o(
                    "WAWebUpdateTextStatusForContact",
                  ).updateTextStatusForContact({
                    contactId: e,
                    textString: s.text,
                    emoji: s.emoji,
                    ephemeralDuration: s.ephemeralDurationSeconds,
                    newUpdateTime: s.lastUpdateTime,
                    source: "fetch",
                  }));
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
                  _ = s._(/*BTDS*/ "Couldn't update About"),
                  f = new (o("WAWebActionToast.react").ActionType)(p),
                  g = u.textStatusEmoji,
                  y = u.textStatusEphemeralDuration,
                  C = u.textStatusString,
                  b = m
                    .then(function (c) {
                      if (c.result === "SUCCESS") {
                        o(
                          "WAWebUpdateTextStatusForContact",
                        ).updateTextStatusForContact({
                          contactId: u.id,
                          textString: t,
                          emoji: r,
                          ephemeralDuration: a,
                          newUpdateTime: d ? 0 : o("WATimeUtils").unixTime(),
                          source: "set-self",
                        });
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
