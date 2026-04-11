__d(
  "Bootloader",
  [
    "invariant",
    "BootloaderConfig",
    "BootloaderDocumentInserter",
    "BootloaderEndpoint",
    "BootloaderEvents",
    "BootloaderEventsManager",
    "BootloaderPreloader",
    "BootloaderRetryTracker",
    "BootloaderUsageLoggerUtils",
    "CSSLoader",
    "ClientConsistency",
    "ErrorPubSub",
    "ExecutionEnvironment",
    "FBLogger",
    "HasteBitMap",
    "HasteResourceIndexUtil",
    "JSResourceReferenceImpl",
    "MakeHasteTranslations",
    "NetworkStatus",
    "RequireDeferredReference",
    "ResourceHasher",
    "ResourceTimingsStore",
    "ServerJsRuntimeEnvironment",
    "SiteData",
    "TimeSlice",
    "TrustedTypesBootloaderDataURIScriptURLPolicy",
    "TrustedTypesMetaURIScriptURLPolicy",
    "__debug",
    "clearTimeout",
    "cr:696703",
    "err",
    "fb-error",
    "gkx",
    "ifRequireable",
    "ifRequired",
    "nullthrows",
    "objectKeys",
    "objectValues",
    "performanceAbsoluteNow",
    "performanceNow",
    "promiseDone",
    "setTimeoutAcrossTransitions",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m,
      p = function () {},
      _ = new Set(),
      f = new Set(),
      g = !!(m = r("BootloaderConfig")).deferBootloads,
      h = [],
      y = !1,
      C = [],
      b = new Map(),
      v = new Set(),
      S = new Set(),
      R = new Map(),
      L = new Map(),
      E = new Map(),
      k = new Map(),
      I = new Map(),
      T = new Map(),
      D = new Map(),
      x = new Map(),
      $ = new Set(),
      P = !1,
      N = new Set(),
      M = !1,
      w = new (r("BootloaderEventsManager"))(),
      A = new Set(),
      F = new (r("BootloaderRetryTracker"))({
        retries: m.jsRetries,
        abortNum: m.jsRetryAbortNum,
        abortTime: m.jsRetryAbortTime,
        abortCallback: function () {
          r("FBLogger")("bootloader", "js_retry_abort").info("JS retry abort");
        },
      }),
      O = new Set(),
      B = !1,
      W = null;
    function q() {
      if (W == null)
        try {
          if (r("gkx")("1174"))
            if (
              typeof r("NetworkStatus").isOnline == "function" &&
              typeof r("NetworkStatus").onChange == "function"
            )
              ((B = !r("NetworkStatus").isOnline()),
                (W = r("NetworkStatus").onChange(function (e) {
                  var t = e.online,
                    n = B;
                  ((B = !t),
                    r("FBLogger")("bootloader").info(
                      "Network status change: was offline %s, now offline %s",
                      n,
                      B,
                    ),
                    n && t && U());
                })));
            else throw new Error("Network status API is not available");
        } catch (e) {
          r("FBLogger")("bootloader").warn("NetworkStatus is failing");
        }
    }
    q();
    function U() {
      if (O.size !== 0) {
        var e = Array.from(O);
        (O.clear(),
          r("FBLogger")("bootloader").info(
            "Network back online, retrying %s failed resources",
            e.length,
          ),
          Ce.loadResources(e));
      }
    }
    function V(e) {
      B &&
        (O.add(e),
        r("FBLogger")("bootloader").info(
          "Resource %s failed while offline, will retry when network returns",
          e,
        ));
    }
    (e || (e = r("ErrorPubSub"))).unshiftListener(function (e) {
      var t = [];
      for (var n of R) {
        var r = n[0],
          o = n[1];
        if (!L.has(r)) {
          var a = K(r);
          a.type === "csr" || a.type === "async" || t.push(a.src);
        }
      }
      e.loadingUrls = t;
    });
    function H(e) {
      for (var t of e) if (f.has(t)) return !0;
      return !1;
    }
    function G(e) {
      if (g || !M || (H(e) && !y)) return !1;
      for (var t of e) {
        var n = k.get(t);
        if (!n) return !1;
        for (var r of [
          n.r,
          ((o = n.rdfds) == null ? void 0 : o.r) || [],
          ((a = n.rds) == null ? void 0 : a.r) || [],
        ]) {
          var o, a;
          for (var i of r) if (!I.has(i)) return !1;
        }
      }
      return !0;
    }
    function z(e) {
      var t = k.get(e);
      if (!t)
        throw r("fb-error").TAAL.blameToPreviousFile(
          r("err")("Bootloader: %s is not in the component map", e),
        );
      return t;
    }
    function j(e) {
      var t = z(e);
      (t.be && (delete t.be, Ce.done(o("ResourceHasher").getAsyncHash(e))),
        f.add(e));
    }
    function K(e) {
      var t = I.get(e);
      if (!t)
        throw r("fb-error").TAAL.blameToPreviousFile(
          r("err")("No resource entry for hash: %s", e),
        );
      return t;
    }
    function Q(e, t) {
      var n = o("ResourceHasher").getAsyncHash(e);
      if (!I.has(n)) I.set(n, { type: "async", module: e, blocking: !!t });
      else {
        var r = K(n);
        (r.type === "async" || s(0, 21557),
          r.blocking && !t && (r.blocking = !1));
      }
      return n;
    }
    function X(e) {
      return !de(e);
    }
    function Y(e) {
      if (!X(e)) return !1;
      var t = z(e),
        n = t.be;
      return !!n;
    }
    function J(e) {
      if (!Y(e)) return null;
      var t = o("ResourceHasher").getAsyncHash(e);
      return w.rsrcDone(t);
    }
    function Z(e, t, n) {
      var o = (u || (u = r("performanceAbsoluteNow")))(),
        a = t.src,
        i = r("ResourceTimingsStore").getUID("js", a);
      (r("ResourceTimingsStore")
        .annotate("js", i)
        .addStringAnnotation("name", e)
        .addStringAnnotation("source", a),
        r("ResourceTimingsStore").measureRequestSent("js", i),
        r("nullthrows")(self.bl_worker_import_wrapper)(a)
          .then(function () {
            var t = F.getNumRetriesForSource(a);
            (t > 0 &&
              r("FBLogger")("bootloader").info(
                "JS retry success [%s] at %s | time: %s | retries: %s",
                e,
                a,
                (u || (u = r("performanceAbsoluteNow")))() - o,
                t,
              ),
              r("ResourceTimingsStore").measureResponseReceived("js", i),
              n());
          })
          .catch(function (l) {
            r("ResourceTimingsStore").measureResponseReceived("js", i);
            var s = (u || (u = r("performanceAbsoluteNow")))();
            F.maybeScheduleRetry(
              a,
              function () {
                Z(e, t, n);
              },
              function () {
                (E.set(e, s),
                  r("FBLogger")("bootloader")
                    .catching(l)
                    .warn(
                      "JS loading error [%s] at %s | time: %s | retries: %s | concurrency: %s",
                      e,
                      a,
                      s - o,
                      F.getNumRetriesForSource(a),
                      R.size - L.size,
                    ),
                  r("NetworkStatus").reportError(),
                  n());
              },
            );
          }));
    }
    function ee(e, t, n, o) {
      if ((c || (c = r("ExecutionEnvironment"))).isInWorker) {
        Z(e, t, n);
        return;
      }
      var a = r("nullthrows")(o),
        i = document.createElement("script");
      (t.d
        ? ((i.src = r(
            "TrustedTypesBootloaderDataURIScriptURLPolicy",
          ).createScriptURL(t.src)),
          (i.nonce = r("BootloaderConfig").nonce))
        : (i.src = r("TrustedTypesMetaURIScriptURLPolicy").createScriptURL(
            t.src,
          )),
        (i.async = !0),
        r("BootloaderConfig").enableRetryOnStuckResource &&
          i.setAttribute("fetchPriority", "high"),
        t.nc || (i.crossOrigin = "anonymous"),
        t.m != null && (i.dataset.btmanifest = t.m),
        t.tsrc != null && (i.dataset.tsrc = t.tsrc),
        (i.dataset.bootloaderHashClient = e),
        te(i, e, t, n),
        S.add(e),
        a.appendChild(i));
    }
    function te(e, t, n, o) {
      var a = e.src,
        i = (u || (u = r("performanceAbsoluteNow")))(),
        l = r("TimeSlice").getGuardedContinuation(
          "Bootloader script.onresponse",
        ),
        s = r("ResourceTimingsStore").getUID("js", a);
      (r("ResourceTimingsStore")
        .annotate("js", s)
        .addStringAnnotation("name", t)
        .addStringAnnotation("source", a),
        r("ifRequireable")("TimeSliceInteraction", function (e) {
          e.informGlobally("bootloader._loadJS")
            .addStringAnnotation("source", a)
            .addStringAnnotation("name", t);
        }),
        r("ResourceTimingsStore").measureRequestSent("js", s));
      var c = !1;
      ((e.onload = l.bind(void 0, function () {
        c = !0;
        var e = F.getNumRetriesForSource(a);
        (e > 0 &&
          r("FBLogger")("bootloader").info(
            "JS retry success [%s] at %s | time: %s | retries: %s",
            t,
            a,
            (u || (u = r("performanceAbsoluteNow")))() - i,
            e,
          ),
          r("ResourceTimingsStore").measureResponseReceived("js", s),
          o());
      })),
        (e.onerror = l.bind(void 0, function () {
          c = !0;
          var l = (u || (u = r("performanceAbsoluteNow")))();
          (E.set(t, l),
            r("ResourceTimingsStore").measureResponseReceived("js", s),
            F.maybeScheduleRetry(
              a,
              function () {
                var r = e.parentNode;
                r && (E.delete(t), r.removeChild(e), ee(t, n, o, r));
              },
              function () {
                (r("FBLogger")("bootloader").warn(
                  "JS loading error [%s] at %s | time: %s | retries: %s | concurrency: %s",
                  t,
                  a,
                  l - i,
                  F.getNumRetriesForSource(a),
                  R.size - L.size,
                ),
                  r("NetworkStatus").reportError(),
                  o());
              },
            ));
        })),
        r("BootloaderConfig").enableRetryOnStuckResource &&
          r("setTimeoutAcrossTransitions")(
            l.bind(void 0, function () {
              c ||
                F.maybeRetryImmediately(
                  a,
                  function () {
                    var r = e.parentNode;
                    r && (r.removeChild(e), ee(t, n, o, r));
                  },
                  function () {
                    r("FBLogger")("bootloader").warn(
                      "JS loading timeout [%s] at %s | retries: %s | concurrency: %s",
                      t,
                      a,
                      F.getNumRetriesForSource(a),
                      R.size - L.size,
                    );
                  },
                );
            }),
            1e4,
          ));
    }
    function ne(e, t, n) {
      return function () {
        (r("FBLogger")("bootloader").warn(
          "CSS timeout [%s] at %s | concurrency: %s",
          e,
          t.src,
          R.size - L.size,
        ),
          E.set(e, (u || (u = r("performanceAbsoluteNow")))()),
          r("NetworkStatus").reportError(),
          n());
      };
    }
    function re(e, t, n, r) {
      var o, a, i;
      if (!t.includes("/rsrc.php") || t.includes("/intern/rsrc.php")) return [];
      var l = ((o = t.match(/(.*\/)([^.]+)(\.)/)) != null ? o : [])[2];
      return l == null
        ? []
        : (a =
              (i = l.match(/.{1,11}/g)) == null
                ? void 0
                : i.filter(function (t, o) {
                    return !n.has(o) && e[o] > r;
                  })) != null
          ? a
          : [];
    }
    function oe(e, t) {
      var n = e.replace(/\/y[a-zA-Z0-9_-]\//, "/");
      return n.includes("/intern/rsrc.php") ||
        n.includes("/intern/rsrc-translations.php")
        ? n.replace(/(!)(.+)(\.(?:css|js)(?:$|\?))/, function (e, n, r, o) {
            return (
              n +
              r
                .split(",")
                .filter(function (e, n) {
                  return !t.has(n);
                })
                .join(",") +
              o
            );
          })
        : n.includes("/rsrc.php") || n.includes("/rsrc-translations.php")
          ? n.replace(/(.*\/)([^.]+)(\.)/, function (e, n, r, o) {
              return (
                n +
                r
                  .match(/.{1,11}/g)
                  .filter(function (e, n) {
                    return !t.has(n);
                  })
                  .join("") +
                o
              );
            })
          : e;
    }
    function ae(e, t, n, a) {
      if (r("gkx")("15745")) {
        if (R.has(e) && !E.has(e)) return;
      } else if (R.has(e)) return;
      (E.has(e) && E.delete(e),
        R.set(e, (u || (u = r("performanceAbsoluteNow")))()));
      var i = [];
      if (
        (t.type === "js" || t.type === "css") &&
        t.p != null &&
        t.d !== 1 &&
        r("BootloaderConfig").hypStep4
      ) {
        var l = o("HasteResourceIndexUtil").parseResourceIndexes(t.p),
          d = new Set(),
          m = 0;
        if (
          (l.forEach(function (t, n) {
            t !== o("HasteResourceIndexUtil").UNKNOWN_RESOURCE_INDEX &&
            T.get(t) !== e
              ? d.add(n)
              : t > m && (m = t);
          }),
          m > r("BootloaderConfig").btCutoffIndex)
        ) {
          var p = re(l, t.src, d, r("BootloaderConfig").btCutoffIndex);
          i.push(p);
        }
        if (d.size === l.length) return;
        d.size > 0 &&
          ((t.src = oe(t.src, d)),
          t.type === "js" &&
            t.tsrc != null &&
            t.tsrc.trim() !== "" &&
            (t.tsrc = oe(r("nullthrows")(t.tsrc), d)));
      }
      switch (
        (t.type === "js" &&
          t.tsrc != null &&
          t.tsrc.trim() !== "" &&
          r("promiseDone")(
            o("MakeHasteTranslations").genFetchAndProcessTranslations(
              e,
              r("nullthrows")(t.tsrc),
            ),
          ),
        o("BootloaderPreloader").preloadResource(t, n, void 0, void 0),
        t.type)
      ) {
        case "js":
          ee(
            e,
            t,
            function () {
              Ce.done(e);
              for (var t of i)
                o("BootloaderEvents").notifyResourceInLongTailBTManifest(t, a);
            },
            n,
          );
          break;
        case "css":
          var _ = function () {
            return Ce.done(e);
          };
          if ((c || (c = r("ExecutionEnvironment"))).isInWorker) {
            _();
            break;
          }
          r("CSSLoader").loadStyleSheet(
            e,
            t.src,
            r("nullthrows")(n),
            !t.nc,
            t.m,
            _,
            ne(e, t, _),
          );
          break;
        case "async":
          o("BootloaderEndpoint").BootloaderEndpoint.load(
            t.module,
            t.blocking,
            e,
          );
          break;
        default:
          (t.type, s(0, 3721));
      }
    }
    function ie(e, t, a, i, l) {
      var u = new Map(),
        c = l != null ? l : o("BootloaderEvents").newResourceMapSet(),
        d = [],
        m = [],
        p = [];
      for (var _ of pe(e)) {
        var f = _[0],
          g = _[1],
          h = void 0;
        switch (g.type) {
          case "css":
            h = g.nonblocking ? "nonblocking" : "blocking";
            break;
          case "js":
            h = "default";
            break;
          case "async":
            h = g.blocking ? "blocking" : "nonblocking";
            break;
          default:
            (g.type, s(0, 3721));
        }
        c[h].set(f, g);
        var y = w.rsrcDone(f);
        (p.push(y),
          h !== "nonblocking" && (m.push(y), h === "blocking" && d.push(y)),
          r("gkx")("15745")
            ? (!R.has(f) || E.has(f)) && u.set(f, g)
            : R.has(f) || u.set(f, g));
      }
      var C, b;
      n("cr:696703")
        ? ((b = n("cr:696703").scheduleLoggingPriCallback),
          (C =
            n(
              "cr:696703",
            ).getUserBlockingRunAtCurrentPriCallbackScheduler_DO_NOT_USE()))
        : (C = b =
            function (t) {
              return t();
            });
      var v = t.onAll,
        S = t.onBlocking,
        L = t.onLog;
      (S &&
        w.registerCallback(function () {
          C(S);
        }, d),
        v &&
          w.registerCallback(function () {
            C(v);
          }, m),
        L &&
          w.registerCallback(function () {
            b(function () {
              return L(c);
            });
          }, p));
      for (var k of u) {
        var I = k[0],
          T = k[1];
        ae(I, T, a, i);
      }
    }
    function le(e, t, n) {
      if ((I.set(e, t), !(t.type === "async" || t.type === "csr"))) {
        var a = t.p;
        if (a != null)
          for (var i of o("HasteResourceIndexUtil").parseResourceIndexes(a))
            i !== o("HasteResourceIndexUtil").UNKNOWN_RESOURCE_INDEX &&
              ((!T.has(i) || n) && T.set(i, e),
              t.c &&
                r("BootloaderConfig").csrOn &&
                o("HasteBitMap").add("__csr", i));
        se(e);
      }
    }
    function se(e) {
      A.has(e) && (A.delete(e), Ce.loadResources([e]));
    }
    function ue(e, t) {
      var n,
        a = w.bootload(t);
      if ($.has(a)) return [a, null];
      $.add(a);
      var i = (u || (u = r("performanceAbsoluteNow")))(),
        l = {
          ref: e,
          components: t,
          timesliceContext: r("TimeSlice").getContext(),
          startTime: (n = b.get(a)) != null ? n : i,
          fetchStartTime: i,
          callbackStart: 0,
          callbackEnd: 0,
          tierOne: o("BootloaderEvents").newResourceMapSet(),
          tierTwo: o("BootloaderEvents").newResourceMapSet(),
          tierThree: o("BootloaderEvents").newResourceMapSet(),
          beRequests: new Map(),
        };
      return (o("BootloaderEvents").notifyBootloadStart(l), [a, l]);
    }
    function ce(e) {
      return r("ifRequired").call(
        null,
        e,
        function () {
          return !0;
        },
        function () {
          return !1;
        },
      );
    }
    function de(e) {
      return r("ifRequireable").call(
        null,
        e,
        function () {
          return !0;
        },
        function () {
          return !1;
        },
      );
    }
    function me(e, t, n, i) {
      (x.has(e) ||
        x.set(e, {
          firstBootloadStart: (u || (u = r("performanceAbsoluteNow")))(),
          logData: new Set(),
        }),
        i && r("nullthrows")(x.get(e)).logData.add(i));
      var l = z(e),
        s = l.be,
        c = l.r,
        d = l.rdfds,
        m = l.rds,
        p = X(e) ? Q(e, s) : null;
      (p == null && w.notify(w.beDone(e)),
        ie(
          p != null ? [p].concat(c) : c,
          {
            onAll: function () {
              return w.notify(w.tierOne(e));
            },
            onLog: function () {
              return w.notify(w.tierOneLog(e));
            },
          },
          n,
          e,
          i == null ? void 0 : i.tierOne,
        ));
      var _ = (d == null ? void 0 : d.m) || [],
        f = function (o) {
          ie(
            (d == null ? void 0 : d.r) || [],
            {
              onBlocking: function () {
                return r("RequireDeferredReference").unblock(_, "css");
              },
              onAll: function () {
                return w.registerCallback(
                  function () {
                    (w.notify(w.tierTwoStart(e)),
                      a.call(
                        null,
                        _.map(
                          r("RequireDeferredReference")
                            .getRDModuleName_DO_NOT_USE,
                        ),
                        function () {
                          return w.notify(w.tierTwo(e));
                        },
                      ));
                  },
                  [w.tierOne(e), t],
                );
              },
              onLog: function () {
                return w.notify(w.tierTwoLog(e));
              },
            },
            o,
            e,
            i == null ? void 0 : i.tierTwo,
          );
        };
      r("BootloaderConfig").tieredLoadingFromTier != null &&
      r("BootloaderConfig").tieredLoadingFromTier <= 2
        ? w.registerCallback(
            function () {
              return o("BootloaderDocumentInserter").batchDOMInsert(f);
            },
            [w.tierOne(e)],
          )
        : f(n);
      var g = (m == null ? void 0 : m.m) || [],
        h = function (n) {
          ie(
            (m == null ? void 0 : m.r) || [],
            {
              onBlocking: function () {
                return r("RequireDeferredReference").unblock(g, "css");
              },
              onAll: function () {
                return w.registerCallback(
                  function () {
                    (w.notify(w.tierThreeStart(e)),
                      a.call(
                        null,
                        g.map(
                          r("RequireDeferredReference")
                            .getRDModuleName_DO_NOT_USE,
                        ),
                        function () {
                          return w.notify(w.tierThree(e));
                        },
                      ));
                  },
                  [w.tierTwo(e)],
                );
              },
              onLog: function () {
                return w.notify(w.tierThreeLog(e));
              },
            },
            n,
            e,
            i == null ? void 0 : i.tierThree,
          );
        };
      r("BootloaderConfig").tieredLoadingFromTier != null &&
      r("BootloaderConfig").tieredLoadingFromTier <= 3
        ? w.registerCallback(
            function () {
              return o("BootloaderDocumentInserter").batchDOMInsert(h);
            },
            [w.tierTwo(e)],
          )
        : h(n);
    }
    function pe(e) {
      var t = new Map();
      for (var n of e) {
        var a = I.get(n);
        if (!a) {
          (A.add(n),
            r("FBLogger")("bootloader").mustfix(
              "Unable to resolve resource %s.",
              n,
            ));
          continue;
        }
        var i = void 0;
        if (a.type === "csr")
          i = o("HasteResourceIndexUtil").parseResourceIndexes(a.src);
        else if (a.p != null)
          ((i = o("HasteResourceIndexUtil").parseResourceIndexes(a.p)),
            i.includes(o("HasteResourceIndexUtil").UNKNOWN_RESOURCE_INDEX) &&
              t.set(n, a),
            (i = i.filter(function (e) {
              return e !== o("HasteResourceIndexUtil").UNKNOWN_RESOURCE_INDEX;
            })));
        else {
          t.set(n, a);
          continue;
        }
        for (var l of i) {
          v.add(l);
          var u = T.get(l);
          if (u == null)
            throw (
              r("FBLogger")("bootloader").mustfix(
                "SoT hash unavailable for hash %s",
                l,
              ),
              new Error("Got unexpected null or undefined")
            );
          var c = K(u);
          (c.type !== "csr" || s(0, 20056, u), t.set(u, c));
        }
      }
      return t.entries();
    }
    function _e(e) {
      return e.type === "csr"
        ? o("HasteResourceIndexUtil")
            .parseResourceIndexes(e.src)
            .filter(function (e) {
              return e !== o("HasteResourceIndexUtil").UNKNOWN_RESOURCE_INDEX;
            })
        : e.p != null
          ? o("HasteResourceIndexUtil")
              .parseResourceIndexes(e.p)
              .filter(function (e) {
                return e !== o("HasteResourceIndexUtil").UNKNOWN_RESOURCE_INDEX;
              })
          : [];
    }
    function fe(e) {
      var t,
        n = e.getAttribute("data-bootloader-hash");
      if (n != null) {
        var a = o("ResourceHasher").getValidResourceHash(n);
        if (e.id) {
          if (N.has(e.id)) return;
          N.add(e.id);
        }
        var i =
          e.tagName === "SCRIPT"
            ? { src: e.src, type: "js" }
            : { src: e.href, type: "css" };
        (e.crossOrigin == null && (i.nc = 1),
          i.type === "js" &&
            e.dataset.tsrc != null &&
            e.dataset.tsrc.trim() !== "" &&
            ((i.tsrc = e.dataset.tsrc),
            r("promiseDone")(
              o("MakeHasteTranslations").genFetchAndProcessTranslations(
                a,
                i.tsrc,
              ),
            )),
          i.type === "css" &&
            e.getAttribute("data-nonblocking") &&
            (i.nonblocking = 1));
        var l = e.getAttribute("data-c");
        l === "1" ? (i.c = 1) : l === "2" && (i.c = 2);
        var s = e.getAttribute("data-p");
        if (s != null) {
          i.p = s;
          var c = o("HasteResourceIndexUtil").parseResourceIndexes(s),
            d = Math.max.apply(Math, c);
          d > r("BootloaderConfig").btCutoffIndex &&
            o("BootloaderEvents").notifyResourceInLongTailBTManifest(
              re(c, i.src, new Set(), r("BootloaderConfig").btCutoffIndex),
              "pickupPageResource",
            );
        }
        var m = e.getAttribute("data-btmanifest");
        (m != null && (i.m = m),
          le(a, i, !0),
          R.set(a, (u || (u = r("performanceAbsoluteNow")))()));
        var p = function () {
            return Ce.done(a);
          },
          _ =
            i.type === "js"
              ? !e.getAttribute("async")
              : ((t = e.parentNode) == null ? void 0 : t.tagName) === "HEAD";
        _ || (window._btldr && window._btldr[a])
          ? p()
          : i.type === "js"
            ? te(e, a, i, p)
            : (r("FBLogger")("bootloader").info(
                "Encountered body CSS not handled by BootloaderScriptListener: {\n          hash: '%s',\n          src: '%s',\n          cohort: '%s',\n        }",
                a,
                i.src,
                r("SiteData").pkg_cohort,
              ),
              r("CSSLoader").setupEventListenersForPotentiallyLoadedCSS(
                a,
                i.src,
                o("BootloaderDocumentInserter").getDOMContainerNode(),
                p,
                ne(a, i, p),
                e,
              ));
      }
    }
    function ge() {
      P ||
        ((P = !0),
        !(
          !(c || (c = r("ExecutionEnvironment"))).canUseDOM ||
          (c || (c = r("ExecutionEnvironment"))).isInWorker
        ) &&
          (Array.from(document.getElementsByTagName("link")).forEach(
            function (e) {
              return fe(e);
            },
          ),
          Array.from(document.getElementsByTagName("script")).forEach(
            function (e) {
              return fe(e);
            },
          )));
    }
    function he() {
      if (y) {
        var e = h;
        ((h = []),
          e.forEach(function (e) {
            var t = e[0],
              n = e[1],
              o = e[2],
              a = e[3];
            a(function () {
              (r("FBLogger")("bootloader").info(
                "Support data is ready, executing immediate bootload:",
                t.join(", "),
              ),
                Ce.loadModules.apply(Ce, [t, n, o]));
            });
          }));
      }
    }
    function ye() {
      M = !0;
      var e = C;
      ((C = []),
        e.forEach(function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            o = e[3];
          o(function () {
            Ce.loadModules.apply(Ce, [t, n, r]);
          });
        }),
        he());
    }
    var Ce = {
      loadModules: function (t, n, i) {
        (n === void 0 && (n = p),
          i === void 0 && (i = "loadModules: unknown caller"));
        var e = t,
          l,
          s = !1,
          c = function () {
            (r("clearTimeout")(l), !s && n.apply(void 0, arguments));
          },
          d = {
            remove: function () {
              s = !0;
            },
          };
        if (
          r("BootloaderConfig").fastPathForAlreadyRequired &&
          e.every(function (e) {
            return de(e);
          })
        )
          return (
            a.call(null, e, function () {
              for (
                var t = arguments.length, n = new Array(t), a = 0;
                a < t;
                a++
              )
                n[a] = arguments[a];
              var i = r("BootloaderConfig").shouldEnableProxyArgs
                ? o("BootloaderUsageLoggerUtils").getProxyArgs.apply(
                    o("BootloaderUsageLoggerUtils"),
                    [e].concat(n),
                  )
                : n;
              c.apply(void 0, i);
            }),
            d
          );
        if (!G(e)) {
          var m,
            _ = "Deferred: Bootloader.loadModules",
            f = r("TimeSlice").getGuardedContinuation(_);
          H(e) && !y
            ? (r("FBLogger")("bootloader").info(
                "Support data is not ready, queuing immediate bootload:",
                e.join(),
              ),
              h.push([e, c, i, f]))
            : C.push([e, c, i, f]);
          var g = w.bootload(e);
          return (
            b.set(
              g,
              (m = b.get(g)) != null
                ? m
                : (u || (u = r("performanceAbsoluteNow")))(),
            ),
            d
          );
        }
        var v = ue(i, e),
          S = v[0],
          R = v[1];
        if (
          (w.registerCallback(
            a.bind(null, e, function () {
              (R &&
                (R.callbackStart = (u || (u = r("performanceAbsoluteNow")))()),
                c.apply(void 0, arguments),
                R &&
                  (R.callbackEnd = (u || (u = r("performanceAbsoluteNow")))()),
                w.notify(S));
            }),
            e.map(function (e) {
              return w.tierOne(e);
            }),
          ),
          o("BootloaderDocumentInserter").batchDOMInsert(function (t) {
            for (var n of e) me(n, S, t, R);
          }),
          R)
        ) {
          var L = new Set([S]);
          for (var E of e)
            (L.add(w.beDone(E)),
              L.add(w.tierThree(E)),
              L.add(w.tierOneLog(E)),
              L.add(w.tierTwoLog(E)),
              L.add(w.tierThreeLog(E)));
          w.registerCallback(function () {
            o("BootloaderEvents").notifyBootload(R);
          }, Array.from(L));
          var k = new Set();
          for (var I of new Set(e))
            (k.add(w.beDone(I)),
              k.add(w.tierOneLog(I)),
              k.add(w.tierTwoLog(I)),
              k.add(w.tierThreeLog(I)));
          var T = {
            bootloaderData: R,
            erroredResources: new Set(),
            offline: !1,
          };
          (w.registerCallback(function () {
            if (Ce.getErrorCount() > 0) {
              T.erroredResources.clear();
              var e = function (t) {
                for (var e of r("objectValues")(t))
                  for (var n of e) {
                    var o = n[0],
                      a = n[1],
                      i = Ce.getResourceState(o);
                    i.loadError != null &&
                      (V(o),
                      a.type === "js" || a.type === "css"
                        ? T.erroredResources.add(a.src)
                        : a.type === "async" &&
                          T.erroredResources.add(a.module));
                  }
              };
              (e(R.tierOne), e(R.tierTwo), e(R.tierThree));
              for (var t of R.beRequests.values()) e(t.rsrcs);
              var n = r("gkx")("20935")
                ? !r("NetworkStatus").isOnline()
                : !window.navigator.onLine;
              (n && (T.offline = !0),
                o("BootloaderEvents").notifyBootloadError(T));
            }
          }, Array.from(k)),
            r("ifRequireable")("TimeSliceInteraction", function (t) {
              t.informGlobally("Bootloader.loadResources")
                .addSetAnnotation(
                  "requested_hashes",
                  Array.from(
                    o("BootloaderEvents")
                      .flattenResourceMapSet(R.tierOne)
                      .keys(),
                  ),
                )
                .addSetAnnotation(
                  "rdfd_requested_hashes",
                  Array.from(
                    o("BootloaderEvents")
                      .flattenResourceMapSet(R.tierTwo)
                      .keys(),
                  ),
                )
                .addSetAnnotation(
                  "rd_requested_hashes",
                  Array.from(
                    o("BootloaderEvents")
                      .flattenResourceMapSet(R.tierThree)
                      .keys(),
                  ),
                )
                .addStringAnnotation("bootloader_reference", i)
                .addSetAnnotation("requested_components", e);
            }),
            (l = r("setTimeoutAcrossTransitions")(function () {
              o("BootloaderEvents").notifyBootloaderCallbackTimeout(R);
            }, r("BootloaderConfig").timeout)));
        }
        return d;
      },
      loadResources: function (t, n) {
        (ge(),
          o("BootloaderDocumentInserter").batchDOMInsert(function (e) {
            return ie(
              t.map(function (e) {
                return o("ResourceHasher").getValidResourceHash(e);
              }),
              n != null ? n : Object.freeze({}),
              e,
              "loadResources",
            );
          }));
      },
      loadTieredResources: function (t, n) {
        var e =
            r("BootloaderConfig").tieredLoadingFromTier != null &&
            r("BootloaderConfig").tieredLoadingFromTier <= 2,
          a =
            r("BootloaderConfig").tieredLoadingFromTier != null &&
            r("BootloaderConfig").tieredLoadingFromTier <= 3,
          i = !1,
          l = !1,
          s = function (r) {
            var e;
            ie(
              ((e = t == null ? void 0 : t.rds) != null ? e : []).map(
                function (e) {
                  return o("ResourceHasher").getValidResourceHash(e);
                },
              ),
              n != null ? n : Object.freeze({}),
              r,
              "loadTieredResources",
            );
          },
          u = function (r) {
            var n;
            ie(
              ((n = t == null ? void 0 : t.rdfds) != null ? n : []).map(
                function (e) {
                  return o("ResourceHasher").getValidResourceHash(e);
                },
              ),
              {
                onAll: function () {
                  e
                    ? o("BootloaderDocumentInserter").batchDOMInsert(s)
                    : a &&
                      ((l = !0),
                      i && o("BootloaderDocumentInserter").batchDOMInsert(s));
                },
              },
              r,
              "loadTieredResources",
            );
          },
          c = function (r) {
            var n;
            ie(
              ((n = t == null ? void 0 : t.r) != null ? n : []).map(
                function (e) {
                  return o("ResourceHasher").getValidResourceHash(e);
                },
              ),
              {
                onAll: function () {
                  e
                    ? o("BootloaderDocumentInserter").batchDOMInsert(u)
                    : a &&
                      ((i = !0),
                      l && o("BootloaderDocumentInserter").batchDOMInsert(s));
                },
              },
              r,
              "loadTieredResources",
            );
          };
        e
          ? o("BootloaderDocumentInserter").batchDOMInsert(c)
          : o("BootloaderDocumentInserter").batchDOMInsert(function (e) {
              (c(e), u(e));
            });
      },
      requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN: function (t) {
        var e = o("ResourceHasher").createExternalJSHash();
        (le(e, { type: "js", src: t, nc: 1 }, !1), Ce.loadResources([e]));
      },
      done: function (t) {
        (L.set(t, (u || (u = r("performanceAbsoluteNow")))()),
          w.notify(w.rsrcDone(t)));
      },
      beDone: function (t, n, r) {
        for (var e of (o = (a = x.get(t)) == null ? void 0 : a.logData) != null
          ? o
          : []) {
          var o, a;
          e.beRequests.set(n, r);
        }
        w.notify(w.beDone(t));
      },
      handlePayload: function (t, n) {
        var e, a, i;
        for (var l of (s = t.rsrcTags) != null ? s : []) {
          var s;
          fe(document.getElementById(l));
        }
        var u =
          (e = (a = t.consistency) == null ? void 0 : a.rev) != null ? e : null;
        (Ce.setResourceMap(
          (i = t.rsrcMap) != null ? i : {},
          t.sotUpgrades,
          u,
          n,
        ),
          t.indexUpgrades &&
            r("objectKeys")(t.indexUpgrades).forEach(function (e) {
              var n = o("HasteResourceIndexUtil").parseResourceIndexes(
                r("nullthrows")(t.indexUpgrades)[e],
              );
              n.length &&
                n.forEach(function (t) {
                  return o("HasteBitMap").add(e, t);
                });
            }),
          t.compMap && Ce.enableBootload(t.compMap, n));
      },
      enableBootload: function (t, n) {
        for (var e in t)
          (n && n.comp++,
            k.has(e)
              ? n && n.dup_comp++
              : (k.set(e, t[e]), _.has(e) && (_.delete(e), j(e))));
        (ge(), g || ye());
      },
      undeferBootloads: function (t) {
        (t === void 0 && (t = !1),
          window.location.search.indexOf("&__deferBootloads=") === -1 &&
            (t &&
              g &&
              o("BootloaderEvents").notifyDeferTimeout({
                componentMapSize: k.size,
                pending: C.map(function (e) {
                  var t = e[0],
                    n = e[1],
                    r = e[2],
                    o = e[3];
                  return { components: t, ref: r };
                }),
                time: (d || (d = r("performanceNow")))(),
              }),
            (g = !1),
            k.size && ye()));
      },
      markComponentsAsImmediate: function (t) {
        for (var e of t) k.has(e) ? j(e) : _.add(e);
      },
      markSupportDataReadyForImmediateBootloads: function () {
        ((y = !0), he());
      },
      setResourceMap: function (t, n, a, i) {
        var e = !1;
        for (var l in t) {
          (i && i.rsrc++,
            (l = o("ResourceHasher").getValidResourceHash(l)),
            a != null && D.set(l, a));
          var s = t[l],
            u = I.get(l);
          u
            ? (i && i.dup_rsrc++,
              ((u.type === "js" && s.type === "js") ||
                (u.type === "css" && s.type === "css")) &&
                s.d &&
                !u.d &&
                (s.type === "js" && (e = !0),
                s.nonce != null && u.type === "js" && (u.nonce = s.nonce),
                (u.src = s.src),
                (u.d = 1)))
            : (s.type === "js" && (e = !0), le(l, s, !1));
        }
        if (
          (e && a != null && r("ClientConsistency").addAdditionalRevision(a), n)
        )
          for (var c of n) {
            var d = I.get(c);
            d && le(c, d, !0);
          }
      },
      getURLToHashMap: function () {
        var e = new Map();
        for (var t of I) {
          var n = t[0],
            r = t[1];
          r.type === "async" || r.type === "csr" || e.set(r.src, n);
        }
        return e;
      },
      loadPredictedResourceMap: function (t, n, r) {
        (Ce.setResourceMap(t, null, r), Ce.loadResources(Object.keys(t), n));
      },
      getCSSResources: function (t) {
        var e = [];
        for (var n of pe(t)) {
          var r = n[0],
            o = n[1];
          o.type === "css" && e.push(r);
        }
        return e;
      },
      getBootloadPendingComponents: function () {
        var e = new Map();
        for (var t of x) {
          var n = t[0];
          ce(n) || e.set(n, Ce.getComponentDebugState(n));
        }
        return e;
      },
      getComponentDebugState: function (t) {
        var e,
          n,
          a = function (t) {
            return !!w.getEventTime(t);
          };
        return {
          phases: {
            tierOne: a(w.tierOne(t)),
            tierOneLog: a(w.tierOneLog(t)),
            tierTwo: a(w.tierTwo(t)),
            tierTwoLog: a(w.tierTwoLog(t)),
            tierThree: a(w.tierThree(t)),
            tierThreeLog: a(w.tierThreeLog(t)),
            beDone: a(w.beDone(t)),
            asyncHash: a(w.rsrcDone(o("ResourceHasher").getAsyncHash(t))),
          },
          unresolvedDeps: r("__debug").debugUnresolvedDependencies([t]),
          nonJSDeps:
            (e = r("__debug").modulesMap[t]) == null ? void 0 : e.nonJSDeps,
          hasError:
            (n = r("__debug").modulesMap[t]) == null ? void 0 : n.hasError,
        };
      },
      getBootloadedComponents: function () {
        var e = new Map();
        for (var t of x) {
          var n = t[0],
            r = t[1];
          e.set(n, r.firstBootloadStart);
        }
        return e;
      },
      notifyManuallyLoadedResourcesInWorker: function (t, n) {
        var e = function () {
          var e = o("ResourceHasher").getValidResourceHash(a),
            i = t[e];
          if (i.type === "js" || i.type === "css") {
            (le(e, i, !0),
              i.type === "js" &&
                i.tsrc != null &&
                i.tsrc.trim() !== "" &&
                r("promiseDone")(
                  o("MakeHasteTranslations").genFetchAndProcessTranslations(
                    e,
                    r("nullthrows")(i.tsrc),
                  ),
                ),
              R.set(e, (u || (u = r("performanceAbsoluteNow")))()));
            var l = function () {
                return Ce.done(e);
              },
              s = n[e];
            i.type === "js" && s
              ? r("promiseDone")(s, l, function () {
                  Z(e, i, l);
                })
              : l();
          }
        };
        for (var a in t) e();
      },
      getResourceState: function (t) {
        return { loadStart: R.get(t), loadEnd: L.get(t), loadError: E.get(t) };
      },
      getComponentTiming: function (t) {
        var e, n, r, o;
        return {
          tierTwoStart: (e = w.getEventTime(w.tierTwoStart(t))) != null ? e : 0,
          tierTwoEnd: (n = w.getEventTime(w.tierTwo(t))) != null ? n : 0,
          tierThreeStart:
            (r = w.getEventTime(w.tierThreeStart(t))) != null ? r : 0,
          tierThreeEnd: (o = w.getEventTime(w.tierThree(t))) != null ? o : 0,
        };
      },
      getLoadedResourceCount: function () {
        return L.size;
      },
      getErrorCount: function () {
        return E.size;
      },
      forceFlush: function () {
        o("BootloaderEndpoint").BootloaderEndpoint.forceFlush();
      },
      __debug: {
        componentMap: k,
        DOMAppendedJSHashes: S,
        requestedRsrcIndex: v,
        requested: R,
        resources: I,
        riMap: T,
        retries: F.getAllRetryAttempts_FOR_DEBUG_ONLY(),
        errors: E,
        loaded: L,
        bootloaded: x,
        notAvailableResources: A,
        queuedToMarkAsImmediate: _,
        events: w,
        offlineFailedResources: O,
        _resolveCSRs: pe,
        revMap: D,
        _getQueuedLoadModules: function () {
          return C;
        },
        _dequeueLoadModules: function (t) {
          var e = C.splice(t, 1);
          if (e.length) {
            var n = e[0],
              r = n[0],
              o = n[1],
              a = n[2],
              i = n[3],
              l = g,
              s = M;
            ((g = !1),
              (M = !0),
              i(function () {
                Ce.loadModules.apply(Ce, [r, o, a]);
              }),
              (g = l),
              (M = s));
          }
        },
      },
    };
    (r("JSResourceReferenceImpl").setBootloader(Ce),
      g &&
        !t.__comet_ssr_is_server_env_DO_NOT_USE &&
        !o("ServerJsRuntimeEnvironment").isRunningServerJsRuntime() &&
        ((d || (d = r("performanceNow")))() > 15e3
          ? Ce.undeferBootloads(!0)
          : r("setTimeoutAcrossTransitions")(
              function () {
                Ce.undeferBootloads(!0);
              },
              15e3 - (d || (d = r("performanceNow")))(),
            )));
    var be = Ce;
    l.default = be;
  },
  98,
);
