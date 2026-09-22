__d(
  "WAWebMmSignalSharingExpirationWindowWorker",
  [
    "Promise",
    "WALogger",
    "WAPromiseQueue",
    "WAWebDbErrors",
    "WAWebMmSignalSharingExpirationWindowUtils",
    "WAWebSchemaChat",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = new Map(),
      d = new (o("WAPromiseQueue").PromiseQueueMap)();
    function m() {
      c.clear();
    }
    function p(e, t) {
      o(
        "WAWebMmSignalSharingExpirationWindowUtils",
      ).updateMmSignalSharingExpirationWindowImpl(e, t) &&
        c.set(e.id.toString(), { contextInfo: t, msg: e });
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = new Set(t),
            o = [];
          for (var a of e) {
            var i = c.get(a);
            i != null && (c.delete(a), r.has(a) && o.push(g(i)));
          }
          yield (u || (u = n("Promise"))).all(o);
        })),
        f.apply(this, arguments)
      );
    }
    function g(t) {
      var n = t.contextInfo,
        a = t.msg;
      return d
        .enqueue(a.id.remote.toString(), function () {
          return h(a, n);
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
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.id.remote.toString(),
            r = o("WAWebSchemaChat").getChatTable(),
            a = yield r.get(n);
          if (a == null) {
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[worker] chat row missing when persisting MM signal-sharing expiration window",
                  ])),
              )
              .sendLogs(
                "worker-mm-signal-sharing-expiration-window-missing-chat",
              );
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
            (yield r.merge(n, { id: n, mmSignalSharingExpirationWindow: i }));
        })),
        y.apply(this, arguments)
      );
    }
    ((l.resetMmSignalSharingExpirationWindowWorker = m),
      (l.updateMmSignalSharingExpirationWindowWorker = p),
      (l.persistPendingMmSignalSharingExpirationWindows = _));
  },
  98,
);
