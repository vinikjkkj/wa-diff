__d(
  "WAWebHatchLinkedStatusFetcher",
  [
    "WALogger",
    "WAWebCanonicalHatchLinkedStatusGetQuery",
    "WAWebHatchCvmSecretPref",
    "WAWebHatchLinkedStatusManager",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = !1,
            n = r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(
              function () {
                t || (t = r("WAWebHatchLinkedStatusManager").isUnlinked());
              },
            ),
            a;
          try {
            a = yield o(
              "WAWebCanonicalHatchLinkedStatusGetQuery",
            ).fetchHatchLinkedStatus();
          } finally {
            n();
          }
          var i = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
          if (a == null || i == null || t) return a;
          try {
            yield o("WAWebHatchCvmSecretPref").applyHatchCvmLinkedStatus({
              ownerLid: i,
              status: a,
            });
          } catch (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-cvm: VM type from the linked status not saved",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("hatch-cvm-linked-vm-type-failed");
          }
          return a;
        })),
        u.apply(this, arguments)
      );
    }
    l.fetchHatchLinkedStatusAndSaveCvmState = s;
  },
  98,
);
