__d(
  "WAWebAcpDeprecationMigration",
  [
    "Promise",
    "WALogger",
    "WAWebAcpDeprecationUtils",
    "WAWebSchemaChat",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p = 10;
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
              o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.OPUS_MIGRATION_COMPLETE,
            ) === !0
          ) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[opus] migration skipped: completion flag already set",
                ])),
            );
            return;
          }
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[opus] starting bulk migration",
              ])),
          );
          var t = [];
          (yield o("WAWebSchemaChat")
            .getChatTable()
            .forEach(function (e) {
              var n;
              ((n = e.limitSharing) == null ? void 0 : n.sharingLimited) ===
                !0 && t.push(e.id);
            }),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[opus] found ",
                  " chats to process",
                ])),
              t.length,
            ));
          var n = yield g(t);
          (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.OPUS_MIGRATION_COMPLETE,
            !0,
          ),
            n > 0 &&
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[opus] migration finished with ",
                      " failures out of ",
                      " chats",
                    ])),
                  n,
                  t.length,
                )
                .sendLogs("opus-migration-failures"),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[opus] bulk migration complete (",
                  " failures out of ",
                  " chats)",
                ])),
              n,
              t.length,
            ));
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return y({ chatIds: e, offset: 0, failureCount: 0 });
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
          var t = e.chatIds,
            r = e.failureCount,
            a = e.offset;
          if (a >= t.length) return r;
          var i = t.slice(a, a + p),
            l = yield (m || (m = n("Promise"))).allSettled(
              i.map(function (e) {
                return o("WAWebAcpDeprecationUtils").opusProcessChat(e);
              }),
            ),
            s = 0;
          for (var u of l) u.status === "rejected" && s++;
          var c = a + p;
          return (
            c < t.length &&
              (yield new (m || (m = n("Promise")))(function (e) {
                return self.setTimeout(e, 0);
              })),
            y({ chatIds: t, offset: c, failureCount: r + s })
          );
        })),
        C.apply(this, arguments)
      );
    }
    l.runOpusMigration = _;
  },
  98,
);
