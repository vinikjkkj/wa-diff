__d(
  "LSVoprfWasmBuilder",
  [
    "FBLogger",
    "Promise",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "mapVoprfWasmError",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return function (t) {
        var o =
          t.locateFile != null
            ? { locateFile: t.locateFile }
            : {
                instantiateWasm: (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e, n) {
                      try {
                        var o = yield t.getWasmModule(),
                          a = yield WebAssembly.instantiate(o, e);
                        return (n(a), {});
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
                  );
                  function o(t, n) {
                    return e.apply(this, arguments);
                  }
                  return o;
                })(),
              };
        return u(o, e);
      };
    }
    function u(t, a) {
      return new (e || (e = n("Promise")))(function (e, n) {
        a(t)
          .then(function (t) {
            var a,
              i = t._sodiumInit();
            (i !== 0 && n(r("err")("Failed to initialize Sodium!")),
              e({
                createCurveRistretto: function () {
                  var e;
                  try {
                    return (
                      (e = t._curve_create()),
                      t._curve_init_ristretto(e),
                      e
                    );
                  } catch (n) {
                    throw (e != null && t._curve_free(e), n);
                  }
                },
                freeCurve: function (n) {
                  t._curve_free(n);
                },
                createVoprfExpTwohashdh: function (n) {
                  var e;
                  try {
                    return (
                      (e = t._voprf_create()),
                      t._voprf_init_exp_twohashdh(e, n),
                      e
                    );
                  } catch (n) {
                    throw (e != null && t._voprf_free(e), n);
                  }
                },
                freeVoprf: function (n) {
                  t._voprf_free(n);
                },
                getCurveBytes: function (n) {
                  return t._get_curve_element_bytes(n.curvePtr);
                },
                getCurveScalarBytes: function (n) {
                  return t._get_curve_scalar_bytes(n.curvePtr);
                },
                blind: function (n, r) {
                  var e, a, i;
                  try {
                    var l = t._get_curve_element_bytes(n.curvePtr),
                      s = t._get_curve_scalar_bytes(n.curvePtr);
                    ((e = t._malloc(l)), (a = t._malloc(s)), (i = d(t, r)));
                    var u = t._blind(n.voprfPtr, e, l, a, s, i, r.length);
                    if (u !== 0)
                      throw o("mapVoprfWasmError").mapVoprfWasmError(u);
                    var m = c(t, e, l),
                      p = c(t, a, s);
                    return { blindedElement: m, blindingFactor: p };
                  } finally {
                    [e, a, i].forEach(function (e) {
                      e != null && t._free(e);
                    });
                  }
                },
                verifiableUnblind: function (n, r, a, i, l, s, u, m) {
                  var e, p, _, f, g, h, y;
                  try {
                    ((e = r ? d(t, r) : null),
                      (p = a ? d(t, a) : null),
                      (_ = d(t, s)),
                      (f = d(t, i)),
                      (g = d(t, l)),
                      (h = d(t, u)));
                    var C = t._get_curve_element_bytes(n.curvePtr);
                    y = t._malloc(C);
                    var b = t._verifiable_unblind(
                      n.voprfPtr,
                      y,
                      C,
                      e,
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
                      u.length,
                      +m,
                    );
                    if (b !== 0)
                      throw o("mapVoprfWasmError").mapVoprfWasmError(b);
                    var v = c(t, y, C);
                    return { unblindedElement: v };
                  } finally {
                    [e, p, _, f, g, h, y].forEach(function (e) {
                      e != null && t._free(e);
                    });
                  }
                },
                clientFinalize: function (n, r, a) {
                  var e, i, l;
                  try {
                    ((e = d(t, r)), (i = d(t, a)));
                    var s = t._get_voprf_final_evaluation_bytes(n.voprfPtr);
                    l = t._malloc(s);
                    var u = t._voprf_client_finalize(
                      n.voprfPtr,
                      l,
                      s,
                      e,
                      r.length,
                      i,
                      a.length,
                    );
                    if (u !== 0)
                      throw o("mapVoprfWasmError").mapVoprfWasmError(u);
                    var m = c(t, l, s);
                    return { finalEvaluation: m };
                  } finally {
                    [e, i, l].forEach(function (e) {
                      e != null && t._free(e);
                    });
                  }
                },
                setup: function (n) {
                  var e, r;
                  try {
                    var a = t._get_curve_scalar_bytes(n.curvePtr),
                      i = t._get_curve_element_bytes(n.curvePtr);
                    ((e = t._malloc(a)), (r = t._malloc(i)));
                    var l = t._voprf_setup(n.voprfPtr, r, i, e, a);
                    if (l !== 0)
                      throw o("mapVoprfWasmError").mapVoprfWasmError(l);
                    var s = c(t, r, i),
                      u = c(t, e, a);
                    return { sk: s, pk: u };
                  } finally {
                    [e, r].forEach(function (e) {
                      e != null && t._free(e);
                    });
                  }
                },
                evaluate: function (n, r, a, i) {
                  var e, l, s, u, m;
                  try {
                    var p = t._get_curve_element_bytes(n.curvePtr);
                    e = t._malloc(p);
                    var _ = i ? t._get_curve_scalar_bytes(n.curvePtr) : 0;
                    l = _ > 0 ? t._malloc(_) : null;
                    var f = i ? t._get_curve_scalar_bytes(n.curvePtr) : 0;
                    ((s = f > 0 ? t._malloc(f) : null),
                      (u = d(t, a)),
                      (m = d(t, r)));
                    var g = t._voprf_evaluate(
                      n.voprfPtr,
                      e,
                      p,
                      l,
                      _,
                      s,
                      f,
                      m,
                      r.length,
                      u,
                      a.length,
                      +i,
                    );
                    if (g !== 0)
                      throw o("mapVoprfWasmError").mapVoprfWasmError(g);
                    var h = l !== null ? c(t, l, _) : null,
                      y = s !== null ? c(t, s, f) : null,
                      C = c(t, e, p);
                    return { proofC: h, proofS: y, evaluatedElement: C };
                  } finally {
                    [e, l, s, u, m].forEach(function (e) {
                      e != null && t._free(e);
                    });
                  }
                },
                serverFinalize: function (n, r, a) {
                  var e, i, l;
                  try {
                    ((e = d(t, r)), (i = d(t, a)));
                    var s = t._get_voprf_final_evaluation_bytes(n.voprfPtr);
                    l = t._malloc(s);
                    var u = t._voprf_server_finalize(
                      n.voprfPtr,
                      l,
                      s,
                      e,
                      r.length,
                      i,
                      a.length,
                    );
                    if (u !== 0)
                      throw o("mapVoprfWasmError").mapVoprfWasmError(u);
                    var m = c(t, l, s);
                    return { finalEvaluation: m };
                  } finally {
                    [e, i, l].forEach(function (e) {
                      e != null && t._free(e);
                    });
                  }
                },
                wasmMemory: (a = t.wasmMemory) != null ? a : void 0,
              }));
          })
          .catch(function (e) {
            throw r("err")("Failed to initialize wasm module, " + e);
          });
      });
    }
    function c(e, t, n) {
      for (var r = new Uint8Array(n), o = 0; o < n; ++o)
        r[o] = e.getValue(o + t, "i8");
      return r;
    }
    function d(e, t) {
      var n = t.length,
        r = e._malloc(n);
      return (e.writeArrayToMemory(t, r), r);
    }
    l.default = s;
  },
  98,
);
