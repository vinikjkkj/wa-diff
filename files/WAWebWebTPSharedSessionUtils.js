__d(
  "WAWebWebTPSharedSessionUtils",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebRemoveExpiredWebTPSharedSessions",
    "WAWebSchemaWebTPSharedSession",
    "asyncToGeneratorRuntime",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c;
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          try {
            if (r != null) {
              yield o(
                "WAWebRemoveExpiredWebTPSharedSessions",
              ).removeExpiredWebTPSharedSessions();
              var a = yield f();
              yield h(a);
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
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        _.apply(this, arguments)
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o(
              "WAWebSchemaWebTPSharedSession",
            ).getWebTPSharedSessionTable(),
            t = o("WATimeUtils").unixTime(),
            n = yield e.betweenCount(["expiresAt"], t, 1 / 0);
          return n;
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
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        b.apply(this, arguments)
      );
    }
    ((l.storeWebTPSharedSession = d),
      (l.getWebTPSharedSession = p),
      (l.clearWebTPSharedSessionFileBuffer = C));
  },
  98,
);
