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
          var t,
            n = o("WAWebUserPrefsMeUser").getMaybeMeLidUser(),
            a = !1,
            i = r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(
              function () {
                a || (a = r("WAWebHatchLinkedStatusManager").isUnlinked());
              },
            ),
            l;
          try {
            l = yield o(
              "WAWebCanonicalHatchLinkedStatusGetQuery",
            ).fetchHatchLinkedStatus();
          } finally {
            i();
          }
          if (
            l == null ||
            n == null ||
            a ||
            ((t = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
              ? void 0
              : t.toString()) !== n.toString()
          )
            return l;
          try {
            yield o("WAWebHatchCvmSecretPref").applyHatchCvmLinkedStatus({
              ownerLid: n,
              status: l,
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
          return l;
        })),
        u.apply(this, arguments)
      );
    }
    l.fetchHatchLinkedStatusAndSaveCvmState = s;
  },
  98,
);
