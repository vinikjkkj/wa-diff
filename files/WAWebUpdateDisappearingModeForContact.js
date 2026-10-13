__d(
  "WAWebUpdateDisappearingModeForContact",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebDBUpdateContactTable",
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
            var u = c({
              contact: s,
              newDuration: r,
              newEphemeralityDisabled: a,
              newSettingTimestamp: i,
            });
            if (u) {
              var d = u.contactChange,
                m = u.effectiveDuration,
                p = u.effectiveSettingTimestamp,
                _ = u.ephemeralityDisabledInFrontend;
              (yield o("WAWebDBUpdateContactTable").updateContactTable(l, d),
                o("WAWebBackendApi").frontendFireAndForget(
                  "updateDisappearingMode",
                  {
                    disappearingModeDuration: m,
                    disappearingModeSettingTimestamp: p,
                    contactId: l,
                    isEphemeralityDisabled: _,
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
                    m,
                    p,
                  )
                  .tags("DM", "DDM"));
            }
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      var t,
        n = e.contact,
        r = e.newDuration,
        o = e.newEphemeralityDisabled,
        a = e.newSettingTimestamp,
        i = n.disappearingModeSettingTimestamp,
        l = (i == null && a !== 0) || (i != null && i < a),
        s = {},
        u = n.isEphemeralityDisabled,
        c = !1;
      if (
        (o === !0 && n.isEphemeralityDisabled !== !0
          ? ((s.isEphemeralityDisabled = !0), (u = !0), (c = !0))
          : o === !1 &&
            n.isEphemeralityDisabled != null &&
            ((s.isEphemeralityDisabled = void 0), (u = void 0), (c = !0)),
        !l && !c)
      )
        return null;
      l &&
        ((s.disappearingModeDuration = r),
        (s.disappearingModeSettingTimestamp = a));
      var d = l ? r : (t = n.disappearingModeDuration) != null ? t : 0,
        m = l ? a : i != null ? i : 0;
      return {
        contactChange: s,
        ephemeralityDisabledInFrontend: u,
        effectiveDuration: d,
        effectiveSettingTimestamp: m,
      };
    }
    l.updateDisappearingModeForContact = s;
  },
  98,
);
