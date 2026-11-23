__d(
  "WAMediaManagerTaskMemoryCache",
  [
    "Promise",
    "WAHashUtils",
    "WAMediaManagerLogger",
    "WAMediaManagerTypes",
    "WAPromiseDelays",
    "WAResultOrError",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 3e4;
    function m() {
      var t = new Map(),
        r = new Map();
      function a(e) {
        return e === "fullsize" ? t : r;
      }
      function i(e, t, n) {
        var r = a(e).get(t);
        return r == null
          ? null
          : (r.task.promote(n),
            {
              cache: r.task.promise
                .then(
                  o("WAMediaManagerTypes").transformInternalMediaDownloadResult,
                )
                .then(_),
              type: "cache-hit",
            });
      }
      function l(e, t, n, r, i) {
        var l = a(e),
          s = { abortController: n, mediaDownloadFlow: r, task: i };
        (l.set(t, s),
          i.promise
            .then(function (e) {
              e.success || p(l, t, s);
            })
            .finally(function () {
              o("WAPromiseDelays")
                .delayMs(d)
                .then(function () {
                  p(l, t, s);
                });
            }));
      }
      function m(e, t, r, i) {
        var l = (c || (c = n("Promise"))).resolve(i),
          s = a(e),
          u = {
            abortController: new AbortController(),
            mediaDownloadFlow: r,
            task: {
              cancel: function () {
                return !1;
              },
              promise: l,
              promote: function () {
                return !1;
              },
            },
          };
        return (
          s.set(t, u),
          o("WAPromiseDelays")
            .delayMs(d)
            .then(function () {
              p(s, t, u);
            }),
          {
            cache: l.then(
              o("WAMediaManagerTypes").transformInternalMediaDownloadResult,
            ),
            type: "cache-hit",
          }
        );
      }
      return {
        cancel: function (a) {
          var n = o("WAMediaManagerLogger").baseLogger.TAGS([
            "hash:" + o("WAHashUtils").sanitisePlaintextHash(a),
            "cancelTask",
          ]);
          n.LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["start"])));
          for (var i of [t, r]) {
            var l = i.get(a);
            l != null &&
              (l.mediaDownloadFlow.addPoint("cancel_download_triggered"),
              l.task.cancel() === !1
                ? (l.abortController.abort(),
                  l.mediaDownloadFlow.addPoint("http_abort_cancel"),
                  n.LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "http abort cancel",
                      ])),
                  ))
                : (l.mediaDownloadFlow.addPoint("worker_task_cancel_cancel"),
                  n.LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "worker task cancel",
                      ])),
                  )),
              i.delete(a));
          }
        },
        clear: function () {
          (t.clear(), r.clear());
        },
        get: i,
        put: l,
        putResult: m,
      };
    }
    function p(e, t, n) {
      e.get(t) === n && e.delete(t);
    }
    function _(e) {
      return e.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, e.value, { source: "cache" }),
          )
        : e;
    }
    l.createTaskMemoryCache = m;
  },
  98,
);
