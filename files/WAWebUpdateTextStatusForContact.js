__d(
  "WAWebUpdateTextStatusForContact",
  [
    "WAJids",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebDBUpdateContactTable",
    "WAWebLidAwareContactsDB",
    "WAWebTextStatusUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r, o) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            var i = o("WAWebWidFactory").createUserWidOrThrow(e.user, e.server),
              l = yield o("WAWebApiContact").getContactRecord(i);
            if (l) {
              var s = d(l, t, n, r, a);
              s &&
                (yield o("WAWebDBUpdateContactTable").updateContactTable(
                  i,
                  babelHelpers.extends({}, s),
                ),
                o("WAWebBackendApi").frontendFireAndForget(
                  "updateTextStatus",
                  babelHelpers.extends({}, s, { contactId: i }),
                ));
            }
          },
        )),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                var c = d(
                  u,
                  s.textString,
                  s.emoji,
                  s.ephemeralDuration,
                  s.newUpdateTime,
                );
                if (c) {
                  var m = s.contactUserWid.isLid()
                    ? o("WAJids").toLidUserJid(s.contactUserWid.user)
                    : o("WAJids").toPhoneUserJid(s.contactUserWid.user);
                  (a.push(babelHelpers.extends({ id: m }, c)),
                    i.push({ contactChange: c, contactId: s.contactUserWid }));
                }
              }
            }
            if (a.length !== 0) {
              yield r("WAWebLidAwareContactsDB").bulkMergeOnly(
                a,
                "updateTextStatusForContactsBatch",
              );
              for (var p of i)
                o("WAWebBackendApi").frontendFireAndForget(
                  "updateTextStatus",
                  babelHelpers.extends({}, p.contactChange, {
                    contactId: p.contactId,
                  }),
                );
            }
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n, r, a) {
      var i = e.textStatusLastUpdateTime;
      if (
        a == null ||
        (i != null &&
          a !==
            o("WAWebTextStatusUtils").CLEAR_TEXT_STATUS_LAST_UPDATE_TIME_VAL &&
          a < i)
      )
        return null;
      var l = o("WAWebTextStatusUtils").resolveTextStatusUpdateTime(a, i),
        s;
      return (
        r != null &&
          r > 0 &&
          a !==
            o("WAWebTextStatusUtils").CLEAR_TEXT_STATUS_LAST_UPDATE_TIME_VAL &&
          (s = Number(a) + Number(r)),
        {
          textStatusString: t,
          textStatusEmoji: n,
          textStatusEphemeralDuration: r,
          textStatusLastUpdateTime: l,
          textStatusExpiryTs: s,
        }
      );
    }
    ((l.updateTextStatusForContact = e),
      (l.updateTextStatusForContactsBatch = u));
  },
  98,
);
