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
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebWidFactory").createUserWidOrThrow(
              e.contactId.user,
              e.contactId.server,
            ),
            n = yield d(t, e);
          n != null &&
            o("WAWebBackendApi").frontendFireAndForget(
              "updateTextStatus",
              babelHelpers.extends({}, n, { contactId: t }),
            );
        })),
        c.apply(this, arguments)
      );
    }
    function d(t, r) {
      var a = r.emoji,
        i = r.ephemeralDuration,
        l = r.expectedExpiryTs,
        u = r.newUpdateTime,
        c = r.source,
        d = r.textString;
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          ["contact"],
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var n = yield o("WAWebApiContact").getContactRecord(t);
            if (!n)
              return (
                s(c) &&
                  o("WALogger")
                    .WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[textStatus] notification ",
                          ": no contact for ",
                          "",
                        ])),
                      c,
                      t.toLogString(),
                    )
                    .sendLogs("text-status-notification-no-contact", {
                      sampling: 0.1,
                    }),
                null
              );
            if (l != null && n.textStatusExpiryTs !== l) return null;
            var r = m({
              contact: n,
              emoji: a,
              ephemeralDuration: i,
              newUpdateTime: u,
              textString: d,
            });
            return r
              ? (yield o("WAWebDBUpdateContactTable").updateContactTable(
                  t,
                  babelHelpers.extends({}, r),
                ),
                r)
              : null;
          }),
        );
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
