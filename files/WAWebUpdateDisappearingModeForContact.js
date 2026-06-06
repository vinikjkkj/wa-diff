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
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      var n = t.contactId,
        r = t.newDuration,
        a = t.newEphemeralityDisabled,
        i = t.newSettingTimestamp,
        l = o("WAWebWidFactory").createUserWidOrThrow(n.user, n.server),
        s = await o("WAWebApiContact").getContactRecord(l);
      if (s) {
        var u = c(s, r, i, a);
        if (u) {
          var d = u.contactChange,
            m = u.ephemeralityDisabledInFrontend;
          (await o("WAWebDBUpdateContactTable").updateContactTable(l, d),
            o("WAWebBackendApi").frontendFireAndForget(
              "updateDisappearingMode",
              {
                disappearingModeDuration: r,
                disappearingModeSettingTimestamp: i,
                contactId: l,
                isEphemeralityDisabled: m,
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
    }
    async function u(e) {
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
            var d = c(
              u,
              s.newDuration,
              s.newSettingTimestamp,
              s.newEphemeralityDisabled,
            );
            if (d) {
              var m = d.contactChange,
                p = d.ephemeralityDisabledInFrontend,
                _ = s.contactUserWid.isLid()
                  ? o("WAJids").toLidUserJid(s.contactUserWid.user)
                  : o("WAJids").toPhoneUserJid(s.contactUserWid.user);
              (a.push(babelHelpers.extends({ id: _ }, m)),
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
          await r("WAWebLidAwareContactsDB").bulkMergeOnly(
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
    }
    function c(e, t, n, r) {
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
      (l.updateDisappearingModeForContactsBatch = u));
  },
  98,
);
