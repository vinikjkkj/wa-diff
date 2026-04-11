__d(
  "WAWebVoipVideoRendererLogging",
  ["WALogger", "WAWebRuntimeEnvironmentUtils", "WorkerMessagePort"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = null;
    o("WAWebRuntimeEnvironmentUtils").isWorker() &&
      (d = new (o("WorkerMessagePort").WorkerMessagePort)(
        self,
        "WAWebVoipVideoRendererWorker",
      ));
    function m(e, t) {
      for (
        var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2;
        a < n;
        a++
      )
        r[a - 2] = arguments[a];
      var i = String.raw.apply(String, [{ raw: t }].concat(r));
      if (o("WAWebRuntimeEnvironmentUtils").isWorker()) {
        var l;
        (l = d) == null ||
          l.postMessage({ type: "loggingCallback", level: e, message: i });
      } else p(e, i);
    }
    function p(t, n) {
      switch (t) {
        case 1:
          o("WALogger").ERROR(
            e || (e = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
            n,
          );
          break;
        case 2:
          o("WALogger").WARN(
            s || (s = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
            n,
          );
          break;
        case 3:
          o("WALogger").LOG(
            u || (u = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
            n,
          );
          break;
        case 4:
        default:
          o("WALogger").DEV(
            c || (c = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
            n,
          );
          break;
      }
    }
    function _(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      m(1, e, n);
    }
    function f(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      m(2, e, n);
    }
    function g(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      m(3, e, n);
    }
    function h(e) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      m(4, e, n);
    }
    ((l.handleLog = p), (l.ERROR = _), (l.WARN = f), (l.LOG = g), (l.DEV = h));
  },
  98,
);
