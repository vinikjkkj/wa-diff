__d(
  "WAWebUpdateDisappearingModeForContact",
  [
    "WAJids",
    "WALogger",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebDBUpdateContactTable",
    "WAWebLidAwareContactsDB",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.contactId,
            r = t.newDuration,
            a = t.newEphemeralityDisabled,
            i = t.newSettingTimestamp,
            l = o("WAWebWidFactory").createUserWidOrThrow(n.user, n.server),
            s = yield o("WAWebApiContact").getContactRecord(l);
          if (s) {
            var u = m(s, r, i, a);
            if (u) {
              var c = u.contactChange,
                d = u.ephemeralityDisabledInFrontend;
              (yield o("WAWebDBUpdateContactTable").updateContactTable(l, c),
                o("WAWebBackendApi").frontendFireAndForget(
                  "updateDisappearingMode",
                  {
                    disappearingModeDuration: r,
                    disappearingModeSettingTimestamp: i,
                    contactId: l,
                    isEphemeralityDisabled: d,
                  },
                ),
                o("WALogger")
                  .LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "updateDisappearingMode: Contact=",
                        " updated, new duration=",
                        " t=",
                        ".",
                      ])),
                    l.toLogString(),
                    r,
                    i,
                  )
                  .tags("DM", "DDM"));
            }
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                var c = m(
                  u,
                  s.newDuration,
                  s.newSettingTimestamp,
                  s.newEphemeralityDisabled,
                );
                if (c) {
                  var d = c.contactChange,
                    p = c.ephemeralityDisabledInFrontend,
                    _ = s.contactUserWid.isLid()
                      ? o("WAJids").toLidUserJid(s.contactUserWid.user)
                      : o("WAJids").toPhoneUserJid(s.contactUserWid.user);
                  (a.push(babelHelpers.extends({ id: _ }, d)),
                    i.push({
                      contactId: s.contactUserWid,
                      newDuration: s.newDuration,
                      newSettingTimestamp: s.newSettingTimestamp,
                      ephemeralityDisabledInFrontend: p,
                    }));
                }
              }
            }
            if (a.length !== 0) {
              yield r("WAWebLidAwareContactsDB").bulkMergeOnly(
                a,
                "updateDisappearingModeForContactsBatch",
              );
              for (var f of i)
                o("WAWebBackendApi").frontendFireAndForget(
                  "updateDisappearingMode",
                  {
                    disappearingModeDuration: f.newDuration,
                    disappearingModeSettingTimestamp: f.newSettingTimestamp,
                    contactId: f.contactId,
                    isEphemeralityDisabled: f.ephemeralityDisabledInFrontend,
                  },
                );
            }
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t, n, r) {
      var o = e.disappearingModeSettingTimestamp;
      if (!((o == null && n !== 0) || (o != null && o < n))) return null;
      var a = {
          disappearingModeDuration: t,
          disappearingModeSettingTimestamp: n,
        },
        i = e.isEphemeralityDisabled;
      return (
        r === !0 && e.isEphemeralityDisabled !== !0
          ? ((a.isEphemeralityDisabled = !0), (i = !0))
          : r === !1 &&
            e.isEphemeralityDisabled != null &&
            ((a.isEphemeralityDisabled = void 0), (i = void 0)),
        { contactChange: a, ephemeralityDisabledInFrontend: i }
      );
    }
    ((l.updateDisappearingModeForContact = s),
      (l.updateDisappearingModeForContactsBatch = c));
  },
  98,
);
