__d(
  "ServiceWorkerRegistration",
  [
    "ClientServiceWorkerMessage",
    "EventListener",
    "Promise",
    "Run",
    "promiseDone",
  ],
  function (t, n, r, o, a, i) {
    var e,
      l = !!navigator.serviceWorker,
      s = {};
    function u() {
      var e = navigator.serviceWorker;
      if (!l || !e) {
        var t = new Error("serviceWorker is not supported in this browser");
        throw (t.stack, t);
      }
      return e;
    }
    var c = {
        isSupported: function () {
          return l;
        },
        registerWorkerIfUnregisteredAfterDD: function (t) {
          n("Run").onAfterLoad(function () {
            n("promiseDone")(c.registerWorkerIfUnregistered(t));
          });
        },
        registerWorkerIfUnregistered: function (r) {
          if (s[r]) return s[r];
          var t = u(),
            o = (s[r] = new (e || (e = n("Promise")))(function (o, a) {
              n("promiseDone")(c.getWorkerRegistration(r), function (i) {
                if (i) o(i);
                else {
                  var l = n("EventListener").listen(
                    window,
                    "message",
                    function (e) {
                      if (e instanceof MessageEvent) {
                        var t = e.data;
                        typeof t == "object" &&
                          (t == null ? void 0 : t.command) ===
                            "ServiceWorkerInstallError" &&
                          a();
                      }
                    },
                  );
                  n("promiseDone")(
                    (e || (e = n("Promise"))).resolve(
                      t.register(r, { updateViaCache: "all" }),
                    ),
                    function () {
                      (l.remove(),
                        n("promiseDone")(
                          (e || (e = n("Promise"))).resolve(t.ready),
                          o,
                        ));
                    },
                  );
                }
              });
            }));
          return o;
        },
        unregisterControllingWorker: function () {
          return new (e || (e = n("Promise")))(function (e, t) {
            var r = new (n("ClientServiceWorkerMessage"))(
              "unregister",
              {},
              function () {
                e(!0);
              },
            );
            r.sendViaController();
          });
        },
        getWorkerRegistration: function (t) {
          var e = u();
          return e.getRegistration(t);
        },
        isAWorkerActivated: function () {
          return !navigator.serviceWorker ||
            !navigator.serviceWorker.getRegistration
            ? (e || (e = n("Promise"))).resolve(!1)
            : navigator.serviceWorker.getRegistration().then(function (e) {
                return !!(e && e.active);
              });
        },
      },
      d = c;
    i.default = d;
  },
  66,
);
