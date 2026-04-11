__d(
  "VoprfWasmBuilder",
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
                        return (
                          r("FBLogger")("VoprfWasmBuilder").mustfix(
                            "instantiateWasm failed with error: %s",
                            r("getErrorSafe")(e).message,
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
            var a = t._sodiumInit();
            (a !== 0 && n(r("err")("Failed to initialize Sodium!")),
              e({
                createCurveRistretto: function () {
                  var e = t._curve_create();
                  return (t._curve_init_ristretto(e), e);
                },
                freeCurve: function (n) {
                  t._curve_free(n);
                },
                createVoprfExpTwohashdh: function (n) {
                  var e = t._voprf_create();
                  return (t._voprf_init_exp_twohashdh(e, n), e);
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
                  var e = t._get_curve_element_bytes(n.curvePtr),
                    a = t._get_curve_scalar_bytes(n.curvePtr),
                    i = t._malloc(e),
                    l = t._malloc(a),
                    s = d(t, r),
                    u = t._blind(n.voprfPtr, i, e, l, a, s, r.length);
                  if (u !== 0)
                    throw (
                      t._free(i),
                      t._free(l),
                      t._free(s),
                      o("mapVoprfWasmError").mapVoprfWasmError(u)
                    );
                  var m = c(t, i, e),
                    p = c(t, l, a);
                  return (
                    t._free(i),
                    t._free(l),
                    t._free(s),
                    { blindedElement: m, blindingFactor: p }
                  );
                },
                verifiableUnblind: function (n, r, a, i, l, s, u, m) {
                  var e = r ? d(t, r) : null,
                    p = a ? d(t, a) : null,
                    _ = d(t, s),
                    f = d(t, i),
                    g = d(t, l),
                    h = d(t, u),
                    y = t._get_curve_element_bytes(n.curvePtr),
                    C = t._malloc(y),
                    b = t._verifiable_unblind(
                      n.voprfPtr,
                      C,
                      y,
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
                    throw (
                      e !== null && t._free(e),
                      p !== null && t._free(p),
                      t._free(_),
                      t._free(f),
                      t._free(g),
                      t._free(h),
                      t._free(C),
                      o("mapVoprfWasmError").mapVoprfWasmError(b)
                    );
                  var v = c(t, C, y);
                  return (
                    e !== null && t._free(e),
                    p !== null && t._free(p),
                    t._free(_),
                    t._free(f),
                    t._free(g),
                    t._free(h),
                    t._free(C),
                    { unblindedElement: v }
                  );
                },
                clientFinalize: function (n, r, a) {
                  var e = d(t, r),
                    i = d(t, a),
                    l = t._get_voprf_final_evaluation_bytes(n.voprfPtr),
                    s = t._malloc(l),
                    u = t._voprf_client_finalize(
                      n.voprfPtr,
                      s,
                      l,
                      e,
                      r.length,
                      i,
                      a.length,
                    );
                  if (u !== 0)
                    throw (
                      t._free(e),
                      t._free(i),
                      t._free(s),
                      o("mapVoprfWasmError").mapVoprfWasmError(u)
                    );
                  var m = c(t, s, l);
                  return (
                    t._free(e),
                    t._free(i),
                    t._free(s),
                    { finalEvaluation: m }
                  );
                },
                setup: function (n) {
                  var e = t._get_curve_scalar_bytes(n.curvePtr),
                    r = t._get_curve_element_bytes(n.curvePtr),
                    a = t._malloc(e),
                    i = t._malloc(r),
                    l = t._voprf_setup(n.voprfPtr, i, r, a, e);
                  if (l !== 0)
                    throw (
                      t._free(a),
                      t._free(i),
                      o("mapVoprfWasmError").mapVoprfWasmError(l)
                    );
                  var s = c(t, i, r),
                    u = c(t, a, e);
                  return (t._free(a), t._free(i), { sk: s, pk: u });
                },
                evaluate: function (n, r, a, i) {
                  var e = t._get_curve_element_bytes(n.curvePtr),
                    l = t._malloc(e),
                    s = i ? t._get_curve_scalar_bytes(n.curvePtr) : 0,
                    u = s > 0 ? t._malloc(s) : null,
                    m = i ? t._get_curve_scalar_bytes(n.curvePtr) : 0,
                    p = m > 0 ? t._malloc(m) : null,
                    _ = d(t, a),
                    f = d(t, r),
                    g = t._voprf_evaluate(
                      n.voprfPtr,
                      l,
                      e,
                      u,
                      s,
                      p,
                      m,
                      f,
                      r.length,
                      _,
                      a.length,
                      +i,
                    );
                  if (g !== 0)
                    throw (
                      t._free(l),
                      t._free(f),
                      u !== null && t._free(u),
                      p !== null && t._free(p),
                      t._free(_),
                      o("mapVoprfWasmError").mapVoprfWasmError(g)
                    );
                  var h = u !== null ? c(t, u, s) : null,
                    y = p !== null ? c(t, p, m) : null,
                    C = c(t, l, e);
                  return (
                    t._free(l),
                    t._free(f),
                    u !== null && t._free(u),
                    p !== null && t._free(p),
                    t._free(_),
                    { proofC: h, proofS: y, evaluatedElement: C }
                  );
                },
                serverFinalize: function (n, r, a) {
                  var e = d(t, r),
                    i = d(t, a),
                    l = t._get_voprf_final_evaluation_bytes(n.voprfPtr),
                    s = t._malloc(l),
                    u = t._voprf_server_finalize(
                      n.voprfPtr,
                      s,
                      l,
                      e,
                      r.length,
                      i,
                      a.length,
                    );
                  if (u !== 0)
                    throw (
                      t._free(e),
                      t._free(i),
                      t._free(s),
                      o("mapVoprfWasmError").mapVoprfWasmError(u)
                    );
                  var m = c(t, s, l);
                  return (
                    t._free(e),
                    t._free(i),
                    t._free(s),
                    { finalEvaluation: m }
                  );
                },
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
