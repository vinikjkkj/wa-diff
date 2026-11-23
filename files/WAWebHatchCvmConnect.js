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
    "WAWebUserUtils",
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
    async function _(t) {
      var n = t.acceptLanguage,
        a = t.credentials,
        i = t.isStillWanted,
        l = o("WAWebUserUtils").getMeLidUserOrThrow(),
        u = await o("WAWebHatchCvmSecretPref").readHatchCvmSecret();
      if (u == null)
        return {
          cause: "cvm_key_not_found",
          detail: "No CVM secret on this device",
        };
      if (!i()) return p;
      var c = await v(a, u.key, n);
      if ((c == null ? void 0 : c.cause) !== "cvm_key_rejected") return g(c);
      if (!i()) return p;
      o("WAWebHatchVmCredentials").waWebHatchVmCredentials.refreshVm(a);
      var d = await o(
        "WAWebHatchVmCredentials",
      ).waWebHatchVmCredentials.resolve();
      if (!i()) return p;
      if (d.kind !== "ok") return c;
      if (d.credentials.confidential !== !0)
        return (
          C(d.credentials),
          {
            cause: "cvm_downgrade_refused",
            detail: "The refetched VM is not confidential",
          }
        );
      b(d.credentials);
      var m = await v(d.credentials, u.key, n);
      return (
        (m == null ? void 0 : m.cause) === "cvm_key_rejected" &&
          (o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-cvm: VM rejected the key twice, dropping S",
                ])),
            )
            .sendLogs("hatch-cvm-key-rejected"),
          o("WAWebHatchCvmCriticalEvents").reportHatchCvmCriticalEvent(
            "noise_cvm_key_rejected",
          ),
          await o("WAWebHatchCvmSecretPref")
            .removeHatchCvmSecret({ generation: u.generation, ownerLid: l })
            .catch(function (e) {
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-cvm: rejected S not removed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("hatch-cvm-key-remove-failed");
            })),
        g(m)
      );
    }
    function f() {
      o("WAWebHatchCvmSecretPref").peekHatchCvmReadOnlyInputs().hasSecret &&
        (o("WALogger")
          .WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-cvm: standard dial while this account holds a CVM key",
              ])),
          )
          .sendLogs("hatch-cvm-standard-dial-with-key"),
        o("WAWebHatchCvmCriticalEvents").reportHatchCvmCriticalEvent(
          "noise_standard_dial_with_stored_cvm_key",
        ));
    }
    function g(e) {
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
    async function h() {
      var e = await o("WAWebHatchCvmSecretPref").readHatchCvmVmType();
      if (
        e === "confidential" &&
        o("WAWebHatchFrontendGating").isHatchCvmEnabled()
      )
        return !0;
      if (r("WAWebHatchLinkedStatusManager").getLinkedStatus() == null)
        throw r("err")("Muse linked status not fetched yet");
      return S() === "CVM";
    }
    async function y(e) {
      if (e.confidential === !0) return !1;
      if (o("WAWebHatchCvmAttestedVms").isHatchCvmVmAttested(e.vmId))
        return (C(e), !0);
      var t = await h();
      return t ? (C(e), !0) : !1;
    }
    function C(e) {
      (o("WALogger")
        .WARN(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
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
    function b(e) {
      o("WAWebHatchCvmSecretPref")
        .saveHatchCvmVmType(
          o("WAWebUserUtils").getMeLidUserOrThrow(),
          e.confidential === !0 ? "confidential" : "standard",
        )
        .catch(function (e) {
          o("WALogger")
            .WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-cvm: VM type not saved",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("hatch-cvm-vm-type-failed");
        });
    }
    async function v(e, t, n) {
      var r = {
          resolveRvKey: function () {
            return o("WAWebHatchCvmKey").deriveCvmRvKey(t, e.vmId);
          },
          verifyAttestation: async function (t) {
            var e = await o(
              "WAWebHatchAttestationLoader",
            ).loadHatchAttestationApi();
            return e.verifyHatchCvmAttestation(
              babelHelpers.extends({}, t, { tier: m }),
            );
          },
        },
        a = await o(
          "WAWebHatchVmSession",
        ).waWebHatchVmSession.connectConfidential({
          acceptLanguage: n,
          credentials: e,
          privateAuth: r,
        });
      e: {
        var i = a;
        if (
          ((typeof i == "object" && i !== null) || typeof i == "function") &&
          i.kind === "Ready"
        ) {
          return (
            o("WAWebHatchCvmAttestedVms").markHatchCvmVmAttested(e.vmId),
            null
          );
          break e;
        }
        if (
          ((typeof i == "object" && i !== null) || typeof i == "function") &&
          i.kind === "Failure" &&
          "cause" in i &&
          "detail" in i
        ) {
          var l = i.cause,
            s = i.detail;
          return { cause: l, detail: s };
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            i,
        );
      }
    }
    function S() {
      var e = r("WAWebHatchLinkedStatusManager").getLinkedStatus();
      return (e == null ? void 0 : e.hasChannel) === !0 && e.status === "ACTIVE"
        ? e.vmType
        : null;
    }
    ((l.connectHatchConfidentialVm = _),
      (l.reportHatchStandardDialWithStoredCvmKey = f),
      (l.isHatchCvmExpected = h),
      (l.refuseHatchCvmDowngrade = y),
      (l.recordHatchVmType = b));
  },
  98,
);
