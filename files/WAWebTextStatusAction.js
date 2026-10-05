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
          if (
            o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() &&
            !e.isPSA()
          ) {
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
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.duration,
            a = t.emoji,
            i = t.isUndoAction,
            l = i === void 0 ? !1 : i,
            u = t.text,
            d = t.toastId,
            m = d === void 0 ? o("WAWebActionToast.react").genId() : d;
          if (o("WAWebTextStatusGatingUtils").sendTextStatusEnabled()) {
            var p = o(
              "WAWebContactCollection",
            ).ContactCollection.getMeContact();
            if (p) {
              var _ = !u && !a,
                f = o("WAWebContactTextStatusBridge").setTextStatus(u, a, r),
                g = s._(/*BTDS*/ "Updating About"),
                y = s._(/*BTDS*/ "Couldn't update About"),
                C = new (o("WAWebActionToast.react").ActionType)(g),
                b = p.textStatusEmoji,
                v = p.textStatusEphemeralDuration,
                S = p.textStatusString,
                R = f
                  .then(function (t) {
                    if (t.result === "SUCCESS") {
                      o(
                        "WAWebUpdateTextStatusForContact",
                      ).updateTextStatusForContact({
                        contactId: p.id,
                        textString: u,
                        emoji: a,
                        ephemeralDuration: r,
                        newUpdateTime: _ ? 0 : o("WATimeUtils").unixTime(),
                        source: "set-self",
                      });
                      var i = l
                        ? void 0
                        : {
                            actionText: s._(/*BTDS*/ "Undo"),
                            actionHandler: function () {
                              return S != null && v != null
                                ? h({
                                    duration: v,
                                    emoji: b,
                                    isUndoAction: !0,
                                    text: S,
                                    toastId: m,
                                  })
                                : (e || (e = n("Promise"))).resolve();
                            },
                          };
                      return new (o("WAWebActionToast.react").ActionType)(g, i);
                    } else if (t.result === "FAILURE")
                      return new (o("WAWebActionToast.react").ActionType)(y);
                  })
                  .catch(function (e) {
                    throw new (o("WAWebActionToast.react").ActionType)(y, {
                      actionText: s._(/*BTDS*/ "Try again."),
                      actionHandler: function () {
                        return h({
                          duration: r,
                          emoji: a,
                          text: u,
                          toastId: m,
                        });
                      },
                    });
                  });
              return (
                o("WAWebToastManager").ToastManager.open(
                  c.jsx(o("WAWebActionToast.react").ActionToast, {
                    id: m,
                    initialAction: C,
                    pendingAction: R,
                  }),
                ),
                R
              );
            }
          }
        })),
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
