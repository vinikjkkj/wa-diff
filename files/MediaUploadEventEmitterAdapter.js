__d(
  "MediaUploadEventEmitterAdapter",
  [
    "EventEmitter",
    "MediaUploadFBAssetContext",
    "MediaUploadFBClientEventContext",
    "MediaUploadFBSessionContext",
    "MediaUploadFBStage",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        return t;
      },
      s = (function () {
        function t(e) {
          ((this.$2 = new (r("EventEmitter"))()),
            (this.$1 = e),
            (this.emitter = this.$3()),
            (this.subscriber = this.$4()));
        }
        var n = t.prototype;
        return (
          (n.$3 = function () {
            var t = this,
              n = function (n) {
                var e = r("MediaUploadFBSessionContext").castOrThrow(n, t.$1);
                return e.composeSnapshot();
              },
              o = function (n) {
                var e = r("MediaUploadFBAssetContext").castOrThrow(n, t.$1);
                return e.composeSnapshot();
              },
              a = this.$2,
              i = function (r) {
                try {
                  for (
                    var n = arguments.length,
                      o = new Array(n > 1 ? n - 1 : 0),
                      i = 1;
                    i < n;
                    i++
                  )
                    o[i - 1] = arguments[i];
                  a.emit.apply(a, [e(r)].concat(o));
                } catch (e) {
                  t.$1.reportRecoverableError(
                    "Session pub/sub chain failed for event " + String(r),
                    e,
                  );
                }
              };
            return {
              emitClientEvent: function (n, o) {
                i(
                  n,
                  r("MediaUploadFBClientEventContext")
                    .castOrThrow(o, t.$1)
                    .composerSnapshot(),
                );
              },
              emitSessionEvent: function (t, r) {
                i(t, n(r));
              },
              emitAssetEvent: function (t, r) {
                i(t, n(r.sessionContext), o(r));
              },
              emitStageEvent: function (a, l, s) {
                var e = r("MediaUploadFBStage").cast(String(s));
                if (e == null) {
                  t.$1.reportRecoverableError(
                    "Invalid stage value, it must be MediaUploadFBStage, ignoring",
                  );
                  return;
                }
                i(a, n(l.sessionContext), o(l), e);
              },
            };
          }),
          (n.$4 = function () {
            var t = this,
              n = function (n, r) {
                try {
                  n();
                } catch (e) {
                  t.$1.reportRecoverableError(
                    "Stage pub/sub chain failed for event " + r(),
                    e,
                  );
                }
              };
            return {
              addClientEventListener: function (o, a) {
                var r = t.$2.addListener(e(o), function (e) {
                  return n(
                    function () {
                      return a(e);
                    },
                    function () {
                      return String(o);
                    },
                  );
                });
                return {
                  cancel: function () {
                    return r.remove();
                  },
                };
              },
              addSessionEventListener: function (o, a) {
                var r = t.$2.addListener(e(o), function (e) {
                  return n(
                    function () {
                      return a(e);
                    },
                    function () {
                      return String(o);
                    },
                  );
                });
                return {
                  cancel: function () {
                    return r.remove();
                  },
                };
              },
              addAssetEventListener: function (o, a) {
                var r = t.$2.addListener(e(o), function (e, t) {
                  return n(
                    function () {
                      return a(e, t);
                    },
                    function () {
                      return String(o);
                    },
                  );
                });
                return {
                  cancel: function () {
                    return r.remove();
                  },
                };
              },
              addStageEventListener: function (o, a, i) {
                var r = t.$2.addListener(e(o), function (e, t, r) {
                  a === r &&
                    n(
                      function () {
                        return i(e, t);
                      },
                      function () {
                        return String(o) + "  " + String(r);
                      },
                    );
                });
                return {
                  cancel: function () {
                    return r.remove();
                  },
                };
              },
            };
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
