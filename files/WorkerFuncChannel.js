__d(
  "WorkerFuncChannel",
  [
    "invariant",
    "DateConsts",
    "ExecutionEnvironment",
    "FBLogger",
    "FuncChannel",
    "MainPageUrl",
    "Promise",
    "TimedOnceFunc",
    "VirtualMessageChannel",
    "WorkerMessagePort",
    "err",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = {
        serialize: function (t, n) {
          return (n.push(t), t);
        },
        deserialize: function (t) {
          return t;
        },
      },
      d = 1e4,
      m = 0,
      p = 5,
      _ = p + 1,
      f = (function () {
        function e(e) {
          var t = self.WeakRef;
          t && (this.$1 = new t(e));
        }
        var t = e.prototype;
        return (
          (t.isDead = function () {
            return this.$1 != null && this.$1.deref() == null;
          }),
          e
        );
      })(),
      g = (function (t) {
        function a(e, n, a, i) {
          var l;
          (a === void 0 && (a = null),
            i === void 0 && (i = {}),
            (l = t.call(this, e) || this),
            (l.$WorkerFuncChannel$p_1 = new Map()),
            (l.$WorkerFuncChannel$p_2 = new Map()),
            (l.$WorkerFuncChannel$p_5 = {
              function: {
                serialize: function (t, n) {
                  var e = _++;
                  l.$WorkerFuncChannel$p_1.set(e, t);
                  var r = { type: "function", value: e };
                  return r;
                },
                deserialize: function (t) {
                  var e = l,
                    n = t.value,
                    r = function () {
                      var t = {
                        type: "call",
                        id: n,
                        method: "__anonymous",
                        thisArg: null,
                        argList: Array.from(arguments),
                      };
                      return e.callMessageHandler(t);
                    };
                  return (l.$WorkerFuncChannel$p_2.set(n, new f(r)), r);
                },
              },
              custom: {
                serialize: function (t, n) {
                  var e = t.constructor.name,
                    r = l.$WorkerFuncChannel$p_4[e];
                  r != null || s(0, 63779, e);
                  var o = r.serialize(t, n);
                  return { type: "custom", custom: e, value: o };
                },
                deserialize: function (t) {
                  var e = t.custom,
                    n = l.$WorkerFuncChannel$p_4[e];
                  return (n != null || s(0, 63779, e), n.deserialize(t.value));
                },
              },
              error: {
                serialize: function (t, n) {
                  var e = { name: t.name, message: t.message, stack: t.stack };
                  return { type: "error", value: e };
                },
                deserialize: function (t) {
                  var e = r("err")(t.value.message);
                  return (
                    (e.name = t.value.name),
                    (e.stack = t.value.stack),
                    e
                  );
                },
              },
              object: {
                serialize: function (t, n) {
                  var e = t.constructor;
                  if (e !== Object) {
                    var r = new Error("Cannot clone class object");
                    throw (r.stack, r);
                  }
                  return { type: "object", value: t };
                },
                deserialize: function (t) {
                  return t.value;
                },
              },
              raw: {
                serialize: function (t, n) {
                  return { type: "raw", value: t };
                },
                deserialize: function (t) {
                  return t.value;
                },
              },
            }),
            (l.name = n),
            (l.$WorkerFuncChannel$p_3 = a),
            (l.$WorkerFuncChannel$p_4 = i));
          var c = function (t) {
              (o("MainPageUrl").isWorkerLogEnabled() &&
                r("FBLogger")("adsworker").debug(
                  "[Channel] removing callback ids: %s",
                  t.join(),
                ),
                t.forEach(function (e) {
                  return l.$WorkerFuncChannel$p_1.delete(e);
                }));
            },
            p = l.__remoteInternalFunc(m, c);
          return (
            typeof jest == "undefined" &&
              (u || (u = r("ExecutionEnvironment"))).isInBrowser &&
              setInterval(function () {
                var e = [];
                (l.$WorkerFuncChannel$p_2.forEach(function (t, n) {
                  t.isDead() && (e.push(n), l.$WorkerFuncChannel$p_2.delete(n));
                }),
                  e.length > 0
                    ? p(e)
                    : l.$WorkerFuncChannel$p_2.size > 5e3 &&
                      l.$WorkerFuncChannel$p_2.size % 10 === 0 &&
                      r("FBLogger")("adsworker").warn(
                        "[%s] has too many remaining refs %s",
                        l.name,
                        l.$WorkerFuncChannel$p_2.size,
                      ));
              }, d),
            l
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.__remoteInternalFunc = function (t, n) {
            ((t > p || this.$WorkerFuncChannel$p_1.get(t) != null) &&
              r("FBLogger")("adsworker").mustfix(
                "invalid internal func id %s",
                t,
              ),
              this.$WorkerFuncChannel$p_1.set(t, n));
            var e = this.$WorkerFuncChannel$p_5.function.deserialize({
              type: "function",
              value: t,
            });
            return e;
          }),
          (i.$WorkerFuncChannel$p_6 = function (t) {
            return (
              t instanceof Int8Array ||
              t instanceof Int16Array ||
              t instanceof Int32Array ||
              t instanceof Uint8Array ||
              t instanceof Uint8ClampedArray ||
              t instanceof Uint16Array ||
              t instanceof Uint32Array ||
              t instanceof Float32Array ||
              t instanceof Float64Array
            );
          }),
          (i.$WorkerFuncChannel$p_7 = function (t) {
            if (typeof t == "function") return "function";
            if (
              t === null ||
              typeof t != "object" ||
              Array.isArray(t) ||
              this.$WorkerFuncChannel$p_6(t)
            )
              return "raw";
            var e = t.constructor.name;
            return this.$WorkerFuncChannel$p_4[e]
              ? "custom"
              : t instanceof Error
                ? "error"
                : "object";
          }),
          (i.$WorkerFuncChannel$p_8 = function (t, n) {
            var e = this.$WorkerFuncChannel$p_7(t);
            return this.$WorkerFuncChannel$p_5[e].serialize(t, n);
          }),
          (i.$WorkerFuncChannel$p_9 = function (t) {
            var e = t;
            if (
              t !== null &&
              typeof t == "object" &&
              typeof t.type == "string"
            ) {
              var n = this.$WorkerFuncChannel$p_5[t.type];
              if (n) return n.deserialize(t);
            }
            return e;
          }),
          (i.__onPostOutMessage = function (t) {
            return t;
          }),
          (i.__callCallback = function (t, n) {
            t.apply(null, n.argList);
          }),
          (i.setOutMessagePort = function (o, a) {
            var t = this,
              i = [];
            (this.setCallMessageHandler(function (a) {
              a.thisArg = t.name;
              var l = [];
              a.argList = a.argList.map(function (e) {
                return t.$WorkerFuncChannel$p_8(e, l);
              });
              var s = new (e || (e = n("Promise")))(function (e, n) {
                  a.result = {
                    resolveFunc: t.$WorkerFuncChannel$p_8(e, l),
                    rejectFunc: t.$WorkerFuncChannel$p_8(n, l),
                  };
                }),
                u = t.__onPostOutMessage(a);
              return (
                u != null &&
                  (i != null
                    ? i.push({ message: a, transferList: l })
                    : o.postMessage(a, l)),
                s.catch(function (e) {
                  r("FBLogger")("worker")
                    .catching(e)
                    .mustfix(
                      "Error: channel %s, remote call of %s returned error %s",
                      t.name,
                      a.method,
                      e.message,
                    );
                }),
                s
              );
            }),
              r("promiseDone")(a || E.waitForRemote(this.name), function () {
                var e = i;
                ((i = null),
                  e == null ||
                    e.forEach(function (e) {
                      o.postMessage(e.message, e.transferList);
                    }),
                  t.$WorkerFuncChannel$p_3 == null ||
                    t.$WorkerFuncChannel$p_3());
              }));
          }),
          (i.__messageToCall = function (t) {
            var e = this;
            if (
              ((t.argList = t.argList.map(function (t) {
                return e.$WorkerFuncChannel$p_9(t);
              })),
              t.result)
            ) {
              var n = t.result,
                o = n.rejectFunc,
                a = n.resolveFunc;
              ((a = this.$WorkerFuncChannel$p_9(a)),
                (o = this.$WorkerFuncChannel$p_9(o)),
                (t.result = { resolveFunc: a, rejectFunc: o }));
            }
            var i = t.id;
            if (i === void 0) this.messageToCall(t);
            else {
              var l = this.$WorkerFuncChannel$p_1.get(i);
              l
                ? this.__callCallback(l, t)
                : r("FBLogger")("adsworker").mustfix(
                    "Error: callback is called but no longer available",
                  );
            }
          }),
          (i.setInMessagePort = function (t) {
            var e = this;
            (t.addMessageListener("call", function (t) {
              typeof t.thisArg == "string" &&
                t.thisArg === e.name &&
                e.__messageToCall(t);
            }),
              E.notifyReady(this.name));
          }),
          (i.setMessagePort = function (t) {
            return (this.setInMessagePort(t), this.setOutMessagePort(t), this);
          }),
          a
        );
      })(r("FuncChannel")),
      h = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WorkerMessagePort").WorkerMessagePort);
    function y(e, t, n, o) {
      E.exportChannel(e, function (o) {
        var a = o.remoteNativePort,
          i = o.syncPort,
          l = t();
        e === l.name || s(0, 54247, e, l.name);
        var u;
        (a
          ? ((u = new h(a, i.name + "(" + l.name + ")")),
            a.start(),
            u.onError.add(function (e) {
              throw (
                r("FBLogger")("worker")
                  .catching(e)
                  .mustfix("error caught in remotePort"),
                e
              );
            }))
          : (u = i),
          l.setMessagePort(u).setBackend(n),
          r("promiseDone")(i.fullyConnected, function () {
            (i.postMessage({ type: "channelReady", channelName: l.name }),
              E.logState("EXPORTED", e));
          }));
      });
    }
    function C(e, t, n, r) {
      return (
        r === void 0 && (r = {}),
        y(
          n,
          function () {
            return new g(
              function (t) {
                return e;
              },
              n,
              null,
              r,
            );
          },
          e,
          t,
        )
      );
    }
    var b = (function (e) {
      function t(t, n) {
        n === void 0 && (n = "");
        var a = o("DateConsts").MS_PER_MIN * 1;
        return (
          e.call(
            this,
            function () {
              r("FBLogger")("worker").warn(
                "Channel %s did not establish eventually. %s",
                t,
                n,
              );
            },
            a,
          ) || this
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("TimedOnceFunc").TimedOnceFunc);
    function v(e, t) {
      var n,
        a = null,
        i,
        l;
      t.isWrappingVirtualMessagePort()
        ? ((l = new (o("VirtualMessageChannel").VirtualMessageChannel)(!0, !0)),
          (n = "on virtual dedicated channel"))
        : ((l = new MessageChannel()),
          (n = "on native dedicated channel"),
          (i = [l.port2]));
      var s = l.port1;
      ((a = l.port2), s.start());
      var u = new h(s, t.name + "(" + e.name + ")");
      return (
        r("promiseDone")(t.fullyConnected, function () {
          (E.logState("IMPORTING " + n + " ", e.name), e.setInMessagePort(u));
          var o = new b(e.name, n);
          (r("promiseDone")(
            t.onMessageOnce("channelReady", function (t) {
              return t.channelName === e.name;
            }),
            function (t) {
              (e.setOutMessagePort(u),
                o.cancel(),
                E.logState("ESTABLISHED", e.name));
            },
          ),
            t.postMessage(
              { type: "channelImport", channelName: e.name, port: a },
              i,
            ));
        }),
        e.proxyMethods
      );
    }
    function S(e, t, n, r) {
      (n === void 0 && (n = null), r === void 0 && (r = {}));
      var o = new g(
        function (t) {
          return e;
        },
        t,
        n,
        r,
      );
      return o;
    }
    function R(e, t, n, r, o) {
      return (
        r === void 0 && (r = null),
        o === void 0 && (o = {}),
        v(S(e, n, r, o), t)
      );
    }
    var L = (function () {
        function t() {
          ((this.name = self.name + "_P" + Math.round(10 * Math.random())),
            (this.$1 = new Map()),
            (this.$2 = new Set()));
        }
        var a = t.prototype;
        return (
          (a.logState = function (t, n) {
            o("MainPageUrl").isWorkerLogEnabled() &&
              r("FBLogger")("worker").debug("%s-%s %s", this.name, t, n);
          }),
          (a.$3 = function (t) {
            var e = this.$1.get(t);
            return (
              e == null &&
                ((e = { pendingPorts: null, onImportRequest: null }),
                this.$1.set(t, e)),
              e
            );
          }),
          (a.exportChannel = function (t, n) {
            var e = this,
              o = this.$3(t);
            (o.onImportRequest != null &&
              r("FBLogger")("worker").debug("Re-exporting channel %s", t),
              (o.onImportRequest = n),
              this.logState("REGISTERED", t));
            var a = o.pendingPorts;
            if (a != null) {
              var i = a.filter(function (t) {
                return e.$2.has(t.syncPort);
              });
              (i.forEach(n),
                i.length < a.length
                  ? (o.pendingPorts = a.filter(function (t) {
                      return !e.$2.has(t.syncPort);
                    }))
                  : (o.pendingPorts = null));
            }
            return o;
          }),
          (a.activate = function (t, n, o) {
            var e = this;
            if (this.$2.has(t)) {
              r("FBLogger")("worker").debug(
                "Port %sis already duplicated ",
                t.name,
              );
              return;
            }
            (this.$2.add(t),
              t.addMessageListener("channelImport", function (n) {
                var r = n.channelName,
                  o = e.$3(r),
                  a = { syncPort: t, remoteNativePort: n.port };
                (o.onImportRequest != null
                  ? o.onImportRequest(a)
                  : o.pendingPorts != null
                    ? o.pendingPorts.push(a)
                    : (o.pendingPorts = [a]),
                  e.logState("IMPORT REQUEST", r));
              }));
          }),
          (a.notifyReady = function (t) {}),
          (a.waitForRemote = function (r) {
            return (e || (e = n("Promise"))).resolve();
          }),
          t
        );
      })(),
      E = new L();
    function k(e, t, n) {
      E.activate(e, t, n);
    }
    ((l.TransferableTransformer = c),
      (l.WorkerFuncChannel = g),
      (l.exportChannelOnPort = y),
      (l.exportChannel = C),
      (l.importChannelOnPort = v),
      (l.makeChannel = S),
      (l.importChannel = R),
      (l.activateChannels = k));
  },
  98,
);
