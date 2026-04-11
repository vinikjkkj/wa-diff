__d(
  "BanzaiAdapterComet",
  [
    "BanzaiConfig",
    "BanzaiConsts",
    "BanzaiStorage",
    "BaseEventEmitter",
    "ExecutionEnvironment",
    "FBLogger",
    "HasteBitMapName",
    "JSScheduler",
    "NetworkStatus",
    "QueryString",
    "Run",
    "SiteData",
    "StaticSiteData",
    "URI",
    "UserAgent",
    "ZeroRewrites",
    "getAsyncHeaders",
    "getAsyncParams",
    "gkx",
    "objectValues",
    "once",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = [],
      m = new (r("BaseEventEmitter"))(),
      p = "/ajax/bz",
      _ = "POST",
      f = {
        cleanup: function () {
          var e = d;
          ((d = []),
            e.forEach(function (e) {
              e.readyState < 4 && e.abort();
            }));
        },
        config: r("BanzaiConfig"),
        getEndPointUrl: function (t) {
          var e = r("getAsyncParams")(_);
          (r("objectValues")(r("HasteBitMapName")).forEach(function (t) {
            return delete e[t];
          }),
            delete e[r("StaticSiteData").jsmod_key],
            (e.ph = r("SiteData").push_phase));
          var n = p;
          r("gkx")("23403")
            ? (n = "/a/bz")
            : r("gkx")("23404")
              ? (n = "/ajax/bnzai")
              : r("gkx")("4070") && (n = "/a/fl");
          var o = r("QueryString").appendToUrl(n, e);
          if (o.length > 2e3)
            throw r("FBLogger")("comet_infra").mustfixThrow(
              "url is too long: ${url}",
            );
          return o;
        },
        getStorage: function () {
          return r("BanzaiStorage");
        },
        inform: function (t) {
          Array.isArray(t)
            ? t.forEach(function (e) {
                return m.emit(e);
              })
            : m.emit(t);
        },
        isOkToSendViaBeacon: function () {
          return !1;
        },
        onUnload: function (t) {
          o("Run").onAfterUnload(t);
        },
        preferredCompressionMethod: r("once")(function () {
          return "deflate";
        }),
        readyToSend: function () {
          return r("UserAgent").isBrowser("IE <= 8") || navigator.onLine;
        },
        send: function (n, o, a, i) {
          var t,
            l = f.getEndPointUrl(!1),
            m = r("ZeroRewrites").rewriteURI(new (e || (e = r("URI")))(l));
          (s || (s = r("ExecutionEnvironment"))).isInWorker &&
            (m = m.getQualifiedURI());
          var p = r("ZeroRewrites").getTransportBuilderForURI(m)();
          (p.open(_, m.toString(), !0),
            Object.entries(r("getAsyncHeaders")(m)).forEach(function (e) {
              var t = e[0],
                n = e[1];
              p.setRequestHeader(t, n);
            }),
            i === !0
              ? (p.onreadystatechange = function () {
                  if (p.readyState >= 4) {
                    var e = d.indexOf(p);
                    e >= 0 && d.splice(e, 1);
                    var t;
                    try {
                      t = p.status;
                    } catch (e) {
                      t = 0;
                    }
                    t === 200
                      ? (o && o(), r("NetworkStatus").reportSuccess())
                      : (a && a(t), r("NetworkStatus").reportError());
                  }
                })
              : (p.onreadystatechange = function () {
                  (u || (u = r("JSScheduler"))).scheduleNormalPriCallback(
                    function () {
                      if (p.readyState >= 4) {
                        var e = d.indexOf(p);
                        e >= 0 && d.splice(e, 1);
                        var t;
                        try {
                          t = p.status;
                        } catch (e) {
                          t = 0;
                        }
                        t === 200
                          ? (o && o(),
                            r("NetworkStatus").reportSuccess(),
                            f.inform((c || (c = r("BanzaiConsts"))).OK))
                          : (a && a(t),
                            r("NetworkStatus").reportError(),
                            f.inform((c || (c = r("BanzaiConsts"))).ERROR));
                      }
                    },
                  );
                }),
            d.push(p),
            r("NetworkStatus").isOnline()
              ? p.send(n)
              : (t = r("NetworkStatus").onChange(function (e) {
                  var r = e.online;
                  r && (p.send(n), t.remove());
                })));
        },
        setHooks: function () {},
        setUnloadHook: function (t) {
          o("Run").onAfterUnload(t._unload);
        },
        subscribe: function (t, n) {
          if (Array.isArray(t)) {
            var e = [];
            return (
              t.forEach(function (t) {
                return e.push(m.addListener(t, n));
              }),
              {
                remove: function () {
                  e.forEach(function (e) {
                    return e.remove();
                  });
                },
              }
            );
          } else return m.addListener(t, n);
        },
        useBeacon: !1,
        wrapInTimeSlice: function (t, n) {
          return (
            r("FBLogger")("banzai").mustfix(
              "wrapInTimeSlice is not implemented",
            ),
            function () {}
          );
        },
      },
      g = f;
    l.default = g;
  },
  98,
);
