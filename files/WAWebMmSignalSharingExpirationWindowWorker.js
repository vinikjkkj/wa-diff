__d(
  "WAWebMmSignalSharingExpirationWindowWorker",
  [
    "WALogger",
    "WAPromiseQueue",
    "WAWebDbErrors",
    "WAWebMmSignalSharingExpirationWindowUtils",
    "WAWebSchemaChat",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new Map(),
      c = new (o("WAPromiseQueue").PromiseQueueMap)();
    function d() {
      u.clear();
    }
    function m(e, t) {
      o(
        "WAWebMmSignalSharingExpirationWindowUtils",
      ).updateMmSignalSharingExpirationWindowImpl(e, t) &&
        u.set(e.id.toString(), { contextInfo: t, msg: e });
    }
    async function p(e, t) {
      var n = new Set(t),
        r = [];
      for (var o of e) {
        var a = u.get(o);
        a != null && (u.delete(o), n.has(o) && r.push(_(a)));
      }
      await Promise.all(r);
    }
    function _(t) {
      var n = t.contextInfo,
        a = t.msg;
      return c
        .enqueue(a.id.remote.toString(), function () {
          return f(a, n);
        })
        .catch(function (t) {
          t instanceof o("WAWebDbErrors").DbOnLogoutAbort ||
            t instanceof o("WAWebDbErrors").DbClosedOnTakeover ||
            t instanceof o("WAWebDbErrors").DbNotFoundOnTakeover ||
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[worker] failed to persist MM signal-sharing expiration window",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs(
                "worker-mm-signal-sharing-expiration-window-persist-failed",
              );
        });
    }
    async function f(e, t) {
      var n = e.id.remote.toString(),
        r = o("WAWebSchemaChat").getChatTable(),
        a = await r.get(n);
      if (a == null) {
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[worker] chat row missing when persisting MM signal-sharing expiration window",
              ])),
          )
          .sendLogs("worker-mm-signal-sharing-expiration-window-missing-chat");
        return;
      }
      var i = o(
        "WAWebMmSignalSharingExpirationWindowUtils",
      ).getMmSignalSharingExpirationWindow({
        contextInfo: t,
        mmSignalSharingExpirationWindow:
          a == null ? void 0 : a.mmSignalSharingExpirationWindow,
        msgKey: e.id,
        msgTimeClient:
          e.clientReceivedTsMillis != null
            ? Math.round(
                e.clientReceivedTsMillis /
                  o("WAWebMmSignalSharingExpirationWindowUtils")
                    .MILLIS_PER_SECOND,
              )
            : e.t,
        msgTimeServer: e.t,
      });
      i != null &&
        (await r.merge(n, { id: n, mmSignalSharingExpirationWindow: i }));
    }
    ((l.resetMmSignalSharingExpirationWindowWorker = d),
      (l.updateMmSignalSharingExpirationWindowWorker = m),
      (l.persistPendingMmSignalSharingExpirationWindows = p));
  },
  98,
);
