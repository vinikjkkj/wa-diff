__d(
  "WAWebSuspiciousLinkChecksState",
  ["WAUrlSpoofChecksWasmInstance", "WAWebBaseModel", "WAWebGetters"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.id = o("WAWebBaseModel").prop("suspicious-link-checks")),
            (t.initialized = o("WAWebBaseModel").session(!1)),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WAWebBaseModel").BaseModel),
      s = new (o("WAWebBaseModel").defineModel(e))({
        initialized: o(
          "WAUrlSpoofChecksWasmInstance",
        ).isSuspiciousHostChecksInitialized(),
      }),
      u = o("WAWebGetters").createGetterFactories(),
      c = u.field,
      d = c("initialized");
    function m() {
      o("WAUrlSpoofChecksWasmInstance").isSuspiciousHostChecksInitialized() &&
        (s.initialized = !0);
    }
    ((l.SuspiciousLinkChecksState = s),
      (l.getSuspiciousLinkChecksInitialized = d),
      (l.publishSuspiciousLinkChecksReadiness = m));
  },
  98,
);
