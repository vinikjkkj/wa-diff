__d(
  "AsyncData",
  ["cr:696703"],
  function (t, n, r, o, a, i, l) {
    var e = {},
      s = {},
      u = {};
    function c(t, n) {
      var r = (u[t] = { result: n, status: "success" });
      (e[t] &&
        (e[t].forEach(function (e) {
          return e(r.result);
        }),
        delete e[t]),
        delete s[t]);
    }
    function d(t, n) {
      var r = (u[t] = { error: n, status: "error" });
      (s[t] &&
        (s[t].forEach(function (e) {
          return e(r.error);
        }),
        delete s[t]),
        delete e[t]);
    }
    function m(e, t) {
      c(e, t);
    }
    function p(e, t) {
      d(e, t);
    }
    function _(e) {
      var t = {
        onLoaded: function (n) {
          return h(e, n);
        },
        onError: function (n) {
          return y(e, n);
        },
        cleanup: function () {
          return C(e);
        },
        peek: function () {
          return g(e);
        },
      };
      return t;
    }
    var f = null;
    function g(e) {
      var t = u[e];
      return t && t.status === "success" ? t.result : null;
    }
    function h(t, r) {
      var o = g(t);
      if (o != null) r(o);
      else {
        e[t] = e[t] || [];
        var a = r;
        if (n("cr:696703")) {
          var i = n("cr:696703").getCallbackScheduler(),
            l = r;
          a = function (t) {
            i(function () {
              return l(t);
            });
          };
        }
        e[t].push(a);
      }
    }
    function y(e, t) {
      var r = u[e];
      if (r) r.status === "error" && t(r.error);
      else {
        s[e] = s[e] || [];
        var o = t;
        if (n("cr:696703")) {
          var a = n("cr:696703").getCallbackScheduler(),
            i = t;
          o = function (t) {
            a(function () {
              return i(t);
            });
          };
        }
        s[e].push(o);
      }
    }
    function C(e) {
      delete u[e];
    }
    ((l.resolve = c),
      (l.reject = d),
      (l.resolveBlackBox = m),
      (l.rejectBlackBox = p),
      (l.getPreloaderRef_INTERNAL = _),
      (l.__dumpValues = f),
      (l.cleanup = C));
  },
  98,
);
