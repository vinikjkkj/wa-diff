__d(
  "WAWebHatchDataExport",
  [
    "WALogger",
    "WAWebHatchDataControls",
    "WAWebHatchVmConnection",
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
      _ = 268435456,
      f = 3900 * 1e3,
      g = "application/zip",
      h = [
        [80, 75, 3, 4],
        [80, 75, 5, 6],
        [80, 75, 7, 8],
      ],
      y = [80, 75, 5, 6],
      C = 22,
      b = 20,
      v = C + 65535,
      S = { kind: "aborted" },
      R = { kind: "account_changed" },
      L = { kind: "failed", reason: "generic" },
      E = { kind: "failed", reason: "offline" };
    async function k(e, t) {
      var n = t === void 0 ? {} : t,
        r = n.maxBytes,
        a = r === void 0 ? _ : r,
        i = n.timeoutMs,
        l = i === void 0 ? f : i,
        s = o("WAWebHatchVmConnection").getHatchVmAccountGeneration(),
        u = await o("WAWebHatchDataControls").isHatchOffline();
      if (o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== s)
        return R;
      if (u) return E;
      var c = await o("WAWebHatchVmConnection").connectHatchVmApiWithResult(e);
      return o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== s
        ? R
        : e.aborted
          ? S
          : c.kind !== "ready"
            ? I(s)
            : T(c.api, {
                generation: s,
                maxBytes: a,
                signal: e,
                timeoutMs: l,
              }).then(function (e) {
                return e.kind === "failed" ? I(s) : e;
              });
    }
    async function I(e) {
      var t = await o("WAWebHatchDataControls").isHatchOffline();
      return o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== e
        ? R
        : t
          ? E
          : L;
    }
    function T(t, n) {
      var a = n.generation,
        i = n.maxBytes,
        l = n.signal,
        _ = n.timeoutMs;
      return new Promise(function (n) {
        var f = [],
          h = 0,
          y = !1,
          C = !1,
          b = null,
          v = null,
          E = null,
          k = function (t) {
            var e;
            ((C = !0),
              v != null && self.clearTimeout(v),
              E != null && l.removeEventListener("abort", E),
              (e = b) == null || e.close(),
              (f.length = 0),
              n(t));
          },
          I = function () {
            return C
              ? !1
              : o("WAWebHatchVmConnection").getHatchVmAccountGeneration() !== a
                ? (k(R), !1)
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
                    k(L))
                  : D(f)
                    ? k({ blob: new Blob(f, { type: g }), kind: "ready" })
                    : (o("WALogger")
                        .WARN(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "hatch-data-export: not a zip",
                            ])),
                        )
                        .sendLogs("hatch-data-export-invalid-zip"),
                      k(L)));
            },
            onData: function (t) {
              if (I()) {
                if (((h += t.length), h > i)) {
                  (o("WALogger")
                    .WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "hatch-data-export: over the size cap",
                        ])),
                    )
                    .sendLogs("hatch-data-export-too-large"),
                    k(L));
                  return;
                }
                f.push(t);
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
                    k(L));
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
            k(L));
          return;
        }
        if (C) {
          var x;
          (x = b) == null || x.close();
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
            k(L));
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
            k(L));
        }, _)),
          (E = function () {
            return k(S);
          }),
          l.addEventListener("abort", E),
          l.aborted && k(S));
      });
    }
    function D(e) {
      return x(e) && $(e);
    }
    function x(e) {
      var t = [];
      for (var n of e)
        if (
          (t.push.apply(t, Array.from(n.subarray(0, 4 - t.length))),
          t.length === 4)
        )
          break;
      return h.some(function (e) {
        return e.every(function (e, n) {
          return t[n] === e;
        });
      });
    }
    function $(e) {
      for (var t = N(e, v), n = t.length - C; n >= 0; n--)
        if (P(t, n)) return !0;
      return !1;
    }
    function P(e, t) {
      if (
        !y.every(function (n, r) {
          return e[t + r] === n;
        })
      )
        return !1;
      var n = new DataView(e.buffer, e.byteOffset, e.byteLength).getUint16(
        t + b,
        !0,
      );
      return t + C + n === e.length;
    }
    function N(e, t) {
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
    l.fetchHatchAgentData = k;
  },
  98,
);
