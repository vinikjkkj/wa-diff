__d(
  "MAWCommonSetupWorker",
  [
    "Deferred",
    "FBLogger",
    "JSScheduler",
    "MAWCurrentUser",
    "MAWGetDBVersionForTest",
    "MAWInit",
    "MAWMIC",
    "MAWSetupWorker",
    "MAWWaitForBackendSetup",
    "MAWWebWorkerSingleton",
    "MAWWorkerHealthStatus",
    "MessengerWebInitData",
    "MessengerWebTabPortal",
    "Promise",
    "WADevToolMessageChannel",
    "WALogger",
    "WebDi.CrossPortalPorts",
    "WorkerClient",
    "WorkerMessagePort",
    "cr:19394",
    "err",
    "gkx",
    "pageID",
    "promiseDone",
    "shouldUseMAWSharedWorker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = r("gkx")("3282"),
      d = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, t, n) || this),
            (r.onmessage = null),
            (r.$BridgeAdapter$p_1 = null),
            (r.$BridgeAdapter$p_2 = t),
            o("WorkerClient").init(r),
            r.onUnhandledMessage.add(function (e) {
              r.onmessage && r.onmessage({ data: e });
            }),
            r.addMessageListener("worker-setup", function (e) {
              e.status === "worker-ready" &&
                o("MAWInit").MAWInit.addBoolAnnotation(
                  "workerReadyReceived",
                  !0,
                );
            }),
            r
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var a = t.prototype;
        return (
          (a.getBridgePort = function () {
            return this;
          }),
          (a.connectMpsPortal = function (t) {
            var e;
            ((e = this.$BridgeAdapter$p_1) == null || e.lose("replaced"),
              (this.$BridgeAdapter$p_1 = o(
                "MessengerWebTabPortal",
              ).workerPorts.connect(
                o("WebDi.CrossPortalPorts").fromMessagePort(t),
              )));
            var a = n("cr:19394");
            a != null &&
              (u || (u = r("JSScheduler"))).scheduleSpeculativeCallback(
                function () {
                  return a.warm();
                },
              );
          }),
          (a.close = function () {
            var t;
            ((t = this.$BridgeAdapter$p_1) == null ||
              t.lose("worker bridge closed"),
              e.prototype.close.call(this));
          }),
          t
        );
      })(o("WorkerMessagePort").WorkerSyncedMessagePort);
    function m(e) {
      var t = e.bridge,
        n = e.diacriticSearchEnabled,
        a = e.ebState,
        i = e.reason,
        l = e.vaultMaterials,
        s = new (r("Deferred"))();
      return (
        t.addMessageListener("worker-setup", function (t) {
          return p(e, s, t);
        }),
        t.addMessageListener("worker-setup-ack", function (e) {
          return _(e, i);
        }),
        g(t, l, n, a),
        r("promiseDone")(
          o("MAWWebWorkerSingleton").doesWorkerExist(),
          function (e) {
            return o("MAWInit").MAWInit.addBoolAnnotation(
              "workerExistsOnSetup",
              e,
            );
          },
        ),
        r("promiseDone")(
          o("MAWWorkerHealthStatus").getWorkerHealthStatus(),
          function (e) {
            return o("MAWInit").MAWInit.addStringAnnotation(
              "workerHealthStatus",
              e.tag,
            );
          },
        ),
        s.getPromise()
      );
    }
    function p(e, t, n) {
      var a;
      if (n.setupHash === r("pageID"))
        switch (n.status) {
          case "success":
            t.resolve(e.bridge.getBridgePort());
            break;
          case "failure":
            t.reject(
              r("err")((a = n.msg) != null ? a : "Error setting up worker"),
            );
            break;
          case "already-setup":
            return f(e, t, n);
          default:
            throw (
              o("MAWInit").MAWInit.addBoolAnnotation(
                "invalidSetupMessageReceived",
                !0,
              ),
              r("FBLogger")("messenger_web").mustfixThrow(
                "Invalid message for worker: " + n.status,
              )
            );
        }
    }
    function _(e, t) {
      var n;
      if (e.setupHash === r("pageID")) {
        (o("MAWInit").MAWInit.logPoint(t + "_backend_setup_ack"),
          o("MAWMIC").addPoint(t + "_backend_setup_ack"));
        var a = (n = e.backendState) != null ? n : "none";
        (o("MAWInit").MAWInit.addStringAnnotation("backendAckState", a),
          o("MAWMIC").addStringAnnotation("backendAckState", a));
      }
    }
    function f(t, a, i) {
      var l = t.bridge,
        u = t.onWorkerAlreadySetup,
        c = t.onWorkerRestart,
        d = t.reason;
      switch (i.action) {
        case "no-action": {
          (a.resolve(l.getBridgePort()),
            u(),
            o("MAWInit").MAWInit.logPoint(d + "_backend_already_setup"),
            o("MAWMIC").addPoint(d + "_backend_already_setup"));
          break;
        }
        case "reboot-required": {
          var m;
          (o("WALogger").DEV(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Terminating worker and rebooting...",
              ])),
          ),
            o("MAWMIC").addPoint(d + "_worker_rebooting"),
            o("MAWInit").MAWInit.logPoint(d + "_worker_rebooting"));
          var p = (m = i == null ? void 0 : i.reason) != null ? m : "none";
          (o("MAWInit").MAWInit.addStringAnnotation("workerRebootReason", p),
            o("MAWMIC").addStringAnnotation("workerRebootReason", p));
          var _ = o("shouldUseMAWSharedWorker").shouldUseMAWSharedWorker()
            ? (s || (s = n("Promise"))).resolve(
                o("MAWWebWorkerSingleton").resetCurrentWorkerWithId(
                  o("MAWWaitForBackendSetup").getCurrentWorkerID(),
                ),
              )
            : o("MAWSetupWorker").terminateDedicatedWorker("reboot required");
          return _.then(function () {
            return c("rebootRequired")
              .then(function (e) {
                return a.resolve(e);
              })
              .catch(function (e) {
                return a.reject(e);
              });
          });
        }
        default:
          throw (
            i.action,
            r("FBLogger")("messenger_web").mustfixThrow(
              "Invalid action for worker-setup:already-setup: " + i.action,
            )
          );
      }
    }
    function g(e, t, n, a) {
      var i = {
          content: babelHelpers.extends(
            { createdAt: r("MessengerWebInitData").createdAt },
            n === !0 ? { diacriticSearchEnabled: !0 } : {},
            {
              ebState: a,
              fbId: o("MAWCurrentUser").getID(),
              sessionId: r("MessengerWebInitData").sessionId,
              testDbVersion: o("MAWGetDBVersionForTest").getDbVersionForTest(),
              userKeyBase: r("MessengerWebInitData").userKeyBase,
              vaultMaterials: t,
            },
          ),
          setupHash: r("pageID"),
          type: "worker-setup",
        },
        l = [];
      if (c) {
        o("MAWInit").MAWInit.addBoolAnnotation("devToolsEnabled", !0);
        var s = o("WADevToolMessageChannel").createNewChannel();
        ((i.content.devToolMessageChannelPort2 = s.port2), l.push(s.port2));
      }
      if (r("gkx")("29375")) {
        var u = new MessageChannel();
        ((i.content.mpsPortalPort = u.port2),
          l.push(u.port2),
          e.connectMpsPortal(u.port1));
      }
      l.length > 0 ? e.postMessage(i, l) : e.postMessage(i);
    }
    ((l.BridgeAdapter = d), (l.initWorker = m));
  },
  98,
);
