__d(
  "WAWebCoexStateSyncCoordinator",
  [
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebCoexCanonicalStateQuery",
    "WAWebCoexProductStateStore",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = 6e4,
      p = null,
      _ = null;
    function f(e) {
      if (p != null) return ((_ = e), p);
      var t = g(e);
      return ((p = t), t);
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            yield y(t);
          } catch (n) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "coexStateSync/",
                    "/threw",
                  ])),
                t,
              )
              .catching(r("getErrorSafe")(n))
              .sendLogs("coex-state-sync-threw");
          }
          var n = _;
          if (((_ = null), n == null)) {
            p = null;
            return;
          }
          return g(n);
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r =
              (t = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(!1)) == null
                ? void 0
                : t.toString();
          if (r == null) {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "coexStateSync/",
                  "/skipped/logged-out",
                ])),
              e,
            );
            return;
          }
          var a = Date.now(),
            i;
          try {
            i = yield o("WAPromiseTimeout").promiseTimeout(
              o("WAWebCoexCanonicalStateQuery").fetchCoexCanonicalMembership(),
              m,
            );
          } catch (t) {
            if (t instanceof o("WACustomError").TimeoutError) {
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "coexStateSync/",
                    "/timed-out",
                  ])),
                e,
              );
              return;
            }
            throw t;
          }
          if (
            r !==
            ((n = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(!1)) == null
              ? void 0
              : n.toString())
          ) {
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "coexStateSync/",
                  "/dropped/account-changed",
                ])),
              e,
            );
            return;
          }
          (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "coexStateSync/",
                "/",
                "",
              ])),
            e,
            b(i),
          ),
            i.type === "authoritative" &&
              o("WAWebCoexProductStateStore").saveCoexProductState({
                surfaces: i.surfaces,
                fetchedAtMs: a,
              }));
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "authoritative" &&
          "surfaces" in e
        ) {
          var t = e.surfaces;
          return "authoritative/[" + t.join(",") + "]";
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "rejected" &&
          "reason" in e
        ) {
          var n = e.reason;
          return "rejected/" + n;
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.type === "failed" &&
          "reason" in e
        ) {
          var r = e.reason;
          return "failed/" + r;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    l.requestCoexStateRefresh = f;
  },
  98,
);
