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
    "fetch",
    "getErrorSafe",
    "gkx",
    "ifRequireable",
    "ifRequired",
    "nullthrows",
    "objectKeys",
    "objectValues",
    "performanceAbsoluteNow",
    "performanceNow",
    "promiseDone",
    "qex",
    "requireDeferred",
    "setTimeoutAcrossTransitions",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m,
      p = r("requireDeferred")("ODS").__setRef("Bootloader"),
      _ = function () {},
      f = 1e4,
      g = 15e3,
      h = new Set(),
      y = new Set(),
      C = !!(m = r("BootloaderConfig")).deferBootloads,
      b = [],
      v = !1,
      S = [],
      R = new Map(),
      L = new Set(),
      E = new Set(),
      k = new Map(),
      I = new Map(),
      T = new Map(),
      D = new Map(),
      x = new Map(),
      $ = new Map(),
      P = new Map(),
      N = new Map(),
      M = new Set(),
      w = !1,
      A = new Set(),
      F = !1,
      O = new (r("BootloaderEventsManager"))(),
      B = new Set(),
      W = new Map(),
      q = 20,
      U = 3e3,
      V = new Map(),
      H = 0,
      G = new Set(),
      z = new Set(),
      j = new Set(),
      K = new Set(),
      Q = new (r("BootloaderRetryTracker"))({
        retries: m.jsRetries,
        abortNum: m.jsRetryAbortNum,
        abortTime: m.jsRetryAbortTime,
        abortCallback: function () {
          (r("FBLogger")("bootloader", "js_retry_abort").info("JS retry abort"),
            X("retries_aborted"));
        },
      });
    function X(e) {
      try {
        p.onReady(function (t) {
          t.bumpEntityKey(454, "bootloader_js_retry", e);
        });
      } catch (e) {}
    }
    var Y = new Set(),
      J = !1,
      Z = null;
    function ee() {
      if (Z == null)
        try {
          if (r("gkx")("1174"))
            if (
              typeof r("NetworkStatus").isOnline == "function" &&
              typeof r("NetworkStatus").onChange == "function"
            )
              ((J = !r("NetworkStatus").isOnline()),
                (Z = r("NetworkStatus").onChange(function (e) {
                  var t = e.online,
                    n = J;
                  ((J = !t),
                    r("FBLogger")("bootloader").info(
                      "Network status change: was offline %s, now offline %s",
                      n,
                      J,
                    ),
                    n && t && te());
                })));
            else {
              var e = new Error("Network status API is not available");
              throw (e.stack, e);
            }
        } catch (e) {
          r("FBLogger")("bootloader").warn("NetworkStatus is failing");
        }
    }
    ee();
    function te() {
      if (Y.size !== 0) {
        var e = Array.from(Y);
        (Y.clear(),
          r("FBLogger")("bootloader").info(
            "Network back online, retrying %s failed resources",
            e.length,
          ),
          Be.loadResources(e));
      }
    }
    function ne(e) {
      J &&
        (Y.add(e),
        r("FBLogger")("bootloader").info(
          "Resource %s failed while offline, will retry when network returns",
          e,
        ));
    }
    (e || (e = r("ErrorPubSub"))).unshiftListener(function (e) {
      var t = [];
      for (var n of k) {
        var r = n[0],
          o = n[1];
        if (!I.has(r)) {
          var a = le(r);
          a.type === "csr" || a.type === "async" || t.push(a.src);
        }
      }
      e.loadingUrls = t;
    });
    function re(e) {
      for (var t of e) if (y.has(t)) return !0;
      return !1;
    }
    function oe(e) {
      if (C || !F || (re(e) && !v)) return !1;
      for (var t of e) {
        var n = D.get(t);
        if (!n) return !1;
        for (var r of [
          n.r,
          ((o = n.rdfds) == null ? void 0 : o.r) || [],
          ((a = n.rds) == null ? void 0 : a.r) || [],
        ]) {
          var o, a;
          for (var i of r) if (!x.has(i)) return !1;
        }
      }
      return !0;
    }
    function ae(e) {
      var t = D.get(e);
      if (!t)
        throw r("fb-error").TAAL.blameToPreviousFile(
          r("err")("Bootloader: %s is not in the component map", e),
        );
      return t;
    }
    function ie(e) {
      var t = ae(e);
      (t.be && (delete t.be, Be.done(o("ResourceHasher").getAsyncHash(e))),
        y.add(e));
    }
    function le(e) {
      var t = x.get(e);
      if (!t)
        throw r("fb-error").TAAL.blameToPreviousFile(
          r("err")("No resource entry for hash: %s", e),
        );
      return t;
    }
    function se(e, t) {
      var n = o("ResourceHasher").getAsyncHash(e);
      if (!x.has(n)) x.set(n, { type: "async", module: e, blocking: !!t });
      else {
        var r = le(n);
        (r.type === "async" || s(0, 21557),
          r.blocking && !t && (r.blocking = !1));
      }
      return n;
    }
    function ue(e) {
      return !$e(e);
    }
    function ce(e) {
      if (!ue(e)) return !1;
      var t = ae(e),
        n = t.be;
      return !!n;
    }
    function de(e) {
      if (!ce(e)) return null;
      var t = o("ResourceHasher").getAsyncHash(e);
      return O.rsrcDone(t);
    }
    function me(e, t, n) {
      var a = (u || (u = r("performanceAbsoluteNow")))(),
        i = t.src,
        l = o("ResourceTimingsStore").getUID("js", i);
      (o("ResourceTimingsStore")
        .annotate("js", l)
        .addStringAnnotation("name", e)
        .addStringAnnotation("source", i),
        o("ResourceTimingsStore").measureRequestSent("js", l),
        r("nullthrows")(self.bl_worker_import_wrapper)(i)
          .then(function () {
            var t = Q.getNumRetriesForSource(i);
            (t > 0 &&
              r("FBLogger")("bootloader").info(
                "JS retry success [%s] at %s | time: %s | retries: %s",
                e,
                i,
                (u || (u = r("performanceAbsoluteNow")))() - a,
                t,
              ),
              o("ResourceTimingsStore").measureResponseReceived("js", l),
              n());
          })
          .catch(function (s) {
            o("ResourceTimingsStore").measureResponseReceived("js", l);
            var c = (u || (u = r("performanceAbsoluteNow")))();
            Q.maybeScheduleRetry(
              i,
              function () {
                me(e, t, n);
              },
              function () {
                (T.set(e, c),
                  r("FBLogger")("bootloader")
                    .catching(r("getErrorSafe")(s))
                    .warn(
                      "JS loading error [%s] at %s | time: %s | retries: %s | concurrency: %s",
                      e,
                      i,
                      c - a,
                      Q.getNumRetriesForSource(i),
                      k.size - I.size,
                    ),
                  r("NetworkStatus").reportError(),
                  n());
              },
            );
          }));
    }
    function pe(e, t, n, o) {
      if ((c || (c = r("ExecutionEnvironment"))).isInWorker) {
        me(e, t, n);
        return;
      }
      var a = r("nullthrows")(o),
        i = document.createElement("script");
      ((i.src = t.src),
        t.d &&
          t.src.startsWith("data:") &&
          (i.nonce = r("BootloaderConfig").nonce),
        (i.async = !0),
        r("BootloaderConfig").enableRetryOnStuckResource &&
          i.setAttribute("fetchPriority", "high"),
        t.nc || (i.crossOrigin = "anonymous"),
        t.m != null && (i.dataset.btmanifest = t.m),
        t.tsrc != null && (i.dataset.tsrc = t.tsrc),
        (i.dataset.bootloaderHashClient = e),
        ve(i, e, t, n),
        E.add(e),
        a.appendChild(i));
    }
    function _e() {
      if (!r("NetworkStatus").isOnline()) return !0;
      var e = (r("gkx")("7742") || r("gkx")("20935")) && r("gkx")("20936");
      return !e && window.navigator.onLine === !1;
    }
    function fe(e) {
      return e.isConnected === !1
        ? o("BootloaderDocumentInserter").getDOMContainerNode()
        : e;
    }
    function ge(e, t) {
      if (j.has(t)) return null;
      var n = V.get(t);
      if (n != null) return n;
      try {
        if (
          typeof r("fetch") != "function" ||
          t.startsWith("data:") ||
          _e() ||
          H >= q ||
          r("qex")._("5847") !== !0
        )
          return null;
        H++;
        var o = (
          e.nc
            ? r("fetch")(t, {
                cache: "reload",
                credentials: "include",
                mode: "no-cors",
              })
            : r("fetch")(t, {
                cache: "reload",
                credentials: "same-origin",
                mode: "cors",
              })
        )
          .then(function (e) {
            return e.type === "opaque"
              ? !0
              : e.ok === !0 &&
                  e.arrayBuffer().then(function () {
                    return !0;
                  });
          })
          .catch(function () {
            return !1;
          })
          .then(function (e) {
            return (
              X(e ? "refresh.ok" : "refresh.failed"),
              e ||
                (V.get(t) === o && V.delete(t), K.has(t) ? j.add(t) : K.add(t)),
              e
            );
          });
        return (V.set(t, o), o);
      } catch (e) {
        return null;
      }
    }
    function he(e, t, n) {
      var o = !1,
        a = function (t) {
          o || ((o = !0), n(t));
        },
        i = r("setTimeoutAcrossTransitions")(function () {
          (j.add(e), a(!1));
        }, U),
        l = function (t) {
          (r("clearTimeout")(i), a(t));
        };
      r("promiseDone")(
        t.then(l, function () {
          l(!1);
        }),
      );
    }
    function ye(e, t) {
      return k.get(e) !== t && !z.has(e);
    }
    function Ce(e, t, n) {
      (X(n), W.delete(e));
      var o = function () {
        V.get(e) === t && V.delete(e);
      };
      r("promiseDone")(t.then(o, o));
    }
    function be(e, t, n, r, o, a, i) {
      if (a == null) {
        (W.set(o, "plain"), X("retry.plain"), pe(e, t, n, r));
        return;
      }
      he(o, a, function (l) {
        if (ye(e, i)) {
          Ce(o, a, "retry.superseded");
          return;
        }
        var s = l ? "cache_bypass" : "plain";
        (W.set(o, s), X("retry." + s), pe(e, t, n, fe(r)));
      });
    }
    function ve(e, t, n, a) {
      var i = e.src,
        l = (u || (u = r("performanceAbsoluteNow")))(),
        s = r("TimeSlice").getGuardedContinuation(
          "Bootloader script.onresponse",
        ),
        c = o("ResourceTimingsStore").getUID("js", i);
      (o("ResourceTimingsStore")
        .annotate("js", c)
        .addStringAnnotation("name", t)
        .addStringAnnotation("source", i),
        r("ifRequireable")("TimeSliceInteraction", function (e) {
          e.informGlobally("bootloader._loadJS")
            .addStringAnnotation("source", i)
            .addStringAnnotation("name", t);
        }),
        o("ResourceTimingsStore").measureRequestSent("js", c));
      var d = !1;
      ((e.onload = s.bind(void 0, function () {
        d = !0;
        var e = Q.getNumRetriesForSource(i),
          n = W.get(i);
        ((e > 0 || n === "after_abort") &&
          (r("FBLogger")("bootloader").info(
            "JS retry success [%s] at %s | time: %s | retries: %s",
            t,
            i,
            (u || (u = r("performanceAbsoluteNow")))() - l,
            e,
          ),
          V.delete(i),
          G.delete(i)),
          n != null && (X("retry_success." + n), W.delete(i)),
          o("ResourceTimingsStore").measureResponseReceived("js", c),
          a());
      })),
        (e.onerror = s.bind(void 0, function () {
          ((d = !0), X("script_error"));
          var s = (u || (u = r("performanceAbsoluteNow")))();
          T.set(t, s);
          var m = k.get(t);
          o("ResourceTimingsStore").measureResponseReceived("js", c);
          var p =
              Q.getNumRetriesForSource(i) <
                r("BootloaderConfig").jsRetries.length && !G.has(i)
                ? ge(n, i)
                : null,
            _ = function () {
              var e;
              (X("give_up." + ((e = W.get(i)) != null ? e : "no_retry")),
                W.delete(i),
                V.delete(i),
                r("NetworkStatus").reportError(),
                a());
            };
          Q.maybeScheduleRetry(
            i,
            function () {
              var r = e.parentNode;
              r && (T.delete(t), r.removeChild(e), be(t, n, a, r, i, p, m));
            },
            function () {
              if (p != null && ye(t, m)) {
                Ce(i, p, "retry.superseded_on_abort");
                return;
              }
              if (p == null || k.get(t) !== m) {
                (r("FBLogger")("bootloader").warn(
                  "JS loading error [%s] at %s | time: %s | retries: %s | concurrency: %s",
                  t,
                  i,
                  s - l,
                  Q.getNumRetriesForSource(i),
                  k.size - I.size,
                ),
                  _());
                return;
              }
              (X("refresh.on_abort"),
                T.delete(t),
                he(i, p, function (o) {
                  if (ye(t, m)) {
                    Ce(i, p, "retry.superseded_on_abort");
                    return;
                  }
                  var u = e.parentNode;
                  if (!o || u == null || G.has(i) || k.get(t) !== m) {
                    (T.set(t, s),
                      r("FBLogger")("bootloader").warn(
                        "JS loading error [%s] at %s | time: %s | retries: %s | concurrency: %s",
                        t,
                        i,
                        s - l,
                        Q.getNumRetriesForSource(i),
                        k.size - I.size,
                      ),
                      _());
                    return;
                  }
                  (G.add(i),
                    W.set(i, "after_abort"),
                    X("retry.after_abort"),
                    u.removeChild(e),
                    pe(t, n, a, fe(u)));
                }));
            },
          );
        })),
        r("BootloaderConfig").enableRetryOnStuckResource &&
          r("setTimeoutAcrossTransitions")(
            s.bind(void 0, function () {
              d ||
                Q.maybeRetryImmediately(
                  i,
                  function () {
                    var r = e.parentNode;
                    r && (r.removeChild(e), pe(t, n, a, r));
                  },
                  function () {
                    r("FBLogger")("bootloader").warn(
                      "JS loading timeout [%s] at %s | retries: %s | concurrency: %s",
                      t,
                      i,
                      Q.getNumRetriesForSource(i),
                      k.size - I.size,
                    );
                  },
                );
            }),
            f,
          ));
    }
    function Se(e, t, n) {
      return function () {
        (r("FBLogger")("bootloader").warn(
          "CSS timeout [%s] at %s | concurrency: %s",
          e,
          t.src,
          k.size - I.size,
        ),
          T.set(e, (u || (u = r("performanceAbsoluteNow")))()),
          r("NetworkStatus").reportError(),
          n());
      };
    }
    function Re(e, t, n, r) {
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
    function Le(e, t) {
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
    function Ee(e, t, n, a) {
      if (r("gkx")("15745")) {
        if (k.has(e) && !T.has(e)) return;
      } else if (k.has(e)) return;
      (T.has(e) && T.delete(e),
        k.set(e, (u || (u = r("performanceAbsoluteNow")))()),
        z.delete(e));
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
            $.get(t) !== e
              ? d.add(n)
              : t > m && (m = t);
          }),
          m > r("BootloaderConfig").btCutoffIndex)
        ) {
          var p = Re(l, t.src, d, r("BootloaderConfig").btCutoffIndex);
          i.push(p);
        }
        if (d.size === l.length) return;
        d.size > 0 &&
          ((t.src = Le(t.src, d)),
          t.type === "js" &&
            t.tsrc != null &&
            t.tsrc.trim() !== "" &&
            (t.tsrc = Le(r("nullthrows")(t.tsrc), d)));
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
          pe(
            e,
            t,
            function () {
              Be.done(e);
              for (var t of i)
                o("BootloaderEvents").notifyResourceInLongTailBTManifest(t, a);
            },
            n,
          );
          break;
        case "css":
          var _ = function () {
            return Be.done(e);
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
            Se(e, t, _),
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
    function ke(e, t, a, i, l) {
      var u = new Map(),
        c = l != null ? l : o("BootloaderEvents").newResourceMapSet(),
        d = [],
        m = [],
        p = [];
      for (var _ of Ne(e)) {
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
        var y = O.rsrcDone(f);
        (p.push(y),
          h !== "nonblocking" && (m.push(y), h === "blocking" && d.push(y)),
          r("gkx")("15745")
            ? (!k.has(f) || T.has(f)) && u.set(f, g)
            : k.has(f) || u.set(f, g));
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
        O.registerCallback(function () {
          C(S);
        }, d),
        v &&
          O.registerCallback(function () {
            C(v);
          }, m),
        R &&
          O.registerCallback(function () {
            b(function () {
              return R(c);
            });
          }, p));
      for (var L of u) {
        var E = L[0],
          I = L[1];
        Ee(E, I, a, i);
      }
    }
    function Ie(e, t, n) {
      if ((x.set(e, t), !(t.type === "async" || t.type === "csr"))) {
        var a = t.p;
        if (a != null)
          for (var i of o("HasteResourceIndexUtil").parseResourceIndexes(a))
            i !== o("HasteResourceIndexUtil").UNKNOWN_RESOURCE_INDEX &&
              ((!$.has(i) || n) && $.set(i, e),
              t.c &&
                r("BootloaderConfig").csrOn &&
                o("HasteBitMap").add("__csr", i));
        Te(e);
      }
    }
    function Te(e) {
      B.has(e) && (B.delete(e), Be.loadResources([e]));
    }
    function De(e, t) {
      var n,
        a = O.bootload(t);
      if (M.has(a)) return [a, null];
      M.add(a);
      var i = (u || (u = r("performanceAbsoluteNow")))(),
        l = {
          ref: e,
          components: t,
          timesliceContext: r("TimeSlice").getContext(),
          startTime: (n = R.get(a)) != null ? n : i,
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
    function xe(e) {
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
    function $e(e) {
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
    function Pe(e, t, n, i) {
      (N.has(e) ||
        N.set(e, {
          firstBootloadStart: (u || (u = r("performanceAbsoluteNow")))(),
          logData: new Set(),
        }),
        i && r("nullthrows")(N.get(e)).logData.add(i));
      var l = ae(e),
        s = l.be,
        c = l.r,
        d = l.rdfds,
        m = l.rds,
        p = ue(e) ? se(e, s) : null;
      (p == null && O.notify(O.beDone(e)),
        ke(
          p != null ? [p].concat(c) : c,
          {
            onAll: function () {
              return O.notify(O.tierOne(e));
            },
            onLog: function () {
              return O.notify(O.tierOneLog(e));
            },
          },
          n,
          e,
          i == null ? void 0 : i.tierOne,
        ));
      var _ = (d == null ? void 0 : d.m) || [],
        f = function (o) {
          ke(
            (d == null ? void 0 : d.r) || [],
            {
              onBlocking: function () {
                return r("RequireDeferredReference").unblock(_, "css");
              },
              onAll: function () {
                return O.registerCallback(
                  function () {
                    (O.notify(O.tierTwoStart(e)),
                      a.call(
                        null,
                        _.map(
                          r("RequireDeferredReference")
                            .getRDModuleName_DO_NOT_USE,
                        ),
                        function () {
                          return O.notify(O.tierTwo(e));
                        },
                      ));
                  },
                  [O.tierOne(e), t],
                );
              },
              onLog: function () {
                return O.notify(O.tierTwoLog(e));
              },
            },
            o,
            e,
            i == null ? void 0 : i.tierTwo,
          );
        };
      r("BootloaderConfig").tieredLoadingFromTier != null &&
      r("BootloaderConfig").tieredLoadingFromTier <= 2
        ? O.registerCallback(
            function () {
              return o("BootloaderDocumentInserter").batchDOMInsert(f);
            },
            [O.tierOne(e)],
          )
        : f(n);
      var g = (m == null ? void 0 : m.m) || [],
        h = function (n) {
          ke(
            (m == null ? void 0 : m.r) || [],
            {
              onBlocking: function () {
                return r("RequireDeferredReference").unblock(g, "css");
              },
              onAll: function () {
                return O.registerCallback(
                  function () {
                    (O.notify(O.tierThreeStart(e)),
                      a.call(
                        null,
                        g.map(
                          r("RequireDeferredReference")
                            .getRDModuleName_DO_NOT_USE,
                        ),
                        function () {
                          return O.notify(O.tierThree(e));
                        },
                      ));
                  },
                  [O.tierTwo(e)],
                );
              },
              onLog: function () {
                return O.notify(O.tierThreeLog(e));
              },
            },
            n,
            e,
            i == null ? void 0 : i.tierThree,
          );
        };
      r("BootloaderConfig").tieredLoadingFromTier != null &&
      r("BootloaderConfig").tieredLoadingFromTier <= 3
        ? O.registerCallback(
            function () {
              return o("BootloaderDocumentInserter").batchDOMInsert(h);
            },
            [O.tierTwo(e)],
          )
        : h(n);
    }
    function Ne(e) {
      var t = new Map();
      for (var n of e) {
        var a = x.get(n);
        if (!a) {
          (B.add(n),
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
          L.add(l);
          var u = $.get(l);
          if (u == null)
            throw (
              r("FBLogger")("bootloader").mustfix(
                "SoT hash unavailable for resource index %s",
                l,
              ),
              r("err")("SoT hash unavailable for resource index %s", l)
            );
          var c = le(u);
          (c.type !== "csr" || s(0, 20056, u), t.set(u, c));
        }
      }
      return t.entries();
    }
    function Me(e) {
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
    function we(e) {
      var t,
        n = e.getAttribute("data-bootloader-hash");
      if (n != null) {
        var a = o("ResourceHasher").getValidResourceHash(n);
        if (e.id) {
          if (A.has(e.id)) return;
          A.add(e.id);
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
              Re(c, i.src, new Set(), r("BootloaderConfig").btCutoffIndex),
              "pickupPageResource",
            );
        }
        var m = e.getAttribute("data-btmanifest");
        (m != null && (i.m = m),
          Ie(a, i, !0),
          k.set(a, (u || (u = r("performanceAbsoluteNow")))()),
          z.add(a));
        var p = function () {
            return Be.done(a);
          },
          _ =
            i.type === "js"
              ? !e.getAttribute("async")
              : ((t = e.parentNode) == null ? void 0 : t.tagName) === "HEAD";
        _ || (window._btldr && window._btldr[a])
          ? p()
          : i.type === "js"
            ? ve(e, a, i, p)
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
                Se(a, i, p),
                e,
              ));
      }
    }
    function Ae() {
      w ||
        ((w = !0),
        !(
          !(c || (c = r("ExecutionEnvironment"))).canUseDOM ||
          (c || (c = r("ExecutionEnvironment"))).isInWorker
        ) &&
          (Array.from(document.getElementsByTagName("link")).forEach(
            function (e) {
              return we(e);
            },
          ),
          Array.from(document.getElementsByTagName("script")).forEach(
            function (e) {
              return we(e);
            },
          )));
    }
    function Fe() {
      if (v) {
        var e = b;
        ((b = []),
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
                Be.loadModules.apply(Be, [t, n, o]));
            });
          }));
      }
    }
    function Oe() {
      F = !0;
      var e = S;
      ((S = []),
        e.forEach(function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            o = e[3];
          o(function () {
            Be.loadModules.apply(Be, [t, n, r]);
          });
        }),
        Fe());
    }
    var Be = {
      loadModules: function (t, n, i) {
        (n === void 0 && (n = _),
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
            return $e(e);
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
        if (!oe(e)) {
          var m,
            p = "Deferred: Bootloader.loadModules",
            f = r("TimeSlice").getGuardedContinuation(p);
          re(e) && !v
            ? (r("FBLogger")("bootloader").info(
                "Support data is not ready, queuing immediate bootload:",
                e.join(),
              ),
              b.push([e, c, i, f]))
            : S.push([e, c, i, f]);
          var g = O.bootload(e);
          return (
            R.set(
              g,
              (m = R.get(g)) != null
                ? m
                : (u || (u = r("performanceAbsoluteNow")))(),
            ),
            d
          );
        }
        var h = De(i, e),
          y = h[0],
          C = h[1];
        if (
          (O.registerCallback(
            a.bind(null, e, function () {
              (C &&
                (C.callbackStart = (u || (u = r("performanceAbsoluteNow")))()),
                c.apply(void 0, arguments),
                C &&
                  (C.callbackEnd = (u || (u = r("performanceAbsoluteNow")))()),
                O.notify(y));
            }),
            e.map(function (e) {
              return O.tierOne(e);
            }),
          ),
          o("BootloaderDocumentInserter").batchDOMInsert(function (t) {
            for (var n of e) Pe(n, y, t, C);
          }),
          C)
        ) {
          var L = new Set([y]);
          for (var E of e)
            (L.add(O.beDone(E)),
              L.add(O.tierThree(E)),
              L.add(O.tierOneLog(E)),
              L.add(O.tierTwoLog(E)),
              L.add(O.tierThreeLog(E)));
          O.registerCallback(function () {
            o("BootloaderEvents").notifyBootload(C);
          }, Array.from(L));
          var k = new Set();
          for (var I of new Set(e))
            (k.add(O.beDone(I)),
              k.add(O.tierOneLog(I)),
              k.add(O.tierTwoLog(I)),
              k.add(O.tierThreeLog(I)));
          var T = {
            bootloaderData: C,
            erroredResources: new Set(),
            offline: !1,
          };
          (O.registerCallback(function () {
            if (Be.getErrorCount() > 0) {
              T.erroredResources.clear();
              var e = function (t) {
                for (var e of r("objectValues")(t))
                  for (var n of e) {
                    var o = n[0],
                      a = n[1],
                      i = Be.getResourceState(o);
                    i.loadError != null &&
                      (ne(o),
                      a.type === "js" || a.type === "css"
                        ? T.erroredResources.add(a.src)
                        : a.type === "async" &&
                          T.erroredResources.add(a.module));
                  }
              };
              (e(C.tierOne), e(C.tierTwo), e(C.tierThree));
              for (var t of C.beRequests.values()) e(t.rsrcs);
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
                      .flattenResourceMapSet(C.tierOne)
                      .keys(),
                  ),
                )
                .addSetAnnotation(
                  "rdfd_requested_hashes",
                  Array.from(
                    o("BootloaderEvents")
                      .flattenResourceMapSet(C.tierTwo)
                      .keys(),
                  ),
                )
                .addSetAnnotation(
                  "rd_requested_hashes",
                  Array.from(
                    o("BootloaderEvents")
                      .flattenResourceMapSet(C.tierThree)
                      .keys(),
                  ),
                )
                .addStringAnnotation("bootloader_reference", i)
                .addSetAnnotation("requested_components", e);
            }),
            (l = r("setTimeoutAcrossTransitions")(function () {
              o("BootloaderEvents").notifyBootloaderCallbackTimeout(C);
            }, r("BootloaderConfig").timeout)));
        }
        return d;
      },
      loadResources: function (t, n) {
        (Ae(),
          o("BootloaderDocumentInserter").batchDOMInsert(function (e) {
            return ke(
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
            ke(
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
            ke(
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
            ke(
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
        (Ie(e, { type: "js", src: t, nc: 1 }, !1), Be.loadResources([e]));
      },
      done: function (t) {
        (I.set(t, (u || (u = r("performanceAbsoluteNow")))()),
          O.notify(O.rsrcDone(t)));
      },
      beDone: function (t, n, r) {
        for (var e of (o = (a = N.get(t)) == null ? void 0 : a.logData) != null
          ? o
          : []) {
          var o, a;
          e.beRequests.set(n, r);
        }
        O.notify(O.beDone(t));
      },
      handlePayload: function (t, n) {
        var e, a, i;
        for (var l of (s = t.rsrcTags) != null ? s : []) {
          var s,
            u = document.getElementById(l);
          u instanceof HTMLScriptElement || u instanceof HTMLLinkElement
            ? we(u)
            : r("FBLogger")("bootloader").warn(
                "rsrcTags element missing or not a script/link tag: %s",
                l,
              );
        }
        var c =
          (e = (a = t.consistency) == null ? void 0 : a.rev) != null ? e : null;
        (Be.setResourceMap(
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
          t.compMap && Be.enableBootload(t.compMap, n));
      },
      enableBootload: function (t, n) {
        for (var e in t)
          (n && n.comp++,
            D.has(e)
              ? n && n.dup_comp++
              : (D.set(e, t[e]), h.has(e) && (h.delete(e), ie(e))));
        (Ae(), C || Oe());
      },
      undeferBootloads: function (t) {
        (t === void 0 && (t = !1),
          !/[?&]__deferBootloads=/.test(window.location.search) &&
            (t &&
              C &&
              o("BootloaderEvents").notifyDeferTimeout({
                componentMapSize: D.size,
                pending: S.map(function (e) {
                  var t = e[0],
                    n = e[1],
                    r = e[2],
                    o = e[3];
                  return { components: t, ref: r };
                }),
                time: (d || (d = r("performanceNow")))(),
              }),
            (C = !1),
            D.size && Oe()));
      },
      markComponentsAsImmediate: function (t) {
        for (var e of t) D.has(e) ? ie(e) : h.add(e);
      },
      markSupportDataReadyForImmediateBootloads: function () {
        ((v = !0), Fe());
      },
      setResourceMap: function (t, n, a, i) {
        var e = !1;
        for (var l in t) {
          (i && i.rsrc++,
            (l = o("ResourceHasher").getValidResourceHash(l)),
            a != null && P.set(l, a));
          var s = t[l],
            u = x.get(l);
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
            : (s.type === "js" && (e = !0), Ie(l, s, !1));
        }
        if (
          (e && a != null && r("ClientConsistency").addAdditionalRevision(a), n)
        )
          for (var c of n) {
            var d = x.get(c);
            d && Ie(c, d, !0);
          }
      },
      getURLToHashMap: function () {
        var e = new Map();
        for (var t of x) {
          var n = t[0],
            r = t[1];
          r.type === "async" || r.type === "csr" || e.set(r.src, n);
        }
        return e;
      },
      loadPredictedResourceMap: function (t, n, r) {
        (Be.setResourceMap(t, null, r), Be.loadResources(Object.keys(t), n));
      },
      getCSSResources: function (t) {
        var e = [];
        for (var n of Ne(t)) {
          var r = n[0],
            o = n[1];
          o.type === "css" && e.push(r);
        }
        return e;
      },
      getBootloadPendingComponents: function () {
        var e = new Map();
        for (var t of N) {
          var n = t[0];
          xe(n) || e.set(n, Be.getComponentDebugState(n));
        }
        return e;
      },
      getComponentDebugState: function (t) {
        var e,
          n,
          a = function (t) {
            return !!O.getEventTime(t);
          };
        return {
          phases: {
            tierOne: a(O.tierOne(t)),
            tierOneLog: a(O.tierOneLog(t)),
            tierTwo: a(O.tierTwo(t)),
            tierTwoLog: a(O.tierTwoLog(t)),
            tierThree: a(O.tierThree(t)),
            tierThreeLog: a(O.tierThreeLog(t)),
            beDone: a(O.beDone(t)),
            asyncHash: a(O.rsrcDone(o("ResourceHasher").getAsyncHash(t))),
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
        for (var t of N) {
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
            (Ie(e, i, !0),
              i.type === "js" &&
                i.tsrc != null &&
                i.tsrc.trim() !== "" &&
                r("promiseDone")(
                  o("MakeHasteTranslations").genFetchAndProcessTranslations(
                    e,
                    r("nullthrows")(i.tsrc),
                  ),
                ),
              k.set(e, (u || (u = r("performanceAbsoluteNow")))()));
            var l = function () {
                return Be.done(e);
              },
              s = n[e];
            i.type === "js" && s
              ? r("promiseDone")(s, l, function () {
                  me(e, i, l);
                })
              : l();
          }
        };
        for (var a in t) e();
      },
      getResourceState: function (t) {
        return { loadStart: k.get(t), loadEnd: I.get(t), loadError: T.get(t) };
      },
      getComponentTiming: function (t) {
        var e, n, r, o;
        return {
          tierTwoStart: (e = O.getEventTime(O.tierTwoStart(t))) != null ? e : 0,
          tierTwoEnd: (n = O.getEventTime(O.tierTwo(t))) != null ? n : 0,
          tierThreeStart:
            (r = O.getEventTime(O.tierThreeStart(t))) != null ? r : 0,
          tierThreeEnd: (o = O.getEventTime(O.tierThree(t))) != null ? o : 0,
        };
      },
      getLoadedResourceCount: function () {
        return I.size;
      },
      getErrorCount: function () {
        return T.size;
      },
      forceFlush: function () {
        o("BootloaderEndpoint").BootloaderEndpoint.forceFlush();
      },
      __debug: {
        componentMap: D,
        DOMAppendedJSHashes: E,
        requestedRsrcIndex: L,
        requested: k,
        resources: x,
        riMap: $,
        retries: Q.getAllRetryAttempts_FOR_DEBUG_ONLY(),
        errors: T,
        loaded: I,
        bootloaded: N,
        notAvailableResources: B,
        queuedToMarkAsImmediate: h,
        events: O,
        offlineFailedResources: Y,
        _resolveCSRs: Ne,
        revMap: P,
        _getQueuedLoadModules: function () {
          return S;
        },
        _dequeueLoadModules: function (t) {
          var e = S.splice(t, 1);
          if (e.length) {
            var n = e[0],
              r = n[0],
              o = n[1],
              a = n[2],
              i = n[3],
              l = C,
              s = F;
            ((C = !1),
              (F = !0),
              i(function () {
                Be.loadModules.apply(Be, [r, o, a]);
              }),
              (C = l),
              (F = s));
          }
        },
      },
    };
    (r("JSResourceReferenceImpl").setBootloader(Be),
      C &&
        !t.__comet_ssr_is_server_env_DO_NOT_USE &&
        !o("ServerJsRuntimeEnvironment").isRunningServerJsRuntime() &&
        ((d || (d = r("performanceNow")))() > g
          ? Be.undeferBootloads(!0)
          : r("setTimeoutAcrossTransitions")(
              function () {
                Be.undeferBootloads(!0);
              },
              g - (d || (d = r("performanceNow")))(),
            )));
    var We = Be;
    l.default = We;
  },
  98,
);
