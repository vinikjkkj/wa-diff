__d(
  "WAWebInAppSignupInfoStore",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebInAppSignupInfoCache",
    "WAWebSchemaInAppSignupInfo",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = null;
    function d() {
      return o("WAWebSchemaInAppSignupInfo").canUseInAppSignupInfoTable()
        ? (c == null &&
            (c = o("WAWebSchemaInAppSignupInfo")
              .getInAppSignupInfoTable()
              .all()
              .then(function (e) {
                o("WAWebInAppSignupInfoCache").primeInAppSignupInfoCache(e);
              })
              .catch(function (t) {
                ((c = null),
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[ias-store] hydrate failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(t))
                    .sendLogs("ias-store-hydrate-failed"));
              })),
          c)
        : (u || (u = n("Promise"))).resolve();
    }
    function m() {
      ((c = null), o("WAWebInAppSignupInfoCache").clearInAppSignupInfoCache());
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            o("WAWebABProps").getABPropConfigValue(
              "inapp_signup_m1_logging_enabled",
            ) &&
            o("WAWebSchemaInAppSignupInfo").canUseInAppSignupInfoTable()
          )
            try {
              yield d();
              var n = o("WAWebSchemaInAppSignupInfo").getInAppSignupInfoTable(),
                a = o(
                  "WAWebInAppSignupInfoCache",
                ).buildMergedInAppSignupInfoRow(e, t);
              (yield n.createOrMerge(a.id, a),
                o("WAWebInAppSignupInfoCache").setInAppSignupInfo(a));
            } catch (e) {
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[ias-store] write failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("ias-store-write-failed");
            }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          if (
            o("WAWebABProps").getABPropConfigValue(
              "inapp_signup_m1_logging_enabled",
            )
          ) {
            yield d();
            var r = o("WAWebInAppSignupInfoCache").getInAppSignupInfo(e);
            (r == null ? void 0 : r.iasOptinDs) == null &&
              (yield p(e, {
                isIasSubscriber: !0,
                iasOptinDs: C(),
                iasEntryPoint:
                  (n = r == null ? void 0 : r.iasEntryPoint) != null ? n : t,
              }));
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          o("WAWebABProps").getABPropConfigValue(
            "inapp_signup_m1_logging_enabled",
          ) &&
            (yield d(),
            ((n = o("WAWebInAppSignupInfoCache").getInAppSignupInfo(e)) == null
              ? void 0
              : n.iasOptinDs) == null && (yield p(e, { iasEntryPoint: t })));
        })),
        y.apply(this, arguments)
      );
    }
    function C() {
      return new Intl.DateTimeFormat("en-CA", {
        timeZone: "America/Los_Angeles",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
        .format(o("WATimeUtils").unixTimeMs())
        .replace(/-/g, "/");
    }
    ((l.ensureInAppSignupInfoHydrated = d),
      (l.clearInAppSignupInfo = m),
      (l.saveOptinDate = f),
      (l.saveEntryPoint = h));
  },
  98,
);
