__d(
  "WAWebTextStatusAction",
  [
    "fbt",
    "WATimeUtils",
    "WAWebActionToast.react",
    "WAWebApiTextStatusSuggestions",
    "WAWebBackendErrors",
    "WAWebContactCollection",
    "WAWebContactTextStatusBridge",
    "WAWebTextStatusUtils",
    "WAWebToastManager",
    "WAWebUpdateTextStatusForContact",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = 6e4,
      d = new Map();
    function m(e) {
      var t = d.get(e);
      return t == null ? !1 : Date.now() - t < c ? !0 : (d.delete(e), !1);
    }
    function p(e) {
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
    async function _(e, t) {
      if (!e.isPSA()) {
        var n = e.toString();
        if (!m(n)) {
          var r = o("WAWebContactCollection").ContactCollection.get(e),
            a = p({ contactModel: r, id: e, lastUpdateTime: t }),
            i = a.fetchPromise,
            l = a.isOwnFetch,
            s = await i;
          if (l) {
            if (s.error) {
              (d.set(n, Date.now()),
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
            (d.delete(n),
              o("WAWebUpdateTextStatusForContact").updateTextStatusForContact({
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
    }
    async function f(e) {
      var t = e.duration,
        n = e.emoji,
        r = e.isUndoAction,
        a = r === void 0 ? !1 : r,
        i = e.text,
        l = e.toastId,
        c = l === void 0 ? o("WAWebActionToast.react").genId() : l,
        d = o("WAWebContactCollection").ContactCollection.getMeContact();
      if (d) {
        var m = !i && !n,
          p = o("WAWebContactTextStatusBridge").setTextStatus(i, n, t),
          _ = s._(/*BTDS*/ ""),
          g = s._(/*BTDS*/ ""),
          h = new (o("WAWebActionToast.react").ActionType)(_),
          y = d.textStatusEmoji,
          C = d.textStatusEphemeralDuration,
          b = d.textStatusString,
          v = p
            .then(function (e) {
              if (e.result === "SUCCESS") {
                o("WAWebUpdateTextStatusForContact").updateTextStatusForContact(
                  {
                    contactId: d.id,
                    textString: i,
                    emoji: n,
                    ephemeralDuration: t,
                    newUpdateTime: m ? 0 : o("WATimeUtils").unixTime(),
                    source: "set-self",
                  },
                );
                var r = a
                  ? void 0
                  : {
                      actionText: s._(/*BTDS*/ ""),
                      actionHandler: function () {
                        return (b != null || y != null) && C != null
                          ? f({
                              duration: C,
                              emoji: y,
                              isUndoAction: !0,
                              text: b,
                              toastId: c,
                            })
                          : Promise.resolve();
                      },
                    };
                return new (o("WAWebActionToast.react").ActionType)(_, r);
              } else if (e.result === "FAILURE")
                return new (o("WAWebActionToast.react").ActionType)(g);
            })
            .catch(function (e) {
              throw new (o("WAWebActionToast.react").ActionType)(g, {
                actionText: s._(/*BTDS*/ ""),
                actionHandler: function () {
                  return f({ duration: t, emoji: n, text: i, toastId: c });
                },
              });
            });
        return (
          o("WAWebToastManager").ToastManager.open(
            u.jsx(o("WAWebActionToast.react").ActionToast, {
              id: c,
              initialAction: h,
              pendingAction: v,
            }),
          ),
          v
        );
      }
    }
    async function g() {
      return o("WAWebApiTextStatusSuggestions").getTextStatusSuggestions();
    }
    async function h(e) {
      var t = e.slice(0, o("WAWebTextStatusUtils").SUGGESTIONS_MAX_COUNT);
      return o("WAWebApiTextStatusSuggestions").setTextStatusSuggestions(t);
    }
    ((l.getTextStatus = _),
      (l.setMyTextStatus = f),
      (l.getSuggestions = g),
      (l.setSuggestions = h));
  },
  226,
);
