__d(
  "WAWebHatchCvmConnect",
  [
    "WALogger",
    "WAWebHatchAttestationLoader",
    "WAWebHatchCvmAttestedVms",
    "WAWebHatchCvmCriticalEvents",
    "WAWebHatchCvmKey",
    "WAWebHatchCvmSecretPref",
    "WAWebHatchFrontendGating",
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
      d,
      m = "staging",
      p = { cause: "superseded", detail: "The connect is no longer wanted" };
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.acceptLanguage,
            n = e.credentials,
            a = e.isStillWanted,
            i = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            l = yield o("WAWebHatchCvmSecretPref").readHatchCvmSecret();
          if (l == null)
            return {
              cause: "cvm_key_not_found",
              detail: "No CVM secret on this device",
            };
          if (!a()) return p;
          var s = yield L(n, l.key, t);
          if ((s == null ? void 0 : s.cause) !== "cvm_key_rejected")
            return h(s);
          if (!a()) return p;
          o("WAWebHatchVmCredentials").waWebHatchVmCredentials.refreshVm(n);
          var u = yield o(
            "WAWebHatchVmCredentials",
          ).waWebHatchVmCredentials.resolve();
          if (!a()) return p;
          if (u.kind !== "ok") return s;
          if (u.credentials.confidential !== !0)
            return (
              S(u.credentials),
              {
                cause: "cvm_downgrade_refused",
                detail: "The refetched VM is not confidential",
              }
            );
          R(u.credentials);
          var m = yield L(u.credentials, l.key, t);
          return (
            (m == null ? void 0 : m.cause) === "cvm_key_rejected" &&
              (o("WALogger")
                .LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-cvm: VM rejected the key twice, dropping S",
                    ])),
                )
                .sendLogs("hatch-cvm-key-rejected"),
              o("WAWebHatchCvmCriticalEvents").reportHatchCvmCriticalEvent(
                "noise_cvm_key_rejected",
              ),
              yield o("WAWebHatchCvmSecretPref")
                .removeHatchCvmSecret({ generation: l.generation, ownerLid: i })
                .catch(function (e) {
                  o("WALogger")
                    .WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "hatch-cvm: rejected S not removed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("hatch-cvm-key-remove-failed");
                })),
            h(m)
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g() {
      o("WAWebHatchCvmSecretPref").peekHatchCvmReadOnlyInputs().hasSecret &&
        (o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-cvm: standard dial while this account holds a CVM key",
              ])),
          )
          .sendLogs("hatch-cvm-standard-dial-with-key"),
        o("WAWebHatchCvmCriticalEvents").reportHatchCvmCriticalEvent(
          "noise_standard_dial_with_stored_cvm_key",
        ));
    }
    function h(e) {
      var t = (function (e) {
        return e === "attestation_rejected"
          ? "noise_cvm_attestation_failed"
          : e === "cvm_enrollment_required"
            ? "noise_cvm_security_failure"
            : null;
      })(e == null ? void 0 : e.cause);
      return (
        t != null &&
          o("WAWebHatchCvmCriticalEvents").reportHatchCvmCriticalEvent(t),
        e
      );
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebHatchCvmSecretPref").readHatchCvmVmType();
          if (
            e === "confidential" &&
            o("WAWebHatchFrontendGating").isHatchCvmEnabled()
          )
            return !0;
          if (r("WAWebHatchLinkedStatusManager").getLinkedStatus() == null)
            throw r("err")("Muse linked status not fetched yet");
          return k() === "CVM";
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.confidential === !0) return !1;
          if (o("WAWebHatchCvmAttestedVms").isHatchCvmVmAttested(e.vmId))
            return (S(e), !0);
          var t = yield y();
          return t ? (S(e), !0) : !1;
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      (o("WALogger")
        .WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "hatch-vm: refused a standard VM for a confidential account",
            ])),
        )
        .sendLogs("hatch-vm-cvm-downgrade-refused"),
        o("WAWebHatchCvmAttestedVms").isHatchCvmVmAttested(e.vmId) &&
          o("WAWebHatchCvmCriticalEvents").reportHatchCvmCriticalEvent(
            "noise_standard_dial_to_attested_vm",
          ),
        o("WAWebHatchVmCredentials").waWebHatchVmCredentials.refreshVm(e));
    }
    function R(e) {
      o("WAWebHatchCvmSecretPref")
        .saveHatchCvmVmType(
          o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
          e.confidential === !0 ? "confidential" : "standard",
        )
        .catch(function (e) {
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-cvm: VM type not saved",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("hatch-cvm-vm-type-failed");
        });
    }
    function L(e, t, n) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
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
                      babelHelpers.extends({}, e, { tier: m }),
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
          e: {
            var l = i;
            if (
              ((typeof l == "object" && l !== null) ||
                typeof l == "function") &&
              l.kind === "Ready"
            ) {
              return (
                o("WAWebHatchCvmAttestedVms").markHatchCvmVmAttested(e.vmId),
                null
              );
              break e;
            }
            if (
              ((typeof l == "object" && l !== null) ||
                typeof l == "function") &&
              l.kind === "Failure" &&
              "cause" in l &&
              "detail" in l
            ) {
              var s = l.cause,
                u = l.detail;
              return { cause: s, detail: u };
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                l,
            );
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k() {
      var e = r("WAWebHatchLinkedStatusManager").getLinkedStatus();
      return (e == null ? void 0 : e.hasChannel) === !0 && e.status === "ACTIVE"
        ? e.vmType
        : null;
    }
    ((l.connectHatchConfidentialVm = _),
      (l.reportHatchStandardDialWithStoredCvmKey = g),
      (l.isHatchCvmExpected = y),
      (l.refuseHatchCvmDowngrade = b),
      (l.recordHatchVmType = R));
  },
  98,
);
