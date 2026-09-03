__d(
  "WAWebUpdateTextStatusForContact",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebDBUpdateContactTable",
    "WAWebTextStatusUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return e === "mex-notification" || e === "mex-notification-side-sub";
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.contactId,
            r = t.emoji,
            a = t.ephemeralDuration,
            i = t.newUpdateTime,
            l = t.source,
            u = t.textString,
            c = o("WAWebWidFactory").createUserWidOrThrow(n.user, n.server),
            m = yield o("WAWebApiContact").getContactRecord(c);
          if (!m) {
            s(l) &&
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[textStatus] notification ",
                      ": no contact for ",
                      "",
                    ])),
                  l,
                  c.toLogString(),
                )
                .sendLogs("text-status-notification-no-contact", {
                  sampling: 0.1,
                });
            return;
          }
          var p = d({
            contact: m,
            emoji: r,
            ephemeralDuration: a,
            newUpdateTime: i,
            textString: u,
          });
          p &&
            (yield o("WAWebDBUpdateContactTable").updateContactTable(
              c,
              babelHelpers.extends({}, p),
            ),
            o("WAWebBackendApi").frontendFireAndForget(
              "updateTextStatus",
              babelHelpers.extends({}, p, { contactId: c }),
            ));
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
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
