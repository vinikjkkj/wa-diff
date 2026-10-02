__d(
  "KeyTransparencyWasmVerification",
  ["KTWasm.pb", "KeyTransparencyWasmReactorSingleton", "MWFBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(t) {
      return (
        o("MWFBLogger")
          .MWLogger()
          .tags(["KeyTransparency"])
          .DEBUG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Running unified KT 1.0 (Signal) verification and comparison",
              ])),
          ),
        o("KeyTransparencyWasmReactorSingleton").keyTransparencyCommand(
          {
            InputSpec: o("KTWasm.pb").KeyTransparencyCommandSpec,
            ResultSpec:
              o("KTWasm.pb").VerifyKeyTransparencyForUserSignalResultSpec,
            validateResult: function (t) {
              var e;
              return t.success === !0
                ? { success: !0, value: !0 }
                : {
                    error:
                      (e = t.error) != null
                        ? e
                        : "Unknown verification/comparison error",
                    success: !1,
                  };
            },
          },
          { verifyKtForUserSignal: t },
        )
      );
    }
    function d(e) {
      return (
        o("MWFBLogger")
          .MWLogger()
          .tags(["KeyTransparency"])
          .DEBUG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Running unified KT 1.1 (Minos) verification and comparison",
              ])),
          ),
        o("KeyTransparencyWasmReactorSingleton").keyTransparencyCommand(
          {
            InputSpec: o("KTWasm.pb").KeyTransparencyCommandSpec,
            ResultSpec:
              o("KTWasm.pb").VerifyKeyTransparencyForUserMinosResultSpec,
            validateResult: function (t) {
              var e;
              return t.success === !0
                ? { success: !0, value: !0 }
                : {
                    error:
                      (e = t.error) != null
                        ? e
                        : "Unknown verification/comparison error",
                    success: !1,
                  };
            },
          },
          { verifyKtForUserMinos: e },
        )
      );
    }
    function m(e) {
      return (
        o("MWFBLogger")
          .MWLogger()
          .tags(["KeyTransparency"])
          .DEBUG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "Running unified Mandrake verification and comparison",
              ])),
          ),
        o("KeyTransparencyWasmReactorSingleton").keyTransparencyCommand(
          {
            InputSpec: o("KTWasm.pb").KeyTransparencyCommandSpec,
            ResultSpec:
              o("KTWasm.pb").VerifyKeyTransparencyForUserMandrakeResultSpec,
            validateResult: function (t) {
              var e;
              return t.success === !0
                ? { success: !0, value: !0 }
                : {
                    error:
                      (e = t.error) != null
                        ? e
                        : "Unknown verification/comparison error",
                    success: !1,
                  };
            },
          },
          { verifyKtForUserMandrake: e },
        )
      );
    }
    ((l.verifyKeyTransparencyForUserSignal = c),
      (l.verifyKeyTransparencyForUserMinos = d),
      (l.verifyKeyTransparencyForUserMandrake = m));
  },
  98,
);
