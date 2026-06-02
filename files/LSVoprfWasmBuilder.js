__d(
  "LSVoprfWasmBuilder",
  ["FBLogger", "err", "getErrorSafe", "mapVoprfWasmError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return function (t) {
        var n =
          t.locateFile != null
            ? { locateFile: t.locateFile }
            : {
                instantiateWasm: async function (n, o) {
                  try {
                    var e = await t.getWasmModule(),
                      a = await WebAssembly.instantiate(e, n);
                    return (o(a), {});
                  } catch (e) {
                    var i = r("getErrorSafe")(e);
                    return (
                      r("FBLogger")("LSVoprfWasmBuilder").mustfix(
                        "instantiateWasm failed with error: %s",
                        i.toString(),
                      ),
                      !1
                    );
                  }
                },
              };
        return s(n, e);
      };
    }
    function s(e, t) {
      return new Promise(function (n, a) {
        t(e)
          .then(function (e) {
            var t,
              i = e._sodiumInit();
            (i !== 0 && a(r("err")("Failed to initialize Sodium!")),
              n({
                createCurveRistretto: function () {
                  var t;
                  try {
                    return (
                      (t = e._curve_create()),
                      e._curve_init_ristretto(t),
                      t
                    );
                  } catch (n) {
                    throw (t != null && e._curve_free(t), n);
                  }
                },
                freeCurve: function (n) {
                  e._curve_free(n);
                },
                createVoprfExpTwohashdh: function (n) {
                  var t;
                  try {
                    return (
                      (t = e._voprf_create()),
                      e._voprf_init_exp_twohashdh(t, n),
                      t
                    );
                  } catch (n) {
                    throw (t != null && e._voprf_free(t), n);
                  }
                },
                freeVoprf: function (n) {
                  e._voprf_free(n);
                },
                getCurveBytes: function (n) {
                  return e._get_curve_element_bytes(n.curvePtr);
                },
                getCurveScalarBytes: function (n) {
                  return e._get_curve_scalar_bytes(n.curvePtr);
                },
                blind: function (n, r) {
                  var t, a, i;
                  try {
                    var l = e._get_curve_element_bytes(n.curvePtr),
                      s = e._get_curve_scalar_bytes(n.curvePtr);
                    ((t = e._malloc(l)), (a = e._malloc(s)), (i = c(e, r)));
                    var d = e._blind(n.voprfPtr, t, l, a, s, i, r.length);
                    if (d !== 0)
                      throw o("mapVoprfWasmError").mapVoprfWasmError(d);
                    var m = u(e, t, l),
                      p = u(e, a, s);
                    return { blindedElement: m, blindingFactor: p };
                  } finally {
                    [t, a, i].forEach(function (t) {
                      t != null && e._free(t);
                    });
                  }
                },
                verifiableUnblind: function (n, r, a, i, l, s, d, m) {
                  var t, p, _, f, g, h, y;
                  try {
                    ((t = r ? c(e, r) : null),
                      (p = a ? c(e, a) : null),
                      (_ = c(e, s)),
                      (f = c(e, i)),
                      (g = c(e, l)),
                      (h = c(e, d)));
                    var C = e._get_curve_element_bytes(n.curvePtr);
                    y = e._malloc(C);
                    var b = e._verifiable_unblind(
                      n.voprfPtr,
                      y,
                      C,
                      t,
                      r ? r.length : 0,
                      p,
                      a ? a.length : 0,
                      f,
                      i.length,
                      g,
                      l.length,
                      _,
                      s.length,
                      h,
                      d.length,
                      +m,
                    );
                    if (b !== 0)
                      throw o("mapVoprfWasmError").mapVoprfWasmError(b);
                    var v = u(e, y, C);
                    return { unblindedElement: v };
                  } finally {
                    [t, p, _, f, g, h, y].forEach(function (t) {
                      t != null && e._free(t);
                    });
                  }
                },
                clientFinalize: function (n, r, a) {
                  var t, i, l;
                  try {
                    ((t = c(e, r)), (i = c(e, a)));
                    var s = e._get_voprf_final_evaluation_bytes(n.voprfPtr);
                    l = e._malloc(s);
                    var d = e._voprf_client_finalize(
                      n.voprfPtr,
                      l,
                      s,
                      t,
                      r.length,
                      i,
                      a.length,
                    );
                    if (d !== 0)
                      throw o("mapVoprfWasmError").mapVoprfWasmError(d);
                    var m = u(e, l, s);
                    return { finalEvaluation: m };
                  } finally {
                    [t, i, l].forEach(function (t) {
                      t != null && e._free(t);
                    });
                  }
                },
                setup: function (n) {
                  var t, r;
                  try {
                    var a = e._get_curve_scalar_bytes(n.curvePtr),
                      i = e._get_curve_element_bytes(n.curvePtr);
                    ((t = e._malloc(a)), (r = e._malloc(i)));
                    var l = e._voprf_setup(n.voprfPtr, r, i, t, a);
                    if (l !== 0)
                      throw o("mapVoprfWasmError").mapVoprfWasmError(l);
                    var s = u(e, r, i),
                      c = u(e, t, a);
                    return { sk: s, pk: c };
                  } finally {
                    [t, r].forEach(function (t) {
                      t != null && e._free(t);
                    });
                  }
                },
                evaluate: function (n, r, a, i) {
                  var t, l, s, d, m;
                  try {
                    var p = e._get_curve_element_bytes(n.curvePtr);
                    t = e._malloc(p);
                    var _ = i ? e._get_curve_scalar_bytes(n.curvePtr) : 0;
                    l = _ > 0 ? e._malloc(_) : null;
                    var f = i ? e._get_curve_scalar_bytes(n.curvePtr) : 0;
                    ((s = f > 0 ? e._malloc(f) : null),
                      (d = c(e, a)),
                      (m = c(e, r)));
                    var g = e._voprf_evaluate(
                      n.voprfPtr,
                      t,
                      p,
                      l,
                      _,
                      s,
                      f,
                      m,
                      r.length,
                      d,
                      a.length,
                      +i,
                    );
                    if (g !== 0)
                      throw o("mapVoprfWasmError").mapVoprfWasmError(g);
                    var h = l !== null ? u(e, l, _) : null,
                      y = s !== null ? u(e, s, f) : null,
                      C = u(e, t, p);
                    return { proofC: h, proofS: y, evaluatedElement: C };
                  } finally {
                    [t, l, s, d, m].forEach(function (t) {
                      t != null && e._free(t);
                    });
                  }
                },
                serverFinalize: function (n, r, a) {
                  var t, i, l;
                  try {
                    ((t = c(e, r)), (i = c(e, a)));
                    var s = e._get_voprf_final_evaluation_bytes(n.voprfPtr);
                    l = e._malloc(s);
                    var d = e._voprf_server_finalize(
                      n.voprfPtr,
                      l,
                      s,
                      t,
                      r.length,
                      i,
                      a.length,
                    );
                    if (d !== 0)
                      throw o("mapVoprfWasmError").mapVoprfWasmError(d);
                    var m = u(e, l, s);
                    return { finalEvaluation: m };
                  } finally {
                    [t, i, l].forEach(function (t) {
                      t != null && e._free(t);
                    });
                  }
                },
                wasmMemory: (t = e.wasmMemory) != null ? t : void 0,
              }));
          })
          .catch(function (e) {
            throw r("err")("Failed to initialize wasm module, " + e);
          });
      });
    }
    function u(e, t, n) {
      for (var r = new Uint8Array(n), o = 0; o < n; ++o)
        r[o] = e.getValue(o + t, "i8");
      return r;
    }
    function c(e, t) {
      var n = t.length,
        r = e._malloc(n);
      return (e.writeArrayToMemory(t, r), r);
    }
    l.default = e;
  },
  98,
);
