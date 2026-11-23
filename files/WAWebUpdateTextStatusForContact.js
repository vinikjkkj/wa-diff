__d(
  "WAWebUpdateTextStatusForContact",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebDBUpdateContactTable",
    "WAWebModelStorageUtils",
    "WAWebTextStatusUtils",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return e === "mex-notification" || e === "mex-notification-side-sub";
    }
    async function u(e) {
      var t = o("WAWebWidFactory").createUserWidOrThrow(
          e.contactId.user,
          e.contactId.server,
        ),
        n = await c(t, e);
      n != null &&
        o("WAWebBackendApi").frontendFireAndForget(
          "updateTextStatus",
          babelHelpers.extends({}, n, { contactId: t }),
        );
    }
    function c(t, n) {
      var r = n.emoji,
        a = n.ephemeralDuration,
        i = n.expectedExpiryTs,
        l = n.newUpdateTime,
        u = n.source,
        c = n.textString;
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["contact"], async function () {
          var n = await o("WAWebApiContact").getContactRecord(t);
          if (!n)
            return (
              s(u) &&
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[textStatus] notification ",
                        ": no contact for ",
                        "",
                      ])),
                    u,
                    t.toLogString(),
                  )
                  .sendLogs("text-status-notification-no-contact", {
                    sampling: 0.1,
                  }),
              null
            );
          if (i != null && n.textStatusExpiryTs !== i) return d(n);
          var p = m({
            contact: n,
            emoji: r,
            ephemeralDuration: a,
            newUpdateTime: l,
            textString: c,
          });
          return p
            ? (await o("WAWebDBUpdateContactTable").updateContactTable(
                t,
                babelHelpers.extends({}, p),
              ),
              p)
            : null;
        });
    }
    function d(e) {
      return {
        textStatusEmoji: e.textStatusEmoji,
        textStatusEphemeralDuration: e.textStatusEphemeralDuration,
        textStatusExpiryTs: e.textStatusExpiryTs,
        textStatusLastUpdateTime: e.textStatusLastUpdateTime,
        textStatusString: e.textStatusString,
      };
    }
    function m(e) {
      var t = e.contact,
        n = e.emoji,
        r = e.ephemeralDuration,
        a = e.newUpdateTime,
        i = e.textString,
        l = t.textStatusLastUpdateTime,
        s =
          a ===
            o("WAWebTextStatusUtils").CLEAR_TEXT_STATUS_LAST_UPDATE_TIME_VAL ||
          a === o("WAWebTextStatusUtils").TEXT_STATUS_NOT_AUTHORIZED ||
          a === o("WAWebTextStatusUtils").TEXT_STATUS_NOT_FETCHED;
      if (a == null || (l != null && !s && a < l)) return null;
      var u = o("WAWebTextStatusUtils").resolveTextStatusUpdateTime(a, l),
        c;
      return (
        r != null && r > 0 && !s && (c = Number(a) + Number(r)),
        {
          textStatusString: i,
          textStatusEmoji: n,
          textStatusEphemeralDuration: r,
          textStatusLastUpdateTime: u,
          textStatusExpiryTs: c,
        }
      );
    }
    l.updateTextStatusForContact = u;
  },
  98,
);
