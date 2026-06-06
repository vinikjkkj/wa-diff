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
    "WAWebTextStatusGatingUtils",
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
    function p(e, t, n) {
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
    async function _(e, t) {
      if (o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()) {
        var n = e.toString();
        if (!m(n)) {
          var r = o("WAWebContactCollection").ContactCollection.get(e),
            a = p(r, e, t),
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
    async function f(e, t, n, r, a) {
      if (
        (r === void 0 && (r = o("WAWebActionToast.react").genId()),
        a === void 0 && (a = !1),
        !!o("WAWebTextStatusGatingUtils").sendTextStatusEnabled())
      ) {
        var i = o("WAWebContactCollection").ContactCollection.getMeContact();
        if (i) {
          var l = !e && !t,
            c = o("WAWebContactTextStatusBridge").setTextStatus(e, t, n),
            d = s._(/*BTDS*/ "Updating About"),
            m = s._(/*BTDS*/ "Updating About failed"),
            p = new (o("WAWebActionToast.react").ActionType)(d),
            _ = i.textStatusEmoji,
            g = i.textStatusEphemeralDuration,
            h = i.textStatusString,
            y = c
              .then(function (u) {
                if (u.result === "SUCCESS") {
                  o(
                    "WAWebUpdateTextStatusForContact",
                  ).updateTextStatusForContact({
                    contactId: i.id,
                    textString: e,
                    emoji: t,
                    ephemeralDuration: n,
                    newUpdateTime: l ? 0 : o("WATimeUtils").unixTime(),
                    source: "set-self",
                  });
                  var c = a
                    ? void 0
                    : {
                        actionText: s._(/*BTDS*/ "Undo"),
                        actionHandler: function () {
                          return h != null && g != null
                            ? f(h, _, g, r, !0)
                            : Promise.resolve();
                        },
                      };
                  return new (o("WAWebActionToast.react").ActionType)(d, c);
                } else if (u.result === "FAILURE")
                  return new (o("WAWebActionToast.react").ActionType)(m);
              })
              .catch(function (a) {
                throw new (o("WAWebActionToast.react").ActionType)(m, {
                  actionText: s._(/*BTDS*/ "Try again."),
                  actionHandler: function () {
                    return f(e, t, n, r);
                  },
                });
              });
          return (
            o("WAWebToastManager").ToastManager.open(
              u.jsx(o("WAWebActionToast.react").ActionToast, {
                id: r,
                initialAction: p,
                pendingAction: y,
              }),
            ),
            y
          );
        }
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
