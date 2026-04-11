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
            var u = s.disappearingModeSettingTimestamp;
            if ((u == null && i !== 0) || (u != null && u < i)) {
              var c = {
                  disappearingModeDuration: r,
                  disappearingModeSettingTimestamp: i,
                },
                d = s.isEphemeralityDisabled;
              (a === !0 && s.isEphemeralityDisabled !== !0
                ? ((c.isEphemeralityDisabled = !0), (d = !0))
                : a === !1 &&
                  s.isEphemeralityDisabled != null &&
                  ((c.isEphemeralityDisabled = void 0), (d = void 0)),
                yield o("WAWebDBUpdateContactTable").updateContactTable(l, c),
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
    l.updateDisappearingModeForContact = s;
  },
  98,
);
