__d(
  "hyperionGlobals",
  [],
  function (t, n, r, o, a, i) {
    var e =
        typeof globalThis == "object"
          ? globalThis
          : typeof t == "object"
            ? t
            : typeof window == "object"
              ? window
              : typeof self == "object"
                ? self
                : {},
      l = {
        getCallStack: function () {
          return [];
        },
        logger: console,
      };
    function s(e) {
      var t;
      ((l.getCallStack = (t = e.getCallStack) != null ? t : l.getCallStack),
        (l.logger = e.logger));
    }
    function u() {
      return l.logger;
    }
    function c(e, t, n) {
      if (!e) {
        var r,
          o,
          a =
            (r = n == null ? void 0 : n.getCallStack) != null
              ? r
              : l.getCallStack,
          i = (o = n == null ? void 0 : n.logger) != null ? o : l.logger,
          s = a(2);
        s && s.length > 0 ? i.error(t, s) : i.error(t);
      }
    }
    var d = {};
    function m() {
      return d;
    }
    function p(e) {
      d = e;
    }
    ((i.assert = c),
      (i.getFlags = m),
      (i.getLogger = u),
      (i.globalScope = e),
      (i.setAssertLoggerOptions = s),
      (i.setFlags = p));
  },
  66,
);
