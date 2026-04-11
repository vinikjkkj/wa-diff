__d(
  "FuncChannel",
  ["FBLogger", "Promise"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(t) {
          var o = this,
            a;
          ((this.$2 = []),
            (this.callMessageHandler = function (t) {
              return new (e || (e = n("Promise")))(function (e, n) {
                ((t.result = { resolveFunc: e, rejectFunc: n }), o.$2.push(t));
              });
            }),
            (this.messageToCall = function (e) {
              var t,
                n,
                a = o.proxyMethods[e.method];
              if (typeof a != "function") {
                r("FBLogger")("worker").mustfix(
                  "proxyMethods[%s] is not a functions",
                  e.method,
                );
                return;
              }
              var i = (t = e.result) == null ? void 0 : t.resolveFunc,
                l = (n = e.result) == null ? void 0 : n.rejectFunc;
              if (typeof i == "function" && typeof l == "function")
                try {
                  var s = a.apply(e.thisArg, e.argList);
                  i(s);
                } catch (e) {
                  l(e);
                }
              else return a.apply(e.thisArg, e.argList);
            }));
          var i = this,
            l = {},
            s = (a = t == null ? void 0 : t(l)) != null ? a : {},
            u = babelHelpers.extends({}, l);
          function c(e) {
            ((u[e] = function () {
              var t = {
                type: "call",
                method: e,
                thisArg: null,
                argList: Array.from(arguments),
              };
              return i.callMessageHandler(t);
            }),
              (l[e] = function () {
                var t = i.$1[e];
                if (typeof t != "function") {
                  r("FBLogger")("worker").mustfix(
                    "_backend[%s] is not a functions",
                    e,
                  );
                  return;
                }
                return t.apply(i.$1, arguments);
              }),
              s[e] == null && (s[e] = l[e]));
          }
          if (((this.$1 = u), t != null)) {
            var d = Object.keys(s);
            (d.forEach(c), (this.proxyMethods = s));
          } else
            this.proxyMethods = new Proxy(s, {
              get: function (t, n) {
                var e = n;
                return (s[e] == null && c(e), s[e]);
              },
            });
        }
        var o = t.prototype;
        return (
          (o.flushBuffer = function () {
            var e = this.$2;
            ((this.$2 = []), e.forEach(this.messageToCall));
          }),
          (o.setBackend = function (t) {
            return (this.$1 !== t && ((this.$1 = t), this.flushBuffer()), this);
          }),
          (o.setCallMessageHandler = function (t) {
            ((this.callMessageHandler = t), this.flushBuffer());
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
