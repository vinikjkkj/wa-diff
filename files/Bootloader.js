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
      _ = 1e4,
      f = 15e3,
      g = new Set(),
      h = new Set(),
      y = !!(m = r("BootloaderConfig")).deferBootloads,
      C = [],
      b = !1,
      v = [],
      S = new Map(),
      R = new Set(),
      L = new Set(),
      E = new Map(),
      k = new Map(),
      I = new Map(),
      T = new Map(),
      D = new Map(),
      x = new Map(),
      $ = new Map(),
      P = new Map(),
      N = new Set(),
      M = !1,
      w = new Set(),
      A = !1,
      F = new (r("BootloaderEventsManager"))(),
      O = new Set(),
      B = new (r("BootloaderRetryTracker"))({
        retries: m.jsRetries,
        abortNum: m.jsRetryAbortNum,
        abortTime: m.jsRetryAbortTime,
        abortCallback: function () {
          r("FBLogger")("bootloader", "js_retry_abort").info("JS retry abort");
        },
      }),
      W = new Set(),
      q = !1,
      U = null;
    function V() {
      if (U == null)
        try {
          if (r("gkx")("1174"))
            if (
              typeof r("NetworkStatus").isOnline == "function" &&
              typeof r("NetworkStatus").onChange == "function"
            )
              ((q = !r("NetworkStatus").isOnline()),
                (U = r("NetworkStatus").onChange(function (e) {
                  var t = e.online,
                    n = q;
                  ((q = !t),
                    r("FBLogger")("bootloader").info(
                      "Network status change: was offline %s, now offline %s",
                      n,
                      q,
                    ),
                    n && t && H());
                })));
            else {
              var e = new Error("Network status API is not available");
              throw (e.stack, e);
            }
        } catch (e) {
          r("FBLogger")("bootloader").warn("NetworkStatus is failing");
        }
    }
    V();
    function H() {
      if (W.size !== 0) {
        var e = Array.from(W);
        (W.clear(),
          r("FBLogger")("bootloader").info(
            "Network back online, retrying %s failed resources",
            e.length,
          ),
          ve.loadResources(e));
      }
    }
    function G(e) {
      q &&
        (W.add(e),
        r("FBLogger")("bootloader").info(
          "Resource %s failed while offline, will retry when network returns",
          e,
        ));
    }
    (e || (e = r("ErrorPubSub"))).unshiftListener(function (e) {
      var t = [];
      for (var n of E) {
        var r = n[0],
          o = n[1];
        if (!k.has(r)) {
          var a = X(r);
          a.type === "csr" || a.type === "async" || t.push(a.src);
        }
      }
      e.loadingUrls = t;
    });
    function z(e) {
      for (var t of e) if (h.has(t)) return !0;
      return !1;
    }
    function j(e) {
      if (y || !A || (z(e) && !b)) return !1;
      for (var t of e) {
        var n = T.get(t);
        if (!n) return !1;
        for (var r of [
          n.r,
          ((o = n.rdfds) == null ? void 0 : o.r) || [],
          ((a = n.rds) == null ? void 0 : a.r) || [],
        ]) {
          var o, a;
          for (var i of r) if (!D.has(i)) return !1;
        }
      }
      return !0;
    }
    function K(e) {
      var t = T.get(e);
      if (!t)
        throw r("fb-error").TAAL.blameToPreviousFile(
          r("err")("Bootloader: %s is not in the component map", e),
        );
      return t;
    }
    function Q(e) {
      var t = K(e);
      (t.be && (delete t.be, ve.done(o("ResourceHasher").getAsyncHash(e))),
        h.add(e));
    }
    function X(e) {
      var t = D.get(e);
      if (!t)
        throw r("fb-error").TAAL.blameToPreviousFile(
          r("err")("No resource entry for hash: %s", e),
        );
      return t;
    }
    function Y(e, t) {
      var n = o("ResourceHasher").getAsyncHash(e);
      if (!D.has(n)) D.set(n, { type: "async", module: e, blocking: !!t });
      else {
        var r = X(n);
        (r.type === "async" || s(0, 21557),
          r.blocking && !t && (r.blocking = !1));
      }
      return n;
    }
    function J(e) {
      return !pe(e);
    }
    function Z(e) {
      if (!J(e)) return !1;
      var t = K(e),
        n = t.be;
      return !!n;
    }
    function ee(e) {
      if (!Z(e)) return null;
      var t = o("ResourceHasher").getAsyncHash(e);
      return F.rsrcDone(t);
    }
    function te(e, t, n) {
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
            var t = B.getNumRetriesForSource(a);
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
            B.maybeScheduleRetry(
              a,
              function () {
                te(e, t, n);
              },
              function () {
                (I.set(e, s),
                  r("FBLogger")("bootloader")
                    .catching(l)
                    .warn(
                      "JS loading error [%s] at %s | time: %s | retries: %s | concurrency: %s",
                      e,
                      a,
                      s - o,
                      B.getNumRetriesForSource(a),
                      E.size - k.size,
                    ),
                  r("NetworkStatus").reportError(),
                  n());
              },
            );
          }));
    }
    function ne(e, t, n, o) {
      if ((c || (c = r("ExecutionEnvironment"))).isInWorker) {
        te(e, t, n);
        return;
      }
      var a = r("nullthrows")(o),
        i = document.createElement("script");
      ((i.src = t.src),
        t.d && (i.nonce = r("BootloaderConfig").nonce),
        (i.async = !0),
        r("BootloaderConfig").enableRetryOnStuckResource &&
          i.setAttribute("fetchPriority", "high"),
        t.nc || (i.crossOrigin = "anonymous"),
        t.m != null && (i.dataset.btmanifest = t.m),
        t.tsrc != null && (i.dataset.tsrc = t.tsrc),
        (i.dataset.bootloaderHashClient = e),
        re(i, e, t, n),
        L.add(e),
        a.appendChild(i));
    }
    function re(e, t, n, o) {
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
        var e = B.getNumRetriesForSource(a);
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
          (I.set(t, l),
            r("ResourceTimingsStore").measureResponseReceived("js", s),
            B.maybeScheduleRetry(
              a,
              function () {
                var r = e.parentNode;
                r && (I.delete(t), r.removeChild(e), ne(t, n, o, r));
              },
              function () {
                (r("FBLogger")("bootloader").warn(
                  "JS loading error [%s] at %s | time: %s | retries: %s | concurrency: %s",
                  t,
                  a,
                  l - i,
                  B.getNumRetriesForSource(a),
                  E.size - k.size,
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
                B.maybeRetryImmediately(
                  a,
                  function () {
                    var r = e.parentNode;
                    r && (r.removeChild(e), ne(t, n, o, r));
                  },
                  function () {
                    r("FBLogger")("bootloader").warn(
                      "JS loading timeout [%s] at %s | retries: %s | concurrency: %s",
                      t,
                      a,
                      B.getNumRetriesForSource(a),
                      E.size - k.size,
                    );
                  },
                );
            }),
            _,
          ));
    }
    function oe(e, t, n) {
      return function () {
        (r("FBLogger")("bootloader").warn(
          "CSS timeout [%s] at %s | concurrency: %s",
          e,
          t.src,
          E.size - k.size,
        ),
          I.set(e, (u || (u = r("performanceAbsoluteNow")))()),
          r("NetworkStatus").reportError(),
          n());
      };
    }
    function ae(e, t, n, r) {
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
    function ie(e, t) {
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
    function le(e, t, n, a) {
      if (r("gkx")("15745")) {
        if (E.has(e) && !I.has(e)) return;
      } else if (E.has(e)) return;
      (I.has(e) && I.delete(e),
        E.set(e, (u || (u = r("performanceAbsoluteNow")))()));
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
            x.get(t) !== e
              ? d.add(n)
              : t > m && (m = t);
          }),
          m > r("BootloaderConfig").btCutoffIndex)
        ) {
          var p = ae(l, t.src, d, r("BootloaderConfig").btCutoffIndex);
          i.push(p);
        }
        if (d.size === l.length) return;
        d.size > 0 &&
          ((t.src = ie(t.src, d)),
          t.type === "js" &&
            t.tsrc != null &&
            t.tsrc.trim() !== "" &&
            (t.tsrc = ie(r("nullthrows")(t.tsrc), d)));
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
          ne(
            e,
            t,
            function () {
              ve.done(e);
              for (var t of i)
                o("BootloaderEvents").notifyResourceInLongTailBTManifest(t, a);
            },
            n,
          );
          break;
        case "css":
          var _ = function () {
            return ve.done(e);
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
            oe(e, t, _),
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
    function se(e, t, a, i, l) {
      var u = new Map(),
        c = l != null ? l : o("BootloaderEvents").newResourceMapSet(),
        d = [],
        m = [],
        p = [];
      for (var _ of fe(e)) {
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
        var y = F.rsrcDone(f);
        (p.push(y),
          h !== "nonblocking" && (m.push(y), h === "blocking" && d.push(y)),
          r("gkx")("15745")
            ? (!E.has(f) || I.has(f)) && u.set(f, g)
            : E.has(f) || u.set(f, g));
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
        R = t.onLog;
      (S &&
        F.registerCallback(function () {
          C(S);
        }, d),
        v &&
          F.registerCallback(function () {
            C(v);
          }, m),
        R &&
          F.registerCallback(function () {
            b(function () {
              return R(c);
            });
          }, p));
      for (var L of u) {
        var k = L[0],
          T = L[1];
        le(k, T, a, i);
      }
    }
    function ue(e, t, n) {
      if ((D.set(e, t), !(t.type === "async" || t.type === "csr"))) {
        var a = t.p;
        if (a != null)
          for (var i of o("HasteResourceIndexUtil").parseResourceIndexes(a))
            i !== o("HasteResourceIndexUtil").UNKNOWN_RESOURCE_INDEX &&
              ((!x.has(i) || n) && x.set(i, e),
              t.c &&
                r("BootloaderConfig").csrOn &&
                o("HasteBitMap").add("__csr", i));
        ce(e);
      }
    }
    function ce(e) {
      O.has(e) && (O.delete(e), ve.loadResources([e]));
    }
    function de(e, t) {
      var n,
        a = F.bootload(t);
      if (N.has(a)) return [a, null];
      N.add(a);
      var i = (u || (u = r("performanceAbsoluteNow")))(),
        l = {
          ref: e,
          components: t,
          timesliceContext: r("TimeSlice").getContext(),
          startTime: (n = S.get(a)) != null ? n : i,
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
    function me(e) {
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
    function pe(e) {
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
    function _e(e, t, n, i) {
      (P.has(e) ||
        P.set(e, {
          firstBootloadStart: (u || (u = r("performanceAbsoluteNow")))(),
          logData: new Set(),
        }),
        i && r("nullthrows")(P.get(e)).logData.add(i));
      var l = K(e),
        s = l.be,
        c = l.r,
        d = l.rdfds,
        m = l.rds,
        p = J(e) ? Y(e, s) : null;
      (p == null && F.notify(F.beDone(e)),
        se(
          p != null ? [p].concat(c) : c,
          {
            onAll: function () {
              return F.notify(F.tierOne(e));
            },
            onLog: function () {
              return F.notify(F.tierOneLog(e));
            },
          },
          n,
          e,
          i == null ? void 0 : i.tierOne,
        ));
      var _ = (d == null ? void 0 : d.m) || [],
        f = function (o) {
          se(
            (d == null ? void 0 : d.r) || [],
            {
              onBlocking: function () {
                return r("RequireDeferredReference").unblock(_, "css");
              },
              onAll: function () {
                return F.registerCallback(
                  function () {
                    (F.notify(F.tierTwoStart(e)),
                      a.call(
                        null,
                        _.map(
                          r("RequireDeferredReference")
                            .getRDModuleName_DO_NOT_USE,
                        ),
                        function () {
                          return F.notify(F.tierTwo(e));
                        },
                      ));
                  },
                  [F.tierOne(e), t],
                );
              },
              onLog: function () {
                return F.notify(F.tierTwoLog(e));
              },
            },
            o,
            e,
            i == null ? void 0 : i.tierTwo,
          );
        };
      r("BootloaderConfig").tieredLoadingFromTier != null &&
      r("BootloaderConfig").tieredLoadingFromTier <= 2
        ? F.registerCallback(
            function () {
              return o("BootloaderDocumentInserter").batchDOMInsert(f);
            },
            [F.tierOne(e)],
          )
        : f(n);
      var g = (m == null ? void 0 : m.m) || [],
        h = function (n) {
          se(
            (m == null ? void 0 : m.r) || [],
            {
              onBlocking: function () {
                return r("RequireDeferredReference").unblock(g, "css");
              },
              onAll: function () {
                return F.registerCallback(
                  function () {
                    (F.notify(F.tierThreeStart(e)),
                      a.call(
                        null,
                        g.map(
                          r("RequireDeferredReference")
                            .getRDModuleName_DO_NOT_USE,
                        ),
                        function () {
                          return F.notify(F.tierThree(e));
                        },
                      ));
                  },
                  [F.tierTwo(e)],
                );
              },
              onLog: function () {
                return F.notify(F.tierThreeLog(e));
              },
            },
            n,
            e,
            i == null ? void 0 : i.tierThree,
          );
        };
      r("BootloaderConfig").tieredLoadingFromTier != null &&
      r("BootloaderConfig").tieredLoadingFromTier <= 3
        ? F.registerCallback(
            function () {
              return o("BootloaderDocumentInserter").batchDOMInsert(h);
            },
            [F.tierTwo(e)],
          )
        : h(n);
    }
    function fe(e) {
      var t = new Map();
      for (var n of e) {
        var a = D.get(n);
        if (!a) {
          (O.add(n),
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
          R.add(l);
          var u = x.get(l);
          if (u == null)
            throw (
              r("FBLogger")("bootloader").mustfix(
                "SoT hash unavailable for resource index %s",
                l,
              ),
              r("err")("SoT hash unavailable for resource index %s", l)
            );
          var c = X(u);
          (c.type !== "csr" || s(0, 20056, u), t.set(u, c));
        }
      }
      return t.entries();
    }
    function ge(e) {
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
    function he(e) {
      var t,
        n = e.getAttribute("data-bootloader-hash");
      if (n != null) {
        var a = o("ResourceHasher").getValidResourceHash(n);
        if (e.id) {
          if (w.has(e.id)) return;
          w.add(e.id);
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
              ae(c, i.src, new Set(), r("BootloaderConfig").btCutoffIndex),
              "pickupPageResource",
            );
        }
        var m = e.getAttribute("data-btmanifest");
        (m != null && (i.m = m),
          ue(a, i, !0),
          E.set(a, (u || (u = r("performanceAbsoluteNow")))()));
        var p = function () {
            return ve.done(a);
          },
          _ =
            i.type === "js"
              ? !e.getAttribute("async")
              : ((t = e.parentNode) == null ? void 0 : t.tagName) === "HEAD";
        _ || (window._btldr && window._btldr[a])
          ? p()
          : i.type === "js"
            ? re(e, a, i, p)
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
                oe(a, i, p),
                e,
              ));
      }
    }
    function ye() {
      M ||
        ((M = !0),
        !(
          !(c || (c = r("ExecutionEnvironment"))).canUseDOM ||
          (c || (c = r("ExecutionEnvironment"))).isInWorker
        ) &&
          (Array.from(document.getElementsByTagName("link")).forEach(
            function (e) {
              return he(e);
            },
          ),
          Array.from(document.getElementsByTagName("script")).forEach(
            function (e) {
              return he(e);
            },
          )));
    }
    function Ce() {
      if (b) {
        var e = C;
        ((C = []),
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
                ve.loadModules.apply(ve, [t, n, o]));
            });
          }));
      }
    }
    function be() {
      A = !0;
      var e = v;
      ((v = []),
        e.forEach(function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            o = e[3];
          o(function () {
            ve.loadModules.apply(ve, [t, n, r]);
          });
        }),
        Ce());
    }
    var ve = {
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
            return pe(e);
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
        if (!j(e)) {
          var m,
            _ = "Deferred: Bootloader.loadModules",
            f = r("TimeSlice").getGuardedContinuation(_);
          z(e) && !b
            ? (r("FBLogger")("bootloader").info(
                "Support data is not ready, queuing immediate bootload:",
                e.join(),
              ),
              C.push([e, c, i, f]))
            : v.push([e, c, i, f]);
          var g = F.bootload(e);
          return (
            S.set(
              g,
              (m = S.get(g)) != null
                ? m
                : (u || (u = r("performanceAbsoluteNow")))(),
            ),
            d
          );
        }
        var h = de(i, e),
          y = h[0],
          R = h[1];
        if (
          (F.registerCallback(
            a.bind(null, e, function () {
              (R &&
                (R.callbackStart = (u || (u = r("performanceAbsoluteNow")))()),
                c.apply(void 0, arguments),
                R &&
                  (R.callbackEnd = (u || (u = r("performanceAbsoluteNow")))()),
                F.notify(y));
            }),
            e.map(function (e) {
              return F.tierOne(e);
            }),
          ),
          o("BootloaderDocumentInserter").batchDOMInsert(function (t) {
            for (var n of e) _e(n, y, t, R);
          }),
          R)
        ) {
          var L = new Set([y]);
          for (var E of e)
            (L.add(F.beDone(E)),
              L.add(F.tierThree(E)),
              L.add(F.tierOneLog(E)),
              L.add(F.tierTwoLog(E)),
              L.add(F.tierThreeLog(E)));
          F.registerCallback(function () {
            o("BootloaderEvents").notifyBootload(R);
          }, Array.from(L));
          var k = new Set();
          for (var I of new Set(e))
            (k.add(F.beDone(I)),
              k.add(F.tierOneLog(I)),
              k.add(F.tierTwoLog(I)),
              k.add(F.tierThreeLog(I)));
          var T = {
            bootloaderData: R,
            erroredResources: new Set(),
            offline: !1,
          };
          (F.registerCallback(function () {
            if (ve.getErrorCount() > 0) {
              T.erroredResources.clear();
              var e = function (t) {
                for (var e of r("objectValues")(t))
                  for (var n of e) {
                    var o = n[0],
                      a = n[1],
                      i = ve.getResourceState(o);
                    i.loadError != null &&
                      (G(o),
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
        (ye(),
          o("BootloaderDocumentInserter").batchDOMInsert(function (e) {
            return se(
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
            se(
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
            se(
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
            se(
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
        (ue(e, { type: "js", src: t, nc: 1 }, !1), ve.loadResources([e]));
      },
      done: function (t) {
        (k.set(t, (u || (u = r("performanceAbsoluteNow")))()),
          F.notify(F.rsrcDone(t)));
      },
      beDone: function (t, n, r) {
        for (var e of (o = (a = P.get(t)) == null ? void 0 : a.logData) != null
          ? o
          : []) {
          var o, a;
          e.beRequests.set(n, r);
        }
        F.notify(F.beDone(t));
      },
      handlePayload: function (t, n) {
        var e, a, i;
        for (var l of (s = t.rsrcTags) != null ? s : []) {
          var s,
            u = document.getElementById(l);
          u instanceof HTMLScriptElement || u instanceof HTMLLinkElement
            ? he(u)
            : r("FBLogger")("bootloader").warn(
                "rsrcTags element missing or not a script/link tag: %s",
                l,
              );
        }
        var c =
          (e = (a = t.consistency) == null ? void 0 : a.rev) != null ? e : null;
        (ve.setResourceMap(
          (i = t.rsrcMap) != null ? i : {},
          t.sotUpgrades,
          c,
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
          t.compMap && ve.enableBootload(t.compMap, n));
      },
      enableBootload: function (t, n) {
        for (var e in t)
          (n && n.comp++,
            T.has(e)
              ? n && n.dup_comp++
              : (T.set(e, t[e]), g.has(e) && (g.delete(e), Q(e))));
        (ye(), y || be());
      },
      undeferBootloads: function (t) {
        (t === void 0 && (t = !1),
          !/[?&]__deferBootloads=/.test(window.location.search) &&
            (t &&
              y &&
              o("BootloaderEvents").notifyDeferTimeout({
                componentMapSize: T.size,
                pending: v.map(function (e) {
                  var t = e[0],
                    n = e[1],
                    r = e[2],
                    o = e[3];
                  return { components: t, ref: r };
                }),
                time: (d || (d = r("performanceNow")))(),
              }),
            (y = !1),
            T.size && be()));
      },
      markComponentsAsImmediate: function (t) {
        for (var e of t) T.has(e) ? Q(e) : g.add(e);
      },
      markSupportDataReadyForImmediateBootloads: function () {
        ((b = !0), Ce());
      },
      setResourceMap: function (t, n, a, i) {
        var e = !1;
        for (var l in t) {
          (i && i.rsrc++,
            (l = o("ResourceHasher").getValidResourceHash(l)),
            a != null && $.set(l, a));
          var s = t[l],
            u = D.get(l);
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
            : (s.type === "js" && (e = !0), ue(l, s, !1));
        }
        if (
          (e && a != null && r("ClientConsistency").addAdditionalRevision(a), n)
        )
          for (var c of n) {
            var d = D.get(c);
            d && ue(c, d, !0);
          }
      },
      getURLToHashMap: function () {
        var e = new Map();
        for (var t of D) {
          var n = t[0],
            r = t[1];
          r.type === "async" || r.type === "csr" || e.set(r.src, n);
        }
        return e;
      },
      loadPredictedResourceMap: function (t, n, r) {
        (ve.setResourceMap(t, null, r), ve.loadResources(Object.keys(t), n));
      },
      getCSSResources: function (t) {
        var e = [];
        for (var n of fe(t)) {
          var r = n[0],
            o = n[1];
          o.type === "css" && e.push(r);
        }
        return e;
      },
      getBootloadPendingComponents: function () {
        var e = new Map();
        for (var t of P) {
          var n = t[0];
          me(n) || e.set(n, ve.getComponentDebugState(n));
        }
        return e;
      },
      getComponentDebugState: function (t) {
        var e,
          n,
          a = function (t) {
            return !!F.getEventTime(t);
          };
        return {
          phases: {
            tierOne: a(F.tierOne(t)),
            tierOneLog: a(F.tierOneLog(t)),
            tierTwo: a(F.tierTwo(t)),
            tierTwoLog: a(F.tierTwoLog(t)),
            tierThree: a(F.tierThree(t)),
            tierThreeLog: a(F.tierThreeLog(t)),
            beDone: a(F.beDone(t)),
            asyncHash: a(F.rsrcDone(o("ResourceHasher").getAsyncHash(t))),
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
        for (var t of P) {
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
            (ue(e, i, !0),
              i.type === "js" &&
                i.tsrc != null &&
                i.tsrc.trim() !== "" &&
                r("promiseDone")(
                  o("MakeHasteTranslations").genFetchAndProcessTranslations(
                    e,
                    r("nullthrows")(i.tsrc),
                  ),
                ),
              E.set(e, (u || (u = r("performanceAbsoluteNow")))()));
            var l = function () {
                return ve.done(e);
              },
              s = n[e];
            i.type === "js" && s
              ? r("promiseDone")(s, l, function () {
                  te(e, i, l);
                })
              : l();
          }
        };
        for (var a in t) e();
      },
      getResourceState: function (t) {
        return { loadStart: E.get(t), loadEnd: k.get(t), loadError: I.get(t) };
      },
      getComponentTiming: function (t) {
        var e, n, r, o;
        return {
          tierTwoStart: (e = F.getEventTime(F.tierTwoStart(t))) != null ? e : 0,
          tierTwoEnd: (n = F.getEventTime(F.tierTwo(t))) != null ? n : 0,
          tierThreeStart:
            (r = F.getEventTime(F.tierThreeStart(t))) != null ? r : 0,
          tierThreeEnd: (o = F.getEventTime(F.tierThree(t))) != null ? o : 0,
        };
      },
      getLoadedResourceCount: function () {
        return k.size;
      },
      getErrorCount: function () {
        return I.size;
      },
      forceFlush: function () {
        o("BootloaderEndpoint").BootloaderEndpoint.forceFlush();
      },
      __debug: {
        componentMap: T,
        DOMAppendedJSHashes: L,
        requestedRsrcIndex: R,
        requested: E,
        resources: D,
        riMap: x,
        retries: B.getAllRetryAttempts_FOR_DEBUG_ONLY(),
        errors: I,
        loaded: k,
        bootloaded: P,
        notAvailableResources: O,
        queuedToMarkAsImmediate: g,
        events: F,
        offlineFailedResources: W,
        _resolveCSRs: fe,
        revMap: $,
        _getQueuedLoadModules: function () {
          return v;
        },
        _dequeueLoadModules: function (t) {
          var e = v.splice(t, 1);
          if (e.length) {
            var n = e[0],
              r = n[0],
              o = n[1],
              a = n[2],
              i = n[3],
              l = y,
              s = A;
            ((y = !1),
              (A = !0),
              i(function () {
                ve.loadModules.apply(ve, [r, o, a]);
              }),
              (y = l),
              (A = s));
          }
        },
      },
    };
    (r("JSResourceReferenceImpl").setBootloader(ve),
      y &&
        !t.__comet_ssr_is_server_env_DO_NOT_USE &&
        !o("ServerJsRuntimeEnvironment").isRunningServerJsRuntime() &&
        ((d || (d = r("performanceNow")))() > f
          ? ve.undeferBootloads(!0)
          : r("setTimeoutAcrossTransitions")(
              function () {
                ve.undeferBootloads(!0);
              },
              f - (d || (d = r("performanceNow")))(),
            )));
    var Se = ve;
    l.default = Se;
  },
  98,
);
