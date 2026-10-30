__d(
  "WAWebHatchCvmConnect",
  [
    "WALogger",
    "WAWebHatchAttestationLoader",
    "WAWebHatchCvmKey",
    "WAWebHatchCvmSecretPref",
    "WAWebHatchLinkedStatusManager",
    "WAWebHatchVmCredentials",
    "WAWebHatchVmSession",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = "staging",
      m = { cause: "superseded", detail: "The connect is no longer wanted" };
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.acceptLanguage,
            n = e.credentials,
            a = e.isStillWanted,
            i = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            l = yield o("WAWebHatchCvmSecretPref").readHatchCvmSecret(i);
          if (l == null)
            return {
              cause: "cvm_key_not_found",
              detail: "No CVM secret on this device",
            };
          if (!a()) return m;
          var s = yield v(n, l.key, t);
          if ((s == null ? void 0 : s.cause) !== "cvm_key_rejected") return s;
          if (!a()) return m;
          o("WAWebHatchVmCredentials").waWebHatchVmCredentials.refreshVm(n);
          var d = yield o(
            "WAWebHatchVmCredentials",
          ).waWebHatchVmCredentials.resolve();
          if (!a()) return m;
          if (d.kind !== "ok") return s;
          if (d.credentials.confidential !== !0)
            return (
              C(d.credentials),
              {
                cause: "cvm_downgrade_refused",
                detail: "The refetched VM is not confidential",
              }
            );
          b(d.credentials);
          var p = yield v(d.credentials, l.key, t);
          return (
            (p == null ? void 0 : p.cause) === "cvm_key_rejected" &&
              (o("WALogger")
                .LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-cvm: VM rejected the key twice, dropping S",
                    ])),
                )
                .sendLogs("hatch-cvm-key-rejected"),
              yield o("WAWebHatchCvmSecretPref")
                .removeHatchCvmSecret({ generation: l.generation, ownerLid: i })
                .catch(function (e) {
                  o("WALogger")
                    .WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "hatch-cvm: rejected S not removed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("hatch-cvm-key-remove-failed");
                })),
            p
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.ownerLid,
            n = yield o("WAWebHatchCvmSecretPref").readHatchCvmVmType(t);
          if (n === "confidential") return !0;
          if (r("WAWebHatchLinkedStatusManager").getLinkedStatus() == null)
            throw r("err")("Muse linked status not fetched yet");
          return R() === "CVM";
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.confidential === !0) return !1;
          var t = yield f({
            ownerLid: o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
          });
          return t ? (C(e), !0) : !1;
        })),
        y.apply(this, arguments)
      );
    }
    function C(t) {
      (o("WALogger")
        .WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "hatch-vm: refused a standard VM for a confidential account",
            ])),
        )
        .sendLogs("hatch-vm-cvm-downgrade-refused"),
        o("WAWebHatchVmCredentials").waWebHatchVmCredentials.refreshVm(t));
    }
    function b(e) {
      o("WAWebHatchCvmSecretPref")
        .saveHatchCvmVmType(
          o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
          e.confidential === !0 ? "confidential" : "standard",
        )
        .catch(function (e) {
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-cvm: VM type not saved",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("hatch-cvm-vm-type-failed");
        });
    }
    function v(e, t, n) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = {
              resolveRvKey: function () {
                return o("WAWebHatchCvmKey").deriveCvmRvKey(t, e.vmId);
              },
              verifyAttestation: (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = yield o(
                      "WAWebHatchAttestationLoader",
                    ).loadHatchAttestationApi();
                    return t.verifyHatchCvmAttestation(
                      babelHelpers.extends({}, e, { tier: d }),
                    );
                  },
                );
                function t(t) {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            },
            i = yield o(
              "WAWebHatchVmSession",
            ).waWebHatchVmSession.connectConfidential({
              acceptLanguage: r,
              credentials: e,
              privateAuth: a,
            });
          return (function (e) {
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "Ready"
            )
              return null;
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "Failure" &&
              "cause" in e &&
              "detail" in e
            ) {
              var t = e.cause,
                n = e.detail;
              return { cause: t, detail: n };
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })(i);
        })),
        S.apply(this, arguments)
      );
    }
    function R() {
      var e = r("WAWebHatchLinkedStatusManager").getLinkedStatus();
      return (e == null ? void 0 : e.hasChannel) === !0 && e.status === "ACTIVE"
        ? e.vmType
        : null;
    }
    ((l.connectHatchConfidentialVm = p),
      (l.isHatchCvmExpected = f),
      (l.refuseHatchCvmDowngrade = h),
      (l.recordHatchVmType = b));
  },
  98,
);
