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
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return e === "mex-notification" || e === "mex-notification-side-sub";
    }
    async function u(t) {
      var n = t.contactId,
        r = t.emoji,
        a = t.ephemeralDuration,
        i = t.newUpdateTime,
        l = t.source,
        u = t.textString,
        c = o("WAWebWidFactory").createUserWidOrThrow(n.user, n.server),
        m = await o("WAWebApiContact").getContactRecord(c);
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
            .sendLogs("text-status-notification-no-contact", { sampling: 0.1 });
        return;
      }
      var p = d(m, u, r, a, i);
      p &&
        (await o("WAWebDBUpdateContactTable").updateContactTable(
          c,
          babelHelpers.extends({}, p),
        ),
        o("WAWebBackendApi").frontendFireAndForget(
          "updateTextStatus",
          babelHelpers.extends({}, p, { contactId: c }),
        ));
    }
    async function c(e) {
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
            n = await o("WAWebApiContact").bulkGetContactRecord(
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
          await r("WAWebLidAwareContactsDB").bulkMergeOnly(
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
    }
    function d(e, t, n, r, a) {
      var i = e.textStatusLastUpdateTime,
        l =
          a ===
            o("WAWebTextStatusUtils").CLEAR_TEXT_STATUS_LAST_UPDATE_TIME_VAL ||
          a === o("WAWebTextStatusUtils").TEXT_STATUS_NOT_AUTHORIZED;
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
      (l.updateTextStatusForContactsBatch = c));
  },
  98,
);
