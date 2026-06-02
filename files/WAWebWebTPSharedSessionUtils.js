__d(
  "WAWebWebTPSharedSessionUtils",
  ["WALogger", "WATimeUtils", "WAWebSchemaWebTPSharedSession", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d;
    async function m(t, n, r) {
      try {
        if (r != null) {
          await h();
          var a = await _();
          await f(a);
        }
        var i = o("WATimeUtils").unixTime(),
          l = o("WAWebSchemaWebTPSharedSession").getWebTPSharedSessionTable();
        await l.createOrReplace({
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
    }
    async function p(e) {
      try {
        var t = o("WAWebSchemaWebTPSharedSession").getWebTPSharedSessionTable(),
          n = await t.get(e);
        if (!n) return null;
        var r = o("WATimeUtils").unixTime();
        return n.expiresAt <= r ? (await t.remove(e), null) : n;
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
    }
    async function _() {
      var e = o("WAWebSchemaWebTPSharedSession").getWebTPSharedSessionTable(),
        t = o("WATimeUtils").unixTime(),
        n = await e.betweenCount(["expiresAt"], t, 1 / 0);
      return n;
    }
    async function f(e) {
      try {
        var t = r("justknobx")._("2196"),
          n = e - t + 1;
        if (n <= 0) return;
        var a = o("WAWebSchemaWebTPSharedSession").getWebTPSharedSessionTable(),
          i = o("WATimeUtils").unixTime(),
          l = await a.bulkDeleteRange(["expiresAt"], i, 1 / 0, { limit: n });
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
    }
    async function g(e) {
      try {
        var t = o("WAWebSchemaWebTPSharedSession").getWebTPSharedSessionTable();
        await t.merge(e, { fileBuffer: void 0 });
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
    }
    async function h() {
      try {
        var e = o("WAWebSchemaWebTPSharedSession").getWebTPSharedSessionTable(),
          t = o("WATimeUtils").unixTime(),
          n = await e.bulkDeleteRange(["expiresAt"], 0, t);
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
    }
    ((l.storeWebTPSharedSession = m),
      (l.getWebTPSharedSession = p),
      (l.clearWebTPSharedSessionFileBuffer = g),
      (l.removeExpiredWebTPSharedSessions = h));
  },
  98,
);
