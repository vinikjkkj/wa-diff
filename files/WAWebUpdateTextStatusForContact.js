__d(
  "WAWebUpdateTextStatusForContact",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebDBUpdateContactTable",
    "WAWebLidAwareContactsDB",
    "WAWebTextStatusUtils",
    "WAWebWidFactory",
    "WAWebWidToJid",
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
          var m = p({
            contact: d,
            emoji: r,
            ephemeralDuration: a,
            newUpdateTime: i,
            textString: u,
          });
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
                var c = p({
                  contact: u,
                  emoji: s.emoji,
                  ephemeralDuration: s.ephemeralDuration,
                  newUpdateTime: s.newUpdateTime,
                  textString: s.textString,
                });
                if (c) {
                  var d = o("WAWebWidToJid").widToUserJid(s.contactUserWid);
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
    function p(e) {
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
    ((l.updateTextStatusForContact = u),
      (l.updateTextStatusForContactsBatch = d));
  },
  98,
);
