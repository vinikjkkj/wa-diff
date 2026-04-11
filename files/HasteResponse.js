__d(
  "HasteResponse",
  [
    "Bootloader",
    "BootloaderConfig",
    "BootloaderEvents",
    "ClientConsistencyEventEmitter",
    "HasteSupportData",
    "ServerJS",
    "TimeSlice",
    "__debug",
    "fb-error",
    "performanceAbsoluteNow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set(),
      u = {
        handleSRPayload: function (t, n) {
          var e = t.hblp,
            a = t.hsdp;
          (a && o("HasteSupportData").handle(a, n == null ? void 0 : n.hsdp),
            e && r("Bootloader").handlePayload(e, n == null ? void 0 : n.hblp),
            (e == null ? void 0 : e.consistency) != null &&
              r("ClientConsistencyEventEmitter").emit(
                "newEntry",
                e.consistency,
              ));
        },
        handle: function (a, i) {
          var t = a.allResources,
            l = a.hsrp,
            c = a.jsmods,
            d = a.tieredResources,
            m = i.onAll,
            p = i.onBlocking,
            _ = i.onLog,
            f = i.source,
            g = i.sourceDetail,
            h = (e || (e = r("performanceAbsoluteNow")))(),
            y;
          if (g == null) y = !0;
          else {
            var C = r("fb-error").getSimpleHash(f, g);
            s.has(C) ? (y = !1) : ((y = !0), s.add(C));
          }
          var b = {
            hsdp: { entry: 0, dup_entry: 0 },
            hblp: { rsrc: 0, dup_rsrc: 0, comp: 0, dup_comp: 0 },
            sjsp: {
              define: 0,
              dup_user_define: 0,
              dup_system_define: 0,
              require: 0,
            },
          };
          l && u.handleSRPayload(l, b);
          var v = 0,
            S = 0,
            R = function () {
              ((b.sjsp.require += (
                (c == null ? void 0 : c.require) || []
              ).length),
                (b.sjsp.define += (
                  (c == null ? void 0 : c.define) || []
                ).length));
              var t = n("__debug").getDupCount(),
                o = t[0],
                a = t[1];
              ((b.sjsp.dup_user_define -= o),
                (b.sjsp.dup_system_define -= a),
                (v = (e || (e = r("performanceAbsoluteNow")))()),
                new (r("ServerJS"))().handle(c || {}),
                (S = e()));
              var i = n("__debug").getDupCount();
              ((o = i[0]),
                (a = i[1]),
                (b.sjsp.dup_user_define += o),
                (b.sjsp.dup_system_define += a),
                p == null || p());
            },
            L = function (n) {
              var t = {
                source: f,
                sourceDetail: g,
                isFirstIdentical: y,
                timesliceContext: r("TimeSlice").getContext(),
                startTime: h,
                logTime: (e || (e = r("performanceAbsoluteNow")))(),
                jsmodsStart: v,
                jsmodsEnd: S,
                rsrcs: n,
                payloadStats: b,
              };
              (_ == null || _(t), o("BootloaderEvents").notifyHasteResponse(t));
            };
          r("BootloaderConfig").tieredLoadingFromTier <= 3 && d != null
            ? r("Bootloader").loadTieredResources(d, {
                onBlocking: R,
                onAll: m,
                onLog: L,
              })
            : r("Bootloader").loadResources(t != null ? t : [], {
                onBlocking: R,
                onAll: m,
                onLog: L,
              });
        },
      },
      c = u.handle,
      d = u.handleSRPayload;
    ((l.handle = c), (l.handleSRPayload = d));
  },
  98,
);
