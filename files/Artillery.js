__d(
  "Artillery",
  [
    "invariant",
    "ArtilleryTrace",
    "Banzai",
    "ClientServiceWorkerMessage",
    "FBLogger",
    "Run",
    "ServiceWorkerRegistration",
    "forEachObject",
    "mixInEventEmitter",
    "performance",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = !1,
      c = !1,
      d = [],
      m,
      p,
      _,
      f = {},
      g = {},
      h = !1,
      y = !1;
    function C() {
      u ||
        ((u = !0),
        r("Banzai").subscribe(r("Banzai").SHUTDOWN, function () {
          v._postAll();
        }));
    }
    function b() {
      ((p = null), (m = null), (g = {}), (f = {}), (_ = null), (y = !1));
    }
    var v = {
      isEnabled: function () {
        return c;
      },
      createTrace: function () {
        C();
        var e = new (r("ArtilleryTrace"))();
        return (
          e.setOnPost(function (e) {
            v.emitAndHold("posttrace", e);
          }),
          d.push(e),
          e
        );
      },
      getPageTrace: function () {
        if ((m || s(0, 4261), _)) return _;
        var e = v.createTrace().setID(m, p);
        return (
          r("forEachObject")(f, function (t, n, r) {
            e.addProperty(n, t);
          }),
          r("forEachObject")(g, function (t, n, r) {
            e.addTagset(n, t);
          }),
          (_ = e),
          e
        );
      },
      setPageProperties: function (t) {
        f = t;
      },
      addPageTagset: function (t, n) {
        _ == null ? (g[t] = n) : _.addTagset(t, n);
      },
      setActivePolicies: function (t) {
        (v.addPageTagset("active_policies", t), v.addPageTagset("policy", t));
      },
      getPageActivePolicies: function () {
        return v.getPageTagset("active_policies");
      },
      enableLogServiceWorker: function () {
        r("ServiceWorkerRegistration").isSupported() && (h = !0);
      },
      getPageProperty: function (t) {
        return _ == null ? f[t] : _.getProperty(t);
      },
      getPageTagset: function (t) {
        return _ == null ? g[t] : _.getTagset(t);
      },
      enable: function () {
        ((c = !0), y || (o("Run").onLeave(b), (y = !0)));
      },
      disable: function () {
        c = !1;
      },
      setPageTraceID: function (n, o) {
        if (
          !(m === n && p === o) &&
          ((!m && !p) || s(0, 4262),
          (m = n),
          (p = o),
          h &&
            (e || (e = r("performance"))) &&
            (e || (e = r("performance"))).timing &&
            (e || (e = r("performance"))).timing.navigationStart)
        ) {
          var t = new (r("ClientServiceWorkerMessage"))(
            "asw-sendStartupData",
            {
              traceID: p,
              windowStart: (e || (e = r("performance"))).timing.navigationStart,
            },
            null,
          );
          t.sendViaController();
        }
      },
      _postAll: function () {
        d.forEach(function (e) {
          return !e.isPosted() && e.post();
        });
      },
    };
    r("mixInEventEmitter")(v, { posttrace: !0 });
    var S = v;
    l.default = S;
  },
  98,
);
