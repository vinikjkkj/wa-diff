__d(
  "WAWebOrgDirectoryBridgeApi",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return r("JSResourceForInteraction")("WAWebBootstrapOrgDirectory")
            .__setRef("WAWebOrgDirectoryBridgeApi")
            .load();
        }),
        "OrgDirectoryBootstrap",
      ),
      u = {
        bootstrapOrgDirectory: function (n) {
          var t = n.accountKey;
          s()
            .then(function (e) {
              return e.bootstrapOrgDirectory(t);
            })
            .catch(function (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[org-directory] bootstrap failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("org-directory-bootstrap-failed");
            });
        },
      };
    l.OrgDirectoryBridgeApi = u;
  },
  98,
);
