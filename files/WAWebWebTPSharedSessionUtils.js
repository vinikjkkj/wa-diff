__d(
  "WAWebWebTPSharedSessionUtils",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebSchemaWebTPSharedSession",
    "asyncToGeneratorRuntime",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d;
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          try {
            if (r != null) {
              yield S();
              var a = yield g();
              yield y(a);
            }
            var i = o("WATimeUtils").unixTime(),
              l = o(
                "WAWebSchemaWebTPSharedSession",
              ).getWebTPSharedSessionTable();
            yield l.createOrReplace({
              sessionId: t,
              fileName: n,
              expiresAt: o("WATimeUtils").castToUnixTime(
                i + o("WATimeUtils").DAY_SECONDS,
              ),
              fileBuffer: r,
            });
          } catch (t) {
            throw (
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[PDF3PBridge] Failed to store shared session: ",
                    "",
                  ])),
                t,
              ),
              t
            );
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = o(
                "WAWebSchemaWebTPSharedSession",
              ).getWebTPSharedSessionTable(),
              n = yield t.get(e);
            if (!n) return null;
            var r = o("WATimeUtils").unixTime();
            return n.expiresAt <= r ? (yield t.remove(e), null) : n;
          } catch (e) {
            throw (
              o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[PDF3PBridge] Failed to get shared session: ",
                    "",
                  ])),
                e,
              ),
              e
            );
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o(
              "WAWebSchemaWebTPSharedSession",
            ).getWebTPSharedSessionTable(),
            t = o("WATimeUtils").unixTime(),
            n = yield e.betweenCount(["expiresAt"], t, 1 / 0);
          return n;
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
          try {
            var t = r("justknobx")._("2196"),
              n = e - t + 1;
            if (n <= 0) return;
            var a = o(
                "WAWebSchemaWebTPSharedSession",
              ).getWebTPSharedSessionTable(),
              i = o("WATimeUtils").unixTime(),
              l = yield a.bulkDeleteRange(["expiresAt"], i, 1 / 0, {
                limit: n,
              });
          } catch (e) {
            throw (
              o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[PDF3PBridge] Failed to evict sessions: ",
                    "",
                  ])),
                e,
              ),
              e
            );
          }
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
          try {
            var t = o(
              "WAWebSchemaWebTPSharedSession",
            ).getWebTPSharedSessionTable();
            yield t.merge(e, { fileBuffer: void 0 });
          } catch (e) {
            throw (
              o("WALogger").ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[PDF3PBridge] Failed to clear file buffer: ",
                    "",
                  ])),
                e,
              ),
              e
            );
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = o(
                "WAWebSchemaWebTPSharedSession",
              ).getWebTPSharedSessionTable(),
              t = o("WATimeUtils").unixTime(),
              n = yield e.bulkDeleteRange(["expiresAt"], 0, t);
          } catch (e) {
            throw (
              o("WALogger").ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[PDF3PBridge] Failed to remove expired sessions: ",
                    "",
                  ])),
                e,
              ),
              e
            );
          }
        })),
        R.apply(this, arguments)
      );
    }
    ((l.storeWebTPSharedSession = m),
      (l.getWebTPSharedSession = _),
      (l.clearWebTPSharedSessionFileBuffer = b),
      (l.removeExpiredWebTPSharedSessions = S));
  },
  98,
);
