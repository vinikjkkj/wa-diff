__d(
  "WAWebUpdateTextStatusForContact",
  [
    "WAJids",
    "WALogger",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebDBUpdateContactTable",
    "WAWebLidAwareContactsDB",
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
            d = yield o("WAWebApiContact").getContactRecord(c);
          if (!d) {
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
          var m = p(d, u, r, a, i);
          m &&
            (yield o("WAWebDBUpdateContactTable").updateContactTable(
              c,
              babelHelpers.extends({}, m),
            ),
            o("WAWebBackendApi").frontendFireAndForget(
              "updateTextStatus",
              babelHelpers.extends({}, m, { contactId: c }),
            ));
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length !== 0) {
            for (
              var t = e.map(function (e) {
                  return babelHelpers.extends({}, e, {
                    contactUserWid: o("WAWebWidFactory").createUserWidOrThrow(
                      e.contactId.user,
                      e.contactId.server,
                    ),
                  });
                }),
                n = yield o("WAWebApiContact").bulkGetContactRecord(
                  t.map(function (e) {
                    return e.contactUserWid;
                  }),
                ),
                a = [],
                i = [],
                l = 0;
              l < t.length;
              l++
            ) {
              var s = t[l],
                u = n[l];
              if (u) {
                var c = p(
                  u,
                  s.textString,
                  s.emoji,
                  s.ephemeralDuration,
                  s.newUpdateTime,
                );
                if (c) {
                  var d = s.contactUserWid.isLid()
                    ? o("WAJids").toLidUserJid(s.contactUserWid.user)
                    : o("WAJids").toPhoneUserJid(s.contactUserWid.user);
                  (a.push(babelHelpers.extends({ id: d }, c)),
                    i.push({ contactChange: c, contactId: s.contactUserWid }));
                }
              }
            }
            if (a.length !== 0) {
              yield r("WAWebLidAwareContactsDB").bulkMergeOnly(
                a,
                "updateTextStatusForContactsBatch",
              );
              for (var m of i)
                o("WAWebBackendApi").frontendFireAndForget(
                  "updateTextStatus",
                  babelHelpers.extends({}, m.contactChange, {
                    contactId: m.contactId,
                  }),
                );
            }
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n, r, a) {
      var i = e.textStatusLastUpdateTime,
        l =
          a ===
            o("WAWebTextStatusUtils").CLEAR_TEXT_STATUS_LAST_UPDATE_TIME_VAL ||
          a === o("WAWebTextStatusUtils").TEXT_STATUS_NOT_AUTHORIZED ||
          a === o("WAWebTextStatusUtils").TEXT_STATUS_NOT_FETCHED;
      if (a == null || (i != null && !l && a < i)) return null;
      var s = o("WAWebTextStatusUtils").resolveTextStatusUpdateTime(a, i),
        u;
      return (
        r != null && r > 0 && !l && (u = Number(a) + Number(r)),
        {
          textStatusString: t,
          textStatusEmoji: n,
          textStatusEphemeralDuration: r,
          textStatusLastUpdateTime: s,
          textStatusExpiryTs: u,
        }
      );
    }
    ((l.updateTextStatusForContact = u),
      (l.updateTextStatusForContactsBatch = d));
  },
  98,
);
