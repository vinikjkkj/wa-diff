__d(
  "WAWebOfflineBacklogHold",
  ["Promise", "WALogger", "WAResolvable"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 3e4,
      c = null;
    function d() {
      var e,
        t,
        n = c;
      (n != null && self.clearTimeout(n.timeoutId),
        (c = {
          released:
            (e = n == null ? void 0 : n.released) != null
              ? e
              : new (o("WAResolvable").Resolvable)(),
          startedAt:
            (t = n == null ? void 0 : n.startedAt) != null ? t : Date.now(),
          timeoutId: self.setTimeout(function () {
            return m("timeout");
          }, u),
        }));
    }
    function m(t) {
      var n = c;
      n != null &&
        ((c = null),
        self.clearTimeout(n.timeoutId),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[offline-resume][primary-snapshot] released the offline backlog after ",
              "ms: ",
              "",
            ])),
          Date.now() - n.startedAt,
          t,
        ),
        n.released.resolve());
    }
    function p() {
      var e, t;
      return (e = (t = c) == null ? void 0 : t.released.promise) != null
        ? e
        : (s || (s = n("Promise"))).resolve();
    }
    ((l.holdOfflineBacklog = d),
      (l.releaseOfflineBacklog = m),
      (l.waitForOfflineBacklogRelease = p));
  },
  98,
);
