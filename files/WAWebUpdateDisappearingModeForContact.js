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
            var u = c(s, r, i, a);
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
    function c(e, t, n, r) {
      var o,
        a = e.disappearingModeSettingTimestamp,
        i = (a == null && n !== 0) || (a != null && a < n),
        l = {},
        s = e.isEphemeralityDisabled,
        u = !1;
      if (
        (r === !0 && e.isEphemeralityDisabled !== !0
          ? ((l.isEphemeralityDisabled = !0), (s = !0), (u = !0))
          : r === !1 &&
            e.isEphemeralityDisabled != null &&
            ((l.isEphemeralityDisabled = void 0), (s = void 0), (u = !0)),
        !i && !u)
      )
        return null;
      i &&
        ((l.disappearingModeDuration = t),
        (l.disappearingModeSettingTimestamp = n));
      var c = i ? t : (o = e.disappearingModeDuration) != null ? o : 0,
        d = i ? n : a != null ? a : 0;
      return {
        contactChange: l,
        ephemeralityDisabledInFrontend: s,
        effectiveDuration: c,
        effectiveSettingTimestamp: d,
      };
    }
    l.updateDisappearingModeForContact = s;
  },
  98,
);
