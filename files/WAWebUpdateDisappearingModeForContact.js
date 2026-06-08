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
                m = u.ephemeralityDisabledInFrontend;
              (yield o("WAWebDBUpdateContactTable").updateContactTable(l, d),
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
        })),
        u.apply(this, arguments)
      );
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
    l.updateDisappearingModeForContact = s;
  },
  98,
);
