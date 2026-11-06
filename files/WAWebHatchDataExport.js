__d(
  "WAWebHatchDataExport",
  [
    "Promise",
    "WALogger",
    "WAWebHatchDataControls",
    "WAWebHatchVmConnection",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = 268435456,
      g = 3900 * 1e3,
      h = "application/zip",
      y = [
        [80, 75, 3, 4],
        [80, 75, 5, 6],
        [80, 75, 7, 8],
      ],
      C = [80, 75, 5, 6],
      b = 22,
      v = 20,
      S = b + 65535,
      R = { kind: "aborted" },
      L = { kind: "account_changed" },
      E = { kind: "failed", reason: "generic" },
      k = { kind: "failed", reason: "offline" };
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t === void 0 ? {} : t,
            r = n.maxBytes,
            a = r === void 0 ? f : r,
            i = n.timeoutMs,
            l = i === void 0 ? g : i,
            s = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
            u = yield o("WAWebHatchDataControls").isHatchOffline();
          if (o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== s)
            return L;
          if (u) return k;
          var c = yield o("WAWebHatchVmConnection").connectHatchVmApiWithResult(
            e,
          );
          return o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== s
            ? L
            : e.aborted
              ? R
              : c.kind !== "ready"
                ? D(s)
                : $(c.api, {
                    generation: s,
                    maxBytes: a,
                    signal: e,
                    timeoutMs: l,
                  }).then(function (e) {
                    return e.kind === "failed" ? D(s) : e;
                  });
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebHatchDataControls").isHatchOffline();
          return o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== e
            ? L
            : t
              ? k
              : E;
        })),
        x.apply(this, arguments)
      );
    }
    function $(t, a) {
      var i = a.generation,
        l = a.maxBytes,
        f = a.signal,
        g = a.timeoutMs;
      return new (_ || (_ = n("Promise")))(function (n) {
        var a = [],
          _ = 0,
          y = !1,
          C = !1,
          b = null,
          v = null,
          S = null,
          k = function (t) {
            var e;
            ((C = !0),
              v != null && self.clearTimeout(v),
              S != null && f.removeEventListener("abort", S),
              (e = b) == null || e.close(),
              (a.length = 0),
              n(t));
          },
          I = function () {
            return C
              ? !1
              : o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== i
                ? (k(L), !1)
                : !0;
          },
          T = {
            onClose: function (n) {
              I() &&
                (n != null || !y
                  ? (o("WALogger")
                      .WARN(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "hatch-data-export: closed early",
                          ])),
                      )
                      .sendLogs("hatch-data-export-transport"),
                    k(E))
                  : P(a)
                    ? k({ blob: new Blob(a, { type: h }), kind: "ready" })
                    : (o("WALogger")
                        .WARN(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "hatch-data-export: not a zip",
                            ])),
                        )
                        .sendLogs("hatch-data-export-invalid-zip"),
                      k(E)));
            },
            onData: function (t) {
              if (I()) {
                if (((_ += t.length), _ > l)) {
                  (o("WALogger")
                    .WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "hatch-data-export: over the size cap",
                        ])),
                    )
                    .sendLogs("hatch-data-export-too-large"),
                    k(E));
                  return;
                }
                a.push(t);
              }
            },
            onResponse: function (t) {
              if (I()) {
                if (t < 200 || t >= 300) {
                  (o("WALogger")
                    .WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "hatch-data-export: refused with ",
                          "",
                        ])),
                      t,
                    )
                    .sendLogs("hatch-data-export-status"),
                    k(E));
                  return;
                }
                y = !0;
              }
            },
          };
        try {
          b = t.openDataExport(T);
        } catch (e) {
          (o("WALogger")
            .WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-data-export: stream threw",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("hatch-data-export-stream-threw"),
            k(E));
          return;
        }
        if (C) {
          var D;
          (D = b) == null || D.close();
          return;
        }
        if (b == null) {
          (o("WALogger")
            .WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-data-export: stream refused",
                ])),
            )
            .sendLogs("hatch-data-export-stream-refused"),
            k(E));
          return;
        }
        ((v = self.setTimeout(function () {
          I() &&
            (o("WALogger")
              .WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-data-export: timed out",
                  ])),
              )
              .sendLogs("hatch-data-export-timeout"),
            k(E));
        }, g)),
          (S = function () {
            return k(R);
          }),
          f.addEventListener("abort", S),
          f.aborted && k(R));
      });
    }
    function P(e) {
      return N(e) && M(e);
    }
    function N(e) {
      var t = [];
      for (var n of e)
        if (
          (t.push.apply(t, Array.from(n.subarray(0, 4 - t.length))),
          t.length === 4)
        )
          break;
      return y.some(function (e) {
        return e.every(function (e, n) {
          return t[n] === e;
        });
      });
    }
    function M(e) {
      for (var t = A(e, S), n = t.length - b; n >= 0; n--)
        if (w(t, n)) return !0;
      return !1;
    }
    function w(e, t) {
      if (
        !C.every(function (n, r) {
          return e[t + r] === n;
        })
      )
        return !1;
      var n = new DataView(e.buffer, e.byteOffset, e.byteLength).getUint16(
        t + v,
        !0,
      );
      return t + b + n === e.length;
    }
    function A(e, t) {
      for (
        var n = e.reduce(function (e, t) {
            return e + t.length;
          }, 0),
          r = new Uint8Array(Math.min(t, n)),
          o = r.length,
          a = e.length - 1;
        o > 0;
        a--
      ) {
        var i = e[a],
          l = i.subarray(Math.max(0, i.length - o));
        ((o -= l.length), r.set(l, o));
      }
      return r;
    }
    l.fetchHatchAgentData = I;
  },
  98,
);
